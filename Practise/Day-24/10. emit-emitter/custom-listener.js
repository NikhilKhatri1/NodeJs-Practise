const eventEmitter = require('events');

class MyCustomEmitter extends eventEmitter {
    constructor() {
        super();
        this.greeting = 'Hello';
    }
    greet(name) {
        this.emit('greeting', `${this.greeting}, ${name}`);
    }
}

const myCustomEmitter = new MyCustomEmitter(); // Corrected instance name

myCustomEmitter.on('greeting', (input) => {
    console.log(`Greeting Event: ${input}`);
});

myCustomEmitter.greet('John'); // Output: Greeting Event: Hello, John
