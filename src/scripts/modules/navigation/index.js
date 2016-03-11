'use strict';

import $gfwdom from '../../facade';
import utils from '../../utils';

/**
 * Header
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
    console.log('render navigation');
    // this.el.innerHTML = headerTpl + headerIconsTpl;

    // this.cache();

    // this.setParams();

    // this.initHighlightCurrent();
    // this.initListeners();
    // this.initTranslate();
    // this.initLinksUrls();
    // this.initMyGFW();

    // return this;
  }

}

export default Navigation;
