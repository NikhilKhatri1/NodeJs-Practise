// const greet = require("./day-1/greeting.js")  // store value in a variable

const { sayHello, sayGoodbye } = require("./day-1/greeting.js")  // destructuring the import file
const { createFile } = require('./day-1/FileHandling.js')
sayHello("Alice")
console.log("==============================");
sayGoodbye("Alice")

console.log("+++++++++++++++++++++++++++++++")

console.log(createFile)
