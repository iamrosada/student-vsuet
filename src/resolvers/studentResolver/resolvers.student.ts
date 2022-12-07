import { compare, hash } from "bcryptjs";
import { argsToArgsConfig } from "graphql/type/definition";
import { verify } from "jsonwebtoken";
import { context, Context } from "../../context/context.global";
import {
  StudentCreateInput,
  StudentUpdateInput,
} from "../interface/interface.student";

export const resolvers = {
  Mutation: {
    createStudent: async (
      _: any,
      args: { data: StudentCreateInput },
      context: Context
    ) => {
      const student = await context.prisma.student.findFirst({
        where: { IdStudent: args.data.IdStudent },
      });
      if (student === null) {
        try {
          const studentFound = await context.prisma.student.create({
            data: {
              IdStudent: args.data.IdStudent,
              email: args.data?.email,
              firstName: args.data.firstName,
              lastName: args.data.lastName,
              telephone: args.data.telephone,

              ageStart: args.data.ageStart,
              ageFinish: args.data.ageFinish,
              country: args.data.country,
              whereLive: args.data.whereLive,
              fullNameInLatin: args.data.fullNameInLatin,
              diplomIsRed: args.data.diplomIsRed,

              whereDidThePreparatory: args.data.whereDidThePreparatory,
              group: args.data.group,

              courses: {
                create: [
                  {
                    graduation: args.data.courses.graduation,
                    mastersDegree: args.data.courses.mastersDegree,
                  },
                ],
              },

              languages: {
                create: [
                  {
                    nativeLanguage: args.data.languages.nativeLanguage,
                    otherLanguage: args.data.languages.otherLanguage,
                  },
                ],
              },
            },
            include: {
              courses: {
                select: {
                  courseId: true,
                  formation: true,
                  graduation: true,
                  mastersDegree: true,
                },
              },
              languages: true,
            },
          });
          console.log("studentFound", studentFound);
          return studentFound;
        } catch (err) {
          console.log(err);
          return false;
        }
      } else {
        throw new Error("этот студент уже существует");
      }
    },
    updateStudent: async (
      _: any,
      args: { data: StudentUpdateInput; id: number; token: string },
      context: Context
    ) => {
      try {
        const updatePatient = await context.prisma.student.update({
          where: { IdStudent: args.data.IdStudent },
          data: {
            email: args.data.email,
            firstName: args.data.firstName,
            lastName: args.data.lastName,
            telephone: args.data.telephone,
          },
        });
        return updatePatient;
      } catch (err) {
        console.log(err);
        return false;
      }
    },
  },

  Query: {
    allStudent: (_parent: any, _args: any, context: Context) => {
      return context.prisma.student.findMany({
        include: {
          courses: true,
          languages: {
            select: {
              nativeLanguage: true,
              otherLanguage: true,
            },
          },
        },
      });
    },
    findStudentByYearStartAndFinish: (
      _parent: any,
      args: { ageFinish: string; ageStart: string },
      context: Context
    ) => {
      return context.prisma.student.findMany({
        where: {
          ageFinish: args.ageFinish,
          ageStart: args.ageStart,
        },
        include: {
          courses: true,
          languages: true,
        },
      });
    },
    findStudentByCountry: (
      _parent: any,
      args: { nameCountry: string },
      context: Context
    ) => {
      return context.prisma.student.findMany({
        where: {
          country: args.nameCountry,
        },
        include: {
          courses: true,
          languages: true,
        },
      });
    },
  },
};
