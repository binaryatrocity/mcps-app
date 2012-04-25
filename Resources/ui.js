exports.createBaseWindow = function(winTitle) {
	/* Creates basic window w/ search and logo. Use to spawn other pages */
	var win = Ti.UI.createWindow({
		title: winTitle,
		backgroundColor:'#040',
		fullscreen: false, // needed to force heavyweight window (back button) [droid]
		exitOnClose: true
	});
	
	
	var logo = Ti.UI.createImageView({
		image:'logo.png',
		bottom:10,
		height:65,
		width:158,
	});
	var searchBar = createSearchBar();
	
	//win.add(logo);
	win.add(searchBar);
	
	return win;
}

function createSearchBar() {
	
	//Main view holds all bars/buttons, gets returned
	var searchBar = Ti.UI.createView({
		backgroundColor:'gray',
		width:'100%',
		height:65,
		top:0
	});
	
	//Actual search bar
	var search = Ti.UI.createSearchBar({
		showCancel:false,
		hintText: "Search Parks",
		opacity:0.4,
		height:60,
		top: 6,
		width:'70%',
		right:50,
	});
	
	//Search button (right of bar)
	var searchButton = Ti.UI.createButton({
		top: 10,
		right: 0,
		width:48,
		height:48,
		image:'search.png'
	});
	
	//Search type button (left of bar)
	var searchType = Ti.UI.createButton({
		top: 10,
		left: 0,
		width:48,
		height:48,
		image: 'search_type.png'
	});
	
	searchType.addEventListener('click', function(e){
		var sType = Ti.UI.createOptionDialog({
			title:'Search what?',
			options:['Parks', 'Events', 'Activities', 'Staff'],
			cancel:4
		});
		
		sType.show();
	});
	
	searchButton.addEventListener('click', function(e){
		search.setHintText('Locating nearest park...');
		search.setValue('Locating nearest park...');

	});
	
	
	
	searchBar.add(searchButton);
	searchBar.add(searchType);
	searchBar.add(search);
	
	return searchBar;
}