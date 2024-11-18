// an EventEmitter is a core class in the events module
// that allows objects to emit events and listen for those events

//.It enables an object to trigger events, and other objects can listen for and respond to these events,
// creating a simple form of communication between components.


//----------------------------------------------------------------------------------------------------


// In Node.js, a core class refers to classes that are built into the Node.js runtime environment,

// available out of the box without the need for additional libraries or modules.

// These core classes are part of the Node.js standard library,
// which provides functionality for building server - side applications and handling various tasks

// like networking, filesystem manipulation, and more.


// --------------------------------------------------------------------------------------

// multiple event listener

// const eventEmitter = require("events")

// class MyEmitter extends eventEmitter { }

// const myEmitter = new MyEmitter();

// // adding multiple listener

// myEmitter.on("greet", (name) => {
//     console.log(`Hello!, ${name}`)
// })

// myEmitter.on("greet", (name) => {
//     console.log(`Welcome!, ${name}`)
// })


// // adding Event
// myEmitter.emit('greet', 'Alice');



//---------------------------------------------------------------

// simple EventEmitter

const eventEmitter = require("events");

const myEmitter1 = new eventEmitter();

myEmitter1.on("message", (name) => {
    console.log(`Hello!, ${name}`);
})

myEmitter1.once('myMessage', (name) => {
    console.log(`Welcome!, ${name}`);
})

myEmitter1.emit('message', 'John');
myEmitter1.emit('myMessage', 'Bob');