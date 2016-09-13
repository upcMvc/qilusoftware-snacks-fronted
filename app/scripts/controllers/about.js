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

    $http.get("http://localhost:8080/goodlist/show").then(function(data){
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
      $scope.Product.splice(index, 1);

      $http.get(config.serveraddress+"/goodlist/delete?id="+$scope.Product[index].id);
    };

  $scope.remove = function(index) {
    $scope.Product.splice(index, 1);

      var address = prompt("小主，请输入你的地址");
      $http.get(config.serveraddress+"/goodlist/putorder?address="+address).then(function (data) {
        console.log(data);
        if(data.data.code==1){
          alert("提交成功");
        }
        else {
          alert("提交失败");
        }
      });
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
