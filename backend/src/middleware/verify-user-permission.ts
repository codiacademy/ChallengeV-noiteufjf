import { FastifyRequest, FastifyReply } from "fastify";
import User from "../interfaces/user-interface";

export async function verifyUserPermission(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { isAdmin } = request.user as User;

  if (!isAdmin) {
    return reply.status(401).send({ message: "Usuário sem permissão!" });
  }
}
