'use strict';

/**
 * @ngdoc function
 * @name frontedApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the frontedApp
 */
angular.module('frontedApp')
  .controller('AboutCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })
.controller('firstController', function($scope,$http) {

    $http.get(config.serveraddress+"/goodlist/show").then(function(data){
      $scope.Product = data.data;
    });



    $scope.totalPrice = function() {
      var total = 0;
      angular.forEach($scope.Product, function(item) {
        total += item.num * item.price;
      });
      return total;
    };

    $scope.totalQuantity = function() {
      var total = 0;
      angular.forEach($scope.Product, function(item) {
        total += parseInt(item.num);
      });
      return total;
    };


    $scope.remove = function(index) {
      $http.get(config.serveraddress+"/goodlist/delete?id="+$scope.Product[index].id).then(function () {

      });
      $scope.Product.splice(index, 1);
    };

  $scope.removeall = function() {

    var address = prompt("小主，请输入您的详细地址");
    if(address){
      $http.get(config.serveraddress+"/goodlist/putorder?address="+address).then(function () {
      });
      for(var i = $scope.Product.length-1;i >= 0;i --){
        $scope.Product.splice(i, 1);
      }
    }else {
      alert("您输入的地址为空");
    }


    };


    $scope.$watch('Product', function(newValue, oldValue) {
      angular.forEach(newValue, function(item, key) {
        if (item.num < 1) {
          var ans = confirm("是否移除该产品？");
          if (ans) {
            $scope.remove(key);
          } else {
            item.num = oldValue[key].num;
          }
          return;
        }
      });
    }, true);

  });
