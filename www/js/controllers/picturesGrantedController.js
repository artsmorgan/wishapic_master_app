app.controller('picturesGrantedCtrl', function ($scope, getPicturesGranted,$location) {

	var userId = 1;

	$scope.user = $scope.post = $scope.pictures = null;

	getPicturesGranted.all(userId).success(function (response) {
		$scope.user = response[0].user;
		$scope.post = response[0].post;
		$scope.pictures = response[0].pictures;

	});

})
