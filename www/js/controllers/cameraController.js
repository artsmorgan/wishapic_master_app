app.controller('CameraCtrl', function ($scope, CONFIG, $state, $location, $cordovaCapture, VideoService,$cordovaFile) {
	//$cordovaCapture, VideoService
	
	var pageId = CONSTANTS.pageId.home;
	var notifications =  {};
	var startHoldTime = 0;
	var howLongHoldTime = 0;
	var timePassed = null;
	var maxTimeVideo = 5000;
    
   $scope.images = [];
   
   $scope.addImage = function() {
       console.log("add image");
   }
   
   $scope.urlForImage = function(imageName) {
       console.log("get correct path for image");
   }
 
               
               
    function cameraOn(){
        var options = { limit: 3 };
       var image = document.getElementById('myImage');
            $cordovaCapture.captureImage(options).then(function(imageData) {
                  console.log(imageData)
                   var i, path, len;
                   for (i = 0, len = imageData.length; i < len; i += 1) {
                       path = imageData[i].fullPath;
                       console.log('path',path);
//                       image.src = "data:image/jpeg;base64," + imageData;
                           image.src = path;
                   }
                  
                  
                  //save image
            }, function(err) {
              // An error occurred. Show a message to the user
            });
    }
               
               
    $scope.$on('$ionicView.enter', function() {
               cameraOn();
    });
   
               
               
   //////////////////////////////////////////////////////////
    
   
  


	$scope.init = function(){
		CONFIG.all(pageId).success(function (response) {		
			UTILS.setBackground('#camera',response[0].bg);
		});
	}


	$scope.takePicture = function($event) {
               console.log('clicked');
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
               console.log('new log location');
		$location.path('/addPic');
               
	};



	// $scope.onDragRight = function(){
	// 	console.log('onDragRight')
	// 	// $location.path('/getStarted');
	// }

})