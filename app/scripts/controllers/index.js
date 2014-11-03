'use strict';

/**
 * @ngdoc function
 * @name sportsStoreApp.controller:IndexctrlCtrl
 * @description
 * # IndexctrlCtrl
 * Controller of the sportsStoreApp
 */
angular.module('sportsStoreApp')
  .controller('IndexCtrl', function ($scope, $location) {

    $scope.setActive = function (page) {
    	$scope.active = page;
    }

    var path = $location.$$url.substring(1);
    $scope.setActive( path.length == 0 ? 'home' : path );

  });

