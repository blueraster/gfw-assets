'use strict';

import Header from '../../src/scripts/modules/header';

describe('Header', function () {
  before(function () {
    this.header = new Header();
  });

  describe('creation', function () {
    it('should be a valid instance', function () {
      expect(this.header).to.be.an.instanceof(Header);
    });
  });
});
