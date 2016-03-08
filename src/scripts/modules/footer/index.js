'use strict';

var footerTpl = require('raw!./footer.tpl');

/**
 * Footer
 * @param  {window} root
 * @return {Class}
 */
module.exports = function() {

  this.init = function() {
    // NOTE: Don't use jQuery please
    // TODO: Get template and render it
    this.el = document.getElementById('footerGfw');
    this.render();
    // TODO: Init slider
  };

  this.render = function() {
    this.el.innerHTML = footerTpl;
    return this;
  };

  this.initSlider = function() {};

  this.init();

  return this;

};
