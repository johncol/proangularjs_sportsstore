'use strict';

/**
 * @ngdoc function
 * @name sportsStoreApp.controller:CatalogCtrl
 * @description
 * # CatalogCtrl
 * Controller of the sportsStoreApp
 */
angular.module('sportsStoreApp')
  .controller('CatalogCtrl', function ($scope, $route, cartFactory, activeItemInItemsClass, maxItemsPerPage) {

    $scope.products = $scope.data.products;
    $scope.itemsPerPage = maxItemsPerPage;
    $scope.selectedPage = 1;

    $scope.addProductToCart = function(product) {
      cartFactory.addProduct(product.id, product.name, product.price);
    };

    $scope.productsByCategory = function(product) {
      return angular.isUndefined($scope.selectedCategory) ||  product.category === $scope.selectedCategory;
    };

    $scope.selectCategory = function(category) {
    	$scope.selectedCategory = category;
      $scope.selectedPage = 1;
    };

    $scope.selectPage = function(page) {
      $scope.selectedPage = page;
    };

    $scope.getActiveItemClass = function(category) {
      return $scope.selectedCategory === category ? activeItemInItemsClass : '';
    };

    $scope.getActivePageClass = function(page) {
      return $scope.selectedPage === page ? activeItemInItemsClass : '';
    };

  });
