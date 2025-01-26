const express = require('express')

const http = require('http');

const socketIo = require('socket.io');

const app = express();

const server = http.createServer(app);

//initiate socket.io and attach this to http server

const io = socketIo(server);

app.use(express.static('./public'));

// create new user and save user detail
const users = new Set();

io.on('connection', (socket) => {
    console.log('A user is now Connected');

    //handle users when they will join the chat
    socket.on('join', (userName) => {
        users.add(userName);
        socket.userName = userName;
        
        // broadcast to all client/users that new user has joined
        io.emit('userJoined', userName);

        // send the updated user List to all clients
        io.emit('userList', Array.from(users));
    })

    // handle incoming chat message

    socket.on('chatMessage', (message) => {
        // broadcast the reciived messag to all the client
        io.emit('chatMessage', message);
    })


    // handle user disconnection
    socket.on('disconnect', () => {
        console.log('A User is Disconneted');
        users.forEach(user => {
            if (user === socket.userName) {
                users.delete(user);
                io.emit('userLeft', user);
                io.emit('userList', Array.from(users))
            }
        })
    })

})


const port = 3000;

server.listen(port, () => {
    console.log(`Server Started at http://localhost:${port}`)
})
