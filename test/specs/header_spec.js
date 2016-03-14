'use strict';

import Header from '../../src/scripts/modules/header';
import utils from '../../src/scripts/utils';


describe('Header', function () {
  before(function () {
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
    it('should be an object', function () {
      expect(utils).to.be.an('object');
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
    it('should be an object', function () {
      expect(utils).to.be.an('object');
    });

    it('should have the next default values', function () {
    	this.params = this.header.params;
    	
      expect(utils.isSmallScreen()).to.be.a('boolean');
      expect(utils.isDefaultHost()).to.be.a('boolean');
      expect(utils.getHost()).to.be.a('string');
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
    it('should be a function', function () {
      expect(this.header.cache).to.be.a('function');
    });
  	// Script
    it('should exist #script-loader', function () {
      expect(this.header.$script).to.exist;
    });
  	// Script
    it('should exist $htmlbody', function () {
      expect(this.header.$htmlbody).to.exist;
    });

    it('should exist $header', function() {
    	expect(this.header.$header).to.exist;
    });

    it('should exist $headerSubmenu', function() {
    	expect(this.header.$headerSubmenu).to.exist;
    });

    it('should exist $headerSubmenuBtns', function() {
    	expect(this.header.$headerSubmenuBtns).to.exist;
    });

    it('should exist $headerSubmenuApp', function() {
    	expect(this.header.$headerSubmenuApp).to.exist;
    });

    it('should exist $links', function() {
    	expect(this.header.$links).to.exist;
    });

    it('should exist $linksSubmenu', function() {
    	expect(this.header.$linksSubmenu).to.exist;
    });
  });

  describe('setParams()', function () {
    it('should be a function', function () {
      expect(this.header.setParams).to.be.a('function');
    });
  });

  describe('initHighlightCurrent()', function () {
    it('should be a function', function () {
      expect(this.header.initHighlightCurrent).to.be.a('function');
    });
  });

  describe('initListeners()', function () {
    it('should be a function', function () {
      expect(this.header.initListeners).to.be.a('function');
    });
  });

  describe('showMenu()', function () {
    it('should be a function', function () {
      expect(this.header.showMenu).to.be.a('function');
    });
  });

  describe('hideMenus()', function () {
    it('should be a function', function () {
      expect(this.header.hideMenus).to.be.a('function');
    });
  });

  describe('initTranslate()', function () {
    it('should be a function', function () {
      expect(this.header.initTranslate).to.be.a('function');
    });
  });

  describe('initLinksUrls()', function () {
    it('should be a function', function () {
      expect(this.header.initLinksUrls).to.be.a('function');
    });
  });

  describe('initMyGFW()', function () {
    it('should be a function', function () {
      expect(this.header.initMyGFW).to.be.a('function');
    });
  });

});
