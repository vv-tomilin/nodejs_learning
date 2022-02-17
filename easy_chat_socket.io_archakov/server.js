const express = require('express');
const socket = require('socket.io');

const app = express();
const server = require('http').Server(app);
const io = socket(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

const rooms = new Map();

app.get('/users', (req, res) => {
  rooms.set();

  res.json(rooms);
});

io.on('connection', (socket) => {
  console.log('socket connection');
});

server.listen(9999, (error) => {
  if (error) {
    throw new Error(error);
  }
  console.log('\n=== Server started ===');
});