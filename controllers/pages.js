module.exports = {
	
	home: function(request, response, params) {
		console.log('pages/home');
		response.end('<h1>homepage</h1>');
	},

	index: function(request, response, params) {
		console.log('pages/index');
		response.end('<h1>index</h1>');
	}

}