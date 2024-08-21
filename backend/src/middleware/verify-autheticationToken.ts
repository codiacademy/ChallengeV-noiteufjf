import { FastifyRequest, FastifyReply } from "fastify";

export async function verifyAutheticationToken(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    await request.jwtVerify();
  } catch (error) {
    if (error) {
      return reply.status(401).send({ message: "Token inválido!" });
    }
  }
}
