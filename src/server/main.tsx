import { Component, Fragment } from "nano-jsx";
import Fastify from "fastify";
import { renderSSR } from "nano-jsx";
import { initSSR } from "nano-jsx/lib/ssr.js";
import { Home } from "../components/home";
import { resolve } from "path";

async function main() {
	initSSR();

	const fastify = Fastify({
		logger: true,
	});

	await fastify.register(import("@fastify/compress"));

	await fastify.register(import("@fastify/static"), {
		root: resolve(process.cwd(), "dist/server/public"),
		prefix: "/public/",
	});

	fastify.get("/", async function handler(request, reply) {
		return reply.type("text/html").send(renderSSR(() => <Home />));
	});

	await fastify.listen({ port: 3000 });
}

main();
