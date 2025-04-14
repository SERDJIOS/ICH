// Создание сервера:
// Импортируйте модуль `http`.
// Создайте сервер с использованием метода `http.createServer()`.
// Чтение заголовка Authorization:
// В функции обратного вызова для сервера прочитайте заголовок `Authorization` из объекта запроса (`req.headers['authorization']`).
// Логируйте значение заголовка `Authorization` в консоль.
// Настройка заголовка Cache-Control:
// Установите статус ответа `200`.
// Установите заголовок `Content-Type` в `text/plain`.
// Установите заголовок `Cache-Control` со значением `public, max-age=3600` для кэширования ресурса на 1 час.
// Отправка ответа:
// Отправьте текстовый ответ с сообщением "Authorization header logged, and Cache-Control header set".
// Запуск сервера:
// Настройте сервер на прослушивание порта `3000`.
// Добавьте сообщение в консоль, которое будет выводиться при успешном запуске сервера.
import { createServer } from 'http';

const server = createServer((req, res) => {
  // Корректный способ получить заголовок authorization:
  const authHeader = req.headers['authorization'];
  console.log(authHeader);
  
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Cache-Control', 'public, max-age=3600');
  res.end('Authorization header logged, and Cache-Control header set');
});

const port = 3000;

server.listen(port, () => {
  console.log(`Server is listening at: http://127.0.0.1:${port}`);
});
