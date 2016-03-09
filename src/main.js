/**
 * Main file:
 * In this we are going to initialize all modules
 * @param  {window} root
 */
(function() {

  'use strict';

  // At begining add google fonts
  setTimeout(function() {  
    var linkTag = document.createElement('link');
    linkTag.rel = 'stylesheet';
    linkTag.href = 'https://fonts.googleapis.com/css?family=Fira+Sans:300,400,500';
    document.head.appendChild(linkTag);
  },0);

  // Add styles
  require('./styles/global.scss');

  // Adding header
  var Header = require('./scripts/modules/header');
  new Header();

  // Adding footer
  var Footer = require('./scripts/modules/footer');
  new Footer();

  // Adding feedback
  var Feedback = require('./scripts/modules/feedback');
  new Feedback();


}).call(this);