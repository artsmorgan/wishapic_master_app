app.controller('GrantedCtrl', function ($scope, $http) {
	 $scope.usersList =[];
	$scope.usersAll = function () {
            $http.get('test.json').then(function(info) { 
            console.log(info.data);
            $scope.usersList = info.data;
          },
          function(errorChat) {
              console.log('data error');
          });
     };
})