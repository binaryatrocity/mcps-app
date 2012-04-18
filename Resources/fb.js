function createFaceBookButton(){
	Ti.Facebook.appid = '184482501591139';
	Ti.Facebook.permissions = ['publish_stream']; // Set permissions for FB
	Ti.Facebook.addEventListener('login', function(e) {
		if(e.success) {
			alert('Logged In');
		}
	});
	Ti.Facebook.addEventListener('logout', function(e) {
		alert('Logged out');
	});

	return Ti.Facebook.createLoginButton({bottom: 50});

};

function postToFaceBook(){
	var imgView = Ti.UI.createImageView(
		{
			image:'mcps.png',
			bottom: 25,
			height: 'auto',
			width: 'auto'
			
		}
	);
	
	var data = {
  		message: 'I\'m currently enjoying a Milwaukee County park!',
  		picture: imgView.toBlob()    //imgView is your ImageView
	};
 
	Ti.Facebook.requestWithGraphPath(
		'me/photos',
		 data,
		 'POST',
		 function(e) { if(e.success) {alert('FB Post Sucessfull');} }
	);
	
}

exports.createFBView = function (e) {
	var fbWindow = Ti.UI.createWindow({
		title: 'Share',
		backgroundColor: 'white'
	});
	
	var fbButton = createFaceBookButton();
	var shareButton = Ti.UI.createButton({
		title: 'Share on Facebook',
		top: 50,
		width: 200,
		height: 100
	});
	shareButton.addEventListener('click', function(e) {
		postToFaceBook();
	});
	
	
	
	
	
	fbWindow.add(fbButton);
	fbWindow.add(shareButton);
	
	return fbWindow;
	
}
