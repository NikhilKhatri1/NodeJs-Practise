const fs = require('fs');
const path = require('path');

const dataFolder = path.join(__dirname, 'data');

if (!fs.existsSync(dataFolder)) {
    fs.mkdirSync(dataFolder);
    console.log('Folder is Created...')
}

const filePath = path.join(dataFolder, 'example.txt');
// sync way of creating the file

fs.writeFileSync(filePath, 'Hello from Node js');
console.log('File Created Successfully!');

// read the content from the file...

const readContentFromFile = fs.readFileSync(filePath, 'utf8');
console.log('File Content: ', readContentFromFile)

// add new line in existing file

fs.appendFileSync(filePath, '\n New Line Added.');

console.log("New File Updated");

