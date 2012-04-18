var views = {};
views.search = require('search');
views.park = require('parks');
views.events = require('events');
views.net = require('net');
views.fb = require('fb');

exports.createApplicationWindow = function(args) {
		
	var win1 = Ti.UI.createWindow(
		{
			title:'Main Window',
			backgroundColor: 'white',
			exitOnClose: true
		}
	);
	
	var logo = Ti.UI.createImageView(
		{
			image:'mcps.png',
			bottom: 25,
			height: 'auto',
			width: 'auto'
			
		}
	);
	
	var searchBar = views.search.createSearchBar();
	var mainView = createIconView();
	
	
	win1.add(logo);
	win1.add(mainView);
	win1.add(searchBar);
	
	return win1;
}

function createIconView() {
	var icosize = 108;

	//Main view holds all icons and labels, gets returned
	var mainView = Ti.UI.createView({
		backgroundColor:'white',
		//backgroundImage:'back.png',
		width:'100%',
		height:'70%',
		top:65
	});
	
	// Icons
	var parkico = Ti.UI.createImageView({
			image:'ParkIcon.png',
			top: 80,
			left: 80,
			height: icosize,
			width: icosize,
	});
	var eventico = Ti.UI.createImageView({
			image:'EventIcon.png',
			top: 80,
			right: 80,
			height: icosize,
			width: icosize
	});
	var actico = Ti.UI.createImageView({
			image:'ActivityIcon.png',
			top: 300,
			left: 80,
			height: icosize,
			width: icosize
	});
	var conico = Ti.UI.createImageView({
			image:'ContactIcon.png',
			top: 300,
			right: 80,
			height: icosize,
			width: icosize
	});
	
	//Labels
	var parklab = Ti.UI.createLabel({
			color: 'white',
			text: 'Parks',
			textAlign: 'center',
			borderColor: '#456858',
			borderRadius: 12,
			width: 150,
			top: 200,
			left: 60
	});
	var eventlab = Ti.UI.createLabel({
			color: 'white',
			text: 'Events',
			textAlign: 'center',
			borderColor: '#456858',
			borderRadius: 12,
			width: 150,
			top: 200,
			right: 60
	});
	var actlab = Ti.UI.createLabel({
			color: 'white',
			text: 'Activities',
			textAlign: 'center',
			borderColor: '#456858',
			borderRadius: 12,
			width: 150,
			top: 420,
			left: 60
	});
	var conlab = Ti.UI.createLabel({
			color: 'white',
			text: 'Weather',
			textAlign: 'center',
			borderColor: '#456858',
			borderRadius: 12,
			width: 150,
			top: 420,
			right: 60
	});

	
	parkico.addEventListener('click', function(e){
		
		var parkWin = views.park.createParksView();
		parkWin.open();
	});
	eventico.addEventListener('click', function(e){
		var eventWin = views.events.createEventsView();
		eventWin.open();
	});
	actico.addEventListener('click', function(e){
		alert('Coming Soon');
	});
	conico.addEventListener('click', function(e){
		var fbWin = views.fb.createFBView();
		fbWin.open();
	});

	mainView.add(parkico);
	mainView.add(eventico);
	mainView.add(actico);
	mainView.add(conico);
	mainView.add(parklab);
	mainView.add(eventlab);
	mainView.add(actlab);
	mainView.add(conlab);

	return mainView;
}

/*o*/