// Создай EventEmitter, который регистрирует событие 'log' и выводит в консоль сообщение, переданное как аргумент.
// 2. Симулируй клики мыши.
// Создай обработчик события 'click', который считает и выводит количество кликов.
// Дополнительно: После 5 кликов отключи обработчик с помощью off.

const EventEmitter = require('events');
const emitter = new EventEmitter();

let count = 0;

/
function clickHandler() {
  count++;
  console.log(`Click count: ${count}`);

  if (count >= 5) {
    emitter.off('click', clickHandler);
    console.log('Handler disabled after 5 clicks.');
  } else {
  
    emitter.emit('click');
  }
}

// Register the 'click' event listener
emitter.on('click', clickHandler);

// Start the chain by emitting the first click
emitter.emit('click');
