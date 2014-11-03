'use strict';

/**
 * @ngdoc function
 * @name sportsStoreApp.controller:SportsstoreCtrl
 * @description
 * # SportsstoreCtrl
 * Controller of the sportsStoreApp
 */
angular.module('sportsStoreApp')
    .controller('SportsStoreCtrl', function ($scope, $http, productsRequestURL) {

        $scope.data = {};

        var getProductsSuccessCallback = function(data) {
            $scope.data.products = data.products;
        };

        var getProductsErrorCallback = function(error, status) {
            console.error('Error during request to ' + productsRequestURL + ' (status ' + status + '):', error);
            $scope.data.error = { 
                status: status,
                message: 'An error occured when fetching data from server'
            };
        };

        $http.get(productsRequestURL)
            .success(getProductsSuccessCallback)
            .error(getProductsErrorCallback);

    });
