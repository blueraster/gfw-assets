'use strict';

import $gfwdom from '../../facade';
import utils from '../../utils';
import jstpl from 'micro-template';
import navigationTpl from './navigation.tpl';

import globaljson from './global.json';
import climatejson from './climate.json';
import howtojson from './howto.json';

/**
 * Navigation
 * @param  {window} root
 * @return {Class}
 */
class Navigation {

  constructor() {
    this.$el = $gfwdom('#submenuMenuMobile');
    if (!this.$el) {
      throw new Error('element #submenuMenuMobile doesn\'t exist');
    }
    this.switchMenu();
  }

  switchMenu() {
    switch(location.hostname) {
      case 'localhost':
        this.menu = howtojson;
      break;

      case 'climate.globalforestwatch.org':
        this.menu = climatejson;
      break;

      case 'howto.globalforestwatch.org':
        this.menu = globaljson;
      break;

      default:
        this.menu = globaljson;
    }
    this.render();
  }


  render() {
    this.$el.html(navigationTpl);
    this.$el.html(jstpl.template('mobileMenuTPL', { menu: this.menu}));
  }

}

export default Navigation;