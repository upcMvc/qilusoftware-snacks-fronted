'use strict';

/**
 * @ngdoc function
 * @name frontedApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontedApp
 */
angular.module('frontedApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })
  .controller('ShopListCtrl',function($scope,$http){
      //$http.get("").success(function(data){
      //  $scope.shops=data;
      //});
    $scope.shops=[{
      title :123,
      master :123,
      phone :123456,
      id :2
    }];

  });

