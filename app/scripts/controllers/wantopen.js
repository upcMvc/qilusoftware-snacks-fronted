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
    $http.get(config.serveraddress+"/shop/ismaster").then(function (data) {
      if(data.data.code ==0){
        alert("您还未登录");
      }else if(data.data.code==-1){
        alert("您已经有店，不能重复开店");
        window.location = config.frontedaddress+"/#/myadmin";
      }
    });
    $scope.signin= function () {
      $http.get(config.serveraddress + "/shop/create?title="+$scope.title+"&&phone="+$scope.phone+"&&email="+$scope.email+"&&qq="+$scope.qq+"&&detail="+$scope.detail).then(function(data){

        window.location = config.frontedaddress+"/#/myadmin";
      });
    };
});
