var SETTINGS = {};
	SETTINGS.localServer = 'http://localhost:3000';
	SETTINGS.remoteServer = 'http://127.0.0.1:3005/api';//TODO
	SETTINGS.remoteTestServer = 'http://45.55.140.212:3005/api';


var CONSTANTS = {};
	CONSTANTS.pageId = {
		home  : 1,
		login : 2
	}

var Env = function(){	
	return SETTINGS.remoteServer;
}