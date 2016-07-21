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
    //$(document).ready(function(){
    //  $('.col-xs-8').on('click', addCart);
    //  function addCart(event) {
    //    var offset = $('#end').offset(), flyer = $('<img class="u-flyer" src="images/touxiang1.jpg"/>');
    //    flyer.fly({
    //      start: {
    //        left: event.pageX,//当前鼠标的坐标
    //        top: event.pageY-100
    //      },
    //      end: {
    //        left: offset.left,
    //        top: offset.top,
    //        width: 20,
    //        height: 20
    //      }
    //    });
    //  }
    //});
  })
  .controller('ShopMaster',function($scope,$http){
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
    //发数据
    $scope.put=function ($http,index){
      $http.post("",$scope.goods[index]).success(function(data){
        console.log(data);
      }).error(function(){
        console.log("error");
      });

      $('button').on('click', addCart);
      function addCart(event) {
        var offset = $('#end').offset(), flyer = $('<img class="u-flyer" src="images/touxiang1.jpg"/>');
        flyer.fly({
          start: {
            left: event.pageX,//当前鼠标的坐标
            top: event.pageY-100
          },
          end: {
            left: offset.left,
            top: offset.top,
            width: 20,
            height: 20
          }
        });
      }
    }
  });




