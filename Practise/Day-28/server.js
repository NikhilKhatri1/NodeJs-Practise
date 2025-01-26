const express = require('express');
const http = require('http');
const path = require('path');
const { Server } = require('socket.io');

// Instance
const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serving static files (assuming index.html is in the same directory)

app.use(express.static(path.join(__dirname, 'public')));

console.log('Server is running and serving static files...');

// Start the server
server.listen(4000, () => {
    console.log('Server is running on http://localhost:4000');
});
