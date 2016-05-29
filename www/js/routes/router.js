
app.config(function($stateProvider, $urlRouterProvider) {

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
    //setup state for new Password
  .state('newPassword', {
      url: '/newPassword',
      templateUrl: 'templates/newPassword.html'
  })

  $urlRouterProvider.otherwise('/home');
})