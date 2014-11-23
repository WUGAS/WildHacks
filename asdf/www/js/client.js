var group = 1,
	user = 'tester1';

socket = io('http://localhost:3000');
socket.on('connect', function() {
	// var url = window.location.href.toString(),
	// 	urlComponents = url.split('/');

	// // instantiate room global
	// group = urlComponents.pop();
	// // if the url happens to have nothing after the first slash try again
	// if (group === '') {
	// 	group = urlComponents.pop();
	// }

	// this if statement doesn't work right now
	// if the group id is not the same as the url
	// if (group !== url) {
		// join room code
		var data = {
			group: group,
			id: user
		}

		socket.emit('join room', data);
	// }
});

socket.on('image', function(data) {
	console.log(data);
	// this is where you disable the button!!!
	socket.emit('update user', data);
});

$('[data-switch-button]').click(function() {
	var data = {
		id: user,
		group: group,
		score: 1,
		link: 'hello'
	};
	socket.emit('message', data);
});