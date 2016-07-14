'use strict';

describe('Controller: PersonshopCtrl', function () {

  // load the controller's module
  beforeEach(module('frontedApp'));

  var PersonshopCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PersonshopCtrl = $controller('PersonshopCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PersonshopCtrl.awesomeThings.length).toBe(3);
  });
});
