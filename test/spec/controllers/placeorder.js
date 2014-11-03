'use strict';

describe('Controller: PlaceorderCtrl', function () {

  // load the controller's module
  beforeEach(module('sportsStoreApp'));

  var PlaceorderCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PlaceorderCtrl = $controller('PlaceorderCtrl', {
      $scope: scope
    });
  }));
  
});
