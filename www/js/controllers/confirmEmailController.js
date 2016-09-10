app.controller('ConfirmEmailCtrl', function ($stateParams,$scope, $http) {
	 $scope.email = $stateParams.email;
	 console.log($scope.email);
 });  