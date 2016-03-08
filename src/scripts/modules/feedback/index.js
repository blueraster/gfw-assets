'use strict';

var feedbackTpl = require('raw!./feedback.tpl');

/**
 * Feedback
 * @param  {window} root
 * @return {Class}
 */
module.exports = function() {

  this.init = function() {
    // TODO: Get template and render it
    this.el = document.createElement('div');
    this.el.id = 'feedbackGfw';
    document.body.appendChild(this.el);
    this.render();
  };

  this.render = function() {
    this.el.innerHTML = feedbackTpl;
    return this;
  };

  this.init();

  return this;

};
