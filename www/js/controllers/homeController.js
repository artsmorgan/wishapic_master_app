app.controller('HomeCtrl', function ($scope, CONFIG) {

	$scope.pageId = CONSTANTS.homeId;

	CONFIG.all('1').success(function (response) {
		console.log('response',response);
		var myEl = angular.element( document.querySelector( '#home' ) );
			myEl.css({
				'background': 'url("'+response[0].bg+'") no-repeat 50% 50%',
				'-webkit-background-size': 'cover;',
				'-moz-background-size': 'cover;',
				'-o-background-size':' cover;',
				'background-size': 'cover'
			})
	})
})