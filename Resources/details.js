var mcps = {};
mcps.ui = require('ui');

exports.createParkDetailsWindow = function(link, description, title) {
	
	var wintitle = "" + title + " Details";
	var win = mcps.ui.createBaseWindow(wintitle);
	
	var label = Ti.UI.createLabel({
		text: wintitle,
		top: 70,
		color: '#FFF',
		font:{fontSize:24}
	});

	
	var image = Titanium.UI.createWebView({
		url: link,
	});
	
	var button = Ti.UI.createLabel({
		text: 'View Map',
		top: 120,
		color: '#FFF',
		font:{fontSize:16}
	});
	
	button.addEventListener('click', function(e){
		var win1 = Ti.UI.createWindow({title:'Park Map'});
		win.add(image);
		win1.open()
	});
	
	var desc = Ti.UI.createLabel({
		text: description,
		top: 200,
		textAlign: 'center',
		backgroundColor: '#0C0',
		color: '#FFF',
		borderRadius: 4,
		autoLink: Ti.UI.Android.LINKIFY_ALL
	});
	
	win.add(label);
	win.add(button);
	win.add(desc);
	
	return win;
}
