app.controller('addPicCtrl', function ($scope, CONFIG,$state, $location, $cordovaCapture, $http,$ionicLoading, $rootScope,
                                       $cordovaCamera,$cordovaFile, $ionicModal,$cordovaFileTransfer, $localStorage) {
	
	var pageId = CONSTANTS.pageId.logins;
	var postdata = {};
    var baseUrl = Env();

	CONFIG.all(pageId).success(function (response) {
		UTILS.setBackground('#addPic',response[0].bg);
	});
               
   var _img = null;
   
               
   $scope.model = {
       hoursSelect : 0,
       minsSelect : 0,
       secSelect : 0
   };

               
    function cameraOn(){
        var options = {
<<<<<<< HEAD
            quality: 1,
=======
            quality: 5,
>>>>>>> a4a2155793a90b8d8feb1e533cb866b0a6973e12
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.CAMERA,
            allowEdit: false,
            encodingType: Camera.EncodingType.JPEG,
//            targetWidth: 100,
//            targetHeight: 100,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false,
            correctOrientation:true
        };
        $cordovaCamera.getPicture(options).then(function(imageData) {
            var image = document.getElementById('myImage');
            $ionicLoading.show({
                               template: 'Processing Image',
                               duration: 2500
                               });
            image.src = "data:image/jpeg;base64," + imageData;
            $scope.imageTaken = imageData;
        }, function(err) {
        // error
        });

//        var image = document.getElementById('myImage');
//        $cordovaCapture.captureImage(options).then(function(imageData) {
//              console.log(imageData)
//                _img = imageData;
//               $scope.image = "data:image/png;base64," + imageData;
//              var i, path, len;
//              for (i = 0, len = imageData.length; i < len; i += 1) {
//              path = imageData[i].fullPath;
//              console.log('path',path);
//              //                       image.src = "data:image/jpeg;base64," + imageData;
//              image.src = path;
//              }
//              
//              
//              //save image
//              }, function(err) {
//              // An error occurred. Show a message to the user
//              });
    }
               
    function getSelectedText(elementId) {
        var e = document.getElementById(elementId);
        return e.options[e.selectedIndex].text;
    }


    $scope.$on('$ionicView.enter', function() {
        cameraOn();
    });
               
               
    $ionicModal.fromTemplateUrl('my-modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.modal = modal;
    });
               
    $scope.openModal = function() {
            $scope.modal.show();
    };
    $scope.closeModal = function() {
        $scope.modal.hide();
    };

	$scope.isTagAvailble 	 = false;
	$scope.isTimmerAvailable = false;
	$scope.isGoliveAvailable = false;

	$scope.locationInput = document.getElementById('locationInput');
	$scope.tagsInput 	 = document.getElementById('keywords');
	$scope.tagsDescInput = document.getElementById('comment');
	
	$scope.tagsBtn 		 = document.getElementById('addTags');
	$scope.timmerBtn 	 = document.getElementById('addTime');
	$scope.goLiveBtn 	 = document.getElementById('goLive');

	$scope.showLocation  = true;
	$scope.showTags 	 = false;
	$scope.showTimer	 = false;

	$scope.locationBubble = document.getElementById('location-bubble');
	$scope.tagBubble = document.getElementById('tag-bubble');
	$scope.timmerBubble = document.getElementById('timmer-bubble');

	$scope.location = '';

	$scope.checkLocation = function($event){
		if($scope.locationInput.value.length >= 2){
			$scope.isTagAvailble = true;
			$scope.tagsBtn.classList.remove("disabled-link");
		}else{
			$scope.isTagAvailble = false;
			$scope.tagsBtn.classList.add("disabled-link");
		}
	}

	$scope.checkTags = function($event){
		if($scope.tagsInput.value.length >= 2){
			$scope.isTimmerAvailable = true;
			$scope.timmerBtn.classList.remove("disabled-link");
		}else{
			$scope.isTimmerAvailable = false;
			$scope.timmerBtn.classList.add("disabled-link");
		}
	}


    // $scope.$watch('isTagAvailble', function() {
    //     // do something here
    //     console.log($scope.isTagAvailble);//
    // });    

	$scope.addCustomTimmer = function($event){
        $scope.modal.show();
    }
    
   $scope.getCustomTimer = function(){
           var mins = parseInt($scope.model.minsSelect);
           var hours = parseInt($scope.model.hoursSelect);
           var secs = parseInt($scope.model.secSelect);
       
           var _secs = 0;
           if(mins > 0 || hours > 0 || secs > 0){
               //mins to secs
               _secs += mins * 60;
               //hours to secs
               _secs += hours * 3600;
               //add seconds to count
               _secs += secs;
               postdata.timmer = _secs;
               
               console.log('mins',mins);
               console.log('hours',hours);
               console.log('secs',secs);
               console.log('_secs',_secs);
               
               document.getElementById('addTime-1').classList.remove("selected-btn");
               document.getElementById('addTime-2').classList.remove("selected-btn");
               document.getElementById('addTime-3').classList.add("selected-btn");
               $scope.goLiveBtn.classList.remove("disabled-link");
               $scope.modal.hide();
           }
               $scope.modal.hide();
               
   }
               
	$scope.addTagsAction = function($event){
		// console.log('$scope.isTagAvailble',$scope.isTagAvailble);
		if($scope.isTagAvailble){
			postdata.location = $scope.locationInput.value;
			
			$scope.showLocation  = false;
			$scope.showTags = true;	

		}
	}

	$scope.addTimmerAction = function($event){
		if($scope.isTimmerAvailable){
			postdata.tags = $scope.tagsInput.value;
			postdata.tagsDesc = $scope.tagsDescInput.value;

			$scope.showTags  = false;
			$scope.showTimer = true;						
		}
	}

	$scope.addTime = function($event){
						
		var id = $event.path[0].id;		
		var secs = 0;
        document.getElementById('addTime-3').classList.remove("selected-btn");
		if(id=='addTime-1'){
			secs = 4500;
			document.getElementById('addTime-2').classList.remove("selected-btn");
			document.getElementById('addTime-1').classList.add("selected-btn");
		}else{
			secs = 1200000
			document.getElementById('addTime-1').classList.remove("selected-btn");
			document.getElementById('addTime-2').classList.add("selected-btn");
		}
		postdata.timmer = secs;
        $scope.goLiveBtn.classList.remove("disabled-link");
	}

	$scope.goLiveAction = function($event){		
		$scope.showTimer = false;
        postdata.userId = $localStorage.user.id;
        postdata.picDate = $scope.imageTaken;
        var url = Env()+'/pictures';
        
        console.log('url',url);
       	console.log('postdata');
        console.log(postdata);
		
        var req = {
            method: 'POST',
            url: url,//server
            data: postdata
        };
               
        if ($scope.imageTaken === null) {
            $scope.showAlert("Uh Oh!", '<div class="center">Please take a photo of your document before attempting an upload.</div>');
        }else{
            $ionicLoading.show({
                              template: 'Saving Image',
                              duration: 5500
                              });

            $http({
                url: baseUrl + '/pictures',
                method: "POST",
                data: postdata,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function(data){
                $state.go('happeningNow');
            }).error(function(data){
                 console.log('error');
                 console.log(data)
            })
               
               
//               $http(req).success(function (data, status, headers, config) {
//                
//                    $state.go('happeningNow');
//                
//            }).error(function (data, status, headers, config) {
//                       console.log('error')
//            }).then(function(data, status, headers, config){
//                               $scope.Data.Image = null;
//            });
        }
	}
    
})