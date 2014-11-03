'use strict';

/**
 * @ngdoc filter
 * @name sportsStoreApp.filter:range
 * @function
 * @description
 * # range
 * Filter in the sportsStoreApp.
 */
angular.module('sportsStoreApp')
  .filter('range', function ($filter) {
    return function (data, page, itemsPerPage) {
      if (angular.isArray(data) && angular.isNumber(page) && angular.isNumber(itemsPerPage)) {
      	var filteredData = [];
      	var startIndex = (page - 1) * itemsPerPage;
      	if (startIndex <= data.length) {
      		var limitToFilter = $filter('limitTo');
      		var spliced = data.splice(startIndex);
      		filteredData = limitToFilter(spliced, itemsPerPage);
      	}
      	return filteredData;
      }
      return data;
    };
  });
