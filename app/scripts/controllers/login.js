'use strict';

/**
 * @ngdoc function
 * @name frontedApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the frontedApp
 */
angular.module('frontedApp')
  .controller('LoginCtrl', function ($scope,$http) {
    $scope.submit = function (){
      $http.get("http://localhost:8080/user/login?username="+$scope.username+"&password="+$scope.password).success(function (data) {
        if(data.data.code == -1){
          alert("账号或密码输入错误");
        }
        else {
          window.location = "http://localhost:9000/#/main";
        }
      });
    }

  });
