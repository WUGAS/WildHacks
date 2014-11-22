socket = io('http://localhost:3000');
socket.on('connect', function() {
	
});

$('[data-switch-button]').click(function() {
	socket.emit('message', '');
});
