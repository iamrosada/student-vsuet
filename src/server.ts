import { ApolloServer } from "apollo-server";
import { createContext } from "./context";
import { schemas } from "./schema/makeExecutableSchema/makeExecutable.schema";

const server = new ApolloServer({
  schema: schemas,
  context: createContext,
});

server.listen().then(({ url }) =>
  console.log(
    `\
🚀 Server ready at: ${url}
⭐️ See sample queries: http://pris.ly/e/ts/graphql-auth#using-the-graphql-api`
  )
);
