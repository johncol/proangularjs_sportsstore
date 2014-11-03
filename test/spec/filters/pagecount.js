'use strict';

describe('Filter: pageCount', function () {

  // load the filter's module
  beforeEach(module('sportsStoreApp'));

  // initialize a new instance of the filter before each test
  var pageCount;
  beforeEach(inject(function ($filter) {
    pageCount = $filter('pageCount');
  }));

});
