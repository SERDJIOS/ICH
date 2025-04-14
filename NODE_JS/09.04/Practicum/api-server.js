// Простое API-сервер на http с поддержкой CORS и GET-запросов
// 📋 Условие:
// Создай HTTP-сервер, который:
// При GET запросе на / возвращает JSON:jsonCopyEdit{ "message": "Добро пожаловать на API" }
// При GET запросе на /users возвращает список пользователей:jsonCopyEdit[
//   { "id": 1, "name": "Alice" },
//   { "id": 2, "name": "Bob" }
// ]
// На все другие маршруты возвращает:jsonCopyEdit{ "error": "Not found" }
// Добавь заголовки:
// Access-Control-Allow-Origin: *
// Access-Control-Allow-Methods: GET
// Access-Control-Allow-Headers: Content-Type
// Content-Type: application/json
// Сервер должен слушать порт 3000.


import { createServer } from "http";

const port = 3005;

const server = createServer((req, res) => {
  // Устанавливаем необходимые заголовки
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Content-Type", "application/json");

  if (req.method === "GET") {
    if (req.url === "/") {
      res.statusCode = 200;
      res.end(JSON.stringify({ message: "Добро пожаловать на API" }));
    } else if (req.url === "/users") {
      res.statusCode = 200;
      res.end(
        JSON.stringify([
          { id: 1, name: "Alice" },
          { id: 2, name: "Bob" },
        ])
      );
    } else {
      res.statusCode = 404;
      res.end(JSON.stringify({ error: "Not found" }));
    }
  } else {
    res.statusCode = 405;
    res.end(JSON.stringify({ error: "Method not allowed" }));
  }
});

server.listen(port, () => {
  console.log(`Server is listening at: http://127.0.0.1:${port}`);
});
