var routes     = require('./../config/routes'),
	controller = require('./../lib/controller'),
	url        = require('url'),
	path       = require('path'),
	fs         = require('fs');

module.exports = {

	parseRequest: function(request, response) {
		var pathname = url.parse(request.url).pathname;
		// If the request is for a file that exists within the public folder
		// then we can simply serve the static asset.
		var filename = path.join(process.cwd(), 'public', pathname);
		path.exists(filename, function(exists) {
			if(exists) {
				// Read and serve the file
				fs.readFile(filename, "binary", function(err, file) {
					if(!err) {
						response.writeHead(200);
	      				response.write(file, "binary");
	      				response.end();
	      				return;
					}else{
						controller.error(request, response, 500);
					}
				});
			}else{
				// Loop through our routes and convert them to regular expressions
				// http://collectiveidea.com/blog/archives/2012/01/25/standalone-javascript-routing/
				var matched = false;
				for(var route in routes) {
					// The first item in the array is the "Rails style" route
					var match = routes[route][0]; // eg. "/blog/:id"

					// Convert any forward slashes to regex friendly versions
					match = match.replace(/\//g, '\\/');

					// Convert any :id style segments to capture groups
					match = match.replace(/:(\w*)(?!(\w))/g, "(\\w*)");

					// Convert our string into a proper regex
					var pattern = new RegExp(match);

					// Check for a match
					if(pathname.match(pattern)) {
						matched = true;
						controller.serve(request, response, routes[route][1]);
					}
				}
				if(!match) {
					console.log("Serving 404");
					controller.error(request, response, 404);
				}
			}
		});
	}

}