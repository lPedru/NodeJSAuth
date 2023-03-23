import HttpRepository from '../IHttpRepository';
import Fastify, { FastifyInstance } from "fastify";

const fastify = Fastify({ logger: true });

import { routes } from './routes/randomroute';

export class FastifyRepository implements HttpRepository {
  instance: FastifyInstance = fastify;
  port: number = 3000;

  // Use constructor to register the routes
  constructor() {
    this.instance.register(routes);
  }

  async start(): Promise<void> {
    try {
      await fastify.listen({ port: 3000 });
      fastify.log.info(`Server listening on port 3000`);
    } catch (err) {
      fastify.log.error(err);
      process.exit(1);
    }
  }
  
}