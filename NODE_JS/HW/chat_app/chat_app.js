// chat_app.js

// Импортируем модуль events и создаем экземпляр EventEmitter
const EventEmitter = require('events');
const emitter = new EventEmitter();

// Функция sendMessage принимает имя пользователя, сообщение и объект EventEmitter
function sendMessage(username, message, emitter) {
 
  emitter.emit('message', {username, message});
}


emitter.on('message', (data) => {
  console.log(`${data.username}: ${data.message}`);
});

sendMessage('Alice', 'Привет, как дела?', emitter);
sendMessage('Bob', '@Alice Привет, всё отлично!', emitter);

