'use strict';

var headerTpl = require('raw!./header.tpl');
var headerIconsTpl = require('raw!./header-icons.tpl');

/**
 * Header
 * @param  {window} root
 * @return {Class}
 */
module.exports = function() {

  this.init = function() {
    this.el = document.getElementById('headerGfw');
    if (!this.el) {
      this.el = document.createElement('div');
    }
    this.render();
  };

  this.render = function() {
    this.el.innerHTML = headerTpl + headerIconsTpl;

    this.initTranslate();

    return this;
  };

  // Init google translate module
  this.initTranslate = function() {
    setTimeout(function() {  
      window['googleTranslateElementInitGFW'] = function (){
        new google.translate.TranslateElement({
          pageLanguage: '',
          includedLanguages: 'ar,es,en,fr,id,pt,ru,zh-CN,de,uk,ro,tr,it,hi,km',
          layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false
        },'googleTranslate');
      }

      var translateScript = document.createElement('script');
      translateScript.type= 'text/javascript';
      translateScript.src = 'http://translate.google.com/translate_a/element.js?cb=googleTranslateElementInitGFW';
      document.head.appendChild(translateScript);
    },0);
  };

  this.init();

  return this;

};
