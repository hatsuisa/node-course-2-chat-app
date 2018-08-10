var socket = io();

socket.on('connect', function() {
  console.log('Connected to server');

  socket.emit('createMessage', {
    from: 'Yuki',
    msg: 'Hi, this is Yuki!',
    createdAt: new Date()
  })
});

socket.on('disconnect', function() {
  console.log('Disconnected from server');
})

socket.on('newMessage', function(msg) {
  console.log('Got new message', msg)
})
