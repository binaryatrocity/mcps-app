exports.getParksInfo = function(callback) {
	var client = Ti.Network.createHTTPClient();
	client.onload = function() {
		callback(JSON.parse(this.responseText));
	};
	client.open("GET", "http://testapi.milwaukeecounty.org/MobileAPI.svc/RSSInfo/parks");
	client.send();
};