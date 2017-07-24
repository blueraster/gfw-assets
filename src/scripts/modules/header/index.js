'use strict';
import $gfwdom from '../../facade';
import utils from '../../utils';
import headerTpl from './header.tpl';
import menuOptions from './menuOptions';
import headerIconsTpl from './header-icons.tpl';
import LoginButton from '../my-gfw/login-button';
import Navigation from '../navigation';

/**
 * Header
 * @param  {window} root
 * @return {Class}
 */

class Header {

  constructor() {
    this.el = document.getElementById('headerGfw');
    if (!this.el) {
      throw new Error('element #headerGfw doesn\'t exist');
    }
    this.render();
  }

  render() {
    this.el.innerHTML = headerTpl() + headerIconsTpl();
    this.cache();
    this.setLogos();
    this.keyboardOpenMenu();
    this.setMenuOptions();
    this.setParams();
    this.initHighlightCurrent();
    this.initListeners();
    this.initTranslate();
    this.initMyGFW();
    this.initNavigation();
    return this;
  }

  /**
   * Cache all the elements that we will use after
   */
  cache() {
    this.keyboardPulse = false;
    this.$document =  $gfwdom(document);
    this.site = window.liveSettings.site;

    // Script
    this.$script = $gfwdom('#loader-gfw');

    // Html-body
    this.$htmlbody = $gfwdom('html,body');

    // Header
    this.$header = $gfwdom('#headerGfw');
    this.navOptions = this.$header.find('.nav-options');
    this.logoMenu = this.$header.find('.logo-menu');
    this.navSections = this.$header.find('.nav-sections');
    this.subMenu = this.$header.find('.m-header-sub-menu-dashboard');

    //Dashboard Menu
    this.searchContainer = document.getElementById('search-container');
    this.searchInput = document.getElementById('search-input'); //autofocus
    this.openMenuDashboard = this.$header.find('.open-menu-button-dashboard');
    this.menuDashboard = this.$header.find('#dashboard-sub-menu');
    this.boxesContainer = this.$header.find('.boxes-container');
    this.currentBox = this.boxesContainer.find('.box.'+this.site);

    //Login Menu
    this.menuLogin = this.$header.find('.m-header-sub-menu-login');

    //Language Menu
    this.triangleLanguage = this.$header.find('.lang-triangle');
  };

  /**
   * Set logos on header and options gallery
   */
  setLogos() {
    this.logoMenu.addClass(this.site);
    this.currentBox.remove();
  };

  /**
   * Set menu's options
   */
  setMenuOptions() {
    this.navSections.html(menuOptions.getOptions(this.site));
  };

  /**
   * Function for capturing keyboard and open the dashboard
   */
  keyboardOpenMenu() {
    document.onkeypress = function(evt) {
       evt = evt || window.event;
       var charCode = evt.which || evt.keyCode;
       var charStr = String.fromCharCode(charCode);
       if (/[a-z0-9]/i.test(charStr)) {
         this.showMenuKeyBoard();
       }
    }.bind(this);
  };

  /**
   * Set Params
   */
  setParams() {
    var $parent = document.querySelector('#loader-gfw');
    this.params = {
      current: $parent.getAttribute('data-current')
    }
  }

  /**
   * Set current depending on the script data current
   */
  initHighlightCurrent() {
    if (this.params && this.params.current) {
      this.$header.find(this.params.current).addClass('-current');
    }
  }

  /**
   * Main functions for menu
   */
  utilsMenus() {
    // Key bindings
    this.$document.on('keyup.apps', e => {
      if (e.keyCode === 27) {
        this.hideMenus();
        this.hideLanguageMenu();
      }
    });

    // Prevent mobile scroll
    if (utils.getWindowWidth() < 850) {
      this.resizeMenu();
      this.$htmlbody.toggleClass('-no-scroll');
    }
  }

  initListeners() {
    // Menus
    this.$htmlbody.on('click', '.m-header-nav-container, .m-header-nav-container *', this.closeBack.bind(this));
    this.$header.on('click', '.-js-open-menu', this.showMenu.bind(this));
    this.$header.on('click', '.-js-close-back-menus', this.hideMenus.bind(this));
    this.$header.on('click', '.open-menu-button-language', this.showLanguageMenu.bind(this));
    this.$header.on('click', '.txlive-langselector-current', this.showLanguageMenu.bind(this));
  }

  changeTriangleLanguage(value) {
    if(value === '#language-sub-menu') {
      if (this.triangleLanguage.hasClass('-open')) {
        this.triangleLanguage.removeClass('-open');
      } else {
        this.triangleLanguage.addClass('-open');
      }
    } else {
      if (this.triangleLanguage.hasClass('-open')) {
        this.triangleLanguage.removeClass('-open');
      }
    }
  }

