const express = require('express');
const socket = require('socket.io');

const app = express();
const server = require('http').Server(app);
const io = socket(server);

const rooms = new Map();

app.get('/users', (req, res) => {
  rooms.set();

  res.json(rooms);
});

io.on('connection', (socket) => {
  console.log('socket connection', socket);
});

server.listen(9999, (error) => {
  if (error) {
    throw new Error(error);
  }
  console.log('\n=== Server started ===');
});