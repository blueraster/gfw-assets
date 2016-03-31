'use strict';

import loginButtonTpl from './login-button.tpl';
import logoutButtonTpl from './logout-button.tpl';
import LoginModal from './login-modal';
import $gfwdom from '../../facade';
import utils from '../../utils';

class LoginButton {

  init() {
    this.$el = $gfwdom('#my-gfw-container');
    if (!this.$el) {
      throw new Error('element #footerGfw doesn\'t exist');
    }
    this.checkStatus();
  }

  // Check if the user is logged
  checkStatus() {
    utils.isLoggedIn({
      success: function(response) {
        this.loggedIn = true;
        this.render();
        this.setupGoogleAnalytics(response);
      }.bind(this),
      failure: function() {
        this.loggedIn = false;
        this.render();
      }.bind(this)
    });
  }

  // Render different templates depending on the loggin state
  render() {
    const template = (!!this.loggedIn) ? loginButtonTpl : logoutButtonTpl;
    this.$el.html(template());

    this.initEvents();
    this.initLinks();

    return this;
  }

  initEvents() {
    const $openModal = this.$el.find('#my-gfw-open-modal');
    $openModal.on('click', this.showModal.bind(this))
  }

  initLinks() {
    const $signout = this.$el.find('#my-gfw-sign-out');
    $signout.attr('href', utils.getAPIHost() + $signout.attr('href'));
  }

  showModal(e) {
    e && event.stopPropagation() && event.preventDefault();
    const modalView = new LoginModal();
    modalView.init();
  }

  setupGoogleAnalytics(response) {
    if (window.ga !== undefined) {
      window.ga('set', 'userId', response.id);
    }
  }

}

export default LoginButton;
