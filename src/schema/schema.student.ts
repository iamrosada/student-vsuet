import gql from "graphql-tag";

export const typeDefs = gql`
  type Mutation {
    createStudent(data: StudentCreateInput!): Student
    # loginStudent(data: StudentLoginInput!): AuthPayload
    updateStudent(data: StudentUpdateInput): Student
    deleteStudent(data: DeleteInput!): IsDeleted
  }
  type Student {
    email: String
    id: Int
    telephone: String
    password: String
    IdStudent: String
    firstName: String
    lastName: String
  }

  input StudentCreateInput {
    email: String
    telephone: String
    IdStudent: String
    firstName: String
    lastName: String
    password: String
  }
  input StudentLoginInput {
    IdStudent: String!
    password: String!
  }
  input StudentUpdateInput {
    password: String
    id: Int
    email: String
    telephone: String
    IdStudent: String
    firstName: String
    lastName: String
  }
  # type AuthPayload {
  #   token: String
  #   admin: Admin
  #   doctor: Doctor
  #   Student: Student
  # }

  type Query {
    allStudent: [Student!]!
  }
  type StudentDeleteInput {
    id: Int!
  }
  type IsDeleted {
    yes_or_not: String
  }
  input DeleteInput {
    id: Int!
  }
`;
