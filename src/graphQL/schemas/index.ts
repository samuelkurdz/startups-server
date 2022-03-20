import { buildSchema } from "graphql";
import { userQuerySchema } from "./users.schema";

export const schemas = buildSchema(
  `
  ${userQuerySchema}
  `
);