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
    //$http.get(""+$routeParams.id).then(function(data){
    //  $scope.Product = data;
    //});
    $scope.Product = [{
      id: 1,
      name: "零食1",
      quantity: 1,
      price: 1,
      number:1
    }, {
      id: 2,
      name: "零食2",
      quantity: 1,
      price: 8,
      number:1

    }, {
      id: 3,
      name: "零食3",
      quantity: 3,
      price: 4,
      number:1
    }, {
      id: 4,
      name: "零食4",
      quantity: 1,
      price: 3,
      number:1
    }];

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

    $http.get("http://mvc.y1code.cn:8080/goodlist/delete?id="+$scope.Product[index].id).then(function(){
    });
  };
    $scope.removeall = function() {
      var index;
      for (index = $scope.Product.length - 1; index >= 0; index--) {
        $scope.Product.splice(index, 1);
      }

      var address = prompt("小主，请输入你在石大的详细地址");
      console.log(address);

      $http.get("http://mvc.y1code.cn:8080/goodlist/putorder?address="+address).then(function(){

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
