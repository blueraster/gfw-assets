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

jBone.jsonp = function(url, options) {
	var options = options;
	var script = document.createElement('script');
			script.src = url + '?callback=_jsonpCallback&'+options.data;
			document.head.appendChild(script);

	window['_jsonpCallback'] = function(data) {
		// Will this check if there is an error? I don't think so...
		if (!!data) {
			options.success(data);
		} else {
			options.error(data);
		}
	};
	
}

// GIST: https://gist.github.com/bullgare/5336154
// Function for get all the params of a form
jBone.serialize = function (form) {
	if (!form || form.nodeName !== "FORM") {
		return;
	}
	var i, j,
		obj = {};
	for (i = form.elements.length - 1; i >= 0; i = i - 1) {
		if (form.elements[i].name === "") {
			continue;
		}
		switch (form.elements[i].nodeName) {
		case 'INPUT':
			switch (form.elements[i].type) {
			case 'text':
			case 'hidden':
			case 'password':
			case 'button':
			case 'reset':
			case 'submit':
				obj[form.elements[i].name] = encodeURIComponent(form.elements[i].value);
				break;
			case 'checkbox':
			case 'radio':
				if (form.elements[i].checked) {
					obj[form.elements[i].name] = encodeURIComponent(form.elements[i].value);
				}
				break;
			case 'file':
				break;
			}
			break;
		case 'TEXTAREA':
			obj[form.elements[i].name] = encodeURIComponent(form.elements[i].value);
			break;
		case 'SELECT':
			switch (form.elements[i].type) {
			case 'select-one':
				obj[form.elements[i].name] = encodeURIComponent(form.elements[i].value);
				break;
			case 'select-multiple':
				for (j = form.elements[i].options.length - 1; j >= 0; j = j - 1) {
					if (form.elements[i].options[j].selected) {
						obj[form.elements[i].name] = encodeURIComponent(form.elements[i].options[j].value);
					}
				}
				break;
			}
			break;
		case 'BUTTON':
			switch (form.elements[i].type) {
			case 'reset':
			case 'submit':
			case 'button':
				obj[form.elements[i].name] = encodeURIComponent(form.elements[i].value);
				break;
			}
			break;
		}
	}

	// http://stackoverflow.com/a/6566471/3603884
	// Transform the object to a string. Maybe we should do it in two steps
	var str = "";
	for (var key in obj) {
		if (str != "") {
		  str += "&";
		}
		str += key + "=" + encodeURIComponent(obj[key]);
	}	

	return str;
}

module.exports = $gfwDom;