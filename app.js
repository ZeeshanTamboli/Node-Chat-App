const express = require('express');
const app = express();
const path = require('path');
const server = require('http').Server(app);
const io = require('socket.io')(server);

//Requiring files
const { generateMessage, generateLocationMessage } = require('./utils/message');
const { isRealString } = require('./utils/validation');

//Static folder
app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', socket => {
  console.log('New user connected');

  //socket.emit from Admin
  socket.emit(
    'newMessage',
    generateMessage('Admin', 'Welcome to the chat app')
  );

  socket.broadcast.emit(
    'newMessage',
    generateMessage('Admin', 'New User joined')
  );

  socket.on('join', (params, callback) => {
    if (!isRealString(params.name) || !isRealString(params.room)) {
      callback('Name and room name are required');
    }
    callback();
  });

  //Listener - createMessage
  socket.on('createMessage', (message, callback) => {
    console.log('createMessage', message);
    //Send to all users
    io.emit('newMessage', generateMessage(message.from, message.text));
    callback();
  });

  socket.on('createLocationMessage', coords => {
    io.emit(
      'newLocationMessage',
      generateLocationMessage('Admin', coords.latitude, coords.longitude)
    );
  });

  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });
});

const port = 3000;
server.listen(port, () => console.log(`Server started on port ${port}`));