  closeBack(e) {
    e && e.preventDefault();
    let currentTarget = e.currentTarget;
    if(!$gfwdom(currentTarget).hasClass('open-menu-button') && !$gfwdom(currentTarget).hasClass('txlive-langselector-toggle')) {
      this.hideMenus();
    }
  }

  showMenuKeyBoard() {
    if (!this.keyboardPulse) {
      var $languageMenu = this.$header.find('.txlive-langselector-list');
      if ($languageMenu.hasClass('txlive-langselector-list-opened')) {
        $languageMenu.removeClass('txlive-langselector-list-opened');
      }
      this.hideMenus();
      if (utils.getWindowWidth() < 850) {
        this.resizeMenu();
        this.$htmlbody.toggleClass('-no-scroll');
      }
      this.openMenuDashboard.addClass('-active');
      this.menuDashboard.addClass('-active');
      this.searchInput.focus();
      this.utilsMenus();
      this.keyboardPulse = true;
    }
  }

  showMenu(e) {
    e && e.preventDefault();
    let currentTarget = e.currentTarget;
    var dataSubMenu = currentTarget.getAttribute('data-submenu');
    if (!$gfwdom(currentTarget).hasClass('-active')) {
      // Hide all the opened menus
      this.hideMenus();
      // Active menu
      $gfwdom(currentTarget).toggleClass('-active')
      this.changeTriangleLanguage(dataSubMenu);
      // Hidden language Menu
      if(dataSubMenu != '#language-sub-menu') {
        var $languageMenu = this.$header.find('.txlive-langselector-list');
        if ($languageMenu.hasClass('txlive-langselector-list-opened')) {
          $languageMenu.removeClass('txlive-langselector-list-opened');
        }
      }
      var $current = $gfwdom(currentTarget.getAttribute('data-submenu'));
      $current.toggleClass('-active');
      this.navOptions.toggleClass('-show-triangle');

      if (this.menuDashboard.hasClass('-active')) {
        this.searchInput.focus();
      }
      this.utilsMenus();
    } else {
      this.navOptions.toggleClass('-show-triangle');
      this.changeTriangleLanguage(dataSubMenu);
      this.hideMenus();
    }
  }

  hideMenus(e) {
    // // Allow mobile scroll
    if (this.menuDashboard.hasClass('-active')) {
      this.searchContainer.reset();
    }

    this.$htmlbody.removeClass('-no-scroll');

    this.$header.find('.sub-menu').forEach(function(v){
      if ($gfwdom(v).hasClass('-active')) {
        $gfwdom(v).removeClass('-active')
      }
    });

    this.$header.find('.open-menu-button').forEach(function(v){
      if ($gfwdom(v).hasClass('-active')) {
        $gfwdom(v).removeClass('-active')
        // $gfwdom(v).find('.-svg').toggleClass('-inactive');
      }
    });

    // Key bindings
    this.$document.off('keyup.apps');
    // Click bindings
    this.$document.off('click.apps');

    this.keyboardPulse = false;
    this.navOptions.toggleClass('-show-triangle');
  }

  showLanguageMenu() {
    var $languageMenu = this.$header.find('.txlive-langselector-list');
    if ($languageMenu.hasClass('txlive-langselector-list-opened')) {
      $languageMenu.removeClass('txlive-langselector-list-opened');
    } else {
      $languageMenu.addClass('txlive-langselector-list-opened');
    }
    this.$header.on('click', '.txlive-langselector-list > li', this.hideLanguageMenu.bind(this));
  }

  hideLanguageMenu() {
    var $opened = this.$header.find('.txlive-langselector-list-opened');
    var $languageMenu = this.$header.find('.txlive-langselector-list');
    if ($languageMenu.hasClass('txlive-langselector-list-opened')) {
      $languageMenu.removeClass('txlive-langselector-list-opened');
    }
    if (this.triangleLanguage.hasClass('-open')) {
      this.changeTriangleLanguage('#language-sub-menu');
    }
  }

  toggleTransifex(e) {

    var $btnTransifex = this.$header.find('#btnTransifexTranslateMobileElement');
    var $transifexList = this.$header.find('#transifexTranslateMobileElement');

    if($btnTransifex.hasClass('-active')) {
      $btnTransifex.removeClass('-active');
      $transifexList.removeClass('-active');
    } else {
      $btnTransifex.addClass('-active');
      $transifexList.addClass('-active');
    }
  }

