const {Add,Subtract,Divide} = require('./module_system/Operation.js');

const displayAdd = ()=>{
    console.log(Add(1,2));
}

const displaySubtract = ()=>{
    console.log(Subtract(5,3))
}

const displayDivide = ()=>{
    console.log(Divide(6,2));
}


module.exports = {
    displayAdd,
    displaySubtract,
    displayDivide
}