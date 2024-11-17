// promise in javascript is an object that represent an
// eventual completion and failure of an asynchronous and its value.

function promise(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, time)
    })
}

console.log("Promise lecture Start")

promise(2000)
    .then(() => {
        console.log("After 2 second promise resolve")
    })
console.log("end")