'use strict';

import loginModalTpl from './login-modal.tpl';
import $gfwdom from '../../facade';
import utils from '../../utils';

/**
 * User
 * @param  {window} root
 * @return {Class}
 */
class LoginModal {

  init() {
    this.$el = $gfwdom('#my-gfw-modal');
    if (!this.$el) {
      throw new Error('element #footerGfw doesn\'t exist');
    }
    this.render();
  }

  render() {
    this.$el.html(loginModalTpl());
    // If you don't add this clas you won't see anything
    this.$el.addClass('is-active');

    this.initEvents();
    this.initLinks();

    return this;
  }

  // Events for closing the modal
  initEvents() {
    var $modalClose = this.$el.find('.my-gfw-modal-close');
    var $modalBackdrop = this.$el.find('.my-gfw-modal-backdrop');

    $modalClose.on('click', this.hideModal.bind(this))
    $modalBackdrop.on('click', this.hideModal.bind(this))
  }

  // Set the APIURL to the signin links
  initLinks() {
    var $signin = this.$el.find('.my-gfw-sign-in');
    $signin.forEach(function(v) {
      let link = `${utils.getAPIHost(true) + '/' + $gfwdom(v).attr('href')}`;

      $gfwdom(v).attr('href', link);
    });
  }

  hideModal(e) {
    e && event.stopPropagation() && event.preventDefault();
    this.$el.removeClass('is-active');
    this.$el.html('');
  }

}

export default LoginModal;
