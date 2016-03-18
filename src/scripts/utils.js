'use strict';

/**
 * Utils
 * @param  {window} root
 * @return {Object}
 */
module.exports = {

  // CONSTANTS
  SMALL_BREAKPOINT: 850,

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
      currentLocation = this.DEFAULT_URL;
    }

    return 'http://' + this.URLS[currentLocation];
  },

  getAPIHost: function() {
    if (window.gfw && window.gfw.config) {
      return window.gfw.config.GFW_API_HOST;
    }

    var currentLocation = window.location.hostname;
    if (this.API_URLS[currentLocation] === undefined) {
      currentLocation = this.DEFAULT_URL;
    }

    return 'http://' + this.API_URLS[currentLocation];
  },

  isLoggedIn: function(options) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', this.getAPIHost() + '/user', true);
    xhr.withCredentials = true;
    xhr.onreadystatechange = function() {
      var responseStatus = xhr.status;
      if (responseStatus !== 200) {
        options.failure();
      } else {
        options.success();
      }
    };
    xhr.send();
  },

  // STATES
  isSmallScreen: function() {
    return (this.getWindowWidth() < this.SMALL_BREAKPOINT);
  },

  isDefaultHost: function() {
    var currentLocation = window.location.hostname;
    return (this.URLS[currentLocation] !== undefined);
  },

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  // Source: https://davidwalsh.name/function-debounce
  debounce(func, wait, immediate) {
  	var timeout;
  	return function() {
  		var context = this, args = arguments;
  		var later = function() {
  			timeout = null;
  			if (!immediate) func.apply(context, args);
  		};
  		var callNow = immediate && !timeout;
  		clearTimeout(timeout);
  		timeout = setTimeout(later, wait);
  		if (callNow) func.apply(context, args);
  	};
  }

};
