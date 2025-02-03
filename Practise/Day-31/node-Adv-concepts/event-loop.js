const fs = require('fs');
const crypto = require('crypto');

console.log("1. Script Started");

setTimeout(() => {
    console.log('2. Timer set to Zero (macroTask)');
}, 0);

Promise.resolve().then(() => {
    console.log('3. Promise resolved(microtask)')
})

process.nextTick(() => {
    console.log("4. process.nexttick callback (microtask)")
});

fs.readFile(__filename, () => {
    console.log('5. File Read Operation (I/O Callback)');
});


crypto.pbkdf2('secret', "salt", 10000, 64, 'sha512', (err, key) => {
    if (err) throw err;
    console.log("6. pbkdf2 operation completed (CPU intensive task)");
});

console.log('7. script completed')