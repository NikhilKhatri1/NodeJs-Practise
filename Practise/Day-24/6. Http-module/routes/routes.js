const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/') {
        res.writeHead(200, { "content-type": "text/plain" });
        res.end('Home Page');
    } else if (url === '/projects') {
        res.writeHead(200, { 'content-type': 'text/plain' });
        res.end('Projects')
    } else {
        res.writeHead(404, { 'content-type': 'text/plain' })
        res.end('Page not Found');
    }
})
const PORT = 3000
server.listen(PORT, () => {
    console.log(`Server is Running`)
})