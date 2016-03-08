'use strict';

var footerTpl = require('raw!./templates/footer.html');

/**
 * Footer
 * @param  {window} root
 * @return {Class}
 */
(function(root) {

  root.GFW.Footer = function() {

    init: function() {
      // NOTE: Don't use jQuery please
      // TODO: Get template and render it
      this.el = document.getElementById('footerGfw');
      this.render();
      // TODO: Init slider
    },

    render: function() {
      this.el.innerHtml = footerTpl;
      return this;
    },

    initSlider: function() {}

  };

  return root.GFW.Footer;

}).call(this);
