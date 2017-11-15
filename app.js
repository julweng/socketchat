var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/pages/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
/*
// I require express as a dependency, express allows me to handle requests and responses
var express = require('express');
// I create an express application
var app = express();
// I say to my express application that I want my static content to be in the folder pages
app.use(express.static('pages'));
// Start to listen the port 3000 of localhost of my express application
app.listen(3000, function() {
  console.log('i am in localhost:3000'); });
  */
