var SETTINGS = {};
	SETTINGS.localServer = 'http://localhost:3000';
	SETTINGS.remoteServer = '';//TODO


var CONSTANTS = {};
	CONSTANTS.homeId = 1;

var Env = function(){
	local = true;
	return (local) ? SETTINGS.localServer : SETTINGS.remoteServer;
}