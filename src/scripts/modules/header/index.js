'use strict';

var headerTpl = require('./header.tpl');
var headerIconsTpl = require('./header-icons.tpl');
var $gfwdom = require('../../facade');
var utils = require('../../utils');
var LoginButton = require('../my-gfw/login-button');

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

    this.cache();

    this.setParams();

    this.initHighlightCurrent();
    this.initListeners();
    this.initTranslate();
    this.initLinksUrls();
    this.initMyGFW();

    return this;
  };

  this.cache = function() {
    // Window width and height bulletproof
    this.$w = window;
    this.$d = document;
    this.$e = this.$d.documentElement;
    this.$g = this.$d.getElementsByTagName('body')[0];
    this.windowX = this.$w.innerWidth || this.$e.clientWidth || this.$g.clientWidth;
    this.windowY = this.$w.innerHeight|| this.$e.clientHeight|| this.$g.clientHeight;

    // Script
    this.$script = $gfwdom('#loader-gfw');

    // Html-body
    this.$htmlbody = $gfwdom('html,body');

    // Header
    this.$header = $gfwdom('#headerGfw');
    this.$headerSubmenu = this.$header.find('.m-header-submenu');
    this.$headerSubmenuBtns = this.$header.find('.m-header-submenu-btn');
    this.$headerSubmenuApp = this.$header.find('#submenuApps');

    // Links
    this.$links = this.$header.find('a');
    this.$linksSubmenu = this.$header.find('a');

  };

  this.setParams = function() {
    this.params = {
      current: this.$script.data('current'),
      mobile: (this.windowX < utils.MOBILE)
    }
  },

  // Set current depending on the script data current
  this.initHighlightCurrent = function() {
    this.$header.find(this.params.current).addClass('-current');
  };

  // Menu Toggles mobile
  this.initListeners = function() {
    // Resize
    window.addEventListener('resize', function() {
      this.windowX = this.$w.innerWidth || this.$e.clientWidth || this.$g.clientWidth;
      this.windowY = this.$w.innerHeight|| this.$e.clientHeight|| this.$g.clientHeight;

      this.setParams();
    }.bind(this), true);

    // Mobile menus
    this.$header.on('click', '.m-header-submenu-btn', this.showMenu.bind(this));
    this.$header.on('click', '.m-header-backdrop', this.hideMenus.bind(this));
  };

  this.showMenu = function(e) {
    if (this.params.mobile) {
      e && e.preventDefault();

      if (!$gfwdom(e.currentTarget).hasClass('-active')) {
        // Hide all the opened menus
        this.hideMenus();
        // Prevent mobile scroll
        this.$htmlbody.toggleClass('-no-scroll');
        // Active menu icon
        $gfwdom(e.currentTarget).toggleClass('-active')
        $gfwdom(e.currentTarget).find('svg').toggleClass('-inactive');
        // Active menu
        $gfwdom($gfwdom(e.currentTarget).data('submenu')).toggleClass('-active');
      } else {
        this.hideMenus();
      }
    } else {
      if ($gfwdom(e.currentTarget).data('stopnavigation')) {
        e && e.preventDefault();
      }
    }
  };

  this.hideMenus = function(e) {
    // Allow mobile scroll
    this.$htmlbody.removeClass('-no-scroll');
    this.$headerSubmenu.removeClass('-active');
    this.$headerSubmenuBtns.forEach(function(v){
      if ($gfwdom(v).hasClass('-active')) {
        $gfwdom(v).removeClass('-active')
        $gfwdom(v).find('svg').toggleClass('-inactive');
      }
    });

    console.log()
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

  // We need to make a difference between local, staging and PRO environment urls.
  // Also we need to have a default value for the external applications
  this.initLinksUrls = function() {
    this.params.targets = !utils.isDefaultHost();
    this.params.hostname = utils.getHost();

    this.$links.forEach(function(v){
      var href = $gfwdom(v).attr('href');
      if (href.charAt(0) == '/') {
        $gfwdom(v).attr('href', this.params.hostname + href);
      }
    }.bind(this));

    this.$linksSubmenu.forEach(function(v){
      var external = $gfwdom(v).hasClass('external-link');
      if (this.params.targets) {
        (!!external) ? $gfwdom(v).removeAttr('target') : $gfwdom(v).attr('target','_blank');
      }
    }.bind(this));

  };

  this.initMyGFW = function() {
    if (!!utils.isDefaultHost()) {
      var loginButton = new LoginButton();
      loginButton.init();
    } else {
      $gfwdom('#my-gfw-container').css({ display: 'none'});
    }
  }


  this.init();

  return this;

};
