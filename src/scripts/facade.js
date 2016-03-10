'use strict';

var jBone = require('./libs/jBone.min');
var $gfwDom = jBone.noConflict();
// https://github.com/kupriyanenko/jbone#extend-it

jBone.fn.scrollTop = function() {
  // We do not want this script to be applied in browsers that do not support those
  // That means no smoothscroll on IE9 and below.
  if (document.querySelectorAll === void 0 || window.pageYOffset === void 0 || history.pushState === void 0) {
    return;
  }

  // Get the top position of an element in the document
  var getTop = function(element) {
    // return value of html.getBoundingClientRect().top ... IE : 0, other browsers : -pageYOffset
    if (element.nodeName === 'HTML') {
      return -window.pageYOffset;
    }
    return element.getBoundingClientRect().top + window.pageYOffset;
  };

  // ease functions thanks to:
  // http://blog.greweb.fr/2012/02/bezier-curve-based-easing-functions-from-concept-to-implementation/
  var easings = {
    linear: function(t) {
      return t;
    },
    easeInQuad: function(t) {
      return t * t;
    },
    easeOutQuad: function(t) {
      return t * (2 - t);
    },
    easeInOutQuad: function(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    },
    easeInCubic: function(t) {
      return t * t * t;
    },
    easeOutCubic: function(t) {
      return (--t) * t * t + 1;
    },
    easeInOutCubic: function(t) {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    },
    easeInQuart: function(t) {
      return t * t * t * t;
    },
    easeOutQuart: function(t) {
      return 1 - (--t) * t * t * t;
    },
    easeInOutQuart: function(t) {
      return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
    },
    easeInQuint: function(t) {
      return t * t * t * t * t;
    },
    easeOutQuint: function(t) {
      return 1 + (--t) * t * t * t * t;
    },
    easeInOutQuint: function(t) {
      return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t;
    }
  };

  // calculate the scroll position we should be in
  // given the start and end point of the scroll
  // the time elapsed from the beginning of the scroll
  // and the total duration of the scroll (default 500ms)
  var position = function(start, end, elapsed, duration) {
    if (elapsed > duration) { return end; }
    return start + (end - start) * easings.easeInOutQuint(elapsed / duration);
  };

  // we use requestAnimationFrame to be called by the browser before every repaint
  // if the first argument is an element then scroll to the top of this element
  // if the first argument is numeric then scroll to this location
  // if the callback exist, it is called when the scrolling is finished
  var smoothScroll = function(el, duration, callback) {
    duration = duration || 500;
    var start = window.pageYOffset, end;

    if (typeof el === 'number') {
      end = parseInt(el);
    } else {
      end = getTop(el);
    }

    var clock = Date.now();
    var requestAnimationFrame = window.requestAnimationFrame ||
      window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame ||
      function(fn) { window.setTimeout(fn, 15); };

    var step = function() {
      var elapsed = Date.now() - clock;
      window.scroll(0, position(start, end, elapsed, duration));
      if (elapsed > duration) {
        if (typeof callback === 'function') {
          callback(el);
        }
      } else {
        requestAnimationFrame(step);
      }
    };

    step();
  };

  smoothScroll.apply(this, arguments);

  // return smoothscroll API
  return this;

};

  // // XHR native
  // var ajaxPost = function(url, data, callback) {
  //   var http = new XMLHttpRequest();
  //   http.onreadystatechange = function() {
  //     if (http.readyState === 4 && http.status === 200) {
  //       callback(undefined, http.responseText);
  //     } else if (http.readyState === 4 && http.status === 400) {
  //       callback(http.responseText);
  //     }
  //   };
  //   http.open('POST', url, true);
  //   http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  //   http.send(data);
  // };


module.exports = $gfwDom;