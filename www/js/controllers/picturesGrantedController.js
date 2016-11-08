app.controller('picturesGrantedCtrl', function ($scope, getPicturesGranted,$location,$stateParams) {

               var pictureId = $stateParams.pictureId;
                 console.log(pictureId);
	getPicturesGranted.all(pictureId).success(function (response) {
                                           console.log(response);
		$scope.user = response.user;
//		$scope.post = response[0].post;
		$scope.picture = response.docs;

	});

})
