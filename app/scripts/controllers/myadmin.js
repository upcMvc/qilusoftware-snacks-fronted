'use strict';

/**
 * @ngdoc function
 * @name frontedApp.controller:MyadminCtrl
 * @description
 * # MyadminCtrl
 * Controller of the frontedApp
 */
angular.module('frontedApp')
  .controller('MyadminCtrl', function ($scope,$http,$route,$location) {
    $scope.$watch('$viewContentLoaded',function () {
      $("#dialog-4").jDialog({
        skinClassName: 'demo',
        animationType: 'flip',
        allowOverlay: false
      });
      $("#input-id").fileinput();
      $("#input-id").fileinput({'showUpload':false,'previewFileType':'any'});
    });
     if(config.flag == 0){
       $location.path('/myadmin');
       config.flag  = 1;
     }
    config.flag = 0;
    $http.get(config.serveraddress+"/shop/ownshop").then(function (data) {
      if(data.data.code==-1){
      //  location.href(http://);      //登陆页面
      }
      else{
        console.log(data);
        var sellerid =data.data.id;
        console.log(sellerid);
        $http.get(config.serveraddress+"/shop/showshop?id="+sellerid).then(function(data){
          $scope.shop= data.data;

        });

        $http.get(config.serveraddress+"/goods/show?shopid="+sellerid).then(function(data){
          $scope.goods= data.data;

        });
      }
    });

    //发数据
    $scope.delete=function (index) {

      $http.get(config.serveraddress+"/goods/delete?id="+$scope.goods[index].id).success(function (data) {
        console.log(data);
        if(data.code==1){
          $scope.goods.splice(index,1);
        }
      });
    };
  });
