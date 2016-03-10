'use strict';

var footerTpl = require('raw!./footer.tpl');

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
    this.el.innerHTML = footerTpl;
    return this;
  };

  this.initSlider = function() {};

  this.init();

  return this;

};
