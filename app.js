const express = require('express');
const app = express();
const path = require('path');
const server = require('http').Server(app);
const io = require('socket.io')(server);

//Requiring files
const { generateMessage, generateLocationMessage } = require('./utils/message');
const { isRealString } = require('./utils/validation');
const { Users } = require('./utils/users');

//Static folder
app.use(express.static(path.join(__dirname, 'public')));

//Create instance of Users class
let users = new Users();

io.on('connection', socket => {
  console.log('New user connected');

  socket.on('join', (params, callback) => {
    if (!isRealString(params.name) || !isRealString(params.room)) {
      return callback('Name and room name are required');
    }

    if (users.isDuplicateUser(params.name)) {
      return callback(
        'User Already exists with the same Name, Try a different Name'
      );
    }

    params.room = params.room.toLowerCase();
    socket.join(params.room);
    users.removeUser(socket.id);
    users.addUser(socket.id, params.name, params.room);

    io.to(params.room).emit('updateUserList', users.getUserList(params.room));

    //socket.emit from Admin
    socket.emit(
      'newMessage',
      generateMessage('Admin', 'Welcome to the chat app')
    );

    socket.broadcast
      .to(params.room)
      .emit(
        'newMessage',
        generateMessage('Admin', `${params.name} has joined`)
      );

    callback();
  });

  //Listener - createMessage
  socket.on('createMessage', (message, callback) => {
    const user = users.getUser(socket.id);

    if (user && isRealString(message.text)) {
      //Send to all users
      io
        .to(user[0].room)
        .emit('newMessage', generateMessage(user[0].name, message.text));
    }
    callback();
  });

  socket.on('createLocationMessage', coords => {
    const user = users.getUser(socket.id);

    if (user) {
      io
        .to(user[0].room)
        .emit(
          'newLocationMessage',
          generateLocationMessage(
            user[0].name,
            coords.latitude,
            coords.longitude
          )
        );
    }
  });

  socket.on('disconnect', () => {
    var user = users.removeUser(socket.id);
    if (user) {
      io
        .to(user[0].room)
        .emit('updateUserList', users.getUserList(user[0].room));
      io
        .to(user[0].room)
        .emit(
          'newMessage',
          generateMessage('Admin', `${user[0].name} has left.`)
        );
    }
  });
});

const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`Server started on port ${port}`));
