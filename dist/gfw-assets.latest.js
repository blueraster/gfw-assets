/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(2);
	module.exports = __webpack_require__(3);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	/*globals window __webpack_hash__ */
	if(false) {
		var lastData;
		var upToDate = function upToDate() {
			return lastData.indexOf(__webpack_hash__) >= 0;
		};
		var check = function check() {
			module.hot.check(function(err, updatedModules) {
				if(err) {
					if(module.hot.status() in {
							abort: 1,
							fail: 1
						}) {
						console.warn("[HMR] Cannot check for update. Need to do a full reload!");
						console.warn("[HMR] " + err.stack || err.message);
					} else {
						console.warn("[HMR] Update check failed: " + err.stack || err.message);
					}
					return;
				}

				if(!updatedModules) {
					console.warn("[HMR] Cannot find update. Need to do a full reload!");
					console.warn("[HMR] (Probably because of restarting the webpack-dev-server)");
					return;
				}

				module.hot.apply({
					ignoreUnaccepted: true
				}, function(err, renewedModules) {
					if(err) {
						if(module.hot.status() in {
								abort: 1,
								fail: 1
							}) {
							console.warn("[HMR] Cannot apply update. Need to do a full reload!");
							console.warn("[HMR] " + err.stack || err.message);
						} else {
							console.warn("[HMR] Update failed: " + err.stack || err.message);
						}
						return;
					}

					if(!upToDate()) {
						check();
					}

					require("./log-apply-result")(updatedModules, renewedModules);

					if(upToDate()) {
						console.log("[HMR] App is up to date.");
					}
				});
			});
		};
		var addEventListener = window.addEventListener ? function(eventName, listener) {
			window.addEventListener(eventName, listener, false);
		} : function(eventName, listener) {
			window.attachEvent("on" + eventName, listener);
		};
		addEventListener("message", function(event) {
			if(typeof event.data === "string" && event.data.indexOf("webpackHotUpdate") === 0) {
				lastData = event.data;
				if(!upToDate() && module.hot.status() === "idle") {
					console.log("[HMR] Checking for updates on the server...");
					check();
				}
			}
		});
		console.log("[HMR] Waiting for update signal from WDS...");
	} else {
		throw new Error("[HMR] Hot Module Replacement is disabled.");
	}


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "index.html";

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Main file:
	 * In this we are going to initialize all modules
	 * @param  {window} root
	 */

	var _header = __webpack_require__(4);

	var _header2 = _interopRequireDefault(_header);

	var _footer = __webpack_require__(21);

	var _footer2 = _interopRequireDefault(_footer);

	var _feedback = __webpack_require__(25);

	var _feedback2 = _interopRequireDefault(_feedback);

	__webpack_require__(27);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// At begining add google fonts asynchronously
	setTimeout(function () {
	  var linkTag = document.createElement('link');
	  linkTag.rel = 'stylesheet';
	  linkTag.href = 'https://fonts.googleapis.com/css?family=Fira+Sans:300,400,500';
	  document.head.appendChild(linkTag);
	}, 0);

	// Adding header


	// Add styles
	new _header2.default();

	// Adding footer
	new _footer2.default();

	// Adding feedback
	new _feedback2.default();

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _facade = __webpack_require__(5);

	var _facade2 = _interopRequireDefault(_facade);

	var _utils = __webpack_require__(8);

	var _utils2 = _interopRequireDefault(_utils);

	var _header = __webpack_require__(9);

	var _header2 = _interopRequireDefault(_header);

	var _headerIcons = __webpack_require__(10);

	var _headerIcons2 = _interopRequireDefault(_headerIcons);

	var _loginButton = __webpack_require__(11);

	var _loginButton2 = _interopRequireDefault(_loginButton);

	var _navigation = __webpack_require__(16);

	var _navigation2 = _interopRequireDefault(_navigation);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Header
	 * @param  {window} root
	 * @return {Class}
	 */

	var Header = function () {
	  function Header() {
	    _classCallCheck(this, Header);

	    this.el = document.getElementById('headerGfw');
	    if (!this.el) {
	      throw new Error('element #headerGfw doesn\'t exist');
	    }
	    this.render();
	  }

	  _createClass(Header, [{
	    key: 'render',
	    value: function render() {
	      this.el.innerHTML = (0, _header2.default)() + (0, _headerIcons2.default)();

	      this.cache();

	      this.setParams();

	      this.initHighlightCurrent();
	      this.initListeners();
	      this.initTranslate();
	      this.initLinksUrls();
	      this.initMyGFW();
	      this.initNavigation();

	      return this;
	    }

	    /**
	     * Cache all the elements that we will use after
	     */

	  }, {
	    key: 'cache',
	    value: function cache() {
	      // Script
	      this.$script = (0, _facade2.default)('#loader-gfw');

	      // Html-body
	      this.$htmlbody = (0, _facade2.default)('html,body');

	      // Header
	      this.$header = (0, _facade2.default)('#headerGfw');
	      this.$headerSubmenu = this.$header.find('.m-header-submenu');
	      this.$headerSubmenuBtns = this.$header.find('.m-header-submenu-btn');
	      this.$headerSubmenuApp = this.$header.find('#submenuApps');

	      // Links
	      this.$links = this.$header.find('a');
	      this.$linksSubmenu = this.$header.find('a');
	    }
	  }, {
	    key: 'setParams',


	    /**
	     * Set Params
	     */
	    value: function setParams() {
	      this.params = {
	        current: this.$script.data('current')
	      };
	    }

	    /**
	     * Set current depending on the script data current
	     */

	  }, {
	    key: 'initHighlightCurrent',
	    value: function initHighlightCurrent() {
	      this.$header.find(this.params.current).addClass('-current');
	    }

	    /**
	     * Events
	     * - showMenu(),
	     * - hideMenus()
	     */

	  }, {
	    key: 'initListeners',
	    value: function initListeners() {
	      // Mobile menus
	      this.$header.on('click', '.m-header-submenu-btn', this.showMenu.bind(this));
	      this.$header.on('click', '.m-header-backdrop', this.hideMenus.bind(this));
	    }
	  }, {
	    key: 'showMenu',
	    value: function showMenu(e) {
	      if (_utils2.default.isSmallScreen()) {
	        e && e.preventDefault();

	        if (!(0, _facade2.default)(e.currentTarget).hasClass('-active')) {
	          // Hide all the opened menus
	          this.hideMenus();
	          // Prevent mobile scroll
	          this.$htmlbody.toggleClass('-no-scroll');
	          // Active menu icon
	          (0, _facade2.default)(e.currentTarget).toggleClass('-active');
	          (0, _facade2.default)(e.currentTarget).find('svg').toggleClass('-inactive');
	          // Active menu
	          (0, _facade2.default)((0, _facade2.default)(e.currentTarget).data('submenu')).toggleClass('-active');
	        } else {
	          this.hideMenus();
	        }
	      } else {
	        if ((0, _facade2.default)(e.currentTarget).data('stopnavigation')) {
	          e && e.preventDefault();
	        }
	      }
	    }
	  }, {
	    key: 'hideMenus',
	    value: function hideMenus(e) {
	      // Allow mobile scroll
	      this.$htmlbody.removeClass('-no-scroll');
	      this.$headerSubmenu.removeClass('-active');
	      this.$headerSubmenuBtns.forEach(function (v) {
	        if ((0, _facade2.default)(v).hasClass('-active')) {
	          (0, _facade2.default)(v).removeClass('-active');
	          (0, _facade2.default)(v).find('svg').toggleClass('-inactive');
	        }
	      });
	    }

	    /**
	     * Google translate
	     */

	  }, {
	    key: 'initTranslate',
	    value: function initTranslate() {
	      setTimeout(function () {
	        window['googleTranslateElementInitGFW'] = function () {
	          new google.translate.TranslateElement({
	            pageLanguage: '',
	            includedLanguages: 'ar,es,en,fr,id,pt,ru,zh-CN,de,uk,ro,tr,it,hi,km',
	            layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
	            autoDisplay: false
	          }, 'googleTranslate');
	        };

	        var translateScript = document.createElement('script');
	        translateScript.type = 'text/javascript';
	        translateScript.src = 'http://translate.google.com/translate_a/element.js?cb=googleTranslateElementInitGFW';
	        document.head.appendChild(translateScript);
	      }, 0);
	    }
	  }, {
	    key: 'initLinksUrls',


	    /**
	     * We need to make a difference between local, staging and PRO environment urls.
	     * Also we need to have a default value for the external applications
	     */
	    value: function initLinksUrls() {
	      var _this = this;

	      this.params.targets = !_utils2.default.isDefaultHost();
	      this.params.hostname = _utils2.default.getHost();

	      this.$links.forEach(function (v) {
	        var href = (0, _facade2.default)(v).attr('href');
	        if (href.charAt(0) == '/') {
	          (0, _facade2.default)(v).attr('href', this.params.hostname + href);
	        }
	      }.bind(this));

	      this.$linksSubmenu.forEach(function (v) {
	        var external = (0, _facade2.default)(v).hasClass('external-link');
	        if (_this.params.targets) {
	          !!external ? (0, _facade2.default)(v).removeAttr('target') : (0, _facade2.default)(v).attr('target', '_blank');
	        }
	      });
	    }
	  }, {
	    key: 'initMyGFW',


	    /**
	     * Init My GFW
	     */
	    value: function initMyGFW() {
	      if (!!_utils2.default.isDefaultHost()) {
	        var loginButton = new _loginButton2.default();
	        loginButton.init();
	      } else {
	        (0, _facade2.default)('#my-gfw-container').css({ display: 'none' });
	      }
	    }
	  }, {
	    key: 'initNavigation',
	    value: function initNavigation() {
	      new _navigation2.default();
	    }
	  }]);

	  return Header;
	}();

	exports.default = Header;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * jBone
	 * How to extend: https://github.com/kupriyanenko/jbone#extend-it
	 */

	var _arguments = arguments;

	var _jbone = __webpack_require__(6);

	var _jbone2 = _interopRequireDefault(_jbone);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var $gfwDom = _jbone2.default.noConflict();

	$gfwDom.fn.scrollTop = function () {
		// We do not want this script to be applied in browsers that do not support those
		// That means no smoothscroll on IE9 and below.
		if (document.querySelectorAll === void 0 || window.pageYOffset === void 0 || history.pushState === void 0) {
			return;
		}

		// Get the top position of an element in the document
		var getTop = function getTop(element) {
			// return value of html.getBoundingClientRect().top ... IE : 0, other browsers : -pageYOffset
			if (element.nodeName === 'HTML') {
				return -window.pageYOffset;
			}
			return element.getBoundingClientRect().top + window.pageYOffset;
		};

		// ease functions thanks to:
		// http://blog.greweb.fr/2012/02/bezier-curve-based-easing-functions-from-concept-to-implementation/
		var easings = {
			linear: function linear(t) {
				return t;
			},
			easeInQuad: function easeInQuad(t) {
				return t * t;
			},
			easeOutQuad: function easeOutQuad(t) {
				return t * (2 - t);
			},
			easeInOutQuad: function easeInOutQuad(t) {
				return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
			},
			easeInCubic: function easeInCubic(t) {
				return t * t * t;
			},
			easeOutCubic: function easeOutCubic(t) {
				return --t * t * t + 1;
			},
			easeInOutCubic: function easeInOutCubic(t) {
				return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
			},
			easeInQuart: function easeInQuart(t) {
				return t * t * t * t;
			},
			easeOutQuart: function easeOutQuart(t) {
				return 1 - --t * t * t * t;
			},
			easeInOutQuart: function easeInOutQuart(t) {
				return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
			},
			easeInQuint: function easeInQuint(t) {
				return t * t * t * t * t;
			},
			easeOutQuint: function easeOutQuint(t) {
				return 1 + --t * t * t * t * t;
			},
			easeInOutQuint: function easeInOutQuint(t) {
				return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
			}
		};

		// calculate the scroll position we should be in
		// given the start and end point of the scroll
		// the time elapsed from the beginning of the scroll
		// and the total duration of the scroll (default 500ms)
		var position = function position(start, end, elapsed, duration) {
			if (elapsed > duration) {
				return end;
			}
			return start + (end - start) * easings.easeInOutQuint(elapsed / duration);
		};

		// we use requestAnimationFrame to be called by the browser before every repaint
		// if the first argument is an element then scroll to the top of this element
		// if the first argument is numeric then scroll to this location
		// if the callback exist, it is called when the scrolling is finished
		var smoothScroll = function smoothScroll(el, duration, callback) {
			duration = duration || 500;
			var start = window.pageYOffset;
			end = typeof el === 'number' ? parseInt(el) : getTop(el);

			var clock = Date.now();
			var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function (fn) {
				return window.setTimeout(fn, 15);
			};

			var step = function step() {
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

		smoothScroll.apply(undefined, _arguments);

		// return smoothscroll API
		return undefined;
	};

	$gfwDom.json = function (url, options) {
		options.success({});
	};

	$gfwDom.jsonp = function (url, options) {
		options = options;
		var script = document.createElement('script');
		script.src = url + '?callback=_jsonpGFWCallback&' + options.data;
		document.head.appendChild(script);

		window['_jsonpGFWCallback'] = function (data) {
			if (!!data) {
				options.success(data);
			} else {
				options.error(data);
			}
		};
	};

	// GIST: https://gist.github.com/bullgare/5336154
	// Function for get all the params of a form
	$gfwDom.serialize = function (form) {
		if (!form || form.nodeName !== "FORM") {
			return;
		}
		var obj = {};
		for (var i = form.elements.length - 1; i >= 0; i = i - 1) {
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
							for (var j = form.elements[i].options.length - 1; j >= 0; j = j - 1) {
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
		var str = '';
		for (var key in obj) {
			if (str != '') {
				str += '&';
			}
			str += key + '=' + encodeURIComponent(obj[key]);
		}

		return str;
	};

	module.exports = $gfwDom;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {/*!
	 * jBone v1.1.2 - 2015-10-09 - Library for DOM manipulation
	 *
	 * http://jbone.js.org
	 *
	 * Copyright 2015 Alexey Kupriyanenko
	 * Released under the MIT license.
	 */

	(function (win) {

	var
	// cache previous versions
	_$ = win.$,
	_jBone = win.jBone,

	// Quick match a standalone tag
	rquickSingleTag = /^<(\w+)\s*\/?>$/,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash
	rquickExpr = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,

	// Alias for function
	slice = [].slice,
	splice = [].splice,
	keys = Object.keys,

	// Alias for global variables
	doc = document,

	isString = function(el) {
	    return typeof el === "string";
	},
	isObject = function(el) {
	    return el instanceof Object;
	},
	isFunction = function(el) {
	    return ({}).toString.call(el) === "[object Function]";
	},
	isArray = function(el) {
	    return Array.isArray(el);
	},
	jBone = function(element, data) {
	    return new fn.init(element, data);
	},
	fn;

	// set previous values and return the instance upon calling the no-conflict mode
	jBone.noConflict = function() {
	    win.$ = _$;
	    win.jBone = _jBone;

	    return jBone;
	};

	fn = jBone.fn = jBone.prototype = {
	    init: function(element, data) {
	        var elements, tag, wraper, fragment;

	        if (!element) {
	            return this;
	        }
	        if (isString(element)) {
	            // Create single DOM element
	            if (tag = rquickSingleTag.exec(element)) {
	                this[0] = doc.createElement(tag[1]);
	                this.length = 1;

	                if (isObject(data)) {
	                    this.attr(data);
	                }

	                return this;
	            }
	            // Create DOM collection
	            if ((tag = rquickExpr.exec(element)) && tag[1]) {
	                fragment = doc.createDocumentFragment();
	                wraper = doc.createElement("div");
	                wraper.innerHTML = element;
	                while (wraper.lastChild) {
	                    fragment.appendChild(wraper.firstChild);
	                }
	                elements = slice.call(fragment.childNodes);

	                return jBone.merge(this, elements);
	            }
	            // Find DOM elements with querySelectorAll
	            if (jBone.isElement(data)) {
	                return jBone(data).find(element);
	            }

	            try {
	                elements = doc.querySelectorAll(element);

	                return jBone.merge(this, elements);
	            } catch (e) {
	                return this;
	            }
	        }
	        // Wrap DOMElement
	        if (element.nodeType) {
	            this[0] = element;
	            this.length = 1;

	            return this;
	        }
	        // Run function
	        if (isFunction(element)) {
	            return element();
	        }
	        // Return jBone element as is
	        if (element instanceof jBone) {
	            return element;
	        }

	        // Return element wrapped by jBone
	        return jBone.makeArray(element, this);
	    },

	    pop: [].pop,
	    push: [].push,
	    reverse: [].reverse,
	    shift: [].shift,
	    sort: [].sort,
	    splice: [].splice,
	    slice: [].slice,
	    indexOf: [].indexOf,
	    forEach: [].forEach,
	    unshift: [].unshift,
	    concat: [].concat,
	    join: [].join,
	    every: [].every,
	    some: [].some,
	    filter: [].filter,
	    map: [].map,
	    reduce: [].reduce,
	    reduceRight: [].reduceRight,
	    length: 0
	};

	fn.constructor = jBone;

	fn.init.prototype = fn;

	jBone.setId = function(el) {
	    var jid = el.jid;

	    if (el === win) {
	        jid = "window";
	    } else if (el.jid === undefined) {
	        el.jid = jid = ++jBone._cache.jid;
	    }

	    if (!jBone._cache.events[jid]) {
	        jBone._cache.events[jid] = {};
	    }
	};

	jBone.getData = function(el) {
	    el = el instanceof jBone ? el[0] : el;

	    var jid = el === win ? "window" : el.jid;

	    return {
	        jid: jid,
	        events: jBone._cache.events[jid]
	    };
	};

	jBone.isElement = function(el) {
	    return el && el instanceof jBone || el instanceof HTMLElement || isString(el);
	};

	jBone._cache = {
	    events: {},
	    jid: 0
	};

	function isArraylike(obj) {
	    var length = obj.length,
	        type = typeof obj;

	    if (isFunction(type) || obj === win) {
	        return false;
	    }

	    if (obj.nodeType === 1 && length) {
	        return true;
	    }

	    return isArray(type) || length === 0 ||
	        typeof length === "number" && length > 0 && (length - 1) in obj;
	}

	fn.pushStack = function(elems) {
	    var ret = jBone.merge(this.constructor(), elems);

	    return ret;
	};

	jBone.merge = function(first, second) {
	    var l = second.length,
	        i = first.length,
	        j = 0;

	    while (j < l) {
	        first[i++] = second[j++];
	    }

	    first.length = i;

	    return first;
	};

	jBone.contains = function(container, contained) {
	    return container.contains(contained);
	};

	jBone.extend = function(target) {
	    var tg;

	    splice.call(arguments, 1).forEach(function(source) {
	        tg = target; //caching target for perf improvement

	        if (source) {
	            for (var prop in source) {
	                tg[prop] = source[prop];
	            }
	        }
	    });

	    return target;
	};

	jBone.makeArray = function(arr, results) {
	    var ret = results || [];

	    if (arr !== null) {
	        if (isArraylike(arr)) {
	            jBone.merge(ret, isString(arr) ? [arr] : arr);
	        } else {
	            ret.push(arr);
	        }
	    }

	    return ret;
	};

	jBone.unique = function(array) {
	    if (array == null) {
	        return [];
	    }

	    var result = [];

	    for (var i = 0, length = array.length; i < length; i++) {
	        var value = array[i];
	        if (result.indexOf(value) < 0) {
	            result.push(value);
	        }
	    }
	    return result;
	};

	function BoneEvent(e, data) {
	    var key, setter;

	    this.originalEvent = e;

	    setter = function(key, e) {
	        if (key === "preventDefault") {
	            this[key] = function() {
	                this.defaultPrevented = true;
	                return e[key]();
	            };
	        } else if (key === "stopImmediatePropagation") {
	            this[key] = function() {
	                this.immediatePropagationStopped = true;
	                return e[key]();
	            };
	        } else if (isFunction(e[key])) {
	            this[key] = function() {
	                return e[key]();
	            };
	        } else {
	            this[key] = e[key];
	        }
	    };

	    for (key in e) {
	        if (e[key] || typeof e[key] === "function") {
	            setter.call(this, key, e);
	        }
	    }

	    jBone.extend(this, data, {
	        isImmediatePropagationStopped: function() {
	            return !!this.immediatePropagationStopped;
	        }
	    });
	}

	jBone.Event = function(event, data) {
	    var namespace, eventType;

	    if (event.type && !data) {
	        data = event;
	        event = event.type;
	    }

	    namespace = event.split(".").splice(1).join(".");
	    eventType = event.split(".")[0];

	    event = doc.createEvent("Event");
	    event.initEvent(eventType, true, true);

	    return jBone.extend(event, {
	        namespace: namespace,
	        isDefaultPrevented: function() {
	            return event.defaultPrevented;
	        }
	    }, data);
	};

	jBone.event = {

	    /**
	     * Attach a handler to an event for the elements
	     * @param {Node}        el         - Events will be attached to this DOM Node
	     * @param {String}      types      - One or more space-separated event types and optional namespaces
	     * @param {Function}    handler    - A function to execute when the event is triggered
	     * @param {Object}      [data]     - Data to be passed to the handler in event.data
	     * @param {String}      [selector] - A selector string to filter the descendants of the selected elements
	     */
	    add: function(el, types, handler, data, selector) {
	        jBone.setId(el);

	        var eventHandler = function(e) {
	                jBone.event.dispatch.call(el, e);
	            },
	            events = jBone.getData(el).events,
	            eventType, t, event;

	        types = types.split(" ");
	        t = types.length;
	        while (t--) {
	            event = types[t];

	            eventType = event.split(".")[0];
	            events[eventType] = events[eventType] || [];

	            if (events[eventType].length) {
	                // override with previous event handler
	                eventHandler = events[eventType][0].fn;
	            } else {
	                el.addEventListener && el.addEventListener(eventType, eventHandler, false);
	            }

	            events[eventType].push({
	                namespace: event.split(".").splice(1).join("."),
	                fn: eventHandler,
	                selector: selector,
	                data: data,
	                originfn: handler
	            });
	        }
	    },

	    /**
	     * Remove an event handler
	     * @param  {Node}       el        - Events will be deattached from this DOM Node
	     * @param  {String}     types     - One or more space-separated event types and optional namespaces
	     * @param  {Function}   handler   - A handler function previously attached for the event(s)
	     */
	    remove: function(el, types, handler) {
	        var removeListener = function(events, eventType, index, el, e) {
	                var callback;

	                // get callback
	                if ((handler && e.originfn === handler) || !handler) {
	                    callback = e.fn;
	                }

	                if (events[eventType][index].fn === callback) {
	                    // remove handler from cache
	                    events[eventType].splice(index, 1);

	                    if (!events[eventType].length) {
	                        el.removeEventListener(eventType, callback);
	                    }
	                }
	            },
	            events = jBone.getData(el).events,
	            l,
	            eventsByType;

	        if (!events) {
	            return;
	        }

	        // remove all events
	        if (!types && events) {
	            return keys(events).forEach(function(eventType) {
	                eventsByType = events[eventType];
	                l = eventsByType.length;

	                while(l--) {
	                    removeListener(events, eventType, l, el, eventsByType[l]);
	                }
	            });
	        }

	        types.split(" ").forEach(function(eventName) {
	            var eventType = eventName.split(".")[0],
	                namespace = eventName.split(".").splice(1).join("."),
	                e;

	            // remove named events
	            if (events[eventType]) {
	                eventsByType = events[eventType];
	                l = eventsByType.length;

	                while(l--) {
	                    e = eventsByType[l];
	                    if (!namespace || (namespace && e.namespace === namespace)) {
	                        removeListener(events, eventType, l, el, e);
	                    }
	                }
	            }
	            // remove all namespaced events
	            else if (namespace) {
	                keys(events).forEach(function(eventType) {
	                    eventsByType = events[eventType];
	                    l = eventsByType.length;

	                    while(l--) {
	                        e = eventsByType[l];
	                        if (e.namespace.split(".")[0] === namespace.split(".")[0]) {
	                            removeListener(events, eventType, l, el, e);
	                        }
	                    }
	                });
	            }
	        });
	    },

	    /**
	     * Execute all handlers and behaviors attached to the matched elements for the given event type.
	     * @param  {Node}       el       - Events will be triggered for thie DOM Node
	     * @param  {String}     event    - One or more space-separated event types and optional namespaces
	     */
	    trigger: function(el, event) {
	        var events = [];

	        if (isString(event)) {
	            events = event.split(" ").map(function(event) {
	                return jBone.Event(event);
	            });
	        } else {
	            event = event instanceof Event ? event : jBone.Event(event);
	            events = [event];
	        }

	        events.forEach(function(event) {
	            if (!event.type) {
	                return;
	            }

	            el.dispatchEvent && el.dispatchEvent(event);
	        });
	    },

	    dispatch: function(e) {
	        var i = 0,
	            j = 0,
	            el = this,
	            handlers = jBone.getData(el).events[e.type],
	            length = handlers.length,
	            handlerQueue = [],
	            targets = [],
	            l,
	            expectedTarget,
	            handler,
	            event,
	            eventOptions;

	        // cache all events handlers, fix issue with multiple handlers (issue #45)
	        for (; i < length; i++) {
	            handlerQueue.push(handlers[i]);
	        }

	        i = 0;
	        length = handlerQueue.length;

	        for (;
	            // if event exists
	            i < length &&
	            // if handler is not removed from stack
	            ~handlers.indexOf(handlerQueue[i]) &&
	            // if propagation is not stopped
	            !(event && event.isImmediatePropagationStopped());
	        i++) {
	            expectedTarget = null;
	            eventOptions = {};
	            handler = handlerQueue[i];
	            handler.data && (eventOptions.data = handler.data);

	            // event handler without selector
	            if (!handler.selector) {
	                event = new BoneEvent(e, eventOptions);

	                if (!(e.namespace && e.namespace !== handler.namespace)) {
	                    handler.originfn.call(el, event);
	                }
	            }
	            // event handler with selector
	            else if (
	                // if target and selected element the same
	                ~(targets = jBone(el).find(handler.selector)).indexOf(e.target) && (expectedTarget = e.target) ||
	                // if one of element matched with selector contains target
	                (el !== e.target && el.contains(e.target))
	            ) {
	                // get element matched with selector
	                if (!expectedTarget) {
	                    l = targets.length;
	                    j = 0;

	                    for (; j < l; j++) {
	                        if (targets[j] && targets[j].contains(e.target)) {
	                            expectedTarget = targets[j];
	                        }
	                    }
	                }

	                if (!expectedTarget) {
	                    continue;
	                }

	                eventOptions.currentTarget = expectedTarget;
	                event = new BoneEvent(e, eventOptions);

	                if (!(e.namespace && e.namespace !== handler.namespace)) {
	                    handler.originfn.call(expectedTarget, event);
	                }
	            }
	        }
	    }
	};

	fn.on = function(types, selector, data, fn) {
	    var length = this.length,
	        i = 0;

	    if (data == null && fn == null) {
	        // (types, fn)
	        fn = selector;
	        data = selector = undefined;
	    } else if (fn == null) {
	        if (typeof selector === "string") {
	            // (types, selector, fn)
	            fn = data;
	            data = undefined;
	        } else {
	            // (types, data, fn)
	            fn = data;
	            data = selector;
	            selector = undefined;
	        }
	    }

	    if (!fn) {
	        return this;
	    }

	    for (; i < length; i++) {
	        jBone.event.add(this[i], types, fn, data, selector);
	    }

	    return this;
	};

	fn.one = function(event) {
	    var args = arguments,
	        i = 0,
	        length = this.length,
	        oneArgs = slice.call(args, 1, args.length - 1),
	        callback = slice.call(args, -1)[0],
	        addListener;

	    addListener = function(el) {
	        var $el = jBone(el);

	        event.split(" ").forEach(function(event) {
	            var fn = function(e) {
	                $el.off(event, fn);
	                callback.call(el, e);
	            };

	            $el.on.apply($el, [event].concat(oneArgs, fn));
	        });
	    };

	    for (; i < length; i++) {
	        addListener(this[i]);
	    }

	    return this;
	};

	fn.trigger = function(event) {
	    var i = 0,
	        length = this.length;

	    if (!event) {
	        return this;
	    }

	    for (; i < length; i++) {
	        jBone.event.trigger(this[i], event);
	    }

	    return this;
	};

	fn.off = function(types, handler) {
	    var i = 0,
	        length = this.length;

	    for (; i < length; i++) {
	        jBone.event.remove(this[i], types, handler);
	    }

	    return this;
	};

	fn.find = function(selector) {
	    var results = [],
	        i = 0,
	        length = this.length,
	        finder = function(el) {
	            if (isFunction(el.querySelectorAll)) {
	                [].forEach.call(el.querySelectorAll(selector), function(found) {
	                    results.push(found);
	                });
	            }
	        };

	    for (; i < length; i++) {
	        finder(this[i]);
	    }

	    return jBone(results);
	};

	fn.get = function(index) {
	    return index != null ?

	        // Return just one element from the set
	        (index < 0 ? this[index + this.length] : this[index]) :

	        // Return all the elements in a clean array
	        slice.call(this);
	};

	fn.eq = function(index) {
	    return jBone(this[index]);
	};

	fn.parent = function() {
	    var results = [],
	        parent,
	        i = 0,
	        length = this.length;

	    for (; i < length; i++) {
	        if (!~results.indexOf(parent = this[i].parentElement) && parent) {
	            results.push(parent);
	        }
	    }

	    return jBone(results);
	};

	fn.toArray = function() {
	    return slice.call(this);
	};

	fn.is = function() {
	    var args = arguments;

	    return this.some(function(el) {
	        return el.tagName.toLowerCase() === args[0];
	    });
	};

	fn.has = function() {
	    var args = arguments;

	    return this.some(function(el) {
	        return el.querySelectorAll(args[0]).length;
	    });
	};

	fn.add = function(selector, context) {
	    return this.pushStack(
	        jBone.unique(
	            jBone.merge(this.get(), jBone(selector, context))
	        )
	    );
	};

	fn.attr = function(key, value) {
	    var args = arguments,
	        i = 0,
	        length = this.length,
	        setter;

	    if (isString(key) && args.length === 1) {
	        return this[0] && this[0].getAttribute(key);
	    }

	    if (args.length === 2) {
	        setter = function(el) {
	            el.setAttribute(key, value);
	        };
	    } else if (isObject(key)) {
	        setter = function(el) {
	            keys(key).forEach(function(name) {
	                el.setAttribute(name, key[name]);
	            });
	        };
	    }

	    for (; i < length; i++) {
	        setter(this[i]);
	    }

	    return this;
	};

	fn.removeAttr = function(key) {
	    var i = 0,
	        length = this.length;

	    for (; i < length; i++) {
	        this[i].removeAttribute(key);
	    }

	    return this;
	};

	fn.val = function(value) {
	    var i = 0,
	        length = this.length;

	    if (arguments.length === 0) {
	        return this[0] && this[0].value;
	    }

	    for (; i < length; i++) {
	        this[i].value = value;
	    }

	    return this;
	};

	fn.css = function(key, value) {
	    var args = arguments,
	        i = 0,
	        length = this.length,
	        setter;

	    // Get attribute
	    if (isString(key) && args.length === 1) {
	        return this[0] && win.getComputedStyle(this[0])[key];
	    }

	    // Set attributes
	    if (args.length === 2) {
	        setter = function(el) {
	            el.style[key] = value;
	        };
	    } else if (isObject(key)) {
	        setter = function(el) {
	            keys(key).forEach(function(name) {
	                el.style[name] = key[name];
	            });
	        };
	    }

	    for (; i < length; i++) {
	        setter(this[i]);
	    }

	    return this;
	};

	fn.data = function(key, value) {
	    var args = arguments, data = {},
	        i = 0,
	        length = this.length,
	        setter,
	        setValue = function(el, key, value) {
	            if (isObject(value)) {
	                el.jdata = el.jdata || {};
	                el.jdata[key] = value;
	            } else {
	                el.dataset[key] = value;
	            }
	        },
	        getValue = function(value) {
	            if (value === "true") {
	                return true;
	            } else if (value === "false") {
	                return false;
	            } else {
	                return value;
	            }
	        };

	    // Get all data
	    if (args.length === 0) {
	        this[0].jdata && (data = this[0].jdata);

	        keys(this[0].dataset).forEach(function(key) {
	            data[key] = getValue(this[0].dataset[key]);
	        }, this);

	        return data;
	    }
	    // Get data by name
	    if (args.length === 1 && isString(key)) {
	        return this[0] && getValue(this[0].dataset[key] || this[0].jdata && this[0].jdata[key]);
	    }

	    // Set data
	    if (args.length === 1 && isObject(key)) {
	        setter = function(el) {
	            keys(key).forEach(function(name) {
	                setValue(el, name, key[name]);
	            });
	        };
	    } else if (args.length === 2) {
	        setter = function(el) {
	            setValue(el, key, value);
	        };
	    }

	    for (; i < length; i++) {
	        setter(this[i]);
	    }

	    return this;
	};

	fn.removeData = function(key) {
	    var i = 0,
	        length = this.length,
	        jdata, dataset;

	    for (; i < length; i++) {
	        jdata = this[i].jdata;
	        dataset = this[i].dataset;

	        if (key) {
	            jdata && jdata[key] && delete jdata[key];
	            delete dataset[key];
	        } else {
	            for (key in jdata) {
	                delete jdata[key];
	            }

	            for (key in dataset) {
	                delete dataset[key];
	            }
	        }
	    }

	    return this;
	};

	fn.addClass = function(className) {
	    var i = 0,
	        j = 0,
	        length = this.length,
	        classes = className ? className.trim().split(/\s+/) : [];

	    for (; i < length; i++) {
	        j = 0;

	        for (j = 0; j < classes.length; j++) {
	            this[i].classList.add(classes[j]);
	        }
	    }

	    return this;
	};

	fn.removeClass = function(className) {
	    var i = 0,
	        j = 0,
	        length = this.length,
	        classes = className ? className.trim().split(/\s+/) : [];

	    for (; i < length; i++) {
	        j = 0;

	        for (j = 0; j < classes.length; j++) {
	            this[i].classList.remove(classes[j]);
	        }
	    }

	    return this;
	};

	fn.toggleClass = function(className, force) {
	    var i = 0,
	        length = this.length,
	        method = "toggle";

	    force === true && (method = "add") || force === false && (method = "remove");

	    if (className) {
	        for (; i < length; i++) {
	            this[i].classList[method](className);
	        }
	    }

	    return this;
	};

	fn.hasClass = function(className) {
	    var i = 0, length = this.length;

	    if (className) {
	        for (; i < length; i++) {
	            if (this[i].classList.contains(className)) {
	                return true;
	            }
	        }
	    }

	    return false;
	};

	fn.html = function(value) {
	    var args = arguments,
	        el;

	    // add HTML into elements
	    if (args.length === 1 && value !== undefined) {
	        return this.empty().append(value);
	    }
	    // get HTML from element
	    else if (args.length === 0 && (el = this[0])) {
	        return el.innerHTML;
	    }

	    return this;
	};

	fn.append = function(appended) {
	    var i = 0,
	        length = this.length,
	        setter;

	    // create jBone object and then append
	    if (isString(appended) && rquickExpr.exec(appended)) {
	        appended = jBone(appended);
	    }
	    // create text node for insertion
	    else if (!isObject(appended)) {
	        appended = document.createTextNode(appended);
	    }

	    appended = appended instanceof jBone ? appended : jBone(appended);

	    setter = function(el, i) {
	        appended.forEach(function(node) {
	            if (i) {
	                el.appendChild(node.cloneNode(true));
	            } else {
	                el.appendChild(node);
	            }
	        });
	    };

	    for (; i < length; i++) {
	        setter(this[i], i);
	    }

	    return this;
	};

	fn.appendTo = function(to) {
	    jBone(to).append(this);

	    return this;
	};

	fn.empty = function() {
	    var i = 0,
	        length = this.length,
	        el;

	    for (; i < length; i++) {
	        el = this[i];

	        while (el.lastChild) {
	            el.removeChild(el.lastChild);
	        }
	    }

	    return this;
	};

	fn.remove = function() {
	    var i = 0,
	        length = this.length,
	        el;

	    // remove all listeners
	    this.off();

	    for (; i < length; i++) {
	        el = this[i];

	        // remove data and nodes
	        delete el.jdata;
	        el.parentNode && el.parentNode.removeChild(el);
	    }

	    return this;
	};

	if (typeof module === "object" && module && typeof module.exports === "object") {
	    // Expose jBone as module.exports in loaders that implement the Node
	    // module pattern (including browserify). Do not create the global, since
	    // the user will be storing it themselves locally, and globals are frowned
	    // upon in the Node module world.
	    module.exports = jBone;
	}
	// Register as a AMD module
	else if (true) {
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	        return jBone;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	    win.jBone = win.$ = jBone;
	} else if (typeof win === "object" && typeof win.document === "object") {
	    win.jBone = win.$ = jBone;
	}

	}(window));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Utils
	 * @param  {window} root
	 * @return {Object}
	 */

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Utils = {

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
	  getWindowWidth: function getWindowWidth() {
	    return window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
	  },
	  getWindowHeigth: function getWindowHeigth() {
	    return window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
	  },
	  getHost: function getHost() {
	    var currentLocation = window.location.hostname;
	    if (this.URLS[currentLocation] === undefined) {
	      currentLocation = this.DEFAULT_URL;
	    }

	    return 'http://' + this.URLS[currentLocation];
	  },
	  getAPIHost: function getAPIHost() {
	    if (window.gfw && window.gfw.config) {
	      return window.gfw.config.GFW_API_HOST;
	    }

	    var currentLocation = window.location.hostname;
	    if (this.API_URLS[currentLocation] === undefined) {
	      currentLocation = this.DEFAULT_URL;
	    }

	    return 'http://' + this.API_URLS[currentLocation];
	  },
	  isLoggedIn: function isLoggedIn(options) {
	    var xhr = new XMLHttpRequest();
	    xhr.open('GET', this.getAPIHost() + '/user', true);
	    xhr.withCredentials = true;
	    xhr.onreadystatechange = function () {
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
	  isSmallScreen: function isSmallScreen() {
	    return this.getWindowWidth() < this.SMALL_BREAKPOINT;
	  },
	  isDefaultHost: function isDefaultHost() {
	    return this.URLS[window.location.hostname] !== undefined;
	  },


	  // Returns a function, that, as long as it continues to be invoked, will not
	  // be triggered. The function will be called after it stops being called for
	  // N milliseconds. If `immediate` is passed, trigger the function on the
	  // leading edge, instead of the trailing.
	  // Source: https://davidwalsh.name/function-debounce
	  debounce: function debounce(func, wait, immediate) {
	    var _this = this,
	        _arguments = arguments;

	    var timeout = void 0;
	    return function () {
	      var context = _this,
	          args = _arguments;
	      var later = function later() {
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

	exports.default = Utils;

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '';
	with (obj) {
	__p += '<div class="wrapper">\n  <div class="m-header">\n    <div class="m-header-scroll">\n      <ul class="m-header-nav -primary">\n        <li class="m-header-item -default shape-home">\n          <a id="btnSubmenuHome" data-submenu="#submenuHome" class="m-header-submenu-btn" href="/">\n            <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-h-home"></use></svg>\n            <svg class="-inactive -desktop-hide"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-h-close"></use></svg>\n            <span>Home</span>\n          </a>\n          <!-- HOME SUBMENU -->\n          <div id="submenuHome" class="m-header-submenu -scroll-bar -home">\n            <div class="m-header-backdrop"></div>\n            <h3 class="-title"><a href="/">Global Forest Watch Home</a></h3>\n            <ul>\n              <li class="-only-mobile">\n                <h3><a href="/">GFW Home</a></h3>\n              </li>          \n              <li>\n                <h3><a href="/explore">Explore</a></h3>\n                <ul>\n                  <li><a href="/map">GFW Interactive Map</a></li>\n                  <li><a href="/countries">Country Profiles &amp; Rankings</a></li>\n                  <li><a class="mobile-friendly" href="http://commodities.globalforestwatch.org/">Commodities</a></li>\n                  <li><a class="mobile-friendly" href="http://fires.globalforestwatch.org/">Fires</a></li>\n                  <li><a class="mobile-friendly" href="http://climate.globalforestwatch.org/">Climate</a></li>\n                  <li><a href="/explore/applications">All applications</a></li>\n                  <li><a class="mobile-friendly" href="http://data.globalforestwatch.org/">Download Data</a></li>\n                </ul>\n              </li>\n              <li>\n                <h3><a href="/stayinformed">Stay informed</a></h3>\n                <ul>\n                  <li><a href="http://blog.globalforestwatch.org/">Blog</a></li>\n                  <li><a href="/stayinformed/crowdsourced-stories">Crowdsourced stories</a></li>\n                  <li><a href="http://www.wri.org/global-forest-watch-stay-informed" target="_blank">Newsletter</a></li>\n                  <li><a href="/stayinformed/publications">Publications</a></li>\n                </ul>\n              </li>\n              <li>\n                <h3><a href="/getinvolved">GET INVOLVED</a></h3>\n                <ul>\n                  <li><a href="/getinvolved/develop-your-own-app">Develop your own app</a></li>\n                  <li><a href="/stories/new">Submit a story</a></li>\n                  <li><a href="/getinvolved/share-data">Share data</a></li>\n                  <li><a href="/getinvolved/help-improve-data">Help improve data</a></li>\n                  <li><a href="https://groups.google.com/forum/#!forum/globalforestwatch" target="_blank">Join the discussion</a></li>\n                  <li><a href="/getinvolved/apply-to-the-small-grants-fund">Apply to the Small Grants Fund</a></li>\n                  <li><a href="/getinvolved/provide-feedback" target="_blank" class="feedback-link">Provide feedback</a></li>\n                  <li><a href="/getinvolved/help-improve-translations">Help improve translations</a></li>\n                </ul>\n              </li>\n              <li>\n                <h3><a href="/howto">How to</a></h3>\n                <ul class="submenu">\n                  <li><a href="/howto/view-data">Visualize data</a></li>\n                  <li><a href="/howto/view-statistics">View statistics</a></li>\n                  <li><a href="/howto/analyze-forest-change">Analyze forest change</a></li>\n                  <li><a href="/howto/subscribe-to-alerts-and-user-stories">Subscribe to alerts and user stories</a></li>\n                  <li><a href="/howto/submit-a-story">Submit a story</a></li>\n                  <li><a href="/howto/odp">Open Data Portal</a></li>\n                  <li><a href="/howto/faqs">FAQs</a></li>\n                  <li><a href="/howto/training-modules">Training modules</a></li>\n                </ul>\n              </li>\n              <li>\n                <h3><a href="/about">About</a></h3>\n                <ul>\n                  <li><a href="/about/about-gfw">About GFW</a></li>\n                  <li><a href="/about/the-gfw-partnership">The GFW partnership</a></li>\n                  <li><a href="/about/videos">Videos</a></li>\n                  <li><a href="/about/awards_and_testimonials">Awards &amp; testimonials</a></li>\n                  <li><a href="/about/data_policy">Data policy</a></li>\n                  <li><a href="/about/contact-us">Contact us</a></li>\n                </ul>\n              </li>\n            </ul>\n          </div>\n        </li>\n        <li class="m-header-item -default shape-apps">\n          <a id="btnSubmenuApps" data-submenu="#submenuApps" data-stopnavigation="true" class="m-header-submenu-btn" href="/">\n            <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-h-apps"></use></svg>\n            <svg class="-inactive -desktop-hide"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-h-close"></use></svg>\n            <span>Apps</span>\n          </a>\n          <!-- APPS SUBMENU -->\n          <div id="submenuApps" class="m-header-submenu -scroll-bar -apps">\n            <div class="m-header-backdrop"></div>\n            <ul class="-scroll-bar">\n              <li class="shape-map"><a href="/map"><div class="app-wrapper"><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-h-map"></use></svg><span>GFW Interactive Map</span></div></a></li>\n              <li class="shape-countries"><a href="/countries"><div class="app-wrapper"><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-h-countries"></use></svg><span>Country Profiles & Rankings</span></div></a></li>\n              <li class="shape-fires"><a class="external-link" target="_blank" href="http://fires.globalforestwatch.org/"><div class="app-wrapper"><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-h-fires"></use></svg><span>Fires</span></div></a></li>\n              <li class="shape-commodities"><a class="external-link" target="_blank" href="http://commodities.globalforestwatch.org/"><div class="app-wrapper"><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-h-commodities"></use></svg><span>Commodities</span></div></a></li>\n              <li class="shape-climate"><a class="external-link" target="_blank" href="http://climate.globalforestwatch.org/"><div class="app-wrapper"><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-h-climate"></use></svg><span>Climate</span></div></a></li>\n              <li class="shape-odp"><a class="external-link" target="_blank" href="http://data.globalforestwatch.org/"><div class="app-wrapper"><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-h-odp"></use></svg><span>Open Data Portal</span></div></a></li>\n              <li class="shape-develop"><a href="/getinvolved/develop-your-own-app"><div class="app-wrapper"><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-h-develop"></use></svg><span>Develop your own app</span></div></a></li>\n              <li class="shape-all-apps"><a href="/explore"><div class="app-wrapper"><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-h-all-apps"></use></svg><span>Explore all apps</span></div></a></li>\n              <li></li>\n            </ul>\n          </div>\n        </li>\n      </ul>\n      <ul class="m-header-nav -secondary">\n        <li class="m-header-item -text shape-blog"><a class="external-link" href="http://blog.globalforestwatch.org/" target="_blank"><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-h-blog"></use></svg><span>Blog</span></a></li>\n        <li class="m-header-item -text shape-howto"><a href="/howto"><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-h-howto"></use></svg><span>How to</span></a></li>\n        <li class="m-header-item -text shape-odp"><a class="external-link" href="http://data.globalforestwatch.org/" target="_blank"><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-h-odp" target="_blank"></use></svg><span><em class="-only-desktop">Open Data Portal</em><em class="-only-mobile">ODP</em></span></a></li>\n        <li class="m-header-item -text shape-mygfw" id="my-gfw-container"></li>\n        <li class="m-header-item -search -only-desktop">\n          <form action="http://www.globalforestwatch.org/search">\n            <button type="submit"><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-h-search"></use></svg></button>\n            <input type="text" name="query" id="search-input" placeholder="Search GFW website">\n          </form>\n        </li>\n        <li class="m-header-item -translate -only-desktop"><div id="googleTranslate"></div></li>\n      </ul>\n    </div>\n    <ul class="m-header-nav -mobile">\n      <li class="m-header-item -default shape-menu">\n        <a id="btnSubmenuMenuMobile" data-submenu="#submenuMenuMobile" class="m-header-submenu-btn" href="/">\n          <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-h-menu"></use></svg>\n          <svg class="-inactive -desktop-hide"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-h-close"></use></svg>\n          <span>Menu</span>\n        </a>\n        <!-- HOME SUBMENU -->\n        <div id="submenuMenuMobile" class="m-header-submenu -scroll-bar -home -menu"></div>\n      </li>\n    </ul>\n  </div>\n</div>\n';

	}
	return __p
	}

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '';
	with (obj) {
	__p += '<svg style="position: absolute; width: 0; height: 0;" width="0" height="0" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n  <defs>\n    <symbol id="icon-h-develop" viewBox="0 0 1024 1024">\n      <title>h-develop</title>\n      <path class="path1" d="M395.443 533.644l-257.385 257.221c-28.925 29.040-30.696 74.086-3.541 101.348l58.441 58.674c27.155 26.669 72.022 24.891 100.947-3.557l257.975-257.813c28.925-29.040 30.106-74.086 3.541-101.348l-3.541-2.964 265.057-264.927 39.55 12.449 113.341-165.357-51.949-52.153-165.29 113.204 11.803 40.304-264.467 264.334-2.951-2.964c-27.155-27.262-72.612-25.484-101.537 3.557zM541.159 420.24l25.701-26.416-11.625-11.673c22.030-83.542 1.222-176.914-63.632-245.712-78.933-82.315-197.633-103.811-293.703-60.198l145.016 147.426c16.522 17.198 17.13 44.225 0.614 60.813l-59.353 58.969c-15.908 16.588-43.445 15.971-59.961-0.617l-148.073-144.972c-43.445 96.443-22.030 214.998 60.575 293.625 40.995 38.7 90.555 62.040 141.958 69.415l152.359-151.724c27.537 27.027 71.59 27.027 99.127 0l11.015 11.056zM619.478 786.351l163.374 159.709c34.266 33.169 90.555 31.327 125.436-3.688l33.652-33.786c35.488-35.63 37.324-91.528 4.286-125.928l-219.663-224.827-23.866 23.956 11.625 11.056c-27.537 27.027-27.537 71.869 0 98.896l-94.841 94.599z"></path>\n    </symbol>\n    <symbol id="icon-h-all-apps" viewbox="0 0 22 22">\n      <title>h-all-apps</title>\n          <g id="Group" sketch:type="MSLayerGroup">\n              <rect id="Rectangle-31" sketch:type="MSShapeGroup" x="0" y="18" width="4" height="4"/>\n              <rect id="Rectangle-31" sketch:type="MSShapeGroup" x="6" y="18" width="4" height="4"/>\n              <rect id="Rectangle-31" sketch:type="MSShapeGroup" x="12" y="18" width="4" height="4"/>\n              <rect id="Rectangle-31" sketch:type="MSShapeGroup" x="18" y="18" width="4" height="4"/>\n              <rect id="Rectangle-31" sketch:type="MSShapeGroup" x="0" y="12" width="4" height="4"/>\n              <rect id="Rectangle-31" sketch:type="MSShapeGroup" x="6" y="12" width="4" height="4"/>\n              <rect id="Rectangle-31" sketch:type="MSShapeGroup" x="12" y="12" width="4" height="4"/>\n              <rect id="Rectangle-31" sketch:type="MSShapeGroup" x="18" y="12" width="4" height="4"/>\n              <rect id="Rectangle-31" sketch:type="MSShapeGroup" x="0" y="6" width="4" height="4"/>\n              <rect id="Rectangle-31" sketch:type="MSShapeGroup" x="6" y="6" width="4" height="4"/>\n              <rect id="Rectangle-31" sketch:type="MSShapeGroup" x="12" y="6" width="4" height="4"/>\n              <rect id="Rectangle-31" sketch:type="MSShapeGroup" x="18" y="6" width="4" height="4"/>\n              <rect id="Rectangle-31" sketch:type="MSShapeGroup" x="0" y="0" width="4" height="4"/>\n              <rect id="Rectangle-31" sketch:type="MSShapeGroup" x="6" y="0" width="4" height="4"/>\n              <rect id="Rectangle-31" sketch:type="MSShapeGroup" x="12" y="0" width="4" height="4"/>\n              <rect id="Rectangle-31" sketch:type="MSShapeGroup" x="18" y="0" width="4" height="4"/>\n        </g>\n    </symbol>\n    <symbol id="icon-h-apps" viewBox="0 0 1024 1024">\n      <title>h-apps</title>\n      <path class="path1" d="M119.821 123.872h315.221v315.221h-315.221v-315.221zM592.657 123.872h315.221v315.221h-315.221v-315.221zM119.821 596.704h315.221v315.221h-315.221v-315.221zM592.657 596.704h315.221v315.221h-315.221v-315.221z"></path>\n      <path class="path2" d="M592.657 439.093h315.263v-315.221h-315.263v315.221zM119.791 439.093h315.221v-315.221h-315.221v315.221zM592.657 911.968h315.263v-315.263h-315.263v315.263zM119.791 911.968h315.221v-315.263h-315.221v315.263z"></path>\n    </symbol>\n    <symbol id="icon-h-blog" viewBox="0 0 1024 1024">\n      <title>h-blog</title>\n      <path class="path1" d="M51.187 810.432v-639.317l805.555 2.76v627.797c0 28.544 22.905 56.802 35.167 70.328h-776.706c-64.016 0-64.016-61.568-64.016-61.568zM895.901 221.205v-93.847h-895.901v671.553c0 0 0 123.136 127.989 123.136h799.79c0 0 96.221-2.005 96.221-123.136v-577.707h-128.099zM468.963 721.813v-337.528h-297.997v337.528h297.997zM768.022 421.44v-39.065h-256.022v39.065h256.022zM512 514.182h256.022v-42.651h-256.022v42.651zM723.025 721.813v-39.531h-211.025v39.531h211.025zM767.915 299.115v-41.86h-597.249v41.86h597.249zM512 571.627h256.022v50.048h-256.022v-50.048z"></path>\n    </symbol>\n    <symbol id="icon-h-climate" viewBox="0 0 1024 1024">\n      <title>h-climate</title>\n      <path class="path1" d="M801.037 700.275c0 0-19.115 28.501-44.416 36.992-50.645 17.067-128.213 2.901-178.005 14.464-82.901 19.243-137.344 136.576-137.344 136.576 21.291 17.28 45.013-35.669 89.813-62.933 80.597-49.024 198.912-40.704 198.912-40.704s-27.264 16.256-85.035 25.173c-57.728 8.875-116.352 39.936-176.555 94.72s-73.003 71.083-73.003 71.083c0 0-22.229-77.013-2.987-130.304s122.88-108.075 211.712-183.552c88.832-75.52 136.235-235.392 72.533-454.528-41.301-142.165-134.699-195.413-134.699-195.413s1.237 42.581-26.667 106.581c-79.957 183.595-251.691 196.907-282.752 442.667-13.824 109.355 62.165 233.941 62.165 233.941 22.613-5.76-21.291-116.949 51.797-291.669 38.571-92.075 90.325-131.755 149.547-199.851s71.083-140.672 71.083-140.672c0 0 19.243 23.68 2.944 87.381-15.659 61.269-147.029 197.333-185.045 285.739-45.909 106.581-45.909 159.872-42.965 263.509 2.901 100.736 39.979 225.024 39.979 225.024l31.104-10.368c0 0 2.944-29.611 36.992-57.557 34.091-27.904 107.093-6.144 142.165-0.171 41.941 7.168 85.845 7.381 155.435-69.589s53.291-186.539 53.291-186.539z"></path>\n    </symbol>\n    <symbol id="icon-h-close" viewBox="0 0 1024 1024">\n      <title>h-close</title>\n      <path class="path1" d="M772.694 903.040l-260.694-260.694-260.694 260.694c-35.976 35.976-94.371 35.976-130.347 0s-35.976-94.371 0-130.347l260.694-260.694-260.694-260.694c-35.976-35.976-35.976-94.371 0-130.347s94.371-35.976 130.347 0l260.694 260.694 260.694-260.694c35.976-35.976 94.371-35.976 130.347 0s35.976 94.371 0 130.347l-260.694 260.694 260.694 260.694c35.976 35.976 35.976 94.371 0 130.347s-94.371 35.976-130.347 0v0z"></path>\n    </symbol>\n    <symbol id="icon-h-commodities" viewBox="0 0 1024 1024">\n      <title>h-commodities</title>\n      <path class="path1" d="M148.924 257.033h164.309v132.523h-226.603l62.293-132.523zM357.393 477.875v-265.003h-216.405l-92.757 209.365v182.869l-30.933 53.419-13.269 40.192h79.957c0 65.408 34.901 130.773 94.080 130.773s107.349-65.365 107.349-130.773h416.085c0 65.408 48.128 130.773 107.307 130.773 58.752 0 106.923-65.365 106.923-130.773h104.235v-220.843h-662.571zM401.596 345.395h530.048v88.32h-530.048v-88.32z"></path>\n    </symbol>\n    <symbol id="icon-h-countries" viewBox="0 0 1024 1024">\n      <title>h-countries</title>\n      <path class="path1" d="M325.893 538.584v117.742l-37.983 37.983v-125.337l37.983-30.381v-148.123c91.151 53.174 148.123-129.135 303.841-7.595v-224.083c-155.718-121.539-212.69 60.77-303.841 7.595v-34.182c15.191 0 26.584-11.393 26.584-26.584s-11.393-26.584-26.584-26.584h-41.781c-15.191 0-26.584 11.393-26.584 26.584 0 11.393 15.191 26.584 26.584 26.584v0 432.976l-56.972 37.983-170.909 338.027 303.841-121.539 41.781-338.027-75.96 56.972z"></path>\n      <path class="path2" d="M432.242 477.818l-45.579 341.825 288.651 125.337-64.567-341.825-178.511-125.337z"></path>\n      <path class="path3" d="M774.067 504.405l-136.73 94.949 60.77 345.623 265.865-155.718-189.904-284.853z"></path>\n    </symbol>\n    <symbol id="icon-h-odp" viewBox="0 0 1024 1024">\n      <title>h-odp</title>\n      <path class="path1" d="M428.773 109.542v294.613h-152.32l224.743 304.641 224.705-304.641h-152.32v-294.613h-144.81zM76.715 908.534h848.926v-349.541h-99.869v249.672h-649.188v-249.672h-99.869v349.541z"></path>\n      <path class="path2" d="M428.765 109.542v294.613h-152.32l224.743 304.641 224.705-304.641h-152.32v-294.613h-144.81zM825.764 558.959v249.712h-649.188v-249.712h-99.869v349.582h848.926v-349.582h-99.869z"></path>\n      <path class="path3" d="M428.744 109.563v294.613h-152.284l224.705 304.641 224.743-304.641h-152.32v-294.613h-144.844zM825.781 558.972v249.672h-649.222v-249.672h-99.869v349.541h848.96v-349.541h-99.869z"></path>\n    </symbol>\n    <symbol id="icon-h-fires" viewBox="0 0 819 1024">\n      <title>h-fires</title>\n      <path class="path1" d="M4.764 637.612c7.332-29.368 24.945-76.8 53.821-142.377 28.836-65.044 44.524-117.391 47.432-157 28.385 52.347 44.524 104.202 48.456 156.058 107.11-132.096 162.406-286.188 166.789-461.783 6.84 4.383 16.138 10.24 27.402 18.063 11.264 7.332 32.276 24.003 62.136 49.439 30.31 25.436 57.221 51.855 80.2 79.217 23.511 27.402 45.015 62.136 65.577 104.202 20.521 42.066 32.768 84.623 37.151 126.73 11.264-25.477 18.104-53.33 21.053-84.664 2.458-30.802-0.983-59.679-10.772-86.098 11.264 8.315 25.928 22.528 44.524 42.066 18.104 19.579 38.625 46.49 61.153 80.241 22.487 33.751 42.557 69.468 60.17 107.643 17.613 37.642 28.836 80.2 33.751 127.181 4.874 47.432 1.475 92.938-9.789 137.462-11.264 43.991-37.192 89.989-77.783 136.97-41.083 46.94-95.887 90.481-164.864 129.638 46.49-92.938 55.788-192.758 27.402-300.36-27.894-107.643-83.64-190.3-166.339-248.013 6.881 30.802 2.949 81.674-11.715 153.108-14.664 70.902-38.175 124.723-70.943 160.932 5.857-45.015 7.332-81.224 4.424-109.568-2.949-27.894-6.881-48.947-12.739-63.119l-10.281-19.087c-8.806 50.872-30.31 101.253-65.536 152.166-18.596 26.378-32.276 50.872-41.083 73.359-9.298 22.487-12.739 51.364-10.772 86.589s13.189 73.359 32.768 113.992c-96.87-54.804-161.915-110.592-195.174-166.83s-42.066-121.324-26.419-196.157z"></path>\n    </symbol>\n    <symbol id="icon-h-home" viewBox="0 0 1024 1024">\n      <title>h-home</title>\n      <path class="path1" d="M499.366 41.105l-458.261 458.224h152.729v458.299h203.665v-305.495h203.703v305.495h203.665v-458.299h152.729l-458.224-458.224z"></path>\n    </symbol>\n    <symbol id="icon-h-howto" viewBox="0 0 1024 1024">\n      <title>h-howto</title>\n      <path class="path1" d="M502.315 19.366v0c-277.163 0-502.315 225.152-502.315 502.315s225.152 502.315 502.315 502.315c277.163 0 502.315-225.152 502.315-502.315s-225.152-502.315-502.315-502.315zM502.315 125.137c218.795 0 396.587 177.749 396.587 396.544s-177.792 396.587-396.587 396.587c-218.795 0-396.587-177.792-396.587-396.587s177.792-396.544 396.587-396.544v0zM433.579 697.724h116.864v112.128h-116.864v-112.128zM368.555 260.22c30.635-19.413 68.736-29.355 113.664-29.355 58.709 0 107.861 14.165 146.475 41.941 39.125 28.288 58.667 69.675 58.667 124.672 0 33.536-8.448 61.824-25.344 84.907-10.069 14.123-29.099 31.957-57.131 53.973l-27.477 20.949c-15.36 12.032-24.875 25.685-30.165 40.875-3.157 9.941-4.736 25.131-4.736 46.080h-106.283c1.579-43.989 5.803-74.368 12.672-90.624 6.869-16.768 23.808-36.139 52.352-58.155l28.032-22.016c9.515-6.827 16.939-14.677 22.741-23.040 10.581-14.165 15.872-29.867 15.872-47.189 0-19.371-5.845-37.205-17.451-53.419-11.648-16.256-32.811-24.619-63.445-24.619-30.165 0-51.84 9.941-64 29.867-12.672 20.395-19.029 40.832-19.029 62.336h-113.152c3.157-73.899 29.099-126.293 77.739-157.184v0z"></path>\n    </symbol>\n    <symbol id="icon-h-map" viewBox="0 0 1024 1024">\n      <title>h-map</title>\n      <path class="path1" d="M184.717 593.056c-0.488 2.843-0.976 7.839-2.233 12.63-8.042 29.647-1.177 56.576 14.701 81.836 8.205 13.079 16.611 26.075 25.221 38.907 18.48 27.618 35.902 55.398 42.402 89.065 3.819 19.859 17.181 34.929 34.603 45.489 11.493 6.945 17.91 4.102 20.429-9.056 2.803-14.418 8.122-26.764 21.363-34.725 3.413-2.071 6.783-5.158 8.65-8.61 7.634-14.052 20.957-16.001 34.765-17.382 15.839-1.626 20.795-5.563 23.394-21.119 2.397-14.378 6.823-26.56 20.063-35.253 15.677-10.315 15.677-21.89 1.138-34.115-11.535-9.626-24.776-16.815-38.217-23.474-13.85-6.823-31.312-10.642-40.572-21.485-19.496-22.662-42.359-40.288-66.607-56.777-0.366-0.244-0.65-0.61-0.976-0.976-8.244-9.585-18.764-15.677-30.867-19.048-12.386-3.413-24.044-7.921-33.792-16.815-4.67-4.304-10.681-6.539-16.977-8.327-8.244-2.355-16.693-4.67-23.394-10.642-1.949-1.748-4.184-5.036-6.783-3.331-3.532 2.315-0.933 5.847 0.488 8.488 7.271 13.323 12.591 27.17 13.201 44.717zM491.352 133.795c-12.185 1.098-27.091 6.295-40.859 14.335-7.595 4.426-11.413 12.307-11.413 20.631 0 21.567-8.162 40.615-16.165 59.864-2.071 4.996-4.142 10.154-5.118 15.394-1.382 7.271 1.504 13.402 7.717 17.544 6.173 4.102 11.453 1.055 15.921-3.087 13.443-12.508 28.997-21.646 45.489-29.485 8.327-3.941 16.123-9.585 18.438-18.926 3.98-15.758 7.595-31.599 11.209-47.438 3.819-16.937-5.929-28.634-25.221-28.835zM44.926 508.538c0 262.245 209.283 474.816 467.426 474.816s467.383-212.571 467.383-474.816c0-262.202-209.244-474.816-467.383-474.816s-467.426 212.614-467.426 474.816zM104.302 508.538c0-28.225 2.721-55.804 8-82.486 3.331 30.705 19.17 52.068 31.721 74.69 0.445 0.772 1.138 1.382 1.787 2.031 2.275 2.275 4.792 4.834 8.244 3.776 3.413-1.055 4.184-4.508 4.63-7.756 1.504-10.276-1.787-18.804-9.626-25.587-4.142-3.575-8.65-7.027-8.976-13.079-0.811-14.986 0.772-30.54 12.914-39.922 12.672-9.748 23.678 0.976 33.993 8.528 10.721 7.878 17.138 6.661 22.339-5.484 4.59-10.803 10.642-20.063 20.429-26.603 10.599-7.067 21.363-13.89 31.962-20.917 10.032-6.619 20.469-11.575 33.060-10.803 8.61 0.488 15.107-4.102 18.48-11.697 5.319-12.063 14.256-19.536 26.398-24.044 10.154-3.776 17.382-11.413 17.748-22.174 0.689-20.307-2.721-39.883-18.844-54.666-7.677-7.067-15.516-7.107-22.824 0.366-5.727 5.89-10.764 12.386-16.571 18.114-5.606 5.563-12.429 11.169-20.509 6.579-7.39-4.224-8.366-12.835-7.229-20.673 2.519-17.016 10.154-30.906 26.237-39.071 11.779-5.969 23.434-12.103 35.091-18.316 3.169-1.665 7.229-3.492 6.701-7.756-0.61-4.63-5.362-4.020-8.693-4.956-13.89-3.898-18.236-11.657-14.174-25.465 0.894-3.047 2.355-5.929 3.126-9.016 0.894-3.532 3.087-7.351 1.583-10.843 56.981-30.784 122.003-48.209 191.047-48.209 35.863 0 70.627 4.712 103.769 13.564 1.989 2.519 5.24 4.386 8 6.012 18.804 11.047 31.028 29.241 47.477 42.847 4.184 3.453 6.741 8.449 7.512 14.174 2.071 15.595-5.075 22.256-20.387 18.602-6.173-1.461-12.264-3.453-18.52-4.548-14.662-2.519-23.8 4.996-23.717 19.941 0.082 13.686-1.055 27.008-4.712 40.371-3.126 11.535 1.177 21.524 11.413 28.347 4.184 2.76 8.406 5.441 12.835 7.756 7.677 4.063 9.056 9.544 4.508 16.772-2.437 3.819-4.468 7.961-7.271 11.535-7.512 9.626-14.701 10.477-24.571 3.087-5.441-4.102-10.52-8.732-16.001-12.752-6.051-4.426-12.672-6.012-18.48 0.040-6.091 6.335-5.606 13.606 0.528 19.374 11.819 11.169 18.52 25.788 27.496 38.827 9.016 13.118 8.205 15.717-5.118 25.181-19.008 13.524-19.087 30.867 0.528 43.497 7.027 4.548 8.772 7.799 3.087 14.662-9.87 11.859-18.682 24.611-28.512 36.512-16.855 20.469-26.804 43.131-24.166 67.379 0 6.457 0.284 10.114-0.082 13.728-3.697 39.437 41.752 76.639 76.557 69.978 17.544-3.37 34.359-7.433 50.848-14.134 21.485-8.732 38.3 1.016 43.131 23.474 1.504 7.027 1.626 14.906 7.149 20.268 17.099 16.611 16.815 36.268 10.236 56.82-6.091 19.087-5.362 38.666-4.346 58.119 0.933 18.114 12.142 26.032 27.17 19.209 29.119-13.201 54.749-30.784 68.395-61.407 4.834-10.843 10.52-21.363 18.194-30.339 21.689-25.383 28.713-54.828 27.292-87.442-0.772-17.626-0.854-35.292 2.153-52.961 3.736-21.973 6.417-44.229-5.646-65.021-3.898-6.701-0.65-12.264 3.614-17.382 9.504-11.371 15.473-24.532 19.819-38.544 2.76-8.934 3.169-17.709-1.909-26.237-10.071-16.894-9.992-16.977 8-25.221l3.575-1.705c11.859 38.907 18.194 80.214 18.194 123.061 0 229.469-182.681 415.48-408.047 415.48s-408.047-186.011-408.047-415.48zM678.987 275.373c-1.504 7.473-5.727 11.453-13.28 11.413-5.075-0.040-10.114-1.705-8.406-7.634 1.949-6.661 3.697-15.758 12.063-16.409 6.863-0.567 8.327 7.027 9.626 12.63zM678.581 370.206c14.986 2.965 29.241 8.976 45.080 9.22 19.414 0.326 38.787 3.37 58.159 4.67 9.138 0.65 17.953 1.504 20.024 12.264 1.909 9.992-2.153 19.658-11.697 22.095-22.946 5.807-46.096 17.587-69.978 9.748-25.669-8.406-49.103-2.843-73.186 4.063-3.004 0.854-6.173 1.626-9.3 1.787-6.823 0.284-15.311 0.772-19.087-4.63-3.736-5.402 4.508-9.748 6.863-14.866 2.843-6.213 6.213-12.103 9.342-18.194 9.098-17.748 25.343-23.434 43.781-26.154z"></path>\n    </symbol>\n    <symbol id="icon-h-menu" viewBox="0 0 1024 1024">\n      <title>h-menu</title>\n      <path class="path1" d="M73.848 128.616h876.306v175.264h-876.306v-175.264zM73.848 420.717h876.306v175.264h-876.306v-175.264zM73.848 712.819h876.306v175.264h-876.306v-175.264z"></path>\n    </symbol>\n    <symbol id="icon-h-mygfw" viewBox="0 0 1024 1024">\n      <title>h-mygfw</title>\n      <path class="path1" d="M402.657 629.443h191.303c82.197-73.64 83.018-193.658 83.018-194.951l-0.118-155.681c-13.809-62.696-97.652-118.955-178.551-118.955-80.941 0.038-164.78 56.377-178.594 119.036l-0.118 155.681c0 1.137 1.686 121.782 83.059 194.875v0zM132.613 891.366h731.358v-10.788l-266.161-159.721h-198.995l-266.203 159.801v10.713zM882.292 982.822h-767.925c-40.331 0-73.173-32.837-73.173-73.173v-80.743l270.479-162.387c-82.546-98.672-83.49-225.829-83.49-232.031l0.826-168.036c21.029-118.408 156.229-197.933 269.299-197.933h0.156c113.033 0 248.114 79.45 269.106 197.858l0.708 7.924 0.118 160.113c0 6.2-0.943 133.397-83.452 232.106l270.436 162.269v80.861c0 40.331-32.799 73.173-73.093 73.173v0z"></path>\n    </symbol>\n    <symbol id="icon-h-plus" viewBox="0 0 1024 1024">\n      <title>h-plus</title>\n      <path class="path1" d="M938.667 597.333h-341.333v341.333c0 47.104-38.229 85.333-85.333 85.333s-85.333-38.229-85.333-85.333v-341.333h-341.333c-47.104 0-85.333-38.229-85.333-85.333s38.229-85.333 85.333-85.333h341.333v-341.333c0-47.104 38.229-85.333 85.333-85.333s85.333 38.229 85.333 85.333v341.333h341.333c47.104 0 85.333 38.229 85.333 85.333s-38.229 85.333-85.333 85.333v0z"></path>\n    </symbol>\n    <symbol id="icon-h-search" viewBox="0 0 1024 1024">\n      <title>h-search</title>\n      <path class="path1" d="M662.066 800.005c4.055 5.192 8.657 10.389 13.854 14.991l141.386 128.718c34.627 31.714 92.354 33.447 129.855 2.284 40.376-32.899 43.283-90.584 3.465-126.353l-156.42-142.566c47.928-68.078 76.183-151.185 76.183-240.627 0-234.335-193.879-408.616-423.569-390.122-219.891 17.866-391.302 206.59-391.302 422.427s171.411 391.265 391.302 391.265c77.915 0 151.775-21.92 215.247-60.012zM164.004 467.61c0-159.88 124.663-299.539 284.543-312.797 166.766-13.854 307.605 115.416 307.605 288.56 0 173.696-140.834 313.94-307.605 313.94-159.88 0-284.543-129.855-284.543-289.697z"></path>\n    </symbol>\n    <symbol id="icon-h-facebook" viewBox="0 0 1024 1024">\n      <title>facebook</title>\n      <path class="path1" d="M575.872 1024h-191.872v-512h-128v-176.448l128-0.064-0.192-103.936c0-143.936 39.040-231.552 208.576-231.552h141.184v176.512h-88.256c-66.048 0-69.184 24.64-69.184 70.656l-0.256 88.32h158.72l-18.688 176.448-139.84 0.064-0.128 512z"></path>\n    </symbol>\n    <symbol id="icon-h-googleplus" viewBox="0 0 1024 1024">\n      <title>googleplus</title>\n      <path class="path1" d="M559.040 64c0 0-200.96 0-267.968 0-120.128 0-233.152 91.008-233.152 196.416 0 107.712 81.856 194.688 204.096 194.688 8.512 0 16.768-0.192 24.832-0.768-7.936 15.168-13.632 32.32-13.632 50.048 0 29.952 16.128 54.208 36.48 74.048-15.36 0-30.272 0.448-46.464 0.448-148.8 0-263.296 94.784-263.296 193.024 0 96.768 125.568 157.312 274.304 157.312 169.6 0 263.296-96.256 263.296-193.024 0-77.632-22.912-124.096-93.696-174.144-24.192-17.152-70.528-58.816-70.528-83.328 0-28.736 8.192-42.88 51.456-76.672 44.288-34.624 75.648-83.328 75.648-139.904 0-67.392-30.016-133.12-86.4-154.752h84.928l59.968-43.328zM465.472 719.488c2.112 8.96 3.264 18.176 3.264 27.648 0 78.208-50.368 139.328-194.944 139.328-102.848 0-177.088-65.088-177.088-143.296 0-76.672 92.096-140.416 194.944-139.328 24 0.256 46.336 4.096 66.688 10.688 55.808 38.848 95.872 60.736 107.2 105.024zM300.8 427.776c-69.056-2.048-134.656-77.248-146.56-167.872s34.368-160.064 103.36-158.016c68.992 2.048 134.656 74.816 146.56 165.44s-34.368 162.432-103.424 160.384zM832 256v-192h-64v192h-192v64h192v192h64v-192h192v-64z"></path>\n    </symbol>\n    <symbol id="icon-h-twitter" viewBox="0 0 1024 1024">\n      <title>twitter</title>\n      <path class="path1" d="M1024 194.432c-37.696 16.704-78.144 28.032-120.64 33.088 43.392-25.984 76.672-67.2 92.352-116.224-40.576 24.064-85.568 41.536-133.44 51.008-38.336-40.832-92.928-66.368-153.344-66.368-116.032 0-210.112 94.080-210.112 210.048 0 16.448 1.856 32.512 5.44 47.872-174.592-8.768-329.408-92.416-433.024-219.52-18.112 31.040-28.416 67.136-28.416 105.6 0 72.896 37.056 137.216 93.44 174.848-34.432-1.088-66.816-10.56-95.168-26.304 0 0.896 0 1.728 0 2.624 0 101.76 72.448 186.688 168.512 206.016-17.6 4.8-36.16 7.36-55.36 7.36-13.568 0-26.688-1.344-39.552-3.776 26.752 83.456 104.32 144.192 196.224 145.92-71.872 56.32-162.496 89.92-260.928 89.92-16.96 0-33.664-1.024-50.112-2.944 92.992 59.584 203.392 94.4 322.048 94.4 386.432 0 597.76-320.128 597.76-597.76 0-9.088-0.192-18.176-0.64-27.2 41.088-29.632 76.672-66.624 104.832-108.736z"></path>\n    </symbol>\n  </defs>\n</svg>';

	}
	return __p
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _loginButton = __webpack_require__(12);

	var _loginButton2 = _interopRequireDefault(_loginButton);

	var _logoutButton = __webpack_require__(13);

	var _logoutButton2 = _interopRequireDefault(_logoutButton);

	var _loginModal = __webpack_require__(14);

	var _loginModal2 = _interopRequireDefault(_loginModal);

	var _facade = __webpack_require__(5);

	var _facade2 = _interopRequireDefault(_facade);

	var _utils = __webpack_require__(8);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var MyGfw = function () {
	  function MyGfw() {
	    _classCallCheck(this, MyGfw);
	  }

	  _createClass(MyGfw, [{
	    key: 'init',
	    value: function init() {
	      this.$el = (0, _facade2.default)('#my-gfw-container');
	      if (!this.$el) {
	        throw new Error('element #footerGfw doesn\'t exist');
	      }
	      this.checkStatus();
	    }

	    // Check if the user is logged

	  }, {
	    key: 'checkStatus',
	    value: function checkStatus() {
	      _utils2.default.isLoggedIn({
	        success: function () {
	          this.loggedIn = true;
	          this.render();
	        }.bind(this),
	        failure: function () {
	          this.loggedIn = false;
	          this.render();
	        }.bind(this)
	      });
	    }

	    // Render different templates depending on the loggin state

	  }, {
	    key: 'render',
	    value: function render() {
	      var template = !!this.loggedIn ? _loginButton2.default : _logoutButton2.default;
	      this.$el.html(template);

	      this.initEvents();
	      this.initLinks();

	      return this;
	    }
	  }, {
	    key: 'initEvents',
	    value: function initEvents() {
	      var $openModal = this.$el.find('#my-gfw-open-modal');
	      $openModal.on('click', this.showModal.bind(this));
	    }
	  }, {
	    key: 'initLinks',
	    value: function initLinks() {
	      var $signout = this.$el.find('#my-gfw-sign-out');
	      $signout.attr('href', _utils2.default.getAPIHost() + $signout.attr('href'));
	    }
	  }, {
	    key: 'showModal',
	    value: function showModal(e) {
	      e && event.stopPropagation() && event.preventDefault();
	      var modalView = new _loginModal2.default();
	      modalView.init();
	    }
	  }]);

	  return MyGfw;
	}();

	exports.default = MyGfw;

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '';
	with (obj) {
	__p += '<a href="/my_gfw" class="my-gfw-loggedin">\n  <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-h-mygfw"></use></svg>\n  <span>My GFW</span>\n</a>\n<ul class="submenu">\n  <li><a href="/my_gfw/subscriptions">My Subscriptions</a></li>\n  <li><a href="/my_gfw">My Profile</a></li>\n  <li><a href="/user/sign_out" id="my-gfw-sign-out">Log Out</a></li>\n</ul>\n';

	}
	return __p
	}

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '';
	with (obj) {
	__p += '<a href="#" id="my-gfw-open-modal">\n  <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-h-mygfw"></use></svg>\n  <span>Log in <em class="-only-desktop">to My GFW</em></span>\n</a>\n\n<div class="my-gfw-modal" id="my-gfw-modal">\n</div>\n';

	}
	return __p
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var loginModalTpl = __webpack_require__(15);
	var $gfwdom = __webpack_require__(5);
	var utils = __webpack_require__(8);

	/**
	 * User
	 * @param  {window} root
	 * @return {Class}
	 */
	module.exports = function () {

	  this.init = function () {
	    this.$el = $gfwdom('#my-gfw-modal');
	    if (!this.$el) {
	      throw new Error('element #footerGfw doesn\'t exist');
	    }
	    this.render();
	  };

	  this.render = function () {
	    this.$el.html(loginModalTpl());
	    // If you don't add this clas you won't see anything
	    this.$el.addClass('is-active');

	    this.initEvents();
	    this.initLinks();

	    return this;
	  };

	  // Events for closing the modal
	  this.initEvents = function () {
	    var $modalClose = this.$el.find('.my-gfw-modal-close');
	    var $modalBackdrop = this.$el.find('.my-gfw-modal-backdrop');

	    $modalClose.on('click', this.hideModal.bind(this));
	    $modalBackdrop.on('click', this.hideModal.bind(this));
	  };

	  // Set the APIURL to the signin links
	  this.initLinks = function () {
	    var $signin = this.$el.find('.my-gfw-sign-in');

	    $signin.forEach(function (v) {
	      $gfwdom(v).attr('href', utils.getAPIHost() + $gfwdom(v).attr('href'));
	    });
	  };

	  this.hideModal = function (e) {
	    e && event.stopPropagation() && event.preventDefault();
	    this.$el.removeClass('is-active');
	    this.$el.html('');
	  };

	  return this;
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '';
	with (obj) {
	__p += '<div class="my-gfw-modal-backdrop"></div>\n<div class="my-gfw-modal-window">\n  <a href="#" class="my-gfw-modal-close" id="my-gfw-modal-close">\n    <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#shape-close"></use></svg>\n  </a>\n\n  <div class="my-gfw-content">\n    <header>\n      <h2>Log in</h2>\n      <h3>\n        Log in is required so you can view, manage, and delete your\n        subscriptions. Questions? <a href="mailto:gfw@wri.org">Contact us</a>.\n      </h3>\n    </header>\n\n    <ul class="my-gfw-authentication">\n      <li class="my-gfw-sign-in-twitter">\n        <a href="/auth/twitter" class="my-gfw-sign-in">\n          <svg class="icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-h-twitter"></use></svg>\n          Log in with Twitter\n        </a>\n      </li>\n\n      <li class="my-gfw-sign-in-facebook">\n        <a href="/auth/facebook" class="my-gfw-sign-in">\n          <svg class="icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-h-facebook"></use></svg>\n          Log in with Facebook\n        </a>\n      </li>\n\n      <li class="my-gfw-sign-in-google">\n        <a href="/auth/google" class="my-gfw-sign-in">\n          <svg class="icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-h-googleplus"></use></svg>\n          Log in with Google\n        </a>\n      </li>\n    </ul>\n  </div>\n</div>\n';

	}
	return __p
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _facade = __webpack_require__(5);

	var _facade2 = _interopRequireDefault(_facade);

	var _utils = __webpack_require__(8);

	var _utils2 = _interopRequireDefault(_utils);

	var _navigation = __webpack_require__(17);

	var _navigation2 = _interopRequireDefault(_navigation);

	var _global = __webpack_require__(18);

	var _global2 = _interopRequireDefault(_global);

	var _climate = __webpack_require__(19);

	var _climate2 = _interopRequireDefault(_climate);

	var _howto = __webpack_require__(20);

	var _howto2 = _interopRequireDefault(_howto);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var navigationMenus = {
	  'default': _global2.default,
	  'localhost': _global2.default,
	  'climate.globalforestwatch.org': _climate2.default,
	  'howto.globalforestwatch.org': _howto2.default
	};

	/**
	 * Navigation
	 * @param  {window} root
	 * @return {Class}
	 */

	var Navigation = function () {
	  function Navigation() {
	    _classCallCheck(this, Navigation);

	    this.$el = (0, _facade2.default)('#submenuMenuMobile');
	    if (!this.$el) {
	      throw new Error('element #submenuMenuMobile doesn\'t exist');
	    }
	    this.render();
	  }

	  _createClass(Navigation, [{
	    key: 'render',
	    value: function render() {
	      var menu = navigationMenus[location.hostname] || navigationMenus['default'];
	      this.$el.html((0, _navigation2.default)({ menu: menu }));
	    }
	  }]);

	  return Navigation;
	}();

	exports.default = Navigation;

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '', __j = Array.prototype.join;
	function print() { __p += __j.call(arguments, '') }
	with (obj) {
	__p += '<div class="m-header-backdrop"></div>\n<ul>\n  ';
	 for ( var i = 0; i < menu.length; i++ ) { ;
	__p += '\n    <li>\n      <h3>\n        ';
	 if (!!menu[i].link) { ;
	__p += '\n          <a href="' +
	((__t = ( menu[i].link )) == null ? '' : __t) +
	'">' +
	((__t = ( menu[i].name )) == null ? '' : __t) +
	'</a>\n        ';
	} else {;
	__p += '\n          <span>' +
	((__t = ( menu[i].name )) == null ? '' : __t) +
	'</span>\n        ';
	};
	__p += '\n      </h3>\n      ';
	 if(!!menu[i].submenu && !!menu[i].submenu.length) { ;
	__p += '\n        <ul>\n          ';
	 for ( var j = 0; j < menu[i].submenu.length; j++ ) { ;
	__p += '\n            <li>\n              <a class  ="' +
	((__t = ( (!!menu[i].submenu[j].classname ? menu[i].submenu[j].classname : ""))) == null ? '' : __t) +
	'"\n                 target ="' +
	((__t = ( (!!menu[i].submenu[j].target ? menu[i].submenu[j].target : ""))) == null ? '' : __t) +
	'"\n                 href="' +
	((__t = ( menu[i].submenu[j].link )) == null ? '' : __t) +
	'">\n                  ' +
	((__t = ( menu[i].submenu[j].name )) == null ? '' : __t) +
	'\n              </a>\n            </li>\n          ';
	 } ;
	__p += '\n        </ul>\n      ';
	 } ;
	__p += '\n    </li>\n  ';
	 } ;
	__p += '\n</ul>\n';

	}
	return __p
	}

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = [
		{
			"name": "Home",
			"link": "/"
		},
		{
			"name": "Explore",
			"link": "/explore",
			"submenu": [
				{
					"name": "GFW Interactive Map",
					"link": "/map"
				},
				{
					"name": "Country Profiles &amp; Rankings",
					"link": "/countries"
				},
				{
					"name": "Commodities",
					"link": "http://commodities.globalforestwatch.org/",
					"classname": "mobile-friendly"
				},
				{
					"name": "Fires",
					"link": "http://fires.globalforestwatch.org/",
					"classname": "mobile-friendly"
				},
				{
					"name": "Climate",
					"link": "http://climate.globalforestwatch.org/",
					"classname": "mobile-friendly"
				},
				{
					"name": "All applications",
					"link": "/explore"
				},
				{
					"name": "Open Data Portal",
					"link": "http://data.globalforestwatch.org/",
					"classname": "mobile-friendly"
				}
			]
		},
		{
			"name": "Stay informed",
			"link": "/stayinformed",
			"submenu": [
				{
					"name": "Blog",
					"link": "http://blog.globalforestwatch.org/"
				},
				{
					"name": "Crowdsourced stories",
					"link": "/stayinformed/crowdsourced-stories"
				},
				{
					"name": "Newsletter",
					"link": "http://www.wri.org/global-forest-watch-stay-informed",
					"target": "_blank"
				},
				{
					"name": "Publications",
					"link": "/stayinformed/publications"
				}
			]
		},
		{
			"name": "Get Involved",
			"link": "/getinvolved",
			"submenu": [
				{
					"name": "Develop your own app",
					"link": "/getinvolved/develop-your-own-app"
				},
				{
					"name": "Submit a story",
					"link": "/stories/new"
				},
				{
					"name": "Share data",
					"link": "/getinvolved/share-data"
				},
				{
					"name": "Help improve data",
					"link": "/getinvolved/help-improve-data"
				},
				{
					"name": "Join the discussion",
					"link": "https://groups.google.com/forum/#!forum/globalforestwatch",
					"target": "_blank"
				},
				{
					"name": "Apply to the Small Grants Fund",
					"link": "/getinvolved/apply-to-the-small-grants-fund"
				},
				{
					"name": "Provide feedback",
					"link": "/getinvolved/provide-feedback",
					"classname": "feedback-link"
				},
				{
					"name": "Help improve translations",
					"link": "/getinvolved/help-improve-translations"
				}
			]
		},
		{
			"name": "How to",
			"link": "/howto",
			"submenu": [
				{
					"name": "Visualize data",
					"link": "/howto/view-data"
				},
				{
					"name": "View statistics",
					"link": "/howto/view-statistics"
				},
				{
					"name": "Analyze forest change",
					"link": "/howto/analyze-forest-change"
				},
				{
					"name": "Subscribe to alerts and user stories",
					"link": "/howto/subscribe-to-alerts-and-user-stories"
				},
				{
					"name": "Submit a story",
					"link": "/howto/submit-a-story"
				},
				{
					"name": "Open Data Portal",
					"link": "/howto/odp"
				},
				{
					"name": "FAQs",
					"link": "/howto/faqs"
				},
				{
					"name": "Training modules",
					"link": "/howto/training-modules"
				}
			]
		},
		{
			"name": "About",
			"link": "/about",
			"submenu": [
				{
					"name": "About GFW",
					"link": "/about/about-gfw"
				},
				{
					"name": "The GFW partnership",
					"link": "/about/the-gfw-partnership"
				},
				{
					"name": "Videos",
					"link": "/about/videos"
				},
				{
					"name": "Awards &amp; testimonials",
					"link": "/about/awards_and_testimonials"
				},
				{
					"name": "Data policy",
					"link": "/about/data_policy"
				},
				{
					"name": "Contact us",
					"link": "/about/contact-us"
				}
			]
		}
	];

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = [
		{
			"name": "Home",
			"link": "/"
		},
		{
			"name": "Map",
			"link": "/map"
		},
		{
			"name": "Country profiles",
			"link": "/countries"
		},
		{
			"name": "Country comparisons",
			"link": "/compare-countries"
		},
		{
			"name": "Pantropical overview",
			"link": "/pantropical"
		},
		{
			"name": "About",
			"link": "/about"
		}
	];

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = [
		{
			"name": "Home",
			"link": "/"
		},
		{
			"name": "Search by theme",
			"link": "",
			"submenu": [
				{
					"name": "Visualize data",
					"link": "/gfw-howto/themes/visualize-data"
				},
				{
					"name": "View statistics",
					"link": "/gfw-howto/themes/view-statistics"
				},
				{
					"name": "Analyze data",
					"link": "/gfw-howto/themes/analyze-data"
				},
				{
					"name": "Suscribe to alerts",
					"link": "/gfw-howto/themes/suscribe-to-alerts"
				},
				{
					"name": "Submit a story",
					"link": "/gfw-howto/themes/submit-a-story"
				},
				{
					"name": "Tutorial videos",
					"link": "/gfw-howto/themes/tutorial-videos"
				},
				{
					"name": "Webinars",
					"link": "/gfw-howto/themes/webinars"
				},
				{
					"name": "Training modules",
					"link": "/gfw-howto/themes/training-modules"
				},
				{
					"name": "FAQ's",
					"link": "/gfw-howto/faqs"
				}
			]
		},
		{
			"name": "Search by app",
			"link": "",
			"submenu": [
				{
					"name": "Gfw",
					"link": "/gfw-howto/apps/gfw"
				},
				{
					"name": "Climate",
					"link": "/gfw-howto/apps/climate"
				},
				{
					"name": "Fires",
					"link": "/gfw-howto/apps/fires"
				},
				{
					"name": "Commodities",
					"link": "/gfw-howto/apps/commodities"
				}
			]
		}
	];

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _lory = __webpack_require__(22);

	var _facade = __webpack_require__(5);

	var _facade2 = _interopRequireDefault(_facade);

	var _utils = __webpack_require__(8);

	var _utils2 = _interopRequireDefault(_utils);

	var _footer = __webpack_require__(23);

	var _footer2 = _interopRequireDefault(_footer);

	var _footerIcons = __webpack_require__(24);

	var _footerIcons2 = _interopRequireDefault(_footerIcons);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var sliderPause = 5000;
	var sliderOptions = {
	  infinite: 5,
	  slidesToScroll: 5,
	  slideSpeed: 500
	};
	var slideMinWidth = 130;
	var maxSlidesAtOnce = 5;

	/**
	 * Footer
	 * @param  {window} root
	 * @return {Class}
	 */

	var Footer = function () {
	  function Footer() {
	    _classCallCheck(this, Footer);

	    this.el = document.getElementById('footerGfw');
	    if (!this.el) {
	      throw new Error('element #footerGfw doesn\'t exist');
	    }

	    /* Number of slides currently shown at once */
	    this.currentSlidesAtOnce = 5;

	    /* We save the handlers binded to the current context to be able to use them
	     * later. We can't bind them when assigning them to events because calling
	     * "bind" returns a new function of which we'd loose the reference that we'd
	     * further need to remove them. */
	    this.handlers = {
	      cancelTimer: this.cancelTimer.bind(this),
	      initTimer: this.initTimer.bind(this)
	    };

	    this.render();
	    this.initListeners();
	  }

	  _createClass(Footer, [{
	    key: 'render',
	    value: function render() {
	      this.el.innerHTML = (0, _footer2.default)() + (0, _footerIcons2.default)();

	      this.sliderContainer = document.getElementById('my-gfw-slider');
	      this.slidesContainer = document.querySelector('.frame');

	      /* DO NOT OVERRIDE THE VARIABLE BELOW: see destroySlider for information */
	      this.slides = document.querySelectorAll('.js_slide');

	      this.initSlider();
	      this.updateSlider();

	      return this;
	    }
	  }, {
	    key: 'initListeners',
	    value: function initListeners() {
	      (0, _facade2.default)(window).on('resize', _utils2.default.debounce(this.updateSlider.bind(this), 100));
	    }

	    /**
	     * Method to start Lory slider
	     */

	  }, {
	    key: 'initSlider',
	    value: function initSlider() {
	      /* We prevent issues by resetting the slider to its original state */
	      if (this.slider) {
	        this.cancelTimer();
	        this.destroySlider();

	        this.sliderContainer.removeEventListener('before.lory.slide', this.handlers.cancelTimer);
	        this.sliderContainer.removeEventListener('after.lory.slide', this.handlers.initTimer);
	        this.sliderContainer.removeEventListener('mouseover', this.handlers.cancelTimer);
	        this.sliderContainer.removeEventListener('mouseout', this.handlers.initTimer);
	      }

	      this.slider = (0, _lory.lory)(this.sliderContainer, sliderOptions);

	      this.sliderContainer.addEventListener('before.lory.slide', this.handlers.cancelTimer);
	      this.sliderContainer.addEventListener('after.lory.slide', this.handlers.initTimer);
	      this.sliderContainer.addEventListener('mouseover', this.handlers.cancelTimer);
	      this.sliderContainer.addEventListener('mouseout', this.handlers.initTimer);

	      this.initTimer();
	    }

	    /* Return true if the number of slides that can be displayed at once can be
	     * updated from its previous value */

	  }, {
	    key: 'isSlidesAtOnceUpdated',
	    value: function isSlidesAtOnceUpdated(fittingSlidesAtOnce) {
	      return fittingSlidesAtOnce !== this.currentSlidesAtOnce && !_utils2.default.isSmallScreen() && (fittingSlidesAtOnce <= maxSlidesAtOnce || fittingSlidesAtOnce > maxSlidesAtOnce && this.currentSlidesAtOnce < maxSlidesAtOnce);
	    }

	    /**
	     * Update the number of slides shown at once and their sizes so we can't see
	     * some logos cut
	     */

	  }, {
	    key: 'updateSlider',
	    value: function updateSlider() {
	      var fittingSlidesAtOnce = ~ ~(this.slidesContainer.getBoundingClientRect().width / slideMinWidth);

	      if (this.isSlidesAtOnceUpdated(fittingSlidesAtOnce)) {
	        this.currentSlidesAtOnce = Math.min(fittingSlidesAtOnce, maxSlidesAtOnce);

	        sliderOptions.infinite = this.currentSlidesAtOnce;
	        sliderOptions.slidesToScroll = this.currentSlidesAtOnce;

	        for (var i = 0, j = this.slides.length; i < j; i++) {
	          this.slides[i].style.width = 100 / this.currentSlidesAtOnce + '%';
	        }
	      }

	      this.initSlider();
	    }

	    /* Destroy the Lory instance and reset the DOM as it was before Lory's
	     * instanciation */

	  }, {
	    key: 'destroySlider',
	    value: function destroySlider() {
	      if (!this.slides || !this.slider) return;

	      /* Because Lory copies some of the slides to provide the animation, we
	       * need to ensure to remove them before initializing once again so we don't
	       * have a leak */
	      var slides = [].concat(_toConsumableArray(this.slides));
	      [].concat(_toConsumableArray(document.querySelectorAll('.js_slide'))).filter(function (slide) {
	        if (! ~slides.indexOf(slide)) {
	          slide.parentNode.removeChild(slide);
	        }
	      });

	      this.slider.destroy();
	    }

	    /**
	     * This method is used to move lory slider
	     */

	  }, {
	    key: 'initTimer',
	    value: function initTimer() {
	      this.cancelTimer(); // Ensure remove timer at begining
	      if (!this.sliderTimer) {
	        this.sliderTimer = setInterval(this.slider.next.bind(this.slider), sliderPause);
	      }
	    }

	    /**
	     * This method is used to remove movement of lory slider
	     */

	  }, {
	    key: 'cancelTimer',
	    value: function cancelTimer() {
	      if (this.sliderTimer) {
	        clearInterval(this.sliderTimer);
	        this.sliderTimer = null;
	      }
	    }
	  }]);

	  return Footer;
	}();

	exports.default = Footer;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define([], factory);
		else {
			var a = factory();
			for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
		}
	})(this, function() {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};

	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {

	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;

	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};

	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;

	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}


	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;

	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;

	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";

	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = __webpack_require__(1);


	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* globals jQuery */

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		exports.lory = lory;

		var _detectPrefixes = __webpack_require__(2);

		var _detectPrefixes2 = _interopRequireDefault(_detectPrefixes);

		var _dispatchEvent = __webpack_require__(3);

		var _dispatchEvent2 = _interopRequireDefault(_dispatchEvent);

		var _defaults = __webpack_require__(5);

		var _defaults2 = _interopRequireDefault(_defaults);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		var slice = Array.prototype.slice;

		function lory(slider, opts) {
		    var position = undefined;
		    var slidesWidth = undefined;
		    var frameWidth = undefined;
		    var slides = undefined;

		    /**
		     * slider DOM elements
		     */
		    var frame = undefined;
		    var slideContainer = undefined;
		    var prevCtrl = undefined;
		    var nextCtrl = undefined;
		    var prefixes = undefined;
		    var transitionEndCallback = undefined;

		    var index = 0;
		    var options = {};

		    /**
		     * if object is jQuery convert to native DOM element
		     */
		    if (typeof jQuery !== 'undefined' && slider instanceof jQuery) {
		        slider = slider[0];
		    }

		    /**
		     * private
		     * set active class to element which is the current slide
		     */
		    function setActiveElement(slides, currentIndex) {
		        var _options = options;
		        var classNameActiveSlide = _options.classNameActiveSlide;

		        slides.forEach(function (element, index) {
		            if (element.classList.contains(classNameActiveSlide)) {
		                element.classList.remove(classNameActiveSlide);
		            }
		        });

		        slides[currentIndex].classList.add(classNameActiveSlide);
		    }

		    /**
		     * private
		     * setupInfinite: function to setup if infinite is set
		     *
		     * @param  {array} slideArray
		     * @return {array} array of updated slideContainer elements
		     */
		    function setupInfinite(slideArray) {
		        var _options2 = options;
		        var infinite = _options2.infinite;

		        var front = slideArray.slice(0, infinite);
		        var back = slideArray.slice(slideArray.length - infinite, slideArray.length);

		        front.forEach(function (element) {
		            var cloned = element.cloneNode(true);

		            slideContainer.appendChild(cloned);
		        });

		        back.reverse().forEach(function (element) {
		            var cloned = element.cloneNode(true);

		            slideContainer.insertBefore(cloned, slideContainer.firstChild);
		        });

		        slideContainer.addEventListener(prefixes.transitionEnd, onTransitionEnd);

		        return slice.call(slideContainer.children);
		    }

		    /**
		     * [dispatchSliderEvent description]
		     * @return {[type]} [description]
		     */
		    function dispatchSliderEvent(phase, type, detail) {
		        (0, _dispatchEvent2.default)(slider, phase + '.lory.' + type, detail);
		    }

		    /**
		     * translates to a given position in a given time in milliseconds
		     *
		     * @to        {number} number in pixels where to translate to
		     * @duration  {number} time in milliseconds for the transistion
		     * @ease      {string} easing css property
		     */
		    function translate(to, duration, ease) {
		        var style = slideContainer && slideContainer.style;

		        if (style) {
		            style[prefixes.transition + 'TimingFunction'] = ease;
		            style[prefixes.transition + 'Duration'] = duration + 'ms';

		            if (prefixes.hasTranslate3d) {
		                style[prefixes.transform] = 'translate3d(' + to + 'px, 0, 0)';
		            } else {
		                style[prefixes.transform] = 'translate(' + to + 'px, 0)';
		            }
		        }
		    }

		    /**
		     * slidefunction called by prev, next & touchend
		     *
		     * determine nextIndex and slide to next postion
		     * under restrictions of the defined options
		     *
		     * @direction  {boolean}
		     */
		    function slide(nextIndex, direction) {
		        var _options3 = options;
		        var slideSpeed = _options3.slideSpeed;
		        var slidesToScroll = _options3.slidesToScroll;
		        var infinite = _options3.infinite;
		        var rewind = _options3.rewind;
		        var rewindSpeed = _options3.rewindSpeed;
		        var ease = _options3.ease;
		        var classNameActiveSlide = _options3.classNameActiveSlide;

		        var duration = slideSpeed;

		        var nextSlide = direction ? index + 1 : index - 1;
		        var maxOffset = Math.round(slidesWidth - frameWidth);

		        dispatchSliderEvent('before', 'slide', {
		            index: index,
		            nextSlide: nextSlide
		        });

		        if (typeof nextIndex !== 'number') {
		            if (direction) {
		                nextIndex = index + slidesToScroll;
		            } else {
		                nextIndex = index - slidesToScroll;
		            }
		        }

		        nextIndex = Math.min(Math.max(nextIndex, 0), slides.length - 1);

		        if (infinite && direction === undefined) {
		            nextIndex += infinite;
		        }

		        var nextOffset = Math.min(Math.max(slides[nextIndex].offsetLeft * -1, maxOffset * -1), 0);

		        if (rewind && Math.abs(position.x) === maxOffset && direction) {
		            nextOffset = 0;
		            nextIndex = 0;
		            duration = rewindSpeed;
		        }

		        /**
		         * translate to the nextOffset by a defined duration and ease function
		         */
		        translate(nextOffset, duration, ease);

		        /**
		         * update the position with the next position
		         */
		        position.x = nextOffset;

		        /**
		         * update the index with the nextIndex only if
		         * the offset of the nextIndex is in the range of the maxOffset
		         */
		        if (slides[nextIndex].offsetLeft <= maxOffset) {
		            index = nextIndex;
		        }

		        if (infinite && (Math.abs(nextOffset) === maxOffset || Math.abs(nextOffset) === 0)) {
		            if (direction) {
		                index = infinite;
		            }

		            if (!direction) {
		                index = slides.length - infinite * 2;
		            }

		            position.x = slides[index].offsetLeft * -1;

		            transitionEndCallback = function transitionEndCallback() {
		                translate(slides[index].offsetLeft * -1, 0, undefined);
		            };
		        }

		        if (classNameActiveSlide) {
		            setActiveElement(slice.call(slides), index);
		        }

		        dispatchSliderEvent('after', 'slide', {
		            currentSlide: index
		        });
		    }

		    /**
		     * public
		     * setup function
		     */
		    function setup() {
		        dispatchSliderEvent('before', 'init');

		        prefixes = (0, _detectPrefixes2.default)();
		        options = _extends({}, _defaults2.default, opts);

		        var _options4 = options;
		        var classNameFrame = _options4.classNameFrame;
		        var classNameSlideContainer = _options4.classNameSlideContainer;
		        var classNamePrevCtrl = _options4.classNamePrevCtrl;
		        var classNameNextCtrl = _options4.classNameNextCtrl;
		        var enableMouseEvents = _options4.enableMouseEvents;
		        var classNameActiveSlide = _options4.classNameActiveSlide;

		        frame = slider.getElementsByClassName(classNameFrame)[0];
		        slideContainer = frame.getElementsByClassName(classNameSlideContainer)[0];
		        prevCtrl = slider.getElementsByClassName(classNamePrevCtrl)[0];
		        nextCtrl = slider.getElementsByClassName(classNameNextCtrl)[0];

		        position = {
		            x: slideContainer.offsetLeft,
		            y: slideContainer.offsetTop
		        };

		        if (options.infinite) {
		            slides = setupInfinite(slice.call(slideContainer.children));
		        } else {
		            slides = slice.call(slideContainer.children);
		        }

		        reset();

		        if (classNameActiveSlide) {
		            setActiveElement(slides, index);
		        }

		        if (prevCtrl && nextCtrl) {
		            prevCtrl.addEventListener('click', prev);
		            nextCtrl.addEventListener('click', next);
		        }

		        slideContainer.addEventListener('touchstart', onTouchstart);

		        if (enableMouseEvents) {
		            slideContainer.addEventListener('mousedown', onTouchstart);
		            slideContainer.addEventListener('click', onClick);
		        }

		        options.window.addEventListener('resize', onResize);

		        dispatchSliderEvent('after', 'init');
		    }

		    /**
		     * public
		     * reset function: called on resize
		     */
		    function reset() {
		        var _options5 = options;
		        var infinite = _options5.infinite;
		        var ease = _options5.ease;
		        var rewindSpeed = _options5.rewindSpeed;

		        slidesWidth = slideContainer.getBoundingClientRect().width || slideContainer.offsetWidth;
		        frameWidth = frame.getBoundingClientRect().width || frame.offsetWidth;

		        if (frameWidth === slidesWidth) {
		            slidesWidth = slides.reduce(function (previousValue, slide) {
		                return previousValue + slide.getBoundingClientRect().width || slide.offsetWidth;
		            }, 0);
		        }

		        index = 0;

		        if (infinite) {
		            translate(slides[index + infinite].offsetLeft * -1, 0, null);

		            index = index + infinite;
		            position.x = slides[index].offsetLeft * -1;
		        } else {
		            translate(0, rewindSpeed, ease);
		        }
		    }

		    /**
		     * public
		     * slideTo: called on clickhandler
		     */
		    function slideTo(index) {
		        slide(index);
		    }

		    /**
		     * public
		     * returnIndex function: called on clickhandler
		     */
		    function returnIndex() {
		        return index - options.infinite || 0;
		    }

		    /**
		     * public
		     * prev function: called on clickhandler
		     */
		    function prev() {
		        slide(false, false);
		    }

		    /**
		     * public
		     * next function: called on clickhandler
		     */
		    function next() {
		        slide(false, true);
		    }

		    /**
		     * public
		     * destroy function: called to gracefully destroy the lory instance
		     */
		    function destroy() {
		        dispatchSliderEvent('before', 'destroy');

		        // remove event listeners
		        slideContainer.removeEventListener(prefixes.transitionEnd, onTransitionEnd);
		        slideContainer.removeEventListener('touchstart', onTouchstart);
		        slideContainer.removeEventListener('touchmove', onTouchmove);
		        slideContainer.removeEventListener('touchend', onTouchend);
		        slideContainer.removeEventListener('mousemove', onTouchmove);
		        slideContainer.removeEventListener('mousedown', onTouchstart);
		        slideContainer.removeEventListener('mouseup', onTouchend);
		        slideContainer.removeEventListener('mouseleave', onTouchend);
		        slideContainer.removeEventListener('click', onClick);

		        options.window.removeEventListener('resize', onResize);

		        if (prevCtrl) {
		            prevCtrl.removeEventListener('click', prev);
		        }

		        if (nextCtrl) {
		            nextCtrl.removeEventListener('click', next);
		        }

		        dispatchSliderEvent('after', 'destroy');
		    }

		    // event handling

		    var touchOffset = undefined;
		    var delta = undefined;
		    var isScrolling = undefined;

		    function onTransitionEnd() {
		        if (transitionEndCallback) {
		            transitionEndCallback();

		            transitionEndCallback = undefined;
		        }
		    }

		    function onTouchstart(event) {
		        var _options6 = options;
		        var enableMouseEvents = _options6.enableMouseEvents;

		        var touches = event.touches ? event.touches[0] : event;

		        if (enableMouseEvents) {
		            slideContainer.addEventListener('mousemove', onTouchmove);
		            slideContainer.addEventListener('mouseup', onTouchend);
		            slideContainer.addEventListener('mouseleave', onTouchend);
		        }

		        slideContainer.addEventListener('touchmove', onTouchmove);
		        slideContainer.addEventListener('touchend', onTouchend);

		        var pageX = touches.pageX;
		        var pageY = touches.pageY;

		        touchOffset = {
		            x: pageX,
		            y: pageY,
		            time: Date.now()
		        };

		        isScrolling = undefined;

		        delta = {};

		        dispatchSliderEvent('on', 'touchstart', {
		            event: event
		        });
		    }

		    function onTouchmove(event) {
		        var touches = event.touches ? event.touches[0] : event;
		        var pageX = touches.pageX;
		        var pageY = touches.pageY;

		        delta = {
		            x: pageX - touchOffset.x,
		            y: pageY - touchOffset.y
		        };

		        if (typeof isScrolling === 'undefined') {
		            isScrolling = !!(isScrolling || Math.abs(delta.x) < Math.abs(delta.y));
		        }

		        if (!isScrolling && touchOffset) {
		            event.preventDefault();
		            translate(position.x + delta.x, 0, null);
		        }

		        // may be
		        dispatchSliderEvent('on', 'touchmove', {
		            event: event
		        });
		    }

		    function onTouchend(event) {
		        /**
		         * time between touchstart and touchend in milliseconds
		         * @duration {number}
		         */
		        var duration = touchOffset ? Date.now() - touchOffset.time : undefined;

		        /**
		         * is valid if:
		         *
		         * -> swipe attempt time is over 300 ms
		         * and
		         * -> swipe distance is greater than 25px
		         * or
		         * -> swipe distance is more then a third of the swipe area
		         *
		         * @isValidSlide {Boolean}
		         */
		        var isValid = Number(duration) < 300 && Math.abs(delta.x) > 25 || Math.abs(delta.x) > frameWidth / 3;

		        /**
		         * is out of bounds if:
		         *
		         * -> index is 0 and delta x is greater than 0
		         * or
		         * -> index is the last slide and delta is smaller than 0
		         *
		         * @isOutOfBounds {Boolean}
		         */
		        var isOutOfBounds = !index && delta.x > 0 || index === slides.length - 1 && delta.x < 0;

		        var direction = delta.x < 0;

		        if (!isScrolling) {
		            if (isValid && !isOutOfBounds) {
		                slide(false, direction);
		            } else {
		                translate(position.x, options.snapBackSpeed);
		            }
		        }

		        touchOffset = undefined;

		        /**
		         * remove eventlisteners after swipe attempt
		         */
		        slideContainer.removeEventListener('touchmove', onTouchmove);
		        slideContainer.removeEventListener('touchend', onTouchend);
		        slideContainer.removeEventListener('mousemove', onTouchmove);
		        slideContainer.removeEventListener('mouseup', onTouchend);
		        slideContainer.removeEventListener('mouseleave', onTouchend);

		        dispatchSliderEvent('on', 'touchend', {
		            event: event
		        });
		    }

		    function onClick(event) {
		        if (delta.x) {
		            event.preventDefault();
		        }
		    }

		    function onResize(event) {
		        reset();

		        dispatchSliderEvent('on', 'resize', {
		            event: event
		        });
		    }

		    // trigger initial setup
		    setup();

		    // expose public api
		    return {
		        setup: setup,
		        reset: reset,
		        slideTo: slideTo,
		        returnIndex: returnIndex,
		        prev: prev,
		        next: next,
		        destroy: destroy
		    };
		}

	/***/ },
	/* 2 */
	/***/ function(module, exports) {

		/* WEBPACK VAR INJECTION */(function(global) {'use strict';

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		exports.default = detectPrefixes;
		/**
		 * Detecting prefixes for saving time and bytes
		 */
		function detectPrefixes() {
		    var transform = undefined;
		    var transition = undefined;
		    var transitionEnd = undefined;
		    var hasTranslate3d = undefined;

		    (function () {
		        var el = document.createElement('_');
		        var style = el.style;

		        var prop = undefined;

		        if (style[prop = 'webkitTransition'] === '') {
		            transitionEnd = 'webkitTransitionEnd';
		            transition = prop;
		        }

		        if (style[prop = 'transition'] === '') {
		            transitionEnd = 'transitionend';
		            transition = prop;
		        }

		        if (style[prop = 'webkitTransform'] === '') {
		            transform = prop;
		        }

		        if (style[prop = 'msTransform'] === '') {
		            transform = prop;
		        }

		        if (style[prop = 'transform'] === '') {
		            transform = prop;
		        }

		        document.body.insertBefore(el, null);
		        style[transform] = 'translate3d(0, 0, 0)';
		        hasTranslate3d = !!global.getComputedStyle(el).getPropertyValue(transform);
		        document.body.removeChild(el);
		    })();

		    return {
		        transform: transform,
		        transition: transition,
		        transitionEnd: transitionEnd,
		        hasTranslate3d: hasTranslate3d
		    };
		}
		/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

	/***/ },
	/* 3 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		exports.default = dispatchEvent;

		var _customEvent = __webpack_require__(4);

		var _customEvent2 = _interopRequireDefault(_customEvent);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		/**
		 * dispatch custom events
		 *
		 * @param  {element} el         slideshow element
		 * @param  {string}  type       custom event name
		 * @param  {object}  detail     custom detail information
		 */
		function dispatchEvent(target, type, detail) {
		    var event = new _customEvent2.default(type, {
		        bubbles: true,
		        cancelable: true,
		        detail: detail
		    });

		    target.dispatchEvent(event);
		}

	/***/ },
	/* 4 */
	/***/ function(module, exports) {

		/* WEBPACK VAR INJECTION */(function(global) {
		var NativeCustomEvent = global.CustomEvent;

		function useNative () {
		  try {
		    var p = new NativeCustomEvent('cat', { detail: { foo: 'bar' } });
		    return  'cat' === p.type && 'bar' === p.detail.foo;
		  } catch (e) {
		  }
		  return false;
		}

		/**
		 * Cross-browser `CustomEvent` constructor.
		 *
		 * https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent.CustomEvent
		 *
		 * @public
		 */

		module.exports = useNative() ? NativeCustomEvent :

		// IE >= 9
		'function' === typeof document.createEvent ? function CustomEvent (type, params) {
		  var e = document.createEvent('CustomEvent');
		  if (params) {
		    e.initCustomEvent(type, params.bubbles, params.cancelable, params.detail);
		  } else {
		    e.initCustomEvent(type, false, false, void 0);
		  }
		  return e;
		} :

		// IE <= 8
		function CustomEvent (type, params) {
		  var e = document.createEventObject();
		  e.type = type;
		  if (params) {
		    e.bubbles = Boolean(params.bubbles);
		    e.cancelable = Boolean(params.cancelable);
		    e.detail = params.detail;
		  } else {
		    e.bubbles = false;
		    e.cancelable = false;
		    e.detail = void 0;
		  }
		  return e;
		}

		/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

	/***/ },
	/* 5 */
	/***/ function(module, exports) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = {
		  /**
		   * slides scrolled at once
		   * @slidesToScroll {Number}
		   */
		  slidesToScroll: 1,

		  /**
		   * time in milliseconds for the animation of a valid slide attempt
		   * @slideSpeed {Number}
		   */
		  slideSpeed: 300,

		  /**
		   * time in milliseconds for the animation of the rewind after the last slide
		   * @rewindSpeed {Number}
		   */
		  rewindSpeed: 600,

		  /**
		   * time for the snapBack of the slider if the slide attempt was not valid
		   * @snapBackSpeed {Number}
		   */
		  snapBackSpeed: 200,

		  /**
		   * Basic easing functions: https://developer.mozilla.org/de/docs/Web/CSS/transition-timing-function
		   * cubic bezier easing functions: http://easings.net/de
		   * @ease {String}
		   */
		  ease: 'ease',

		  /**
		   * if slider reached the last slide, with next click the slider goes back to the startindex.
		   * use infinite or rewind, not both
		   * @rewind {Boolean}
		   */
		  rewind: false,

		  /**
		   * number of visible slides or false
		   * use infinite or rewind, not both
		   * @infinite {number}
		   */
		  infinite: false,

		  /**
		   * class name for slider frame
		   * @classNameFrame {string}
		   */
		  classNameFrame: 'js_frame',

		  /**
		   * class name for slides container
		   * @classNameSlideContainer {string}
		   */
		  classNameSlideContainer: 'js_slides',

		  /**
		   * class name for slider prev control
		   * @classNamePrevCtrl {string}
		   */
		  classNamePrevCtrl: 'js_prev',

		  /**
		   * class name for slider next control
		   * @classNameNextCtrl {string}
		   */
		  classNameNextCtrl: 'js_next',

		  /**
		   * class name for current active slide
		   * if emptyString then no class is set
		   * @classNameActiveSlide {string}
		   */
		  classNameActiveSlide: 'active',

		  /**
		   * enables mouse events for swiping on desktop devices
		   * @enableMouseEvents {boolean}
		   */
		  enableMouseEvents: false,

		  /**
		   * window instance
		   * @window {object}
		   */
		  window: window
		};

	/***/ }
	/******/ ])
	});
	;

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '';
	with (obj) {
	__p += '<div class="wrapper">\n  <footer class="m-footer">\n    <ul class="m-footer-apps">\n      <li><a href="http://www.globalforestwatch.org/getinvolved/provide-feedback" class="feedback-link"><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-f-feedback"></use></svg><h3>Provide feedback</h3></a></li>\n      <li><a href="https://groups.google.com/forum/#!forum/globalforestwatch" target="_blank"><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-f-joindiscussion"></use></svg><h3>Join the discussion</h3></a></li>\n      <li><a href="http://www.globalforestwatch.org/howto"><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-f-howto"></use></svg><h3>How to</h3></a></li>\n      <li><a href="http://www.globalforestwatch.org/getinvolved/develop-your-own-app"><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-f-develop"></use></svg><h3>Develop your own app</h3></a></li>\n      <li><a class="mobile-friendly" href="http://data.globalforestwatch.org/" target="_blank"><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-f-download"></use></svg><h3>Open data portal</h3></a></li>\n      <li><a href="http://blog.globalforestwatch.org/" target="_blank"><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-f-blog"></use></svg><h3>Blog</h3></a></li>\n    </ul>\n    <div class="m-footer-info">\n      <div class="m-footer-partner">\n        <p>A partnership convened by</p>\n        <a href="http://www.wri.org/" target="_blank">\n          <svg width="260px" height="92px" viewBox="0 0 260 92" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n              <!-- Generator: Sketch 3.4.4 (17249) - http://www.bohemiancoding.com/sketch -->\n              <title>wri</title>\n              <desc>Created with Sketch.</desc>\n              <defs></defs>\n              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n                  <g id="wri" sketch:type="MSLayerGroup">\n                      <path d="M12.5324,60.5117 L7.4164,65.6277 L13.0754,71.2867 L18.1914,66.1707 L12.5324,60.5117 Z" id="Fill-1" fill="#FAB72E" sketch:type="MSShapeGroup"></path>\n                      <path d="M45.5499,0.9002 L19.7209,26.7292 L25.3789,32.3882 L45.5499,12.2182 L52.4229,19.0912 L58.0829,13.4332 L51.2089,6.5582 L45.7659,1.1152 L45.5499,0.9002 Z" id="Fill-2" fill="#FAB72E" sketch:type="MSShapeGroup"></path>\n                      <path d="M0,46.4501 L0.215,46.6651 L5.659,52.1081 L25.829,72.2791 L31.488,66.6211 L11.318,46.4501 L18.192,39.5771 L12.533,33.9171 L0,46.4501 Z" id="Fill-3" fill="#FAB72E" sketch:type="MSShapeGroup"></path>\n                      <path d="M72.9089,53.3235 L78.5679,58.9825 L91.0999,46.4495 L90.8849,46.2345 L85.4409,40.7915 L65.2709,20.6205 L59.6119,26.2795 L79.7819,46.4495 L72.9089,53.3235 Z" id="Fill-4" fill="#FAB72E" sketch:type="MSShapeGroup"></path>\n                      <path d="M45.5499,80.6825 L38.6769,73.8095 L33.0169,79.4675 L39.8919,86.3405 L45.3349,91.7845 L45.5499,92.0005 L71.3799,66.1705 L65.7209,60.5115 L45.5499,80.6825 Z" id="Fill-5" fill="#FAB72E" sketch:type="MSShapeGroup"></path>\n                      <path d="M78.5677,32.3882 L83.6837,27.2722 L78.0247,21.6132 L72.9087,26.7292 L78.5677,32.3882 Z" id="Fill-6" fill="#FAB72E" sketch:type="MSShapeGroup"></path>\n                      <path d="M65.2706,73.8088 L59.6116,79.4678 L64.7276,84.5838 L70.3866,78.9248 L65.2706,73.8088 Z" id="Fill-7" fill="#FAB72E" sketch:type="MSShapeGroup"></path>\n                      <path d="M31.4883,13.4323 L26.3723,8.3163 L20.7133,13.9753 L25.8293,19.0913 L31.4883,13.4323 Z" id="Fill-8" fill="#FAB72E" sketch:type="MSShapeGroup"></path>\n                      <path d="M39.1266,60.5117 L20.7136,78.9247 L26.3726,84.5837 L44.7856,66.1707 L39.1266,60.5117 Z" id="Fill-9" fill="#FAB72E" sketch:type="MSShapeGroup"></path>\n                      <path d="M51.9736,58.9824 L71.3796,39.5764 L65.7206,33.9174 L46.3146,53.3234 L51.9736,58.9824 Z" id="Fill-10" fill="#FAB72E" sketch:type="MSShapeGroup"></path>\n                      <path d="M51.9736,32.3882 L70.3866,13.9752 L64.7276,8.3162 L46.3146,26.7292 L51.9736,32.3882 Z" id="Fill-11" fill="#FAB72E" sketch:type="MSShapeGroup"></path>\n                      <path d="M39.1265,33.9176 L19.7205,53.3236 L25.3795,58.9826 L44.7855,39.5766 L39.1265,33.9176 Z" id="Fill-12" fill="#FAB72E" sketch:type="MSShapeGroup"></path>\n                      <path d="M38.6765,47.2147 L33.0175,52.8737 L52.4235,72.2797 L58.0825,66.6207 L38.6765,47.2147 Z" id="Fill-13" fill="#FAB72E" sketch:type="MSShapeGroup"></path>\n                      <path d="M31.4883,40.0265 L13.0753,21.6135 L7.4163,27.2725 L25.8293,45.6855 L31.4883,40.0265 Z" id="Fill-14" fill="#FAB72E" sketch:type="MSShapeGroup"></path>\n                      <path d="M58.0825,40.0265 L38.6765,20.6205 L33.0175,26.2795 L52.4235,45.6855 L58.0825,40.0265 Z" id="Fill-15" fill="#FAB72E" sketch:type="MSShapeGroup"></path>\n                      <path d="M65.2706,47.2147 L59.6116,52.8737 L78.0246,71.2867 L83.6836,65.6277 L65.2706,47.2147 Z" id="Fill-16" fill="#FAB72E" sketch:type="MSShapeGroup"></path>\n                      <g id="Group-63" transform="translate(114.000000, 8.000000)" fill="#444444" sketch:type="MSShapeGroup">\n                          <path d="M2.2387,2.8089 C1.9937,2.0529 1.7687,1.5629 1.4827,1.3579 C1.2577,1.2159 0.8487,1.1749 0.6657,1.1749 C0.4617,1.1749 0.3387,1.1539 0.3387,0.9909 C0.3387,0.8479 0.5027,0.8069 0.7887,0.8069 C1.8507,0.8069 2.9737,0.8679 3.1587,0.8679 C3.3417,0.8679 4.2407,0.8069 5.4257,0.8069 C5.7127,0.8069 5.8547,0.8679 5.8547,0.9909 C5.8547,1.1539 5.6917,1.1749 5.4877,1.1749 C5.3237,1.1749 5.1197,1.1749 4.9767,1.2559 C4.7927,1.3379 4.7527,1.4809 4.7527,1.7059 C4.7527,1.9719 4.9567,2.6659 5.2017,3.5849 C5.5477,4.9339 7.4487,11.1249 7.8167,12.2689 L7.8787,12.2689 L11.8407,1.6039 C12.0467,1.0319 12.1887,0.8679 12.3517,0.8679 C12.5777,0.8679 12.6787,1.1749 12.9447,1.8289 L17.1947,12.1259 L17.2557,12.1259 C17.6237,10.7569 19.2577,5.3629 19.9727,2.9729 C20.1167,2.5029 20.1777,2.0739 20.1777,1.7879 C20.1777,1.4609 19.9937,1.1749 19.1967,1.1749 C18.9927,1.1749 18.8497,1.1129 18.8497,0.9909 C18.8497,0.8479 19.0127,0.8069 19.3197,0.8069 C20.4027,0.8069 21.2597,0.8679 21.4447,0.8679 C21.5877,0.8679 22.4657,0.8069 23.1397,0.8069 C23.3647,0.8069 23.5077,0.8479 23.5077,0.9699 C23.5077,1.1129 23.4057,1.1749 23.2217,1.1749 C23.0177,1.1749 22.7317,1.1949 22.5067,1.2769 C22.0167,1.4609 21.7917,2.2779 21.3627,3.4419 C20.4227,6.0169 18.2777,12.5139 17.2767,15.5789 C17.0517,16.2939 16.9497,16.5389 16.6837,16.5389 C16.4797,16.5389 16.3567,16.2939 16.0497,15.5379 L11.8007,5.2809 L11.7597,5.2809 C11.3717,6.3229 8.6547,13.5769 7.7757,15.4559 C7.3867,16.2939 7.2857,16.5389 7.0407,16.5389 C6.8367,16.5389 6.7547,16.3139 6.5707,15.7829 L2.2387,2.8089 Z" id="Fill-17"></path>\n                          <path d="M38.8314,8.9183 C38.8314,4.3413 36.1954,1.5013 32.8454,1.5013 C30.4954,1.5013 27.8184,2.8093 27.8184,7.8963 C27.8184,12.1463 30.1684,15.5173 34.0914,15.5173 C35.5204,15.5173 38.8314,14.8223 38.8314,8.9183 M24.9994,8.5303 C24.9994,5.0363 27.3084,0.5213 33.4364,0.5213 C38.5244,0.5213 41.6914,3.4833 41.6914,8.1623 C41.6914,12.8413 38.4224,16.5393 33.2324,16.5393 C27.3694,16.5393 24.9994,12.1463 24.9994,8.5303" id="Fill-19"></path>\n                          <path d="M49.5853,8.346 C49.5853,8.571 49.6263,8.653 49.7693,8.714 C50.1983,8.857 50.8113,8.918 51.3213,8.918 C52.1393,8.918 52.4043,8.836 52.7723,8.571 C53.3853,8.121 53.9783,7.182 53.9783,5.506 C53.9783,2.605 52.0583,1.767 50.8523,1.767 C50.3413,1.767 49.9733,1.787 49.7693,1.849 C49.6263,1.89 49.5853,1.972 49.5853,2.135 L49.5853,8.346 Z M47.1743,6.732 C47.1743,3.626 47.1743,3.054 47.1333,2.4 C47.0933,1.706 46.9293,1.379 46.2553,1.236 C46.0913,1.195 45.7443,1.175 45.4583,1.175 C45.2333,1.175 45.1103,1.134 45.1103,0.991 C45.1103,0.848 45.2543,0.807 45.5603,0.807 C46.6433,0.807 47.9303,0.868 48.3593,0.868 C49.0543,0.868 50.6063,0.807 51.2403,0.807 C52.5273,0.807 53.8963,0.929 54.9993,1.685 C55.5713,2.074 56.3893,3.116 56.3893,4.485 C56.3893,5.996 55.7553,7.386 53.6913,9.061 C55.5103,11.349 56.9203,13.168 58.1253,14.434 C59.2703,15.619 60.1073,15.763 60.4143,15.824 C60.6393,15.865 60.8223,15.885 60.9853,15.885 C61.1493,15.885 61.2303,15.947 61.2303,16.049 C61.2303,16.212 61.0883,16.253 60.8433,16.253 L58.9013,16.253 C57.7583,16.253 57.2473,16.151 56.7163,15.865 C55.8373,15.395 55.0613,14.434 53.9163,12.861 C53.1003,11.738 52.1593,10.349 51.8943,10.042 C51.7923,9.919 51.6693,9.899 51.5263,9.899 L49.7483,9.858 C49.6473,9.858 49.5853,9.899 49.5853,10.021 L49.5853,10.308 C49.5853,12.207 49.5853,13.822 49.6883,14.68 C49.7483,15.272 49.8713,15.722 50.4843,15.804 C50.7903,15.845 51.2403,15.885 51.4853,15.885 C51.6483,15.885 51.7303,15.947 51.7303,16.049 C51.7303,16.192 51.5873,16.253 51.3213,16.253 C50.1373,16.253 48.6253,16.192 48.3183,16.192 C47.9303,16.192 46.6433,16.253 45.8253,16.253 C45.5603,16.253 45.4173,16.192 45.4173,16.049 C45.4173,15.947 45.4993,15.885 45.7443,15.885 C46.0503,15.885 46.2963,15.845 46.4803,15.804 C46.8883,15.722 46.9903,15.272 47.0723,14.68 C47.1743,13.822 47.1743,12.207 47.1743,10.328 L47.1743,6.732 Z" id="Fill-21"></path>\n                          <path d="M68.2641,10.328 C68.2641,12.943 68.2641,14.353 68.6941,14.72 C69.0401,15.027 69.5721,15.17 71.1651,15.17 C72.2481,15.17 73.0451,15.15 73.5561,14.598 C73.8011,14.332 74.0461,13.761 74.0871,13.372 C74.1081,13.188 74.1491,13.066 74.3121,13.066 C74.4551,13.066 74.4761,13.168 74.4761,13.413 C74.4761,13.638 74.3321,15.17 74.1691,15.762 C74.0461,16.212 73.9451,16.314 72.8821,16.314 C71.4101,16.314 70.3481,16.273 69.4291,16.253 C68.5091,16.212 67.7741,16.192 66.9371,16.192 C66.7111,16.192 66.2621,16.192 65.7721,16.212 C65.3021,16.212 64.7711,16.253 64.3621,16.253 C64.0961,16.253 63.9531,16.192 63.9531,16.049 C63.9531,15.947 64.0351,15.885 64.2811,15.885 C64.5861,15.885 64.8321,15.845 65.0161,15.803 C65.4241,15.722 65.5271,15.272 65.6091,14.68 C65.7101,13.822 65.7101,12.207 65.7101,10.328 L65.7101,6.732 C65.7101,3.626 65.7101,3.054 65.6691,2.4 C65.6281,1.706 65.4651,1.379 64.7911,1.236 C64.6271,1.195 64.3821,1.175 64.1161,1.175 C63.8921,1.175 63.7701,1.134 63.7701,0.991 C63.7701,0.848 63.9121,0.807 64.2191,0.807 C65.1791,0.807 66.4661,0.868 67.0181,0.868 C67.5081,0.868 69.0001,0.807 69.7971,0.807 C70.0821,0.807 70.2261,0.848 70.2261,0.991 C70.2261,1.134 70.1031,1.175 69.8581,1.175 C69.6331,1.175 69.3061,1.195 69.0611,1.236 C68.5091,1.338 68.3461,1.685 68.3051,2.4 C68.2641,3.054 68.2641,3.626 68.2641,6.732 L68.2641,10.328 Z" id="Fill-23"></path>\n                          <path d="M82.4437,8.9793 C82.4437,11.1453 82.4637,12.7183 82.4847,13.1073 C82.5057,13.6173 82.5467,14.4343 82.7097,14.6593 C82.9747,15.0473 83.7717,15.4763 85.3857,15.4763 C87.4697,15.4763 88.8597,15.0683 90.0857,14.0053 C91.3927,12.8813 91.8017,11.0233 91.8017,8.9183 C91.8017,6.3233 90.7187,4.6483 89.8397,3.8103 C87.9607,2.0123 85.6317,1.7673 84.0377,1.7673 C83.6297,1.7673 82.8737,1.8283 82.7097,1.9103 C82.5257,1.9923 82.4637,2.0943 82.4637,2.3183 C82.4437,3.0133 82.4437,4.7913 82.4437,6.4053 L82.4437,8.9793 Z M79.8897,6.7323 C79.8897,3.6263 79.8897,3.0543 79.8487,2.4003 C79.8077,1.7063 79.6447,1.3783 78.9707,1.2353 C78.8067,1.1953 78.4607,1.1743 78.1737,1.1743 C77.9497,1.1743 77.8267,1.1333 77.8267,0.9903 C77.8267,0.8473 77.9697,0.8073 78.2757,0.8073 C79.3587,0.8073 80.6457,0.8683 81.2187,0.8683 C81.8517,0.8683 83.1387,0.8073 84.3647,0.8073 C86.9187,0.8073 90.3307,0.8073 92.5577,3.1363 C93.5797,4.1983 94.5397,5.8943 94.5397,8.3253 C94.5397,10.8993 93.4567,12.8613 92.3127,14.0263 C91.3727,14.9863 89.2477,16.4373 85.4687,16.4373 C84.7327,16.4373 83.8947,16.3753 83.1187,16.3143 C82.3417,16.2533 81.6277,16.1913 81.1167,16.1913 C80.8907,16.1913 80.4417,16.1913 79.9517,16.2123 C79.4817,16.2123 78.9507,16.2533 78.5417,16.2533 C78.2757,16.2533 78.1327,16.1913 78.1327,16.0483 C78.1327,15.9463 78.2147,15.8853 78.4607,15.8853 C78.7657,15.8853 79.0117,15.8443 79.1957,15.8033 C79.6037,15.7223 79.7067,15.2723 79.7887,14.6803 C79.8897,13.8213 79.8897,12.2073 79.8897,10.3283 L79.8897,6.7323 Z" id="Fill-25"></path>\n                          <path d="M6.4682,39.5301 C6.4682,39.7551 6.5092,39.8371 6.6522,39.8981 C7.0812,40.0411 7.6932,40.1021 8.2042,40.1021 C9.0222,40.1021 9.2872,40.0201 9.6562,39.7551 C10.2682,39.3051 10.8612,38.3651 10.8612,36.6901 C10.8612,33.7891 8.9412,32.9511 7.7352,32.9511 C7.2242,32.9511 6.8562,32.9711 6.6522,33.0331 C6.5092,33.0731 6.4682,33.1551 6.4682,33.3191 L6.4682,39.5301 Z M4.0572,37.9161 C4.0572,34.8101 4.0572,34.2381 4.0162,33.5841 C3.9762,32.8901 3.8122,32.5631 3.1382,32.4201 C2.9742,32.3791 2.6272,32.3591 2.3412,32.3591 C2.1162,32.3591 1.9932,32.3181 1.9932,32.1741 C1.9932,32.0311 2.1372,31.9911 2.4432,31.9911 C3.5262,31.9911 4.8132,32.0521 5.2422,32.0521 C5.9372,32.0521 7.4892,31.9911 8.1232,31.9911 C9.4102,31.9911 10.7792,32.1131 11.8822,32.8691 C12.4542,33.2571 13.2722,34.2991 13.2722,35.6691 C13.2722,37.1801 12.6382,38.5701 10.5742,40.2451 C12.3932,42.5331 13.8032,44.3521 15.0082,45.6181 C16.1522,46.8031 16.9902,46.9461 17.2972,47.0081 C17.5222,47.0491 17.7052,47.0691 17.8682,47.0691 C18.0322,47.0691 18.1132,47.1311 18.1132,47.2331 C18.1132,47.3961 17.9712,47.4371 17.7262,47.4371 L15.7842,47.4371 C14.6412,47.4371 14.1302,47.3351 13.5992,47.0491 C12.7202,46.5791 11.9432,45.6181 10.7992,44.0451 C9.9832,42.9221 9.0422,41.5321 8.7772,41.2261 C8.6752,41.1031 8.5522,41.0831 8.4092,41.0831 L6.6312,41.0421 C6.5292,41.0421 6.4682,41.0831 6.4682,41.2051 L6.4682,41.4911 C6.4682,43.3911 6.4682,45.0061 6.5702,45.8641 C6.6312,46.4561 6.7542,46.9061 7.3672,46.9871 C7.6732,47.0281 8.1232,47.0691 8.3682,47.0691 C8.5312,47.0691 8.6132,47.1311 8.6132,47.2331 C8.6132,47.3761 8.4702,47.4371 8.2042,47.4371 C7.0202,47.4371 5.5082,47.3761 5.2012,47.3761 C4.8132,47.3761 3.5262,47.4371 2.7082,47.4371 C2.4432,47.4371 2.3002,47.3761 2.3002,47.2331 C2.3002,47.1311 2.3822,47.0691 2.6272,47.0691 C2.9332,47.0691 3.1792,47.0281 3.3632,46.9871 C3.7712,46.9061 3.8732,46.4561 3.9552,45.8641 C4.0572,45.0061 4.0572,43.3911 4.0572,41.5121 L4.0572,37.9161 Z" id="Fill-27"></path>\n                          <path d="M22.5941,37.9159 C22.5941,34.8109 22.5941,34.2379 22.5531,33.5839 C22.5131,32.8899 22.3491,32.5629 21.6751,32.4199 C21.5111,32.3789 21.1641,32.3589 20.8781,32.3589 C20.6541,32.3589 20.5311,32.3179 20.5311,32.1749 C20.5311,32.0319 20.6741,31.9909 20.9801,31.9909 C21.5321,31.9909 22.1241,32.0119 22.6351,32.0119 C23.1661,32.0319 23.6361,32.0519 23.9221,32.0519 C24.5761,32.0519 28.6421,32.0519 29.0311,32.0319 C29.4181,31.9909 29.7451,31.9499 29.9081,31.9089 C30.0111,31.8889 30.1331,31.8279 30.2361,31.8279 C30.3381,31.8279 30.3591,31.9089 30.3591,32.0119 C30.3591,32.1539 30.2561,32.3999 30.1951,33.3389 C30.1741,33.5439 30.1331,34.4429 30.0931,34.6879 C30.0731,34.7899 30.0311,34.9129 29.8881,34.9129 C29.7451,34.9129 29.7041,34.8109 29.7041,34.6269 C29.7041,34.4839 29.6841,34.1359 29.5811,33.8909 C29.4391,33.5229 29.2351,33.2779 28.2131,33.1559 C27.8651,33.1149 25.7201,33.0739 25.3121,33.0739 C25.2091,33.0739 25.1681,33.1349 25.1681,33.2779 L25.1681,38.4469 C25.1681,38.5899 25.1891,38.6719 25.3121,38.6719 C25.7611,38.6719 28.1111,38.6719 28.5801,38.6309 C29.0711,38.5899 29.3771,38.5289 29.5621,38.3249 C29.7041,38.1609 29.7861,38.0589 29.8881,38.0589 C29.9701,38.0589 30.0311,38.0999 30.0311,38.2229 C30.0311,38.3449 29.9491,38.6719 29.8671,39.7139 C29.8471,40.1219 29.7861,40.9399 29.7861,41.0829 C29.7861,41.2469 29.7861,41.4709 29.6021,41.4709 C29.4591,41.4709 29.4181,41.3899 29.4181,41.2879 C29.3981,41.0829 29.3981,40.8169 29.3361,40.5519 C29.2351,40.1429 28.9481,39.8369 28.1931,39.7549 C27.8041,39.7139 25.7821,39.6939 25.2911,39.6939 C25.1891,39.6939 25.1681,39.7749 25.1681,39.8979 L25.1681,41.5119 C25.1681,42.2069 25.1481,44.0859 25.1681,44.6789 C25.2091,46.0889 25.5361,46.3949 27.6201,46.3949 C28.1521,46.3949 29.0101,46.3949 29.5411,46.1499 C30.0731,45.9049 30.3181,45.4759 30.4601,44.6379 C30.5011,44.4129 30.5421,44.3319 30.6851,44.3319 C30.8491,44.3319 30.8491,44.4949 30.8491,44.6989 C30.8491,45.1689 30.6851,46.5589 30.5831,46.9669 C30.4401,47.4989 30.2561,47.4989 29.4801,47.4989 C27.9481,47.4989 26.8231,47.4579 25.9451,47.4369 C25.0671,47.3959 24.4331,47.3759 23.8201,47.3759 C23.5951,47.3759 23.1461,47.3759 22.6561,47.3959 C22.1861,47.3959 21.6551,47.4369 21.2451,47.4369 C20.9801,47.4369 20.8371,47.3759 20.8371,47.2329 C20.8371,47.1309 20.9191,47.0689 21.1641,47.0689 C21.4701,47.0689 21.7161,47.0289 21.9001,46.9879 C22.3081,46.9059 22.4101,46.4569 22.4921,45.8639 C22.5941,45.0059 22.5941,43.3919 22.5941,41.5119 L22.5941,37.9159 Z" id="Fill-29"></path>\n                          <path d="M35.681,47.1917 C35.355,47.0487 35.293,46.9467 35.293,46.4977 C35.293,45.3737 35.375,44.1477 35.396,43.8207 C35.415,43.5147 35.477,43.2897 35.641,43.2897 C35.825,43.2897 35.845,43.4737 35.845,43.6367 C35.845,43.9027 35.927,44.3317 36.029,44.6787 C36.478,46.1907 37.684,46.7427 38.951,46.7427 C40.789,46.7427 41.689,45.4957 41.689,44.4137 C41.689,43.4117 41.382,42.4727 39.686,41.1447 L38.746,40.4087 C36.498,38.6517 35.722,37.2217 35.722,35.5657 C35.722,33.3197 37.602,31.7047 40.442,31.7047 C41.77,31.7047 42.628,31.9087 43.16,32.0517 C43.343,32.0927 43.446,32.1537 43.446,32.2967 C43.446,32.5627 43.364,33.1557 43.364,34.7497 C43.364,35.1987 43.302,35.3617 43.139,35.3617 C42.996,35.3617 42.935,35.2397 42.935,34.9947 C42.935,34.8107 42.832,34.1767 42.404,33.6457 C42.097,33.2577 41.504,32.6447 40.176,32.6447 C38.664,32.6447 37.745,33.5237 37.745,34.7497 C37.745,35.6887 38.215,36.4037 39.91,37.6907 L40.483,38.1207 C42.955,39.9797 43.833,41.3897 43.833,43.3307 C43.833,44.5157 43.384,45.9247 41.913,46.8857 C40.892,47.5397 39.747,47.7227 38.664,47.7227 C37.48,47.7227 36.56,47.5797 35.681,47.1917" id="Fill-31"></path>\n                          <path d="M61.6664,40.1024 C61.6664,35.5254 59.0304,32.6854 55.6804,32.6854 C53.3304,32.6854 50.6534,33.9934 50.6534,39.0804 C50.6534,43.3304 53.0034,46.7014 56.9264,46.7014 C58.3554,46.7014 61.6664,46.0064 61.6664,40.1024 M47.8344,39.7144 C47.8344,36.2204 50.1434,31.7044 56.2714,31.7044 C61.3594,31.7044 64.5264,34.6674 64.5264,39.3464 C64.5264,44.0254 61.2574,47.7234 56.0674,47.7234 C50.2044,47.7234 47.8344,43.3304 47.8344,39.7144" id="Fill-33"></path>\n                          <path d="M69.4154,37.9159 C69.4154,34.8109 69.4154,34.2379 69.3744,33.5839 C69.3334,32.8899 69.1694,32.5629 68.4954,32.4199 C68.3324,32.3789 67.9844,32.3589 67.6984,32.3589 C67.4744,32.3589 67.3514,32.3179 67.3514,32.1749 C67.3514,32.0319 67.4944,31.9909 67.8014,31.9909 C68.8844,31.9909 70.1714,32.0519 70.7834,32.0519 C71.2734,32.0519 72.5614,31.9909 73.2974,31.9909 C73.6044,31.9909 73.7464,32.0319 73.7464,32.1749 C73.7464,32.3179 73.6234,32.3589 73.4194,32.3589 C73.1944,32.3589 73.0724,32.3789 72.8274,32.4199 C72.2754,32.5219 72.1114,32.8699 72.0704,33.5839 C72.0304,34.2379 72.0304,34.8109 72.0304,37.9159 L72.0304,40.7759 C72.0304,43.7389 72.6224,44.9849 73.6234,45.8029 C74.5434,46.5589 75.4824,46.6409 76.1784,46.6409 C77.0764,46.6409 78.1804,46.3539 78.9974,45.5369 C80.1214,44.4129 80.1824,42.5749 80.1824,40.4699 L80.1824,37.9159 C80.1824,34.8109 80.1824,34.2379 80.1424,33.5839 C80.1014,32.8899 79.9364,32.5629 79.2634,32.4199 C79.1004,32.3789 78.7524,32.3589 78.5274,32.3589 C78.3034,32.3589 78.1804,32.3179 78.1804,32.1749 C78.1804,32.0319 78.3224,31.9909 78.6084,31.9909 C79.6504,31.9909 80.9384,32.0519 80.9584,32.0519 C81.2034,32.0519 82.4914,31.9909 83.2884,31.9909 C83.5734,31.9909 83.7174,32.0319 83.7174,32.1749 C83.7174,32.3179 83.5944,32.3589 83.3494,32.3589 C83.1244,32.3589 83.0024,32.3789 82.7574,32.4199 C82.2054,32.5219 82.0414,32.8699 82.0004,33.5839 C81.9604,34.2379 81.9604,34.8109 81.9604,37.9159 L81.9604,40.1029 C81.9604,42.3699 81.7344,44.7809 80.0194,46.2519 C78.5684,47.4989 77.0974,47.7229 75.7694,47.7229 C74.6864,47.7229 72.7254,47.6619 71.2334,46.3129 C70.1914,45.3739 69.4154,43.8619 69.4154,40.8989 L69.4154,37.9159 Z" id="Fill-35"></path>\n                          <path d="M92.0414,39.5301 C92.0414,39.7551 92.0824,39.8371 92.2254,39.8981 C92.6544,40.0411 93.2674,40.1021 93.7774,40.1021 C94.5954,40.1021 94.8604,40.0201 95.2294,39.7551 C95.8414,39.3051 96.4344,38.3651 96.4344,36.6901 C96.4344,33.7891 94.5144,32.9511 93.3084,32.9511 C92.7974,32.9511 92.4294,32.9711 92.2254,33.0331 C92.0824,33.0731 92.0414,33.1551 92.0414,33.3191 L92.0414,39.5301 Z M89.6304,37.9161 C89.6304,34.8101 89.6304,34.2381 89.5894,33.5841 C89.5484,32.8901 89.3854,32.5631 88.7114,32.4201 C88.5474,32.3791 88.2004,32.3591 87.9144,32.3591 C87.6894,32.3591 87.5664,32.3181 87.5664,32.1741 C87.5664,32.0311 87.7104,31.9911 88.0164,31.9911 C89.0994,31.9911 90.3864,32.0521 90.8154,32.0521 C91.5104,32.0521 93.0624,31.9911 93.6964,31.9911 C94.9834,31.9911 96.3524,32.1131 97.4554,32.8691 C98.0274,33.2571 98.8454,34.2991 98.8454,35.6691 C98.8454,37.1801 98.2114,38.5701 96.1474,40.2451 C97.9664,42.5331 99.3764,44.3521 100.5814,45.6181 C101.7264,46.8031 102.5644,46.9461 102.8704,47.0081 C103.0954,47.0491 103.2784,47.0691 103.4414,47.0691 C103.6054,47.0691 103.6874,47.1311 103.6874,47.2331 C103.6874,47.3961 103.5444,47.4371 103.2994,47.4371 L101.3574,47.4371 C100.2144,47.4371 99.7034,47.3351 99.1724,47.0491 C98.2934,46.5791 97.5174,45.6181 96.3724,44.0451 C95.5564,42.9221 94.6154,41.5321 94.3504,41.2261 C94.2484,41.1031 94.1254,41.0831 93.9824,41.0831 L92.2044,41.0421 C92.1024,41.0421 92.0414,41.0831 92.0414,41.2051 L92.0414,41.4911 C92.0414,43.3911 92.0414,45.0061 92.1434,45.8641 C92.2044,46.4561 92.3274,46.9061 92.9404,46.9871 C93.2464,47.0281 93.6964,47.0691 93.9414,47.0691 C94.1044,47.0691 94.1864,47.1311 94.1864,47.2331 C94.1864,47.3761 94.0434,47.4371 93.7774,47.4371 C92.5934,47.4371 91.0814,47.3761 90.7744,47.3761 C90.3864,47.3761 89.0994,47.4371 88.2814,47.4371 C88.0164,47.4371 87.8734,47.3761 87.8734,47.2331 C87.8734,47.1311 87.9554,47.0691 88.2004,47.0691 C88.5064,47.0691 88.7524,47.0281 88.9364,46.9871 C89.3444,46.9061 89.4464,46.4561 89.5284,45.8641 C89.6304,45.0061 89.6304,43.3911 89.6304,41.5121 L89.6304,37.9161 Z" id="Fill-37"></path>\n                          <path d="M106.8578,45.4959 C104.8558,43.7389 104.3248,41.4509 104.3248,39.4689 C104.3248,38.0789 104.7538,35.6689 106.7148,33.8699 C108.1858,32.5219 110.1278,31.7049 113.1718,31.7049 C114.4378,31.7049 115.1938,31.7869 116.1338,31.9089 C116.9108,32.0119 117.5638,32.1949 118.1768,32.2569 C118.4018,32.2769 118.4838,32.3789 118.4838,32.5019 C118.4838,32.6649 118.4218,32.9109 118.3808,33.6249 C118.3398,34.2999 118.3608,35.4229 118.3198,35.8319 C118.2988,36.1389 118.2578,36.3019 118.0748,36.3019 C117.9118,36.3019 117.8708,36.1389 117.8708,35.8529 C117.8498,35.2189 117.5848,34.5039 117.0738,33.9729 C116.3998,33.2579 114.8058,32.7059 112.9258,32.7059 C111.1488,32.7059 109.9838,33.1559 109.0858,33.9729 C107.5928,35.3419 107.2058,37.2829 107.2058,39.2649 C107.2058,44.1269 110.9038,46.5379 113.6408,46.5379 C115.4598,46.5379 116.5628,46.3339 117.3808,45.3939 C117.7268,45.0059 117.9928,44.4129 118.0748,44.0449 C118.1358,43.7189 118.1768,43.6369 118.3398,43.6369 C118.4838,43.6369 118.5238,43.7799 118.5238,43.9429 C118.5238,44.1879 118.2788,45.9659 118.0748,46.6609 C117.9728,47.0079 117.8908,47.1099 117.5438,47.2529 C116.7258,47.5799 115.1728,47.7229 113.8658,47.7229 C111.0668,47.7229 108.7168,47.1099 106.8578,45.4959" id="Fill-39"></path>\n                          <path d="M124.6098,37.9159 C124.6098,34.8109 124.6098,34.2379 124.5688,33.5839 C124.5288,32.8899 124.3648,32.5629 123.6908,32.4199 C123.5268,32.3789 123.1798,32.3589 122.8938,32.3589 C122.6698,32.3589 122.5468,32.3179 122.5468,32.1749 C122.5468,32.0319 122.6898,31.9909 122.9958,31.9909 C123.5478,31.9909 124.1398,32.0119 124.6508,32.0119 C125.1818,32.0319 125.6518,32.0519 125.9378,32.0519 C126.5918,32.0519 130.6578,32.0519 131.0468,32.0319 C131.4338,31.9909 131.7608,31.9499 131.9238,31.9089 C132.0268,31.8889 132.1488,31.8279 132.2518,31.8279 C132.3538,31.8279 132.3748,31.9089 132.3748,32.0119 C132.3748,32.1539 132.2718,32.3999 132.2108,33.3389 C132.1898,33.5439 132.1488,34.4429 132.1088,34.6879 C132.0888,34.7899 132.0468,34.9129 131.9038,34.9129 C131.7608,34.9129 131.7198,34.8109 131.7198,34.6269 C131.7198,34.4839 131.6998,34.1359 131.5968,33.8909 C131.4548,33.5229 131.2508,33.2779 130.2288,33.1559 C129.8808,33.1149 127.7358,33.0739 127.3278,33.0739 C127.2248,33.0739 127.1838,33.1349 127.1838,33.2779 L127.1838,38.4469 C127.1838,38.5899 127.2048,38.6719 127.3278,38.6719 C127.7768,38.6719 130.1268,38.6719 130.5958,38.6309 C131.0868,38.5899 131.3928,38.5289 131.5778,38.3249 C131.7198,38.1609 131.8018,38.0589 131.9038,38.0589 C131.9858,38.0589 132.0468,38.0999 132.0468,38.2229 C132.0468,38.3449 131.9648,38.6719 131.8828,39.7139 C131.8628,40.1219 131.8018,40.9399 131.8018,41.0829 C131.8018,41.2469 131.8018,41.4709 131.6178,41.4709 C131.4748,41.4709 131.4338,41.3899 131.4338,41.2879 C131.4138,41.0829 131.4138,40.8169 131.3518,40.5519 C131.2508,40.1429 130.9638,39.8369 130.2088,39.7549 C129.8198,39.7139 127.7978,39.6939 127.3068,39.6939 C127.2048,39.6939 127.1838,39.7749 127.1838,39.8979 L127.1838,41.5119 C127.1838,42.2069 127.1638,44.0859 127.1838,44.6789 C127.2248,46.0889 127.5518,46.3949 129.6358,46.3949 C130.1678,46.3949 131.0258,46.3949 131.5568,46.1499 C132.0888,45.9049 132.3338,45.4759 132.4758,44.6379 C132.5168,44.4129 132.5578,44.3319 132.7008,44.3319 C132.8648,44.3319 132.8648,44.4949 132.8648,44.6989 C132.8648,45.1689 132.7008,46.5589 132.5988,46.9669 C132.4558,47.4989 132.2718,47.4989 131.4958,47.4989 C129.9638,47.4989 128.8388,47.4579 127.9608,47.4369 C127.0828,47.3959 126.4488,47.3759 125.8358,47.3759 C125.6108,47.3759 125.1618,47.3759 124.6718,47.3959 C124.2018,47.3959 123.6708,47.4369 123.2608,47.4369 C122.9958,47.4369 122.8528,47.3759 122.8528,47.2329 C122.8528,47.1309 122.9348,47.0689 123.1798,47.0689 C123.4858,47.0689 123.7318,47.0289 123.9158,46.9879 C124.3238,46.9059 124.4258,46.4569 124.5078,45.8639 C124.6098,45.0059 124.6098,43.3919 124.6098,41.5119 L124.6098,37.9159 Z" id="Fill-41"></path>\n                          <path d="M137.6976,47.1917 C137.3716,47.0487 137.3096,46.9467 137.3096,46.4977 C137.3096,45.3737 137.3916,44.1477 137.4126,43.8207 C137.4326,43.5147 137.4936,43.2897 137.6576,43.2897 C137.8416,43.2897 137.8616,43.4737 137.8616,43.6367 C137.8616,43.9027 137.9436,44.3317 138.0456,44.6787 C138.4946,46.1907 139.7006,46.7427 140.9676,46.7427 C142.8056,46.7427 143.7056,45.4957 143.7056,44.4137 C143.7056,43.4117 143.3986,42.4727 141.7026,41.1447 L140.7636,40.4087 C138.5146,38.6517 137.7386,37.2217 137.7386,35.5657 C137.7386,33.3197 139.6186,31.7047 142.4586,31.7047 C143.7866,31.7047 144.6446,31.9087 145.1766,32.0517 C145.3596,32.0927 145.4626,32.1537 145.4626,32.2967 C145.4626,32.5627 145.3806,33.1557 145.3806,34.7497 C145.3806,35.1987 145.3186,35.3617 145.1556,35.3617 C145.0136,35.3617 144.9516,35.2397 144.9516,34.9947 C144.9516,34.8107 144.8486,34.1767 144.4206,33.6457 C144.1136,33.2577 143.5206,32.6447 142.1926,32.6447 C140.6806,32.6447 139.7616,33.5237 139.7616,34.7497 C139.7616,35.6887 140.2316,36.4037 141.9276,37.6907 L142.4996,38.1207 C144.9716,39.9797 145.8496,41.3897 145.8496,43.3307 C145.8496,44.5157 145.4006,45.9247 143.9296,46.8857 C142.9086,47.5397 141.7636,47.7227 140.6806,47.7227 C139.4966,47.7227 138.5766,47.5797 137.6976,47.1917" id="Fill-43"></path>\n                          <path d="M4.057,69.0999 C4.057,65.9949 4.057,65.4219 4.016,64.7689 C3.976,64.0739 3.771,63.7259 3.322,63.6239 C3.097,63.5629 2.831,63.5429 2.586,63.5429 C2.382,63.5429 2.259,63.5019 2.259,63.3379 C2.259,63.2159 2.422,63.1749 2.749,63.1749 C3.526,63.1749 4.813,63.2359 5.406,63.2359 C5.916,63.2359 7.121,63.1749 7.898,63.1749 C8.163,63.1749 8.327,63.2159 8.327,63.3379 C8.327,63.5019 8.204,63.5429 8,63.5429 C7.796,63.5429 7.633,63.5629 7.387,63.6039 C6.836,63.7069 6.672,64.0539 6.631,64.7689 C6.591,65.4219 6.591,65.9949 6.591,69.0999 L6.591,72.6959 C6.591,74.6779 6.591,76.2919 6.672,77.1709 C6.734,77.7219 6.876,78.0899 7.49,78.1719 C7.776,78.2129 8.225,78.2529 8.532,78.2529 C8.756,78.2529 8.859,78.3149 8.859,78.4169 C8.859,78.5599 8.695,78.6209 8.47,78.6209 C7.121,78.6209 5.834,78.5599 5.283,78.5599 C4.813,78.5599 3.526,78.6209 2.708,78.6209 C2.443,78.6209 2.3,78.5599 2.3,78.4169 C2.3,78.3149 2.382,78.2529 2.627,78.2529 C2.933,78.2529 3.179,78.2129 3.363,78.1719 C3.771,78.0899 3.894,77.7429 3.955,77.1499 C4.057,76.2919 4.057,74.6779 4.057,72.6959 L4.057,69.0999 Z" id="Fill-45"></path>\n                          <path d="M16.2748,75.8426 C16.3158,77.4366 16.5818,77.9676 16.9898,78.1106 C17.3378,78.2336 17.7248,78.2536 18.0518,78.2536 C18.2768,78.2536 18.3998,78.2946 18.3998,78.4166 C18.3998,78.5806 18.2148,78.6216 17.9288,78.6216 C16.6018,78.6216 15.7848,78.5596 15.3958,78.5596 C15.2128,78.5596 14.2528,78.6216 13.1898,78.6216 C12.9238,78.6216 12.7398,78.6006 12.7398,78.4166 C12.7398,78.2946 12.8628,78.2536 13.0668,78.2536 C13.3328,78.2536 13.7008,78.2336 13.9868,78.1516 C14.5178,77.9876 14.5988,77.3956 14.6198,75.6176 L14.8028,63.5836 C14.8028,63.1746 14.8648,62.8886 15.0688,62.8886 C15.2948,62.8886 15.4778,63.1546 15.8258,63.5226 C16.0708,63.7876 19.1758,67.0566 22.1588,70.0196 C23.5478,71.4086 26.3058,74.3506 26.6538,74.6776 L26.7558,74.6776 L26.5518,65.5046 C26.5318,64.2576 26.3468,63.8696 25.8568,63.6656 C25.5498,63.5426 25.0598,63.5426 24.7738,63.5426 C24.5288,63.5426 24.4478,63.4816 24.4478,63.3586 C24.4478,63.1946 24.6728,63.1746 24.9788,63.1746 C26.0408,63.1746 27.0218,63.2366 27.4508,63.2366 C27.6748,63.2366 28.4518,63.1746 29.4528,63.1746 C29.7178,63.1746 29.9228,63.1946 29.9228,63.3586 C29.9228,63.4816 29.7998,63.5426 29.5548,63.5426 C29.3508,63.5426 29.1868,63.5426 28.9418,63.6036 C28.3708,63.7676 28.2068,64.1966 28.1858,65.3406 L27.9618,78.2336 C27.9618,78.6826 27.8798,78.8666 27.6958,78.8666 C27.4708,78.8666 27.2258,78.6416 27.0018,78.4166 C25.7138,77.1906 23.0988,74.5146 20.9738,72.4096 C18.7468,70.2036 16.4788,67.7106 16.1108,67.3226 L16.0498,67.3226 L16.2748,75.8426 Z" id="Fill-47"></path>\n                          <path d="M34.1957,78.3758 C33.8697,78.2328 33.8077,78.1308 33.8077,77.6818 C33.8077,76.5578 33.8897,75.3318 33.9107,75.0048 C33.9307,74.6988 33.9917,74.4738 34.1557,74.4738 C34.3397,74.4738 34.3597,74.6578 34.3597,74.8208 C34.3597,75.0868 34.4417,75.5158 34.5437,75.8628 C34.9927,77.3748 36.1987,77.9268 37.4657,77.9268 C39.3037,77.9268 40.2037,76.6798 40.2037,75.5978 C40.2037,74.5958 39.8967,73.6558 38.2007,72.3288 L37.2607,71.5928 C35.0127,69.8358 34.2367,68.4058 34.2367,66.7508 C34.2367,64.5028 36.1167,62.8888 38.9567,62.8888 C40.2847,62.8888 41.1427,63.0928 41.6747,63.2358 C41.8577,63.2768 41.9607,63.3378 41.9607,63.4808 C41.9607,63.7468 41.8787,64.3398 41.8787,65.9338 C41.8787,66.3828 41.8167,66.5458 41.6537,66.5458 C41.5107,66.5458 41.4497,66.4238 41.4497,66.1788 C41.4497,65.9948 41.3467,65.3608 40.9187,64.8298 C40.6117,64.4418 40.0187,63.8288 38.6907,63.8288 C37.1787,63.8288 36.2597,64.7078 36.2597,65.9338 C36.2597,66.8728 36.7297,67.5878 38.4257,68.8758 L38.9977,69.3048 C41.4697,71.1638 42.3477,72.5738 42.3477,74.5148 C42.3477,75.6998 41.8987,77.1088 40.4277,78.0698 C39.4067,78.7238 38.2617,78.9068 37.1787,78.9068 C35.9947,78.9068 35.0747,78.7638 34.1957,78.3758" id="Fill-49"></path>\n                          <path d="M51.6635,64.3192 L48.6185,64.4002 C47.4335,64.4412 46.9435,64.5442 46.6375,64.9932 C46.4335,65.2992 46.3305,65.5452 46.2895,65.7082 C46.2495,65.8722 46.1875,65.9532 46.0645,65.9532 C45.9225,65.9532 45.8815,65.8512 45.8815,65.6272 C45.8815,65.2992 46.2685,63.4412 46.3095,63.2772 C46.3715,63.0112 46.4335,62.8892 46.5555,62.8892 C46.7195,62.8892 46.9235,63.0932 47.4335,63.1342 C48.0265,63.1952 48.8035,63.2362 49.4765,63.2362 L57.5675,63.2362 C58.2225,63.2362 58.6715,63.1752 58.9775,63.1342 C59.2845,63.0722 59.4475,63.0322 59.5295,63.0322 C59.6725,63.0322 59.6925,63.1542 59.6925,63.4612 C59.6925,63.8902 59.6315,65.2992 59.6315,65.8312 C59.6105,66.0352 59.5705,66.1582 59.4475,66.1582 C59.2845,66.1582 59.2435,66.0562 59.2225,65.7492 L59.2025,65.5252 C59.1615,64.9932 58.6095,64.4212 56.7915,64.3802 L54.2175,64.3192 L54.2175,72.6962 C54.2175,74.5752 54.2175,76.1902 54.3195,77.0682 C54.3805,77.6402 54.5035,78.0902 55.1165,78.1722 C55.4015,78.2122 55.8515,78.2532 56.1585,78.2532 C56.3835,78.2532 56.4845,78.3152 56.4845,78.4172 C56.4845,78.5602 56.3215,78.6212 56.0975,78.6212 C54.7485,78.6212 53.4615,78.5602 52.8895,78.5602 C52.4195,78.5602 51.1325,78.6212 50.3145,78.6212 C50.0495,78.6212 49.9065,78.5602 49.9065,78.4172 C49.9065,78.3152 49.9875,78.2532 50.2325,78.2532 C50.5395,78.2532 50.7845,78.2122 50.9685,78.1722 C51.3775,78.0902 51.4995,77.6402 51.5605,77.0482 C51.6635,76.1902 51.6635,74.5752 51.6635,72.6962 L51.6635,64.3192 Z" id="Fill-51"></path>\n                          <path d="M65.351,69.0999 C65.351,65.9949 65.351,65.4219 65.31,64.7689 C65.269,64.0739 65.065,63.7259 64.616,63.6239 C64.391,63.5629 64.125,63.5429 63.88,63.5429 C63.676,63.5429 63.553,63.5019 63.553,63.3379 C63.553,63.2159 63.716,63.1749 64.043,63.1749 C64.82,63.1749 66.107,63.2359 66.7,63.2359 C67.21,63.2359 68.415,63.1749 69.193,63.1749 C69.457,63.1749 69.621,63.2159 69.621,63.3379 C69.621,63.5019 69.498,63.5429 69.294,63.5429 C69.09,63.5429 68.927,63.5629 68.681,63.6039 C68.13,63.7069 67.966,64.0539 67.925,64.7689 C67.884,65.4219 67.884,65.9949 67.884,69.0999 L67.884,72.6959 C67.884,74.6779 67.884,76.2919 67.966,77.1709 C68.028,77.7219 68.17,78.0899 68.784,78.1719 C69.07,78.2129 69.519,78.2529 69.826,78.2529 C70.05,78.2529 70.153,78.3149 70.153,78.4169 C70.153,78.5599 69.989,78.6209 69.764,78.6209 C68.415,78.6209 67.128,78.5599 66.578,78.5599 C66.107,78.5599 64.82,78.6209 64.002,78.6209 C63.737,78.6209 63.594,78.5599 63.594,78.4169 C63.594,78.3149 63.676,78.2529 63.921,78.2529 C64.227,78.2529 64.473,78.2129 64.657,78.1719 C65.065,78.0899 65.188,77.7429 65.249,77.1499 C65.351,76.2919 65.351,74.6779 65.351,72.6959 L65.351,69.0999 Z" id="Fill-53"></path>\n                          <path d="M79.0482,64.3192 L76.0032,64.4002 C74.8182,64.4412 74.3282,64.5442 74.0222,64.9932 C73.8182,65.2992 73.7152,65.5452 73.6742,65.7082 C73.6342,65.8722 73.5722,65.9532 73.4492,65.9532 C73.3072,65.9532 73.2662,65.8512 73.2662,65.6272 C73.2662,65.2992 73.6532,63.4412 73.6942,63.2772 C73.7562,63.0112 73.8182,62.8892 73.9402,62.8892 C74.1042,62.8892 74.3082,63.0932 74.8182,63.1342 C75.4112,63.1952 76.1882,63.2362 76.8612,63.2362 L84.9522,63.2362 C85.6072,63.2362 86.0562,63.1752 86.3622,63.1342 C86.6692,63.0722 86.8322,63.0322 86.9142,63.0322 C87.0572,63.0322 87.0772,63.1542 87.0772,63.4612 C87.0772,63.8902 87.0162,65.2992 87.0162,65.8312 C86.9952,66.0352 86.9552,66.1582 86.8322,66.1582 C86.6692,66.1582 86.6282,66.0562 86.6082,65.7492 L86.5872,65.5252 C86.5462,64.9932 85.9942,64.4212 84.1762,64.3802 L81.6022,64.3192 L81.6022,72.6962 C81.6022,74.5752 81.6022,76.1902 81.7042,77.0682 C81.7652,77.6402 81.8882,78.0902 82.5012,78.1722 C82.7862,78.2122 83.2362,78.2532 83.5432,78.2532 C83.7682,78.2532 83.8692,78.3152 83.8692,78.4172 C83.8692,78.5602 83.7062,78.6212 83.4822,78.6212 C82.1332,78.6212 80.8462,78.5602 80.2742,78.5602 C79.8042,78.5602 78.5172,78.6212 77.6992,78.6212 C77.4342,78.6212 77.2912,78.5602 77.2912,78.4172 C77.2912,78.3152 77.3722,78.2532 77.6172,78.2532 C77.9242,78.2532 78.1692,78.2122 78.3532,78.1722 C78.7622,78.0902 78.8842,77.6402 78.9452,77.0482 C79.0482,76.1902 79.0482,74.5752 79.0482,72.6962 L79.0482,64.3192 Z" id="Fill-55"></path>\n                          <path d="M92.4389,69.0999 C92.4389,65.9949 92.4389,65.4219 92.3979,64.7689 C92.3569,64.0739 92.1929,63.7469 91.5189,63.6039 C91.3559,63.5629 91.0079,63.5429 90.7219,63.5429 C90.4979,63.5429 90.3749,63.5019 90.3749,63.3589 C90.3749,63.2159 90.5179,63.1749 90.8249,63.1749 C91.9079,63.1749 93.1949,63.2359 93.8069,63.2359 C94.2969,63.2359 95.5849,63.1749 96.3209,63.1749 C96.6269,63.1749 96.7699,63.2159 96.7699,63.3589 C96.7699,63.5019 96.6469,63.5429 96.4429,63.5429 C96.2179,63.5429 96.0959,63.5629 95.8509,63.6039 C95.2989,63.7069 95.1349,64.0539 95.0939,64.7689 C95.0539,65.4219 95.0539,65.9949 95.0539,69.0999 L95.0539,71.9599 C95.0539,74.9229 95.6459,76.1689 96.6469,76.9869 C97.5669,77.7429 98.5059,77.8249 99.2019,77.8249 C100.0999,77.8249 101.2039,77.5389 102.0209,76.7209 C103.1449,75.5979 103.2059,73.7589 103.2059,71.6539 L103.2059,69.0999 C103.2059,65.9949 103.2059,65.4219 103.1659,64.7689 C103.1249,64.0739 102.9599,63.7469 102.2869,63.6039 C102.1239,63.5629 101.7759,63.5429 101.5509,63.5429 C101.3269,63.5429 101.2039,63.5019 101.2039,63.3589 C101.2039,63.2159 101.3459,63.1749 101.6319,63.1749 C102.6739,63.1749 103.9609,63.2359 103.9819,63.2359 C104.2269,63.2359 105.5149,63.1749 106.3119,63.1749 C106.5969,63.1749 106.7409,63.2159 106.7409,63.3589 C106.7409,63.5019 106.6179,63.5429 106.3729,63.5429 C106.1479,63.5429 106.0259,63.5629 105.7809,63.6039 C105.2289,63.7069 105.0649,64.0539 105.0239,64.7689 C104.9839,65.4219 104.9839,65.9949 104.9839,69.0999 L104.9839,71.2869 C104.9839,73.5539 104.7579,75.9649 103.0429,77.4369 C101.5919,78.6829 100.1209,78.9069 98.7929,78.9069 C97.7099,78.9069 95.7489,78.8459 94.2569,77.4979 C93.2149,76.5579 92.4389,75.0459 92.4389,72.0829 L92.4389,69.0999 Z" id="Fill-57"></path>\n                          <path d="M115.7152,64.3192 L112.6702,64.4002 C111.4852,64.4412 110.9952,64.5442 110.6892,64.9932 C110.4852,65.2992 110.3822,65.5452 110.3412,65.7082 C110.3002,65.8722 110.2392,65.9532 110.1162,65.9532 C109.9742,65.9532 109.9332,65.8512 109.9332,65.6272 C109.9332,65.2992 110.3202,63.4412 110.3612,63.2772 C110.4232,63.0112 110.4852,62.8892 110.6072,62.8892 C110.7712,62.8892 110.9752,63.0932 111.4852,63.1342 C112.0782,63.1952 112.8552,63.2362 113.5282,63.2362 L121.6192,63.2362 C122.2742,63.2362 122.7232,63.1752 123.0292,63.1342 C123.3362,63.0722 123.4992,63.0322 123.5812,63.0322 C123.7242,63.0322 123.7442,63.1542 123.7442,63.4612 C123.7442,63.8902 123.6832,65.2992 123.6832,65.8312 C123.6622,66.0352 123.6222,66.1582 123.4992,66.1582 C123.3362,66.1582 123.2952,66.0562 123.2752,65.7492 L123.2542,65.5252 C123.2132,64.9932 122.6612,64.4212 120.8432,64.3802 L118.2692,64.3192 L118.2692,72.6962 C118.2692,74.5752 118.2692,76.1902 118.3712,77.0682 C118.4322,77.6402 118.5552,78.0902 119.1682,78.1722 C119.4542,78.2122 119.9032,78.2532 120.2102,78.2532 C120.4352,78.2532 120.5362,78.3152 120.5362,78.4172 C120.5362,78.5602 120.3732,78.6212 120.1492,78.6212 C118.8002,78.6212 117.5132,78.5602 116.9412,78.5602 C116.4712,78.5602 115.1842,78.6212 114.3662,78.6212 C114.1012,78.6212 113.9582,78.5602 113.9582,78.4172 C113.9582,78.3152 114.0392,78.2532 114.2842,78.2532 C114.5912,78.2532 114.8362,78.2122 115.0202,78.1722 C115.4292,78.0902 115.5512,77.6402 115.6122,77.0482 C115.7152,76.1902 115.7152,74.5752 115.7152,72.6962 L115.7152,64.3192 Z" id="Fill-59"></path>\n                          <path d="M129.5385,69.0999 C129.5385,65.9949 129.5385,65.4219 129.4975,64.7689 C129.4565,64.0739 129.2935,63.7469 128.6195,63.6039 C128.4555,63.5629 128.1085,63.5429 127.8225,63.5429 C127.5985,63.5429 127.4755,63.5019 127.4755,63.3589 C127.4755,63.2159 127.6185,63.1749 127.9245,63.1749 C128.4765,63.1749 129.0685,63.1949 129.5795,63.1949 C130.1105,63.2159 130.5805,63.2359 130.8665,63.2359 C131.5205,63.2359 135.5865,63.2359 135.9755,63.2159 C136.3625,63.1749 136.6895,63.1339 136.8525,63.0929 C136.9555,63.0729 137.0775,63.0119 137.1805,63.0119 C137.2825,63.0119 137.3025,63.0929 137.3025,63.1949 C137.3025,63.3379 137.2005,63.5839 137.1395,64.5229 C137.1185,64.7279 137.0775,65.6269 137.0375,65.8719 C137.0175,65.9739 136.9755,66.0969 136.8325,66.0969 C136.6895,66.0969 136.6485,65.9949 136.6485,65.8099 C136.6485,65.6679 136.6285,65.3199 136.5255,65.0749 C136.3835,64.7069 136.1795,64.4619 135.1575,64.3399 C134.8095,64.2989 132.6645,64.2579 132.2565,64.2579 C132.1535,64.2579 132.1125,64.3189 132.1125,64.4619 L132.1125,69.6309 C132.1125,69.7739 132.1335,69.8559 132.2565,69.8559 C132.7055,69.8559 135.0555,69.8559 135.5245,69.8149 C136.0155,69.7739 136.3215,69.7129 136.5065,69.5089 C136.6485,69.3449 136.7305,69.2429 136.8325,69.2429 C136.9145,69.2429 136.9755,69.2839 136.9755,69.4069 C136.9755,69.5289 136.8935,69.8559 136.8115,70.8979 C136.7915,71.3069 136.7305,72.1239 136.7305,72.2669 C136.7305,72.4309 136.7305,72.6549 136.5465,72.6549 C136.4035,72.6549 136.3625,72.5739 136.3625,72.4719 C136.3425,72.2669 136.3425,72.0009 136.2805,71.7359 C136.1795,71.3269 135.8935,71.0209 135.1375,70.9389 C134.7485,70.8979 132.7265,70.8779 132.2355,70.8779 C132.1335,70.8779 132.1125,70.9589 132.1125,71.0819 L132.1125,72.6959 C132.1125,73.3909 132.0925,75.2699 132.1125,75.8629 C132.1535,77.2729 132.4805,77.5789 134.5645,77.5789 C135.0965,77.5789 135.9545,77.5789 136.4855,77.3339 C137.0175,77.0889 137.2625,76.6599 137.4045,75.8219 C137.4455,75.5979 137.4865,75.5159 137.6295,75.5159 C137.7935,75.5159 137.7935,75.6789 137.7935,75.8829 C137.7935,76.3529 137.6295,77.7429 137.5275,78.1509 C137.3845,78.6829 137.2005,78.6829 136.4245,78.6829 C134.8925,78.6829 133.7685,78.6419 132.8895,78.6209 C132.0115,78.5799 131.3775,78.5599 130.7655,78.5599 C130.5395,78.5599 130.0905,78.5599 129.6005,78.5799 C129.1305,78.5799 128.5995,78.6209 128.1895,78.6209 C127.9245,78.6209 127.7815,78.5599 127.7815,78.4169 C127.7815,78.3149 127.8635,78.2529 128.1085,78.2529 C128.4145,78.2529 128.6605,78.2129 128.8445,78.1719 C129.2525,78.0899 129.3545,77.6409 129.4365,77.0479 C129.5385,76.1899 129.5385,74.5759 129.5385,72.6959 L129.5385,69.0999 Z" id="Fill-61"></path>\n                      </g>\n                  </g>\n              </g>\n          </svg>\n        </a>\n      </div>\n      <div class="m-footer-contact">\n        <h3>Global Forest Watch</h3>\n        <p>10 G Street NE Suite 800, Washington, DC 20002, USA</p>\n        <p>\n          Phone <a href="tel:+1 (202) 729-7600">+1 (202) 729-7600</a> Fax: <a href="tel:+1 (202) 720 7610">+1 (202) 720 7610</a></p>\n      </div>\n    </div>\n\n      <div class="m-footer-logos slider js_slider" id="my-gfw-slider">\n        <span class="js_prev prev">Prev</span>\n        <div class="frame js_frame">\n          <ul class="slides js_slides">\n            <li class="js_slide"><a target="_blank" rel="noreferrer" title="Agence française de développement international" href="http://www.afd.fr/home" class="afc"></a></li>\n            <li class="js_slide"><a target="_blank" rel="noreferrer" title="Airbus" href="http://airbusdefenceandspace.com/" class="airbus"></a></li>\n            <li class="js_slide"><a target="_blank" rel="noreferrer" title="Badan Nasional Penanggulangan Bencana" href="http://bnpb.go.id/" class="bnpb"></a></li>\n            <li class="js_slide"><a target="_blank" rel="noreferrer" href="http://www.cisl.cam.ac.uk/banking" class="bei"></a></li>\n            <li class="js_slide"><a target="_blank" rel="noreferrer" href="http://blueraster.com/" class="blueraster"></a></li>\n\n            <li class="js_slide"><a target="_blank" rel="noreferrer" href="http://www.cisl.cam.ac.uk/" class="cambridge"></a></li>\n            <li class="js_slide"><a target="_blank" rel="noreferrer" href="http://cartodb.com/" class="cartodb"></a></li>\n            <li class="js_slide"><a target="_blank" rel="noreferrer" href="http://www.cgdev.org/" class="centerforglobaldevelopment"></a></li>\n            <li class="js_slide"><a target="_blank" rel="noreferrer" href="http://foreststreesagroforestry.org/" class="cgiar"></a></li>\n            <li class="js_slide"><a target="_blank" rel="noreferrer" href="http://ciat.cgiar.org/" class="ciat"></a></li>\n\n            <li class="js_slide"><a target="_blank" rel="noreferrer" title="Climate and Land Use Alliance" href="http://www.climateandlandusealliance.org/" class="clua"></a></li>\n            <li class="js_slide"><a target="_blank" rel="noreferrer" href="https://www.digitalglobe.com/" class="digitalglobe"></a></li>\n            <li class="js_slide"><a target="_blank" rel="noreferrer" href="http://www.esri.com/gfw" class="esri"></a></li>\n            <li class="js_slide"><a target="_blank" rel="noreferrer" href="http://earthjournalism.net/" class="ejn"></a></li>\n            <li class="js_slide"><a target="_blank" rel="noreferrer" href="http://ewmi.org/" class="ewmi"></a></li>\n\n            <li class="js_slide"><a target="_blank" rel="noreferrer" href="http://www.thegef.org/gef/" class="gef"></a></li>\n            <li class="js_slide"><a target="_blank" rel="noreferrer" href="https://www.genfound.org/" class="generation"></a></li>\n            <li class="js_slide"><a target="_blank" rel="noreferrer" href="http://globalforestwatch.ca/" class="globalforestwatchcanada"></a></li>\n            <li class="js_slide"><a target="_blank" rel="noreferrer" href="http://earthengine.google.org/" class="google"></a></li>\n            <li class="js_slide"><a target="_blank" rel="noreferrer" href="http://www.icf.gob.hn/" class="icf"></a></li>\n\n            <li class="js_slide"><a target="_blank" rel="noreferrer" href="http://www.imazon.org.br/pagina-inicial-en?set_language=en&amp;cl=en" class="imazon"></a></li>\n            <li class="js_slide"><a target="_blank" rel="noreferrer" href="http://www.inab.gob.gt/" class="inab"></a></li>\n            <li class="js_slide"><a target="_blank" rel="noreferrer" href="http://europe.croklaan.com/taking-responsibility" class="ioi"></a></li>\n            <li class="js_slide"><a target="_blank" rel="noreferrer" href="http://www.janegoodall.org/" class="thejanegoodallinstitute"></a></li>\n            <li class="js_slide"><a target="_blank" rel="noreferrer" title="Le Ministère des Forêts et de la Faune" href="http://www.minfof.cm/" class="ministiere"></a></li>\n\n            <li class="js_slide"><a target="_blank" rel="noreferrer" title="Moises Bertoni" href="http://www.mbertoni.org.py/v1/en" class="moises"></a></li>\n            <li class="js_slide"><a target="_blank" rel="noreferrer" title="Mongabay" href="http://www.mongabay.com/" class="mongabay"></a></li>\n            <li class="js_slide"><a target="_blank" rel="noreferrer" href="http://www.moore.org/" class="moore"></a></li>\n            <li class="js_slide"><a target="_blank" rel="noreferrer" title="ONG Muyissi" href="http://www.ongmuyissi.org/" class="muyissi"></a></li>\n            <li class="js_slide"><a target="_blank" rel="noreferrer" href="https://www.regjeringen.no/en/topics/climate-and-environment/climate/klima--og-skogprosjektet/id2000712/" class="norwegianministri"></a></li>\n\n            <li class="js_slide"><a target="_blank" rel="noreferrer" href="http://www.opendevelopmentcambodia.net/" class="opendevcam"></a></li>\n            <li class="js_slide"><a target="_blank" rel="noreferrer" href="http://orbitalinsight.com/" class="orbital"></a></li>\n            <li class="js_slide"><a target="_blank" rel="noreferrer" href="http://osfac.net/index.php?lang=en" class="osfac"></a></li>\n            <li class="js_slide"><a target="_blank" rel="noreferrer" href="http://www.osinfor.gob.pe/portal/index.php" class="osinfor"></a></li>\n            <li class="js_slide"><a target="_blank" rel="noreferrer" href="http://www.rainforestfoundationuk.org/" class="rfuk"></a></li>\n\n            <li class="js_slide"><a target="_blank" rel="noreferrer" href="http://raisg.socioambiental.org/" class="raisg"></a></li>\n            <li class="js_slide"><a target="_blank" rel="noreferrer" href="http://www.redd-indonesia.org/" class="redd"></a></li>\n            <li class="js_slide"><a target="_blank" rel="noreferrer" href="http://www.reforestamosmexico.org/" class="rm"></a></li>\n            <li class="js_slide"><a target="_blank" rel="noreferrer" href="http://www.resolv.org/site-BiodiversityWildlifeSolutions/" class="resolve"></a></li>\n            <li class="js_slide"><a target="_blank" rel="noreferrer" title="RSPO" href="http://www.rspo.org/" class="rspo"></a></li>\n\n            <li class="js_slide"><a target="_blank" rel="noreferrer" title="RTRS" href="http://www.responsiblesoy.org/?lang=en" class="rtrs"></a></li>\n            <li class="js_slide"><a target="_blank" rel="noreferrer" href="http://www.scanex.ru/en/" class="scannex"></a></li>\n            <li class="js_slide"><a target="_blank" rel="noreferrer" href="http://www.tiliafund.org/" class="thetiliafund"></a></li>\n            <li class="js_slide"><a target="_blank" rel="noreferrer" href="http://www.transparentworld.ru/ru/" class="tipos"></a></li>\n            <li class="js_slide"><a target="_blank" rel="noreferrer" href="http://www.gov.uk/government/organisations/department-for-international-development" class="ukaid"></a></li>\n\n            <li class="js_slide"><a target="_blank" rel="noreferrer" href="http://www.unep.org/" class="unep"></a></li>\n            <li class="js_slide"><a target="_blank" rel="noreferrer" title="UNEP-WCMC" href="http://www.unep-wcmc.org/" class="unepwcmc"></a></li>\n            <li class="js_slide"><a target="_blank" rel="noreferrer" href="http://www.unilever.com/" class="unilever"></a></li>\n            <li class="js_slide"><a target="_blank" rel="noreferrer" href="http://www.geog.umd.edu/" class="universityofmaryland"></a></li>\n            <li class="js_slide"><a target="_blank" rel="noreferrer" href="http://www.usaid.gov/" class="usaid"></a></li>\n\n            <li class="js_slide"><a target="_blank" rel="noreferrer" href="https://www.urthecast.com/" class="urthecast"></a></li>\n            <li class="js_slide"><a target="_blank" rel="noreferrer" href="http://vizzuality.com/" class="vizzuality"></a></li>\n            <li class="js_slide"><a target="_blank" rel="noreferrer" title="Woods Hole Research Center" href="http://www.whrc.org/" class="whrc"></a></li>\n            <li class="js_slide"><a target="_blank" rel="noreferrer" title="Alliance for Zero Extinction" href="http://www.zeroextinction.org/" class="zeroextinction"></a></li>\n            <li class="js_slide"><a target="_blank" rel="noreferrer" href="http://www.zsl.org/" class="zsl"></a></li>\n          </ul>\n        </div>\n        <span class="js_next next">Next</span>\n      </div>\n\n    <div class="m-footer-terms">\n      <a href="/terms">Terms of Service</a> ·\n      <a href="http://stats.pingdom.com/ghabapk9rihc" target="_blank">Global Forest Watch System Status</a> ·\n      <a href="mailto:gfw@wri.org">Contact us</a>\n    </div>\n  </footer>\n</div>\n';

	}
	return __p
	}

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '';
	with (obj) {
	__p += '<svg style="position: absolute; width: 0; height: 0;" width="0" height="0" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n<defs>\n<symbol id="icon-f-blog" viewBox="0 0 1280 1024">\n  <title>f-blog</title>\n  <path class="path1" d="M213.75 897c-68.75 0-68.75-67.65-68.75-67.65v-702.35h880v689.7c0 31.35 9.9 65.45 23.1 80.3h-834.35zM1080 182v-110h-990v744.7c0 0 0 135.3 137.5 135.3h859.1c0 0 103.4-2.2 103.4-135.3v-634.7h-110zM255 732h330v-385h-330v385zM640 402h275v-55h-275v55zM640 512h275v-55h-275v55zM640 732h220v-55h-220v55zM255 292h660v-55h-660v55zM640 567h275v55h-275v-55z"></path>\n</symbol>\n<symbol id="icon-f-develop" viewBox="0 0 1024 1024">\n  <title>f-develop</title>\n  <path class="path1" d="M393.473 534.010l-261.735 261.569c-29.414 29.531-31.215 75.338-3.601 103.061l59.429 59.666c27.614 27.12 73.239 25.312 102.653-3.617l262.335-262.171c29.414-29.531 30.615-75.338 3.601-103.061l-3.601-3.014 269.537-269.405 40.219 12.659 115.257-168.152-52.827-53.035-168.084 115.117 12.003 40.985-268.937 268.802-3.001-3.014c-27.614-27.723-73.839-25.915-103.253 3.617zM541.652 418.689l26.135-26.863-11.822-11.87c22.402-84.954 1.243-179.904-64.708-249.865-80.267-83.706-200.974-105.566-298.667-61.215l147.467 149.918c16.801 17.489 17.42 44.973 0.624 61.841l-60.356 59.966c-16.177 16.868-44.179 16.241-60.975-0.627l-150.576-147.422c-44.179 98.073-22.402 218.632 61.599 298.588 41.688 39.354 92.086 63.089 144.357 70.588l154.934-154.289c28.002 27.484 72.8 27.484 100.802 0l11.201 11.243zM621.295 790.988l166.135 162.409c34.845 33.73 92.086 31.856 127.556-3.75l34.221-34.357c36.088-36.232 37.955-93.075 4.358-128.056l-223.376-228.627-24.269 24.361 11.822 11.243c-28.002 27.484-28.002 73.084 0 100.568l-96.444 96.198z"></path>\n</symbol>\n<symbol id="icon-f-download" viewBox="0 0 1067 1024">\n  <title>f-download</title>\n  <path class="path1" d="M451.071 48.96v334.796h-173.073l255.353 346.145 255.353-346.145h-173.073v-334.796h-164.561zM51.018 956.882h964.667v-397.216h-113.49v283.725h-737.686v-283.725h-113.49v397.216z"></path>\n</symbol>\n<symbol id="icon-f-feedback" viewBox="0 0 1067 1024">\n  <title>f-feedback</title>\n  <path class="path1" d="M0 408.092c0 183.91 99.333 340.3 268.667 390.641-1.333 6.041-2 11.41-2 17.451v143.638c0 48.327 34 51.683 68.667 17.451l198-171.828h121.333c227.333 0 412-182.567 412-408.092s-184.667-397.353-412-397.353h-242.667c-227.333 0-412 182.567-412 408.092v0zM266.667 268.482h533.333v67.12h-533.333v-67.12zM266.667 402.722h533.333v67.12h-533.333v-67.12zM266.667 536.963h333.333v67.12h-333.333v-67.12z"></path>\n</symbol>\n<symbol id="icon-f-howto" viewBox="0 0 1024 1024">\n  <title>f-howto</title>\n  <path class="path1" d="M512 0c-282.504 0-512 229.496-512 512s229.496 512 512 512c282.504 0 512-229.496 512-512s-229.496-512-512-512zM512 107.789c223.029 0 404.211 181.181 404.211 404.211s-181.181 404.211-404.211 404.211c-223.029 0-404.211-181.181-404.211-404.211s181.181-404.211 404.211-404.211zM441.937 691.435h119.107v114.291h-119.107v-114.291zM375.646 245.487c31.259-19.761 70.063-29.908 115.874-29.908 59.823 0 109.945 14.42 149.288 42.726 39.882 28.84 59.823 71.031 59.823 127.109 0 34.18-8.623 63.020-25.869 86.519-10.24 14.42-29.642 32.578-58.206 55.009l-28.025 21.363c-15.629 12.284-25.331 26.169-30.72 41.657-3.234 10.147-4.851 25.635-4.851 46.998h-108.328c1.617-44.862 5.928-75.838 12.935-92.394 7.006-17.090 24.253-36.851 53.356-59.282l28.564-22.431c9.701-6.943 17.246-14.954 23.175-23.499 10.779-14.42 16.168-30.442 16.168-48.066 0-19.761-5.928-37.919-17.785-54.475s-33.415-25.101-64.674-25.101c-30.72 0-52.817 10.147-65.213 30.442-12.935 20.829-19.402 41.657-19.402 63.554h-115.335c3.234-75.304 29.642-128.711 79.225-160.221v0z"></path>\n</symbol>\n<symbol id="icon-f-instagram" viewBox="0 0 1024 1024">\n  <title>f-instagram</title>\n  <path class="path1" d="M192 0c-22.464 0-43.968 4.064-64 11.168v308.832h64v-320zM928 192c0 35.36-28.64 64-64 64h-64c-35.36 0-64-28.64-64-64v-32c0-35.36 28.64-64 64-64h64c35.36 0 64 28.64 64 64v32zM832 0h-576v320h79.36c46.528-42.816 108.448-69.184 176.64-69.184s130.112 26.368 176.64 69.184h271.36v512c0 70.688-57.312 128-128 128h-640c-70.688 0-128-57.312-128-128v-782.816c-39.2 35.136-64 86.016-64 142.816v640c0 106.048 85.952 192 192 192h640c106.048 0 192-85.952 192-192v-640c0-106.048-85.952-192-192-192v0zM382.016 544c0-71.776 58.208-129.984 129.984-129.984s129.984 58.208 129.984 129.984c0 71.776-58.208 129.984-129.984 129.984s-129.984-58.208-129.984-129.984v0zM706.912 544c0-107.648-87.264-194.912-194.912-194.912s-194.912 87.264-194.912 194.912c0 107.648 87.264 194.912 194.912 194.912s194.912-87.264 194.912-194.912v0z"></path>\n</symbol>\n<symbol id="icon-f-joindiscussion" viewBox="0 0 1229 1024">\n  <title>f-joindiscussion</title>\n  <path class="path1" d="M0 549.601c0 144.51 108.288 252.893 231.936 292.095-0.768 4.612-1.536 9.224-1.536 13.836v112.226c0 37.665 24.576 39.202 49.92 12.299l107.52-134.518h87.552c132.096 0 243.456-104.539 284.16-230.602h69.888l119.040 134.518c25.344 26.904 49.92 39.202 49.92 1.537v-134.518c123.648-3.075 230.4-152.966 230.4-297.476 0-176.026-134.4-318.999-299.52-318.999h-175.872c-134.4 0-248.064 103.002-286.464 230.602h-167.424c-165.12 0-299.52 142.973-299.52 318.999v0zM774.144 538.071l0.768-23.829c0-152.966-101.376-243.669-236.544-272.879 36.096-92.241 127.488-164.496 224.256-164.496h170.496c125.184 0 219.648 103.002 218.88 232.139-1.536 244.438-230.4 230.602-230.4 230.602v73.024l-76.8-74.561h-70.656z"></path>\n</symbol>\n<symbol id="icon-f-mail" viewBox="0 0 1422 1024">\n  <title>f-mail</title>\n  <path class="path1" d="M116.349 83.78v111.513l594.751 483.193 594.751-483.193v-111.513h-1189.492zM971.292 529.843l334.547 297.376v-557.611l-334.547 260.236zM116.349 827.219l334.547-297.376-334.547-260.236v557.611zM711.091 752.87l-223.027-185.862-371.714 334.547h1189.492l-371.714-334.547-223.027 185.862z"></path>\n</symbol>\n<symbol id="icon-f-twitter" viewBox="0 0 1219 1024">\n  <title>f-twitter</title>\n  <path class="path1" d="M1159.618 156.69c-18.529 10.149-74.123 30.454-125.871 35.513 33.212-17.804 82.378-76.148 94.55-122.559-31.973 20.368-105.38 49.934-141.544 49.934v0.070c-41.327-42.926-99.534-69.724-164.066-69.724-125.321 0-226.951 101.029-226.951 225.607 0 17.258 1.993 34.18 5.744 50.346h-0.032c-170.047-4.443-355.978-89.134-467.926-234.118-68.833 118.389-9.247 250.113 68.833 298.099-26.714 2.018-75.949-3.078-99.119-25.529-1.514 78.611 36.477 182.75 175.101 220.516-26.682 14.288-73.951 10.187-94.512 7.141 7.22 66.373 100.703 153.115 202.914 153.115-36.445 41.867-173.485 117.843-327.309 93.679 104.447 63.193 226.191 99.766 355.052 99.766 366.156 0 650.554-295.020 635.258-658.94-0.070-0.412-0.070-0.819-0.102-1.263 0.032-0.92 0.102-1.847 0.102-2.805 0-1.162-0.102-2.222-0.139-3.313 33.351-22.66 78.046-62.749 110.019-115.52z"></path>\n</symbol>\n<!-- Close -->\n<symbol id="shape-close" viewBox="0 0 25 25">\n  <path d="M 5 19 L 19 5 L 21 7 L 7 21 L 5 19 ZM 7 5 L 21 19 L 19 21 L 5 7 L 7 5 Z"/>\n</symbol>\n\n</defs>\n</svg>';

	}
	return __p
	}

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _facade = __webpack_require__(5);

	var _facade2 = _interopRequireDefault(_facade);

	var _utils = __webpack_require__(8);

	var _utils2 = _interopRequireDefault(_utils);

	var _feedback = __webpack_require__(26);

	var _feedback2 = _interopRequireDefault(_feedback);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var colors = {
	  'default': 'green',
	  'fires.globalforestwatch.org': 'red',
	  'commodities.globalforestwatch.org': 'orange',
	  'climate.globalforestwatch.org': 'blue'
	};

	/**
	 * Feedback
	 * @param  {window} root
	 * @return {Class}
	 */

	var Feedback = function () {
	  function Feedback() {
	    _classCallCheck(this, Feedback);

	    this.el = document.createElement('div');
	    this.el.id = 'feedbackGfw';

	    document.body.appendChild(this.el);

	    this.render();
	  }

	  _createClass(Feedback, [{
	    key: 'render',
	    value: function render() {
	      this.el.innerHTML = (0, _feedback2.default)();

	      this.initVars();
	      this.setListeners();
	      this.setHiddenInputs();
	      this.setColors();
	      this.checkForParams();

	      return this;
	    }
	  }, {
	    key: 'initVars',
	    value: function initVars() {
	      this.$window = window;
	      this.$document = (0, _facade2.default)(document);
	      this.$body = (0, _facade2.default)('body');
	      this.$htmlbody = (0, _facade2.default)('html, body');
	      this.$el = (0, _facade2.default)('#feedbackModal');

	      this.$content = this.$el.find('.modal-content');
	      this.$contentWrapper = this.$el.find('.modal-wrapper');
	      this.$backdrop = this.$el.find('.modal-backdrop');
	      this.$close = this.$el.find('.modal-close');
	      this.$spinner = this.$el.find('.modal-spinner');

	      this.$modalStep = this.$el.find('.modal-step');
	      this.$modalStepBtn = this.$el.find('.modal-step-btn');

	      this.$form = this.$el.find('#feedback-form');
	      this.$textarea = this.$el.find('#feedback-textarea');
	      this.$email = this.$el.find('#feedback-email');
	      this.$hostname = this.$el.find('#feedback-hostname');

	      this.$dinamicColor = this.$el.find('.js-dinamic-color');

	      this.hidden = true;
	    }
	  }, {
	    key: 'setListeners',
	    value: function setListeners() {
	      this.$body.on('click', '.feedback-link', this.show.bind(this));

	      this.$el.on('click', '.js-modal-close', this.hide.bind(this));
	      this.$el.on('click', '.js-btn-continue', this.actionContinue.bind(this));
	      this.$el.on('click', '.js-btn-submit', this.actionSubmit.bind(this));
	      this.$el.on('click', '.js-btn-close', this.actionClose.bind(this));
	      this.$el.on('change', '.js-radio-box input', this.changeRequire.bind(this));
	    }

	    /**
	     * Show & hide & toggle
	     * @param  {e} event
	     * @return {}
	     */

	  }, {
	    key: 'show',
	    value: function show(e) {
	      e && e.preventDefault() && e.stopPropagation();
	      this.hidden = false;
	      this.toggle();
	      window.history.pushState('Show feedback', document.title, this.toggleParam('show_feedback', true));
	    }
	  }, {
	    key: 'hide',
	    value: function hide(e) {
	      e && e.preventDefault();
	      this.hidden = true;
	      this.toggle();
	      window.history.pushState('Hide feedback', document.title, this.toggleParam('show_feedback', null));

	      //Give back scroll beyond modal window.
	      this.$htmlbody.removeClass('-no-scroll');
	      this.changeStep(1);

	      return this;
	    }
	  }, {
	    key: 'toggle',
	    value: function toggle() {
	      !!this.hidden ? this.stopBindings() : this.initBindings();
	      this.$el.toggleClass('-active', !this.hidden);
	      //Prevent scroll beyond modal window.
	      this.$htmlbody.toggleClass('-no-scroll', !this.hidden);
	    }

	    /**
	     * Init bindings & stopBindings
	     * @param  {}
	     * @return {}
	     */

	  }, {
	    key: 'initBindings',
	    value: function initBindings() {
	      var _this = this;

	      // document keyup
	      this.$document.on('keyup.feedback', function (e) {
	        if (e.keyCode === 27) {
	          _this.hide();
	        }
	      });
	      // backdrop
	      this.$backdrop.on('click', function () {
	        _this.hide();
	      });
	    }
	  }, {
	    key: 'stopBindings',
	    value: function stopBindings() {
	      // Test this namespace
	      this.$document.off('keyup.feedback');
	      this.$backdrop.off('click');
	    }

	    /**
	     * Set global color of the feedback modal
	     * @param  {}
	     * @return {}
	     */

	  }, {
	    key: 'setColors',
	    value: function setColors() {
	      var color = colors[location.hostname] || colors['default'];
	      this.$dinamicColor.forEach(function (v) {
	        (0, _facade2.default)(v).removeClass('green').addClass(color);
	      });
	    }

	    /**
	     * Set hostname. WRI will use it to know where the feedback was sended
	     * @param  {}
	     * @return {}
	     */

	  }, {
	    key: 'setHiddenInputs',
	    value: function setHiddenInputs() {
	      this.$hostname.val(location.hostname);
	    }

	    /**
	     * Check params. If show_feedback is present we automatically show the feedback modal
	     * @param  {}
	     * @return {}
	     */

	  }, {
	    key: 'checkForParams',
	    value: function checkForParams() {
	      var params = this.getQueryParams();
	      if (!!params && !!params['show_feedback']) {
	        this.show();
	      }
	    }

	    /**
	     * UI Events inside the feedback modal
	     * - actionContinue: continue to next Step
	     * @param  {e} event
	      * - actionSubmit: validate form before send it
	     * @param  {step} number
	      * - actionSend: send feedback form
	      * - actionClose: trigger hide feedback
	     * @param  {e} event
	      */

	  }, {
	    key: 'actionContinue',
	    value: function actionContinue(e) {
	      this.changeStep(2);
	    }
	  }, {
	    key: 'actionSubmit',
	    value: function actionSubmit(e) {
	      if (this.$email.hasClass('required')) {
	        if (this.validateEmail(this.$email.val())) {
	          this.actionSend();
	        } else {
	          alert('Please enter an email address to continue');
	        }
	      } else {
	        if (!!this.$textarea.val()) {
	          this.actionSend();
	        } else {
	          alert('Please enter feedback, or sign up to be a GFW tester and enter an email address to continue');
	        }
	      }
	    }
	  }, {
	    key: 'actionClose',
	    value: function actionClose(e) {
	      this.hide();
	    }
	  }, {
	    key: 'actionSend',
	    value: function actionSend() {
	      var _this2 = this;

	      this.$spinner.addClass('-active');
	      // If you want to test it without bothering the client you can point the url to the local gfw (remember to run the app) feedback json
	      // $gfwdom.jsonp('http://localhost:5000/feedback_jsonp', {
	      _facade2.default.jsonp('http://www.globalforestwatch.org/feedback_jsonp', {
	        data: _facade2.default.serialize(this.$form[0]),

	        success: function success(data) {
	          data === true ? _this2.changeStep(3) : _this2.changeStep(4);
	          _this2.$spinner.removeClass('-active');
	        },

	        error: function error(_error) {
	          console.log('error:' + _error);
	          _this2.changeStep(4);
	          _this2.$spinner.removeClass('-active');
	        }

	      });
	    }

	    /**
	     * Change Events
	     * - changeRequire: change event triggerred by the radio buttons
	     * @param  {e} event
	      * - changeStep: change step of the modal
	     * @param  {step} number
	     */

	  }, {
	    key: 'changeRequire',
	    value: function changeRequire(e) {
	      e && e.preventDefault();
	      (0, _facade2.default)(e.currentTarget).val() === 'true' ? this.$email.addClass('required') : this.$email.removeClass('required');
	    }
	  }, {
	    key: 'changeStep',
	    value: function changeStep(step) {
	      // TO-DO: This is not working because we need to scroll the container, not the document
	      // this.$contentWrapper.scrollTop(0);
	      this.$modalStep.removeClass('-active');
	      this.$modalStepBtn.removeClass('-active');

	      // Set actives
	      this.$el.find('.modal-step[data-step="' + step + '"]').addClass('-active');
	      this.$el.find('.modal-step-btn[data-step="' + step + '"]').addClass('-active');
	    }

	    /**
	     * Helpers
	     * - validateEmail
	     * @param  {email}
	     * @return {Boolean}
	      * - getQueryParams
	     * @return {Object}
	      * - toggleParam
	     * @param  {key, value, url}
	     * @return {String}
	     */

	  }, {
	    key: 'validateEmail',
	    value: function validateEmail(email) {
	      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	      return re.test(email);
	    }
	  }, {
	    key: 'getQueryParams',
	    value: function getQueryParams() {
	      var qs = document.location.search;
	      qs = qs.split('+').join(' ');

	      var params = {},
	          re = /[?&]?([^=]+)=([^&]*)/g;
	      var tokens = void 0;

	      while (tokens = re.exec(qs)) {
	        params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
	      }
	      return params;
	    }
	  }, {
	    key: 'toggleParam',
	    value: function toggleParam(key, value, url) {

	      if (!url) url = window.location.href;
	      var re = new RegExp('([?&])' + key + '=.*?(&|#|$)(.*)', 'gi');
	      var hash = void 0;

	      if (re.test(url)) {
	        if (typeof value !== 'undefined' && value !== null) return url.replace(re, '$1' + key + '=' + value + '$2$3');else {
	          hash = url.split('#');
	          url = hash[0].replace(re, '$1$3').replace(/(&|\?)$/, '');
	          if (typeof hash[1] !== 'undefined' && hash[1] !== null) url += '#' + hash[1];
	          return url;
	        }
	      } else {
	        if (typeof value !== 'undefined' && value !== null) {
	          var separator = url.indexOf('?') !== -1 ? '&' : '?';
	          hash = url.split('#');
	          url = '' + hash[0] + separator + key + '=' + value;
	          if (typeof hash[1] !== 'undefined' && hash[1] !== null) url += '#' + hash[1];
	          return url;
	        } else return url;
	      }
	    }
	  }]);

	  return Feedback;
	}();

	exports.default = Feedback;

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '';
	with (obj) {
	__p += '<span id="feedbackLink" class="feedback-link feedback-link-fixed"><span>Feedback</span></span>\n<!-- Feedback -->\n<div id="feedbackModal" class="feedback-modal">\n  <!-- BACKDROP -->\n  <div class="modal-backdrop"></div>\n  <!-- WINDOW -->\n  <div class="modal-window">\n    <a href="#" class="modal-close js-modal-close">\n      <svg><use xlink:href="#shape-close"></use></svg>\n    </a>\n    <div class="modal-spinner js-dinamic-color"></div>\n    <div class="modal-wrapper -scroll-bar">\n      <div class="modal-content">\n        <ul class="modal-steps">\n          <!-- STEP 1 -->\n          <li class="modal-step -active" data-step="1">\n            <header>\n              <h2>Provide feedback</h2>\n              <h3>We want to hear from you! Global Forest Watch is a user-driven platform and your intput is critical. Help us improve GFW websites by completing the feedback form below or by signing up to become an offcial GFW tester.</h3>\n            </header>\n            <div class="modal-step-content">\n              <h3><strong>We are interested in hearing:</strong></h3>\n              <ul class="bullets">\n                <li>Why you visited GFW</li>\n                <li>How you use GFW</li>\n                <li>If and how the information provided by GFW is useful for your work</li>\n                <li>If any additional features and/or data would be useful</li>\n                <li>If anything was confusing or difficult to use</li>\n                <li>If you encountered any bugs or problems while using GFW</li>\n                <li>Anything else you would like to tell us!</li>\n              </ul>\n            </div>\n          </li>\n\n          <!-- STEP 2 -->\n          <li class="modal-step" data-step="2">\n            <header>\n              <h2>Provide feedback</h2>\n              <h3>Help us learn how you use Global Forest Watch and how to improve it. Please provide your email address if you would like a response from GFW.</h3>\n            </header>\n            <div class="modal-step-content">\n              <form id="feedback-form" class="feedback-form">\n                <input name="hostname" id="feedback-hostname" type="hidden"/>\n                <textarea name="feedback" id="feedback-textarea" placeholder="Type something"></textarea>\n                <div class="feedback-tester js-dinamic-color">\n                  <p>Interested in testing new features and helping to improve the website?  Sign up to <strong>become an official GFW tester!</strong></p>\n                  <div class="radio-box js-radio-box">\n                    <div class="custom-radio js-dinamic-color">\n                      <input id="signup_true1" name="signup" type="radio" value="true">\n                      <label for="signup_true1"><span></span>Yes, sign me up.</label>\n                    </div>\n                    <div class="custom-radio js-dinamic-color">\n                      <input id="signup_false1" name="signup" type="radio" value="false" checked="checked">\n                      <label for="signup_false1"><span></span>No thanks.</label>\n                    </div>\n                  </div>\n                  <p>\n                    <input id="feedback-email" name="email" placeholder="Email" type="email">\n                  </p>\n                </div>\n                <div class="feedback-tester js-dinamic-color">\n                  <p>Want to be the first to know about Global Forest Watch updates?  Sign up for <a class="js-dinamic-color" href="http://www.wri.org/global-forest-watch-updates-and-newsletter" target="_blank">our newsletter</a>. </p>\n                </div>\n              </form>\n            </div>\n          </li>\n\n          <!-- STEP 3 -->\n          <li class="modal-step" data-step="3">\n            <header>\n              <h2>Thank you! </br>We appreciate your help</h2>\n              <h3><strong>Users have spoken and we have listened!</strong> </br>Below are examples of changes and additions we’ve made to the website in response to feedback from users like you:</h3>\n            </header>\n            <div class="modal-step-content">\n              <ul class="bullets">\n                <li>Threshold settings for the UMD/Google tree cover loss data (read more <a class="js-dinamic-color" href="http://blog.globalforestwatch.org/2014/09/four-ways-gfw-just-became-more-useful/">here</a>)</li>\n                <li>Enhanced analysis functionality (i.e., for protected areas, subnational jurisdictions, and forest use concessions) (read more <a class="js-dinamic-color" href="http://blog.globalforestwatch.org/2014/09/four-ways-gfw-just-became-more-useful/">here</a>)</li>\n                <li>Time slider for the NASA active fires data and information about each fire</li>\n                <li>“Share this map view” feature (read more <a class="js-dinamic-color" href="http://blog.globalforestwatch.org/2014/05/five-gfw-site-updates/">here</a>)</li>\n                <li>A new homepage that better directs users to what they are looking for and communicates a clearer purpose</li>\n              </ul>\n              <p>Do you have questions about how to use GFW? Be sure to visit the <a class="js-dinamic-color" href="/howto">How To</a> page, and if you still need help email <a class="js-dinamic-color" href="mailto:gfw@wri.org">gfw@wri.org</a>. You can also connect with us on social media or by posting a comment to the <a class="js-dinamic-color" href="https://groups.google.com/forum/#!forum/globalforestwatch" target="_blank">GFW Discussion Forum</a>.</p>\n            </div>\n          </li>\n\n          <!-- STEP 4 -->\n          <li class="modal-step" data-step="4">\n            <header>\n              <h2>We\'re sorry, </br>but something went wrong</h2>\n            </header>\n          </li>\n\n        </ul>\n      </div>\n    </div>\n    \n    <div class="modal-footer">\n      <span class="gradient"></span>\n      <ul class="m-btncontainer -center -steps">\n        <li>\n          <button data-step="1" class="btn green medium uppercase modal-step-btn js-dinamic-color js-btn-continue -active">Continue</button>\n          <button data-step="2" class="btn green medium uppercase modal-step-btn js-dinamic-color js-btn-submit">Submit</button>\n          <button data-step="3" class="btn green medium uppercase modal-step-btn js-dinamic-color js-btn-close">Close</button>\n          <button data-step="4" class="btn green medium uppercase modal-step-btn js-dinamic-color js-btn-close">Close</button>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n';

	}
	return __p
	}

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(28);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(30)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js!./global.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js!./global.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(29)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\nhtml.-no-scroll, body.-no-scroll {\n  overflow: hidden;\n  position: fixed;\n  width: 100%;\n  height: 100%; }\n\n#headerGfw *, #headerGfw *:after, #headerGfw *:before, #footerGfw *, #footerGfw *:after, #footerGfw *:before, #feedbackGfw *, #feedbackGfw *:after, #feedbackGfw *:before {\n  -webkit-tap-highlight-color: transparent;\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n#headerGfw div, #headerGfw span, #headerGfw applet, #headerGfw object, #headerGfw iframe, #headerGfw h1, #headerGfw h2, #headerGfw h3, #headerGfw h4, #headerGfw h5, #headerGfw h6, #headerGfw p, #headerGfw blockquote, #headerGfw pre, #headerGfw a, #headerGfw abbr, #headerGfw acronym, #headerGfw address, #headerGfw big, #headerGfw cite, #headerGfw code, #headerGfw del, #headerGfw dfn, #headerGfw em, #headerGfw img, #headerGfw ins, #headerGfw kbd, #headerGfw q, #headerGfw s, #headerGfw samp, #headerGfw small, #headerGfw strike, #headerGfw strong, #headerGfw sub, #headerGfw sup, #headerGfw tt, #headerGfw var, #headerGfw b, #headerGfw u, #headerGfw i, #headerGfw center, #headerGfw dl, #headerGfw dt, #headerGfw dd, #headerGfw ol, #headerGfw ul, #headerGfw li, #headerGfw fieldset, #headerGfw form, #headerGfw label, #headerGfw legend, #headerGfw table, #headerGfw caption, #headerGfw tbody, #headerGfw tfoot, #headerGfw thead, #headerGfw tr, #headerGfw th, #headerGfw td, #headerGfw article, #headerGfw aside, #headerGfw canvas, #headerGfw details, #headerGfw embed, #headerGfw figure, #headerGfw figcaption, #headerGfw footer, #headerGfw header, #headerGfw hgroup, #headerGfw menu, #headerGfw nav, #headerGfw output, #headerGfw ruby, #headerGfw section, #headerGfw summary, #headerGfw time, #headerGfw mark, #headerGfw audio, #headerGfw video, #footerGfw div, #footerGfw span, #footerGfw applet, #footerGfw object, #footerGfw iframe, #footerGfw h1, #footerGfw h2, #footerGfw h3, #footerGfw h4, #footerGfw h5, #footerGfw h6, #footerGfw p, #footerGfw blockquote, #footerGfw pre, #footerGfw a, #footerGfw abbr, #footerGfw acronym, #footerGfw address, #footerGfw big, #footerGfw cite, #footerGfw code, #footerGfw del, #footerGfw dfn, #footerGfw em, #footerGfw img, #footerGfw ins, #footerGfw kbd, #footerGfw q, #footerGfw s, #footerGfw samp, #footerGfw small, #footerGfw strike, #footerGfw strong, #footerGfw sub, #footerGfw sup, #footerGfw tt, #footerGfw var, #footerGfw b, #footerGfw u, #footerGfw i, #footerGfw center, #footerGfw dl, #footerGfw dt, #footerGfw dd, #footerGfw ol, #footerGfw ul, #footerGfw li, #footerGfw fieldset, #footerGfw form, #footerGfw label, #footerGfw legend, #footerGfw table, #footerGfw caption, #footerGfw tbody, #footerGfw tfoot, #footerGfw thead, #footerGfw tr, #footerGfw th, #footerGfw td, #footerGfw article, #footerGfw aside, #footerGfw canvas, #footerGfw details, #footerGfw embed, #footerGfw figure, #footerGfw figcaption, #footerGfw footer, #footerGfw header, #footerGfw hgroup, #footerGfw menu, #footerGfw nav, #footerGfw output, #footerGfw ruby, #footerGfw section, #footerGfw summary, #footerGfw time, #footerGfw mark, #footerGfw audio, #footerGfw video, #feedbackGfw div, #feedbackGfw span, #feedbackGfw applet, #feedbackGfw object, #feedbackGfw iframe, #feedbackGfw h1, #feedbackGfw h2, #feedbackGfw h3, #feedbackGfw h4, #feedbackGfw h5, #feedbackGfw h6, #feedbackGfw p, #feedbackGfw blockquote, #feedbackGfw pre, #feedbackGfw a, #feedbackGfw abbr, #feedbackGfw acronym, #feedbackGfw address, #feedbackGfw big, #feedbackGfw cite, #feedbackGfw code, #feedbackGfw del, #feedbackGfw dfn, #feedbackGfw em, #feedbackGfw img, #feedbackGfw ins, #feedbackGfw kbd, #feedbackGfw q, #feedbackGfw s, #feedbackGfw samp, #feedbackGfw small, #feedbackGfw strike, #feedbackGfw strong, #feedbackGfw sub, #feedbackGfw sup, #feedbackGfw tt, #feedbackGfw var, #feedbackGfw b, #feedbackGfw u, #feedbackGfw i, #feedbackGfw center, #feedbackGfw dl, #feedbackGfw dt, #feedbackGfw dd, #feedbackGfw ol, #feedbackGfw ul, #feedbackGfw li, #feedbackGfw fieldset, #feedbackGfw form, #feedbackGfw label, #feedbackGfw legend, #feedbackGfw table, #feedbackGfw caption, #feedbackGfw tbody, #feedbackGfw tfoot, #feedbackGfw thead, #feedbackGfw tr, #feedbackGfw th, #feedbackGfw td, #feedbackGfw article, #feedbackGfw aside, #feedbackGfw canvas, #feedbackGfw details, #feedbackGfw embed, #feedbackGfw figure, #feedbackGfw figcaption, #feedbackGfw footer, #feedbackGfw header, #feedbackGfw hgroup, #feedbackGfw menu, #feedbackGfw nav, #feedbackGfw output, #feedbackGfw ruby, #feedbackGfw section, #feedbackGfw summary, #feedbackGfw time, #feedbackGfw mark, #feedbackGfw audio, #feedbackGfw video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font: inherit;\n  font-size: 100%;\n  vertical-align: baseline; }\n\n#headerGfw ol, #headerGfw ul, #footerGfw ol, #footerGfw ul, #feedbackGfw ol, #feedbackGfw ul {\n  list-style: none; }\n\n#headerGfw a, #footerGfw a, #feedbackGfw a {\n  text-decoration: none; }\n\n#headerGfw button, #footerGfw button, #feedbackGfw button {\n  display: inline-block;\n  box-shadow: none;\n  outline: none;\n  margin: 0;\n  padding: 0;\n  border: none;\n  background: none;\n  cursor: pointer; }\n\n#headerGfw .wrapper, #footerGfw .wrapper, #feedbackGfw .wrapper {\n  position: relative;\n  margin: 0 auto;\n  padding: 0px;\n  width: 100%; }\n  @media (min-width: 850px) {\n    #headerGfw .wrapper, #footerGfw .wrapper, #feedbackGfw .wrapper {\n      max-width: 1024px;\n      width: 95%; } }\n  @media (min-width: 1400px) {\n    #headerGfw .wrapper, #footerGfw .wrapper, #feedbackGfw .wrapper {\n      max-width: 1200px;\n      width: 75%; } }\n\n#headerGfw .-hidden, #footerGfw .-hidden, #feedbackGfw .-hidden {\n  display: none; }\n\n#headerGfw .-scroll-bar, #footerGfw .-scroll-bar, #feedbackGfw .-scroll-bar {\n  -webkit-overflow-scrolling: touch;\n  /* Let's get this party started */\n  /* Track */\n  /* Handle */ }\n  #headerGfw .-scroll-bar::-webkit-scrollbar, #footerGfw .-scroll-bar::-webkit-scrollbar, #feedbackGfw .-scroll-bar::-webkit-scrollbar {\n    width: 8px;\n    height: 8px; }\n  #headerGfw .-scroll-bar::-webkit-scrollbar-track, #footerGfw .-scroll-bar::-webkit-scrollbar-track, #feedbackGfw .-scroll-bar::-webkit-scrollbar-track {\n    border-radius: 0px;\n    background: #b6b6ba; }\n  #headerGfw .-scroll-bar::-webkit-scrollbar-thumb, #footerGfw .-scroll-bar::-webkit-scrollbar-thumb, #feedbackGfw .-scroll-bar::-webkit-scrollbar-thumb {\n    border-radius: 20px;\n    background: rgba(85, 85, 85, 0.8); }\n\n@-webkit-keyframes standard {\n  from {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n@keyframes standard {\n  from {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n#headerGfw .btn, #footerGfw .btn, #feedbackGfw .btn {\n  -webkit-appearance: none;\n  border: 1px solid transparent;\n  background: none;\n  outline: none;\n  box-shadow: none;\n  text-align: center;\n  cursor: pointer;\n  text-decoration: none;\n  top: 0;\n  left: 0;\n  -webkit-transform: none;\n          transform: none;\n  font-family: \"Fira Sans\"; }\n\n#headerGfw .btn, #footerGfw .btn, #feedbackGfw .btn {\n  background: #E5E5DF;\n  position: relative;\n  display: inline-block;\n  z-index: 1;\n  padding: 0px 12px;\n  border-radius: 40px;\n  font-size: 14px;\n  text-decoration: none;\n  height: 36px;\n  line-height: 36px;\n  text-align: center;\n  font-weight: 500;\n  white-space: nowrap;\n  -webkit-transition: background .15s linear;\n  transition: background .15s linear; }\n  #headerGfw .btn:hover, #footerGfw .btn:hover, #feedbackGfw .btn:hover {\n    background: #97bd3d;\n    text-decoration: none !important; }\n  #headerGfw .btn.uppercase, #footerGfw .btn.uppercase, #feedbackGfw .btn.uppercase {\n    text-transform: uppercase; }\n  #headerGfw .btn.medium, #footerGfw .btn.medium, #feedbackGfw .btn.medium {\n    text-transform: uppercase;\n    padding: 0px 35px; }\n  #headerGfw .btn.gray, #footerGfw .btn.gray, #feedbackGfw .btn.gray {\n    color: #555;\n    background: #FFF;\n    border-color: #97bd3d; }\n    #headerGfw .btn.gray:hover, #footerGfw .btn.gray:hover, #feedbackGfw .btn.gray:hover {\n      background: #f2f2f2; }\n  #headerGfw .btn.green, #footerGfw .btn.green, #feedbackGfw .btn.green {\n    color: #FFF;\n    background: #97bd3d; }\n    #headerGfw .btn.green:hover, #footerGfw .btn.green:hover, #feedbackGfw .btn.green:hover {\n      background: #789631; }\n    #headerGfw .btn.green.disabled:hover, #footerGfw .btn.green.disabled:hover, #feedbackGfw .btn.green.disabled:hover {\n      background: #97bd3d; }\n  #headerGfw .btn.red, #footerGfw .btn.red, #feedbackGfw .btn.red {\n    color: #FFF;\n    background: #ed1846; }\n    #headerGfw .btn.red:hover, #footerGfw .btn.red:hover, #feedbackGfw .btn.red:hover {\n      background: #c30f36; }\n    #headerGfw .btn.red.disabled:hover, #footerGfw .btn.red.disabled:hover, #feedbackGfw .btn.red.disabled:hover {\n      background: #ed1846; }\n  #headerGfw .btn.orange, #footerGfw .btn.orange, #feedbackGfw .btn.orange {\n    color: #FFF;\n    background: #e98300; }\n    #headerGfw .btn.orange:hover, #footerGfw .btn.orange:hover, #feedbackGfw .btn.orange:hover {\n      background: #b66600; }\n    #headerGfw .btn.orange.disabled:hover, #footerGfw .btn.orange.disabled:hover, #feedbackGfw .btn.orange.disabled:hover {\n      background: #e98300; }\n  #headerGfw .btn.blue, #footerGfw .btn.blue, #feedbackGfw .btn.blue {\n    color: #FFF;\n    background: #5b80a0; }\n    #headerGfw .btn.blue:hover, #footerGfw .btn.blue:hover, #feedbackGfw .btn.blue:hover {\n      background: #49667f; }\n    #headerGfw .btn.blue.disabled:hover, #footerGfw .btn.blue.disabled:hover, #feedbackGfw .btn.blue.disabled:hover {\n      background: #5b80a0; }\n  #headerGfw .btn.disabled, #footerGfw .btn.disabled, #feedbackGfw .btn.disabled {\n    opacity: 0.25;\n    cursor: default; }\n\n#headerGfw .field, #footerGfw .field, #feedbackGfw .field {\n  margin: 0 0 25px;\n  position: relative;\n  clear: both; }\n\n#headerGfw .field_with_errors label, #footerGfw .field_with_errors label, #feedbackGfw .field_with_errors label {\n  color: #C12000; }\n\n#headerGfw .field_with_errors input[type=\"text\"],\n#headerGfw .field_with_errors input[type=\"email\"], #footerGfw .field_with_errors input[type=\"text\"],\n#footerGfw .field_with_errors input[type=\"email\"], #feedbackGfw .field_with_errors input[type=\"text\"],\n#feedbackGfw .field_with_errors input[type=\"email\"] {\n  border: 1px solid #C12000; }\n\n#headerGfw .field_with_errors p, #footerGfw .field_with_errors p, #feedbackGfw .field_with_errors p {\n  margin-bottom: 25px;\n  font-weight: 500;\n  font-size: 12px;\n  color: #C12000;\n  text-transform: uppercase; }\n\n#headerGfw label, #footerGfw label, #feedbackGfw label {\n  float: left;\n  color: #333;\n  font-weight: 500;\n  font-size: 12px;\n  text-transform: uppercase; }\n\n#headerGfw input[type=\"password\"],\n#headerGfw input[type=\"text\"],\n#headerGfw input[type=\"date\"],\n#headerGfw input[type=\"email\"],\n#headerGfw textarea, #footerGfw input[type=\"password\"],\n#footerGfw input[type=\"text\"],\n#footerGfw input[type=\"date\"],\n#footerGfw input[type=\"email\"],\n#footerGfw textarea, #feedbackGfw input[type=\"password\"],\n#feedbackGfw input[type=\"text\"],\n#feedbackGfw input[type=\"date\"],\n#feedbackGfw input[type=\"email\"],\n#feedbackGfw textarea {\n  border: 1px solid #ccc;\n  padding: 10px;\n  width: 100%;\n  margin: 5px 0;\n  font-size: 14px;\n  border-radius: 3px;\n  outline: none;\n  line-height: normal; }\n\n#headerGfw textarea, #footerGfw textarea, #feedbackGfw textarea {\n  height: 182px;\n  max-width: 100%; }\n\n#headerGfw .field, #footerGfw .field, #feedbackGfw .field {\n  width: 100%; }\n  #headerGfw .field:before, #headerGfw .field:after, #footerGfw .field:before, #footerGfw .field:after, #feedbackGfw .field:before, #feedbackGfw .field:after {\n    content: \" \";\n    display: table;\n    visibility: hidden;\n    font-size: 0;\n    height: 0; }\n  #headerGfw .field:after, #footerGfw .field:after, #feedbackGfw .field:after {\n    clear: both; }\n  @media (min-width: 850px) {\n    #headerGfw .field, #footerGfw .field, #feedbackGfw .field {\n      max-width: 582px; } }\n  @media (min-width: 850px) {\n    #headerGfw .field.short, #footerGfw .field.short, #feedbackGfw .field.short {\n      max-width: 304px; } }\n  #headerGfw .field.short input[type=\"text\"],\n  #headerGfw .field.short input[type=\"date\"],\n  #headerGfw .field.short input[type=\"email\"], #footerGfw .field.short input[type=\"text\"],\n  #footerGfw .field.short input[type=\"date\"],\n  #footerGfw .field.short input[type=\"email\"], #feedbackGfw .field.short input[type=\"text\"],\n  #feedbackGfw .field.short input[type=\"date\"],\n  #feedbackGfw .field.short input[type=\"email\"] {\n    width: 100%;\n    display: block;\n    clear: both; }\n  #headerGfw .field.required span, #footerGfw .field.required span, #feedbackGfw .field.required span {\n    float: right;\n    font-size: 13px;\n    color: #666; }\n    @media (max-width: 849px) {\n      #headerGfw .field.required span.drop_pin, #footerGfw .field.required span.drop_pin, #feedbackGfw .field.required span.drop_pin {\n        display: block;\n        float: left;\n        width: 100%;\n        margin: 2px 0 5px; } }\n\n#headerGfw .radio-box, #footerGfw .radio-box, #feedbackGfw .radio-box {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 15px 0; }\n  #headerGfw .radio-box:before, #headerGfw .radio-box:after, #footerGfw .radio-box:before, #footerGfw .radio-box:after, #feedbackGfw .radio-box:before, #feedbackGfw .radio-box:after {\n    content: \" \";\n    display: table;\n    visibility: hidden;\n    font-size: 0;\n    height: 0; }\n  #headerGfw .radio-box:after, #footerGfw .radio-box:after, #feedbackGfw .radio-box:after {\n    clear: both; }\n  #headerGfw .radio-box .custom-radio, #footerGfw .radio-box .custom-radio, #feedbackGfw .radio-box .custom-radio {\n    margin: 0 0 0 20px; }\n    #headerGfw .radio-box .custom-radio:first-child, #footerGfw .radio-box .custom-radio:first-child, #feedbackGfw .radio-box .custom-radio:first-child {\n      margin: 0; }\n    #headerGfw .radio-box .custom-radio.red label span:after, #footerGfw .radio-box .custom-radio.red label span:after, #feedbackGfw .radio-box .custom-radio.red label span:after {\n      background: #ed1846; }\n    #headerGfw .radio-box .custom-radio.orange label span:after, #footerGfw .radio-box .custom-radio.orange label span:after, #feedbackGfw .radio-box .custom-radio.orange label span:after {\n      background: #e98300; }\n    #headerGfw .radio-box .custom-radio.blue label span:after, #footerGfw .radio-box .custom-radio.blue label span:after, #feedbackGfw .radio-box .custom-radio.blue label span:after {\n      background: #5b80a0; }\n  #headerGfw .radio-box label, #footerGfw .radio-box label, #feedbackGfw .radio-box label {\n    font-weight: 400;\n    text-transform: none;\n    position: relative;\n    padding-left: 25px;\n    line-height: 28px;\n    cursor: pointer; }\n    #headerGfw .radio-box label span, #footerGfw .radio-box label span, #feedbackGfw .radio-box label span {\n      position: absolute;\n      top: 50%;\n      left: 0;\n      width: 20px;\n      height: 20px;\n      border: 1px solid #555;\n      border-radius: 50%;\n      -webkit-transform: translate(0, -50%);\n              transform: translate(0, -50%); }\n      #headerGfw .radio-box label span:after, #footerGfw .radio-box label span:after, #feedbackGfw .radio-box label span:after {\n        content: \"\";\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        width: 50%;\n        height: 50%;\n        border-radius: 50%;\n        background: #97bd3d;\n        display: none;\n        -webkit-transform: translate(-50%, -50%);\n                transform: translate(-50%, -50%); }\n  #headerGfw .radio-box input[type=radio], #footerGfw .radio-box input[type=radio], #feedbackGfw .radio-box input[type=radio] {\n    display: none; }\n  #headerGfw .radio-box input[type=radio]:checked + label span:after, #footerGfw .radio-box input[type=radio]:checked + label span:after, #feedbackGfw .radio-box input[type=radio]:checked + label span:after {\n    display: block; }\n\n#headerGfw {\n  font-family: \"Fira Sans\", Helvetica, serif;\n  background: #EEE;\n  border-bottom: 1px solid #E5E5DF;\n  -webkit-font-smoothing: antialiased;\n  z-index: 1000;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%; }\n  @media (min-width: 850px) {\n    #headerGfw {\n      position: relative;\n      bottom: auto;\n      left: auto; } }\n  #headerGfw li {\n    list-style: none; }\n  #headerGfw .m-header {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n    -webkit-justify-content: space-between;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    width: 100%;\n    position: relative;\n    background-color: transparent; }\n    #headerGfw .m-header .m-header-scroll {\n      overflow: auto;\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: -ms-flexbox;\n      display: flex;\n      width: 100%;\n      border-right: 60px solid transparent; }\n      @media (min-width: 850px) {\n        #headerGfw .m-header .m-header-scroll {\n          border-right: none;\n          overflow: visible;\n          -webkit-box-pack: justify;\n          -webkit-justify-content: space-between;\n              -ms-flex-pack: justify;\n                  justify-content: space-between; } }\n  #headerGfw .m-header-nav {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n    -webkit-justify-content: space-between;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n    @media (min-width: 850px) {\n      #headerGfw .m-header-nav.-secondary {\n        display: -webkit-box;\n        display: -webkit-flex;\n        display: -ms-flexbox;\n        display: flex; } }\n    #headerGfw .m-header-nav.-mobile {\n      position: absolute;\n      bottom: 0;\n      right: 0;\n      z-index: 2;\n      background: #DDD; }\n      #headerGfw .m-header-nav.-mobile:after {\n        content: \"\";\n        display: block;\n        position: absolute;\n        top: 0;\n        right: 100%;\n        width: 15px;\n        height: 100%;\n        background-image: -webkit-linear-gradient(left, rgba(238, 238, 238, 0), #eeeeee);\n        background-image: linear-gradient(left, rgba(238, 238, 238, 0), #eeeeee); }\n      @media (min-width: 850px) {\n        #headerGfw .m-header-nav.-mobile {\n          display: none; } }\n  #headerGfw .m-header-item > a {\n    position: relative;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n    width: 100%;\n    height: 100%;\n    color: #555;\n    text-decoration: none; }\n    #headerGfw .m-header-item > a > span {\n      line-height: 28px;\n      text-transform: uppercase;\n      font-size: 12px;\n      color: #000; }\n      @media (max-width: 849px) {\n        #headerGfw .m-header-item > a > span .-only-desktop {\n          display: none; } }\n      @media (min-width: 850px) {\n        #headerGfw .m-header-item > a > span .-only-mobile {\n          display: none; } }\n  #headerGfw .m-header-item svg {\n    display: block;\n    width: 18px;\n    height: 18px;\n    margin: 0 auto;\n    -webkit-transition: all 0.15s cubic-bezier(0.445, 0.05, 0.55, 0.95);\n    transition: all 0.15s cubic-bezier(0.445, 0.05, 0.55, 0.95);\n    fill: #b6b6ba; }\n    @media (min-width: 850px) {\n      #headerGfw .m-header-item svg {\n        display: inline-block;\n        width: 18px;\n        height: 35px; } }\n  @media (max-width: 849px) {\n    #headerGfw .m-header-item.-only-desktop {\n      display: none; } }\n  @media (min-width: 850px) {\n    #headerGfw .m-header-item.-default {\n      width: 35px;\n      height: 35px; } }\n  #headerGfw .m-header-item.-default > a {\n    padding: 10px 15px;\n    border-left: 1px solid transparent;\n    border-right: 1px solid transparent;\n    display: block; }\n    #headerGfw .m-header-item.-default > a.-active {\n      background: #FFF;\n      border-color: #E5E5DF;\n      z-index: 5; }\n      @media (min-width: 850px) {\n        #headerGfw .m-header-item.-default > a.-active {\n          z-index: 3;\n          background: none;\n          border-color: transparent; } }\n    @media (min-width: 850px) {\n      #headerGfw .m-header-item.-default > a {\n        padding: 0;\n        display: -webkit-box;\n        display: -webkit-flex;\n        display: -ms-flexbox;\n        display: flex; } }\n    #headerGfw .m-header-item.-default > a > span {\n      display: block;\n      line-height: 1;\n      margin: 2px 0 0;\n      font-size: 10px; }\n      @media (min-width: 850px) {\n        #headerGfw .m-header-item.-default > a > span {\n          display: none; } }\n    #headerGfw .m-header-item.-default > a > svg {\n      display: block;\n      height: 18px;\n      margin: 0 auto; }\n      @media (min-width: 850px) {\n        #headerGfw .m-header-item.-default > a > svg.-desktop-hide {\n          display: none; } }\n      @media (max-width: 849px) {\n        #headerGfw .m-header-item.-default > a > svg.-inactive {\n          display: none; } }\n  @media (min-width: 850px) {\n    #headerGfw .m-header-item.-default:hover .m-header-submenu {\n      opacity: 1;\n      visibility: visible;\n      -webkit-transition: all 0s linear 0s;\n      transition: all 0s linear 0s; } }\n  @media (min-width: 850px) {\n    #headerGfw .m-header-item.-text {\n      min-width: 35px;\n      margin: 0 0 0 20px; }\n      #headerGfw .m-header-item.-text:first-child {\n        margin: 0; } }\n  #headerGfw .m-header-item.-text > a {\n    padding: 10px 15px;\n    border-left: 1px solid transparent;\n    border-right: 1px solid transparent;\n    display: block; }\n    @media (min-width: 850px) {\n      #headerGfw .m-header-item.-text > a {\n        padding: 0;\n        border: none;\n        display: -webkit-box;\n        display: -webkit-flex;\n        display: -ms-flexbox;\n        display: flex; }\n        #headerGfw .m-header-item.-text > a:hover > span {\n          opacity: 1;\n          visibility: visible; } }\n    #headerGfw .m-header-item.-text > a > span {\n      display: block;\n      line-height: 1;\n      margin: 2px 0 0;\n      font-size: 10px;\n      text-align: center;\n      white-space: nowrap; }\n      @media (min-width: 850px) {\n        #headerGfw .m-header-item.-text > a > span {\n          line-height: 28px;\n          font-size: 12px;\n          display: inline-block;\n          position: absolute;\n          top: 100%;\n          left: 50%;\n          -webkit-transform: translate(-50%, 0);\n                  transform: translate(-50%, 0);\n          padding: 5px 10px 3px;\n          background: #555;\n          color: #FFF;\n          opacity: 0;\n          visibility: hidden; }\n          #headerGfw .m-header-item.-text > a > span:after {\n            content: \"\";\n            position: absolute;\n            top: -5px;\n            left: 50%;\n            width: 10px;\n            height: 10px;\n            -webkit-transform: translate(-50%, 0) rotate(45deg);\n                    transform: translate(-50%, 0) rotate(45deg);\n            background: #555; } }\n      @media (min-width: 1200px) {\n        #headerGfw .m-header-item.-text > a > span {\n          opacity: 1;\n          visibility: visible;\n          margin: 5px 0 0 5px;\n          padding: 0;\n          background: none;\n          color: #555;\n          position: static;\n          -webkit-transform: translate(0, 0);\n                  transform: translate(0, 0); }\n          #headerGfw .m-header-item.-text > a > span:after {\n            display: none; } }\n  #headerGfw .m-header-item.-search {\n    margin: 0 0 0 20px; }\n    #headerGfw .m-header-item.-search form {\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n      -webkit-justify-content: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n      -webkit-align-items: center;\n          -ms-flex-align: center;\n              align-items: center;\n      height: 35px; }\n      #headerGfw .m-header-item.-search form button :hover {\n        fill: #97bd3d; }\n      #headerGfw .m-header-item.-search form input {\n        border: none;\n        background: none;\n        box-shadow: none;\n        border-radius: 0;\n        padding: 0 5px;\n        margin: 0 0 0 5px;\n        border-bottom: 2px solid #b6b6ba;\n        line-height: 24px;\n        outline: none;\n        font-size: 10px;\n        font-family: inherit; }\n  #headerGfw .m-header-item.-translate {\n    margin: 0 20px; }\n  @media (min-width: 850px) {\n    #headerGfw .m-header-item:hover > a:after, #headerGfw .m-header-item.-current > a:after {\n      content: \"\";\n      width: 100%;\n      height: 2px;\n      position: absolute;\n      top: 0;\n      left: 0;\n      background: #97bd3d; }\n    #headerGfw .m-header-item:hover > a > svg, #headerGfw .m-header-item.-current > a > svg {\n      fill: #97bd3d; } }\n\n#headerGfw .m-header-submenu {\n  position: absolute;\n  top: auto;\n  bottom: 50px;\n  left: 0;\n  z-index: 3;\n  line-height: 1.25;\n  opacity: 0;\n  visibility: hidden;\n  box-shadow: 0 0 4px rgba(142, 142, 142, 0.5);\n  -webkit-transition: all 0s linear .125s;\n  transition: all 0s linear .125s; }\n  @media (min-width: 850px) {\n    #headerGfw .m-header-submenu {\n      top: 35px;\n      bottom: auto; } }\n  #headerGfw .m-header-submenu:after {\n    content: \"\";\n    position: absolute;\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n    background: white;\n    width: 10px;\n    height: 10px;\n    border: 1px solid #E5E5DF;\n    border-bottom: none;\n    border-right: none;\n    top: -5px; }\n  @media (max-width: 849px) {\n    #headerGfw .m-header-submenu.-active {\n      -webkit-transition: all 0s linear 0s;\n      transition: all 0s linear 0s;\n      opacity: 1;\n      visibility: visible; } }\n  #headerGfw .m-header-submenu > ul {\n    background: #FFF;\n    z-index: 2; }\n  #headerGfw .m-header-submenu.-home {\n    width: 100%;\n    font-size: 12px;\n    padding: 0;\n    z-index: 4;\n    overflow-y: auto;\n    text-align: center; }\n    @media (min-width: 850px) {\n      #headerGfw .m-header-submenu.-home {\n        overflow-y: visible;\n        padding: 35px 0;\n        text-align: left;\n        background: #FFF; } }\n    @media (max-width: 849px) {\n      #headerGfw .m-header-submenu.-home.-active {\n        position: fixed;\n        top: auto;\n        bottom: 50px;\n        left: 0;\n        height: 100%;\n        max-height: calc(100% - 50px); }\n        #headerGfw .m-header-submenu.-home.-active:after {\n          display: none; } }\n    #headerGfw .m-header-submenu.-home:after {\n      left: 13px; }\n    #headerGfw .m-header-submenu.-home h3 {\n      text-transform: uppercase;\n      border-top: 1px solid #E5E5DF;\n      font-size: 16px;\n      background: #F2F2F3;\n      color: #555; }\n      @media (min-width: 850px) {\n        #headerGfw .m-header-submenu.-home h3 {\n          border-top: none;\n          font-size: 12px;\n          font-weight: 500;\n          background: none; } }\n      #headerGfw .m-header-submenu.-home h3 > a, #headerGfw .m-header-submenu.-home h3 > span {\n        padding: 15px 0;\n        display: block; }\n        @media (min-width: 850px) {\n          #headerGfw .m-header-submenu.-home h3 > a, #headerGfw .m-header-submenu.-home h3 > span {\n            padding: 0;\n            display: inline; } }\n      #headerGfw .m-header-submenu.-home h3.-title {\n        text-align: center;\n        padding: 0 0 35px;\n        display: none; }\n        @media (min-width: 850px) {\n          #headerGfw .m-header-submenu.-home h3.-title {\n            display: block; } }\n        #headerGfw .m-header-submenu.-home h3.-title a {\n          background: #97bd3d;\n          color: #FFF;\n          display: inline-block;\n          padding: 10px 15px 8px;\n          border-radius: 20px;\n          -webkit-transition: all 0.15s cubic-bezier(0.445, 0.05, 0.55, 0.95);\n          transition: all 0.15s cubic-bezier(0.445, 0.05, 0.55, 0.95); }\n          #headerGfw .m-header-submenu.-home h3.-title a:hover {\n            background: #789631; }\n    #headerGfw .m-header-submenu.-home > ul {\n      width: 100%;\n      position: absolute;\n      bottom: 0;\n      max-height: 100%; }\n      @media (min-width: 850px) {\n        #headerGfw .m-header-submenu.-home > ul {\n          display: -webkit-box;\n          display: -webkit-flex;\n          display: -ms-flexbox;\n          display: flex;\n          position: relative;\n          bottom: auto;\n          -webkit-box-pack: justify;\n          -webkit-justify-content: space-between;\n              -ms-flex-pack: justify;\n                  justify-content: space-between; } }\n      #headerGfw .m-header-submenu.-home > ul > li {\n        background: #FFF; }\n        @media (min-width: 850px) {\n          #headerGfw .m-header-submenu.-home > ul > li {\n            width: 20%;\n            padding: 0 25px;\n            border-right: 1px solid #E5E5DF; }\n            #headerGfw .m-header-submenu.-home > ul > li.-only-mobile {\n              display: none; }\n            #headerGfw .m-header-submenu.-home > ul > li:last-child {\n              border-right: none; } }\n        #headerGfw .m-header-submenu.-home > ul > li a {\n          color: #555; }\n          #headerGfw .m-header-submenu.-home > ul > li a:hover {\n            color: #97bd3d; }\n        #headerGfw .m-header-submenu.-home > ul > li > ul {\n          font-size: 15px;\n          padding: 15px 0; }\n          @media (min-width: 850px) {\n            #headerGfw .m-header-submenu.-home > ul > li > ul {\n              margin: 15px 0 0;\n              padding: 0;\n              font-size: 11px; } }\n          #headerGfw .m-header-submenu.-home > ul > li > ul > li {\n            display: block;\n            text-transform: none;\n            margin: 15px 0 0; }\n            #headerGfw .m-header-submenu.-home > ul > li > ul > li:first-child {\n              margin: 0; }\n  #headerGfw .m-header-submenu.-apps {\n    width: 100%;\n    overflow-y: auto; }\n    @media (min-width: 420px) {\n      #headerGfw .m-header-submenu.-apps {\n        overflow-y: visible; } }\n    @media (min-width: 850px) {\n      #headerGfw .m-header-submenu.-apps {\n        max-width: 400px; } }\n    @media (max-width: 849px) {\n      #headerGfw .m-header-submenu.-apps.-active {\n        position: fixed;\n        top: auto;\n        bottom: 50px;\n        left: 0;\n        height: 100%;\n        max-height: calc(100% - 50px); }\n        #headerGfw .m-header-submenu.-apps.-active:after {\n          display: none; } }\n    #headerGfw .m-header-submenu.-apps:after {\n      left: 48px; }\n    #headerGfw .m-header-submenu.-apps > ul {\n      width: 100%;\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-flex-wrap: wrap;\n          -ms-flex-wrap: wrap;\n              flex-wrap: wrap;\n      position: absolute;\n      bottom: 0;\n      max-height: 100%;\n      max-width: 400px; }\n      @media (min-width: 420px) {\n        #headerGfw .m-header-submenu.-apps > ul {\n          height: 402px;\n          overflow-y: auto;\n          max-height: none; } }\n      @media (min-width: 850px) {\n        #headerGfw .m-header-submenu.-apps > ul {\n          position: relative;\n          bottom: auto; } }\n      #headerGfw .m-header-submenu.-apps > ul > li {\n        position: relative;\n        width: 50%;\n        border-left: 1px solid #E5E5DF;\n        z-index: 2; }\n        @media (max-width: 419px) {\n          #headerGfw .m-header-submenu.-apps > ul > li:nth-child(2n+1) {\n            border-left: 1px solid #E5E5DF; }\n          #headerGfw .m-header-submenu.-apps > ul > li:nth-child(n+3) {\n            border-top: 1px solid #E5E5DF; } }\n        @media (min-width: 420px) {\n          #headerGfw .m-header-submenu.-apps > ul > li {\n            width: 33.333%; }\n            #headerGfw .m-header-submenu.-apps > ul > li:nth-child(3n+1) {\n              border-left: none; }\n            #headerGfw .m-header-submenu.-apps > ul > li:nth-child(n+4) {\n              border-top: 1px solid #E5E5DF; } }\n        #headerGfw .m-header-submenu.-apps > ul > li > a {\n          display: block;\n          position: relative;\n          color: #555;\n          padding: 30px 0; }\n          @media (min-width: 420px) {\n            #headerGfw .m-header-submenu.-apps > ul > li > a {\n              padding: 0 0 100%; } }\n        #headerGfw .m-header-submenu.-apps > ul > li .app-wrapper {\n          width: 100%; }\n          @media (min-width: 420px) {\n            #headerGfw .m-header-submenu.-apps > ul > li .app-wrapper {\n              position: absolute;\n              top: 33px;\n              left: 0; } }\n          #headerGfw .m-header-submenu.-apps > ul > li .app-wrapper svg {\n            display: block;\n            width: auto;\n            height: 30px;\n            max-width: 40px;\n            margin: 0 auto;\n            fill: #b6b6ba; }\n          #headerGfw .m-header-submenu.-apps > ul > li .app-wrapper span {\n            display: block;\n            text-align: center;\n            padding: 10px 12px 0;\n            font-size: 12px;\n            text-transform: uppercase; }\n        #headerGfw .m-header-submenu.-apps > ul > li:hover.shape-fires svg, #headerGfw .m-header-submenu.-apps > ul > li.-current.shape-fires svg {\n          fill: #ed1846; }\n        #headerGfw .m-header-submenu.-apps > ul > li:hover.shape-commodities svg, #headerGfw .m-header-submenu.-apps > ul > li.-current.shape-commodities svg {\n          fill: #e98300; }\n        #headerGfw .m-header-submenu.-apps > ul > li:hover.shape-climate svg, #headerGfw .m-header-submenu.-apps > ul > li.-current.shape-climate svg {\n          fill: #5b80a0; }\n        #headerGfw .m-header-submenu.-apps > ul > li:hover.shape-water svg, #headerGfw .m-header-submenu.-apps > ul > li.-current.shape-water svg {\n          fill: #4099ce; }\n        #headerGfw .m-header-submenu.-apps > ul > li:hover svg, #headerGfw .m-header-submenu.-apps > ul > li.-current svg {\n          fill: #97bd3d; }\n        #headerGfw .m-header-submenu.-apps > ul > li.-current {\n          background: #f7f7f7; }\n\n#headerGfw .m-header-backdrop {\n  position: fixed;\n  z-index: 1;\n  background: rgba(0, 0, 0, 0.25);\n  width: 100%;\n  height: 100%; }\n  @media (min-width: 850px) {\n    #headerGfw .m-header-backdrop {\n      display: none; } }\n\n/* line 700, /Users/miguelbarrenechea/Proyects/gfw/app/assets/stylesheets/_header1600.scss */\n#googleTranslate .goog-te-gadget {\n  font-family: inherit;\n  text-align: center; }\n  #googleTranslate .goog-te-gadget .goog-te-gadget-simple {\n    border: none;\n    background: none;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    height: 35px; }\n    #googleTranslate .goog-te-gadget .goog-te-gadget-simple .goog-te-menu-value {\n      color: #000;\n      text-transform: uppercase;\n      font-size: 12px;\n      line-height: 28px;\n      position: relative;\n      padding-right: 16px; }\n      #googleTranslate .goog-te-gadget .goog-te-gadget-simple .goog-te-menu-value span {\n        margin: 0 3px 0 0px; }\n      #googleTranslate .goog-te-gadget .goog-te-gadget-simple .goog-te-menu-value span:first-child {\n        display: inline-block;\n        margin: 3px 5px 0; }\n      #googleTranslate .goog-te-gadget .goog-te-gadget-simple .goog-te-menu-value span:last-child {\n        margin: 0;\n        visibility: hidden;\n        display: block;\n        position: absolute;\n        top: 50%;\n        right: 0;\n        height: 16px;\n        width: 16px;\n        -webkit-transform: translate(0, -55%);\n                transform: translate(0, -55%); }\n        #googleTranslate .goog-te-gadget .goog-te-gadget-simple .goog-te-menu-value span:last-child:before {\n          content: \"\";\n          visibility: visible;\n          display: block;\n          height: 100%;\n          width: 100%;\n          background: url(http://www.globalforestwatch.org/assets/svg-icons/arrow-down.svg) no-repeat center;\n          background-size: contain; }\n\n.section-test *, .section-test *:after, .section-test *:before {\n  -webkit-tap-highlight-color: transparent;\n  box-sizing: border-box; }\n\n.section-test .wrapper {\n  position: relative;\n  margin: 0 auto;\n  padding: 0px;\n  width: 100%; }\n  @media (min-width: 850px) {\n    .section-test .wrapper {\n      max-width: 1024px;\n      width: 95%; } }\n  @media (min-width: 1400px) {\n    .section-test .wrapper {\n      max-width: 1200px;\n      width: 75%; } }\n\n#feedbackGfw {\n  font-family: \"Fira Sans\", Helvetica, serif; }\n  #feedbackGfw .feedback-link-fixed {\n    display: none;\n    position: fixed;\n    top: 50%;\n    right: 0;\n    z-index: 250;\n    background: #FFD24D;\n    line-height: 1;\n    text-transform: uppercase;\n    color: #555;\n    text-decoration: none;\n    padding: 8px;\n    cursor: pointer;\n    -webkit-transform: rotate(90deg) translate(50%, 0);\n            transform: rotate(90deg) translate(50%, 0);\n    -webkit-transform-origin: 100% 0;\n            transform-origin: 100% 0; }\n    #feedbackGfw .feedback-link-fixed > span {\n      pointer-events: none; }\n    @media (min-width: 850px) {\n      #feedbackGfw .feedback-link-fixed {\n        display: block; } }\n\n#feedbackGfw {\n  font-family: \"Fira Sans\", Helvetica, serif; }\n  #feedbackGfw .feedback-modal {\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 10000;\n    width: 100%;\n    height: 100%;\n    display: none; }\n    #feedbackGfw .feedback-modal.-active {\n      display: block; }\n      #feedbackGfw .feedback-modal.-active .modal-backdrop {\n        opacity: 1;\n        visibility: visible; }\n      #feedbackGfw .feedback-modal.-active .modal-window {\n        opacity: 1;\n        visibility: visible; }\n        @media (min-width: 850px) {\n          #feedbackGfw .feedback-modal.-active .modal-window {\n            -webkit-transform: translate(-50%, -50%);\n                    transform: translate(-50%, -50%); } }\n    #feedbackGfw .feedback-modal .modal-backdrop {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      z-index: 1;\n      opacity: 0;\n      visibility: hidden;\n      -webkit-transition: all 0.2s cubic-bezier(0.445, 0.05, 0.55, 0.95);\n      transition: all 0.2s cubic-bezier(0.445, 0.05, 0.55, 0.95); }\n    #feedbackGfw .feedback-modal .modal-window {\n      position: absolute;\n      top: 0;\n      left: 0;\n      z-index: 2;\n      width: 100%;\n      height: 100%;\n      opacity: 0;\n      visibility: hidden;\n      -webkit-transition: all 0s cubic-bezier(0.445, 0.05, 0.55, 0.95);\n      transition: all 0s cubic-bezier(0.445, 0.05, 0.55, 0.95); }\n      @media (min-width: 850px) {\n        #feedbackGfw .feedback-modal .modal-window {\n          left: 50%;\n          top: 50%;\n          width: 500px;\n          height: auto;\n          min-height: 100px;\n          -webkit-transform: translate(-50%, -60%);\n                  transform: translate(-50%, -60%); } }\n      #feedbackGfw .feedback-modal .modal-window .modal-spinner {\n        display: none;\n        pointer-events: none; }\n        #feedbackGfw .feedback-modal .modal-window .modal-spinner:before {\n          content: '';\n          z-index: 1;\n          position: absolute;\n          top: 0;\n          right: 0;\n          bottom: 0;\n          left: 0;\n          opacity: .6; }\n        #feedbackGfw .feedback-modal .modal-window .modal-spinner:after {\n          z-index: 2;\n          content: '';\n          height: 40px;\n          width: 40px;\n          position: absolute;\n          top: 50%;\n          left: 50%;\n          margin: -20px 0 0 -20px;\n          -webkit-transition: all .75s ease 0s;\n          transition: all .75s ease 0s;\n          border-radius: 100%;\n          border-top: 5px solid #97bd3d;\n          border-right: 5px solid #eee;\n          border-bottom: 5px solid #eee;\n          border-left: 5px solid #eee;\n          animation: standard .75s infinite linear;\n          -webkit-animation: standard .75s infinite linear;\n          -webkit-transform-origin: center;\n                  transform-origin: center; }\n        #feedbackGfw .feedback-modal .modal-window .modal-spinner.-active {\n          display: block; }\n        #feedbackGfw .feedback-modal .modal-window .modal-spinner.red:before {\n          content: '';\n          z-index: 1;\n          position: absolute;\n          top: 0;\n          right: 0;\n          bottom: 0;\n          left: 0;\n          opacity: .6; }\n        #feedbackGfw .feedback-modal .modal-window .modal-spinner.red:after {\n          z-index: 2;\n          content: '';\n          height: 40px;\n          width: 40px;\n          position: absolute;\n          top: 50%;\n          left: 50%;\n          margin: -20px 0 0 -20px;\n          -webkit-transition: all .75s ease 0s;\n          transition: all .75s ease 0s;\n          border-radius: 100%;\n          border-top: 5px solid #ed1846;\n          border-right: 5px solid #eee;\n          border-bottom: 5px solid #eee;\n          border-left: 5px solid #eee;\n          animation: standard .75s infinite linear;\n          -webkit-animation: standard .75s infinite linear;\n          -webkit-transform-origin: center;\n                  transform-origin: center; }\n        #feedbackGfw .feedback-modal .modal-window .modal-spinner.orange:before {\n          content: '';\n          z-index: 1;\n          position: absolute;\n          top: 0;\n          right: 0;\n          bottom: 0;\n          left: 0;\n          opacity: .6; }\n        #feedbackGfw .feedback-modal .modal-window .modal-spinner.orange:after {\n          z-index: 2;\n          content: '';\n          height: 40px;\n          width: 40px;\n          position: absolute;\n          top: 50%;\n          left: 50%;\n          margin: -20px 0 0 -20px;\n          -webkit-transition: all .75s ease 0s;\n          transition: all .75s ease 0s;\n          border-radius: 100%;\n          border-top: 5px solid #e98300;\n          border-right: 5px solid #eee;\n          border-bottom: 5px solid #eee;\n          border-left: 5px solid #eee;\n          animation: standard .75s infinite linear;\n          -webkit-animation: standard .75s infinite linear;\n          -webkit-transform-origin: center;\n                  transform-origin: center; }\n        #feedbackGfw .feedback-modal .modal-window .modal-spinner.blue:before {\n          content: '';\n          z-index: 1;\n          position: absolute;\n          top: 0;\n          right: 0;\n          bottom: 0;\n          left: 0;\n          opacity: .6; }\n        #feedbackGfw .feedback-modal .modal-window .modal-spinner.blue:after {\n          z-index: 2;\n          content: '';\n          height: 40px;\n          width: 40px;\n          position: absolute;\n          top: 50%;\n          left: 50%;\n          margin: -20px 0 0 -20px;\n          -webkit-transition: all .75s ease 0s;\n          transition: all .75s ease 0s;\n          border-radius: 100%;\n          border-top: 5px solid #5b80a0;\n          border-right: 5px solid #eee;\n          border-bottom: 5px solid #eee;\n          border-left: 5px solid #eee;\n          animation: standard .75s infinite linear;\n          -webkit-animation: standard .75s infinite linear;\n          -webkit-transform-origin: center;\n                  transform-origin: center; }\n      #feedbackGfw .feedback-modal .modal-window .modal-close {\n        display: block;\n        position: absolute;\n        top: 0px;\n        right: 0px;\n        width: 40px;\n        height: 40px;\n        z-index: 20; }\n        #feedbackGfw .feedback-modal .modal-window .modal-close svg {\n          position: absolute;\n          top: 50%;\n          left: 50%;\n          width: 50%;\n          height: 50%;\n          -webkit-transform: translate(-50%, -50%);\n                  transform: translate(-50%, -50%); }\n  #feedbackGfw .feedback-modal .modal-backdrop {\n    background: rgba(0, 0, 0, 0.25); }\n  #feedbackGfw .feedback-modal .modal-window {\n    background: #FFF;\n    border: none;\n    box-shadow: 0 0 4px rgba(142, 142, 142, 0.5); }\n    #feedbackGfw .feedback-modal .modal-window:before, #feedbackGfw .feedback-modal .modal-window:after {\n      content: \"\";\n      position: absolute;\n      height: 20px;\n      width: calc(100% - 8px);\n      left: 0; }\n    #feedbackGfw .feedback-modal .modal-window:before {\n      top: 0;\n      background-image: -webkit-linear-gradient(top, white, rgba(255, 255, 255, 0));\n      background-image: linear-gradient(top, white, rgba(255, 255, 255, 0)); }\n    #feedbackGfw .feedback-modal .modal-window:after {\n      bottom: 0;\n      background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 0), white);\n      background-image: linear-gradient(top, rgba(255, 255, 255, 0), white); }\n    #feedbackGfw .feedback-modal .modal-window .modal-close svg {\n      fill: #555; }\n    #feedbackGfw .feedback-modal .modal-window .modal-close:hover svg {\n      fill: #3c3c3c; }\n    #feedbackGfw .feedback-modal .modal-window .modal-wrapper {\n      position: relative;\n      overflow-x: hidden;\n      overflow-y: auto;\n      height: 100%;\n      max-height: 100%;\n      width: 100%;\n      top: 0;\n      left: 0;\n      padding: 20px 20px 0;\n      border-bottom: 66px solid transparent; }\n      @media (min-width: 850px) {\n        #feedbackGfw .feedback-modal .modal-window .modal-wrapper {\n          max-height: 450px; } }\n      #feedbackGfw .feedback-modal .modal-window .modal-wrapper .modal-content {\n        height: auto;\n        width: 100%;\n        outline: none;\n        font-size: 15px;\n        color: #555;\n        border: none;\n        box-shadow: none;\n        background: transparent;\n        border-radius: 0; }\n  #feedbackGfw .feedback-modal .modal-header {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    background: #FFF;\n    z-index: 2; }\n    #feedbackGfw .feedback-modal .modal-header:before, #feedbackGfw .feedback-modal .modal-header:after {\n      content: \" \";\n      display: table;\n      visibility: hidden;\n      font-size: 0;\n      height: 0; }\n    #feedbackGfw .feedback-modal .modal-header:after {\n      clear: both; }\n    #feedbackGfw .feedback-modal .modal-header .gradient {\n      content: \"\";\n      position: absolute;\n      height: 15px;\n      width: 100%;\n      left: 0;\n      top: 100%;\n      background-image: -webkit-linear-gradient(top, white, rgba(255, 255, 255, 0));\n      background-image: linear-gradient(top, white, rgba(255, 255, 255, 0)); }\n    #feedbackGfw .feedback-modal .modal-header ul {\n      margin: 15px 0;\n      position: relative;\n      left: 50%;\n      -webkit-transform: translate(-50%, 0);\n              transform: translate(-50%, 0);\n      float: left;\n      padding: 4px;\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n      -webkit-justify-content: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      border: 1px solid #97bd3d;\n      border-radius: 45px; }\n      #feedbackGfw .feedback-modal .modal-header ul li {\n        font-size: 19px;\n        padding: 10px 20px 7px;\n        color: #555;\n        cursor: pointer;\n        font-weight: 500;\n        border-radius: 40px; }\n        #feedbackGfw .feedback-modal .modal-header ul li:hover {\n          background: #fcfcfc; }\n        #feedbackGfw .feedback-modal .modal-header ul li.-active {\n          color: #FFF;\n          background: #97bd3d; }\n  #feedbackGfw .feedback-modal .modal-footer {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    background: #FFF;\n    z-index: 2;\n    padding: 15px 0; }\n    #feedbackGfw .feedback-modal .modal-footer:before, #feedbackGfw .feedback-modal .modal-footer:after {\n      content: \" \";\n      display: table;\n      visibility: hidden;\n      font-size: 0;\n      height: 0; }\n    #feedbackGfw .feedback-modal .modal-footer:after {\n      clear: both; }\n    #feedbackGfw .feedback-modal .modal-footer .gradient {\n      content: \"\";\n      position: absolute;\n      height: 15px;\n      width: calc(100% - 10px);\n      left: 0;\n      bottom: 100%;\n      border-bottom: 1px solid #E5E5DF;\n      background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 0), white);\n      background-image: linear-gradient(top, rgba(255, 255, 255, 0), white); }\n  #feedbackGfw .feedback-modal .modal-content {\n    font-size: 13px;\n    line-height: 1; }\n    #feedbackGfw .feedback-modal .modal-content h2 {\n      text-align: center;\n      font-size: 32px;\n      font-weight: 300;\n      color: #555;\n      padding: 0 0 20px; }\n    #feedbackGfw .feedback-modal .modal-content h3 {\n      font-size: 21px;\n      font-weight: 400;\n      line-height: 1.25;\n      text-transform: none; }\n      #feedbackGfw .feedback-modal .modal-content h3 strong {\n        font-weight: 500; }\n    #feedbackGfw .feedback-modal .modal-content .bullets {\n      list-style-type: disc;\n      color: #555; }\n      #feedbackGfw .feedback-modal .modal-content .bullets > li {\n        list-style-type: disc;\n        padding: 10px 0 0;\n        margin-left: 20px;\n        line-height: 1.25;\n        display: list-item;\n        text-transform: none; }\n        #feedbackGfw .feedback-modal .modal-content .bullets > li:first-child {\n          padding: 0; }\n    #feedbackGfw .feedback-modal .modal-content li {\n      list-style: none; }\n    #feedbackGfw .feedback-modal .modal-content p {\n      line-height: 1.25; }\n    #feedbackGfw .feedback-modal .modal-content a:not(.btn) {\n      color: #97bd3d; }\n      #feedbackGfw .feedback-modal .modal-content a:not(.btn):hover {\n        color: #88aa37; }\n      #feedbackGfw .feedback-modal .modal-content a:not(.btn).red {\n        color: #ed1846; }\n        #feedbackGfw .feedback-modal .modal-content a:not(.btn).red:hover {\n          color: #7c0a22; }\n      #feedbackGfw .feedback-modal .modal-content a:not(.btn).orange {\n        color: #e98300; }\n        #feedbackGfw .feedback-modal .modal-content a:not(.btn).orange:hover {\n          color: #6a3b00; }\n      #feedbackGfw .feedback-modal .modal-content a:not(.btn).blue {\n        color: #5b80a0; }\n        #feedbackGfw .feedback-modal .modal-content a:not(.btn).blue:hover {\n          color: #2d3f4f; }\n  #feedbackGfw .feedback-modal .modal-steps {\n    padding: 20px !important; }\n    #feedbackGfw .feedback-modal .modal-steps > li {\n      display: none;\n      text-transform: none; }\n      #feedbackGfw .feedback-modal .modal-steps > li.-active {\n        display: block; }\n      #feedbackGfw .feedback-modal .modal-steps > li .modal-step-content {\n        padding: 20px 0 0; }\n        #feedbackGfw .feedback-modal .modal-steps > li .modal-step-content > * {\n          margin: 15px 0 0; }\n          #feedbackGfw .feedback-modal .modal-steps > li .modal-step-content > *:first-child {\n            margin: 0; }\n  #feedbackGfw .feedback-modal .feedback-form > * {\n    display: block;\n    margin: 10px 0 0; }\n    #feedbackGfw .feedback-modal .feedback-form > *:first-child {\n      margin: 0; }\n  #feedbackGfw .feedback-modal .feedback-form .feedback-tester {\n    padding: 20px;\n    border: 1px solid #97bd3d;\n    border-radius: 2px; }\n    #feedbackGfw .feedback-modal .feedback-form .feedback-tester.red {\n      border: 1px solid #ed1846; }\n    #feedbackGfw .feedback-modal .feedback-form .feedback-tester.orange {\n      border: 1px solid #e98300; }\n    #feedbackGfw .feedback-modal .feedback-form .feedback-tester.blue {\n      border: 1px solid #5b80a0; }\n  #feedbackGfw .feedback-modal .m-btncontainer {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    #feedbackGfw .feedback-modal .m-btncontainer.-center {\n      -webkit-box-pack: center;\n      -webkit-justify-content: center;\n          -ms-flex-pack: center;\n              justify-content: center; }\n    #feedbackGfw .feedback-modal .m-btncontainer.-steps .btn {\n      display: none; }\n      #feedbackGfw .feedback-modal .m-btncontainer.-steps .btn.-active {\n        display: block; }\n\n/*\nSCSS variables are information about icon's compiled state, stored under its original file name\n\n.icon-home {\n  width: $icon-home-width;\n}\n\nThe large array-like variables contain all information about a single icon\n$icon-home: x y offset_x offset_y width height total_width total_height image_path;\n\nAt the bottom of this section, we provide information about the spritesheet itself\n$spritesheet: width height image $spritesheet-sprites;\n*/\n/*\nThe provided mixins are intended to be used with the array-like variables\n\n.icon-home {\n  @include sprite-width($icon-home);\n}\n\n.icon-email {\n  @include sprite($icon-email);\n}\n\nHere are example usages in HTML:\n\n`display: block` sprite:\n<div class=\"icon-home\"></div>\n\n`display: inline-block` sprite:\n<img class=\"icon-home\" />\n*/\n/*\nThe `sprites` mixin generates identical output to the CSS template\n  but can be overridden inside of SCSS\n\n@include sprites($spritesheet-sprites);\n*/\n#footerGfw {\n  font-family: \"Fira Sans\", Helvetica, serif;\n  background: #eceee8;\n  z-index: 11;\n  display: none;\n  clear: both; }\n  @media (min-width: 850px) {\n    #footerGfw {\n      display: block; } }\n  #footerGfw .m-footer-apps {\n    display: none;\n    -webkit-box-pack: justify;\n    -webkit-justify-content: space-between;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    border-bottom: 2px solid #E5E5DF;\n    padding: 30px 0; }\n    @media (min-width: 850px) {\n      #footerGfw .m-footer-apps {\n        display: -webkit-box;\n        display: -webkit-flex;\n        display: -ms-flexbox;\n        display: flex; } }\n    #footerGfw .m-footer-apps > li > a {\n      display: block;\n      color: #555;\n      padding: 10px; }\n      #footerGfw .m-footer-apps > li > a > svg {\n        width: 24px;\n        height: 24px;\n        fill: #555;\n        display: block;\n        margin: 0 auto 10px; }\n      #footerGfw .m-footer-apps > li > a > h3 {\n        text-align: center;\n        font-size: 14px;\n        text-transform: uppercase;\n        border-bottom: 2px solid transparent; }\n      #footerGfw .m-footer-apps > li > a:hover > h3 {\n        border-bottom: 2px solid #555; }\n  #footerGfw .m-footer-info {\n    padding: 30px 10px; }\n    @media (min-width: 850px) {\n      #footerGfw .m-footer-info {\n        display: -webkit-box;\n        display: -webkit-flex;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: justify;\n        -webkit-justify-content: space-between;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n        -webkit-box-align: center;\n        -webkit-align-items: center;\n            -ms-flex-align: center;\n                align-items: center; } }\n    #footerGfw .m-footer-info .m-footer-partner {\n      text-align: center; }\n      @media (min-width: 850px) {\n        #footerGfw .m-footer-info .m-footer-partner {\n          text-align: left; } }\n      #footerGfw .m-footer-info .m-footer-partner > p {\n        font-size: 12px;\n        color: #555;\n        margin: 0 0 5px; }\n      #footerGfw .m-footer-info .m-footer-partner svg {\n        display: block;\n        width: 200px;\n        margin: 0 auto; }\n        @media (min-width: 850px) {\n          #footerGfw .m-footer-info .m-footer-partner svg {\n            margin: 0; } }\n    #footerGfw .m-footer-info .m-footer-contact {\n      font-size: 12px;\n      color: #555;\n      text-align: center;\n      padding: 30px 0 0; }\n      @media (min-width: 850px) {\n        #footerGfw .m-footer-info .m-footer-contact {\n          text-align: right;\n          padding: 0; } }\n      #footerGfw .m-footer-info .m-footer-contact h3 {\n        font-weight: 400; }\n      #footerGfw .m-footer-info .m-footer-contact p {\n        font-weight: 300;\n        line-height: 1.5; }\n        #footerGfw .m-footer-info .m-footer-contact p a {\n          color: #555;\n          font-weight: 400; }\n  #footerGfw .m-footer-terms {\n    text-align: center;\n    padding: 0 0 60px; }\n    @media (min-width: 850px) {\n      #footerGfw .m-footer-terms {\n        padding: 15px 0; } }\n    #footerGfw .m-footer-terms a {\n      color: #555;\n      font-size: 12px;\n      display: block;\n      line-height: 1; }\n      @media (min-width: 850px) {\n        #footerGfw .m-footer-terms a {\n          display: inline-block; } }\n      #footerGfw .m-footer-terms a:hover {\n        text-decoration: underline; }\n\n#my-gfw-slider {\n  position: relative;\n  padding: 30px 10px;\n  display: none; }\n  @media (min-width: 850px) {\n    #my-gfw-slider {\n      display: block; } }\n  #my-gfw-slider .js_slide {\n    display: inline-block;\n    height: 170px;\n    width: 20%;\n    /* By default, 5 slides at a time */\n    padding-right: 10px; }\n    #my-gfw-slider .js_slide a {\n      display: block;\n      margin: 0 auto;\n      position: relative;\n      top: 50%;\n      -webkit-transform: translate(0, -50%);\n              transform: translate(0, -50%); }\n      #my-gfw-slider .js_slide a.afc {\n        background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n        background-position: -572px -470px;\n        width: 80px;\n        height: 69px; }\n        #my-gfw-slider .js_slide a.afc:hover {\n          background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n          background-position: -652px 0px;\n          width: 80px;\n          height: 69px; }\n      #my-gfw-slider .js_slide a.airbus {\n        background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n        background-position: -732px -30px;\n        width: 130px;\n        height: 30px; }\n        #my-gfw-slider .js_slide a.airbus:hover {\n          background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n          background-position: -732px 0px;\n          width: 130px;\n          height: 30px; }\n      #my-gfw-slider .js_slide a.bei {\n        background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n        background-position: -212px -198px;\n        width: 130px;\n        height: 63px; }\n        #my-gfw-slider .js_slide a.bei:hover {\n          background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n          background-position: -342px -198px;\n          width: 130px;\n          height: 63px; }\n      #my-gfw-slider .js_slide a.bigdataclimatechallengewinner {\n        background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n        background-position: 0px 0px;\n        width: 215px;\n        height: 99px; }\n        #my-gfw-slider .js_slide a.bigdataclimatechallengewinner:hover {\n          background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n          background-position: 0px -99px;\n          width: 215px;\n          height: 99px; }\n      #my-gfw-slider .js_slide a.blueraster {\n        background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n        background-position: -190px -561px;\n        width: 110px;\n        height: 48px; }\n        #my-gfw-slider .js_slide a.blueraster:hover {\n          background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n          background-position: -300px -561px;\n          width: 110px;\n          height: 48px; }\n      #my-gfw-slider .js_slide a.bnpb {\n        background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n        background-position: -732px -422px;\n        width: 50px;\n        height: 64px; }\n        #my-gfw-slider .js_slide a.bnpb:hover {\n          background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n          background-position: -782px -422px;\n          width: 50px;\n          height: 64px; }\n      #my-gfw-slider .js_slide a.bobolinkfundation {\n        background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n        background-position: -369px -766px;\n        width: 87px;\n        height: 24px; }\n        #my-gfw-slider .js_slide a.bobolinkfundation:hover {\n          background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n          background-position: -282px -766px;\n          width: 87px;\n          height: 24px; }\n      #my-gfw-slider .js_slide a.cambridge {\n        background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n        background-position: -86px -421px;\n        width: 130px;\n        height: 52px; }\n        #my-gfw-slider .js_slide a.cambridge:hover {\n          background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n          background-position: -216px -421px;\n          width: 130px;\n          height: 52px; }\n      #my-gfw-slider .js_slide a.cartodb {\n        background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n        background-position: -550px -663px;\n        width: 110px;\n        height: 39px; }\n        #my-gfw-slider .js_slide a.cartodb:hover {\n          background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n          background-position: -440px -663px;\n          width: 110px;\n          height: 39px; }\n      #my-gfw-slider .js_slide a.centerforglobaldevelopment {\n        background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n        background-position: -732px -382px;\n        width: 84px;\n        height: 40px; }\n        #my-gfw-slider .js_slide a.centerforglobaldevelopment:hover {\n          background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n          background-position: -732px -342px;\n          width: 84px;\n          height: 40px; }\n      #my-gfw-slider .js_slide a.cgiar {\n        background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n        background-position: -346px -421px;\n        width: 124px;\n        height: 43px; }\n        #my-gfw-slider .js_slide a.cgiar:hover {\n          background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n          background-position: -440px -501px;\n          width: 124px;\n          height: 43px; }\n      #my-gfw-slider .js_slide a.ciat {\n        background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n        background-position: -322px -351px;\n        width: 120px;\n        height: 57px; }\n        #my-gfw-slider .js_slide a.ciat:hover {\n          background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n          background-position: -202px -351px;\n          width: 120px;\n          height: 57px; }\n      #my-gfw-slider .js_slide a.clua {\n        background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n        background-position: -195px -473px;\n        width: 110px;\n        height: 26px; }\n        #my-gfw-slider .js_slide a.clua:hover {\n          background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n          background-position: -358px -707px;\n          width: 110px;\n          height: 26px; }\n      #my-gfw-slider .js_slide a.danida {\n        background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n        background-position: -484px -400px;\n        width: 82px;\n        height: 15px; }\n        #my-gfw-slider .js_slide a.danida:hover {\n          background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n          background-position: -732px -689px;\n          width: 82px;\n          height: 15px; }\n      #my-gfw-slider .js_slide a.digitalglobe {\n        background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n        background-position: -252px -623px;\n        width: 120px;\n        height: 38px; }\n        #my-gfw-slider .js_slide a.digitalglobe:hover {\n          background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n          background-position: -372px -623px;\n          width: 120px;\n          height: 38px; }\n      #my-gfw-slider .js_slide a.ejn {\n        background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n        background-position: -652px -261px;\n        width: 80px;\n        height: 64px; }\n        #my-gfw-slider .js_slide a.ejn:hover {\n          background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n          background-position: -652px -69px;\n          width: 80px;\n          height: 64px; }\n      #my-gfw-slider .js_slide a.esri {\n        background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n        background-position: -470px -421px;\n        width: 87px;\n        height: 33px; }\n        #my-gfw-slider .js_slide a.esri:hover {\n          background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n          background-position: -51px -707px;\n          width: 87px;\n          height: 33px; }\n      #my-gfw-slider .js_slide a.ewmi {\n        background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n        background-position: 0px -623px;\n        width: 126px;\n        height: 40px; }\n        #my-gfw-slider .js_slide a.ewmi:hover {\n          background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n          background-position: -126px -623px;\n          width: 126px;\n          height: 40px; }\n      #my-gfw-slider .js_slide a.gef {\n        background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n        background-position: -427px -114px;\n        width: 51px;\n        height: 59px; }\n        #my-gfw-slider .js_slide a.gef:hover {\n          background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n          background-position: 0px -707px;\n          width: 51px;\n          height: 59px; }\n      #my-gfw-slider .js_slide a.generation {\n        background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n        background-position: -732px -311px;\n        width: 110px;\n        height: 31px; }\n        #my-gfw-slider .js_slide a.generation:hover {\n          background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n          background-position: -732px -280px;\n          width: 110px;\n          height: 31px; }\n      #my-gfw-slider .js_slide a.globalforestwatchcanada {\n        background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n        background-position: -862px -364px;\n        width: 42px;\n        height: 44px; }\n        #my-gfw-slider .js_slide a.globalforestwatchcanada:hover {\n          background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n          background-position: -862px -320px;\n          width: 42px;\n          height: 44px; }\n      #my-gfw-slider .js_slide a.google {\n        background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n        background-position: -112px -766px;\n        width: 85px;\n        height: 29px; }\n        #my-gfw-slider .js_slide a.google:hover {\n          background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n          background-position: -197px -766px;\n          width: 85px;\n          height: 29px; }\n      #my-gfw-slider .js_slide a.icf {\n        background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n        background-position: -248px -707px;\n        width: 110px;\n        height: 26px; }\n        #my-gfw-slider .js_slide a.icf:hover {\n          background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n          background-position: -305px -473px;\n          width: 110px;\n          height: 26px; }\n      #my-gfw-slider .js_slide a.imazon {\n        background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n        background-position: -456px -766px;\n        width: 79px;\n        height: 24px; }\n        #my-gfw-slider .js_slide a.imazon:hover {\n          background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n          background-position: -652px -599px;\n          width: 79px;\n          height: 24px; }\n      #my-gfw-slider .js_slide a.inab {\n        background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n        background-position: -215px -114px;\n        width: 106px;\n        height: 80px; }\n        #my-gfw-slider .js_slide a.inab:hover {\n          background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n          background-position: -321px -114px;\n          width: 106px;\n          height: 80px; }\n      #my-gfw-slider .js_slide a.ioi {\n        background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n        background-position: -212px -261px;\n        width: 110px;\n        height: 10px; }\n        #my-gfw-slider .js_slide a.ioi:hover {\n          background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n          background-position: -322px -261px;\n          width: 110px;\n          height: 10px; }\n      #my-gfw-slider .js_slide a.ministiere {\n        background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n        background-position: -652px -532px;\n        width: 70px;\n        height: 67px; }\n        #my-gfw-slider .js_slide a.ministiere:hover {\n          background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n          background-position: -652px -465px;\n          width: 70px;\n          height: 67px; }\n      #my-gfw-slider .js_slide a.ministryofforeignaffairs {\n        background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n        background-position: 0px -198px;\n        width: 106px;\n        height: 80px; }\n        #my-gfw-slider .js_slide a.ministryofforeignaffairs:hover {\n          background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n          background-position: -106px -198px;\n          width: 106px;\n          height: 80px; }\n      #my-gfw-slider .js_slide a.moises {\n        background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n        background-position: -110px -663px;\n        width: 110px;\n        height: 44px; }\n        #my-gfw-slider .js_slide a.moises:hover {\n          background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n          background-position: 0px -663px;\n          width: 110px;\n          height: 44px; }\n      #my-gfw-slider .js_slide a.mongabay {\n        background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n        background-position: -220px -663px;\n        width: 110px;\n        height: 40px; }\n        #my-gfw-slider .js_slide a.mongabay:hover {\n          background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n          background-position: -330px -663px;\n          width: 110px;\n          height: 40px; }\n      #my-gfw-slider .js_slide a.moore {\n        background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n        background-position: -732px -206px;\n        width: 96px;\n        height: 37px; }\n        #my-gfw-slider .js_slide a.moore:hover {\n          background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n          background-position: -732px -243px;\n          width: 96px;\n          height: 37px; }\n      #my-gfw-slider .js_slide a.muyissi {\n        background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n        background-position: -572px -240px;\n        width: 80px;\n        height: 80px; }\n        #my-gfw-slider .js_slide a.muyissi:hover {\n          background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n          background-position: -572px 0px;\n          width: 80px;\n          height: 80px; }\n      #my-gfw-slider .js_slide a.norwegianministri {\n        background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n        background-position: -520px -561px;\n        width: 110px;\n        height: 46px; }\n        #my-gfw-slider .js_slide a.norwegianministri:hover {\n          background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n          background-position: -410px -561px;\n          width: 110px;\n          height: 46px; }\n      #my-gfw-slider .js_slide a.opendevcam {\n        background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n        background-position: -652px -325px;\n        width: 70px;\n        height: 70px; }\n        #my-gfw-slider .js_slide a.opendevcam:hover {\n          background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n          background-position: -652px -395px;\n          width: 70px;\n          height: 70px; }\n      #my-gfw-slider .js_slide a.opendevmekong {\n        background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n        background-position: -572px -160px;\n        width: 80px;\n        height: 80px; }\n        #my-gfw-slider .js_slide a.opendevmekong:hover {\n          background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n          background-position: -572px -80px;\n          width: 80px;\n          height: 80px; }\n      #my-gfw-slider .js_slide a.orbital {\n        background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n        background-position: -101px -351px;\n        width: 101px;\n        height: 70px; }\n        #my-gfw-slider .js_slide a.orbital:hover {\n          background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n          background-position: 0px -351px;\n          width: 101px;\n          height: 70px; }\n      #my-gfw-slider .js_slide a.osfac {\n        background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n        background-position: -862px -170px;\n        width: 44px;\n        height: 56px; }\n        #my-gfw-slider .js_slide a.osfac:hover {\n          background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n          background-position: -862px -114px;\n          width: 44px;\n          height: 56px; }\n      #my-gfw-slider .js_slide a.osinfor {\n        background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n        background-position: 0px -421px;\n        width: 86px;\n        height: 80px; }\n        #my-gfw-slider .js_slide a.osinfor:hover {\n          background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n          background-position: -484px -320px;\n          width: 86px;\n          height: 80px; }\n      #my-gfw-slider .js_slide a.raisg {\n        background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n        background-position: -572px -395px;\n        width: 80px;\n        height: 75px; }\n        #my-gfw-slider .js_slide a.raisg:hover {\n          background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n          background-position: -572px -320px;\n          width: 80px;\n          height: 75px; }\n      #my-gfw-slider .js_slide a.redd {\n        background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n        background-position: -95px -561px;\n        width: 95px;\n        height: 62px; }\n        #my-gfw-slider .js_slide a.redd:hover {\n          background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n          background-position: 0px -561px;\n          width: 95px;\n          height: 62px; }\n      #my-gfw-slider .js_slide a.resolve {\n        background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n        background-position: -732px -486px;\n        width: 110px;\n        height: 28px; }\n        #my-gfw-slider .js_slide a.resolve:hover {\n          background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n          background-position: -732px -542px;\n          width: 110px;\n          height: 28px; }\n      #my-gfw-slider .js_slide a.rfuk {\n        background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n        background-position: -492px -623px;\n        width: 110px;\n        height: 37px; }\n        #my-gfw-slider .js_slide a.rfuk:hover {\n          background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n          background-position: -602px -623px;\n          width: 110px;\n          height: 37px; }\n      #my-gfw-slider .js_slide a.rm {\n        background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n        background-position: -330px -278px;\n        width: 110px;\n        height: 66px; }\n        #my-gfw-slider .js_slide a.rm:hover {\n          background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n          background-position: -220px -278px;\n          width: 110px;\n          height: 66px; }\n      #my-gfw-slider .js_slide a.rspo {\n        background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n        background-position: -732px -140px;\n        width: 110px;\n        height: 33px; }\n        #my-gfw-slider .js_slide a.rspo:hover {\n          background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n          background-position: -732px -173px;\n          width: 110px;\n          height: 33px; }\n      #my-gfw-slider .js_slide a.rtrs {\n        background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n        background-position: -778px -60px;\n        width: 46px;\n        height: 80px; }\n        #my-gfw-slider .js_slide a.rtrs:hover {\n          background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n          background-position: -732px -60px;\n          width: 46px;\n          height: 80px; }\n      #my-gfw-slider .js_slide a.scannex {\n        background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n        background-position: -171px -740px;\n        width: 110px;\n        height: 20px; }\n        #my-gfw-slider .js_slide a.scannex:hover {\n          background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n          background-position: -281px -740px;\n          width: 110px;\n          height: 20px; }\n      #my-gfw-slider .js_slide a.sida {\n        background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n        background-position: -330px -501px;\n        width: 110px;\n        height: 55px; }\n        #my-gfw-slider .js_slide a.sida:hover {\n          background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n          background-position: -220px -501px;\n          width: 110px;\n          height: 55px; }\n      #my-gfw-slider .js_slide a.specialachievement {\n        background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n        background-position: -215px 0px;\n        width: 269px;\n        height: 57px; }\n        #my-gfw-slider .js_slide a.specialachievement:hover {\n          background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n          background-position: -215px -57px;\n          width: 269px;\n          height: 57px; }\n      #my-gfw-slider .js_slide a.thejanegoodallinstitute {\n        background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n        background-position: -415px -473px;\n        width: 110px;\n        height: 26px; }\n        #my-gfw-slider .js_slide a.thejanegoodallinstitute:hover {\n          background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n          background-position: -138px -707px;\n          width: 110px;\n          height: 26px; }\n      #my-gfw-slider .js_slide a.thetiliafund {\n        background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n        background-position: 0px -817px;\n        width: 67px;\n        height: 25px; }\n        #my-gfw-slider .js_slide a.thetiliafund:hover {\n          background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n          background-position: -660px -663px;\n          width: 67px;\n          height: 25px; }\n      #my-gfw-slider .js_slide a.tipos {\n        background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n        background-position: -732px -514px;\n        width: 110px;\n        height: 28px; }\n        #my-gfw-slider .js_slide a.tipos:hover {\n          background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n          background-position: -732px -570px;\n          width: 110px;\n          height: 28px; }\n      #my-gfw-slider .js_slide a.ukaid {\n        background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n        background-position: -862px -273px;\n        width: 43px;\n        height: 47px; }\n        #my-gfw-slider .js_slide a.ukaid:hover {\n          background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n          background-position: -862px -226px;\n          width: 43px;\n          height: 47px; }\n      #my-gfw-slider .js_slide a.unep {\n        background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n        background-position: -862px 0px;\n        width: 49px;\n        height: 57px; }\n        #my-gfw-slider .js_slide a.unep:hover {\n          background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n          background-position: -862px -57px;\n          width: 49px;\n          height: 57px; }\n      #my-gfw-slider .js_slide a.unepwcmc {\n        background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n        background-position: -110px -501px;\n        width: 110px;\n        height: 60px; }\n        #my-gfw-slider .js_slide a.unepwcmc:hover {\n          background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n          background-position: 0px -501px;\n          width: 110px;\n          height: 60px; }\n      #my-gfw-slider .js_slide a.unilever {\n        background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n        background-position: -484px 0px;\n        width: 88px;\n        height: 80px; }\n        #my-gfw-slider .js_slide a.unilever:hover {\n          background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n          background-position: -484px -80px;\n          width: 88px;\n          height: 80px; }\n      #my-gfw-slider .js_slide a.universityofmaryland {\n        background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n        background-position: 0px -766px;\n        width: 56px;\n        height: 51px; }\n        #my-gfw-slider .js_slide a.universityofmaryland:hover {\n          background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n          background-position: -56px -766px;\n          width: 56px;\n          height: 51px; }\n      #my-gfw-slider .js_slide a.urthecast {\n        background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n        background-position: -578px -707px;\n        width: 110px;\n        height: 23px; }\n        #my-gfw-slider .js_slide a.urthecast:hover {\n          background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n          background-position: -468px -707px;\n          width: 110px;\n          height: 23px; }\n      #my-gfw-slider .js_slide a.usaid {\n        background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n        background-position: -652px -133px;\n        width: 80px;\n        height: 64px; }\n        #my-gfw-slider .js_slide a.usaid:hover {\n          background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n          background-position: -652px -197px;\n          width: 80px;\n          height: 64px; }\n      #my-gfw-slider .js_slide a.vizzuality {\n        background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n        background-position: -86px -473px;\n        width: 109px;\n        height: 27px; }\n        #my-gfw-slider .js_slide a.vizzuality:hover {\n          background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n          background-position: -732px -662px;\n          width: 109px;\n          height: 27px; }\n      #my-gfw-slider .js_slide a.whrc {\n        background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n        background-position: -484px -240px;\n        width: 87px;\n        height: 80px; }\n        #my-gfw-slider .js_slide a.whrc:hover {\n          background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n          background-position: -484px -160px;\n          width: 87px;\n          height: 80px; }\n      #my-gfw-slider .js_slide a.wri {\n        background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n        background-position: -732px -598px;\n        width: 95px;\n        height: 32px; }\n        #my-gfw-slider .js_slide a.wri:hover {\n          background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n          background-position: -732px -630px;\n          width: 95px;\n          height: 32px; }\n      #my-gfw-slider .js_slide a.zeroextinction {\n        background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n        background-position: -51px -740px;\n        width: 120px;\n        height: 20px; }\n        #my-gfw-slider .js_slide a.zeroextinction:hover {\n          background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n          background-position: -688px -707px;\n          width: 120px;\n          height: 20px; }\n      #my-gfw-slider .js_slide a.zsl {\n        background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n        background-position: 0px -278px;\n        width: 110px;\n        height: 73px; }\n        #my-gfw-slider .js_slide a.zsl:hover {\n          background-image: url(https://cdn.rawgit.com/simbiotica/gfw_assets/39365520305b62793c15efa9fefc712206e21493/images/sprites/logos.png);\n          background-position: -110px -278px;\n          width: 110px;\n          height: 73px; }\n  #my-gfw-slider .m-footer-carousel {\n    display: -webkit-inline-box;\n    display: -webkit-inline-flex;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    width: 100%;\n    height: 100%;\n    -webkit-justify-content: space-around;\n        -ms-flex-pack: distribute;\n            justify-content: space-around;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  #my-gfw-slider .frame {\n    width: calc(100% - 225px);\n    margin: 0 auto !important;\n    position: relative;\n    font-size: 0;\n    line-height: 0;\n    overflow: hidden;\n    white-space: nowrap; }\n  #my-gfw-slider .js_prev,\n  #my-gfw-slider .js_next {\n    position: absolute;\n    top: 60px;\n    z-index: 2;\n    display: block;\n    height: 50px;\n    width: 50px;\n    line-height: 0;\n    font-size: 0;\n    cursor: pointer;\n    background: #E0E0D9;\n    color: transparent;\n    padding: 0;\n    border: none;\n    outline: none;\n    border-radius: 50%; }\n    #my-gfw-slider .js_prev:hover, #my-gfw-slider .js_prev:focus,\n    #my-gfw-slider .js_next:hover,\n    #my-gfw-slider .js_next:focus {\n      outline: none;\n      background: #97bd3d;\n      color: transparent; }\n      #my-gfw-slider .js_prev:hover:before, #my-gfw-slider .js_prev:focus:before,\n      #my-gfw-slider .js_next:hover:before,\n      #my-gfw-slider .js_next:focus:before {\n        opacity: 1; }\n    #my-gfw-slider .js_prev:before, #my-gfw-slider .js_prev:before,\n    #my-gfw-slider .js_next:before,\n    #my-gfw-slider .js_next:before {\n      content: \"\";\n      width: 100%;\n      height: 100%;\n      position: absolute;\n      top: 0;\n      left: 0; }\n  #my-gfw-slider .js_prev {\n    left: 10px; }\n    #my-gfw-slider .js_prev:before {\n      background: url(http://www.globalforestwatch.org/assets/svg-icons/arrow-left.svg) center no-repeat; }\n  #my-gfw-slider .js_next {\n    right: 10px; }\n    #my-gfw-slider .js_next:before {\n      background: url(http://www.globalforestwatch.org/assets/svg-icons/arrow-right.svg) center no-repeat; }\n\n#my-gfw-container .my-gfw-loggedin svg {\n  fill: #97bd3d; }\n\n#my-gfw-container > a:hover + .submenu,\n#my-gfw-container .submenu:hover {\n  display: block; }\n\n#my-gfw-container .submenu {\n  display: none;\n  position: absolute;\n  width: 150px;\n  z-index: 1;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);\n  background: white;\n  -webkit-transform: translate(-25%, 0px);\n          transform: translate(-25%, 0px);\n  -webkit-transition: all 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: all 0.15s cubic-bezier(0.645, 0.045, 0.355, 1); }\n\n#my-gfw-container .submenu li {\n  border-top: 1px solid rgba(0, 0, 0, 0.07);\n  text-align: center; }\n\n#my-gfw-container .submenu li a {\n  color: #555;\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n  padding: 10px; }\n  #my-gfw-container .submenu li a:hover {\n    background: #fafafa; }\n\n#my-gfw-modal {\n  display: none;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n              -ms-grid-row-align: center;\n          align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 10000;\n  width: 100%;\n  height: 100%; }\n  #my-gfw-modal.is-active {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex; }\n  #my-gfw-modal .my-gfw-modal-backdrop {\n    background: rgba(0, 0, 0, 0.25);\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 1; }\n  #my-gfw-modal .my-gfw-modal-window {\n    background: white;\n    border: none;\n    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);\n    z-index: 2;\n    position: relative;\n    width: 475px;\n    height: 360px;\n    padding: 30px 50px 53px 50px; }\n  #my-gfw-modal .my-gfw-modal-close {\n    display: block;\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    width: 20px;\n    height: 20px; }\n    #my-gfw-modal .my-gfw-modal-close svg {\n      fill: #555; }\n    #my-gfw-modal .my-gfw-modal-close:hover svg {\n      fill: #3c3c3c; }\n  #my-gfw-modal header {\n    text-align: center;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    #my-gfw-modal header h2 {\n      font-size: 24px;\n      width: 300px; }\n    #my-gfw-modal header h3 {\n      font-weight: 200;\n      line-height: 1.5em;\n      margin-top: 15px; }\n      #my-gfw-modal header h3 a {\n        color: #97bd3d; }\n  #my-gfw-modal .my-gfw-content {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: start;\n    -webkit-justify-content: flex-start;\n        -ms-flex-pack: start;\n            justify-content: flex-start; }\n  #my-gfw-modal .my-gfw-authentication {\n    margin-top: 20px;\n    height: 100%;\n    width: 100%;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: justify;\n    -webkit-justify-content: space-between;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n    #my-gfw-modal .my-gfw-authentication li {\n      width: 250px;\n      display: block;\n      height: 50px;\n      text-align: center;\n      margin-bottom: 10px;\n      position: relative; }\n    #my-gfw-modal .my-gfw-authentication li a {\n      color: white;\n      text-transform: uppercase;\n      font-size: 14px;\n      width: 100%;\n      height: 100%;\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n      -webkit-justify-content: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n      -webkit-align-items: center;\n          -ms-flex-align: center;\n              align-items: center; }\n    #my-gfw-modal .my-gfw-authentication li a svg {\n      fill: white;\n      position: absolute;\n      top: 7px;\n      left: 15px; }\n    #my-gfw-modal .my-gfw-authentication .my-gfw-sign-in-twitter {\n      background-color: #598dca; }\n      #my-gfw-modal .my-gfw-authentication .my-gfw-sign-in-twitter:hover {\n        background-color: #6c9ad0; }\n    #my-gfw-modal .my-gfw-authentication .my-gfw-sign-in-facebook {\n      background-color: #39579b; }\n      #my-gfw-modal .my-gfw-authentication .my-gfw-sign-in-facebook:hover {\n        background-color: #4061ae; }\n    #my-gfw-modal .my-gfw-authentication .my-gfw-sign-in-google {\n      background-color: #da4735; }\n      #my-gfw-modal .my-gfw-authentication .my-gfw-sign-in-google:hover {\n        background-color: #de5b4b; }\n\n#footerGfw {\n  /* Slider */\n  /* Arrows */\n  /* Dots */ }\n  #footerGfw .slick-slider {\n    position: relative;\n    display: block;\n    box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    -ms-touch-action: pan-y;\n    touch-action: pan-y;\n    -webkit-tap-highlight-color: transparent; }\n  #footerGfw .slick-list {\n    position: relative;\n    overflow: hidden;\n    display: block;\n    margin: 0;\n    padding: 0; }\n    #footerGfw .slick-list:focus {\n      outline: none; }\n    #footerGfw .slick-list.dragging {\n      cursor: pointer;\n      cursor: hand; }\n  #footerGfw .slick-slider .slick-track {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0); }\n  #footerGfw .slick-track {\n    position: relative;\n    left: 0;\n    top: 0;\n    display: block; }\n    #footerGfw .slick-track:before, #footerGfw .slick-track:after {\n      content: \"\";\n      display: table; }\n    #footerGfw .slick-track:after {\n      clear: both; }\n    .slick-loading #footerGfw .slick-track {\n      visibility: hidden; }\n  #footerGfw .slick-slide {\n    float: left;\n    height: 100%;\n    min-height: 1px;\n    display: none; }\n    [dir=\"rtl\"] #footerGfw .slick-slide {\n      float: right; }\n    #footerGfw .slick-slide img {\n      display: block; }\n    #footerGfw .slick-slide.slick-loading img {\n      display: none; }\n    #footerGfw .slick-slide.dragging img {\n      pointer-events: none; }\n    .slick-initialized #footerGfw .slick-slide {\n      display: block; }\n    .slick-loading #footerGfw .slick-slide {\n      visibility: hidden; }\n    .slick-vertical #footerGfw .slick-slide {\n      display: block;\n      height: auto;\n      border: 1px solid transparent; }\n  #footerGfw .slick-prev,\n  #footerGfw .slick-next {\n    position: absolute;\n    display: block;\n    height: 50px;\n    width: 50px;\n    line-height: 0;\n    font-size: 0;\n    cursor: pointer;\n    background: #E0E0D9;\n    color: transparent;\n    top: 50%;\n    margin-top: -25px;\n    padding: 0;\n    border: none;\n    outline: none;\n    border-radius: 50%; }\n    #footerGfw .slick-prev:hover, #footerGfw .slick-prev:focus,\n    #footerGfw .slick-next:hover,\n    #footerGfw .slick-next:focus {\n      outline: none;\n      background: #97bd3d;\n      color: transparent; }\n      #footerGfw .slick-prev:hover:before, #footerGfw .slick-prev:focus:before,\n      #footerGfw .slick-next:hover:before,\n      #footerGfw .slick-next:focus:before {\n        opacity: 1; }\n    #footerGfw .slick-prev.slick-disabled:before,\n    #footerGfw .slick-next.slick-disabled:before {\n      opacity: 0.25; }\n  #footerGfw .slick-prev:before, #footerGfw .slick-next:before {\n    content: \"\";\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0; }\n  #footerGfw .slick-prev {\n    left: 0px; }\n    #footerGfw .slick-prev:before {\n      background: url(http://www.globalforestwatch.org/assets/svg-icons/arrow-left.svg) center no-repeat; }\n  #footerGfw .slick-next {\n    right: 0px; }\n    #footerGfw .slick-next:before {\n      background: url(http://www.globalforestwatch.org/assets/svg-icons/arrow-right.svg) center no-repeat; }\n  #footerGfw .slick-slider {\n    margin-bottom: 0px; }\n", ""]);

	// exports


/***/ },
/* 29 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ]);