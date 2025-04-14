// Создайте новый файл с именем `multiple_handlers.js`.

// Импортируйте модуль `events` и создайте экземпляр `EventEmitter`.

// Зарегистрируйте первый обработчик для события `event`.

// Зарегистрируйте второй обработчик для того же события `event`.

// Сгенерируйте событие `event`.

// Запустите скрипт и убедитесь, что оба обработчика вызываются при генерации события.

const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('event', () => {
  console.log("поехали в обработку");
});


emitter.on('event', () => {
  console.log("и еще в обработку");
});


emitter.emit('event');
