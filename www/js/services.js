app.factory('CONFIG', function ($http, $rootScope, $stateParams) {
  return {
    all: function (params) {
      return $http.get(Env()+'/config', { params: { id: params } })
    }
  };
});

app.factory('getWishedById', function ($http, $rootScope, $stateParams) {
  return {
    all: function (userId) {
      return $http.get(Env()+'/wished', { params: { id: userId } })
    }
  };
});

app.factory('getGrantedById', function ($http, $rootScope, $stateParams) {
  return {
    all: function (userId) {
      return $http.get(Env()+'/granted', { params: { id: userId } })
    }
  };
});

app.factory('getHappeningNow', function ($http, $rootScope, $stateParams) {
  return {
    all: function (userId) {
      return $http.get(Env()+'/pictures/happeningNow')
    }
  };
});

app.factory('getUser', function ($http, $rootScope, $stateParams) {
  return {
    byId: function (userId) {
      return $http.get(Env()+'/user/get/'+userId)
    }
  };
});

app.factory('getNotifications', function ($http, $rootScope, $stateParams) {
  return {
    all: function (userId) {
      return $http.get(Env()+'/notifications/'+userId )
    }
  };
});

app.factory('getLocations', function ($http, $rootScope, $stateParams) {
  return {
    all: function () {
      return $http.get(Env()+'/locations')
    }
  };
});

app.factory('getTags', function ($http, $rootScope, $stateParams) {
  return {
    all: function () {
      return $http.get(Env()+'/tags')
    }
  };
});

app.factory('getPicturesGranted', function ($http, $rootScope, $stateParams) {
  return {
    all: function (pictureId) {
      return $http.get(Env()+'/pictures/pic/'+pictureId)
    }
  };
});

app.factory('getFollowPerson', function ($http, $rootScope, $stateParams) {
  return {
    all: function (userId) {
      return $http.get(Env()+'/followPerson', { params: { id: userId } })
    }
  };
});

app.factory('getChatList', function ($http, $rootScope, $stateParams) {
  return {
    all: function (userId) {
      return $http.get(Env()+'/chat/getByUser/'+userId);
    }
  };
});

app.factory('getFollowing', function ($http, $rootScope, $stateParams) {
  return {
    all: function (userId) {
      return $http.get(Env()+'/following', { params: { id: userId } })
    },
    count: function (userId) {
      return $http.get(Env()+'/following/count', { params: { id: userId } })
    },
  };
});
//chatStorage
app.factory('chatStorage', function ($http, $rootScope, $stateParams) {
  return {
    postMessage: function (msjObj) {
      return $http.post(Env()+'/chat/message', msjObj)
    },

    getChatByIdChat: function(chatId){
        return $http.get(Env()+'/chat/id/'+chatId);
    },

    getChatIdByusers: function(uid, auid){
        return $http.get(Env()+'/chat/hasChat/'+uid+'/'+auid);
    },

    getNewMessages: function (chatId, userId) {
      return $http.get(Env()+'/chat/getNewMessage/'+chatId+'/'+userId )
    },

    setReadMessage: function(msjObj){
      return $http.post(Env()+'/chat/updateMessageById', {messages: msjObj})
    }

  };
});

app.factory('getFollowers', function ($http, $rootScope, $stateParams) {
  return {
    all: function (userId) {
      return $http.get(Env()+'/followers', { params: { id: userId } })
    },
    count: function (userId) {
      return $http.get(Env()+'/followers/count', { params: { id: userId } })
    },
  };
});

app.factory('Poller', function($http,$q){
   return {
        poll : function(api){
            // var deferred = $q.defer();
            // $http.get(api).then(function (response) {
            //         deferred.resolve(response.data);
            // });
            // return deferred.promise;
            return 'test';
        }

    }
});

app.factory('indexList', function () {
  return function(list) {
    var currentCharacter = '';
    var indexedList = {};
    angular.forEach(list, function(user){
      if (currentCharacter != user.username.charAt(0)) {
        currentCharacter = user.username.charAt(0);
        indexedList[currentCharacter] = [];
      }
      indexedList[currentCharacter].push(user);
    });

    return indexedList;
  };
});

app.service('VideoService', function($q) {
    var deferred = $q.defer();
    var promise = deferred.promise;
    
    promise.success = function(fn) {
        promise.then(fn);
        return promise;
    }
    promise.error = function(fn) {
        promise.then(null, fn);
        return promise;
    }
    // Resolve the URL to the local file
    // Start the copy process
    function createFileEntry(fileURI) {
        window.resolveLocalFileSystemURL(fileURI, function(entry) {
                                     return copyFile(entry);
                                     }, fail);
    }
    
    // Create a unique name for the videofile
    // Copy the recorded video to the app dir
    function copyFile(fileEntry) {
        var name = fileEntry.fullPath.substr(fileEntry.fullPath.lastIndexOf('/') + 1);
        var newName = makeid() + name;
        
        window.resolveLocalFileSystemURL(cordova.file.dataDirectory, function(fileSystem2) {
                                     fileEntry.copyTo(fileSystem2, newName, function(succ) {
                                                      return onCopySuccess(succ);
                                                      }, fail);
                                     },
                                     fail
                                     );
    }
    
    // Called on successful copy process
    // Creates a thumbnail from the movie
    // The name is the moviename but with .png instead of .mov
    function onCopySuccess(entry) {
        var name = entry.nativeURL.slice(0, -4);
        window.PKVideoThumbnail.createThumbnail (entry.nativeURL, name + '.png', function(prevSucc) {
                                             return prevImageSuccess(prevSucc);
                                             }, fail);
    }
    
    // Called on thumbnail creation success
    // Generates the currect URL to the local moviefile
    // Finally resolves the promies and returns the name
    function prevImageSuccess(succ) {
        var correctUrl = succ.slice(0, -4);
        correctUrl += '.MOV';
        deferred.resolve(correctUrl);
    }
    
    // Called when anything fails
    // Rejects the promise with an Error
    function fail(error) {
        console.log('FAIL: ' + error.code);
        deferred.reject('ERROR');
    }
    
    // Function to make a unique filename
    function makeid() {
        var text = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for ( var i=0; i < 5; i++ ) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }
    
    // The object and functions returned from the Service
    return {
        // This is the initial function we call from our controller
        // Gets the videoData and calls the first service function
        // with the local URL of the video and returns the promise
        saveVideo: function(data) {
            createFileEntry(data[0].localURL);
            return promise;
        }
    }
});
