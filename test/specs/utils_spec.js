'use strict';
import utils from '../../src/scripts/utils';

describe('Utils', function () {
  before(function () {
  	window.innerWidth = 1300;
  });

  describe('utils', function () {
    it('getWindowWidth is false', function () {
      expect(utils.getWindowWidth()).to.be.a('number');
    });

    it('getWindowHeigth is false', function () {
      expect(utils.getWindowHeigth()).to.be.a('number');
    });

    it('getHost is a string', function () {
      expect(utils.getHost()).to.be.a('string').to.equal('http://localhost:' + window.location.port);
    });

    it('getAPIHost is a string', function () {
      expect(utils.getAPIHost()).to.be.a('string').to.equal('http://api.globalforestwatch.org');
    });

    it('isSmallScreen is false', function () {
      expect(utils.isSmallScreen()).to.be.a('boolean').to.not.be.true;
    });

    it('isDefaultHost is true', function () {
      expect(utils.isDefaultHost()).to.be.a('boolean').to.be.true;
    });

  });

});


