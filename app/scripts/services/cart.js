'use strict';

/**
 * @ngdoc service
 * @name sportsStoreApp.cart
 * @description
 * # cart
 * Factory in the sportsStoreApp.
 */
angular.module('sportsStoreApp')
  .factory('cartFactory', function () {

    var cartData = [];

    var addProduct = function(id, name, price) {
      var productAddedToExistingOnes = false;
      for (var i = 0; i < cartData.length; i++) {
        if (cartData[i].id === id) {
          cartData[i].count++;
          productAddedToExistingOnes = true;
          break; 
        }
      }
      if (!productAddedToExistingOnes) {
        cartData.push({
          id: id,
          name: name,
          price: price,
          count: 1
        })
      }
    };

    var removeProduct = function(id) {
      for (var i = 0; i < cartData.length; i++) {
        if (cartData[i].id === id) {
          cartData.splice(i, 1);
          break;
        }
      }
    };

    var getProducts = function () {
      return cartData;
    };

    return {
      addProduct: addProduct,
      removeProduct: removeProduct,
      getProducts: getProducts,
    };
  });
