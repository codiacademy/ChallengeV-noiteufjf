import { FastifyInstance } from "fastify";
import { prisma } from "../database/prisma";
import { verifyAutheticationToken } from "../middleware/verify-autheticationToken";
import { verifyUserPermission } from "../middleware/verify-user-permission";
import type ContactForm from "../interfaces/contact-form-interface";
import type ContactFormParams from "../interfaces/contact-form-interface";

export async function contactFormRoutes(app: FastifyInstance) {
  app.post("/", async (request, reply) => {
    const { company_name, name, office, email, message }: ContactForm =
      request.body as ContactForm;
    await prisma.contactForm.create({
      data: {
        company_name,
        name,
        office,
        email,
        message,
      },
    });
    return reply.status(201).send("Mensagem enviada com sucesso!");
  });

  app.get(
    "/",
    {
      onRequest: [verifyAutheticationToken, verifyUserPermission],
    },
    async (request, reply) => {
      const contactForms = await prisma.contactForm.findMany();
      if (contactForms.length === 0) {
        return reply.status(404).send("Nenhuma mensagem encontrada!");
      }
      return reply.status(200).send(contactForms);
    }
  );

  app.delete(
    "/:id",
    { onRequest: [verifyAutheticationToken, verifyUserPermission] },
    async (request, reply) => {
      const { id }: ContactFormParams = request.params as ContactFormParams;
      await prisma.contactForm.delete({
        where: { id },
      });
      return reply.status(200).send("Mensagem deletada com sucesso!");
    }
  );
}
