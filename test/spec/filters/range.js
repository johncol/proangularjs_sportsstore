'use strict';

describe('Filter: range', function () {

  // load the filter's module
  beforeEach(module('sportsStoreApp'));

  // initialize a new instance of the filter before each test
  var range;
  beforeEach(inject(function ($filter) {
    range = $filter('range');
  }));

});
