exports.createSearchBar = function(args) {
	
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
		width:380,
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
		image: 'ParkIcon.png'
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