const eventEmitter = require('events');

const myFirstEmitter = new eventEmitter();

//register a listener

myFirstEmitter.on('greet', (name) => {
    console.log(`Hello ${name}`);
})

myFirstEmitter.emit('greet', 'john')
