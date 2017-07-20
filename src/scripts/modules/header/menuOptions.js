'use strict';

const gfwOptions = [
  {
    site: 'gfw-global',
    options: [
      {
        title: 'map',
        url: '/map'
      },
      {
        title: 'countries',
        url: '/countries'
      },
      {
        title: 'blog',
        url: '/blog'
      },
      {
        title: 'about',
        url: '/about'
      },
    ]
  },

  {
    site: 'gfw-fires',
    options: [
      {
        title: 'gfw fires',
        url: '/'
      },
      {
        title: 'map',
        url: '/map'
      },
      {
        title: 'learn more',
        url: '/about'
      },
      {
        title: 'share stories',
        url: '/story'
      },
    ]
  },

  {
    site: 'gfw-commodities',
    options: [
      {
        title: 'GFW Commodities',
        url: '/'
      },
      {
        title: 'map',
        url: '/#v=map'
      },
      {
        title: 'Methods',
        url: '/#v=methods'
      },
      {
        title: 'Data Submission',
        url: '/#v=submission'
      },
      {
        title: 'Learn More',
        url: '/#v=about'
      },
    ]
  },

  {
    site: 'gfw-water',
    options: [
      {
        title: 'Map',
        url: '/map'
      },
      {
        title: 'Partners',
        url: '/partners'
      },
      {
        title: 'Learn More',
        url: '/about'
      }
    ]
  },

  {
    site: 'gfw-climate',
    options: [
      {
        title: 'Map',
        url: '/map'
      },
      {
        title: 'Country Data',
        url: '/countries'
      },
      {
        title: 'Country Comparisons',
        url: '/compare-countries'
      },
      {
        title: 'Insights',
        url: '/insights'
      },
      {
        title: 'About',
        url: '/about'
      },
    ]
  }
];

/**
 * Utils
 * @param  {window} root
 * @return {Object}
 */
const menuOptions = {

  // GETTERS
  getOptions(value) {
    var position = 0;
    var menuOptions = '';
    for (var i = 0; i < gfwOptions.length; i++) {
      if (gfwOptions[i].site === value) {
        var position = i;
        i = gfwOptions.length; //exit force
      }
    }
    for (var i = 0; i < gfwOptions[position].options.length; i++) {
        menuOptions += '<li><a href="'+gfwOptions[position].options[i].url+'">'+gfwOptions[position].options[i].title+'</a></li>'
    }
    return menuOptions;
  },


};

export default menuOptions;
