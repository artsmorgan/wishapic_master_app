app.controller('GrantedCtrl', function ($scope, $http,getGrantedById) {
	 $scope.usersList =[];
   var userId = 1;
	getGrantedById.all(userId).success(function (response) { 
      console.log(response);
      $scope.usersList = response[0].granteds;
   });
})