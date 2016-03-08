/**
 * Main file:
 * In this we are going to initialize all modules
 * @param  {window} root
 */
(function() {

  'use strict';

  // At begining add google fonts
  var linkTag = document.createElement('link');
  linkTag.rel = 'stylesheet';
  linkTag.href = 'https://fonts.googleapis.com/css?family=Fira+Sans:300,400,500';
  document.head.appendChild(linkTag);

  // Add styles
  require('./styles/global.scss');

  // TODO: init header

  // TODO: init footer
  var Footer = require('./scripts/modules/footer');
  new Footer();

  // TODO: init feedback

}).call(this);
