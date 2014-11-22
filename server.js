var DBNAME = 'switch';
var express = require("express"),
	app = express(),
	http = require('http'),
	server = http.createServer(app),
	io = require('socket.io').listen(server),
	mysql = require('mysql'),
	connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: ''
	}),
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
	},
	updateUser = function(data) {
		// adel write a query here to update user information
		var query = 'show tables';

		connection.query(query, function(err, rows, fields) {
			if (err) throw err;

			// process the data in this callback if needed...
			console.log(rows);
		});
	};

io.on('connection', function(socket) {
	SOCKET = socket;
	SOCKET.on('disconnect', disconnect);
	SOCKET.on('join room', joinRoom);
	SOCKET.on('leave room', leaveRoom);
	SOCKET.on('update user', updateUser);
	SOCKET.on('message', message);
});

app.get('/get-group-list', function(req, res) {
	var query = 'select * from users';
	connection.query(query, function(err, rows, fields) {
		if (err) throw err;
		// process the data in this callback if needed...
		res.send(rows);
	});
});

server.listen(3000, function() {
	console.log('listening on *:3000');

	// tell node which database to use
	var query = 'use ' + DBNAME;
	connection.query(query, function(err, rows, fields) {
		if (err) throw err;
	});
});