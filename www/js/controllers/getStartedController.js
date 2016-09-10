app.controller('GetStartedCtrl', function ($scope, CONFIG, $localStorage, User,$location,$ionicPopup) {	
	//quick validation
    $scope.model = {};
    var pageId = CONSTANTS.pageId.login;
    
    CONFIG.all(pageId).success(function (response) {
        UTILS.setBackground('#login',response[0].bg);
    });

    function validateSignUp(formData){
        var errorArr = [];
        var error = {};
        if(!formData.email){
            errorArr[0] = true;
        }else if(!formData.user){
            errorArr[0] = true;
        }else if(!formData.country){
            errorArr[0] = true;
        }else if(!formData.age){
            errorArr[0] = true;
        }else if(!formData.gender){
            errorArr[0] = true;
        }
        
        // errorArr.push(error);
        return errorArr;
    }

	

    //Logout everything
    delete $localStorage;

    $scope.showAlert = function(title,msg) {
        
        var alertPopup = $ionicPopup.alert({
            title: title,
            template: msg
        });

        alertPopup.then(function(res) {
            //console.log('Thank you for not eating my delicious ice cream cone');
        });
    };
    
    $scope.showErrorPopUp = function(message){

        var messages = {
            passwordNotMatch: "Passwords doesn't match",
            requireFields: "All fields are required",
            signupError: "An error just occured please contact the admin",
            duplicateEmail: "The email is already in use, please provide other"

        }


        $scope.showAlert('Error', messages[message])
    }

	$scope.submit = function(model) {
            
            var formData = {
                email: model.email,
                password: model.password,
                confirmPassword: model.confpassword,
                country: model.country,
                age: model.age,
                gender: model.gender,
                user: model.username
            }            

            var validate = validateSignUp(formData);
            
            
            if(validate.length > 0){
                //all fields must be valid
                $scope.showErrorPopUp('requireFields');
            }else{
                //check equal pass
                if(formData.password == formData.confirmPassword){
                    //do register
                    User.signup(formData, function(res) {                        
                        if (res.error) {
                            $scope.showErrorPopUp('duplicateEmail');
                        } else {                                               
                            $location.path('/confirmEmail/'+res.email);
                        }
                    }, function() {
                        $scope.showErrorPopUp('signupError');
                    })
                }else{
                    //Rejects
                    $scope.showErrorPopUp('passwordNotMatch');
                }
            }

            

            // User.signin(formData, function(res) {
            // 	// console.log('res',res);
            //     if (res.type == false) {
            //         alert(res.data)    
            //     } else {                	
            //         $localStorage.token = res.token;
            //         $location.path('/camera');
            //     }
            // }, function() {
            //     $rootScope.error = 'Failed to signin';
            // })
        };
 
})