'use strict';

describe('Controller: WantopenCtrl', function () {

  // load the controller's module
  beforeEach(module('frontedApp'));

  var WantopenCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WantopenCtrl = $controller('WantopenCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(WantopenCtrl.awesomeThings.length).toBe(3);
  });
});
