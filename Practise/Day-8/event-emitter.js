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

const EventEmitter = require("events");


const myEventEmitter = new EventEmitter();

// register a listener
// on -trigger the event 
myEventEmitter.on("greet", (name) => {
    console.log(`Hello ${name}`);
});


// emit is to call the evetn 
myEventEmitter.emit("greet", "Alice");