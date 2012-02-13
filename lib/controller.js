var	path       = require('path'),
	fs         = require('fs');

module.exports = {

	serve: function(request, response, controllerAction) {
		response.writeHead(200, {'Content-Type': 'text/html'});

		// Load the desired controler
		var controllerPath = path.join(process.cwd(), 'controllers', controllerAction[0]);
		var controller = require(controllerPath+'.js');
		controller[controllerAction[1]](request, response);
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