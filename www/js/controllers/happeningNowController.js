app.controller('happeningNowCtrl', function ($scope, CONFIG) {
	var pageId = CONSTANTS.pageId.home;
	CONFIG.all(pageId).success(function (response) {
		//UTILS.setBackground('#home',response[0].bg);
	});
})
