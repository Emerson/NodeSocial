module.exports = {

	serve: function(request, response) {
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.end('<h1>hello social</h1>');	
	}

}