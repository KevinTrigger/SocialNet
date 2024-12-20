import fs from "fs";
import jsonServer from "json-server";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname, "db.json"));

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

// Задержка для имитации реального API
server.use(async (req, res, next) => {
  await new Promise((res) => {
    setTimeout(res, 800);
  });
  next();
});

// Эндпоинт для логина
server.post("/login", (req, res) => {
  try {
    const { username, password } = req.body;
    const db = JSON.parse(
      fs.readFileSync(path.resolve(__dirname, "db.json"), "UTF-8")
    );
    const { users = [] } = db;

    const userFromBd = users.find(
      (user) => user.username === username && user.password === password
    );

    if (userFromBd) {
      return res.json(userFromBd);
    }

    return res.status(403).json({ message: "User not found" });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: e.message });
  }
});

// middleware для исключения пароля юзера из get-запроса
server.use((req, res, next) => {
  if (req.method === "GET" && req.url.includes("/users")) {
    const originalSender = res.send;

    res.send = function (body) {
      let data = JSON.parse(body);

      if (Array.isArray(data)) {
        data = data.map(({ password, ...rest }) => rest);
      } else if (data.password) {
        const { password, ...rest } = data;
        data = rest;
      }

      return originalSender.call(this, JSON.stringify(data));
    };
  }
  next();
});

// проверяем, авторизован ли пользователь
server.use((req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: "AUTH ERROR" });
  }

  next();
});

server.use(router);

// запуск сервера
server.listen(5000, () => {
  console.log("server is running on 5000 port");
});
