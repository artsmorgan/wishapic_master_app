app.controller('addPicCtrl', function ($scope, CONFIG) {
	var pageId = CONSTANTS.pageId.logins;
	CONFIG.all(pageId).success(function (response) {
        console.log(pageId);
		UTILS.setBackground('#addPic',response[0].bg);
	});
    
})