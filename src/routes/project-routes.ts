import { FastifyInstance } from "fastify";
import { prisma } from "../database/prisma";
import { verifyAutheticationToken } from "../middleware/verify-autheticationToken";
import { verifyUserPermission } from "../middleware/verify-user-permission";
import ProjectRequest from "../interfaces/project-interface";
import ProjectParams from "../interfaces/project-interface";
import ProjectUpdate from "../interfaces/project-interface";

export async function projectRoutes(app: FastifyInstance) {
  app.post(
    "/",
    { onRequest: [verifyAutheticationToken, verifyUserPermission] },
    async (request, reply) => {
      const { name, cnpj, userId }: ProjectRequest =
        request.body as ProjectRequest;

      await prisma.projects.create({
        data: {
          name,
          cnpj,
          userId,
        },
      });

      return reply.status(201).send("Projeto criado com sucesso!");
    }
  );

  app.get("/", async (request, reply) => {
    const projects = await prisma.projects.findMany({
      include: {
        user: true,
      },
    });
    return reply.status(200).send(projects);
  });

  app.put(
    "/:id",
    {
      onRequest: [verifyAutheticationToken, verifyUserPermission],
    },
    async (request, reply) => {
      const { id } = request.params as ProjectParams;
      const { status, progress, updatedAt }: ProjectUpdate =
        request.body as ProjectUpdate;

      const existingProject = await prisma.projects.findUnique({
        where: { id },
      });

      if (!existingProject) {
        return reply.status(404).send({ message: "Projeto não encontrado!" });
      }

      await prisma.projects.update({
        where: { id },
        data: {
          status,
          progress,
          updatedAt,
        },
      });
      return reply.status(200).send("Projeto atualizado com sucesso!");
    }
  );

  app.delete(
    "/:id",
    { onRequest: [verifyAutheticationToken, verifyUserPermission] },
    async (request, reply) => {
      const { id } = request.params as ProjectParams;
      const existingProject = await prisma.projects.findUnique({
        where: { id },
      });
      if (!existingProject) {
        return reply.status(404).send({ message: "Projeto não encontrado!" });
      }
      await prisma.projects.delete({
        where: { id },
      });
      return reply.status(200).send("Projeto excluído com sucesso!");
    }
  );
}
