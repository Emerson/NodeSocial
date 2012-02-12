var ejs  = require('ejs'),
    fs   = require('fs'),
    path = require('path');


function renderTemplate(name, response, layout) {
	// If no layout is defined, then we should just use the default
	// application.html.ejs
	if(!layout) {
		layout = 'application.html.ejs';
	}
	templateString = false;
	// Get the template data first
	fs.readFile(path.join(process.cwd(), 'views', 'pages', name), 'utf-8', function(err, data) {
		if(!err) {
			templateString = data;
		}
	});
	fs.readFile(path.join(process.cwd(), 'views', 'layout', layout), 'utf-8', function(err, data) {
		if(!err) {
			layoutString = data;
			response.end(ejs.render(layoutString, {body: templateString}));
		}else{
			return '<h1>Error Rendering Template: ' + name + '</h1>';
		}
	});
}

module.exports = {
	
	home: function(request, response, params) {
		renderTemplate('home.html.ejs', response);
	},

	index: function(request, response, params) {
		renderTemplate('index.html.ejs', response);
	}

}