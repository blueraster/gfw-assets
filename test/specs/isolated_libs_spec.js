'use strict';

describe('Isolated libraries', function() {

  describe('global jQuery library', function() {
    it('should exist', function() {
      expect(window.$).to.exist;
    });
    it('should be "1.10.2" version', function() {
      expect(window.$.fn.jquery).to.be.equal('1.10.2');
    });
  });

  describe('local jQuery library', function() {
    it('should exist', function() {
      expect(window.$gfw).to.exist;
    });
    it('should be "2.2.1" version', function() {
      expect(window.$gfw.fn.jquery).to.be.equal('2.2.1');
    });
  });

});
