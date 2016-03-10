'use strict';

/**
 * Utils
 * @param  {window} root
 * @return {Object}
 */
module.exports = {
  
  // CONSTANTS
  SMALL_BREACKPOINT: 850,

  DEFAULT_URL: 'www.globalforestwatch.org',

  URLS: {
    'www.globalforestwatch.org': 'www.globalforestwatch.org',
    'localhost': 'localhost:5000',
    'gfw-nav.herokuapp.com': 'gfw-nav.herokuapp.com',
    'staging.globalforestwatch.org': 'staging.globalforestwatch.org'
  },

  API_URLS: {
    'localhost': 'localhost:8080',
    'www.globalforestwatch.org': 'api.globalforestwatch.org',
    'gfw-nav.herokuapp.com': 'http://staging.api-staging.globalforestwatch.org',
    'staging.globalforestwatch.org': 'http://staging.api-staging.globalforestwatch.org'
  },

  // GETTERS
  getWindowWidth: function() {
    return window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
  },

  getWindowHeigth: function() {
    return window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
  },

  getHost: function() {
    var currentLocation = window.location.hostname;
    if (this.URLS[currentLocation] === undefined) {
      currentLocation = DEFAULT_URL;
    }

    return 'http://' + this.URLS[currentLocation];
  },

  getAPIHost: function() {
    if (window.gfw && window.gfw.config) {
      return window.gfw.config.GFW_API_HOST;
    }

    var currentLocation = window.location.hostname;
    if (this.API_URLS[currentLocation] === undefined) {
      currentLocation = DEFAULT_URL;
    }

    return 'http://' + this.API_URLS[currentLocation];
  },

  // STATES
  isSmallScreen: function() {
    return (this.getWindowWidth() < this.SMALL_BREACKPOINT);
  },

  isDefaultHost: function() {
    var currentLocation = window.location.hostname;
    return (this.URLS[currentLocation] !== undefined);
  },

};