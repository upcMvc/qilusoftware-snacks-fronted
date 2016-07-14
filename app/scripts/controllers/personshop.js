'use strict';

/**
 * @ngdoc function
 * @name frontedApp.controller:PersonshopCtrl
 * @description
 * # PersonshopCtrl
 * Controller of the frontedApp
 */
angular.module('frontedApp')
  .controller('PersonshopCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })
  .controller('ShopMaster',function($scope){
    $scope.shop={
      'id':'1',
      'title':'麦琪的礼物',
      'master':'master1',
      'imgsrc':'images/touxiang1.jpg',
      'telephone':'123456',

    }
  })
  .controller('GoodListCtrl',function($scope){
    $scope.goods=[{
      'id':'0',
      'name':'薯片',
      'price':'1',
      'describe':'好吃',
      'imgsrc':'images/touxiang1.jpg',
      'quantity':'0',
      'total':'0'
    },
    {
       'id':'1',
       'name':'拉条',
       'price':'2',
       'describe':'好吃',
       'imgsrc':'images/touxiang1.jpg',
       'quantity':'0',
       'total':'0'
    }];
    $scope.minus = function(index) {
      $scope.goods[index].quantity--;
      if($scope.goods[index].quantity<0){
        alert('所选不能小于0件');
        $scope.goods[index].quantity=1;
      }
      $scope.goods[index].total=$scope.goods[index].price*$scope.goods[index].quantity;
    }
    $scope.plus = function(index) {
      $scope.goods[index].quantity++;
      $scope.goods[index].total=$scope.goods[index].price*$scope.goods[index].quantity;
    }
  });



