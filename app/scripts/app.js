'use strict';

/**
 * @ngdoc overview
 * @name frontedApp
 * @description
 * # frontedApp
 *
 * Main module of the application.
 */

angular
  .module('frontedApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider,$httpProvider) {
    $httpProvider.defaults.withCredentials = true;
    $routeProvider
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/main/:id', {
        templateUrl: 'views/personshop.html',
        controller: 'PersonshopCtrl',
        controllerAs: 'PersonShop'
      })
      .when('/wantopen', {
        templateUrl: 'views/wantopen.html',
        controller: 'WantopenCtrl',
        controllerAs: 'wantopen'
      })
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl',
        controllerAs: 'register'
      })
      .when('/myadmin', {
        templateUrl: 'views/myadmin.html',
        controller: 'MyadminCtrl',
        controllerAs: 'myadmin'
      })
      .when('/test', {
        templateUrl: 'views/test.html',
        controller: 'TestCtrl',
        controllerAs: 'test'
      })
      .when('/test', {
        templateUrl: 'views/test.html',
        controller: 'TestCtrl',
        controllerAs: 'test'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .controller("globalCtrl",function ($scope,$http,$location) {
    $scope.online = false;
    $scope.$on('submit',function (e , newValue) {
      $scope.online = newValue;
    });
    $scope.signout = function () {
      $http.get(config.serveraddress+"/shop/logout").then(function (data) {
        if(data.data.code == 1){
          alert("注销成功");
          $location.path("/");
        }
      });
    }
  });
