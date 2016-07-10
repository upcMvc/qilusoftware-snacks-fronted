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
  .controller('ShopListCtrl',function($scope){
      $scope.shops=[
        {
          'id':'1',
          'title':'麦琪的礼物',
          'master':'master1',
          'imgsrc':'images/touxiang1.jpg'
        },
        {
          'id':'2',
          'title':'shop22222222222222222222222',
          'master':'master22222222222222222222',
          'imgsrc':'images/touxiang2.jpg'
        }
        ,
        {
          'id':'2',
          'title':'shop3',
          'master':'master3',
          'imgsrc':'2222'
        }
        ,
        {
          'id':'4',
          'title':'shop4',
          'master':'master4',
          'imgsrc':'3333'
        }
      ]
  });

