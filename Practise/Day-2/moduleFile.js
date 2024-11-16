
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}
function divide(a, b) {
    if (a !== 0 && b === 0) {
        console.log("You Cannot divide by Zero");
    }
    if (a === 0 && b === 0) {
        console.log("0")
    }
    return a / b;
}


module.exports = {
    add,
    subtract,
    divide,
}