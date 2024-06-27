import cookie from "@fastify/cookie";
import { transactionsRoutes } from "./routes/transactions";
import fastify from "fastify";

export const app = fastify();

app.register(cookie);

app.register(transactionsRoutes, {
  prefix: "transactions",
});
