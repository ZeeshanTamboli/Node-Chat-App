const express = require('express');
const app = express();
const path = require('path');
const server = require('http').Server(app);
const io = require('socket.io')(server);

//Static folder
app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', socket => {
  console.log('New user connected');

  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });
});

const port = 3000;
server.listen(port, () => console.log(`Server started on port ${port}`));
