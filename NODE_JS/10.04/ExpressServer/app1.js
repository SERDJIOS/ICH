// Создайте новый проект Node.js и установите Express.js, если вы еще этого не сделали.

// Создайте файл `index.js` и откройте его в текстовом редакторе.

// Импортируйте Express и создайте экземпляр приложения.

// Создайте следующие маршруты:

// Корневой маршрут (`/`), который возвращает строку "Welcome to my site!".
// Маршрут для получения списка продуктов (`/products`), который возвращает строку "List of products".

// Откройте браузер и перейдите по адресу `http://localhost:3000` для проверки корневого маршрута и `http://localhost:3000/products` для проверки маршрута продуктов.


import express from 'express'

const app = express()
app.use(express.json())

app.get('/', (req,res ) => {
    res.send("Welcome to my site!")
})

app.get('/products', (req,res) => {
    res.send("List of products")
})
app.get('/search', (req,res) => {
    const query = req.query
    res.send('find somesthing')
})
app.listen(3000, () => {
    console.log('Server is listening at http://127.0.0.1:3000');
    
})

