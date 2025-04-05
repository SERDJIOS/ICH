// Задача 2
// Создайте новый файл с именем `remove_handler.js`.

// Импортируйте модуль `events` и создайте экземпляр `EventEmitter`.

// Определите функцию-обработчик, которая будет регистрироваться для события `event`.

// Зарегистрируйте этот обработчик для события `event`.

// Сгенерируйте событие `event` и убедитесь, что обработчик вызывается.

// Удалите зарегистрированный обработчик для события `event`.

// Снова сгенерируйте событие `event` и убедитесь, что обработчик больше не вызывается.

// remove_handler.js


const EventEmitter = require('events');
const emitter = new EventEmitter();


function eventHandler() {
  console.log("вызван");
}


emitter.on('event', eventHandler);


console.log("Первый вызов 'event':");
emitter.emit('event');  


emitter.off('event', eventHandler);
console.log("delete");


console.log("Второй вызов 'event':");
emitter.emit('event'); 
