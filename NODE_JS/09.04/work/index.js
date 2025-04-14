// Сервер должен:
// Обрабатывать GET /users — вернуть список пользователей:
// [
//   { "id": 1, "name": "Alice" },
//   { "id": 2, "name": "Bob" }
// ]
// Обрабатывать POST /users — принимать JSON с name, добавлять нового пользователя и возвращать:
// { "message": "Пользователь добавлен" }
// Поддерживать заголовки CORS (Access-Control-Allow-Origin, Content-Type, Access-Control-Allow-Methods)
// Хранить пользователей в массиве в памяти (не в файле)

import 'dotenv/config';
import http from 'http';

const userList = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

const server = http.createServer((req, res) => {
  // Устанавливаем заголовки CORS и Content-Type для JSON-ответа
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Content-Type', 'application/json');

  // Обработка preflight-запроса
  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // Обработка GET-запроса на /users
  if (req.method === 'GET' && req.url === '/users') {
    res.statusCode = 200;
    res.end(JSON.stringify(userList));
    return;
  }

  // Обработка POST-запроса на /users
  if (req.method === 'POST' && req.url === '/users') {
    let body = '';

    // Собираем данные из тела запроса
    req.on('data', (chunk) => {
      body += chunk;
    });

    req.on('end', () => {
      try {
        const data = JSON.parse(body);

        // Проверяем наличие обязательного поля name
        if (!data.name) {
          res.statusCode = 400;
          res.end(JSON.stringify({ error: 'Поле "name" обязательно для заполнения' }));
          return;
        }

        // Добавляем нового пользователя
        const id = userList.length + 1;
        userList.push({ id, name: data.name });

        res.statusCode = 201;
        res.end(JSON.stringify({ message: 'Пользователь добавлен' }));
      } catch (error) {
        res.statusCode = 400;
        res.end(JSON.stringify({ error: 'Неверный формат JSON' }));
      }
    });
    return;
  }

  // Если маршрут не найден, возвращаем 404
  res.statusCode = 404;
  res.end(JSON.stringify({ error: 'Not found' }));
});

server.listen(process.env.PORT || 3000, () => {
  console.log(`Server is listening at http://127.0.0.1:${process.env.PORT || 3000}`);
});
