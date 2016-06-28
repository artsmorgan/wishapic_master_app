app.controller('CameraCtrl', function ($scope, CONFIG, $location) {
	
	var pageId = CONSTANTS.pageId.home;
	var notifications =  {};
	var startHoldTime = 0;
	var howLongHoldTime = 0;
	var timePassed = null;
	var maxTimeVideo = 5000;

	

	$scope.init = function(){
		console.log('init');
		CONFIG.all(pageId).success(function (response) {		
			UTILS.setBackground('#camera',response[0].bg);
		});
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



	// $scope.onDragRight = function(){
	// 	console.log('onDragRight')
	// 	// $location.path('/getStarted');
	// }

})