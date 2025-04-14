// Создайте новый проект Node.js и установите Express.js, если вы еще этого не сделали.

// Создайте файл `index.js` и откройте его в текстовом редакторе.

// Импортируйте Express и создайте экземпляр приложения.

// Создайте следующие маршруты:

// Корневой маршрут (`/`), который возвращает строку "Hello, World!".
// Маршрут для получения всех пользователей (`/users`), который возвращает строку "List of users".
// Маршрут для получения конкретного пользователя по ID (`/users/:id`), который возвращает строку с ID пользователя.
// Маршрут для поиска (`/search`), который принимает параметр запроса `q` и возвращает строку с этим параметром.

// Запустите сервер и протестируйте маршруты в браузере.

import express from 'express'

const app = express()
app.use(express.json())

app.get('/', (req,res) => {
    res.send("Hello, World!")
})
app.get('/users', (req,res) => {
    res.send("List of users")
})
app.get('/users/:id', (req,res) => {
    const params = req.params.id
    console.log(params);
    
    res.send(`User id: ${params}`)
})
app.get('/search', (req,res) => {
    const query = req.query
    console.log(query);
    
    res.send(`query string: ${query} `)
})

app.listen(3000, () => {
    console.log('Server is listening at http://127.0.0.1:3000');
    
})