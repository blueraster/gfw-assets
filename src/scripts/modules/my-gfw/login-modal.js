'use strict';

var loginModalTpl = require('./login-modal.tpl');
var $gfwdom = require('../../facade');
var utils = require('../../utils');

/**
 * User
 * @param  {window} root
 * @return {Class}
 */
module.exports = function() {

  this.init = function() {
    this.$el = $gfwdom('#my-gfw-modal');
    if (!this.$el) {
      throw new Error('element #footerGfw doesn\'t exist');
    }
    this.render();
  };

  this.render = function() {
    var template = loginModalTpl;
    this.$el.html(template);
    this.$el.addClass('is-active');
    
    this.initEvents();
    this.initLinks();

    return this;
  };

  this.initEvents = function() {
    var $modalClose = this.$el.find('.my-gfw-modal-close');
    var $modalBackdrop = this.$el.find('.my-gfw-modal-backdrop');
    
    $modalClose.on('click', this.hideModal.bind(this))
    $modalBackdrop.on('click', this.hideModal.bind(this))
  };

  this.initLinks = function() {
    var $signin = this.$el.find('.my-gfw-sign-in');

    $signin.forEach(function(v) {
      $gfwdom(v).attr('href', utils.getAPIHost() + $gfwdom(v).attr('href'))
    });
  };

  this.hideModal = function(e) {
    e && event.stopPropagation() && event.preventDefault();
    this.$el.removeClass('is-active');
    this.$el.html('');
  }

  return this;
};
