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
      return $http.get(Env()+'/happeningNow', { params: { id: userId } })
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
    all: function (userId) {
      return $http.get(Env()+'/picturesGranted', { params: { id: userId } })
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

app.factory('getFollowing', function ($http, $rootScope, $stateParams) {
  return {
    all: function (userId) {
      return $http.get(Env()+'/following', { params: { id: userId } })
    }
  };
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
