'use strict';

import {lory} from 'lory.js';
import footerTpl from './footer.tpl';
import footerIconsTpl from './footer-icons.tpl';

const sliderPause = 5000;
const sliderOptions = {
  infinite: 5,
  slidesToScroll: 1,
  slideSpeed: 500
};

/**
 * Footer
 * @param  {window} root
 * @return {Class}
 */
class Footer {

  constructor() {
    this.el = document.getElementById('footerGfw');
    if (!this.el) {
      throw new Error('element #footerGfw doesn\'t exist');
    }
    this.render();
  }

  render() {
    this.el.innerHTML = footerTpl() + footerIconsTpl();
    this.initSlider();
    return this;
  }

  /**
   * Method to start Lory slider
   */
  initSlider() {
    const sliderElement = document.getElementById('my-gfw-slider');

    // Events
    sliderElement.addEventListener('before.lory.slide', this.cancelTimer.bind(this));
    sliderElement.addEventListener('after.lory.slide', this.initTimer.bind(this));
    sliderElement.addEventListener('mouseover', this.cancelTimer.bind(this));
    sliderElement.addEventListener('mouseout', this.initTimer.bind(this));

    this.slider = lory(sliderElement, sliderOptions);

    this.initTimer();
  }

  /**
   * This method is used to move lory slider
   */
  initTimer() {
    this.cancelTimer(); // Ensure remove timer at begining
    if (!this.sliderTimer) {
      this.sliderTimer = setInterval(this.slider.next.bind(this.slider), sliderPause);
    }
  }

  /**
   * This method is used to remove movement of lory slider
   */
  cancelTimer() {
    if (this.sliderTimer) {
      clearInterval(this.sliderTimer);
      this.sliderTimer = null;
    }
  }

}

export default Footer;
