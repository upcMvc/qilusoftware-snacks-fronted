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
      var log= $.param({
        'id': $scope.id,
        'title':$scope.title,
        'phone':$scope.phone,
        'email':$scope.email,
        'qq':$scope.qq,
        'detail':$scope.detail
      });
      console.log(log);
      $http.post("",log).success(function(){
        alert("提交成功");
        //然后把他引到商铺页面

      });
    };
});
