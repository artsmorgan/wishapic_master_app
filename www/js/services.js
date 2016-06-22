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