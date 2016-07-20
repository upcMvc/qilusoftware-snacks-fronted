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
.controller('firstController',
  function($scope) {
    $scope.Product = [{
      id: 1,
      name: "零食1",
      quantity: 1,
      price: 1
    }, {
      id: 2,
      name: "零食2",
      quantity: 1,
      price: 8

    }, {
      id: 3,
      name: "零食3",
      quantity: 3,
      price: 4
    }, {
      id: 4,
      name: "零食4",
      quantity: 1,
      price: 3
    }];

    $scope.totalPrice = function() {
      var total = 0;
      angular.forEach($scope.Product, function(item) {
        total += item.quantity * item.price;
      });
      return total;
    }

    $scope.totalQuantity = function() {
      var total = 0;
      angular.forEach($scope.Product, function(item) {
        total += parseInt(item.quantity);
      });
      return total;
    }

    $scope.remove = function(index) {
      $scope.Product.splice(index, 1);
    }

    $scope.removeall = function() {
      var index;
      for (index = $scope.Product.length - 1; index >= 0; index--) {
        $scope.remove(index);
      }
    }

    $scope.reduce = function(index) {
      if ($scope.Product[index].quantity != 1) {
        $scope.Product[index].quantity--;
      } else {
        var ans = confirm("是否移除该产品？");
        if (ans) {
          $scope.remove(index);
        } else {
          $scope.Product[index].quantity = 1;
        }
      }
    }

    $scope.add = function(index) {
      $scope.Product[index].quantity++;
    }

    $scope.$watch('Product', function(newValue, oldValue) {
      angular.forEach(newValue, function(item, key) {
        if (item.quantity < 1) {
          var ans = confirm("是否移除该产品？");
          if (ans) {
            $scope.remove(key);
          } else {
            item.quantity = oldValue[key].quantity;
          }
          return;
        }
      });
    }, true);

  });
