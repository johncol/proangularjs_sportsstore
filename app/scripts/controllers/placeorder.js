'use strict';

/**
 * @ngdoc function
 * @name sportsStoreApp.controller:PlaceorderCtrl
 * @description
 * # PlaceorderCtrl
 * Controller of the sportsStoreApp
 */
angular.module('sportsStoreApp')
  .controller('PlaceorderCtrl', function ($scope, $location, cartFactory, orderService, saveOrderRequestURL) {

  	var putOrderSuccessCallback = function(order) {
  		orderService.registerOrderId(order.id);
  		cartFactory.getProducts().length = 0;
  	};

  	var putOrderErrorCallback = function(error, status) {
		console.error('Error during request to ' + saveOrderRequestURL + ' (status ' + status + '):', error);
  		orderService.registerError({ 
            status: status,
            message: 'An error occured when sending data to server'
        });
  	};

  	var putOrderFinallyCallback = function() {
		$location.path('/complete');
  	};
    
  	$scope.sendOrder = function() {
  		var order = angular.copy($scope.data.shipping);
  		order.products = cartFactory.getProducts();
  		orderService.saveOrder(order)
  			.success(putOrderSuccessCallback)
  			.error(putOrderErrorCallback)
  			.finally(putOrderFinallyCallback);
  	};

  });
