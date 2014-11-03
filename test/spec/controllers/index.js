'use strict';

describe('Controller: IndexCtrl', function () {

  // load the controller's module
  beforeEach(module('sportsStoreApp'));

  var IndexCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IndexCtrl = $controller('IndexCtrl', {
      $scope: scope
    });
  }));

  it('should update scope.active', function () {
    expect(scope.active).toBe('home');
    scope.setActive('catalog');
    expect(scope.active).toBe('catalog');
  });
});
