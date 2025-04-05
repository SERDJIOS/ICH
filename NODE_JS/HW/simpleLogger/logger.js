// Импортируем встроенный модуль fs
const fs = require('fs');

// Функция для записи логов
function logMessage(message) {
  // Формируем строку лога с меткой времени
  const timestamp = new Date().toISOString();
  const logEntry = `[${timestamp}] ${message}\n`;

  // Добавляем строку в файл log.txt
  fs.appendFile('log.txt', logEntry, (err) => {
    if (err) {
      console.error('Ошибка при записи в файл:', err);
    }
  });
}

// Экспортируем функцию logMessage
module.exports = { logMessage };
