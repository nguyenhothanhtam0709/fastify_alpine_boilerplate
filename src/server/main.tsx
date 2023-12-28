import Fastify from "fastify";
import { renderSSR } from "nano-jsx/esm/index.js";
import { initSSR } from "nano-jsx/esm/ssr.js";
import { Home } from "../views/pages/home.js";
import { resolve } from "path";
import { Info } from "../views/pages/info.js";
import { RandomInfo } from "../views/components/random-info.js";

async function initFastifyApp() {
	const fastify = Fastify({
		logger: true,
	});

	await fastify.register(import("@fastify/compress"));

	await fastify.register(import("@fastify/static"), {
		root: resolve(process.cwd(), "dist/public"),
		prefix: "/public/",
	});

	return fastify;
}

function mapViewRoutes(fastify: Awaited<ReturnType<typeof initFastifyApp>>) {
	fastify.get("/", async function handler(_request, reply) {
		return reply.type("text/html").send(renderSSR(() => <Home />));
	});

	fastify.get("/info", async (_request, reply) => {
		return reply.type("text/html").send(renderSSR(() => <Info />));
	});
}

function mapApiRoutes(fastify: Awaited<ReturnType<typeof initFastifyApp>>) {
	fastify.get("/api/random-info", async (_request, reply) => {
		return reply.send(renderSSR(() => <RandomInfo />));
	});
}

async function main() {
	initSSR();

	const fastify = await initFastifyApp();
	mapViewRoutes(fastify);
	mapApiRoutes(fastify);

	await fastify.listen({ port: 3000, host: "0.0.0.0" });
}

main();
