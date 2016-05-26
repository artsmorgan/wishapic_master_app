var SETTINGS = {};
	SETTINGS.localServer = 'http://localhost:3000';
	SETTINGS.remoteServer = '';//TODO


var CONSTANTS = {};
	CONSTANTS.pageId = {
		home  : 1,
		login : 2,
	}

var Env = function(){
	local = true;
	return (local) ? SETTINGS.localServer : SETTINGS.remoteServer;
}