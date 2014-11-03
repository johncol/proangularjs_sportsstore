'use strict';

/**
 * @ngdoc directive
 * @name sportsStoreApp.directive:CartSummary
 * @description
 * # CartSummary
 */
angular.module('sportsStoreApp')
  .directive('cartSummary', function (cartFactory) {
    return {
      restrict: 'E',
      templateUrl: 'views/directives/cartSummary.html',
      controller: function ($scope) {
        
        var cartData = cartFactory.getProducts();
        
        $scope.itemCount = function() {
        	var totalCount = 0;
        	angular.forEach(cartData, function(product) {
        		totalCount += product.count;
        	});
        	return totalCount;
        };

        $scope.total = function() {
        	var total = 0;
        	angular.forEach(cartData, function(product){
        		total += product.price * product.count;
        	});
        	return total;
        };

      }
    };
  });
