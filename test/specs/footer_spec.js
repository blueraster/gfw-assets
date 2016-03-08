'use strict';

var Footer = require('../../src/scripts/modules/footer');

describe('Footer', function() {

  before(function() {
    this.footer = new Footer();
  });

  describe('creation', function() {

    it('should be a valid instance', function() {
      expect(this.footer).to.be.an.instanceof(Footer);
    });

  });

});
