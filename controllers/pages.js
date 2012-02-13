var path 	 = require('path'),
    template = require(path.join(process.cwd(), 'lib', 'template'));


module.exports = {
	
	home: function(request, response, params) {
		template.render('pages/home.html.ejs', response);
	},

	index: function(request, response, params) {
		template.render('pages/index.html.ejs', response);
	}

}