
const EventEmitter = require('events');


const alarmClock = new EventEmitter();


function wakeUpHandler() {
  console.log("Пора вставать!");
}
alarmClock.on('wakeUp', wakeUpHandler);


alarmClock.once('wakeUp', () => {
  console.log("Доброе утро, только сегодня я скажу это один раз!");
});


console.log("Первый звонок:");
alarmClock.emit('wakeUp'); 

console.log("Второй звонок:");
alarmClock.emit('wakeUp'); 

alarmClock.off('wakeUp', wakeUpHandler);
console.log("обработчик отключён");

console.log("Третий звонок:");
alarmClock.emit('wakeUp'); 

