import * as trpcExpress from "@trpc/server/adapters/express";
import express from "express";
import { appRouter } from "./trpc/routers/index";
import { createContext } from "./context";
import { Headers } from "./middleware/Headers";
import config from "./config/index";
import Logger from "./middleware/Logger";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(Headers);
app.use(Logger);

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

// app.get("/", (req, res) => res.send("Express + Prisma + tRPC + tRPC Shield"));

app.get("/", (req, res) =>
  res.json({ data: "Express + Prisma + tRPC + tRPC Shield" })
);


app.listen(config.PORT, () => {
  console.log(`Server listening at http://${config.HOST}:${config.PORT}`);
});
