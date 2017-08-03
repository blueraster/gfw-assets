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
      {
        title: 'receive forest loss alerts',
        url: '/my_gfw/subscriptions/new',
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
    let path = window.location.pathname;
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
        <li class="${path.includes(gfwOptions[position].options[i].url) ? '-selected' : ''}" data-menu="${gfwOptions[position].options[i].url}">
          <a href="${gfwOptions[position].options[i].url}"> ${gfwOptions[position].options[i].title} </a>
        </li>`;
    }
    return menuOptionsNav;
  },
};

export default menuOptions;
