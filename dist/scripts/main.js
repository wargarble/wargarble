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

	'use strict';

	__webpack_require__(1);

	__webpack_require__(5);

	var _queryParams = __webpack_require__(6);

	var _queryParams2 = _interopRequireDefault(_queryParams);

	var _loading = __webpack_require__(7);

	var _loading2 = _interopRequireDefault(_loading);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* eslint no-new: 0 */

	// Styles


	var Main = {
	  init: function init() {
	    var params = _queryParams2.default.decode(location.search.replace(/\?/, ''));
	    var storage = JSON.parse(localStorage.getItem('wargarble'));
	    if (!storage) {
	      storage = {};
	    }

	    if (params.splash || storage.hasSeenSplash) {
	      localStorage.setItem(JSON.stringify({
	        hasSeenSplash: true
	      }));

	      new _loading2.default();
	    }
	  }
	};

	// Components


	// Polyfills & Libs


	if (document.readyState === 'complete' || document.readyState === 'interactive') {
	  Main.init();
	} else {
	  document.addEventListener('DOMContentLoaded', Main.init);
	}

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/less-loader/index.js!./main.less", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/less-loader/index.js!./main.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".padding {\n  padding: 2px 3px 3px;\n}\n.active {\n  text-shadow: 0px 1px 1px rgba(30, 30, 30, 0.5);\n  background-color: rgba(223, 226, 245, 0.99);\n  color: #1e1e1e;\n  display: inline-block;\n  padding: 2px 3px 3px;\n}\n.arrow {\n  position: relative;\n}\n.arrow::before {\n  content: '';\n  display: block;\n  position: absolute;\n  border-top: 8px solid transparent;\n  border-bottom: 8px solid transparent;\n  border-left: 8px solid rgba(223, 226, 245, 0.99);\n  left: -20px;\n  top: 2px;\n}\nbody {\n  background-color: #1e1e1e;\n  color: rgba(223, 226, 245, 0.99);\n  text-shadow: 0 0 3px rgba(223, 226, 245, 0.5);\n  font-weight: 300;\n  font-size: 14px;\n  font-family: 'Press Start 2P', monospace;\n  line-height: 1.5em;\n  margin: 0;\n  padding: 50px;\n}\na {\n  display: inline-block;\n  color: rgba(223, 226, 245, 0.99);\n  opacity: 0.6;\n  text-decoration: none;\n}\na:hover {\n  opacity: 1;\n}\nh1 {\n  font-weight: 400;\n}\n.loading {\n  background-color: #1e1e1e;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  transition: opacity 500ms ease;\n}\n.loading.is-hidden {\n  opacity: 0;\n  pointer-events: none;\n}\n.loading-asset {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  visibility: hidden;\n}\n.loading-asset.is-visible {\n  visibility: visible;\n}\n.loading .logo {\n  max-width: 75px;\n  margin: 0 auto;\n}\n.header h1 {\n  font-size: 17px;\n  text-shadow: 0px 1px 1px rgba(30, 30, 30, 0.5);\n  background-color: rgba(223, 226, 245, 0.99);\n  color: #1e1e1e;\n  display: inline-block;\n  padding: 2px 3px 3px;\n}\n.header a {\n  opacity: 1;\n}\n.nav {\n  padding-left: 20px;\n}\n.nav a {\n  opacity: 1;\n  padding: 2px 3px 3px;\n}\n.nav a:hover {\n  text-shadow: 0px 1px 1px rgba(30, 30, 30, 0.5);\n  background-color: rgba(223, 226, 245, 0.99);\n  color: #1e1e1e;\n  display: inline-block;\n  padding: 2px 3px 3px;\n  position: relative;\n}\n.nav a:hover::before {\n  content: '';\n  display: block;\n  position: absolute;\n  border-top: 8px solid transparent;\n  border-bottom: 8px solid transparent;\n  border-left: 8px solid rgba(223, 226, 245, 0.99);\n  left: -20px;\n  top: 2px;\n}\n.main {\n  max-width: 40em;\n  margin-top: 150px;\n}\n.main p {\n  margin: 30px 0;\n}\n.album h1 {\n  font-style: italic;\n}\n", ""]);

	// exports


/***/ },
/* 3 */
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
/* 4 */
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


/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	// =============================================
	// Add array prototype methods to NodeLists.
	// =============================================
	function attachArrayMethodsToNodeList(methodName) {
	  if (methodName !== 'length') {
	    NodeList.prototype[methodName] = Array.prototype[methodName];
	  }
	}

	Object.getOwnPropertyNames(Array.prototype).forEach(attachArrayMethodsToNodeList);

/***/ },
/* 6 */
/***/ function(module, exports) {

	function encode (o, sep) {
	    var list = [];
	    var key;
	    for (key in o) {
	        if (o[key] != null && typeof o[key] != 'object' &&
	                typeof o[key] != 'function') {
	            list.push(encodeURIComponent(key) + '=' + encodeURIComponent(o[key]));
	        }
	    }
	    return list.join(sep || '&');
	}

	var REXP_SPLIT = /&amp;|&|;/gmi;
	function decode (str, sep) {
	    sep = sep||REXP_SPLIT;
	    var result = {};
	    var expr = str.split(sep);
	    var key, val, index;
	    for (var i = 0, len = expr.length; i < len; i++) {
	        index = expr[i].indexOf('=');
	        key = expr[i].substring(0, index);
	        val = expr[i].substring(index+1);
	        if (val) {
	            result[decodeURIComponent(key)] = decodeURIComponent(val);
	        }
	    }
	    return result;
	};

	module.exports = {
	    encode: encode,
	    decode: decode
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var duration = 300;

	var template = '\n  <div class="loading">\n    <img class="logo loading-asset" src="https://pbs.twimg.com/profile_images/733481782327300096/XBctEuuu.jpg">\n    <div class="loading-asset">War</div>\n    <div class="loading-asset">Garble</div>\n    <div class="loading-asset">will</div>\n    <div class="loading-asset">never</div>\n    <div class="loading-asset">die.</div>\n    <img class="logo loading-asset" src="https://pbs.twimg.com/profile_images/733481782327300096/XBctEuuu.jpg">\n  </div>\n';

	var Loading = function () {
	  function Loading() {
	    var _this = this;

	    _classCallCheck(this, Loading);

	    document.body.insertAdjacentHTML('beforeend', template);

	    setTimeout(function () {
	      _this.el = document.querySelector('.loading');
	      _this.assets = document.querySelectorAll('.loading-asset');
	      _this.assets.forEach(_this.increment.bind(_this));
	    }, 0);
	  }

	  _createClass(Loading, [{
	    key: 'hideAsset',
	    value: function hideAsset(i) {
	      this.assets[i].classList.remove('is-visible');
	    }
	  }, {
	    key: 'showAsset',
	    value: function showAsset(i) {
	      this.assets[i].classList.add('is-visible');
	    }
	  }, {
	    key: 'endLoading',
	    value: function endLoading() {
	      this.el.classList.add('is-hidden');
	    }
	  }, {
	    key: 'increment',
	    value: function increment(asset, index) {
	      var _this2 = this;

	      if (index === 0) {
	        this.showAsset(index);
	        return;
	      }

	      setTimeout(function () {
	        _this2.hideAsset(index - 1);
	        _this2.showAsset(index);
	      }, duration * index);

	      if (index === this.assets.length - 1) {
	        setTimeout(this.endLoading.bind(this), duration * index + duration * 2);
	      }
	    }
	  }]);

	  return Loading;
	}();

	exports.default = Loading;

/***/ }
/******/ ]);