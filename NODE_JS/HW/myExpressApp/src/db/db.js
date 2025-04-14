import mysql from 'mysql2'

export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'qweqwe123',
    database: 'ZHARA_DB'
})