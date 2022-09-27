import * as trpc from "@trpc/server";
import { z } from "zod";
import { Context } from "../../context";

// [...]

export const appRouter = trpc
  .router<Context>()
  .query("hello", {
    input: z
      .object({
        text: z.string().nullish(),
      })
      .nullish(),
    resolve({ input }) {
      return {
        greeting: `hello ${input?.text ?? "world"}`,
      };
    },
  })
  .query("test", {
    resolve() {
      return {
        message: "Karthik",
      };
    },
  });

export type AppRouter = typeof appRouter;
