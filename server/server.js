const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.emit('Welcome', {
    from: 'Admin',
    text: 'Welcome to the chat app!'
  })

  socket.broadcast.emit('newUser', {
    from: 'Admin',
    text: 'New user joined!'
  })

  socket.on('createMessage', (msg) => {
    console.log('Created msg', msg);
    io.emit('newMessage', {
      from: msg.from,
      text: msg.text,
      createdAt: new Date().getTime()
    });
    // socket.broadcast.emit('newMessage', {
    //     from: msg.from,
    //     text: msg.text,
    //     createdAt: new Date().getTime()
    // })
  });

  socket.on('disconnect', () => {
    console.log('Disconnect from client')
  });
});

server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
