app.controller('WishedCtrl', function ($scope, $http,wishStorage,$state, $localStorage, $ionicPopup) {
	
	$scope.usersList =[];
	
	var localStorage = $localStorage.user;
	var userId = localStorage.id;

	wishStorage.getWishByUser(userId).success(function (response) { 
		console.log(response);
		$scope.wishes = response.docs;
   	});

	$scope.getWished = function($event){
		// console.log('test');
		var wishId = $event.target.attributes.id.value;
		// $state.go('askPic')
		// A confirm dialog
		 
	   var confirmPopup = $ionicPopup.confirm({
	     title: 'Grant this Wish?',
	     template: 'Are you sure you want to grant this wish?',
	     cancelText: 'Delete',
    	 okText: 'Grant'
	   });

	   confirmPopup.then(function(res) {
	     if(res) {
	       var wishObj = {};
	       		wishObj.id = wishId;

	       wishStorage.setGranted(wishObj).success(function (response) {
		      // $state.go('granted')
		      console.log(response);
		   });

	     } else {
	       console.log('You are not sure');
	     }
	   });
		 
	}
})