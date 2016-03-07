'use strict';

describe('Isolated libraries', function() {

  describe('local jQuery library', function() {
    it('should exist', function() {
      expect(window.GFW.$).to.exist;
    });
    it('should be "2.1.4" version', function() {
      expect(window.GFW.$.fn.jquery).to.be.equal('2.1.4');
    });
  });

  describe('global jQuery', function() {
    it('should exist', function() {
      expect(window.$).to.exist;
    });
    it('should be "1.10.2" version', function() {
      expect(window.$.fn.jquery).to.be.equal('1.10.2');
    });
  });

});
