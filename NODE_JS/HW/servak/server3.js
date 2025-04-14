import http from 'http'

http.createServer((req, res) => {
  if (req.method === 'PUT') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('PUT-запрос обработан');
  } else if (req.method === 'DELETE') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('DELETE-запрос обработан');
  } else {
    res.statusCode = 405;  // Метод не разрешен
    res.setHeader('Content-Type', 'text/plain');
    res.end('Method Not Allowed');
  }
}).listen(3000, () => {
  console.log('Server running on port 3000');
});
