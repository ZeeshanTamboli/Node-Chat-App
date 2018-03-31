let socket = io();

socket.on('connect', function() {
  console.log('Connected to server');
});

socket.on('disconnect', function() {
  console.log('Disconnected from server');
});

//Listener - newMessage
socket.on('newMessage', function(message) {
  console.log('newMessage', message);
});

socket.emit(
  'createMessage',
  {
    from: 'Frank',
    text: 'Hi'
  },
  function(data) {
    console.log('Got it', data);
  }
);
