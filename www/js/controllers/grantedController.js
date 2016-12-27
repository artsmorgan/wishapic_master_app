app.controller('GrantedCtrl', function ($scope, $http,wishStorage, $localStorage, $ionicHistory, $ionicPopup, $ionicViewSwitcher) {
	
	$scope.usersList =[];
	
	// var pictureId 	 = $stateParams.chatId;
	var localStorage = $localStorage.user;
	var userId = localStorage.id;


	wishStorage.getGrantedByUser(userId).success(function (response) { 
	  console.log(response);
	  $scope.granted = response.docs;
	});


	$scope.myGoBack = function() {	
		$ionicViewSwitcher.nextDirection('back');
		window.history.back();
	};

	$scope.setLiveOk = function($event){
		var grantedId = $event.target.attributes.id.value;
		// $state.go('askPic')
		// A confirm dialog
		 
	   var confirmPopup = $ionicPopup.confirm({
	     title: 'Init Live Streaming?',
	     template: 'When click Ok you are going to use the livestreaming',
	     cancelText: 'Cancel',
    	 okText: 'Ok'
	   });

	   confirmPopup.then(function(res) {
	     if(res) {
	       //Do something with the camera	     
	     } else {
	       console.log('You are not sure');
	     }
	   });
	}

	
})