// Чтение большого файла с использованием потоков

// Создайте новый файл для скрипта, например, `streamTask1.js`.

// Импортируйте модуль `fs`.

// Создайте или найдите большой текстовый файл, например, `largeFile.txt`, и поместите его в ту же директорию, что и скрипт.

// Используйте метод `fs.createReadStream` для создания потока чтения из файла `largeFile.txt`.

// Подпишитесь на события потока:
// `data`: чтобы обрабатывать каждый фрагмент данных, прочитанный из файла.
// `end`: чтобы определить, когда чтение файла завершено.
// `error`: чтобы обрабатывать возможные ошибки.

// Выводите каждый фрагмент данных на консоль.

// После завершения чтения файла выведите сообщение о завершении.



const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'largeFile.txt');

// Создаем поток чтения и сохраняем его в переменную readStream
const readStream = fs.createReadStream(filePath, { encoding: 'utf-8', highWaterMark: 64 });

readStream.on('data', (chunk) => {
  console.log(`Получен chunk:" ${chunk}, ${chunk.length} bytes of data`);
});

readStream.on('end', () => {
  console.log("Чтение завершено");
});

readStream.on('error', (error) => {
  console.error("Ошибка при чтении файла:", error.message);
});


