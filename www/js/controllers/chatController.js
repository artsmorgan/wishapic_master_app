<<<<<<< HEAD
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

  

=======
app.controller('ChatCtrl', function ($scope, $http) {
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
>>>>>>> a4a2155793a90b8d8feb1e533cb866b0a6973e12
})

