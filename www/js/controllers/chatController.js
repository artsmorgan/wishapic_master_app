app.controller('ChatCtrl', function ($scope, $http, $localStorage, getChatList, $window,
                                      $state, $timeout, $interval, $rootScope, $location) {
	 $scope.usersList =[];
   $scope.users = {};
   var localStorage = $localStorage.user; 
	
  getChatList.all(localStorage['id']).success(function (response) {
    console.log(response.docs);
    $scope.users = response.docs;
  });

  $scope.getChatList = function($event){
      // var target = $event.target || $event.srcElement;

      var chatId = $event.target.attributes.chatId.value;        
       var id = $event.target.attributes.id.value;
       $state.go('chatRoom',{userId:id, chatId: chatId})
  }

  // $interval(yourOperation, 1000)

  

})

