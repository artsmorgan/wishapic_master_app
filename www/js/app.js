// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
   //setup state for Home
  .state('home', {
      url: '/home',
      templateUrl: 'templates/home.html'
  })

 //setup state for login 
  .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html'
  })

 //setup state for Get Started 
  .state('getStarted', {
      url: '/getStarted',
      templateUrl: 'templates/getStarted.html'
  })

  //setup state for Forgot Password
  .state('forgotPass', {
      url: '/forgotPass',
      templateUrl: 'templates/ForgotPass.html'
  })

  //setup state for Confirm Email
  .state('confirmEmail', {
      url: '/confirmEmail',
      templateUrl: 'templates/confirmEmail.html'
  })

$urlRouterProvider.otherwise('/home');
});