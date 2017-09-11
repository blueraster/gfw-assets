const gfwOptions = [
  {
    site: 'gfw-global',
    options: [
      {
        title: 'map',
        url: '/map',
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
    options: [],
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
        title: 'gfw fires',
        url: '/',
      },
      {
        title: 'map',
        url: '/map',
      },
      {
        title: 'learn more',
        url: '/about',
      },
      {
        title: 'share stories',
        url: '/story',
      },
    ],
  },

  {
    site: 'gfw-commodities',
    options: [
      {
        title: 'GFW Commodities',
        url: '/',
      },
      {
        title: 'map',
        url: '/#v=map',
      },
      {
        title: 'Methods',
        url: '/#v=methods',
      },
      {
        title: 'Data Submission',
        url: '/#v=submission',
      },
      {
        title: 'Learn More',
        url: '/#v=about',
      },
    ],
  },

  {
    site: 'gfw-water',
    options: [
      {
        title: 'Map',
        url: '/map',
      },
      {
        title: 'Partners',
        url: '/partners',
      },
      {
        title: 'Learn More',
        url: '/about',
      },
    ],
  },

  {
    site: 'gfw-climate',
    options: [
      {
        title: 'Map',
        url: '/map',
      },
      {
        title: 'Country Data',
        url: '/countries',
      },
      {
        title: 'Country Comparisons',
        url: '/compare-countries',
      },
      {
        title: 'Data download',
        url: '/data-download',
      },
      {
        title: 'Insights',
        url: '/insights',
      },
      {
        title: 'About',
        url: '/about',
      },
    ],
  },
];

/**
 * Utils
 * @param  {window} root
 * @return {Object}
 */
const menuOptions = {
  getOptions(value) {
    const path = window.location.pathname;
    const site = window.liveSettings.site;
    let siteStyles;

    switch (site) {
      case 'gfw-global':
        siteStyles = '-selected -global';
        break;
      case 'gfw-fires':
        siteStyles = '-selected -fires';
        break;
      case 'gfw-water':
        siteStyles = '-selected -water';
        break;
      case 'gfw-climate':
        siteStyles = '-selected -climate';
        break;
      case 'gfw-commodities':
        siteStyles = '-selected -commodities';
        break;
      default:
        siteStyles = '';
    }

    let position = 0;
    let menuOptionsNav = '';
    for (let i = 0; i < gfwOptions.length; i += 1) {
      if (gfwOptions[i].site === value) {
        position = i;
        i = gfwOptions.length;
      }
    }
    for (let i = 0; i < gfwOptions[position].options.length; i += 1) {
      menuOptionsNav += `
        <li class="${path === gfwOptions[position].options[i].url || path === gfwOptions[position].options[i].url + '/' ? siteStyles : ''}" data-menu="${gfwOptions[position].options[i].url}">
          <a href="${gfwOptions[position].options[i].url}"> ${gfwOptions[position].options[i].title} </a>
        </li>`;
    }
    return menuOptionsNav;
  },
};

export default menuOptions;
