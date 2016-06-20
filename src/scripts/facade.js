'use strict';

/**
 * jBone
 * How to extend: https://github.com/kupriyanenko/jbone#extend-it
 */
import jBone from 'jbone';
const $gfwDom = jBone.noConflict();

$gfwDom.fn.scrollTop = () => {
  // We do not want this script to be applied in browsers that do not support those
  // That means no smoothscroll on IE9 and below.
  if (document.querySelectorAll === void 0 || window.pageYOffset === void 0 || history.pushState === void 0) {
    return;
  }

  // Get the top position of an element in the document
  const getTop = element => {
    // return value of html.getBoundingClientRect().top ... IE : 0, other browsers : -pageYOffset
    if (element.nodeName === 'HTML') {
      return -window.pageYOffset;
    }
    return element.getBoundingClientRect().top + window.pageYOffset;
  };

  // ease functions thanks to:
  // http://blog.greweb.fr/2012/02/bezier-curve-based-easing-functions-from-concept-to-implementation/
  const easings = {
    linear: t => t,
    easeInQuad: t => t * t,
    easeOutQuad: t => t * (2 - t),
    easeInOutQuad: t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
    easeInCubic: t => t * t * t,
    easeOutCubic: t => (--t) * t * t + 1,
    easeInOutCubic: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
    easeInQuart: t => t * t * t * t,
    easeOutQuart: t => 1 - (--t) * t * t * t,
    easeInOutQuart: t => t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t,
    easeInQuint: t => t * t * t * t * t,
    easeOutQuint: t => 1 + (--t) * t * t * t * t,
    easeInOutQuint: t => t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t
  };

  // calculate the scroll position we should be in
  // given the start and end point of the scroll
  // the time elapsed from the beginning of the scroll
  // and the total duration of the scroll (default 500ms)
  const position = (start, end, elapsed, duration) => {
    if (elapsed > duration) { return end; }
    return start + (end - start) * easings.easeInOutQuint(elapsed / duration);
  };

  // we use requestAnimationFrame to be called by the browser before every repaint
  // if the first argument is an element then scroll to the top of this element
  // if the first argument is numeric then scroll to this location
  // if the callback exist, it is called when the scrolling is finished
  const smoothScroll = (el, duration, callback) => {
    duration = duration || 500;
    const start = window.pageYOffset
          end   = typeof el === 'number' ? parseInt(el) : getTop(el);

    const clock = Date.now();
    const requestAnimationFrame = window.requestAnimationFrame ||
      window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame ||
      (fn => window.setTimeout(fn, 15));

    const step = () => {
      const elapsed = Date.now() - clock;
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

$gfwDom.json = (url, options) => {
  options.success({});
};

$gfwDom.jsonp = (url, options) => {
	options = options;
	const script = document.createElement('script');
	script.src = `${url}?callback=_jsonpGFWCallback&${options.data}`;
	document.head.appendChild(script);

	window['_jsonpGFWCallback'] = function(data) {
		if (!!data) {
			options.success(data);
		} else {
			options.error(data);
		}
	};

}

// GIST: https://gist.github.com/bullgare/5336154
// Function for get all the params of a form
$gfwDom.serialize = (form) => {
	console.log(form);
	if (!form || form.nodeName !== "FORM") {
		return;
	}
	let obj = {};
	for (let i = form.elements.length - 1; i >= 0; i = i - 1) {
		if (form.elements[i].name === "") {
			continue;
		}
		switch (form.elements[i].nodeName) {
		case 'INPUT':
			switch (form.elements[i].type) {
			case 'text':
			case 'email':
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
				for (let j = form.elements[i].options.length - 1; j >= 0; j = j - 1) {
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

	return obj;
}

module.exports = $gfwDom;
