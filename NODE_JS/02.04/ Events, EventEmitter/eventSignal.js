// Import EventEmitter from the events module
const EventEmitter = require('events');
const emitter = new EventEmitter();


function onHandler() {
  console.log("on: ping received");
}

function onceHandler() {
  console.log("once: ping received");
}


emitter.on('ping', onHandler);
emitter.once('ping', onceHandler);


console.log("First ping:");
emitter.emit('ping');

console.log("Second ping:");
emitter.emit('ping'); 


emitter.removeListener('ping', onHandler);
console.log("Removed onHandler");


console.log("Third ping:");
emitter.emit('ping'); 



