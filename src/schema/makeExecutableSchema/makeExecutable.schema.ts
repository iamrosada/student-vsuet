import { makeExecutableSchema } from "@graphql-tools/schema";
import { merge } from "lodash";

import { typeDefs as student } from "../student/schema.student";
import { resolvers as resolverStudent } from "../../resolvers/studentResolver/resolvers.student";

export const schemas = makeExecutableSchema({
  typeDefs: [student],
  resolvers: merge(resolverStudent),
});
