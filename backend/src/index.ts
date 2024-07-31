import fastify from "fastify";
import { userRoutes } from "./routes/user-routes";
import { projectRoutes } from "./routes/project-routes";
import { sessionRoutes } from "./routes/sessions-routes";

import fastifyJwt from "@fastify/jwt";
import { contactFormRoutes } from "./routes/contact-form-routes";

const app = fastify();
app.register(fastifyJwt, {
  secret: "$2a$12$G.qbB.AnXFCcAz.Yzoh9YOwEMniIcIqWXluPN7GUOSMadKnTJTeUC",
});

app.register(userRoutes, {
  prefix: "users",
});
app.register(projectRoutes, {
  prefix: "projects",
});
app.register(sessionRoutes, {
  prefix: "sessions",
});
app.register(contactFormRoutes, {
  prefix: "contactForms",
});

app
  .listen({
    port: 8080,
  })
  .then(() => {
    console.log("Servidor rodando na porta 8080");
  });
