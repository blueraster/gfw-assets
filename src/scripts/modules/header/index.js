'use strict';

var headerTpl = require('raw!./header.tpl');

/**
 * Header
 * @param  {window} root
 * @return {Class}
 */
module.exports = function() {

  this.init = function() {
    this.el = document.getElementById('headerGfw');
    this.render();
  };

  this.render = function() {
    this.el.innerHTML = headerTpl;
    return this;
  };

  this.init();

  return this;

};
