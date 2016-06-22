app.controller('happeningNowCtrl', function ($scope, getHappeningNow,$location) {

	//show hide buttons if notifications
	var wished_btn = document.getElementById('wished_btn');
	var granted_btn = document.getElementById('granted_btn');
	var chat_btn = document.getElementById('chat_btn');
	var camera_btn = document.getElementById('camera_btn');
	var userId = 1;

	$scope.cards = null;

	getHappeningNow.all(userId).success(function (response) {		
		$scope.cards = response[0].posts;
		$scope.wished = response[0].notifications.wished;
		$scope.granted = response[0].notifications.granted;
		$scope.chat = response[0].notifications.chat;
		$scope.camera = response[0].notifications.camera;

		wished_btn.style.display = ($scope.wished > 0) ? "inline-block " : "none";
		granted_btn.style.display = ($scope.granted > 0) ? "inline-block " : "none";
		chat_btn.style.display = ($scope.chat > 0) ? "inline-block " : "none";
		camera_btn.style.display = ($scope.camera > 0) ? "inline-block " : "none";

	});

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
