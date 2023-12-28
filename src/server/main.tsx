import Fastify from "fastify";
import { renderSSR } from "nano-jsx/esm/index.js";
import { initSSR } from "nano-jsx/esm/ssr.js";
import { Home } from "../views/pages/home.js";
import { resolve } from "path";

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

function mapRoutes(fastify: Awaited<ReturnType<typeof initFastifyApp>>) {
	fastify.get("/", async function handler(_request, reply) {
		return reply.type("text/html").send(renderSSR(() => <Home />));
	});
}

async function main() {
	initSSR();

	const fastify = await initFastifyApp();
	mapRoutes(fastify);

	await fastify.listen({ port: 3000 });
}

main();
