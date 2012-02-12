module.exports = {

	serve: function(request, response) {
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.end('<h1>hello social</h1>');	
	},

	error: function(request, response, type) {
		response.writeHead(type, {'Content-Type': 'text/html'});
		if(type === 404) {
			response.end('<h1>Error 404 - File Not Found</h1>');
		}
		if(type === 500) {
			response.end('<h1>Error 500 - Internal Server Problem</h1>');
		}
	}

}