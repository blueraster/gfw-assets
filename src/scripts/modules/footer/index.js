'use strict';

import {lory} from 'lory.js';
import $gfwdom from '../../facade';
import utils from '../../utils';
import footerTpl from './footer.tpl';
import footerIconsTpl from './footer-icons.tpl';

const sliderPause = 5000;
const sliderOptions = {
  infinite: 5,
  slidesToScroll: 5,
  slideSpeed: 500
};
const slideMinWidth = 130;

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

    /* Number of slides currently shown at once */
    this.fittedSlides = 5;

    /* We save the handlers binded to the current context to be able to use them
     * later. We can't bind them when assigning them to events because calling
     * "bind" returns a new function of which we'd loose the reference that we'd
     * further need to remove them. */
    this.handlers = {
      cancelTimer: this.cancelTimer.bind(this),
      initTimer: this.initTimer.bind(this)
    };

    this.render();
    this.initListeners();
  }

  render() {
    this.el.innerHTML = footerTpl() + footerIconsTpl();

    this.sliderContainer = document.getElementById('my-gfw-slider');
    this.slidesContainer = document.querySelector('.frame');

    /* DO NOT OVERRIDE THE VARIABLE BELOW: see destroySlider for information */
    this.slides = document.querySelectorAll('.js_slide');

    this.initSlider();
    this.updateSlider();

    return this;
  }

  initListeners() {
    $gfwdom(window).on('resize', utils.debounce(this.updateSlider.bind(this), 100));
  }

  /**
   * Method to start Lory slider
   */
  initSlider() {
    /* We prevent issues by resetting the slider to its original state */
    if(this.slider) {
      this.cancelTimer();
      this.destroySlider();

      this.sliderContainer.removeEventListener('before.lory.slide', this.handlers.cancelTimer);
      this.sliderContainer.removeEventListener('after.lory.slide', this.handlers.initTimer);
      this.sliderContainer.removeEventListener('mouseover', this.handlers.cancelTimer);
      this.sliderContainer.removeEventListener('mouseout', this.handlers.initTimer);
    }

    this.slider = lory(this.sliderContainer, sliderOptions);

    this.sliderContainer.addEventListener('before.lory.slide', this.handlers.cancelTimer);
    this.sliderContainer.addEventListener('after.lory.slide', this.handlers.initTimer);
    this.sliderContainer.addEventListener('mouseover', this.handlers.cancelTimer);
    this.sliderContainer.addEventListener('mouseout', this.handlers.initTimer);

    this.initTimer();
  }

  /**
   * Update the number of slides shown at once and their sizes so we can't see
   * some logos cut
   */
  updateSlider() {
    const fittingSlides = ~~(this.slidesContainer.getBoundingClientRect().width / slideMinWidth);

    if(fittingSlides !== this.fittedSlides && !utils.isSmallScreen() &&
      (fittingSlides <= 5 || fittingSlides > 5 && this.fittedSlides < 5)) {

      this.fittedSlides = Math.min(fittingSlides, 5);

      sliderOptions.infinite       = this.fittedSlides;
      sliderOptions.slidesToScroll = this.fittedSlides;

      for(let i = 0, j = this.slides.length; i < j; i++) {
        this.slides[i].style.width = (100 / this.fittedSlides) + '%';
      }
    }

    this.initSlider();
  }

  /* Destroy the Lory instance and reset the DOM as it was before Lory's
   * instanciation */
  destroySlider() {
    if(!this.slides || !this.slider) return;

    /* Because Lory copies some of the slides to provide the animation, we
     * need to ensure to remove them before initializing once again so we don't
     * have a leak */
    const slides = [...this.slides];
    [...document.querySelectorAll('.js_slide')].filter((slide) => {
      if(!~slides.indexOf(slide)) {
        slide.parentNode.removeChild(slide);
      }
    });

    this.slider.destroy();
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
