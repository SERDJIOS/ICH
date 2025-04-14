// Создайте текстовый файл `input.txt` и добавьте в него большой объем текста или повторяющуюся строку, например: "Node.js потоки\n". Повторите эту строку несколько сотен раз.

// Напишите скрипт, который будет создавать читающий поток для файла `input.txt` с использованием метода `fs.createReadStream`.

// Обработайте событие `data`, чтобы выводить куски данных на консоль по мере их чтения.

// Обработайте событие `end`, чтобы вывести сообщение, когда чтение файла завершено.

// Запустите ваш скрипт и убедитесь, что данные из файла `input.txt` читаются и выводятся на консоль частями.

import fs from 'fs';

const readStream = fs.createReadStream('input.txt', { encoding: 'utf-8', highWaterMark: 64 });

readStream.on('data', (chunk) => {
  console.log("Chunk: \n", chunk);
});

readStream.on('end', () => {
  console.log('End reading');
});

readStream.on('error', (err) => {
  console.error('Error reading file:', err);
});
