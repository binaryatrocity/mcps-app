var view = {};
view.search = require('search');
view.net = require('net');

exports.createParksView = function(e){
	
	var parksWindow = Ti.UI.createWindow({
			title:'Parks Window',
			backgroundColor: 'white'
	});
	
	var searchBar = view.search.createSearchBar();
	var parkInfo = {};
	var park_data = [];
		park_data[0] = [];
		park_data[1] = [];
		
	var park_infos = [];
	var ptable = Ti.UI.createTableView({headerTitle:'Parks'});

	view.net.getParksInfo(function(data) {
		
		
		setTimeout(function() {
			parkInfo = data;
				
			for(var i = 0; i < Object.keys(parkInfo).length; i++)
			{
				park_data[0][i] = parkInfo[i].title;
				park_data[1][i] = parkInfo[i].link;
			}
			
					
			ptable.setData(park_data[0]);
			parkView.add(ptable);			
			//alert(parkInfo[0].title);
			alert(park_data[0][12]);
			
		},2000);

	});
	
	var mainView = Ti.UI.createView({
		backgroundColor:'white',
		width:'100%',
		height:'75%',
		top:65
	});
	
	var parkView = Ti.UI.createView({
		backgroundColor:'white',
		width:'75%',
		height:'75%',
		top:65,
		left:0
	});
	
	var distView = Ti.UI.createView({
		backgroundColor:'white',
		width:'25%',
		height:'75%',
		top:65,
		right:0
	});
	
	var pdata = [
		{title:'Whitnall Park'},
		{title:'Greenfield Park'},
		{title:'Alan Kulwiki Park'},
		{title:'Hales Corners Park'},
		{title:'Bradford Beach'},
		{title:'Brown Deer Park'},
		{title:'Cambridge Woods'},
		{title:'Humboldt Park'},
		{title:'Bay View Park'}
	];
	
	var ddata = [
		{title:'5.38 mi.'},
		{title:'10.56 mi.'},
		{title:'0.53 mi.'},
		{title:'1.93 mi.'},
		{title:'33.34 mi.'},
		{title:'42.40 mi.'},
		{title:'31.00 mi.'},
		{title:'12.94 mi.'},
		{title:'34.49 mi.'}
	];

	
	var dtable = Ti.UI.createTableView({data:ddata, headerTitle:'Distance'});
	
	var backButton = Ti.UI.createButton({
		title: 'Back',
		bottom: 30,
		width: 100,
		height: 60
	});
	
	backButton.addEventListener('click', function(e){
		alert(parkInfo);
		parksWindow.close();
	});
	
	distView.add(dtable);
	
	mainView.add(parkView);
	mainView.add(distView);
		
	parksWindow.add(searchBar);
	parksWindow.add(mainView);
	parksWindow.add(backButton);
	
	
	return parksWindow;
}
