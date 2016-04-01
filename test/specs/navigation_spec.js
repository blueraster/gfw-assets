'use strict';

import Navigation from '../../src/scripts/modules/navigation';
import globaljson from '../../src/scripts/modules/navigation/global.json';
import climatejson from '../../src/scripts/modules/navigation/climate.json';
import howtojson from '../../src/scripts/modules/navigation/howto.json';


describe('Navigation', function () {
  before(function () {
    this.navigation = new Navigation();
  });

  describe('initialize', function () {
    it('should be an instance of', function () {
      expect(this.navigation).to.be.an.instanceof(Navigation);
    });
  });

  describe('jsons', function () {
    it('should be an instance of array and have length > 0', function () {
      expect(globaljson).to.be.an('array');
      expect(globaljson).to.have.length.above(0)
    });
    it('should be an instance of array and have length > 0', function () {
      expect(climatejson).to.be.an('array');
      expect(climatejson).to.have.length.above(0)
    });
    it('should be an instance of array and have length > 0', function () {
      expect(howtojson).to.be.an('array');
      expect(howtojson).to.have.length.above(0)
    });
  });

});
