import { FastifyInstance, FastifyPluginAsync, FastifyReply, FastifyRequest } from "fastify"
import fastifyJwt from '@fastify/jwt';
import fp from 'fastify-plugin';
import env from '../../../../config/dotEnvConf'


export default fp(async function(fastify: FastifyInstance, opts: Object) {
  
  
  fastify.decorate("authenticate", async function(request: FastifyRequest, reply: FastifyReply) {
    try {
      await request.jwtVerify()
    } catch (err) {
      reply.send(err)
    }
  })
});