var socket = io();

socket.on('connect', function() {
  console.log('Connected to server');
});

socket.on('disconnect', function() {
  console.log('Disconnected from server');
})

socket.on('newMessage', function(msg) {
  console.log('Got new message', msg)
})

socket.on('newUser', function(msg) {
  console.log(msg);
})

socket.on('Welcome', function(msg) {
  console.log(msg);
})
