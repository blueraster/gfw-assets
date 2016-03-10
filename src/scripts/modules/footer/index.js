'use strict';

var lory = require('../../libs/lory.min').lory.lory;
var footerTpl = require('raw!./footer.tpl');
var footerIconsTpl = require('raw!./footer-icons.tpl');

/**
 * Footer
 * @param  {window} root
 * @return {Class}
 */
module.exports = function() {

  this.init = function() {
    this.el = document.getElementById('footerGfw');
    if (!this.el) {
      this.el = document.createElement('div');
    }
    this.render();
  };

  this.render = function() {
    this.el.innerHTML = footerTpl + footerIconsTpl;
    
    this.initSlider();

    return this;
  };

  // SLIDER
  this.initSlider = function() {
    this.sliderEl = document.querySelector('#my-gfw-slider');

    // Events
    this.sliderEl.addEventListener('before.lory.slide', this.cancelTimer.bind(this));
    this.sliderEl.addEventListener('after.lory.slide', this.initTimer.bind(this));
    this.sliderEl.addEventListener('mouseover', this.cancelTimer.bind(this));
    this.sliderEl.addEventListener('mouseout', this.initTimer.bind(this));

    this.slider = lory(this.sliderEl, {
      infinite: 5,
      slidesToScroll: 1,
      slideSpeed: 500
    });

    this.initTimer();
  };

  this.initTimer = function() {
    if (!this.sliderTimer) {
      this.sliderTimer = setInterval(this.slider.next.bind(this.slider), 3000);    
    }
  };

  // clear timer
  this.cancelTimer = function() {
    clearInterval(this.sliderTimer);
    this.sliderTimer = null;
  };

  this.init();

  return this;

};
