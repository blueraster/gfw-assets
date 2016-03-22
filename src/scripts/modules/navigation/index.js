'use strict';

import $gfwdom from '../../facade';
import utils from '../../utils';
import navigationTpl from './navigation.tpl';

import globaljson from './global.json';
import climatejson from './climate.json';
import howtojson from './howto.json';

const navigationMenus = {
  'default': globaljson,
  'localhost': globaljson,
  'climate.globalforestwatch.org': climatejson,
  'howto.globalforestwatch.org': howtojson
};


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
    this.render();
  }

  render() {
    const menu = navigationMenus[location.hostname] || navigationMenus['default'];
    this.$el.html(navigationTpl({ menu: menu}));
  }

}

export default Navigation;
