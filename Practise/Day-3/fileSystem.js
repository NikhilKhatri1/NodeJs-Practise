const fs = require('fs');
const path = require('path');

const dataFolder = path.join(__dirname,'data');

if(!fs.existsSync(dataFolder)){
    fs.mkdirSync(dataFolder);
    console.log('Folder is Created...')
}