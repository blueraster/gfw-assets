'use strict';

import Footer from '../../src/scripts/modules/footer';

describe('Footer', () => {
  before(function () {
    const footerGFW = document.createElement('div');
    footerGFW.id = 'footerGfw';
    document.body.appendChild(footerGFW);

    const sliderEl = document.createElement('div');
    sliderEl.id = 'my-gfw-slider';
    document.body.appendChild(sliderEl);

    this.footer = new Footer();
  });

  describe('initialize', function () {
    it('should be an instanceof Footer', function () {
      expect(this.footer).to.be.an.instanceof(Footer);
    });
    it('should render a string', function () {
      expect(this.footer.el.innerHTML).to.be.a('string');
    });
  });

  describe('slider', function () {
    it('should be an instance of Lory', function () {
      expect(this.footer.slider).to.have.property('prev');
      expect(this.footer.slider).to.have.property('next');
      expect(this.footer.slider).to.have.property('slideTo');
    });
  });
});
