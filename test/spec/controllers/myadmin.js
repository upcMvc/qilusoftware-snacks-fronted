'use strict';

describe('Controller: MyadminCtrl', function () {

  // load the controller's module
  beforeEach(module('frontedApp'));

  var MyadminCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MyadminCtrl = $controller('MyadminCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MyadminCtrl.awesomeThings.length).toBe(3);
  });
});
