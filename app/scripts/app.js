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
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/connect', {
        templateUrl: 'views/connect.html',
        controller: 'ConnectCtrl',
        controllerAs: 'connect'
      })
      .when('/PersonShop', {
        templateUrl: 'views/personshop.html',
        controller: 'PersonshopCtrl',
        controllerAs: 'PersonShop'
      })
      .when('/wantopen', {
        templateUrl: 'views/wantopen.html',
        controller: 'WantopenCtrl',
        controllerAs: 'wantopen'
      })
      .when('/test', {
        templateUrl: 'views/test.html',
        controller: 'TestCtrl',
        controllerAs: 'test'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
