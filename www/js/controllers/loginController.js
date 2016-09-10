app.controller('LoginCtrl', function ($scope, CONFIG, $localStorage, User,$location,$ionicPopup) {	
	
	$scope.model = {};
	var pageId = CONSTANTS.pageId.login;
	CONFIG.all(pageId).success(function (response) {
		UTILS.setBackground('#login',response[0].bg);
	});

	$scope.email = 'hello';

    var alertPopup = function(title, msg){
        return $ionicPopup.alert({
            title: title,
            template: msg
        });   
    }

	$scope.signin = function() {
            
            var formData = {
                email: $scope.model.email,
                password: $scope.model.password
            }

            // console.log(formData);

            User.login(formData, function(res) {
                // console.log('res outside',res)
            	// console.log('res',res);
                if (res.error) {
                    alertPopup('Error',res.error);    
                } else {                              	
                    // console.log(res)
                    $localStorage.user = res;
                    $location.path('/addPic');
                }
            }, function() {
                alertPopup('Error','Invalid Login');
            })
        };
 
   
})