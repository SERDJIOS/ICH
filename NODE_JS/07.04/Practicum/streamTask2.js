// Запись данных в файл с использованием потоков

// Создайте новый файл для скрипта, например, `streamTask2.js`.

// Импортируйте модуль `fs`.

// Определите данные, которые хотите записать в файл. Например, создайте строку с большим количеством текста или генерируйте данные в цикле.

// Используйте метод `fs.createWriteStream` для создания потока записи в новый файл, например, `output.txt`.

// Используйте метод `write` потока записи для записи данных в файл.

// Подпишитесь на события потока:
// `finish`: чтобы определить, когда запись данных завершена.
// `error`: чтобы обрабатывать возможные ошибки.

// После завершения записи данных закройте поток и выведите сообщение о завершении.

const fs = require('fs')
const path = require('path')
let str = ''
for (let index = 0; index < 1000; index++) {
    str += `Это строка ${index}\n`
}
const filePath = path.join(__dirname, 'output.txt')
const writeStream = fs.createWriteStream(filePath, {encoding: 'utf-8'})
writeStream.on('finish', () => {
    console.log('The data was successfully written to file');
})
writeStream.on('error', (err) => {
    console.error('Error', err);
})
writeStream.write(str)
writeStream.end()