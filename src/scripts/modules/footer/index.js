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
    this.el = document.createElement('div');
    this.render();
  };

  this.render = function() {
    if (this.el) {
      this.el.innerHTML = footerTpl;
    }
    return this;
  };

  this.initSlider = function() {};

  this.init();

  return this;

};
