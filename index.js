var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);





app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.emit('some event', {
  for: 'everyone'
});

io.on('connection', function(socket){
console.log('a user connected');
 

socket.on('chat message', function(msg){
console.log('message: ' + msg);

    io.emit('chat message', msg);

  });
 
socket.on('disconnect', function () {

        console.log('Your Client disconnected');

  

  });

});



var port = process.env.PORT || 3000; 
http.listen(port, function () {
   console.log('listening on *:http://localhost:3000');
});




