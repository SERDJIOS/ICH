// Настройка переменных окружения:
// Создайте файл `.env` в корне проекта.
// Добавьте в него переменные `PORT=3000` и `MESSAGE="Привет от сервера"`.

// Подключение и использование переменных окружения:
// Импортируйте модуль `dotenv` и вызовите `dotenv.config()`.
// Получите значения переменных окружения `PORT` и `MESSAGE`.

// Создание сервера:
// Импортируйте модуль `http`.
// Создайте сервер с использованием метода `http.createServer()`.

import http from 'http'
import 'dotenv/config' 
const PORT =  process.env.PORT || 3001;

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json")
    res.end(JSON.stringify({ message: process.env.MESSAGE || "Привет от сервера"}))
})
server.listen(PORT, () => {
    console.log(`Server is listening at: http://127.0.0.1:${PORT}`);
  });
  