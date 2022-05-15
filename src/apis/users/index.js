import express from "express";
import fs from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import uniqid from "uniqid";
import { checkPostSchema, checkPostValidationResult } from "./validation.js";
import { getUsers, writeUsers } from "../../lib/fs-tools.js";
import { checkCommentSchema } from "./validation.js";
import path from "path";

const usersRouter = express.Router();

usersRouter.post("/", async (request, response, next) => {
  try {
    const newUser = {
      ...request.body,
      createdAt: new Date(),
      id: uniqid(),
    };

    const users = await getUsers();
    users.push(newUser);
    await writeUsers(users);
    response.status(201).send({ id: newUser.id });
  } catch (error) {
    next(error);
  }
});

usersRouter.get("/", async (request, response, next) => {});
usersRouter.get("/", async (request, response, next) => {});

export default usersRouter;
