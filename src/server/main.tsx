import { renderSSR } from "nano-jsx/esm/index.js";
import { initSSR } from "nano-jsx/esm/ssr.js";
import Home from "../views/pages/Home.js";
import { join, resolve } from "path";
import Info from "../views/pages/Info.js";
import RandomInfo from "../views/components/RandomInfo.js";
import { Server } from "hyper-express";
import LiveDirectory from "live-directory";

type initHttpServerParams = {
	liveDirectory?: LiveDirectory;
};
async function initHttpServer(params: initHttpServerParams = {}) {
	const server = new Server();

	if (params.liveDirectory) {
		const liveDirectory = params.liveDirectory;
		server.get("/public/*", (request, response) => {
			const path = resolve(process.cwd(), join("dist", request.path));
			const file = liveDirectory.get(path);
			if (!file) {
				return response.status(404).send();
			}

			const content = file.content;
			const ext = path.split(".").pop()!;
			if (content instanceof Buffer) {
				return response.type(ext).send(content);
			} else {
				return response.type(ext).stream(content);
			}
		});
	}

	return server;
}

function mapViewRoutes(fastify: Awaited<ReturnType<typeof initHttpServer>>) {
	fastify.get("/", async function handler(_request, response) {
		return response.type("text/html").send(renderSSR(() => <Home />));
	});

	fastify.get("/info", async (_request, response) => {
		return response.type("text/html").send(renderSSR(() => <Info />));
	});
}

function mapApiRoutes(fastify: Awaited<ReturnType<typeof initHttpServer>>) {
	fastify.get("/api/random-info", async (_request, response) => {
		return response.send(renderSSR(() => <RandomInfo />));
	});
}

async function main() {
	initSSR();

	const liveDirectory = new LiveDirectory("", {
		filter: {
			keep: {
				extensions: ["css", "js"],
			},
			ignore: (path) => path.startsWith("."),
		},
		cache: {
			max_file_count: 250,
			max_file_size: 1024 * 1024,
		},
	});

	const server = await initHttpServer({ liveDirectory });
	mapViewRoutes(server);
	mapApiRoutes(server);

	const PORT = 3000;
	await server.listen(PORT);
	console.log(`Server is listening on port ${PORT}`);
}

main();
