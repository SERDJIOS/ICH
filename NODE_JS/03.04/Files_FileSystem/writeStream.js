// Создайте текстовый файл `input.txt` и добавьте в него большой объем текста или повторяющуюся строку, например: "Копирование файлов с использованием потоков\n". Повторите эту строку несколько сотен раз.

// Напишите скрипт, который будет создавать читающий поток для файла `input.txt` с использованием метода `fs.createReadStream`.

// Создайте записывающий поток для нового файла `output.txt` с использованием метода `fs.createWriteStream`.

// Объедините читающий и записывающий потоки с помощью метода `pipe`.

// Обработайте событие `finish` для записывающего потока, чтобы вывести сообщение о завершении копирования.

// Обработайте события `error` для обоих потоков для обработки возможных ошибок при чтении и записи.

// Запустите ваш скрипт и убедитесь, что содержимое файла `input.txt` было успешно скопировано в `output.txt`.


// writeStream.js using ES module syntax
import fs from 'fs';

const readStream = fs.createReadStream('input.txt', { encoding: 'utf-8' });
const writeStream = fs.createWriteStream('output.txt', { encoding: 'utf-8' });

readStream.on('error', (err) => {
  console.error('Error reading file:', err);
});

writeStream.on('error', (err) => {
  console.error('Error writing file:', err);
});

writeStream.on('finish', () => {
  console.log('File copy completed successfully!');
});

readStream.pipe(writeStream);


