'use strict';

/**
 * @ngdoc function
 * @name frontedApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontedApp
 */
angular.module('frontedApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })
  .controller('ShopListCtrl',function($scope,$http){
      $http.get("").success(function(data){
        $scope.shops=data;
      });
      $scope.shops=[
        {
          'id':'1',
          'title':'麦琪的礼物',
          'master':'master1',
          'imgsrc':'images/touxiang1.jpg',
          'telephone':'123456'
        },
        {
          'id':'2',
          'title':'shop22222222222222222222222',
          'master':'master22222222222222222222',
          'imgsrc':'images/touxiang2.jpg',
          'telephone':'123456'
        }
        ,
        {
          'id':'2',
          'title':'shop3',
          'master':'master3',
          'imgsrc':'2222',
          'telephone':'123456'
        }
        ,
        {
          'id':'4',
          'title':'shop4',
          'master':'master4',
          'imgsrc':'3333',
          'telephone':'123456'
        }
      ]
  });

