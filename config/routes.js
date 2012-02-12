// '/'
// '/list'
// '/list/new/'


module.exports = [

	['/list/:id', ['lists', 'view']],
	['/list',     ['lists', 'index']],
	['/welcome',  ['pages', 'index']],
	['/',         ['pages', 'home']]

]