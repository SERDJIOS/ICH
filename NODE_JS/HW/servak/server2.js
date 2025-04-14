import http from 'http';
import fs from 'fs';


http.createServer((req, res) => {
  try {
    throw new Error('Тестовая ошибка');
  } catch (err) {
    fs.appendFile('errors.log', `${new Date()} - ${err.message}\n`, (err) => {
      if (err) {
        console.error('Не удалось записать в лог');
      }
    });

    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Internal Server Error');
  }
}).listen(3000, () => {
  console.log('Server running on port 3000');
});
