


// Server Request and Response Cycle
var http = require('http');
http.createServer(function(request, response) {
	var router = require('./lib/router');
	router.parseRequest(request, response);

}).listen(8000);
console.log('Server running at http://127.0.0.1:8000/');