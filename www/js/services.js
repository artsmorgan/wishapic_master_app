app.factory('CONFIG', function ($http, $rootScope, $stateParams) {
  return {
    all: function (params) {      
      return $http.get(Env()+'/config', { params: { id: params } })
    }
  };
});