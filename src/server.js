import express from "express";
import { join } from "path";

import listEndPoints from "express-list-endpoints";
import cors from "cors";

import usersRouter from "./apis/users/index.js";

const server = express();

const port = 3003;

const publicFolderPath = join(process.cwd(), "./public");

//----MIDDLEWARES-------

server.use(express.static(publicFolderPath));
server.use(express.json());
server.use(cors());

server.use("/users", usersRouter);

server.listen(port, () => {
  console.table(listEndPoints(server));
  console.log(
    `Rasmus, for your information: server is running on port ${port}`
  );
});
