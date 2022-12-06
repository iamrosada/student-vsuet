import gql from "graphql-tag";

export const typeDefs = gql`
  type Mutation {
    createStudent(data: StudentCreateInput!): Student

    updateStudent(data: StudentUpdateInput): Student
    deleteStudent(data: DeleteInput!): IsDeleted

    createLanguage(data: CreateInputLanguage!): Language
    createCourse(data: CreateInputCourse!): Course
  }

  type Language {
    id: Int
    language: String
    nativeLanguage: String
    otherLanguage: String
  }
  input CreateInputLanguage {
    language: String
    nativeLanguage: String
    otherLanguage: String
  }
  type Course {
    id: Int
    course: String
    graduation: String
    mastersDegree: String
  }
  input CreateInputCourse {
    course: String
    graduation: String
    mastersDegree: String
  }

  type Student {
    email: String
    id: Int
    telephone: String
    password: String
    IdStudent: String
    firstName: String
    lastName: String

    ageStart: String
    ageFinish: String
    country: String
    whereLive: String
    fullNameInLatin: String
    diplomIsRed: Boolean

    whereDidThePreparatory: String
    group: String
    language: [Language]
    course: [Course]
  }

  input StudentCreateInput {
    email: String
    telephone: String
    IdStudent: String
    firstName: String
    lastName: String

    ageStart: String
    ageFinish: String
    country: String
    whereLive: String
    fullNameInLatin: String
    diplomIsRed: Boolean

    language: CreateInputLanguage
    whereDidThePreparatory: String
    group: String
    course: CreateInputCourse
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

    ageStart: String
    ageFinish: String
    country: String
    language: [CreateInputLanguage]
    whereLive: String
    fullNameInLatin: String
    diplomIsRed: Boolean

    whereDidThePreparatory: String
    group: String
    course: [CreateInputCourse]
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
