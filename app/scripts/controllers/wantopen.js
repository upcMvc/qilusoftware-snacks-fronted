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
      $http.get(config.serveraddress + "/shop/create?title="+$scope.title+"&&phone="+$scope.phone+"&&email="+$scope.email+"&&qq="+$scope.qq+"&&detail="+$scope.detail).then(function(data){
       console.log(data);
        window.location = config.frontedaddress+"/#/myadmin";
      });
    };
});
