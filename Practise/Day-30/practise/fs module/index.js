const fs = require('fs');
const path = require('path');

// Absolute path (e.g., on Windows or Mac/Linux)
const filePath = path.join(__dirname, 'example.txt');

// Check if the file exists at the specified absolute path
if (!fs.existsSync(filePath)) {
    fs.writeFile(filePath, 'Hello World', 'utf8', (err) => {
        if (!err) {
            console.log('File is Created with data ');
        } else {
            console.log(err);
        }
    })
} else {
    fs.appendFile(filePath, '\nData is Modified', 'utf8', (err) => {
        if (!err) {
            console.log('File is modifid with data');
        } else {
            console.log(err);
        }
    })
}
