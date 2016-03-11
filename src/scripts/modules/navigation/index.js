'use strict';

var ejs = require('ejs');
var $gfwdom = require('../../facade');
var utils = require('../../utils');

/**
 * Header
 * @param  {window} root
 * @return {Class}
 */
module.exports = function() {

  this.init = function() {
    this.$el = $gfwdom('#submenuMenuMobile');
    if (!this.$el) {
      throw new Error('element #submenuMenuMobile doesn\'t exist');
    }
    this.render();
  };

  this.render = function() {
    console.log('render navigation');
    // this.el.innerHTML = headerTpl + headerIconsTpl;

    // this.cache();

    // this.setParams();

    // this.initHighlightCurrent();
    // this.initListeners();
    // this.initTranslate();
    // this.initLinksUrls();
    // this.initMyGFW();

    // return this;
  };

  this.init();

  return this;

};
