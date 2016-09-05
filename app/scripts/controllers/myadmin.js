'use strict';

/**
 * @ngdoc function
 * @name frontedApp.controller:MyadminCtrl
 * @description
 * # MyadminCtrl
 * Controller of the frontedApp
 */
angular.module('frontedApp')
  .controller('MyadminCtrl', function ($scope,$http,$routeParams) {
    $scope.shop={
      'id':'1',
      'title':'麦琪的礼物',
      'master':'master1',
      'imgsrc':'images/touxiang1.jpg',
      'telephone':'123456'
    };
    $http.get(""+$routeParams.id).then(function(data){

    });



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
        'name':'辣条',
        'price':'2',
        'describe':'好吃',
        'imgsrc':'images/touxiang1.jpg',
        'quantity':'0',
        'total':'0'
      },
      {
        'id':'2',
        'name':'辣条',
        'price':'3',
        'describe':'好吃',
        'imgsrc':'images/touxiang1.jpg',
        'quantity':'0',
        'total':'0'
      }];
    $http.get(""+$routeParams.id).then(function(data){

    });
    $scope.minus = function(index) {
      $scope.goods[index].quantity--;
      if($scope.goods[index].quantity<0){
        alert('所选不能小于0件');
        $scope.goods[index].quantity=1;
      }
      $scope.goods[index].total=$scope.goods[index].price*$scope.goods[index].quantity;
    };
    $scope.plus = function(index) {
      $scope.goods[index].quantity++;
      $scope.goods[index].total=$scope.goods[index].price*$scope.goods[index].quantity;
    };
    //发数据
    $scope.put=function ($http,event,index) {
      var offset = $('#end').offset(),
        flyer = $('<img class="u-flyer" src="{{$scope.goods[index].imgsrc}}"/>');
      flyer.fly({
        start: {
          left: event.clientX,//当前鼠标的坐标
          top: event.clientY
        },
        end: {
          left: offset.left+8,
          top: 300,
          width: 20,
          height: 20
        }
      });
      $http.post("", $scope.goods[index]).success(function (data) {
        console.log(data);
      }).error(function () {
        console.log("error");
      });
    }
  });
