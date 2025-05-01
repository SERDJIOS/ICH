// db.js
import mysql from 'mysql2';

// Создаем подключение к базе данных
const connection = mysql.createConnection({
  host: 'mysql', // Хост - это имя контейнера, как указано в docker-compose.yml
  port: 3306, // Порт MySQL
  user: 'user', // Имя пользователя MySQL
  password: 'userpassword', // Пароль MySQL
  database: 'mydb', // Название базы данных
});

// Проверяем соединение с базой данных
connection.connect((err) => {
  if (err) {
    console.error('Ошибка подключения к базе данных:', err);
  } else {
    console.log('Успешно подключились к базе данных MySQL');
  }
});

export default connection;
