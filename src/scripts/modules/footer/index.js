'use strict';

var lorySlider = require('lory.js').lory;
var footerTpl = require('./footer.tpl');
var footerIconsTpl = require('./footer-icons.tpl');

/**
 * Footer
 * @param  {window} root
 * @return {Class}
 */
module.exports = function() {

  this.init = function() {
    this.el = document.getElementById('footerGfw');
    if (!this.el) {
      throw new Error('element #footerGfw doesn\'t exist');
    }
    this.render();
  };

  this.render = function() {
    this.el.innerHTML = footerTpl + footerIconsTpl;
    this.initSlider();
    return this;
  };

  /**
   * Method to start Lory slider
   */
  this.initSlider = function() {
    var sliderElement = document.getElementById('my-gfw-slider');

    // Events
    sliderElement.addEventListener('before.lory.slide', this.cancelTimer.bind(this));
    sliderElement.addEventListener('after.lory.slide', this.initTimer.bind(this));
    sliderElement.addEventListener('mouseover', this.cancelTimer.bind(this));
    sliderElement.addEventListener('mouseout', this.initTimer.bind(this));

    this.slider = lorySlider(sliderElement, {
      infinite: 5,
      slidesToScroll: 1,
      slideSpeed: 500
    });

    this.initTimer();
  };

  /**
   * This method is used to move lory slider
   */
  this.initTimer = function() {
    this.cancelTimer(); // Ensure remove timer at begining
    if (!this.sliderTimer) {
      this.sliderTimer = setInterval(this.slider.next.bind(this.slider), 5000);
    }
  };

  /**
   * This method is used to remove movement of lory slider
   */
  this.cancelTimer = function() {
    if (this.sliderTimer) {
      clearInterval(this.sliderTimer);
      this.sliderTimer = null;
    }
  };

  this.init();

  return this;

};
