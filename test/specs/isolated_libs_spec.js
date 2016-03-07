'use strict';

describe('Isolated libraries', function() {

  // jQuery
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

  // Lory
  describe('local Lory', function() {
    it('should exist', function() {
      expect(window.GFW.lory).to.exist;
    });
    it('should be "0.6.1" version', function() {
      expect(window.GFW.lory.prototype.version).to.be.undefined;
    });
  });

  describe('global Lory', function() {
    it('should exist', function() {
      expect(window.lory).to.exist;
    });
    it('version should be undefined', function() {
      expect(window.lory.prototype.version).to.be.equal('0.6.1');
    });
  });

});
