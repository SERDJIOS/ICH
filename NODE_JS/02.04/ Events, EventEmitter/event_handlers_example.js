// Импортируем класс EventEmitter из модуля events
const EventEmitter = require('events');

// Создаем экземпляр EventEmitter
const emitter = new EventEmitter();

// Определяем два обработчика для одного события
const handler1 = () => {
  console.log("Handler 1 выполнен");
};

const handler2 = () => {
  console.log("Handler 2 выполнен");
};

// Регистрируем оба обработчика на событие 'myEvent'
emitter.on('myEvent', handler1);
emitter.on('myEvent', handler2);

// Удаляем первый обработчик
emitter.removeListener('myEvent', handler1);

// Генерируем событие 'myEvent'
emitter.emit('myEvent');  // Должен выполниться только handler2


