'use strict';

describe('Constants File: CSSClassesConstants', function () {

  // load the service's module
  beforeEach(module('sportsStoreApp'));

  // instantiate service
  var activeItemInItemsClass;
  beforeEach(inject(function (_activeItemInItemsClass_) {
    activeItemInItemsClass = _activeItemInItemsClass_;
  }));

  it('activeItemInItemsClass should exist', function () {
    expect(!!activeItemInItemsClass).toBe(true);
  });

});
