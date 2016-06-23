app.controller('addPicCtrl', function ($scope, CONFIG,$state) {
	
	var pageId = CONSTANTS.pageId.logins;
	var postdata = {};

	CONFIG.all(pageId).success(function (response) {
		UTILS.setBackground('#addPic',response[0].bg);
	});

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

	$scope.addLocationAction = function($event){

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
		$scope.goLiveBtn.classList.remove("disabled-link");				
		var id = $event.path[0].id;		
		var secs = 0;
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
	}

	$scope.goLiveAction = function($event){		
		$scope.showTimer = false;	
		postdata.picDate = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';
		console.log('postdata',postdata);
		setTimeout(function(){
			$state.go('happeningNow');
		},1500)
	}
    
})