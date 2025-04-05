
// Создайте новый скрипт в вашем проекте. Назовите его, например, `fileOperations.js`.

// Импортируйте необходимые модули в ваш скрипт:
// Модуль `fs` для работы с файловой системой.
// Модуль `path` для работы с путями файлов и каталогов.

// Определите путь к исходному файлу:
// В данном примере используйте файл изображения `example.jpg`, который должен находиться в той же директории, что и ваш скрипт.
// Сформируйте путь к файлу с использованием метода `path.join` и специальной переменной `__dirname`.


import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Create __filename and __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Build the full paths for the source and destination files
const originalPath = path.join(__dirname, 'example.jpg');
const newPath = path.join(__dirname, 'cat.jpg');

fs.rename(originalPath, newPath, (err) => {
  if (err) {
    console.error("Error renaming file:", err);
    return;
  }
  console.log("File successfully renamed");
});

