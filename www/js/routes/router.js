
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

   //setup state for Profile
  .state('profile', {
      url: '/profile',
      templateUrl: 'templates/profile.html'
  })

    //setup state for Edit Profile
  .state('editProfile', {
      url: '/editProfile',
      templateUrl: 'templates/editProfile.html'
  })

  //setup state for Chat
  .state('chat', {
      url: '/chat',
      templateUrl: 'templates/chat.html'
  })

  //setup state for Ask for a Picture screen
  .state('askPic', {
      url: '/askPic',
      templateUrl: 'templates/askPic.html'
  })

  //setup state for Follower requests
  .state('followerRequest', {
      url: '/followerRequest',
      templateUrl: 'templates/followerRequest.html'
  })

    //setup state for new Password
  .state('camera', {
      url: '/camera',
      templateUrl: 'templates/camera.html'
  })

   //setup state for Wished
  .state('wished', {
      url: '/wished',
      templateUrl: 'templates/Wished.html'
  })

  //setup state for Granted
  .state('granted', {
      url: '/granted',
      templateUrl: 'templates/Granted.html'
  })


  //setup state for new Password
  .state('chatRoom', {
      url: '/chatRoom/:userId',
      templateUrl: 'templates/chat-room.html'
  })
  //setup state for profilePic
  .state('profilePic', {
      url: '/profilePic',
      templateUrl: 'templates/profilePic.html'
  })
    //setup state for AddPic
  .state('addPic', {
      url: '/addPic',
      templateUrl: 'templates/AddPic.html'
  })

  //setup state for happeningNow
  .state('happeningNow', {
      url: '/happeningNow',
      templateUrl: 'templates/happeningNow.html'
  })
  //setup state for locations
  .state('locations', {
      url: '/locations',
      templateUrl: 'templates/locations.html'
  })
  //setup state for locations
  .state('tags', {
      url: '/tags',
      templateUrl: 'templates/tags.html'
  })
  //setup state for locations
  .state('picturesGranted', {
      url: '/picturesGranted',
      templateUrl: 'templates/picturesGranted.html'
  })
  //setup state for followPerson
  .state('followPerson', {
      url: '/followPerson',
      templateUrl: 'templates/followPerson.html'
  })
  $urlRouterProvider.otherwise('/home');
})
