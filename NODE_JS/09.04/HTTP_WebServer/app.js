// Создание сервера:
// Импортируйте модуль `http`.
// Создайте сервер с использованием метода `http.createServer()`.

// Настройка заголовков CORS:
// В функции обратного вызова для сервера установите заголовок `Access-Control-Allow-Origin` со значением `*`, чтобы разрешить доступ с любого домена.
// Установите заголовок `Access-Control-Allow-Methods` со значением `GET, POST, PUT, DELETE`.
// Установите заголовок `Access-Control-Allow-Headers` со значением `Content-Type`.

// Формирование ответа:
// Установите статус ответа `200`.
// Установите заголовок `Content-Type` в `application/json`.
// Отправьте JSON-ответ с сообщением "CORS enabled".

// Запуск сервера:
// Настройте сервер на прослушивание порта `3000`.
// Добавьте сообщение в консоль, которое будет выводиться при успешном запуске сервера.

import { createServer } from "http";

const server = createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ message: "CORS enabled" }));
});

server.listen(3000, () => {
  console.log("Server is listening at: http://127.0.0.1:3000/");
});
