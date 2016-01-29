var app = angular.module('clocky',[
   'ui.router',   
   'toaster',
   'ngAnimate',
   'ngMaterial',
   'ngMaterialDatePicker',
   'ngStorage',
   'ngAudio'
   
]);

app.config(function($stateProvider, $urlRouterProvider) {

    
    $urlRouterProvider.otherwise('/clocky');

    $stateProvider
      .state('base', {
        abstract: true,
        url: '',
        templateUrl: 'views/base.html'
      })
        .state('clocky', {
          url: '/clocky',
          parent: 'base',
          templateUrl: 'views/clocky.html',
          controller: 'ClockyCtrl'
        })
  

  });
