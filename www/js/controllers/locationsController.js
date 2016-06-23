app.controller('locationsCtrl', function ($scope, getLocations, $location) {
	$scope.locations = null;

	getLocations.all().success(function (response) {
		$scope.locations = response[0].countries_cities;
		$scope.totalCountries = response[0].totalCountries;
		$scope.totalCities = response[0].totalCities;
	});

	$scope.onTouch = function($event){
		var id = $event.path[0].id;
		switch(id){
			case 'wished_btn':
				location = '#/wished';
				break;
			case 'granted_btn':
				location = '#/granted';
				break;
			case 'chat_btn':
				location = '#/chat';
				break;
			case 'camera_btn':
				location = '#/camera';
				break;
		}
		$location.path(location);
	}



})
