import gql from "graphql-tag";

export const typeDefs = gql`
  type Mutation {
    createLanguage(data: CreateInputLanguage!): Language
  }

  type Language {
    id: Int
    nativeLanguage: String
    otherLanguage: String
  }

  input CreateInputLanguage {
    nativeLanguage: String
    otherLanguage: String
  }
`;
