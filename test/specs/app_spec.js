'use strict';

describe('App', function() {

  before(function() {
    this.app = window.GFW.NavBar.Application;
  });

  describe('initialize', function() {

    it('should be a function', function() {
      expect(this.app.initialize).to.be.a('function');
    });

  });

});
