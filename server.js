var server = require('http').Server(),
	io = require('socket.io')(server),
	message = function(data) {
		console.log(data);
	},
	disconnect = function() {
		console.log('a user disconnected');
	},
	joinRoom = function(data) {
		SOCKET.join(data.room);
		console.log(data.room);
	},
	leaveRoom = function(data) {

	},
	stripTags = function(str) {
		return str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
	};

io.on('connection', function(socket) {
	SOCKET = socket;
	SOCKET.on('disconnect', disconnect);
	SOCKET.on('join room', joinRoom);
	SOCKET.on('leave room', leaveRoom);
	SOCKET.on('message', message);
});

server.listen(3000, function() {
	console.log('listening on *:3000');
});