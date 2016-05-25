app.factory('CONFIG', function ($http, $rootScope, $stateParams) {
  console.log('$rootScope',$rootScope);
  return {
    all: function (params) {      
      return $http.get(Env()+'/config', { params: { id: params } })
    }
  };
});