const EventEmitter = require("events");

class myCustomEmitter extends EventEmitter {
    constructor() {
        super();
        this.greeting = 'Hello '
    }
    greet(name) {
        this.emit('greeting', `${this.greeting}, ${name}`)
    }
}

const myCustomEmitter = new myCustomEmitter();

myCustomEmitter.on('greeting', (input) => {
    console.log("Greet event", input)
})


myCustomEmitter.greet("Alice")