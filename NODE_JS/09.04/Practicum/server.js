// Создание сервера:
// Импортируйте модуль `http`.
// Создайте сервер с использованием метода `http.createServer()`.

// Обработка POST-запросов:
// В функции обратного вызова для сервера проверяйте метод запроса (`req.method`) и URL (`req.url`).
// Если метод запроса `POST` и URL `/submit`, логируйте тело запроса в консоль. Используйте события `data` и `end` для чтения данных из запроса.

// Настройка заголовков:
// Установите заголовок `Access-Control-Allow-Origin` со значением `*`.
// Установите заголовок `Content-Type` в `application/json`.

// 4.    Формирование ответа:
// Установите статус ответа `200`.
// Отправьте JSON-ответ с сообщением "POST-запрос обработан".

// 5.     Запуск сервера:
// Настройте сервер на прослушивание порта `3000`.
// Добавьте сообщение в консоль, которое будет выводиться при успешном запуске сервера

import http from 'http'

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Content-Type', 'application/json')
    
    if(req.method === 'POST' && req.url === '/submit'){
        let bodyReq = ''
        req.on('data', (chunk) => {
            bodyReq += chunk.toString()
        })
        req.on('end', () => {
            try {
                const parsedData = JSON.parse(bodyReq)
                console.log('Body request: ', parsedData)
                res.statusCode = 200
                res.end(JSON.stringify({ message: 'Alles in Ordnung!'}))
            } catch (error) {
                res.statusCode = 400
                res.end(JSON.stringify({ error: 'Invalid JSON'}))
            } 
        })
    } else {
        res.statusCode = 404
        res.end(JSON.stringify({error: 'Not found page!'}))
    }
    
})

server.listen(process.env.PORT || 3000, () => {
    console.log('Server is listening ')
})