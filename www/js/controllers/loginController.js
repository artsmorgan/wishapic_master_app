app.controller('LoginCtrl', function ($scope, CONFIG, $localStorage, User) {	
	
	$scope.model = {};
	var pageId = CONSTANTS.pageId.login;
	CONFIG.all(pageId).success(function (response) {
		UTILS.setBackground('#login',response[0].bg);
	});

	$scope.email = 'hello';

	$scope.signin = function() {
            
            var formData = {
                email: $scope.model.email,
                password: $scope.model.password
            }


            User.signin(formData, function(res) {
            	console.log('res',res);
                if (res.type == false) {
                    alert(res.data)    
                } else {                	
                    $localStorage.token = res.token;
                    window.location = "/";    
                }
            }, function() {
                $rootScope.error = 'Failed to signin';
            })
        };
 
    // $scope.signup = function() {
    //     var formData = {
    //         email: $scope.email,
    //         password: $scope.password
    //     }

    //     Main.save(formData, function(res) {
    //         if (res.type == false) {
    //             alert(res.data)
    //         } else {
    //             $localStorage.token = res.data.token;
    //             window.location = "/"   
    //         }
    //     }, function() {
    //         $rootScope.error = 'Failed to signup';
    //     })
    // };

    // $scope.me = function() {
    //     Main.me(function(res) {
    //         $scope.myDetails = res;
    //     }, function() {
    //         $rootScope.error = 'Failed to fetch details';
    //     })
    // };

    // $scope.logout = function() {
    //     Main.logout(function() {
    //         window.location = "/"
    //     }, function() {
    //         alert("Failed to logout!");
    //     });
    // };
    // $scope.token = $localStorage.token;
})