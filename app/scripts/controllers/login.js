'use strict';

/**
 * @ngdoc function
 * @name frontedApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the frontedApp
 */
angular.module('frontedApp')
  .controller('LoginCtrl', function ($scope,$http,$location) {
    $scope.submit = function (){
      $scope.online =!$scope.online;
      $http.get(config.serveraddress+"/user/login?username="+$scope.username+"&password="+$scope.password).success(function (data) {
        console.log(data);
        if(data.code == -1){
          alert("账号或密码输入错误");
        }
        else {
          $location.path('/main');
          $scope.$emit('submit', $scope.online);
        }
      });
    }

  });
