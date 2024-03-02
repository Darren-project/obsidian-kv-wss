var port = 8080,
	WebSocketServer = require('ws').Server,
	wss = new WebSocketServer({ port: port });

console.log('listening on port: ' + port);

wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
    client.send(data);
  });
};

wss.on('connection', function connection(ws) {

	ws.on('message', function(message) {

		
    wss.broadcast(message);

	});

});
