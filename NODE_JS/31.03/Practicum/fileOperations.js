const fs = require('fs');

const fileName = 'example.txt';
const content = 'Hello, Node.js!';

// 1. Создаем файл и записываем в него данные
fs.writeFile(fileName, content, (err) => {
    if (err) {
        return console.error('Ошибка при записи файла:', err);
    }
    console.log(`Файл ${fileName} успешно создан и записан.`);

    // 2. Читаем содержимое файла
    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
            return console.error('Ошибка при чтении файла:', err);
        }
        console.log(`Содержимое файла ${fileName}:`, data);

        // 3. Удаляем файл
        fs.unlink(fileName, (err) => {
            if (err) {
                return console.error('Ошибка при удалении файла:', err);
            }
            console.log(`Файл ${fileName} успешно удален.`);
        });
    });
});
