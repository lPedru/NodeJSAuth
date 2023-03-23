import { FastifyRepository } from "./infra/http/fastify/FastifyRepository";

const fastify = new FastifyRepository();
fastify.start();
