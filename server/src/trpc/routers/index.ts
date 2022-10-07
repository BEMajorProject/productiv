import { z } from "zod";

import { initTRPC } from "@trpc/server";
import { prisma } from "../../db";

export const t = initTRPC.create();

export const appRouter = t.router({
  meow: t.procedure.query(() => {
    return { message: `Hello Mubin` };
  }),
  hello: t.procedure.input(z.object({ text: z.string() })).query((req) => {
    return { message: `Hello ${req.input?.text || "Mubin"}` };
  }),
  getUser: t.procedure.input(z.string()).query((req) => {
    req.input; // string
    return { id: req.input, name: "Bilbo" };
  }),
  // was testing with my own db
  // getAllMyQuestions: t.procedure.query(async () => {
  //   return await prisma.pollQuestion.findMany();
  // }),
});

export type AppRouter = typeof appRouter;
