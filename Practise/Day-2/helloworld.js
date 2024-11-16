// module.exports --> export
// required   --> import

const moduleFile = require("./moduleFile.js");

console.log(`Add 10 & 20 is ${moduleFile.add(10, 20)}`);


try {

    console.log("Trying to divide by zero");

    const result = moduleFile.divide(0, 10);

    console.log("result", result);
} catch (error) {

    console.log(error.message);

}