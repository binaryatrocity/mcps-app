var view = {};
view.search = require('search');

exports.createEventsView = function(e){
	
	var eventsWindow = Ti.UI.createWindow({
			title:'Events Window',
			backgroundColor: 'white'
	});
	
	var searchBar = view.search.createSearchBar();
	
	var mainView = Ti.UI.createView({
		backgroundColor:'white',
		width:'100%',
		height:'75%',
		top:65
	});
	
	var label = Ti.UI.createLabel({text:'Events Window!'});
	
	var backButton = Ti.UI.createButton({
		title: 'Back',
		bottom: 30,
		width: 100,
		height: 60
	});
	
	backButton.addEventListener('click', function(e){
		eventsWindow.close();
	});
	
	mainView.add(label);
	
	eventsWindow.add(searchBar);
	eventsWindow.add(mainView);
	eventsWindow.add(backButton);

	return eventsWindow;
}
