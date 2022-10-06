import { z } from "zod";

import { initTRPC } from "@trpc/server";

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
});

export type AppRouter = typeof appRouter;
