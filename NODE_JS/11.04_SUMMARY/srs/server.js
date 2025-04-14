import express from 'express'
import { db } from './db/connect.js'
import 'dotenv/config'

const app = express()
const PORT = process.env.PORT || 3000
app.use(express.json())

db.connect((err) => {
    if(err){
        console.log('Error connecting to SQL');
        
    } else {
        console.log('Successfully connecting');
        
    }
})
app.get('/', (req,res) => {
    res.send('Welkome to the home page')
})
app.get('/users', (req,res) => {
    db.query(`SELECT * FROM users`, (err,results) => {
        if(err){
            res.status(500).json({ error: 'Error connecting to the db'})
            return
        }
        res.json(results)
    })
})
app.post('/users', (req,res) => {
    const {name} = req.body
    if(!name){
        res.status(400).json({error: 'Field name is required'})
        return
    }
    const sql = 'INSERT INTO users (name) VALUES (?)'
    db.query(sql, [name], (err,res) => {
        if(err){
            res.status(500).json({error: 'Error adding users'})
            return
        }
        res.status(201).json({message: 'USER WAS ADDED', id: result.insertID, name})
    })  
})
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
    
})