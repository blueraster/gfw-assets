'use strict';

import Contact from '../../src/scripts/modules/contact';

describe('Contact', () => {
  before(function () {
    this.contact = new Contact();
  });

  describe('creation', function () {
    it('should be a valid instance', function () {
      expect(this.contact).to.be.an.instanceof(Contact);
    });
  });

  describe('params', function () {
    it('hidden should be true', function () {
      expect(this.contact.hidden).to.be.true;
    });
  });

  describe('show', function () {
	  before(function () {
	    this.contact.show();
	  });
    it('hidden should be false', function () {
      expect(this.contact.hidden).to.not.be.true;
    });
  });

  describe('hide', function () {
	  before(function () {
	    this.contact.hide();
	  });
    it('hidden should be true', function () {
      expect(this.contact.hidden).to.be.true;
    });
  });

});