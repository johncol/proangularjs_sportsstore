'use strict';

/**
 * @ngdoc filter
 * @name sportsStoreApp.filter:pageCount
 * @function
 * @description
 * # pageCount
 * Filter in the sportsStoreApp.
 */
angular.module('sportsStoreApp')
  .filter('pageCount', function () {
    return function (data, itemsPerPage) {
      if(angular.isArray(data) && angular.isNumber(itemsPerPage)) {
      	var pageIndexes = [];
      	for(var pageIndex = 0; pageIndex < Math.ceil(data.length / itemsPerPage); pageIndex++) {
      		pageIndexes.push(pageIndex);
      	}
      	return pageIndexes;
      }
      return data;
    };
  });
