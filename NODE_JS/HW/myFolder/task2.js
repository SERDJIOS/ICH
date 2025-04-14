const fs = require('fs');

const fileName = 'info.txt';
const text = 'Node.js Hello!';

// Запись текста в файл info.txt
fs.writeFile(fileName, text, (err) => {
  if (err) {
    console.error('Ошибка при записи в файл:', err);
    return;
  }
  console.log(`Текст успешно записан в файл ${fileName}.`);

  // Чтение содержимого файла info.txt
  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
      console.error('Ошибка при чтении файла:', err);
      return;
    }
    console.log(`Содержимое файла ${fileName}:`);
    console.log(data);
  });
});
