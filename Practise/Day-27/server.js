const express = require('express')

const http = require('http');

const socketIo = require('socket.io');

const app = express();

const server = http.createServer(app);

//initiate socket.io and attach this to http server

const io = socketIo(server);

app.use(express.static('./public'));

const users = new Set();

io.on('connection', (socket) => {
    console.log('A user is now Connected');

    //handle users when they will join the chat
    socket.on('join', (userName) => {
        users.add(userName);
        // broadcast to all client/users that new user has joined
        io.emit('userJoined', userName);

        // send the updated user List to all clients
        io.emit('userList', Array.from(users));
    })

    // handle incoming chat message


    // handle user disconnection


})


const port = 3000;

server.listen(port, () => {
    console.log(`Server Started at http://localhost:${port}`)
})
