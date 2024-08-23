import path from "path";
import jsonServer from "json-server";
import { fileURLToPath } from "url";
import fs from "fs";

// Получение __filename и __dirname в ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, "db.json"));

// Нужно для задержки, чтобы запрос проходил не мгновенно, имитация реального API
server.use(async (req, res, next) => {
  await new Promise((res) => {
    setTimeout(res, 800);
  });
  next();
});

// Проверяем: пользователь авторизован?
server.use((req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: "AUTH ERROR" });
  }

  next();
});

server.use(jsonServer.defaults());
server.use(router);

// Эндпоинт для логина
server.post("/login", (req, res) => {
  const { username, password } = req.body;
  const db = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "db.json"), "utf-8")
  );
  const { users } = db;

  const userFromBd = users.find(
    (user) => user.username === username && user.password === password
  );

  if (userFromBd) {
    return res.json(userFromBd);
  }

  return res.status(403).json({ message: "AUTH ERROR" });
});
