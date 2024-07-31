import { FastifyInstance } from "fastify";
import { prisma } from "../database/prisma";
import bcryptjs from "bcryptjs";
import User from "../interfaces/user-interface";
import UserParams from "../interfaces/user-interface";
import { verifyAutheticationToken } from "../middleware/verify-autheticationToken";
import { verifyUserPermission } from "../middleware/verify-user-permission";

export async function userRoutes(app: FastifyInstance) {
  app.post(
    "/",
    { onRequest: [verifyAutheticationToken, verifyUserPermission] },
    async (request, reply) => {
      const {
        name,
        company_name,
        cnpj,
        email,
        phone,
        password,
        isAdmin,
      }: User = request.body as User;

      const passwordHash = await bcryptjs.hash(password, 10);

      await prisma.user.create({
        data: {
          name,
          company_name,
          cnpj,
          email,
          phone,
          password: passwordHash,
          isAdmin,
        },
      });
      return reply.status(201).send("Usuário criado com sucesso!");
    }
  );

  app.get("/", async (request, reply) => {
    const users = await prisma.user.findMany({
      include: {
        Projects: true,
      },
    });

    return reply.status(200).send(users);
  });

  app.put(
    "/:id",
    {
      onRequest: [verifyAutheticationToken, verifyUserPermission],
    },
    async (request, reply) => {
      const { id } = request.params as UserParams;
      const {
        name,
        company_name,
        cnpj,
        email,
        phone,
        password,
        isAdmin,
      }: User = request.body as User;

      const existingUser = await prisma.user.findUnique({
        where: { id },
      });

      if (!existingUser) {
        return reply.status(404).send("Usuário não encontrado");
      }

      let passwordHash;
      if (password) {
        passwordHash = await bcryptjs.hash(password, 10);
      }

      await prisma.user.update({
        where: { id },
        data: {
          name,
          company_name,
          cnpj,
          email,
          phone,
          ...(password && { password: passwordHash }),
          isAdmin,
        },
      });
      return reply.status(200).send("Usuário atualizado com sucesso!");
    }
  );

  app.delete(
    "/:id",
    { onRequest: [verifyAutheticationToken, verifyUserPermission] },
    async (request, reply) => {
      const { id } = request.params as UserParams;
      const existingUser = await prisma.user.findUnique({
        where: { id },
      });
      if (!existingUser) {
        return reply.status(404).send("Usuário não encontrado");
      }
      const userHaveProjects = await prisma.projects.count({
        where: { userId: id },
      });

      if (userHaveProjects > 0) {
        return reply
          .status(400)
          .send("Usuário não pode ser deletado, possui projetos associados");
      }
      await prisma.user.delete({
        where: { id },
      });
      return reply.status(200).send("Usuário deletado com sucesso!");
    }
  );
}
