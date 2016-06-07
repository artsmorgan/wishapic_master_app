app.controller('CameraCtrl', function ($scope, CONFIG,$location) {
	console.log('init')
	var pageId = CONSTANTS.pageId.home;
	CONFIG.all(pageId).success(function (response) {		
		UTILS.setBackground('#home',response[0].bg);
	});
	$scope.onSwipeLeft = function(){
		console.log('swipe left')
		$location.path('/home');
	}
	$scope.onSwipeRight = function(){
		console.log('swipe right')
		$location.path('/getStarted');
	}
	// $scope.onDragRight = function(){
	// 	console.log('onDragRight')
	// 	// $location.path('/getStarted');
	// }

})