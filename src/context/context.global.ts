import { request, Request, response, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export interface Context {
  prisma: PrismaClient;
  req: Request;
  res: Response;
  payload?: { adminId: string };
}

export const context: Context = {
  prisma: prisma,
  req: request,
  res: response,
};
export function createContext(req: any) {
  return {
    ...req,
    prisma,
  };
}
