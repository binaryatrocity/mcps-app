var mcps = {};
mcps.search = require('search');
mcps.net = require('net');

function updateParkData() {
	
	var park_data = [];
		park_data[0] = [];
		park_data[1] = [];
		
	mcps.net.getParksInfo(function(data) {
		setTimeout(function() {
			var park_info = data;
			for(var i = 0; i < Object.keys(park_info).length; i++)
			{
				park_data[0][i] = park_info[i].title;
				park_data[1][i] = park_info[i].link;
			}
		},2000);
	});
	
	return park_data;
}


exports.createParkWindow = function(e) {
		var parksWin = Ti.UI.createWindow({
			title:'Parks Window',
			backgroundColor:'white'
			// Add background image here eventually
		});
		
		var searchBar = mcps.search.createSearchBar();
		var backButton = Ti.UI.createButton({
			title: 'Back',
			bottom: 30,
			width: 100,
			height: 60
		});
		
		var park_table = Ti.UI.createTableView({headerTitle:'Parks'});
		var data_table = Ti.UI.createTableView({headerTitle:'Data'});
		var park_data;
		
		/* Get parks data from web api */
		setTimeout(function(){
			park_data = updateParkData();
			park_table.setData(park_data[0]);
			alert(park_data[0][10]);
		}, 2000);
		
		
		/* Event Listeners */
		backButton.addEventListener('click', function(e){
			parksWin.close();
		});
		
		
		/* Add elements to window and return */
		parksWin.add(searchBar);
		parksWin.add(backButton);
		parksWin.add(park_table);
		parksWin.add(data_table);
}
