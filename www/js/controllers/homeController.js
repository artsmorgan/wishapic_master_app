app.controller('HomeCtrl', function ($scope, CONFIG, User, $localStorage,$location) {
	var pageId = CONSTANTS.pageId.home;
	CONFIG.all(pageId).success(function (response) {		
		UTILS.setBackground('#home',response[0].bg);
	});
	var user = $localStorage.user || null;
	
	// if(user){
	// 	$location.path('/camera');
	// }

})