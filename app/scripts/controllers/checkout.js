'use strict';

/**
 * @ngdoc function
 * @name sportsStoreApp.controller:CheckoutCtrl
 * @description
 * # CheckoutCtrl
 * Controller of the sportsStoreApp
 */
angular.module('sportsStoreApp')
    .controller('CheckoutCtrl', function ($scope, cartFactory) {
		
		var cartData = cartFactory.getProducts();

		// cartData.push({
		// 	id: 1,
		// 	name: 'balls',
		// 	count: 2,
		// 	price: '100'
		// }, {
		// 	id: 2,
		// 	name: 'ralleys',
		// 	count: 3,
		// 	price: '45'
		// });

		$scope.cartData = cartData;

		$scope.total = function() {
			var total = 0;
			angular.forEach(cartData, function(product){
				total += product.price * product.count;
			});
			return total;
		};

		$scope.removeProduct = function(product) {
			cartFactory.removeProduct(product.id);
		};

		$scope.emptyCart = function() {
			return cartData.length === 0;
		};

    });
