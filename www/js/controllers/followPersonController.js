app.controller('followPersonCtrl', function ($scope, getFollowPerson, $location) {
	var userId = 1;

	$scope.userInfo = null;

	getFollowPerson.all(userId).success(function (response) {
		$scope.userInfo = response[0].userInfo;
	});
})
