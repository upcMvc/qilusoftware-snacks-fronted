'use strict';

/**
 * @ngdoc function
 * @name frontedApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the frontedApp
 */
angular.module('frontedApp')
  .controller('RegisterCtrl', function ($scope,$http) {
    $scope.submit = function () {
      $http.get("http://mvc.y1code.cn:8080/user/create?name="+$scope.id+"&mail=" + $scope.email+ "&password="+$scope.password + "&phone=" + $scope.phone).then(function (data) {
        if(data.data.result=="注册成功"){
          window.location="http://.....:"+data.data.id;
        }
        else {
          alert("用户名或邮箱已存在");
        }
      });
    }

  });
