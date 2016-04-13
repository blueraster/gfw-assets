'use strict';

const smallBreakPoint = 850;
const gfwDomains = [
  'www.globalforestwatch.org',
  'localhost',
  'gfw-nav.herokuapp.com',
  'staging.globalforestwatch.org'
];
const apiUrls = {
  'www.globalforestwatch.org': 'api.globalforestwatch.org',
  'gfw-nav.herokuapp.com': 'http://staging.api-staging.globalforestwatch.org',
  'staging.globalforestwatch.org': 'http://staging.api-staging.globalforestwatch.org'
};
const defaultGfwDomain = gfwDomains[0];

/**
 * Utils
 * @param  {window} root
 * @return {Object}
 */
const utils = {

  // GETTERS
  getWindowWidth() {
    return window.innerWidth ||
      document.documentElement.clientWidth ||
      document.getElementsByTagName('body')[0].clientWidth;
  },

  getWindowHeigth() {
    return window.innerHeight ||
      document.documentElement.clientHeight ||
      document.getElementsByTagName('body')[0].clientHeight;
  },

  getCurrentLocation() {
    return window.location.hostname;
  },

  getDefaultDomain() {
    return defaultGfwDomain;
  },

  isLocalhost() {
    return this.getCurrentLocation() === 'localhost';
  },

  getHost() {
    let currentLocation = window.location.hostname;
    const isValidLocation = gfwDomains.indexOf(currentLocation) !== -1;
    // Checking if current location is contained in gfw domains array
    if (!isValidLocation) {
      currentLocation = defaultGfwDomain;
    }
    if (window.location.port !== '') {
      currentLocation = `${currentLocation}:${window.location.port}`;
    }
    return `http://${currentLocation}`;
  },

  getAPIHost() {
    if (window.gfw && window.gfw.config) {
      return window.gfw.config.GFW_API_HOST;
    }
    let apiLocation = window.location.hostname;
    const isApiLocation = apiUrls[apiLocation];
    if (!isApiLocation) {
      apiLocation = apiUrls[defaultGfwDomain];
    }
    // if (isApiLocation && window.location.port !== '') {
    //   apiLocation = `${apiLocation}:${window.location.port}`;
    // }
    return `http://${apiLocation}`;
  },

  isLoggedIn(options) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `${this.getAPIHost()}/user`, true);
    xhr.withCredentials = true;
    xhr.onreadystatechange = () => {
      const responseStatus = xhr.status;
      if (responseStatus !== 200) {
        options.failure();
      } else {
        if (!!xhr.responseText) {
          var response = JSON.parse(xhr.responseText);
          options.success(response);
        }
      }
    };
    xhr.send();
  },

  // STATES
  isSmallScreen() {
    return this.getWindowWidth() < smallBreakPoint;
  },

  isDefaultHost() {
    return gfwDomains.indexOf(window.location.hostname) !== -1;
  },

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  // Source: https://davidwalsh.name/function-debounce
  debounce(func, wait, immediate) {
  	let timeout;
  	return () => {
  		const context = this, args = arguments;
  		const later = () => {
  			timeout = null;
  			if (!immediate) func.apply(context, args);
  		};
  		const callNow = immediate && !timeout;
  		clearTimeout(timeout);
  		timeout = setTimeout(later, wait);
  		if (callNow) func.apply(context, args);
  	};
  }

};

export default utils;
