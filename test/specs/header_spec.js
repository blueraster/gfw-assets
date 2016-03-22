'use strict';

import Header from '../../src/scripts/modules/header';

describe('Header', function () {
  before(function () {
  	window.innerWidth = 1300;
    const headerGFW = document.createElement('div');
    headerGFW.id = 'headerGfw';
    document.body.appendChild(headerGFW);

    this.header = new Header();
  });

  describe('initialize', function () {
    it('should be an instanceof Header', function () {
      expect(this.header).to.be.an.instanceof(Header);
    });
    it('should render a string', function () {
      expect(this.header.el.innerHTML).to.be.a('string');
    });
  });

  describe('params', function () {
    it('should have the next default values', function () {
    	this.params = this.header.params;
    	
      expect(this.params.current).to.be.an('undefined');
      expect(this.params.target).to.be.an('undefined');
      expect(this.params.hostname).to.be.a('string');
    });
  });

});
