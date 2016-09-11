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
      $http.get("http://mvc.y1code.cn:8080/shop/show").success(function(data){
        $scope.shops=data;
      });

  });

