app.controller('viewProfileCtrl', function ($scope, getUser, $location,$stateParams,$state) {
	var userId = $stateParams.userId;
	$scope.tags = null;
	
	getUser.byId(userId).success(function (response) {
		console.log(response);
		$scope.user = response.user;
	});


	$scope.getChat = function($event){
		// console.log($event);
       var id = $event.target.attributes.id.value;
       $state.go('chatRoom',{userId:id});
	}
})
