'use strict';

/**
 * @ngdoc function
 * @name frontedApp.controller:TestCtrl
 * @description
 * # TestCtrl
 * Controller of the frontedApp
 */
angular.module('frontedApp')
  .controller('TestCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $(document).ready(function(){
      $('.m').on('click', addCart);
      function addCart(event) {
        var offset = $('#end').offset(), flyer = $('<div>123</div>');
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
      $('.test1').find(".test2").on('click', addCart);
      function addCart(event) {
        var offset = $('#end').offset(), flyer = $('<div>123</div>');
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
    });

  });

