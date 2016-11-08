    app.factory('User', ['$http', '$localStorage', function($http, $localStorage){
        var baseUrl = Env();
        
        function changeUser(user) {
            angular.extend(currentUser, user);
        }
 
        // function urlBase64Decode(str) {
        //     var output = str.replace('-', '+').replace('_', '/');
        //     switch (output.length % 4) {
        //         case 0:
        //             break;
        //         case 2:
        //             output += '==';
        //             break;
        //         case 3:
        //             output += '=';
        //             break;
        //         default:
        //             throw 'Illegal base64url string!';
        //     }
        //     return window.atob(output);
        // }
 
        function getUserFromToken() {
            return $localStorage.user || {};;
        }
 
        var currentUser = getUserFromToken();
        
        return {
            signup: function(data, success, error) {
                $http.post(baseUrl + '/user/create', data).success(success).error(error)
            },
            login: function(data, success, error) {                
                $http({
                    url: baseUrl + '/login',
                    method: "POST",
                    data: {email:data.email,password:data.password},
                    // headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).success(success).error(error)
            },
            getCurrent: function(){
                getUserFromToken();
            },
            me: function(success, error) {
                $http.get(baseUrl + '/me').success(success).error(error)
            },
            logout: function(success) {
                changeUser({});
                delete $localStorage.token;
                success();
            }
        };
    }
]);