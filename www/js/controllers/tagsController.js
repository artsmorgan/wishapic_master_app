app.controller('tagsCtrl', function ($scope, getTags, $location) {
	$scope.tags = null;

	getTags.all().success(function (response) {
		$scope.tags = response;
	});
})
