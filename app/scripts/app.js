'use strict';

/**
 * @ngdoc overview
 * @name sportsStoreApp
 * @description
 * # sportsStoreApp
 *
 * Main module of the application.
 */
angular
  .module('sportsStoreApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/yeoman', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/', {
        templateUrl: 'views/catalog.html',
        controller: 'CatalogCtrl'
      })
      .when('/catalog', {
        templateUrl: 'views/catalog.html',
        controller: 'CatalogCtrl'
      })
      .when('/checkout', {
        templateUrl: 'views/checkout.html',
        controller: 'CheckoutCtrl'
      })
      .when('/placeorder', {
        templateUrl: 'views/placeorder.html',
        controller: 'PlaceorderCtrl'
      })
      .when('/complete', {
        templateUrl: 'views/complete.html',
        controller: 'CompleteCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
