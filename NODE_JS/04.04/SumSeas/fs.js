const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'example3.jpg');
const renamedFilePath = path.join(__dirname, 'example4.jpg');
const copiedFilePath = path.join(__dirname, 'example5.jpg');

fs.rename(filePath, renamedFilePath, (err) => {
    if (err) {
        console.error('Ошибка при переименовании файла:', err);
        return;
    }
    console.log('Переименование завершено');
    fs.copyFile(renamedFilePath, copiedFilePath, (err) => {
        if (err) {
            console.error('Ошибка при копировании файла:', err);
            return;
        }
        console.log('Копирование завершено');
        fs.unlink(renamedFilePath, (err) => {
            if (err) {
                console.error('Ошибка при удалении файла:', err);
                return;
            }
            console.log('Удаление завершено');
        });
    }
    );
});