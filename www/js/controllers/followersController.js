app.controller('followersgCtrl', function ($scope, getFollowers, indexList, $location) {
	var userId = 1;

	$scope.usersList = $scope.followingCount = null;

	getFollowers.all(userId).success(function (response) {
		$scope.followersCount = response[0].users.length;
		$scope.usersList = indexList(response[0].users);
	});
})
