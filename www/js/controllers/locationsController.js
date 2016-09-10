app.controller('locationsCtrl', function ($scope, getLocations, $location) {
	$scope.locations = null;

	getLocations.all().success(function (response) {
		$scope.locations = response[0].countries_cities;
		$scope.totalCountries = response[0].totalCountries;
		$scope.totalCities = response[0].totalCities;
	});
})
