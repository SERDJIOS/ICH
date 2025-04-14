// Создайте новый проект Node.js и установите Express.js, если вы еще этого не сделали.

// Создайте файл `index.js` и добавьте в него следующий код.

// Настройте сервер для обработки данных из тела запроса с помощью middleware.

// Создайте маршруты для обработки GET и POST запросов:
// Маршрут для получения пользователя по ID с использованием параметров маршрута и запроса.
// Маршрут для получения текстового ответа.
// Маршрут для получения JSON-ответа.
// Маршрут для отправки данных через POST-запрос, который возвращает полученные данные.

// Запустите сервер и протестируйте маршруты в браузере или с помощью инструментов вроде Postman.


import express from 'express'
import 'dotenv/config'
import { db } from './db/connect.js'
const PORT = process.env.PORT || 3333
const app = express()
app.use(express.json())
db.connect((err) => {
    if(err) {
        console.log('Error connecting to SQL');
    } else {
        console.log('Successfully connected');
    }
})
app.get('/', (req, res) => {
    res.send('Welcome to the home page!')
})
app.get('/users', (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
        if(err) {
            res.status(500).json({error: 'Error connecting to the db'})
            return
        }
        res.json(results)
    })
})
app.post('/users', (req, res) => {
    const {name} = req.body
    if(!name) {
        res.status(400).json({error: 'Field name is required'})
        return
    }
    const sql = 'INSERT INTO users (name) VALUES (?)'
    db.query(sql, [name], (err, result) => {
        if(err) {
            res.status(500).json({error: 'Error adding users'})
            return
        }
        res.status(201).json({message: 'User was added', id: result.insertId, name})
    })
})
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})