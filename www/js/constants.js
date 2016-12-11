var SETTINGS = {};
	SETTINGS.localServer = 'http://localhost:3000';
	SETTINGS.remoteServer = 'http://127.0.0.1:3005/api';//TODO
	SETTINGS.remoteTestServer = 'http://107.170.47.77:3005/api';


var CONSTANTS = {};
	CONSTANTS.pageId = {
		home  : 1,
		login : 2
	}

var Env = function(){	
	return SETTINGS.remoteServer;
}

//Wishapic#01