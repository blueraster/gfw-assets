/**
 * Utils
 * @param  {window} root
 * @return {Object}
 */
const menuOptions = {
  getOptions() {
    const logoLink = document.getElementById('link-logo-menu');
    const path = window.location.pathname;
    const navOptions = window.liveSettings.menuOptions;
    let siteStyles;
    let menuOptionsNav = '';
    for (let i = 0; i < navOptions.options.length; i += 1) {
      if (navOptions.options[i].title === 'logo') {
        logoLink.setAttribute('href', navOptions.options[i].url);
      } else {
        menuOptionsNav += `
          <li class="${path === navOptions.options[i].url || path === navOptions.options[i].url + '/' ? siteStyles : ''}" data-menu="${navOptions.options[i].url}">
            <a class="option-menu" href="${navOptions.options[i].url}"> ${navOptions.options[i].title} </a>
          </li>`;
      }
    }
    return menuOptionsNav;
  },
};

export default menuOptions;
