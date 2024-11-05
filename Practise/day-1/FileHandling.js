const fs = require("fs");


// async method
const createFile = fs.writeFile(
    "example.txt",
    "Hello! Node.js File is Created using writeFile() and read by using readFile()",
    // if i write new content in this it will replace the content
    (err) => {
        if (err) throw err;
        console.log('File Created Successfully! and Data is Written!')
    });

const readFile = fs.readFile(
    "example.txt",
    "utf-8",
    (err, data) => {
        if (err) throw err;
        console.log(data)
    })


module.exports = { createFile, readFile };