import fs from "fs-extra";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const { readJSON, writeJSON, writeFile } = fs;

const dataFolderPath = join(dirname(fileURLToPath(import.meta.url)), "../data");

const usersJSONpath = join(dataFolderPath, "users.json");

const usersPublicFolderPath = join(process.cwd(), "./public/img/users");

export const getUsers = () => readJSON(usersJSONpath);

export const writeUsers = (usersArray) => writeJSON(usersJSONpath, usersArray);

export const saveUsersAvatars = (fileName, contentAsBuffer) => {
  const filePath = join(usersPublicFolderPath, fileName);
  const whereWeSaved = `/img/users/${fileName}`;
  writeFile(filePath, contentAsBuffer);
  const url = `http://localhost:3003${whereWeSaved}`;
  return url;
};
