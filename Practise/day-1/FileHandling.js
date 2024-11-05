const fs = require("fs");

const createFile = fs.writeFile(
    "example.txt",
    "Hello Node.js File is Created using writeFile()",
    (err) => {
        if (err) throw err;
        console.log('File Created Successfully! and Data is Written!')
    });


module.exports = { createFile };