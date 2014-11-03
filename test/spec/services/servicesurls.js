'use strict';

describe('Constants File: ServicesURLs', function () {

  // load the service's module
  beforeEach(module('sportsStoreApp'));

  // instantiate service
  var productsRequestURL;
  beforeEach(inject(function (_productsRequestURL_) {
    productsRequestURL = _productsRequestURL_;
  }));

  it('productsRequestURL should exist', function () {
    expect(!!productsRequestURL).toBe(true);
  });

});
