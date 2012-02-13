var fs   	 = require('fs'),
	ejs  	 = require('ejs'),
    path 	 = require('path');

module.exports = {

	render: function(templatePath, response, layout) {
		// If no layout is defined, then we should just use the default
		// application.html.ejs
		if(!layout) {
			layout = 'application.html.ejs';
		}
		var templateString = false;
		var layoutString = false;

		// Get the view template
		fs.readFile(path.join(process.cwd(), 'views', templatePath), 'utf-8', function(err, data) {
			if(!err) {
				templateString = data;
			}
		});

		// Get the application template
		fs.readFile(path.join(process.cwd(), 'views', 'layout', layout), 'utf-8', function(err, data) {
			if(!err) {
				layoutString = data;
				response.end(ejs.render(layoutString, {body: templateString}));
			}else{
				return '<h1>Error Rendering Template: ' + name + '</h1>';
			}
		});

	}

}