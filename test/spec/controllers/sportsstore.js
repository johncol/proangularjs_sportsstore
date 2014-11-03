'use strict';

describe('Controller: SportsStoreCtrl', function () {

  // load the controller's module
  beforeEach(module('sportsStoreApp'));

  var SportsStoreCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SportsStoreCtrl = $controller('SportsStoreCtrl', {
      $scope: scope
    });
  }));
  
});
