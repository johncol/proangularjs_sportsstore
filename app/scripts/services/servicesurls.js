'use strict';

/**
 * @ngdoc service
 * @name sportsStoreApp.ServicesURLs
 * @description
 * # ServicesURLs
 * Constant in the sportsStoreApp.
 */
angular.module('sportsStoreApp')
  .constant('productsRequestURL', '/data/products.json')
  .constant('saveOrderRequestURL', 'http:localhost:8080/orders/{id:%id}');
