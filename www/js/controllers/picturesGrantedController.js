app.controller('picturesGrantedCtrl', function ($scope, getPicturesGranted,$localStorage,wishStorage, $location,$stateParams, $state) {

	var pictureId = $stateParams.pictureId;

	var localStorage = $localStorage.user;
	var userId = localStorage.id;

    
	getPicturesGranted.all(pictureId).success(function (response) {                                           
		$scope.user = response.user;
//		$scope.post = response[0].post;
		$scope.picture = response.docs;

	});

	$scope.requestWish = function($event){
				
		var wishObj = {
			userId  : $scope.user.id,
			pictureId : pictureId,
			requestedBy : userId
		};

		wishStorage.postWish(wishObj).success(function (response) {
	      $state.go('granted')
	    });

	}
})
