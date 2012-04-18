var mcps = {};
mcps.search = require('search');
mcps.park = require('parks');
mcps.events = require('events');
mcps.net = require('net');
mcps.fb = require ('fb');

exports.createApplicationWindow = function(args) {
	var win1 = Ti.UI.createWindow({
		title:'Main Window',
		backgroundColor: 'white',
		exitOnClose: true
	});
	
	var logo = Ti.UI.createImageView({
		image:'mcps.png',
		bottom: 25,
		height: 'auto',
		width: 'auto'
	});
	
	var searchBar = mcps.search.createSearchBar();
	var mainView = createMainView();
	
	
	win1.add(logo);
	win1.add(mainView);
	win1.add(searchBar);
	
	
	return win1;
}
