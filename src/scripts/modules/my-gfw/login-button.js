'use strict';

var loginButtonTpl = require('./login-button.tpl');
var logoutButtonTpl = require('./logout-button.tpl');
var LoginModal = require('./login-modal');
var $gfwdom = require('../../facade');
var utils = require('../../utils');

/**
 * User
 * @param  {window} root
 * @return {Class}
 */
module.exports = function() {

  this.init = function() {
    this.$el = $gfwdom('#my-gfw-container');
    if (!this.$el) {
      throw new Error('element #footerGfw doesn\'t exist');
    }
    this.checkStatus();
  };

  // Check if the user is logged
  this.checkStatus = function() {
    utils.isLoggedIn({
      success: function() {
        this.loggedIn = true;
        this.render();
      }.bind(this),
      failure: function() {
        this.loggedIn = false;
        this.render();
      }.bind(this)
    });    
  };

  // Render different templates depending on the loggin state
  this.render = function() {
    var template = (!!this.loggedIn) ? loginButtonTpl : logoutButtonTpl;
    this.$el.html(template);
    
    this.initEvents();
    this.initLinks();

    return this;
  };

  this.initEvents = function() {
    var $openModal = this.$el.find('#my-gfw-open-modal');
    $openModal.on('click', this.showModal.bind(this))
  };

  this.initLinks = function() {
    var $signout = this.$el.find('#my-gfw-sign-out');
    $signout.attr('href', utils.getAPIHost() + $signout.attr('href'));
  };

  this.showModal = function(e) {
    e && event.stopPropagation() && event.preventDefault();
    var modalView = new LoginModal();
    modalView.init();
  }

  return this;
};