  sendAnalyticsEvent(e) {
    // TO-DO: Be careful with the links that are links on desktop
    // but buttons on mobile devices
    // What can we do?
    // ANSWER: I've set a class 'link-analytics' to differenciate them
    let $el = $gfwdom(e.currentTarget);
    let url = $el.attr('href');
    let target = $el.attr('target');
    let regex = /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;

    if(!!target) {
      if (window.ga !== undefined) {
        window.ga('send', 'event', 'Menu', 'Click', url);
      }
    } else {
      // Test if analytics exists and if it's an url
      if (window.ga !== undefined && regex.test(url)) {
        e && e.preventDefault();

        // https://developers.google.com/analytics/devguides/collection/analyticsjs/sending-hits?hl=es#handling_timeouts
        let callbackTriggered = false;
        setTimeout(function(){
          if (!callbackTriggered) {
            document.location = url
          }
        }, 1000);

        window.ga('send', 'event', 'Menu', 'Click', url, {
          'hitCallback': function(){
            callbackTriggered = true;
            document.location = url;
          }
        });
      } else {
        document.location = url;
      }
    }
  }

  /**
   * Google translate
   */
  initTranslate() {
    if (!!window.liveSettings) {
      this.initTransifex();
    } else {
      this.initGoogleTranslate();
    }
  };

  initGoogleTranslate() {
    setTimeout(() => {
      window['googleTranslateElementInitGFW'] = () => {
        new google.translate.TranslateElement({
          pageLanguage: '',
          includedLanguages: 'ar,es,en,fr,id,pt,ru,zh-CN,de,uk,ro,tr,it,hi,km',
          layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false
        },'googleTranslate');
      }

      const translateScript = document.createElement('script');
      translateScript.type= 'text/javascript';
      translateScript.src = 'http://translate.google.com/translate_a/element.js?cb=googleTranslateElementInitGFW';
      document.head.appendChild(translateScript);
    }, 0);
  }

  /**
   * Transifex
   */
  initTransifex() {
    window.liveSettings.detectlang = function() {
      var getParam = function (name){
        name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
        var regexS = "[\\?&]"+name+"=([^&#]*)";
        var regex = new RegExp( regexS );
        var results = regex.exec( window.location.href );
        if( results == null )
          return null;
        else
          return results[1];
      }

      var getParamFromLocalStorage = function (name){
        if (!!localStorage.getItem('txlive:selectedlang')) {
          return JSON.parse(localStorage.getItem('txlive:selectedlang'))
        }
        return null;
      }

      // If param exists, save it the localStorage
      if (!!getParam('lang')) {
        localStorage.setItem('txlive:selectedlang', getParam('lang'))
      }

      // Then, use the param or the localStorage attribute
      var lang = getParam('lang') || getParamFromLocalStorage('txlive:selectedlang');
      return lang;
    };

    window.liveSettings.picker = (utils.isSmallScreen()) ? '#transifexTranslateMobileElement' : '#transifexTranslateElement';

    var blacklist = [
      'climate.globalforestwatch.org',
      'water.globalforestwatch.org',
      // 'commodities.globalforestwatch.org'
    ];

    // Check if the location.hostname is in the blacklist
    // If true hide transifex element, but keep it working to store the string of the page
    // Then init Google translate plugin
    if (blacklist.indexOf(location.hostname) != -1){
      var $transifexEl = $gfwdom(window.liveSettings.picker);
      $transifexEl.css({
        display: 'none'
      });
      this.initGoogleTranslate();
    }

    setTimeout(() => {
      const translateScript = document.createElement('script');
      translateScript.type= 'text/javascript';
      translateScript.src = '//cdn.transifex.com/live.js';
      document.head.appendChild(translateScript);
    }, 0);
  };



  /**
   * We need to make a difference between local, staging and PRO environment urls.
   * Also we need to have a default value for the external applications
   */
  initLinksUrls() {
    this.params.targets = !utils.isDefaultHost();
    this.params.hostname = utils.getHost();

    this.$links.forEach(function(v) {
      const href = $gfwdom(v).attr('href');
      if (href.charAt(0) == '/') {
        $gfwdom(v).attr('href', this.params.hostname + href);
      }
    }.bind(this));

    this.$linksSubmenu.forEach(v => {
      const external = $gfwdom(v).hasClass('external-link');
      if (this.params.targets) {
        (!!external) ? $gfwdom(v).removeAttr('target') : $gfwdom(v).attr('target','_blank');
      }
    });
  }
  /**
   * Init My GFW
   */
  initMyGFW() {
    if (utils.isDefaultHost()) {
      const loginButton = new LoginButton();
      loginButton.init();
    } else {
      $gfwdom('#my-gfw-container').css({ display: 'none'});
    }
  }

  resizeMenu() {
    if (utils.getWindowWidth() < 700) {
      this.$header.find('.m-header-submenu').forEach(function(v){
        $gfwdom(v).css({
          height: utils.getWindowHeigth() - 50 + 'px'
        });
      })
    } else {
      this.$header.find('.m-header-submenu').forEach(function(v){
        $gfwdom(v).css({ height: 'auto' });
      });
    }

    if (utils.getWindowWidth() < 850) {
      this.$headerSubmenuMenuMobile.css({
        height: utils.getWindowHeigth() - 50 + 'px'
      });
    }

  }

  initNavigation() {
    new Navigation();
  }
}

export default Header;
