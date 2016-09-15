var app = angular.module('starter', ['ionic']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {

      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

app.config(function($stateProvider, $urlRouterProvider){

  $stateProvider.state('lista', {
    url: '/lista',
    templateUrl : 'templates/lista.html'
  });

  $stateProvider.state('novo', {
    url: '/novo',
    templateUrl : 'templates/novo.html',
    controller: 'NovoCtrl'
  });
  
  $stateProvider.state('edita', {
    url: '/edita/:id',
    templateUrl : 'templates/novo.html',
    controller: 'EditaCtrl'
  });

  $urlRouterProvider.otherwise('/lista'); //a pagina inicial é sempre lista

});



