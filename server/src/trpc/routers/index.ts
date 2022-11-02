import { z } from "zod";

import { initTRPC } from "@trpc/server";
import { prisma } from "../../db";

export const t = initTRPC.create();

const ZTask = z.object({
  backgroundColor: z.string(),
  borderColor: z.string(),
  labels: z.array(z.string()).optional(),
  title: z.string(),
  dateTime: z.string().or(z.date()),
  taskId: z.string(),
});

type ITask = z.infer<typeof ZTask>;

let TASKS: ITask[] = [
  // {
  //   backgroundColor: "#4BEED1",
  //   borderColor: "#1AA58C",
  //   labels: ["School", "Everyday"],
  //   title: "Finish this project",
  //   dateTime: new Date(),
  //   taskId: "1",
  // },
  // {
  //   backgroundColor: "#FCE114",
  //   borderColor: "#E1CB13",
  //   labels: ["Enjoy"],
  //   title: "Eat some food",
  //   dateTime: new Date(),
  //   taskId: "2",
  // },
  // {
  //   backgroundColor: "#46D2EF",
  //   borderColor: "#59C7DE",
  //   labels: ["Life", "Everyday"],
  //   title: "Get some rest",
  //   dateTime: new Date(),
  //   taskId: "3",
  // },
  // {
  //   backgroundColor: "#B7ADFF",
  //   borderColor: "#A59CE6",
  //   labels: ["Study", "University"],
  //   title: "Go to College",
  //   dateTime: new Date(),
  //   taskId: "4",
  // },
];

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
  getTasks: t.procedure.query(() => {
    return { tasks: TASKS };
  }),
  addTask: t.procedure.input(z.object({ task: ZTask })).mutation((req) => {
    const task = req.input.task;
    TASKS.push(task);
    return { tasks: TASKS };
  }),
  deleteTask: t.procedure.input(z.string()).mutation((req) => {
    const taskId = req.input;
    console.log(taskId);
    TASKS = TASKS.filter((task) => task.taskId !== taskId);
    console.log(TASKS);
    return { tasks: TASKS };
  }),
  editTask: t.procedure.input(ZTask).mutation((req) => {
    const task = req.input;
    const taskIndex = TASKS.findIndex((_task) => _task.taskId === task.taskId);
    TASKS[taskIndex] = { ...task };
    return { tasks: TASKS };
  }),
  // was testing with my own db
  // getAllMyQuestions: t.procedure.query(async () => {
  //   return await prisma.pollQuestion.findMany();
  // }),
});

export type AppRouter = typeof appRouter;

// query - GET
// POST, UPDATE, PATCH - mutation

// 0.9340195719574516
// 0.9340195719574516
