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

<<<<<<< HEAD
            console.log(formData);

            // $http.get('http://107.170.47.77:3005/api/').success(function(data, status, headers, config) {
            //     console.log('success');
            //   })
            //   .error(function(data, status) {
            //     console.log('error');
            //   })  ;

            User.login(formData, function(res) {
                // console.log('res outside',res)
            	console.log('res',res);
                if (res.error) {
                    console.log('Error',res.error);
=======
            // console.log(formData);

            User.login(formData, function(res) {
                // console.log('res outside',res)
            	// console.log('res',res);
                if (res.error) {
>>>>>>> a4a2155793a90b8d8feb1e533cb866b0a6973e12
                    alertPopup('Error',res.error);    
                } else {                              	
                    // console.log(res)
                    $localStorage.user = res;
<<<<<<< HEAD
                    $location.path('/happeningNow');
                }
            }, function(e) {
                console.log('e');
                console.log(e);
=======
                    $location.path('/addPic');
                }
            }, function() {
>>>>>>> a4a2155793a90b8d8feb1e533cb866b0a6973e12
                alertPopup('Error','Invalid Login');
            })
        };
 
   
})