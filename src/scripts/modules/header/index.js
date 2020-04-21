'use strict';

import $gfwdom from '../../facade';
import utils from '../../utils';

import headerTpl from './header.tpl';
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

    this.setParams();

    this.initHighlightCurrent();
    this.initListeners();

    this.initTranslate();

    this.initLinksUrls();
    this.initMyGFW();
    this.initNavigation();

    return this;
  }

  /**
   * Cache all the elements that we will use after
   */
  cache() {
    this.$document =  $gfwdom(document);
    // Script
    this.$script = $gfwdom('#loader-gfw');

    // Html-body
    this.$htmlbody = $gfwdom('html,body');

    // Header
    this.$header = $gfwdom('#headerGfw');
    this.$headerSubmenu = this.$header.find('.m-header-submenu');
    this.$headerSubmenuBtns = this.$header.find('.m-header-submenu-btn');
    this.$headerSubmenuMenuMobile = this.$header.find('#submenuMenuMobile');
    this.$headerSubmenuApp = this.$header.find('#submenuApps');
    this.$headerSubmenuMore = this.$header.find('#submenuMore');
    this.$headerSubmenuLogin = this.$header.find('#submenuLogin');

    // Links
    this.$links = this.$header.find('a');
    this.$linksSubmenu = this.$header.find('a');

    // Search
    this.$headerSearchBox = this.$header.find('#headerSearchBox');
    this.$headerSearch = this.$header.find('.m-search');
    this.$headerSearchInput = this.$header.find('#search-input');
  };

  /**
   * Set Params
   */
  setParams() {
    var $parent = document.querySelector('#loader-gfw');
    document.getElementById('btnSubmenuMore').href = `${document.location.origin}/more`;
    this.params = {
      current: $parent ? $parent.getAttribute('data-current') : undefined
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
   * Events
   * - showMenu(),
   * - hideMenus()
   * - toggleSearch()
   * - sendAnalyticsEvent()
   */
  initListeners() {
    // Resize
    $gfwdom(window).on('resize.assets', this.resizeMenu.bind(this))
    // Menus
    this.$header.on('click', '.m-header-submenu-btn', this.showMenu.bind(this));
    this.$header.on('click', '.m-header-backdrop', this.hideMenus.bind(this));
    this.$header.on('click', '.m-apps-close', this.hideMenus.bind(this));

    // Search
    this.$header.on('click', '.btn-search', this.toggleSearch.bind(this));

    this.$header.on('click', '#btnTransifexTranslateMobileElement', this.toggleTransifex.bind(this));

    // Be careful, this will break down the mobile menus toggle
    this.$header.on('click', '.link-analytics', this.sendAnalyticsEvent.bind(this));
  }

  showMenu(e) {
    let currentTarget = e.currentTarget;
    if (currentTarget.id === 'btnSubmenuMore') { return; }
    e && e.preventDefault();
    if (!$gfwdom(currentTarget).hasClass('-active')) {
      // Hide all the opened menus
      this.hideMenus();
      // Prevent mobile scroll
      if (utils.getWindowWidth() < 850) {
        this.resizeMenu();
        this.$htmlbody.toggleClass('-no-scroll');
      }

      // Active menu icon && currentTarget
      $gfwdom(currentTarget).toggleClass('-active')
      $gfwdom(currentTarget).find('.-svg').toggleClass('-inactive');

      // Active menu
      var $current = $gfwdom(currentTarget.getAttribute('data-submenu'));
      $current.toggleClass('-active');

      // Key bindings
      this.$document.on('keyup.apps', e => {
        if (e.keyCode === 27) {
          this.hideMenus();
        }
      });

      // Click bindings
      this.$document.on('click.apps', e => {
        if(!this.el.contains(e.target)) {
          this.hideMenus();
        }
      });

    } else {
      this.hideMenus();
    }

  }

  hideMenus(e) {
    // Allow mobile scroll
    this.$htmlbody.removeClass('-no-scroll');
    this.$headerSubmenu.removeClass('-active').css({ height: 'auto' });
    this.$headerSubmenuApp.removeClass('-active').css({ height: 'auto' });
    this.$headerSubmenuMore.removeClass('-active').css({ height: 'auto' });
    this.$headerSubmenuMenuMobile.removeClass('-active').css({ height: 'auto' });
    this.$header.find('#submenuLogin').removeClass('-active').css({ height: 'auto' });
    this.$header.find('.m-header-submenu-btn').forEach(function(v){
      if ($gfwdom(v).hasClass('-active')) {
        $gfwdom(v).removeClass('-active')
        $gfwdom(v).find('.-svg').toggleClass('-inactive');
      }
    });
    // Key bindings
    this.$document.off('keyup.apps');

    // Click bindings
    this.$document.off('click.apps');
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

  toggleSearch(e) {
    e && e.preventDefault();

    // Hide the menus if they are active
    this.hideMenus();

    // Toggle search div
    this.$headerSearch.toggleClass('-active');

    if(this.$headerSearch.hasClass('-active')) {
      this.$headerSearchBox.addClass('-active');
      // Key bindings
      this.$document.on('keyup.search', e => {
        if (e.keyCode === 27) {
          this.toggleSearch();
        }
      });
      // Focus input. As it has an animation we need to set a timeout
      setTimeout(function(){
        document.getElementById(this.$headerSearchInput[0].id).focus();
      }.bind(this),250)
    } else {
      this.$headerSearchBox.removeClass('-active');
      // Key unbindings
      this.$document.off('keyup.search');
    }
  }

  toggleTransifex() {
    const $btnTransifex = this.$header.find('#btnTransifexTranslateMobileElement');
    const $transifexList = this.$header.find('#transifexTranslateMobileElement');

    if ($btnTransifex.hasClass('-active')) {
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

        // Really?? google analytics...
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

  initNavigation() {
    new Navigation();
  }


}

export default Header;
