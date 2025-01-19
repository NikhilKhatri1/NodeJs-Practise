const fs = require('fs');
const path = require('path');

const dataFolder = path.join(__dirname, 'async-Folder');

// Using fs.existsSync() for synchronous check
 
if (!fs.existsSync(dataFolder)) {
    fs.mkdir(dataFolder, (err) => {
        if (err) {
            console.error("Error creating folder:", err);
        } else {
            console.log("Folder is created.");
        }
    });
} else {
    console.log("Folder already exists.");
}
