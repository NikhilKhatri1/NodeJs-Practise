const http = require('http');
const server = http.createServer((req, res) => {
    console.log('Req: ', req);
    res.writeHead(200, { "content-type": "text/plain" })
    res.end("Welcome to node js");
})

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server Started at http://localhost:${PORT}`);
})