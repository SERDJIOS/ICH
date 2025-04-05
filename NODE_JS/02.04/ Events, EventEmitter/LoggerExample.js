// Создать простую систему логирования на основе EventEmitter.

// Создайте новый файл с именем `logger_example.js`.

// В этом файле создайте экземпляр EventEmitter.

// Зарегистрируйте обработчики для событий логирования разных уровней (info, warning, error).

// Сгенерируйте события логирования для каждого уровня.

const EventEmitter = require('events');

const logger = new EventEmitter();

logger.on('info', (message) => {
    console.log(`INFO: ${message}`);
});
logger.on('warning', (message) => {
    console.error(`WARNING: ${message}`);
});
logger.on('error', (message) => {
    console.error(`ERROR: ${message}`);
});

logger.emit('info', 'Hello, world!');
logger.emit('warning', 'This is a warning.');
logger.emit('error', 'An error occurred.');

