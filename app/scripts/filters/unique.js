'use strict';

/**
 * @ngdoc filter
 * @name sportsStoreApp.filter:unique
 * @function
 * @description
 * # unique
 * Filter in the sportsStoreApp.
 */
angular.module('sportsStoreApp')
  .filter('unique', function () {
    return function (data, property) {
    	if(angular.isArray(data) && angular.isString(property)) {
        	var filteredData = [];
        	var propertyValues = {};
        	angular.forEach(data, function(item) {
        		var propertyValue = item[property];
        		if (angular.isUndefined(propertyValues[propertyValue])) {
        			propertyValues[propertyValue] = true;
        			filteredData.push(propertyValue);
        		}
        	});
      	    return filteredData;
        }
        return data;
    };
  });
