'use strict';

/**
 * @ngdoc function
 * @name sportsStoreApp.controller:CompleteCtrl
 * @description
 * # CompleteCtrl
 * Controller of the sportsStoreApp
 */
angular.module('sportsStoreApp')
  .controller('CompleteCtrl', function ($scope, orderService) {
    $scope.data = {
    	orderId: orderService.getOrderId(),
    	orderError: orderService.getError()
    };
  });
