'use strict';

/**
 * @ngdoc function
 * @name frontedApp.controller:WantopenCtrl
 * @description
 * # WantopenCtrl
 * Controller of the frontedApp
 */
angular.module('frontedApp')
  .controller('WantopenCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })
  .controller('ValueCtrl',function($scope,$http){
    $scope.signin= function () {
      $http.get("http://mvc.y1code.cn:8080/shop/create?title="+$scope.title+"&&phone="+$scope.phone+"&&email="+$scope.email+"&&qq="+$scope.qq+"&&detail="+$scope.detail).success(function(){
        window.location="http:";
      });
    };
});
