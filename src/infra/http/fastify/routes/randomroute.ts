import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify"
import fastifyJwt from '@fastify/jwt';
import env from '../../../../config/dotEnvConf'

const myCustomMessages = {
  badRequestErrorMessage: 'Format is Authorization: Bearer [token]',
  badCookieRequestErrorMessage: 'Cookie could not be parsed in request',
  noAuthorizationInHeaderMessage: 'Autorization header is missing!',
  noAuthorizationInCookieMessage: 'No Authorization was found in request.cookies',
  authorizationTokenExpiredMessage: 'Authorization token expired',
  authorizationTokenUntrusted: 'Untrusted authorization token',
  authorizationTokenUnsigned: 'Unsigned authorization token'
  // for the below message you can pass a sync function that must return a string as shown or a string
  //authorizationTokenInvalid: (err) => {
  //  return `Authorization token is invalid: ${err.message}`
  //}
}

async function teste(req: FastifyRequest, reply: FastifyReply) {
  try {
    await req.jwtVerify()
  } catch (err) {
    reply.send(err)
  }
}

export async function routes (fastify: FastifyInstance, options: Object) {
  fastify.register(fastifyJwt, { secret: env.SECRET_KEY });

  fastify.post('/signup', (req, reply) => {
    const token = fastify.jwt.sign({ oi: 'oi' });
    reply.send({ token });
  });

  fastify.get('/', { onRequest: teste}, async (req: FastifyRequest, res: FastifyReply) => {
    return req.user;
  });
}
