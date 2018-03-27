let socket = io();

socket.on('connect', function() {
  console.log('Connected to server');

  //Emit event - createEmail
  socket.emit('createEmail', {
    to: 'zeeshan@example.com',
    text: 'Hey. This is Zeeshan.'
  });
});

socket.on('disconnect', function() {
  console.log('Disconnected from server');
});

//Listener - newEmail
socket.on('newEmail', function(email) {
  console.log('New Email', email);
});
