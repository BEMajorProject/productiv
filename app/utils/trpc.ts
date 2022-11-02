import { createTRPCReact } from "@trpc/react";
import type { AppRouter } from "../../server/src/trpc/routers";
export const trpc = createTRPCReact<AppRouter>();
