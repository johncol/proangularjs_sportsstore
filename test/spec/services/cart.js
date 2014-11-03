'use strict';

describe('Service: cartFactory', function () {

  // load the service's module
  beforeEach(module('sportsStoreApp'));

  // instantiate service
  var cartFactory;
  beforeEach(inject(function (_cartFactory_) {
    cartFactory = _cartFactory_;
  }));

  it('should exist', function () {
    expect(!!cartFactory).toBe(true);
  });

});
