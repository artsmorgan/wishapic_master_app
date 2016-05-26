var UTILS = {
	setBackground: function(el, bgUrl){
		var myEl = angular.element( document.querySelector( el ) );
			myEl.css({
				'background': 'url("'+bgUrl+'") no-repeat 50% 50%',
				'-webkit-background-size': 'cover;',
				'-moz-background-size': 'cover;',
				'-o-background-size':' cover;',
				'background-size': 'cover'
			})
	}
}