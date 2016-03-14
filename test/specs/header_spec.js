'use strict';

import Header from '../../src/scripts/modules/header';
import utils from '../../src/scripts/utils';


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
    it('should be an object', function () {
      expect(this.header.params).to.be.an('object');
    });

    it('should have the next default values', function () {
    	this.params = this.header.params;
    	
      expect(this.params.current).to.be.an('undefined');
      expect(this.params.target).to.be.an('undefined');
      expect(this.params.hostname).to.be.a('string');
    });
  });

  describe('utils', function () {
    it('should have the next default values', function () {  	
      expect(utils.isSmallScreen()).to.be.a('boolean').to.not.be.true;
      expect(utils.isDefaultHost()).to.be.a('boolean').to.be.true;
      expect(utils.getHost()).to.be.a('string').to.equal('http://localhost:5000');
    });
  });

  

  /**
   * Methods
   * - cache(), 
   * - setParams()
   * - initHighlightCurrent()
   * - showMenu()
   * - hideMenus()
	 * - initTranslate()
	 * - initLinksUrls()
	 * - initMyGFW()
   */  
  describe('cache()', function () {

  });

  describe('setParams()', function () {

  });

  describe('initHighlightCurrent()', function () {

  });

  describe('initListeners()', function () {

  });

  describe('showMenu()', function () {

  });

  describe('hideMenus()', function () {

  });

  describe('initTranslate()', function () {

  });

  describe('initLinksUrls()', function () {

  });

  describe('initMyGFW()', function () {

  });

  describe('initNavigation()', function () {
  	
  });

});
