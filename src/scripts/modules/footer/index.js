'use strict';

import { lory } from 'lory.js';
import footerTpl from './footer.tpl';
import footerIconsTpl from './footer-icons.tpl';

const sliderPause = 5000;
let numberScroll = 1;
if (window.innerWidth > 850) {
  numberScroll = 4;
}
const sliderOptions = {
  enableMouseEvents: true,
  infinite: 4,
  slidesToScroll: numberScroll,
};

const links = [
  {
    site: 'gfw-global',
    options: [
      {
        title: 'gfw',
        url: '/',
      },
      {
        title: 'countries',
        url: '/countries',
      },
      {
        title: 'blog',
        url: 'http://blog.globalforestwatch.org/',
      },
      {
        title: 'about',
        url: '/about',
      },
    ],
  },
  {
    site: 'gfw-watcher',
    options: [
      {
        title: 'map',
        url: 'http://www.globalforestwatch.org/map',
      },
      {
        title: 'countries',
        url: 'http://www.globalforestwatch.org/countries',
      },
      {
        title: 'blog',
        url: 'http://blog.globalforestwatch.org/',
      },
      {
        title: 'about',
        url: 'http://www.globalforestwatch.org/about',
      },
    ],
  },

  {
    site: 'gfw-mygfw',
    options: [
      {
        title: 'my subscriptions',
        url: '/my_gfw/subscriptions',
      },
      {
        title: 'my stories',
        url: '/my_gfw/stories',
      },
      {
        title: 'my profile',
        url: '/my_gfw',
      },
    ],
  },

  {
    site: 'gfw-fires',
    options: [
      {
        title: 'GFW',
        url: 'http://www.globalforestwatch.org/',
      },
      {
        title: 'Blog',
        url: 'http://blog.globalforestwatch.org/',
      },
      {
        title: 'How to portal',
        url: 'http://www.globalforestwatch.org/howto/',
      },
    ],
  },

  {
    site: 'gfw-commodities',
    options: [
      {
        title: 'GFW',
        url: 'http://www.globalforestwatch.org/',
      },
      {
        title: 'Blog',
        url: 'http://blog.globalforestwatch.org/',
      },
      {
        title: 'How to portal',
        url: 'http://www.globalforestwatch.org/howto/',
      },
    ],
  },

  {
    site: 'gfw-water',
    options: [
      {
        title: 'GFW',
        url: 'http://www.globalforestwatch.org/',
      },
      {
        title: 'Blog',
        url: 'http://blog.globalforestwatch.org/',
      },
      {
        title: 'How to portal',
        url: 'http://www.globalforestwatch.org/howto/',
      },
    ],
  },

  {
    site: 'gfw-climate',
    options: [
      {
        title: 'GFW',
        url: 'http://www.globalforestwatch.org/',
      },
      {
        title: 'Blog',
        url: 'http://blog.globalforestwatch.org/',
      },
      {
        title: 'How to portal',
        url: 'http://www.globalforestwatch.org/howto/',
      },
    ],
  },
];

/**
 * Footer
 * @param  {window} root
 * @return {Class}
 */
class Footer {

  constructor() {
    this.el = document.getElementById('footerGfw');
    if (!this.el) {
      throw new Error('element #footerGfw doesn\'t exist');
    }

    this.handlers = {
      cancelTimer: this.cancelTimer.bind(this),
      initTimer: this.initTimer.bind(this)
    };

    this.render();
  }

  render() {
    this.site = window.liveSettings.site;
    this.links = this.getSiteLinks();
    this.el.innerHTML = footerTpl({ links: this.links }) + footerIconsTpl();
    this.sliderContainer = document.getElementById('my-gfw-slider');
    this.slidesContainer = document.querySelector('.frame');
    this.initSlider();

    return this;
  }

  getSiteLinks() {
    const siteLinks = links.filter((value) => {
      return value.site === this.site;
    });

    return siteLinks[0];
  }

  initSlider() {
    this.slider = lory(this.sliderContainer, sliderOptions);

    this.sliderContainer.addEventListener('before.lory.slide', this.handlers.cancelTimer);
    this.sliderContainer.addEventListener('after.lory.slide', this.handlers.initTimer);
    this.sliderContainer.addEventListener('mouseover', this.handlers.cancelTimer);
    this.sliderContainer.addEventListener('mouseout', this.handlers.initTimer);

    this.initTimer();
  }

  initTimer() {
    this.cancelTimer();
    if (!this.sliderTimer) {
      this.sliderTimer = setInterval(this.slider.next.bind(this.slider), sliderPause);
    }
  }

  cancelTimer() {
    if (this.sliderTimer) {
      clearInterval(this.sliderTimer);
      this.sliderTimer = null;
    }
  }
}

export default Footer;
