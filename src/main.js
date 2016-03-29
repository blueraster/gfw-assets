'use strict';

/**
 * Main file:
 * In this we are going to initialize all modules
 * @param  {window} root
 */

import Header from './scripts/modules/header';
import Footer from './scripts/modules/footer';
import Feedback from './scripts/modules/feedback';

// Add styles
import './styles/fonts.css';
import './styles/global.scss';

// At begining add google fonts asynchronously
setTimeout(() => {
  // let linkTag = document.createElement('link');
  // linkTag.rel = 'stylesheet';
  // linkTag.media = 'all';
  // linkTag.href = 'fonts.css';
  // linkTag.href = 'https://fonts.googleapis.com/css?family=Fira+Sans:300,400,500';
  // document.head.appendChild(linkTag);
}, 0);

// Adding header
new Header();

// Adding footer
new Footer();

// Adding feedback
new Feedback();
