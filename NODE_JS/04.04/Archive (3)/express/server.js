import express from 'express';
import cors from 'cors';  

const app = express();
app.use(cors());  

app.get('/', (req, res) => {
    res.send('Hello Juice World!');
});

app.get('/user', (req, res) => {
    res.json({
        name: 'Juice WRLD',
        age: 21,
        genre: 'Hip-Hop'
    });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});  