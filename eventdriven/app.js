import EventEmitter from "node:events"


const emitter=new EventEmitter();


//emitting wevent
emitter.on("abcd",()=>{
    console.log('Event abcd fired');
    
})
emitter.on("x",()=>{
    console.log('Event x fired');
    
})
emitter.on("y",()=>{
    console.log('Event y fired once');
    
})
emitter.on("y",()=>{
    console.log('Event y fired twice');
    
})
//listeneing event 
//running or exwcuting the event 
emitter.emit('y')
// once propertry which emit or run or fire event only once event if we fire it many times lets see

emitter.once("click",()=>{
    console.log("Fired using the propertry once");
    
})
//emitted two times but will get execute only once 
emitter.emit('click')
emitter.emit('click')

// const EventEmitter = require('events');
const emitter1 = new EventEmitter();

function sayHi(name) {
  console.log(`Hi ${name}`);
}

// One-time listener
emitter1.once('welcome', sayHi);

// Try to emit twice
emitter1.emit('welcome', 'Luc');   // ✅ Triggers
emitter1.emit('welcome', 'Luc');   // ❌ Ignored

// Add a reusable listener
emitter1.on('hello', sayHi);

// Count listeners
console.log(emitter.listenerCount('hello')); // 1

// Remove the listener
emitter1.removeListener('hello', sayHi);

console.log(emitter.listenerCount('hello')); // 0
