import gql from "graphql-tag";

export const typeDefs = gql`
  type Mutation {
    createStudent(data: StudentCreateInput!): Student

    updateStudent(data: StudentUpdateInput): Student
    deleteStudent(data: DeleteInput!): IsDeleted

    createLanguage(data: CreateInputLanguage!): Student
    createCourse(data: CreateInputCourse!): Student
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
  type Course {
    id: Int
    graduation: String
    mastersDegree: String
  }
  input CreateInputCourse {
    graduation: String
    mastersDegree: String
  }
  type TotalStudent {
    totalStudent: Int
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

    languages: [Language]
    courses: [Course]
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

    whereDidThePreparatory: String
    group: String

    languages: CreateInputLanguage
    courses: CreateInputCourse
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
    whereLive: String
    fullNameInLatin: String
    diplomIsRed: Boolean

    whereDidThePreparatory: String
    group: String

    languages: [CreateInputLanguage]
    courses: [CreateInputCourse]
  }
  # type AuthPayload {
  #   token: String
  #   admin: Admin
  #   doctor: Doctor
  #   Student: Student
  # }

  type Query {
    allStudent: [Student!]!

    findStudentByYearStartAndFinish(
      ageStart: String
      ageFinish: String
    ): [Student]!

    findStudentByCountry(nameCountry: String): [Student]!

    findHowManyStudentFromAnyCountry(nameCountry: String): TotalStudent

    findStudentWithRedDiplome(nameCountry: String): [Student]!
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
