'use strict';

import $gfwdom from '../../facade';
import utils from '../../utils';
import jstpl from 'micro-template';
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
    var menu = navigationMenus[location.hostname] || navigationMenus['default'];
    // TO-DO: this is a little weird. I need to render the script template and then re-render it with the json
    // That happens because the microtemplate plugin looks for an id, it would be great if we can pass directly the template...
    this.$el.html(navigationTpl);
    this.$el.html(jstpl.template('mobileMenuTPL', { menu: menu}));
  }

}

export default Navigation;