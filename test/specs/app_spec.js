'use strict';

describe('App', function() {

  before(function() {
    this.app = window.GFW.NavBar.Application;
  });

  describe('setElements', function() {

    it('should be a function', function() {
      expect(this.app.setElements).to.be.a('function');
    });

    it('should has correct variables', function() {
      this.app.setElements();
      expect(this.app.$head).to.be.an.instanceof(window.GFW.$);
      expect(this.app.$header).to.be.an.instanceof(window.GFW.$);
      expect(this.app.$footer).to.be.an.instanceof(window.GFW.$);
      expect(this.app.$links).to.be.an.instanceof(window.GFW.$);
      expect(this.app.$linksSubmenu).to.be.an.instanceof(window.GFW.$);
    });

  });

});
