import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
// import { CreateCustomerController } from "../controllers/CreateCustomerController";
// import { ListCustomerController } from "../controllers/ListCustomerController";
// import { DeleteCustomerController } from "../controllers/DeleteCustomerController";
// import { EditCustomerController } from "../controllers/EditCustomerController";

export async function routes(fastify: FastifyInstance) {
  fastify.post(
    "/create-account",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return null;
    }
  );
  fastify.get(
    "/moments",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return { message: "Hello World" };
    }
  );
  fastify.delete(
    "/customer/:id",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return null;
    }
  );
  fastify.put("/customer/:id", async (request, reply) => {
    return null;
  });
}
// Ivo começa o desenvolvimento pelo serviço //
// rotas -> controllers -> services ->  db //
// CRUD -> CREATE(post) / READ(get) / UPDATE(put) DELETE(delete)
