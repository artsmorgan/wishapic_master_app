app.controller('happeningNowCtrl', function ($scope, getHappeningNow,getNotifications,$location,$state,$localStorage) {

	//show hide buttons if notifications
	var wished_btn = document.getElementById('wished_btn');
	var granted_btn = document.getElementById('granted_btn');
	var chat_btn = document.getElementById('chat_btn');
	var camera_btn = document.getElementById('camera_btn');
	var localStorage = $localStorage.user;
	var userId = localStorage.id;

	$scope.cards = null;

	$scope.hasChat = function(){
		return true;
	}
	$scope.hasGranted = function(){
		return true;
	}
	$scope.hasWished = function(){
		return true;
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
//		var profile = '/chat';
//
//		if($scope.hasWished){
//			profile = '/wished';
//		}else if(!$scope.hasWished && $scope.hasGranted){
//			profile = '/granted';
//		}else{
//			profile = '/chat';			
//		}

		if($scope.direction == 'left'){
			$location.path('/profile');
		}else if($scope.direction=='right'){
			$location.path(profile);
		}
	}
	getNotifications.all(userId).success(function (response) {
                                         console.log(response);
		$scope.wished = response.notifications.wished;
		$scope.granted = response.notifications.granted;
		$scope.chat = response.notifications.chat;
		$scope.camera = response.notifications.camera;

		wished_btn.style.display = ($scope.wished > 0) ? "inline-block " : "none";
		granted_btn.style.display = ($scope.granted > 0) ? "inline-block " : "none";
		chat_btn.style.display = ($scope.chat > 0) ? "inline-block " : "none";
//		camera_btn.style.display = ($scope.camera > 0) ? "inline-block " : "none";
	});

	getHappeningNow.all(userId).success(function (response) {
                                        console.log('happening now: ');
                                        console.log(response);
		$scope.cards = response.docs;
	});

	$scope.getHappeningNow = function($event){

               var id = $event.target.attributes.id.value;
               // console.log(id);
               // $state.go('chatRoom',{userId:id});
               $state.go('picturesGranted',{pictureId:id})
	}

	$scope.getProfile = function($event){
		// console.log($event);
       var id = $event.target.attributes.id.value;
       $state.go('viewProfile',{userId:id})
	}

	$scope.onTouch = function($event){
		var id = $event.path[0].id;
		switch(id){
			case 'wished_btn':
				location = '#/wished';
				break;
			case 'granted_btn':
				location = '#/granted';
				break;
			case 'chat_btn':
				location = '#/chat';
				break;
			case 'camera_btn':
				location = '#/camera';
				break;			
		}
		$location.path(location);
	}



})
