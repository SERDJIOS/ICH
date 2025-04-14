// Создайте новый файл с именем `notification_system.js`.

// Импортируйте модуль `events` и создайте экземпляр `EventEmitter`.

// Напишите функцию `sendNotification`, которая принимает сообщение и объект `EventEmitter`.

// Внутри функции `sendNotification` генерируйте событие `notification` с переданным сообщением.

// Зарегистрируйте несколько обработчиков для события `notification`, например, один для логирования в консоль, другой для записи в файл.

// Вызовите функцию `sendNotification` несколько раз с разными сообщениями.

const EventEmitter = require('events');
const fs = require('fs');

const emitter = new EventEmitter();

function sendNotification(mes,emitter) {
    emitter.emit('notification',mes);
    
}

emitter.on('notification', (mes) => {
    console.log(`Notification: ${mes}`);
    fs.appendFile('log.txt', mes + '\n', (err) => {
        if (err) {
            console.error('Ошибка при записи в файл:', err);
        }
    });
});


sendNotification('Hi',emitter);
sendNotification('Bro',emitter); 