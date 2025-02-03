const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.end('Welcome to nodejs practise season');
})


server.listen(4000, () => {
    console.log('Server Started at http://localhost:4000/');
})