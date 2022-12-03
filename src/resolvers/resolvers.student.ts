import { compare, hash } from "bcryptjs";
import { verify } from "jsonwebtoken";

import { context, Context } from "../context/context.global";

import { StudentCreateInput } from "./interface/interface.student";

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
        const hashedPassword = await hash(args.data.password, 12);
        try {
          const studentFound = await context.prisma.student.create({
            data: {
              IdStudent: args.data.IdStudent,
              email: args.data?.email,
              firstName: args.data.firstName,
              lastName: args.data.lastName,
              password: hashedPassword,
              telephone: args.data.telephone,
            },
          });

          return studentFound;
        } catch (err) {
          console.log(err);
          return false;
        }
      } else {
        throw new Error("this student already exist");
      }
    },
  },

  Query: {
    allStudent: (_parent: any, _args: any, context: Context) => {
      return context.prisma.student.findMany({});
    },
  },
};
