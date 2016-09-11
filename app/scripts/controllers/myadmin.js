'use strict';

/**
 * @ngdoc function
 * @name frontedApp.controller:MyadminCtrl
 * @description
 * # MyadminCtrl
 * Controller of the frontedApp
 */
!function (a) {
  function e(n) {
    if (i[n])return i[n].exports;
    var t = i[n] = {exports: {}, id: n, loaded: !1};
    return a[n].call(t.exports, t, t.exports, e), t.loaded = !0, t.exports
  }

  var i = {};
  return e.m = a, e.c = i, e.p = "", e(0)
}([function (a, e, i) {
  i(1), function (a) {
    a.fn.jDialog = function (e) {
      return this.each(function () {
        function i() {
          n.allowOverlay && o.get(0).remove(), t.removeClass("show")
        }

        var n = a.extend({
          skinClassName: "",
          animationType: "fade-in",
          allowOverlay: !0
        }, e), t = a(this), l = a('<div class="jDialog-content"></div>').addClass(n.skinClassName).append(t.html());
        if (t.empty().append(l).addClass(n.animationType), n.allowOverlay) {
          var o = a('<div class="jDialog-overlay"></div>');
          o.click(i)
        }
        t.find('[data-dismiss="JDialog"]').click(i);
        var s = a('[data-toggle="JDialog"][data-target=' + t.attr("id") + "]");
        s.click(function () {
          n.allowOverlay && a("body").append(o), t.addClass("show")
        })
      })
    }
  }(jQuery)
}, function (a, e) {
}]);
window.onload = function(){
  $("#dialog-4").jDialog({
    skinClassName: 'demo',
    animationType: 'flip',
    allowOverlay: false
  });
  $("#input-id").fileinput();
  $("#input-id").fileinput({'showUpload':false, 'previewFileType':'any'});

};
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
  });
