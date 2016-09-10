app.controller('followingCtrl', function ($scope, getFollowing, indexList, $location) {
	var userId = 1;

	$scope.usersList = $scope.followingCount = null;

	getFollowing.all(userId).success(function (response) {
		$scope.followingCount = response[0].users.length;
		$scope.usersList = indexList(response[0].users);
	});
})
