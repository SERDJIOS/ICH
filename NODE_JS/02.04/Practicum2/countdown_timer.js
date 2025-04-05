const EventEmitter = require('events');

const emitter = new EventEmitter();

function countDown(sec,emi) {    
    let reamaining = sec;
    
const interval = setInterval(() => {
    console.log(reamaining);
    reamaining--;
    if(reamaining === 0) {
        clearInterval(interval);
        emi.emit("end");
    }
}, 1000);
}
emitter.on('end', () => {
    console.log('finish');
  });

countDown(5,emitter);