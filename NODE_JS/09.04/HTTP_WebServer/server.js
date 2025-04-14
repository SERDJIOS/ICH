// Импортируйте модуль `http`.

// Создайте сервер с использованием метода `http.createServer()`. 

// В функции обратного вызова проверьте URL запроса, используя свойство `req.url`.

// В зависимости от значения URL, отправьте различный текст в ответе.

// Если URL равен `/`, отправьте текст "Главная страница".
// Если URL равен `/about`, отправьте текст "О нас".
// Если URL равен `/contact`, отправьте текст "Контакты".
// Для всех остальных URL отправьте текст "Страница не найдена" и установите статус ответа `404`.

// Установите заголовок ответа `Content-Type` в `text/plain` для всех ответов.

// Настройте сервер на прослушивание определенного порта, например, `3000`.

// Добавьте сообщение в консоль, которое будет выводиться при успешном запуске сервера.

import { createServer } from "http";

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  const url = req.url
  if (url === `/` ) {
    res.end("Home page")
  } else if (url === `/about`){
    res.end("About")
  } else if (url ===  `/contact`){
    res.end("Contacts")
  } else{
    res.statusCode = 404;
    res.end("Page not found")
  }
  
});


server.listen(3000, () => {
    console.log(`Server is listening at: http://127.0.0.1:3000/`);
  }); 
  