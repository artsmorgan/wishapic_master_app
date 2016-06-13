app.controller('CameraCtrl', function ($scope, CONFIG,$location) {
	
	var pageId = CONSTANTS.pageId.home;

	$scope.init = function(){
		console.log('init');
		CONFIG.all(pageId).success(function (response) {		
			UTILS.setBackground('#home',response[0].bg);
		});
	}

	$scope.onSwipeLeft = function(){
		console.log('swipe left')
		$location.path('/profile');
	}
	$scope.onSwipeRight = function(){
		console.log('swipe right')
		$location.path('/chat');
	}

	$scope.direction = null;

	$scope.onDragRight = function(event){
		// console.log(event);
		 console.log('swipe right')
		$scope.direction = 'right';
		// $location.path('/chat');
	}
	$scope.onDragLeft = function(event){		
		 console.log('swipe left')
		$scope.direction = 'left';
	}

	$scope.onRelease = function(event){
		console.log($scope.direction);
		if($scope.direction == 'left'){
			$location.path('/profile');
		}else if($scope.direction=='right'){
			$location.path('/chat');
		}
	}



	// $scope.onDragRight = function(){
	// 	console.log('onDragRight')
	// 	// $location.path('/getStarted');
	// }

})