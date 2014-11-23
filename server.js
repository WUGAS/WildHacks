var DBNAME = 'switch';
var map = {};
var express = require("express"),
	app = express(),
	http = require('http'),
	server = http.createServer(app),
	io = require('socket.io').listen(server),
	mysql = require('mysql'),
	bodyParser = require('body-parser'),
	connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: ''
	}),
	message = function(data) {
		if (data.group in map) {
			if (data.id in map[data.group]) {
				map[data.group][data.id] += data.score;
			} else {
				map[data.group][data.id] = data.score;
			}
		} else {
			map[data.group] = {

			};

			map[data.group][data.id] = data.score;
		}

		for (var key in map[data.group]) {
			if (map[data.group][key] > 1) {
				console.log('emit image');
				io.to(data.group).emit('image', data);
				break;
			}
		}
	},
	disconnect = function() {
		console.log('a user disconnected');
	},
	joinRoom = function(data) {
		SOCKET.join(data.group);
		console.log(data.group);
		console.log(data.id);
		
		var query = 'INSERT INTO in_group (in_group.username, in_group.group_id) VALUES ("' + data.id + '", ' + data.group + ')';
		connection.query(query, function(err, rows, fields) {
			if (err) return;
		});
	},
	leaveRoom = function(data) {
		SOCKET.leave(data.group);
		console.log(data.group);
	},
	stripTags = function(str) {
		return str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
	},
	updateUser = function(data) {
		var query = 'UPDATE in_group SET in_group.group_score=' + data.score + ' WHERE in_group.in_id="' + data.group + '"';

		connection.query(query, function(err, rows, fields) {
			if (err) throw err;

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
	var query = 'SELECT g.name, g.group_id, dat.group_score FROM groups as g JOIN in_group as dat ON (g.group_id = dat.group_id) WHERE dat.username="' + req.query.user + '"';
	connection.query(query, function(err, rows, fields) {
		if (err) throw err;
		res.send(rows);
	});
});

app.use(bodyParser.urlencoded({
	extended: true
}));

app.get('/create-group', function(req, res) {
	var query = 'INSERT INTO switch.groups ( groups.name) VALUES ("' + req.query.name + '")';
	connection.query(query, function(err, rows, fields) {
		if (err) throw err;
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