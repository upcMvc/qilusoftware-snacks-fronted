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
    //发数据
    $scope.delete=function ($http,event,index) {
      $http.post("", $scope.goods[index]).success(function (data) {
        console.log(data);
      }).error(function () {
        console.log("error");
      });
    };
    $scope.add = function(){
      $.confirm({
        title: 'Confirm!',
        content: 'Simple confirm!',
        columnClass: 'col-md-6 col-md-offset-3',
        container:'body',
        confirm: function(){
          $.alert('Confirmed!');
        },
        cancel: function(){
          $.alert('Canceled!')
        }
      });
    }
  });
