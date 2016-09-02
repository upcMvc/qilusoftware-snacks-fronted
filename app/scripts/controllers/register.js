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
      $http("").success(function () {
        window.location = "http:";
      }).error(alert("失败！"));
    }

  });
