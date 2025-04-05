// Импортируем встроенный модуль path
const path = require('path');

// Определяем базовые переменные
const directory = '/home/user/documents';
const fileName = 'example.txt';

// Соединяем пути с помощью метода join
const fullPath = path.join(directory, fileName);

// Получаем расширение файла с помощью метода extname
const extension = path.extname(fullPath);

// Выводим результаты в консоль
console.log(`Full Path: ${fullPath}`);
console.log(`Extension: ${extension}`);
