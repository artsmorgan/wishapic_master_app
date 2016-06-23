app.controller('CameraCtrl', function ($scope, CONFIG, $location) {
	
	var pageId = CONSTANTS.pageId.home;
	var notifications =  {};
	var startHoldTime = 0;
	var howLongHoldTime = 0;
	var timePassed = null;
	var maxTimeVideo = 5000;

	$scope.hasChat = function(){
		return true;
	}
	$scope.hasGranted = function(){
		return true;
	}
	$scope.hasWished = function(){
		return true;
	}

	$scope.init = function(){
		console.log('init');
		CONFIG.all(pageId).success(function (response) {		
			UTILS.setBackground('#camera',response[0].bg);
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

	$scope.takePicture = function($event) {
		
		timePassed = setInterval(frame, 1);		
		function frame() {
			if (howLongHoldTime == maxTimeVideo) {
			  	$scope.releaseTakePicture();
			} else {
			  howLongHoldTime++; 
			}
			console.log('howLongHoldTime',howLongHoldTime);
		}
	  startHoldTime = event.timestamp;
	};

	$scope.releaseTakePicture = function ($event) {
		
		if(howLongHoldTime <= 100 && howLongHoldTime >= 1){
			console.log('picture take');
		}else if(howLongHoldTime >= maxTimeVideo){
			console.log('Process Video: ',howLongHoldTime);
			console.log('video length: ',howLongHoldTime);
			console.log('[warning] MAX video length ');
		}else {
			console.log('Process Video: ',howLongHoldTime);
			console.log('video length: ',howLongHoldTime);
		}
		clearInterval(timePassed);
		startHoldTime = 0; 	// reset after each release
		howLongHoldTime = 0;	// reset after each release
		timePassed = null;
		$location.path('addPic');
	};

	

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
		var profile = '/chat';

		if($scope.hasWished){
			profile = '/wished';
		}else if(!$scope.hasWished && $scope.hasGranted){
			profile = '/granted';
		}else{
			profile = '/chat';			
		}

		if($scope.direction == 'left'){
			$location.path('/profile');
		}else if($scope.direction=='right'){
			$location.path(profile);
		}
	}



	// $scope.onDragRight = function(){
	// 	console.log('onDragRight')
	// 	// $location.path('/getStarted');
	// }

})