// '/'
// '/list'
// '/list/new/'


module.exports = [

	['/list/:id', ['lists', 'view']],
	['/list', ['lists', 'index']],
	['/', ['pages', 'home']]

]