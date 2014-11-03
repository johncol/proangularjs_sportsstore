'use strict';

/**
 * @ngdoc service
 * @name sportsStoreApp.Order
 * @description
 * # Order
 * Service in the sportsStoreApp.
 */
angular.module('sportsStoreApp')
  .service('orderService', function orderService($http, saveOrderRequestURL) {
    return {

    	saveOrder: function(order) {
    		return $http.post(saveOrderRequestURL, order);
    	},

    	registerOrderId: function(orderId) {
    		this.orderId = orderId;
    	},

    	registerError: function(error) {
    		this.error = error;
    	},

    	getOrderId: function() {
    		return this.orderId;
    	},

    	getError: function() {
    		console.log('this.error: ', this.error);
    		return this.error;
    	}

    };
  });
