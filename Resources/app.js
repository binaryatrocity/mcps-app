Ti.UI.setBackgroundColor('#ffffff');

var mcps = {}; // project namespace

mcps.ui = require('ui'); // import ui namespace
mcps.net = require('net');
mcps.details = require('details');

var win = createApplicationWindow();
win.open();


function createParkWindow() {
	/* Creates the top-level park window */
	var win = mcps.ui.createBaseWindow('Park Info');
	var parks_table = mcps.net.getParkData();
	
	// parks_table.set[BackgroundColor, HeaderTitle, Height, Opacity, ]
	parks_table.setHeaderTitle('Park Information');
	parks_table.setHeight(150);
	parks_table.setTop(80);
	parks_table.setOpacity(0.6);	
	
	win.add(parks_table);
	
	return win;
}

function createEventWindow() {
	/* Creates the top-level event window */
	var win = mcps.ui.createBaseWindow('Event Info');
	var events_table = mcps.net.getEventData();
	
	events_table.setHeaderTitle('Event Info');
	events_table.setHeight(150);
	events_table.setTop(80);
	events_table.setOpacity(0.6);
	
	var optview = 
	win.add(events_table);
	
	return win;
}

function createApplicationWindow() {
	
	var win = mcps.ui.createBaseWindow('Main Window');
	
	var park_button = Ti.UI.createButton({
		image:'parksbutton.png',
		top: 100,
		left: 20
	});
	
	var event_button = Ti.UI.createLabel({
		text: 'Events',
		font:{fontSize:28}, // you can add fontFace etc
		textAlign:'center',
		color:'#0C0', // color of the text
		backgroundColor:'#029',
		borderColor: '#0A0',
		borderRadius: 10, // adjusts how rounded corners are, 0 is flat
		borderWidth: 1,
		opacity: 0.6, // sets transparency, 0.0 is transparent, 1.0 is opaque
		height: 50,
		width: 201,
		top: 160,
		left: 20
	});
	
	/* Event Listeners */
	park_button.addEventListener('click', function(e) {
		var park_window = createParkWindow();
		park_window.open();
	});
	
	event_button.addEventListener('click', function(e) {
		var event_window = createEventWindow();
		event_window.open();
	});
	
	
	/* Add everything to the window */
	win.add(park_button);
	win.add(event_button);
	
	return win;
}