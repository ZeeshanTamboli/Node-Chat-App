let socket = io();

socket.on('connect', function() {
  console.log('Connected to server');

  //Emit event - createMessage
  socket.emit('createMessage', {
    from: 'Andrew',
    text: 'Yup. That works for me.'
  });
});

socket.on('disconnect', function() {
  console.log('Disconnected from server');
});

//Listener - newMessage
socket.on('newMessage', function(message) {
  console.log('newMessage', message);
});
