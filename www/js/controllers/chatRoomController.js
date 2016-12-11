<<<<<<< HEAD
app.controller('ChatRoomCtrl', function( $scope, getUser, $location, $stateParams, $state, Poller, $interval,
                                          $timeout, $ionicScrollDelegate, $localStorage, chatStorage, $rootScope) {
  
  var userId = $stateParams.userId;
  var chatId = $stateParams.chatId;
  var localStorage = $localStorage.user;
  var myId = localStorage.id;
  console.log('my id', myId);

  $scope.hideTime = true;

  $scope.getChatList = function($event){
       $state.go('chat');
  }

  $scope.data = {};
  $scope.myId = myId;
  $scope.messages = [];

  getUser.byId(userId).success(function (response) {
    $scope.user = response.user;
  });

  if(chatId){
    chatStorage.getChatByIdChat(chatId).success(function (response) {              
        if(response.messages.length > 0){          
          var msj = parseMsg(response.messages);
           setReadMessage(getMessageList(response.messages));
          $scope.messages = msj;
        }else{
          $scope.messages =  [];
        }
        
    });
  }  

  function setReadMessage(list){
  
    chatStorage.setReadMessage(list).success(function (response) {  
      console.log('setReadMessage',response);
    });
  }

  function getMessageList(msgList){
    var arr = [];
    msgList.forEach(function(el, i){         
      console.log('userTo',el['userTo']);
      console.log('userFrom',el['userTo']);
      if(el['userTo'] != myId){
        var obj = {};   
        obj.id = el['_id'];      
        arr.push(obj);
      }      
    });
    console.log(arr);
    return arr;
  }

  function parseMsg(msgList){
    var arr = [];
    msgList.forEach(function(el, i){
      var obj = {};
      var myMessage = (el['userTo']==myId);

      obj.id = el['_id'];
      obj.media = el['media'];
      obj.message = el['message'];
      obj.readUnreadFlg = el['readUnreadFlg'];
      obj.userFrom = el['userFrom'];
      obj.userTo = el['userTo'];
      obj.myMessage = myMessage;
      arr.push(obj);
    });
    console.log(arr);
    return arr;
  }




function yourOperation() {
  
  if(chatId){
    // console.log('here');
    pushMessage(chatId, userId)
  }else{    
    // console.log('there');
    chatStorage.getChatIdByusers(userId, myId).success(function (response) { 
      // console.log(response);
      if(response.chatId>0){
        pushMessage(response.chatId, userId)
      }
    });
  }
  
}

function pushMessage(chatId, userId){
  chatStorage.getNewMessages(chatId, userId).success(function (response) {  
        // console.log(response.messages);
        var msjs = parseMsg(response.messages);
        if(msjs){
          for(i = 0; i < msjs.length; i++){
            $scope.messages.push(msjs[i]);
            $ionicScrollDelegate.scrollBottom(true);
            // console.log(msjs[i]);
            setReadMessage([{id: msjs[i].id}]);
          }  
        }
    });
}

$scope.$on('$ionicView.enter',function(){       
      $scope.stop = $interval(yourOperation, 1000);

      var dereg = $rootScope.$on('$locationChangeSuccess', function() {   
        $interval.cancel($scope.stop);
        dereg();
      });
});

// $scope.callingFunctionName =  function(){
//   console.log('test');
// }
  

  var alternate,
  isIOS = ionic.Platform.isWebView() && ionic.Platform.isIOS();
=======
app.controller('ChatRoomCtrl', function($scope, $timeout, $ionicScrollDelegate) {
  

  $scope.hideTime = true;

  var alternate,
    isIOS = ionic.Platform.isWebView() && ionic.Platform.isIOS();
>>>>>>> a4a2155793a90b8d8feb1e533cb866b0a6973e12

  $scope.sendMessage = function() {
    alternate = !alternate;

    var d = new Date();
<<<<<<< HEAD
    d = d.toLocaleTimeString().replace(/:\d+ /, ' ');

    var msjObj = {
      receiver: userId,
      message: $scope.data.message,
      time: d,
      sender: myId,
      myMessage: true
    }
    console.log('msjObj',msjObj);
    $scope.messages.push(msjObj);

    chatStorage.postMessage(msjObj).success(function (response) {
      console.log('response',response);
    });


=======
  d = d.toLocaleTimeString().replace(/:\d+ /, ' ');

    $scope.messages.push({
      userId: alternate ? '12345' : '54321',
      text: $scope.data.message,
      time: d
    });

>>>>>>> a4a2155793a90b8d8feb1e533cb866b0a6973e12
    delete $scope.data.message;
    $ionicScrollDelegate.scrollBottom(true);

  };


  $scope.inputUp = function() {
    if (isIOS) $scope.data.keyboardHeight = 216;
    $timeout(function() {
      $ionicScrollDelegate.scrollBottom(true);
    }, 300);

  };

  $scope.inputDown = function() {
    if (isIOS) $scope.data.keyboardHeight = 0;
    $ionicScrollDelegate.resize();
  };

  $scope.closeKeyboard = function() {
    // cordova.plugins.Keyboard.close();
  };


<<<<<<< HEAD
  
=======
  $scope.data = {};
  $scope.myId = '12345';
  $scope.messages = [];
>>>>>>> a4a2155793a90b8d8feb1e533cb866b0a6973e12

})