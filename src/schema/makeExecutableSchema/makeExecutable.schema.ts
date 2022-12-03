import { makeExecutableSchema } from "@graphql-tools/schema";
import { merge } from "lodash";

import { typeDefs as student } from "../schema.student";
import { resolvers as resolverStudent } from "../../resolvers/resolvers.student";

export const schemas = makeExecutableSchema({
  typeDefs: [student],
  resolvers: merge(resolverStudent),
});
