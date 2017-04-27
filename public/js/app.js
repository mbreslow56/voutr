var app = angular.module("appName", ['ui.router', 'youtube-embed']);

app.config(function($locationProvider, $stateProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/home');
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'js/templates/home.html',
      controller: function($rootScope, authFactory){
        $rootScope.currentUser = authFactory.currentUser.username;
        console.log(authFactory.currentUser.username);
      }
  })
    .state('battle', {
      url: '/battle',
      templateUrl: 'js/templates/battle.html',
      controller: function($rootScope, authFactory){
        $rootScope.currentUser = authFactory.currentUser.username;
        console.log(authFactory.currentUser.username);
      }
  })
    .state('unmatched', {
      url: '/unmatched',
      templateUrl: 'js/templates/unmatchedBattles.html',
      controller: 'authCtrl'
  })
    .state('challenge', {
      url: '/challenge',
      templateUrl: 'js/templates/joinUnmatched.html',
      controller: 'btlCtrl1'
  })
    .state('ongoing', {
      url: '/ongoing',
      templateUrl: 'js/templates/ongoingBattles.html',
      controller: 'authCtrl'
  })
    .state('create', {
      url: '/create',
      templateUrl: 'js/templates/createBattle.html',
      controller: 'btlCtrl1'
  })
    .state('join', {
      url: '/join',
      templateUrl: 'js/templates/join.html',
      controller: 'authCtrl'
  })
    .state('login', {
      url: '/login',
      templateUrl: 'js/templates/login.html',
      controller: 'authCtrl'
  })
      .state('logout', {
      url: '/logout',
      templateUrl: 'js/templates/home.html',
      controller: 'authCtrl'
  })
});
