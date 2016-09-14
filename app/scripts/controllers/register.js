'use strict';

/**
 * @ngdoc function
 * @name frontedApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the frontedApp
 */
angular.module('frontedApp')
  .controller('RegisterCtrl', function ($scope,$http,$location) {
    $scope.submit = function () {
      $http.get(config.serveraddress+"/user/create?name="+$scope.id+"&mail=" + $scope.email+ "&password="+$scope.password + "&phone=" + $scope.phone).then(function (data) {
        console.log(data);
        if(data.data.result=="注册成功"){
          $location.path('/main');
          console.log("注册成功");
        }
        else {
          alert("用户名或邮箱已存在");
        }
      });
    }

  });
