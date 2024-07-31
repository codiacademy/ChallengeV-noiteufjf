import { prisma } from "../database/prisma";
import { FastifyInstance } from "fastify";
import bcryptjs from "bcryptjs";
import { jwtConfig } from "../config/auth";
import UserLogin from "../interfaces/user-interface";

export async function sessionRoutes(app: FastifyInstance) {
  app.post("/", async (request, reply) => {
    const { email, password }: UserLogin = request.body as UserLogin;

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return reply.status(404).send("Email ou senha inválidos");
    }

    const passwordMatch = bcryptjs.compareSync(password, user?.password);

    if (!passwordMatch) {
      return reply.status(401).send("Email ou senha inválidos");
    }

    const token = await reply.jwtSign(
      { name: user.name, email: user.email, isAdmin: user.isAdmin },
      { sign: { sub: user.id, expiresIn: jwtConfig.expiresIn } }
    );

    return reply.status(200).send({
      token,
      user: { name: user.name, email: user.email, isAdmin: user.isAdmin },
    });
  });
}
