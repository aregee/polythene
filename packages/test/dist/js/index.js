/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 36);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = m;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_theme__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_j2c_plugin_prefix_browser__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_j2c_plugin_prefix_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_j2c_plugin_prefix_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_j2c__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_j2c___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_j2c__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return mixin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mixinFlex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return styler; });




var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// Mixins for j2c

// Centers an item absolutely within relative parent
// mixin.fit()
var fit = function fit() {
  var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  var offsetPx = offset + "px";
  return {
    position: "absolute",
    top: offsetPx,
    right: offsetPx,
    bottom: offsetPx,
    left: offsetPx
  };
};

// Optional font smoothing
// mixin.fontSmoothing()
var fontSmoothing = function fontSmoothing() {
  var smoothing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  if (smoothing) {
    return {
      "-webkit-font-smoothing": "antialiased",
      "-moz-osx-font-smoothing": "grayscale"
    };
  } else {
    return {
      "-webkit-font-smoothing": "subpixel-antialiased",
      "-moz-osx-font-smoothing": "auto"
    };
  }
};

// Breaks off a line with ...
// unless lines is "none"
// mixin.ellipsis(1, 16) // max 1 line, 16px high
// mixin.ellipsis(2, 1.3, "em") // max 2 lines, 2.6em high
var ellipsis = function ellipsis(lines, lineHeight) {
  var unit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "px";

  if (lines === "none") {
    return {
      textOverflow: "initial",
      overflow: "initial",
      display: "block",
      height: "auto"
    };
  }
  return _extends({}, {
    overflow: "hidden",
    "text-overflow": "ellipsis",
    "text-rendering": "auto" // Samsung Android
  }, lines !== undefined ? {
    "-webkit-line-clamp": lines,
    "-webkit-box-orient": "vertical",
    display: "-webkit-box"
  } : null, lineHeight !== undefined ? {
    "max-height": lines * lineHeight + unit
  } : null);
};

// Clears float
// mixin.clearfix()
var clearfix = function clearfix() {
  return {
    "&:after": {
      content: "\"\"",
      display: "table",
      clear: "both"
    }
  };
};

// Creates sticky headers in a scrollable list
// Does not work in Chrome: http://caniuse.com/#feat=css-sticky
// mixin.sticky()
var sticky = function sticky() {
  var zIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  return {
    position: "sticky",
    top: 0,
    zIndex: zIndex
  };
};

// Creats a transition with presets
// mixin.defaultTransition("opacity", vars.animation_duration)
var defaultTransition = function defaultTransition() {
  var properties = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "all";
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : __WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].animation_duration;
  var curve = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : __WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].animation_curve_default;
  return {
    transitionDelay: 0,
    transitionDuration: duration,
    transitionTimingFunction: curve,
    transitionProperty: properties
  };
};

var mixin = {
  clearfix: clearfix,
  defaultTransition: defaultTransition,
  ellipsis: ellipsis,
  fit: fit,
  fontSmoothing: fontSmoothing,
  sticky: sticky
};

var layout = [{
  "display": "-webkit-box"
}, {
  "display": "-moz-box"
}, {
  "display": "-ms-flexbox",
  "-ms-flex-preferred-size": "initial" // IE10
}, {
  "display": "-webkit-flex"
}, {
  "display": "flex"
}];

var layoutInline = [layout, {
  "display": "-ms-inline-flexbox"
}, {
  "display": "-webkit-inline-flex"
}, {
  "display": "inline-flex"
}];

var layoutHorizontal = [layout, {
  "-ms-flex-direction": "row",
  "-webkit-flex-direction": "row",
  "flex-direction": "row"
}];

var layoutHorizontalReverse = [layout, {
  "-ms-flex-direction": "row-reverse",
  "-webkit-flex-direction": "row-reverse",
  "flex-direction": "row-reverse"
}];

var layoutVertical = [layout, {
  "-ms-flex-direction": "column",
  "-webkit-flex-direction": "column",
  "flex-direction": "column"
}];

var layoutVerticalReverse = [layout, {
  "-ms-flex-direction": "column-reverse",
  "-webkit-flex-direction": "column-reverse",
  "flex-direction": "column-reverse"
}];

var layoutWrap = [layout, {
  "-ms-flex-wrap": "wrap",
  "-webkit-flex-wrap": "wrap",
  "flex-wrap": "wrap"
}];

var layoutWrapReverse = [layout, {
  "-ms-flex-wrap": "wrap-reverse",
  "-webkit-flex-wrap": "wrap-reverse",
  "flex-wrap": "wrap-reverse"
}];

var layoutStart = [layout, {
  "-ms-flex-align": "start",
  "-webkit-align-items": "flex-start",
  "align-items": "flex-start"
}];

var layoutCenter = [layout, {
  "-ms-flex-align": "center",
  "-webkit-align-items": "center",
  "align-items": "center"
}];

var layoutEnd = [layout, {
  "-ms-flex-align": "end",
  "-webkit-align-items": "flex-end",
  "align-items": "flex-end"
}];

var layoutJustified = [layout, {
  "-ms-flex-line-pack": "stretch", // IE10
  "-ms-flex-pack": "justify",
  "-webkit-justify-content": "space-between",
  "justify-content": "space-between"
}];

var layoutStartJustified = [layout, {
  "-ms-flex-align": "start", // IE10
  "-ms-flex-pack": "start",
  "-webkit-justify-content": "flex-start",
  "justify-content": "flex-start"
}];

var layoutCenterJustified = [layout, {
  "-ms-flex-pack": "center",
  "-webkit-justify-content": "center",
  "justify-content": "center"
}];

var layoutEndJustified = [layout, {
  "-ms-flex-pack": "end",
  "-webkit-justify-content": "flex-end",
  "justify-content": "flex-end"
}];

var layoutCenterCenter = [layoutCenterJustified, layoutCenter];

var layoutAroundJustified = [layout, {
  "-ms-flex-pack": "distribute",
  "-webkit-justify-content": "space-around",
  "justify-content": "space-around"
}];

var flex = function flex() {
  var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  return [{
    "-webkit-box-flex": num
  }, {
    "-moz-box-flex": num
  }, {
    "-webkit-flex": num
  }, {
    "-ms-flex": num
  }, {
    "flex": num
  }, num === 1 ? {
    "-webkit-flex-basis": "0.000000001px"
  } : {}, num === 1 ? {
    "flex-basis": "0.000000001px"
  } : {}];
};

var flexAuto = {
  "-ms-flex": "1 1 auto",
  "-webkit-flex-basis": "auto",
  "flex-basis": "auto"
};

var flexAutoVertical = {
  "-ms-flex": "1 1 auto",
  "-webkit-flex-basis": "auto",
  "flex-basis": "auto"
};

var flexIndex = function flexIndex(index) {
  return {
    "-ms-flex": index,
    "-webkit-flex": index,
    "flex": index
  };
};

var flexGrow = function flexGrow(value) {
  return {
    "-webkit-flex-grow": value,
    "flex-grow": value
  };
};

var selfStart = {
  "-ms-flex-item-align": "start", // IE10
  "-ms-align-self": "flex-start",
  "-webkit-align-self": "flex-start",
  "align-self": "flex-start"
};

var selfCenter = {
  "-ms-flex-item-align": "center", // IE10
  "-ms-align-self": "center",
  "-webkit-align-self": "center",
  "align-self": "center"
};

var selfEnd = {
  "-ms-flex-item-align": "end", // IE10
  "-ms-align-self": "flex-end",
  "-webkit-align-self": "flex-end",
  "align-self": "flex-end"
};

var selfStretch = {
  "-ms-flex-item-align": "stretch", // IE10
  "-ms-align-self": "stretch",
  "-webkit-align-self": "stretch",
  "align-self": "stretch"
};

var mixinFlex = {
  flex: flex,
  flexAuto: flexAuto,
  flexAutoVertical: flexAutoVertical,
  flexIndex: flexIndex,
  flexGrow: flexGrow,
  layout: layout,
  layoutAroundJustified: layoutAroundJustified,
  layoutCenter: layoutCenter,
  layoutCenterCenter: layoutCenterCenter,
  layoutCenterJustified: layoutCenterJustified,
  layoutEnd: layoutEnd,
  layoutEndJustified: layoutEndJustified,
  layoutHorizontal: layoutHorizontal,
  layoutHorizontalReverse: layoutHorizontalReverse,
  layoutInline: layoutInline,
  layoutJustified: layoutJustified,
  layoutStart: layoutStart,
  layoutStartJustified: layoutStartJustified,
  layoutVertical: layoutVertical,
  layoutVerticalReverse: layoutVerticalReverse,
  layoutWrap: layoutWrap,
  layoutWrapReverse: layoutWrapReverse,
  selfCenter: selfCenter,
  selfEnd: selfEnd,
  selfStart: selfStart,
  selfStretch: selfStretch
};

var j2c = new __WEBPACK_IMPORTED_MODULE_2_j2c___default.a(__WEBPACK_IMPORTED_MODULE_1_j2c_plugin_prefix_browser__["prefixPlugin"]);
var ID_REGEX = /[^a-z0-9\-]/g;

/*
 * @param id: identifier, used as HTMLElement id for the attached <style></style> element
 * @param styles: list of lists style Objects
 */
var add = function add(id) {
  for (var _len = arguments.length, styles = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    styles[_key - 1] = arguments[_key];
  }

  addToDocument.apply(undefined, [{
    id: id
  }].concat(styles));
};

/*
 * Removes a style from head.
 */
var remove = function remove(id) {
  if (id) {
    var old = document.getElementById(id);
    if (old && old.parentNode) {
      old.parentNode.removeChild(old);
    }
  }
};

/*
 * opts: options object
 * id: identifier, used as HTMLElement id for the attached <style></style> element
 * document: document reference; default window.document
 * styles: list of lists style objects
 */
var addToDocument = function addToDocument(opts) {
  for (var _len2 = arguments.length, styles = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    styles[_key2 - 1] = arguments[_key2];
  }

  var id = opts.id.replace(ID_REGEX, "_");
  var documentRef = opts.document || window.document;
  remove(id);
  var styleEl = documentRef.createElement("style");
  if (id) {
    styleEl.setAttribute("id", id);
  }
  styles.forEach(function (styleList) {
    // each style returns a list
    if (Object.keys(styleList).length) {
      styleList.forEach(function (style) {
        var scoped = {
          "@global": style
        };
        var sheet = j2c.sheet(scoped);
        styleEl.appendChild(documentRef.createTextNode(sheet));
      });
    }
  });
  documentRef.head.appendChild(styleEl);
};

/*
 * Adds styles to head for a component.
 * @param selector: Array of Strings: selectors
 * @param vars: Object configuration variables
 * @param styleFns: Array of Functions: (selector, componentVars) => [j2c style objects]
*/
var generateStyles = function generateStyles(selectors, vars$$1, styleFns) {
  var selector = selectors.join("");
  var id = selector.trim().replace(/^[^a-z]?(.*)/, "$1");
  add(id, styleFns.map(function (fn) {
    return fn(selector, vars$$1);
  }));
};

var styler = {
  add: add,
  addToDocument: addToDocument,
  remove: remove,
  generateStyles: generateStyles
};




/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return vars; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



var vars = _extends({}, __WEBPACK_IMPORTED_MODULE_0_polythene_core__["e" /* defaultVariables */], { color_primary: "255, 152, 0" // new base color: orange 500
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return variables; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return isTouch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return touchStartEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return touchEndEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return moveEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return endEvent; });
/* unused harmony export throttle */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return subscribe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return unsubscribe; });
/* unused harmony export emit */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return animationEndEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return multiple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return show; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return filterSupportedAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return prop; });


// Theme variables
// How to change these variables for your app - see the README.

var hex = function hex(_hex) {
  var bigint = parseInt(_hex.substring(1), 16);
  var r = bigint >> 16 & 255;
  var g = bigint >> 8 & 255;
  var b = bigint & 255;
  return r + "," + g + "," + b;
};

var rgba = function rgba(colorStr) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return "rgba(" + colorStr + "," + opacity + ")";
};

//const isTablet = window.innerWidth >= 600;
var isDesktop = window.innerWidth >= 1024;

var grid_unit = 4;
var grid_unit_component = 8;

var animation_curve_slow_in_fast_out = "cubic-bezier(.4, 0, .2, 1)";
var animation_curve_slow_in_linear_out = "cubic-bezier(0, 0, .2, 1)";
var animation_curve_linear_in_fast_out = "cubic-bezier(.4, 0, 1, 1)";

var variables = {
  // util functions
  rgba: rgba,
  hex: hex,

  grid_unit: grid_unit,
  grid_unit_component: grid_unit_component,
  grid_unit_menu: 56,
  grid_unit_icon_button: 6 * grid_unit_component, // 48

  // common sizes
  unit_block_border_radius: 2,
  unit_item_border_radius: 2,
  unit_indent: 72,
  unit_side_padding: isDesktop ? 24 : 16,

  // buttons
  unit_touch_height: 48,
  unit_icon_size_small: 2 * grid_unit_component, // 16
  unit_icon_size: 3 * grid_unit_component, // 24
  unit_icon_size_medium: 4 * grid_unit_component, // 32
  unit_icon_size_large: 5 * grid_unit_component, // 40

  // screen dimensions
  unit_screen_size_extra_large: 1280,
  unit_screen_size_large: 960,
  unit_screen_size_medium: 480,
  unit_screen_size_small: 320,

  // transitions
  animation_duration: ".18s",
  animation_curve_slow_in_fast_out: animation_curve_slow_in_fast_out,
  animation_curve_slow_in_linear_out: animation_curve_slow_in_linear_out,
  animation_curve_linear_in_fast_out: animation_curve_linear_in_fast_out,
  animation_curve_default: "ease-out",

  // font
  font_weight_light: 300,
  font_weight_normal: 400,
  font_weight_medium: 500,
  font_weight_bold: 700,
  font_size_title: 20,
  line_height: 1.3,

  // base colors
  color_primary: "33, 150, 243", // blue 500
  color_primary_active: "30, 136, 229", // blue 600
  color_primary_dark: "25, 118, 210", // blue 700
  color_primary_faded: "100, 181, 249", // blue 300
  color_primary_foreground: "255, 255, 255",

  color_light_background: "255, 255, 255",
  color_light_foreground: "0, 0, 0",
  color_dark_background: "34, 34, 34",
  color_dark_foreground: "255, 255, 255",

  // blends
  blend_light_text_primary: .87,
  blend_light_text_regular: .73,
  blend_light_text_secondary: .54,
  blend_light_text_tertiary: .40,
  blend_light_text_disabled: .26,
  blend_light_border_light: .11,
  blend_light_background_active: .14,
  blend_light_background_hover: .06,
  blend_light_background_hover_medium: .12, // for the lighter tinted icon buttons
  blend_light_background_disabled: .09,
  blend_light_overlay_background: .3,

  blend_dark_text_primary: 1,
  blend_dark_text_regular: .87,
  blend_dark_text_secondary: .70,
  blend_dark_text_tertiary: .40,
  blend_dark_text_disabled: .26,
  blend_dark_border_light: .10,
  blend_dark_background_active: .14,
  blend_dark_background_hover: .08,
  blend_dark_background_hoverMedium: .12, // for the lighter tinted icon buttons
  blend_dark_background_disabled: .12,
  blend_dark_overlay_background: .3,

  // breakpoints
  breakpoint_small_handset_portrait: 0,
  breakpoint_medium_handset_portrait: 360,
  breakpoint_large_handset_portrait: 400,
  breakpoint_small_tablet_portrait: 600,
  breakpoint_large_tablet_portrait: 720,
  // landscape
  breakpoint_small_handset_landscape: 480,
  breakpoint_medium_handset_landscape: 600,
  breakpoint_large_handset_landscape: 720,

  // environment
  env_tablet: window.innerWidth >= 600,
  env_desktop: window.innerWidth >= 1024,

  // z-index
  z_menu: 1,
  z_header_container: 2000,
  z_fixed_header_container: 3000,
  z_notification: 4000,
  z_dialog: 5000
};

var isTouch = "ontouchstart" in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

var touchStartEvent = isTouch ? "click" : "mousedown";

var touchEndEvent = isTouch ? "click" : "mouseup";

var moveEvent = window.PointerEvent ? "pointermove" : "ontouchmove" in window || window.DocumentTouch && document instanceof window.DocumentTouch ? "touchmove" : "mousemove";

var endEvent = window.PointerEvent ? "pointerup" : "ontouchend" in window || window.DocumentTouch && document instanceof window.DocumentTouch ? "touchend" : "mouseup";

document.querySelector("html").classList.add(isTouch ? "pe-touch" : "pe-no-touch");

var listeners = {};

// https://gist.github.com/Eartz/fe651f2fadcc11444549
var throttle = function throttle(func) {
  var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.05;
  var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : window;

  var wait = false;
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var later = function later() {
      func.apply(context, args);
    };
    if (!wait) {
      later();
      wait = true;
      setTimeout(function () {
        wait = false;
      }, s);
    }
  };
};

var subscribe = function subscribe(eventName, listener, delay) {
  listeners[eventName] = listeners[eventName] || [];
  listeners[eventName].push(delay ? throttle(listener, delay) : listener);
};

var unsubscribe = function unsubscribe(eventName, listener) {
  if (!listeners[eventName]) {
    return;
  }
  var index = listeners[eventName].indexOf(listener);
  if (index > -1) {
    listeners[eventName].splice(index, 1);
  }
};

var emit = function emit(eventName, event) {
  if (!listeners[eventName]) {
    return;
  }
  listeners[eventName].forEach(function (listener) {
    listener(event);
  });
};

window.addEventListener("resize", function (e) {
  return emit("resize", e);
});
window.addEventListener("scroll", function (e) {
  return emit("scroll", e);
});
window.addEventListener("keydown", function (e) {
  return emit("keydown", e);
});
window.addEventListener(touchEndEvent, function (e) {
  return emit(touchEndEvent, e);
});

var evts = {
  "animation": "animationend",
  "OAnimation": "oAnimationEnd",
  "MozAnimation": "animationend",
  "WebkitAnimation": "webkitAnimationEnd"
};

var element = function element() {
  return document.createElement("fakeelement");
};

var animationEndEvent = function animationEndEvent() {
  var el = element();
  for (var a in evts) {
    if (el.style[a] !== undefined) {
      return evts[a];
    }
  }
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/*
Helper module to manage multiple items of the same component type.
*/
/*
mOpts:
- instance
- defaultId
- element
- placeholder
- bodyShowClass
*/
var multiple = function multiple(mOpts) {

  var items = [];

  var itemIndex = function itemIndex(id) {
    var item = findItem(id);
    return items.indexOf(item);
  };

  var removeItem = function removeItem(id) {
    var index = itemIndex(id);
    if (index !== -1) {
      items.splice(index, 1);
    }
  };

  var replaceItem = function replaceItem(id, newItem) {
    var index = itemIndex(id);
    if (index !== -1) {
      items[index] = newItem;
    }
  };

  var findItem = function findItem(id) {
    // traditional for loop for IE10
    for (var i = 0; i < items.length; i++) {
      if (items[i].instanceId === id) {
        return items[i];
      }
    }
  };

  var isCancelled = function isCancelled(id) {
    var item = findItem(id);
    return item !== undefined ? item.cancelled : true;
  };

  var next = function next() {
    if (items.length) {
      items[0].show = true;
      __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.redraw();
    }
  };

  var remove = function remove() {
    var instanceId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : mOpts.defaultId;

    if (mOpts.queue) {
      items.shift();
      // add time to remove the previous instance before drawing the next one
      setTimeout(next, 0);
    } else {
      removeItem(instanceId);
    }
  };

  var removeAll = function removeAll() {
    // traditional for loop for IE10
    for (var i = 0; i < items.length; i++) {
      items[i].cancelled = true;
    }
    items.length = 0;
    setTimeout(__WEBPACK_IMPORTED_MODULE_0_mithril___default.a.redraw);
  };

  var setPauseState = function setPauseState(pause, instanceId) {
    var item = findItem(instanceId);
    if (item) {
      item.pause = pause;
      item.unpause = !pause;
    }
  };

  var makeItem = function makeItem(itemOpts, instanceId, spawn) {
    var resolveShow = void 0;
    var didShow = function didShow() {
      if (isCancelled(instanceId)) {
        return;
      }
      var opts = typeof itemOpts === "function" ? itemOpts() : itemOpts;
      if (opts.didShow) {
        opts.didShow(instanceId);
      }
      return resolveShow(instanceId);
    };
    var showPromise = new Promise(function (resolve) {
      return resolveShow = resolve;
    });

    var resolveHide = void 0;
    var didHide = function didHide() {
      if (isCancelled(instanceId)) {
        return;
      }
      var opts = typeof itemOpts === "function" ? itemOpts() : itemOpts;
      if (opts.didHide) {
        opts.didHide(instanceId);
      }
      if (mOpts.queue) {
        remove(instanceId);
      }
      return resolveHide(instanceId);
    };

    var hidePromise = new Promise(function (resolve) {
      return resolveHide = resolve;
    });

    return _extends({}, mOpts, {
      instanceId: instanceId,
      spawn: spawn,
      opts: itemOpts,
      show: mOpts.queue ? false : true,
      cancelled: false,
      showPromise: showPromise,
      hidePromise: hidePromise,
      didShow: didShow,
      didHide: didHide
    });
  };

  var show = function show() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var spawnOpts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var instanceId = spawnOpts.id || mOpts.defaultId;
    var spawn = spawnOpts.spawn || mOpts.defaultId;
    var item = void 0;
    if (mOpts.queue) {
      item = makeItem(opts, instanceId, spawn);
      items.push(item);
      if (items.length === 1) {
        next();
      }
    } else {
      var storedItem = findItem(instanceId);
      item = makeItem(opts, instanceId, spawn);
      if (!storedItem) {
        items.push(item);
      } else {
        replaceItem(instanceId, item);
      }
    }
    return item.showPromise;
  };

  var hide = function hide() {
    var spawnOpts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var instanceId = spawnOpts.id || mOpts.defaultId;
    var item = mOpts.queue && items.length ? items[0] : findItem(instanceId);
    if (item) {
      item.hide = true;
      return item.hidePromise;
    }
    return Promise.resolve(instanceId);
  };

  var clear = function clear() {
    return removeAll();
  };

  var view = function view(_ref) {
    var attrs = _ref.attrs;

    var spawn = attrs.spawn || mOpts.defaultId;
    var candidates = items.filter(function (item) {
      return item.show && item.spawn === spawn;
    });
    document.body.classList[candidates.length ? "add" : "remove"](mOpts.bodyShowClass);
    return !candidates.length ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()(mOpts.placeholder) // placeholder because we cannot return null
    : __WEBPACK_IMPORTED_MODULE_0_mithril___default()(mOpts.element, {
      class: attrs.position === "container" ? "pe-multiple--container" : "pe-multiple--screen"
    }, candidates.map(function (itemData) {
      return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(mOpts.instance, _extends({}, itemData, {
        transitions: mOpts.transitions,
        key: itemData.key || itemData.instanceId
      }));
    }));
  };

  return {
    count: function count() {
      return items.length;
    },
    clear: clear,
    show: show,
    hide: hide,
    remove: remove,
    pause: function pause() {
      var instanceId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : mOpts.defaultId;
      return setPauseState(true, instanceId);
    },
    unpause: function unpause() {
      var instanceId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : mOpts.defaultId;
      return setPauseState(false, instanceId);
    },
    view: view,
    theme: mOpts.instance.theme
  };
};

/*
Generic show/hide transition module
*/

// defaults
var SHOW_DURATION = .220; // default dialog timing
var HIDE_DURATION = .200; // default dialog timing
var SHOW_DELAY = 0;
var HIDE_DELAY = 0;
var TRANSITION = "both";

// See: transition
var show = function show(opts) {
  return transition(opts, "show");
};

var hide = function hide(opts) {
  return transition(opts, "hide");
};

var getTiming = function getTiming(opts, state, showAttr, hideAttr, defaultShowTiming, defaultHideTiming) {
  var transition = opts.transition || TRANSITION;
  if (transition === "none") {
    return 0;
  } else if (transition === "show" && state === "hide") {
    return 0;
  } else if (transition === "hide" && state === "show") {
    return 0;
  } else {
    // both
    return state === "show" ? opts[showAttr] !== undefined ? opts[showAttr] : defaultShowTiming : opts[hideAttr] !== undefined ? opts[hideAttr] : defaultHideTiming;
  }
};

/*
opts:
- transition
- showDuration
- hideDuration

- state (show, hide)
*/
var getDuration = function getDuration(opts, state) {
  return getTiming(opts, state, "showDuration", "hideDuration", SHOW_DURATION, HIDE_DURATION);
};

/*
opts:
- transition (show, hide, both)
- showDelay
- hideDelay

- state (show, hide)
*/
var getDelay = function getDelay(opts, state) {
  return getTiming(opts, state, "showDelay", "hideDelay", SHOW_DELAY, HIDE_DELAY);
};

/*
opts:
- el
- duration
- delay
- showClass
- beforeShow
- show
- hide
- afterHide
- showDelay
- hideDelay

- state (show, hide)
*/
var transition = function transition(opts, state) {
  var el = opts.el;
  if (!el) {
    return Promise.resolve();
  } else {
    return new Promise(function (resolve) {
      var transitionDuration = getDuration(opts, state) * 1000;
      var delay = getDelay(opts, state) * 1000;
      var style = el.style;

      var resetTransition = function resetTransition() {
        style.transitionDuration = "0ms";
        style.transitionDelay = "0ms";
      };

      var beforeTransition = opts.beforeShow && state === "show" ? function () {
        resetTransition();
        opts.beforeShow();
      } : null;

      var afterTransition = opts.afterHide && state === "hide" ? function () {
        resetTransition();
        opts.afterHide();
      } : null;

      var applyTransition = function applyTransition() {
        style.transitionDuration = transitionDuration + "ms";
        style.transitionDelay = delay + "ms";
        if (opts.showClass) {
          el.classList[state === "show" ? "add" : "remove"](opts.showClass);
        }
        if (opts.show && typeof opts.show === "function" && state === "show") {
          opts.show();
        }
        if (opts.hide && typeof opts.hide === "function" && state === "hide") {
          opts.hide();
        }
      };

      var doTransition = function doTransition() {
        applyTransition();
        setTimeout(function () {
          if (afterTransition) {
            afterTransition();
          }
          resolve();
        }, transitionDuration + delay);
      };

      var maybeDelayTransition = function maybeDelayTransition() {
        if (transitionDuration === 0) {
          doTransition();
        } else {
          setTimeout(doTransition, 0);
        }
      };

      if (beforeTransition) {
        beforeTransition();
        setTimeout(maybeDelayTransition, 0);
      } else {
        maybeDelayTransition();
      }
    });
  }
};

var r = function r(acc, p) {
  return acc[p] = 1, acc;
};

/* 
Separately handled props:
- class
- element
*/

var defaultAttrs = [
// Mithril
"key", "oninit", "oncreate", "onupdate", "onbeforeremove", "onremove", "onbeforeupdate", "style", "href",
// Polythene
// see also "Separately handled props" above
"id", "tabindex"];

var filterSupportedAttributes = function filterSupportedAttributes(attrs) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$add = _ref.add,
      addAttrs = _ref$add === undefined ? [] : _ref$add,
      _ref$remove = _ref.remove,
      removeAttrs = _ref$remove === undefined ? [] : _ref$remove;

  var removeLookup = removeAttrs.reduce(r, {});
  var supported = defaultAttrs.concat(addAttrs).filter(function (item) {
    return !removeLookup[item];
  }).reduce(r, {});
  return Object.keys(attrs).reduce(function (acc, key) {
    return supported[key] ? acc[key] = attrs[key] : null, acc;
  }, {});
};

/*
The most simple prop function to emulate m.prop from Mithril 0.2.
*/
var prop = function prop(x) {
  var p = x;
  return function (args) {
    if (args === undefined) {
      return p;
    } else {
      p = args;
    }
  };
};




/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_svg__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_polythene_theme__ = __webpack_require__(2);
/* unused harmony export classes */
/* unused harmony export vars */






var vars$1 = {
  size_small: __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].unit_icon_size_small,
  size_regular: __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].unit_icon_size,
  size_medium: __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].unit_icon_size_medium,
  size_large: __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].unit_icon_size_large,
  color_light: "currentcolor",
  color_dark: "currentcolor"
};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var iconSizesPx = function iconSizesPx() {
  var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].unit_icon_size;
  return {
    width: size + "px",
    height: size + "px"
  };
};

var layout = (function (selector, componentVars) {
  return [_defineProperty({}, selector, {
    display: "inline-block",
    verticalAlign: "middle",
    backgroundRepeat: "no-repeat",
    position: "relative",
    fontSize: 0,
    lineHeight: 0,

    ".pe-icon--avatar img": {
      border: "none",
      borderRadius: "50%",
      width: "100%",
      height: "100%"
    },

    " img": {
      height: "100%"
    },

    " svg": {
      width: "100%",
      height: "100%"
    },

    ".pe-icon--small": iconSizesPx(componentVars.size_small),
    ".pe-icon--regular": iconSizesPx(componentVars.size_regular),
    ".pe-icon--medium": iconSizesPx(componentVars.size_medium),
    ".pe-icon--large": iconSizesPx(componentVars.size_large)
  })];
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = function style(scopes, selector, componentVars, tint) {
  return [_defineProperty$1({}, scopes.map(function (s) {
    return s + selector;
  }).join(","), {
    color: componentVars["color_" + tint] || "currentcolor"
  })];
};

var color = (function (selector, componentVars) {
  return [style([".pe-dark-theme", ".pe-dark-theme "], selector, componentVars, "dark"), // has/inside dark theme
  style(["", ".pe-light-theme", ".pe-light-theme "], selector, componentVars, "light")];
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [layout, color];
var selector = ".pe-icon";

var customTheme = function customTheme(customSelector, customVars) {
  return __WEBPACK_IMPORTED_MODULE_3_polythene_css__["b" /* styler */].generateStyles([customSelector, selector], _extends$1({}, vars$1, customVars), fns);
};

__WEBPACK_IMPORTED_MODULE_3_polythene_css__["b" /* styler */].generateStyles([selector], vars$1, fns);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var classes = {
  icon: "pe-icon",
  avatar: "pe-icon--avatar",
  small: "pe-icon--small",
  regular: "pe-icon--regular",
  medium: "pe-icon--medium",
  large: "pe-icon--large"
};

var typeClasses = {
  small: classes.small,
  regular: classes.regular,
  medium: classes.medium,
  large: classes.large
};

var classForType = function classForType() {
  var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "regular";
  return typeClasses[mode];
};

var view = function view(vnode) {
  var attrs = vnode.attrs;
  var element = attrs.element || "div";
  var props = _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_polythene_core__["c" /* filterSupportedAttributes */])(attrs), {
    class: [classes.icon, classForType(attrs.type), attrs.avatar ? classes.avatar : null, attrs.tone === "dark" ? "pe-dark-theme" : null, attrs.tone === "light" ? "pe-light-theme" : null, attrs.class].join(" ")
  }, attrs.events ? attrs.events : null);
  var content = attrs.content ? attrs.content : attrs.svg ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_svg__["a" /* default */], _extends({}, attrs.svg)) : attrs.msvg ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_svg__["a" /* default */], attrs.msvg) : attrs.src ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()("img", { src: attrs.src }) : attrs.children || vnode.children;
  return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(element, props, [attrs.before, content, attrs.after]);
};

var icon = {
  theme: customTheme, // accepts (selector, vars)
  view: view
};

/* harmony default export */ __webpack_exports__["a"] = (icon);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_icon__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_ripple__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_polythene_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_polythene_theme__ = __webpack_require__(2);
/* unused harmony export classes */
/* unused harmony export vars */







var rgba = __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].rgba;

// SPECS
//
// heights:
// single line: 48
// single line, dense: 40
// single line, with icon: 48
// single line, with icon, dense: 40
// single line, with avatar: 56
// single line, with avatar, dense: 48
// two-line: 72
// two-line, dense: 60
// three-line: 88
// three-line, dense: 76

var single_height = 48;
var padding = 8;
var single_with_icon_height = 56;

var vars$1 = {
  single_height: single_height,
  single_line_height: single_height - 2 * padding - (2 * 5 + 1),
  single_with_icon_height: single_with_icon_height,
  single_with_icon_line_height: single_with_icon_height - 2 * padding - (2 * 5 + 1),
  padding: 13,
  compact_padding: 9,
  subtitle_line_count: 1,
  has_subtitle_padding: 15,
  high_subtitle_line_count: 2,
  has_high_subtitle_padding: 13,
  front_item_width: 72,
  side_padding: 2 * __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].grid_unit_component,
  font_size_title: 16,
  font_size_subtitle: 14,
  line_height_subtitle: 20,
  font_size_list_header: 14,
  font_size_small: 12,

  color_light_title: rgba(__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].blend_light_text_primary),
  color_light_subtitle: rgba(__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].blend_light_text_secondary),
  color_light_info: rgba(__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].blend_light_text_tertiary),
  color_light_text_disabled: rgba(__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].blend_light_text_disabled),
  color_light_list_header: rgba(__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].blend_light_text_tertiary),
  color_light_secondary: rgba(__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].blend_light_text_secondary),
  color_light_background_hover: rgba(__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].blend_light_background_hover),
  color_light_background_selected: rgba(__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].blend_light_background_hover),
  // background color may be set in theme; disabled by default
  // color_light_background:          "inherit",

  color_dark_title: rgba(__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].blend_dark_text_primary),
  color_dark_subtitle: rgba(__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].blend_dark_text_secondary),
  color_dark_info: rgba(__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].blend_dark_text_tertiary),
  color_dark_text_disabled: rgba(__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].blend_dark_text_disabled),
  color_dark_list_header: rgba(__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].blend_dark_text_tertiary),
  color_dark_secondary: rgba(__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].blend_dark_text_secondary),
  color_dark_background_hover: rgba(__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].blend_dark_background_hover),
  color_dark_background_selected: rgba(__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].blend_dark_background_hover)
};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var paddingH = function paddingH(h) {
  return {
    "padding-left": h + "px",
    "padding-right": h + "px"
  };
};

var paddingV = function paddingV(top, bottom) {
  return {
    "padding-top": top + "px",
    "padding-bottom": (bottom || top) + "px"
  };
};

var layout = (function (selector, componentVars) {
  return [_defineProperty({}, selector, [__WEBPACK_IMPORTED_MODULE_4_polythene_css__["a" /* flex */].layout, {
    position: "relative",
    overflow: "hidden",

    ".pe-list-tile--sticky": [__WEBPACK_IMPORTED_MODULE_4_polythene_css__["c" /* mixin */].sticky(2)],

    " .pe-list-tile__primary, .pe-list-tile__secondary": [__WEBPACK_IMPORTED_MODULE_4_polythene_css__["a" /* flex */].layoutHorizontal, {
      "text-decoration": "none",
      color: "inherit",
      border: "none"
    }],

    " .pe-list-tile__primary": [__WEBPACK_IMPORTED_MODULE_4_polythene_css__["a" /* flex */].flex(), {
      position: "relative",

      " .pe-list-tile__content:not(.pe-list-tile__content--front)": [__WEBPACK_IMPORTED_MODULE_4_polythene_css__["a" /* flex */].flex(), paddingV(componentVars.padding, componentVars.padding + 1)]
    }],

    " .pe-list-tile__secondary": {
      "text-align": "right",
      "font-size": componentVars.font_size_title + "px",
      position: "relative"
    },

    " .pe-list-tile__content": [__WEBPACK_IMPORTED_MODULE_4_polythene_css__["a" /* flex */].layoutVertical, __WEBPACK_IMPORTED_MODULE_4_polythene_css__["a" /* flex */].selfCenter, paddingH(componentVars.side_padding), {
      ".pe-list-tile__content--front": [paddingV(componentVars.padding - 5), {
        width: componentVars.front_item_width + "px"
      }],

      " small": {
        "font-size": componentVars.font_size_small + "px"
      }
    }],

    " .pe-list-tile__content--front + .pe-list-tile__content": {
      "padding-left": 0
    },

    " .pe-list-tile__title": [__WEBPACK_IMPORTED_MODULE_4_polythene_css__["c" /* mixin */].ellipsis(1), {
      "font-size": componentVars.font_size_title + "px",
      "font-weight": __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].font_weight_normal,
      "line-height": componentVars.single_line_height + "px"
    }],

    " .pe-list-tile__subtitle": [__WEBPACK_IMPORTED_MODULE_4_polythene_css__["c" /* mixin */].ellipsis(componentVars.subtitle_line_count, componentVars.line_height_subtitle), {
      "font-size": componentVars.font_size_subtitle + "px",
      "line-height": componentVars.line_height_subtitle + "px",

      ".pe-list-tile__high-subtitle": [__WEBPACK_IMPORTED_MODULE_4_polythene_css__["c" /* mixin */].ellipsis(componentVars.high_subtitle_line_count, componentVars.line_height_subtitle), {
        "white-space": "normal"
      }]
    }],

    ".pe-list-tile--selected, &.pe-list-tile--disabled": {
      " a": {
        "pointer-events": "none"
      }
    },

    ".pe-list-tile--subtitle": {
      " .pe-list-tile__content": [paddingV(componentVars.has_subtitle_padding, componentVars.has_subtitle_padding + 1), {
        " .pe-list-tile__title": {
          padding: 0
        }
      }]
    },

    ".pe-list-tile--high-subtitle": {
      " .pe-list-tile--high-subtitle .pe-list-tile__secondary": [__WEBPACK_IMPORTED_MODULE_4_polythene_css__["a" /* flex */].layoutHorizontal, __WEBPACK_IMPORTED_MODULE_4_polythene_css__["a" /* flex */].layoutStart],
      " .pe-list-tile__content": [__WEBPACK_IMPORTED_MODULE_4_polythene_css__["a" /* flex */].selfStart, paddingV(componentVars.has_high_subtitle_padding, componentVars.has_high_subtitle_padding + 1), {
        " .pe-list-tile__title": {
          padding: 0
        }
      }]
    },

    // List header
    ".pe-list__header": {
      height: componentVars.single_height + "px",

      " .pe-list-tile__content": {
        "padding-top": 0,
        "padding-bottom": 0
      },
      " .pe-list-tile__title": [__WEBPACK_IMPORTED_MODULE_4_polythene_css__["c" /* mixin */].ellipsis(1, componentVars.single_height), {
        "font-size": componentVars.font_size_list_header + "px",
        "font-weight": __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].font_weight_medium,
        "line-height": componentVars.single_height + "px",
        padding: 0
      }]
    },

    // Compact list

    " .pe-list--compact &, &.pe-list-tile--compact": {
      ":not(.pe-list__header)": {
        " .pe-list-tile__content": paddingV(componentVars.compact_padding, componentVars.compact_padding + 1)
      }
    },

    // Firefox only
    "@supports (-moz-appearance:none) and (display:contents)": {
      " .pe-list-tile__primary, .pe-list-tile__content": {
        overflow: "hidden"
      }
    },

    // Menu

    ".pe-dialog .pe-menu__content &": {
      " .pe-list-tile__title": __WEBPACK_IMPORTED_MODULE_4_polythene_css__["c" /* mixin */].ellipsis("none")
    },

    ".pe-menu__content &": {
      ":not(.pe-list-tile--disabled)": {
        cursor: "default",

        "&, .pe-list-tile__primary, .pe-list-tile__secondary": {
          " .pe-list-tile__title, .pe-list-tile__subtitle": {
            userSelect: "none"
          }
        }
      }
    },

    // Non-touch

    "html.pe-no-touch &.pe-list-tile--hoverable, \
      html.pe-no-touch &.pe-list-tile--selectable": {
      ":not(.pe-list__header):not(.pe-list-tile--disabled):not(.pe-list-tile--selected):hover": {
        cursor: "pointer"
      }
    }
  }])];
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = function style(scopes, selector, componentVars, tint) {
  return [_defineProperty$1({}, scopes.map(function (s) {
    return s + selector;
  }).join(","), {
    color: componentVars["color_" + tint + "_title"],
    backgroundColor: componentVars["color_" + tint + "_background"] || "initial",

    ".pe-list__header": {
      color: componentVars["color_" + tint + "_list_header"],

      " .pe-list-tile__primary, pe-list-tile__secondary": {
        backgroundColor: "inherit"
      }
    },

    " .pe-list-tile__subtitle": {
      color: componentVars["color_" + tint + "_subtitle"]
    },

    " .pe-list-tile__secondary": {
      color: componentVars["color_" + tint + "_secondary"]
    },

    ".pe-list-tile--disabled": {
      "&, .pe-list-tile__title, .pe-list-tile__content, .pe-list-tile__subtitle": {
        color: componentVars["color_" + tint + "_text_disabled"]
      }
    },
    ".pe-list-tile--selected": {
      " .pe-list-tile__primary, pe-list-tile__secondary": {
        backgroundColor: componentVars["color_" + tint + "_background_selected"]
      }
    },
    "&.pe-list-tile--sticky": {
      backgroundColor: componentVars["color_" + tint + "_background"] || "inherit"
    }
  })];
};

var noTouchStyle = function noTouchStyle(scopes, selector, componentVars, tint) {
  return [_defineProperty$1({}, scopes.map(function (s) {
    return s + selector + ":hover";
  }).join(","), {
    ":not(.pe-list__header):not(.pe-list-tile--disabled)": {
      " .pe-list-tile__primary, .pe-list-tile__secondary": {
        backgroundColor: componentVars["color_" + tint + "_background_hover"]
      }
    }
  })];
};

var color = (function (selector, componentVars) {
  return [style([".pe-dark-theme", ".pe-dark-theme "], selector, componentVars, "dark"), // has/inside dark theme
  style(["", ".pe-light-theme", ".pe-light-theme "], selector, componentVars, "light"), // normal, has/inside light theme

  noTouchStyle(["html.pe-no-touch .pe-dark-theme .pe-list-tile--hoverable", "html.pe-no-touch .pe-dark-theme .pe-list-tile--hoverable "], selector, componentVars, "dark"), // has/inside dark theme

  noTouchStyle(["html.pe-no-touch .pe-list-tile--hoverable", "html.pe-no-touch .pe-list-tile--hoverable ", "html.pe-no-touch .pe-light-theme .pe-list-tile--hoverable", "html.pe-no-touch .pe-light-theme .pe-list-tile--hoverable "], selector, componentVars, "light")];
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [layout, color];
var selector = ".pe-list-tile";

var customTheme = function customTheme(customSelector, customVars) {
  return __WEBPACK_IMPORTED_MODULE_4_polythene_css__["b" /* styler */].generateStyles([customSelector, selector], _extends$1({}, vars$1, customVars), fns);
};

__WEBPACK_IMPORTED_MODULE_4_polythene_css__["b" /* styler */].generateStyles([selector], vars$1, fns);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var classes = {
  component: "pe-list-tile",
  primary: "pe-list-tile__primary",
  secondary: "pe-list-tile__secondary",
  content: "pe-list-tile__content",
  contentFront: "pe-list-tile__content--front",
  title: "pe-list-tile__title",
  subtitle: "pe-list-tile__subtitle",
  highSubtitle: "pe-list-tile__high-subtitle",
  selected: "pe-list-tile--selected",
  disabled: "pe-list-tile--disabled",
  sticky: "pe-list-tile--sticky",
  hasSubtitle: "pe-list-tile--subtitle",
  hasHighSubtitle: "pe-list-tile--high-subtitle",
  hasFront: "pe-list-tile--front",
  compact: "pe-list-tile--compact",
  hoverable: "pe-list-tile--hoverable",
  selectable: "pe-list-tile--selectable"
};

var primaryContent = function primaryContent(attrs, children) {
  var element = attrs.element ? attrs.element : attrs.url ? "a" : "div";
  var contentFrontClass = classes.content + " " + classes.contentFront;
  var frontComp = attrs.front ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", { class: contentFrontClass }, attrs.front) : attrs.indent ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", { class: contentFrontClass }) : null;
  var props = _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_polythene_core__["c" /* filterSupportedAttributes */])(attrs), attrs.url, attrs.events, {
    class: classes.primary,
    style: null
  });
  return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(element, props, [frontComp, __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
    class: classes.content,
    style: attrs.style
  }, [attrs.content ? attrs.content : children, attrs.title && !attrs.content ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
    class: classes.title
  }, attrs.title) : null, attrs.subtitle ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
    class: classes.subtitle
  }, attrs.subtitle) : null, attrs.highSubtitle ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
    class: classes.subtitle + " " + classes.highSubtitle
  }, attrs.highSubtitle) : null])]);
};

var secondaryContent = function secondaryContent() {
  var secondaryAttrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var element = secondaryAttrs.element ? secondaryAttrs.element : secondaryAttrs.url ? "a" : "div";
  return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(element, _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_polythene_core__["c" /* filterSupportedAttributes */])(secondaryAttrs), secondaryAttrs.url, {
    class: classes.secondary
  }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
    class: classes.content
  }, [secondaryAttrs.icon ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_icon__["a" /* default */], secondaryAttrs.icon) : null, secondaryAttrs.content ? secondaryAttrs.content : null]));
};

var view = function view(vnode) {
  var attrs = vnode.attrs;
  var element = attrs.element || "div";
  var heightClass = attrs.subtitle ? classes.hasSubtitle : attrs.highSubtitle ? classes.hasHighSubtitle : attrs.front || attrs.indent ? classes.hasFront : null;

  var props = _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_polythene_core__["c" /* filterSupportedAttributes */])(attrs), {
    class: [classes.component, attrs.selected ? classes.selected : null, attrs.disabled ? classes.disabled : null, attrs.sticky ? classes.sticky : null, attrs.compact ? classes.compact : null, attrs.hoverable ? classes.hoverable : null, attrs.selectable ? classes.selectable : null, attrs.tone === "dark" ? "pe-dark-theme" : null, attrs.tone === "light" ? "pe-light-theme" : null, heightClass, attrs.class].join(" ")
    // events and url are attached to primary content to not interfere with controls
  });

  var primaryAttrs = _extends({}, attrs);
  delete primaryAttrs.id;
  delete primaryAttrs.class;
  var content = [attrs.ink && !attrs.disabled ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_ripple__["a" /* default */], attrs.ripple) : null, primaryContent(primaryAttrs, attrs.children || vnode.children), attrs.secondary ? secondaryContent(attrs.secondary) : null];
  return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(element, props, [attrs.before, content, attrs.after]);
};

var listTile = {
  theme: customTheme, // accepts (selector, vars)
  view: view
};

/* harmony default export */ __webpack_exports__["a"] = (listTile);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_ripple__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_polythene_theme__ = __webpack_require__(2);
/* unused harmony export classes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return vars$1; });






var rgba = __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].rgba;
var touch_height = __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].unit_touch_height;
var height = 36;

var vars$1 = {
  margin_h: __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].grid_unit,
  border_radius: __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].unit_item_border_radius,
  font_size: 14,
  font_weight: 500,
  outer_padding_v: (touch_height - height) / 2,
  padding_h: 2 * __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].grid_unit,
  padding_v: 11,
  min_width: 8 * __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].grid_unit_component,
  text_transform: "uppercase",
  border_width: 0, // no border in MD, but used to correctly set the height when a theme does set a border

  color_light_background: "transparent",
  color_light_text: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].blend_light_text_primary),
  color_light_hover_background: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].blend_light_background_hover),
  color_light_focus_background: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].blend_light_background_hover),
  color_light_active_background: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].blend_light_background_active),
  color_light_disabled_background: "transparent",
  color_light_disabled_text: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].blend_light_text_disabled),

  // border colors may be set in theme; disabled by default
  // color_light_border:              "transparent", // only specify this variable to get all 4 states
  // color_light_hover_border:        "transparent",
  // color_light_active_border:       "transparent",
  // color_light_disabled_border:     "transparent",

  color_dark_background: "transparent",
  color_dark_text: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].blend_dark_text_primary),
  color_dark_hover_background: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].blend_dark_background_hover),
  color_dark_focus_background: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].blend_dark_background_hover),
  color_dark_active_background: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].blend_dark_background_active),
  color_dark_disabled_background: "transparent",
  color_dark_disabled_text: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].blend_dark_text_disabled)

};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var baseLayout = (function (selector) {
  return [_defineProperty({}, selector, {
    userSelect: "none",
    outline: "none",
    padding: 0,
    textDecoration: "none",
    textAlign: "center",
    cursor: "pointer",

    ".pe-button--selected, &.pe-button--disabled, &.pe-button--inactive": {
      cursor: "default",
      pointerEvents: "none"
    },

    ".pe-button--focus": {
      " .pe-button__focus": {
        opacity: 1
      }
    },

    " .pe-button__content": {
      position: "relative",
      borderRadius: "inherit"
    },

    " .pe-button__label": [__WEBPACK_IMPORTED_MODULE_3_polythene_css__["c" /* mixin */].fontSmoothing(), {
      position: "relative",
      display: "block",
      borderRadius: "inherit",
      pointerEvents: "none"
    }],

    " .pe-button__wash, .pe-button__focus": [__WEBPACK_IMPORTED_MODULE_3_polythene_css__["c" /* mixin */].defaultTransition("background-color"), __WEBPACK_IMPORTED_MODULE_3_polythene_css__["c" /* mixin */].fit(), {
      borderRadius: "inherit",
      pointerEvents: "none"
    }],

    " .pe-button__focus": {
      opacity: 0
    },

    " .pe-button__wash": {
      zIndex: 0
    }
  })];
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var layout = (function (selector, componentVars) {
  return [_defineProperty$1({}, selector, [{
    display: "inline-block",
    minWidth: componentVars.min_width + "px",
    margin: "0 " + componentVars.margin_h + "px",
    padding: componentVars.outer_padding_v + "px 0",
    background: "transparent",
    border: "none",

    " .pe-button__content": {
      position: "relative",
      borderWidth: 0,
      padding: "0 " + componentVars.padding_h + "px",
      borderRadius: componentVars.border_radius + "px"
    },

    " .pe-button__label": {
      padding: componentVars.padding_v + "px 0",
      fontSize: componentVars.font_size + "px",
      lineHeight: componentVars.font_size + "px",
      fontWeight: componentVars.font_weight,
      textTransform: componentVars.text_transform,
      whiteSpace: "pre"
    },

    ".pe-button--borders": {
      " .pe-button__wash, pe-button__focus, .pe-ripple": __WEBPACK_IMPORTED_MODULE_3_polythene_css__["c" /* mixin */].fit(-1),

      " .pe-button__content": {
        borderStyle: "solid",
        borderWidth: "1px"
      },
      " .pe-button__label": {
        padding: componentVars.padding_v - 1 + "px 0"
      }
    }
  }])];
});

function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = function style(scopes, selector, componentVars, tint) {
  var normalBorder = componentVars["color_" + tint + "_border"] || "transparent";
  var activeBorder = componentVars["color_" + tint + "_active_border"] || normalBorder;
  var disabledBorder = componentVars["color_" + tint + "_disabled_border"] || normalBorder;
  return [_defineProperty$2({}, scopes.map(function (s) {
    return s + selector;
  }).join(","), {
    "&, &:link, &:visited": {
      color: componentVars["color_" + tint + "_text"]
    },

    " .pe-button__content": {
      backgroundColor: componentVars["color_" + tint + "_background"],
      borderColor: normalBorder
    },

    ".pe-button--disabled": {
      color: componentVars["color_" + tint + "_disabled_text"],

      " .pe-button__content": {
        backgroundColor: componentVars["color_" + tint + "_disabled_background"],
        borderColor: disabledBorder
      }
    },

    ".pe-button--selected": {
      " .pe-button__content": {
        backgroundColor: componentVars["color_" + tint + "_active_background"],
        borderColor: activeBorder
      },
      " .pe-button__focus": {
        opacity: 1,
        backgroundColor: componentVars["color_" + tint + "_focus_background"]
      }
    },

    ".pe-button--focus": {
      " .pe-button__focus": {
        opacity: 1,
        backgroundColor: componentVars["color_" + tint + "_focus_background"]
      }
    }
  })];
};

var noTouchStyle = function noTouchStyle(scopes, selector, componentVars, tint) {
  var normalBorder = componentVars["color_" + tint + "_border"] || "transparent";
  var hoverBorder = componentVars["color_" + tint + "_border"] || normalBorder;
  return [_defineProperty$2({}, scopes.map(function (s) {
    return s + selector + ":hover";
  }).join(","), {
    ":not(.pe-button--selected):not(.pe-button--inactive) .pe-button__wash": {
      backgroundColor: componentVars["color_" + tint + "_hover_background"],
      borderColor: hoverBorder
    }
  })];
};

var color = (function (selector, componentVars) {
  return [style([".pe-dark-theme", ".pe-dark-theme "], selector, componentVars, "dark"), // has/inside dark theme
  style(["", ".pe-light-theme", ".pe-light-theme "], selector, componentVars, "light"), // normal, has/inside light theme
  noTouchStyle(["html.pe-no-touch .pe-dark-theme "], selector, componentVars, "dark"), // inside dark theme
  noTouchStyle(["html.pe-no-touch ", "html.pe-no-touch .pe-light-theme "], selector, componentVars, "light")];
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [layout, color];
var baseSelector = ".pe-button";
var selector = ".pe-button.pe-text-button";

var customTheme = function customTheme(customSelector, customVars) {
  return __WEBPACK_IMPORTED_MODULE_3_polythene_css__["b" /* styler */].generateStyles([customSelector, selector], _extends$1({}, vars$1, customVars), fns);
};

__WEBPACK_IMPORTED_MODULE_3_polythene_css__["b" /* styler */].generateStyles([baseSelector], vars$1, [baseLayout]);
__WEBPACK_IMPORTED_MODULE_3_polythene_css__["b" /* styler */].generateStyles([selector], vars$1, fns);

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var classes = {
  component: "pe-button pe-text-button",
  content: "pe-button__content",
  label: "pe-button__label",
  wash: "pe-button__wash",
  focus: "pe-button__focus",
  selected: "pe-button--selected",
  disabled: "pe-button--disabled",
  borders: "pe-button--borders",
  inactive: "pe-button--inactive",
  focused: "pe-button--focus"
};

var view = function view(vnode) {
  var state = vnode.state;
  var attrs = vnode.attrs;
  var noink = attrs.ink !== undefined && attrs.ink === false;
  var disabled = attrs.disabled;
  var element = attrs.element || "a";
  var tabIndex = disabled || attrs.inactive ? -1 : attrs.tabindex || 0;
  var onClickHandler = attrs.events && attrs.events.onclick;
  var props = _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_polythene_core__["c" /* filterSupportedAttributes */])(attrs, { add: ["formaction", "type"] }), {
    class: [attrs.parentClass || classes.component, attrs.selected ? classes.selected : null, disabled ? classes.disabled : null, attrs.inactive ? classes.inactive : null, attrs.borders ? classes.borders : null, state.focus ? classes.focused : null, attrs.tone === "dark" ? "pe-dark-theme" : null, attrs.tone === "light" ? "pe-light-theme" : null, attrs.class].join(" "),
    tabIndex: tabIndex,
    // handle focus events
    onfocus: function onfocus() {
      return state.focus = !state.mouseover;
    },
    onblur: function onblur() {
      return state.focus = false;
    },
    // don't show focus on click (detected by not being in mouse over state)
    onmouseover: function onmouseover() {
      return state.mouseover = true;
    },
    onmouseout: function onmouseout() {
      return state.mouseover = false;
    },
    // if focus, dispatch click event on ENTER
    onkeydown: function onkeydown(e) {
      if (e.which === 13 && state.focus) {
        state.focus = false;
        if (onClickHandler) {
          onClickHandler(e);
        }
      }
    }
  }, attrs.style ? { style: {} } : null, attrs.events, attrs.url, disabled ? { disabled: true } : null);
  var children = attrs.children || vnode.children;
  var label = attrs.content ? attrs.content : attrs.label ? _typeof(attrs.label) === "object" ? attrs.label : __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", { class: classes.label }, attrs.label) : children && children[0] ? children : null;
  var noWash = disabled || attrs.wash !== undefined && !attrs.wash;
  var content = label ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
    class: classes.content,
    style: attrs.style || {}
  }, [!disabled && attrs.shadowComponent // "protected" option, used by raised-button
  ? attrs.shadowComponent : null,
  // ripple
  disabled || noink ? null : __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_ripple__["a" /* default */], _extends({}, attrs.ripple, {
    getTarget: function getTarget() {
      return vnode.dom;
    }
  })),
  // hover
  noWash ? null : __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", { class: classes.wash }),
  // focus
  disabled ? null : __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", { class: classes.focus }), label]) : null;
  return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(element, props, [attrs.before, content, attrs.after]);
};

var button = {
  theme: customTheme, // accepts (selector, vars)
  oninit: function oninit(vnode) {
    vnode.state.focus = false;
    vnode.state.mouseover = false;
  },
  view: view
};

/* harmony default export */ __webpack_exports__["a"] = (button);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_list_tile__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_polythene_theme__ = __webpack_require__(2);
/* unused harmony export classes */
/* unused harmony export vars */






var rgba = __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].rgba;

var vars$1 = {
  padding: __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].grid_unit_component, // vertical padding
  padding_compact: __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].grid_unit_component / 2,
  border_width_stacked: 1,
  border_width_bordered: 1,

  color_light_border: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].blend_light_border_light),
  color_dark_border: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].blend_dark_border_light)

};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var borderStyle = function borderStyle(componentVars) {
  return {
    borderStyle: "none none solid none",
    borderWidth: componentVars.border_width_bordered + "px"
  };
};

var layout = (function (selector, componentVars) {
  return [_defineProperty({}, selector, {
    padding: componentVars.padding + "px 0",

    ".pe-list--header": {
      paddingTop: 0
    },

    ".pe-list--compact": {
      padding: componentVars.padding_compact + "px 0"
    },

    "& + &": {
      borderStyle: "solid none none none",
      borderWidth: componentVars.border_width_stacked + "px"
    },

    ".pe-list--borders": {
      " .pe-list-tile:not(.pe-list__header)": {
        ":not(:last-child)": {
          "&": borderStyle(componentVars)
        }
      }
    },

    ".pe-list--indented-borders": {
      borderTop: "none",

      " .pe-list-tile:not(.pe-list__header)": {
        ":not(:last-child)": {
          " .pe-list-tile__content:not(.pe-list-tile__content--front)": borderStyle(componentVars)
        }
      }
    }
  })];
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = function style(scopes, selector, componentVars, tint) {
  var _ref;

  return [(_ref = {}, _defineProperty$1(_ref, scopes.map(function (s) {
    return s + selector;
  }).join(","), {
    backgroundColor: componentVars["color_" + tint + "_background"] || "initial",

    ".pe-list--borders": {
      " .pe-list-tile:not(.pe-list__header)": {
        ":not(:last-child)": {
          borderColor: componentVars["color_" + tint + "_border"]
        }
      }
    },

    ".pe-list--indented-borders": {
      " .pe-list-tile:not(.pe-list__header)": {
        " .pe-list-tile__content:not(.pe-list-tile__content--front)": {
          borderColor: componentVars["color_" + tint + "_border"]
        }
      }
    }
  }), _defineProperty$1(_ref, selector + " + .pe-list", {
    borderTopColor: componentVars["color_" + tint + "_border"]
  }), _ref)];
};

var color = (function (selector, componentVars) {
  return [style([".pe-dark-theme", ".pe-dark-theme "], selector, componentVars, "dark"), // has/inside dark theme
  style(["", ".pe-light-theme", ".pe-light-theme "], selector, componentVars, "light")];
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [layout, color];
var selector = ".pe-list";

var customTheme = function customTheme(customSelector, customVars) {
  return __WEBPACK_IMPORTED_MODULE_3_polythene_css__["b" /* styler */].generateStyles([customSelector, selector], _extends$1({}, vars$1, customVars), fns);
};

__WEBPACK_IMPORTED_MODULE_3_polythene_css__["b" /* styler */].generateStyles([selector], vars$1, fns);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var classes = {
  component: "pe-list",
  header: "pe-list__header",
  borders: "pe-list--borders",
  indentedBorders: "pe-list--indented-borders",
  hasHeader: "pe-list--header",
  compact: "pe-list--compact"
};

var view = function view(vnode) {
  var attrs = vnode.attrs;
  var element = attrs.element || "div";
  var props = _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_polythene_core__["c" /* filterSupportedAttributes */])(attrs), {
    class: [classes.component, attrs.borders ? classes.borders : null, attrs.indentedBorders ? classes.indentedBorders : null, attrs.header ? classes.hasHeader : null, attrs.compact ? classes.compact : null, attrs.tone === "dark" ? "pe-dark-theme" : null, attrs.tone === "light" ? "pe-light-theme" : null, attrs.class].join(" ")
  });
  var headerOpts = void 0;
  if (attrs.header) {
    headerOpts = _extends({}, attrs.header);
    headerOpts.class = [classes.header, headerOpts.class || null].join(" ");
  }
  var content = [headerOpts ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_list_tile__["a" /* default */], headerOpts) : null, attrs.tiles ? attrs.tiles : attrs.content ? attrs.content : attrs.children || vnode.children];
  return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(element, props, [attrs.before, content, attrs.after]);
};

var list = {
  theme: customTheme, // accepts (selector, vars)
  view: view
};

/* harmony default export */ __webpack_exports__["a"] = (list);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_shadow__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_polythene_theme__ = __webpack_require__(2);
/* unused harmony export classes */
/* unused harmony export vars */






var rgba = __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].rgba;

var vars$1 = {
  border_radius: __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].unit_block_border_radius,
  padding: 3 * __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].grid_unit_component,
  header_bottom: 20,
  header_height: 60,
  footer_height: 52,

  color_light_content_background: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_light_background),
  color_light_title_text: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].blend_light_text_primary),
  color_light_body_text: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].blend_light_text_regular),
  color_light_body_border: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].blend_light_border_light),
  color_light_backdrop_background: "rgba(0, 0, 0, .4)",

  color_dark_content_background: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_dark_background),
  color_dark_title_text: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].blend_dark_text_primary),
  color_dark_body_text: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].blend_dark_text_regular),
  color_dark_body_border: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].blend_dark_border_light),
  color_dark_backdrop_background: "rgba(0, 0, 0, .5)"
};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var lineHeightTitle = 24;

var layout = (function (selector, componentVars) {
  var _ref;

  return [(_ref = {}, _defineProperty(_ref, selector, [__WEBPACK_IMPORTED_MODULE_3_polythene_css__["a" /* flex */].layoutCenterCenter, {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].z_dialog,
    height: "100%", // 100vh would make the dialog go beneath Mobile Safari toolbar
    padding: componentVars.padding + "px 40px",

    ".pe-dialog--fullscreen": {
      padding: 0,

      " .pe-dialog__content": {
        borderRadius: 0,
        maxWidth: "none",
        height: "100%",
        width: "100%",

        " .pe-dialog__header, .pe-dialog__footer": {
          display: "none"
        },

        " .pe-dialog__body": {
          padding: 0,
          height: "100%",
          maxHeight: "calc(100%)",
          border: "none"
        }
      }
    },

    " .pe-dialog__header, pe-dialog__body, pe-dialog__header": {
      zIndex: 1
    },

    " .pe-dialog__content": [__WEBPACK_IMPORTED_MODULE_3_polythene_css__["a" /* flex */].layoutVertical, {
      position: "relative",
      maxHeight: "100%",
      minWidth: 56 * 5 + "px",
      maxWidth: 7 * __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].grid_unit_menu + "px",
      borderRadius: componentVars.border_radius + "px",

      " > .pe-shadow": {
        zIndex: -1 // For IE10 to get click events on content
      },

      ".pe-menu__content": {
        " .pe-dialog__body": {
          padding: 0,
          border: "none"
        }
      },
      " p": {
        margin: 0
      },
      " p + p": {
        marginTop: "16px"
      }
    }],

    " .pe-dialog__title": {
      fontSize: __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].font_size_title + "px",
      lineHeight: lineHeightTitle + "px",
      fontWeight: __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].font_weight_medium,

      "& + div": {
        marginTop: "16px"
      }
    },

    " .pe-dialog__header": {
      padding: [componentVars.padding - 4, componentVars.padding, componentVars.header_bottom - 4, componentVars.padding].map(function (v) {
        return v + "px";
      }).join(" "),
      minHeight: componentVars.header_height + "px",

      " .pe-dialog__title": [__WEBPACK_IMPORTED_MODULE_3_polythene_css__["c" /* mixin */].ellipsis(1), {
        width: "100%"
      }]
    },

    " .pe-dialog__body": [__WEBPACK_IMPORTED_MODULE_3_polythene_css__["a" /* flex */].selfStretch, {
      padding: componentVars.padding + "px",
      overflowY: "auto",
      "-webkit-overflow-scrolling": "touch",
      borderWidth: "1px",
      borderStyle: "solid none",
      borderColor: "transparent",
      // initially set max-height; will be overridden by dialog core with actual heights
      maxHeight: "calc(100vh - " + 2 * componentVars.padding + "px - " + (componentVars.header_height + componentVars.footer_height) + "px)"
    }],
    " .pe-dialog__header + .pe-dialog__body": {
      paddingTop: 0
    },

    " .pe-dialog__footer": {
      padding: "2px 8px",
      minHeight: componentVars.footer_height + "px",
      fontSize: 0, // remove inline block spacing

      ".pe-dialog__footer--high": {
        // when buttons are stacked vertically
        paddingBottom: "8px"
      }
    },

    " .pe-dialog__actions": [__WEBPACK_IMPORTED_MODULE_3_polythene_css__["a" /* flex */].layoutHorizontal, __WEBPACK_IMPORTED_MODULE_3_polythene_css__["a" /* flex */].layoutEndJustified, __WEBPACK_IMPORTED_MODULE_3_polythene_css__["a" /* flex */].layoutWrap, {
      margin: "0 -4px",

      " .pe-button": {
        height: "36px",
        marginTop: "6px",
        marginBottom: "6px",
        padding: 0
      }
    }]
  }]), _defineProperty(_ref, " body.pe-dialog--open", {
    overflow: "hidden",
    left: 0,
    "-webkit-overflow-scrolling": "touch",
    top: 0,
    width: "100%"
  }), _ref)];
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = function style(scopes, selector, componentVars, tint) {
  return [_defineProperty$1({}, scopes.map(function (s) {
    return s + selector;
  }).join(","), {
    "&.pe-dialog--backdrop": {
      backgroundColor: componentVars["color_" + tint + "_backdrop_background"]
    },
    " .pe-dialog__content": {
      backgroundColor: componentVars["color_" + tint + "_content_background"]
    },
    " .pe-dialog__header .pe-dialog__title": {
      color: componentVars["color_" + tint + "_title_text"]
    },
    " .pe-dialog__body": {
      color: componentVars["color_" + tint + "_body_text"]
    },
    "&.pe-dialog--overflow-top .pe-dialog__body": {
      borderTopColor: componentVars["color_" + tint + "_body_border"]
    },
    "&.pe-dialog--overflow-bottom .pe-dialog__body": {
      borderBottomColor: componentVars["color_" + tint + "_body_border"]
    }
  })];
};

var color = (function (selector, componentVars) {
  return [style([".pe-dark-theme", ".pe-dark-theme "], selector, componentVars, "dark"), // has/inside dark theme
  style(["", ".pe-light-theme", ".pe-light-theme "], selector, componentVars, "light")];
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [layout, color];
var selector = ".pe-dialog";

var customTheme = function customTheme(customSelector, customVars) {
  return __WEBPACK_IMPORTED_MODULE_3_polythene_css__["b" /* styler */].generateStyles([customSelector, selector], _extends$1({}, vars$1, customVars), fns);
};

__WEBPACK_IMPORTED_MODULE_3_polythene_css__["b" /* styler */].generateStyles([selector], vars$1, fns);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var classes = {
  component: "pe-dialog",
  visible: "pe-dialog--visible",
  body: "pe-dialog__body",
  fullscreen: "pe-dialog--fullscreen",
  content: "pe-dialog__content",
  header: "pe-dialog__header",
  footer: "pe-dialog__footer",
  footerHigh: "pe-dialog__footer--high",
  title: "pe-dialog__title",
  actions: "pe-dialog__actions",
  hasBackdrop: "pe-dialog--backdrop",
  hasTopOverflow: "pe-dialog--overflow-top",
  hasBottomOverflow: "pe-dialog--overflow-bottom",
  /* lookup: */
  menuContent: "pe-menu__content"
};

var SCROLL_WATCH_TIMER = 150;

var updateScrollState = function updateScrollState(state) {
  var scroller = state.scrollEl;
  if (!scroller) {
    return;
  }
  state.topOverflow = scroller.scrollTop > 0;
  state.bottomOverflow = scroller.scrollHeight - (scroller.scrollTop + scroller.getBoundingClientRect().height) > 0;
};

var updateFooterState = function updateFooterState(state) {
  var footerEl = state.footerEl;
  if (footerEl) {
    var style = window.getComputedStyle(footerEl);
    var height = footerEl.getBoundingClientRect().height;
    var minHeight = parseInt(style.minHeight, 10);
    if (height > minHeight) {
      footerEl.classList.add(classes.footerHigh);
    } else {
      footerEl.classList.remove(classes.footerHigh);
    }
  }
};

var showInstance = function showInstance(state, opts) {
  var id = state.instanceId;
  state.transitioning = true;
  var transitions = opts.transitions || state.transitions;
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["a" /* show */])(_extends({}, opts, transitions.show(state.el, opts))).then(function () {
    state.transitioning = false;
    state.visible = true;
    if (state.didShow) {
      // notify multiple
      state.didShow(id);
      // this will call opts.didShow
    }
  });
};

var hideInstance = function hideInstance(state, opts) {
  var id = state.instanceId;
  state.transitioning = true;
  var transitions = opts.transitions || state.transitions;
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["b" /* hide */])(_extends({}, opts, transitions.hide(state.el, opts))).then(function () {
    dialog.remove(id);
    state.transitioning = false;
    state.visible = false;
    if (state.didHide) {
      // notify multiple
      state.didHide(id);
      // this will call opts.didHide
    }
    setTimeout(__WEBPACK_IMPORTED_MODULE_1_mithril___default.a.redraw, 0); // removes remainder of dialog component
  });
};

var createViewContent = function createViewContent(state, opts) {
  // if flex "self-stretch" is not supported, calculate the maximum height
  var bodyOpts = opts.content || opts.body || opts.menu;
  var updateContentOnScroll = opts.updateContentOnScroll || false;
  var ignoreContent = !updateContentOnScroll && state.isScrolling;
  return __WEBPACK_IMPORTED_MODULE_1_mithril___default()("div", {
    class: classes.body,
    oncreate: function oncreate(_ref) {
      var dom = _ref.dom;
      return state.scrollEl = dom;
    },
    onbeforeupdate: !ignoreContent,
    onscroll: function onscroll() {
      state.isScrolling = true;
      updateScrollState(state);
      clearTimeout(state.scrollWatchId);
      state.scrollWatchId = setTimeout(function () {
        state.isScrolling = false;
      }, SCROLL_WATCH_TIMER);
    }
  }, bodyOpts);
};

var createView = function createView(state, opts) {
  var update = function update() {
    updateScrollState(state);
    updateFooterState(state);
    __WEBPACK_IMPORTED_MODULE_1_mithril___default.a.redraw();
  };
  var handleEscape = function handleEscape(e) {
    if (opts.fullscreen || opts.modal) return;
    if (e.which === 27 && !state.transitioning) {
      cleanup();
      hideInstance(state, _extends({}, opts, {
        hideDelay: 0
      }));
    }
  };
  var cleanup = function cleanup() {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["f" /* unsubscribe */])("resize", update);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["f" /* unsubscribe */])("keydown", handleEscape);
  };

  var element = opts.element || "form";
  var props = _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["c" /* filterSupportedAttributes */])(opts, { remove: ["style"] }), // style set in content, and set by show/hide transition
  {
    class: [classes.component, opts.fullscreen ? classes.fullscreen : null, opts.backdrop ? classes.hasBackdrop : null, state.topOverflow || opts.borders ? classes.hasTopOverflow : null, state.bottomOverflow || opts.borders ? classes.hasBottomOverflow : null, state.visible ? classes.visible : null, opts.tone === "dark" ? "pe-dark-theme" : null, opts.tone === "light" ? "pe-light-theme" : null, opts.class].join(" "),
    oncreate: function oncreate(_ref2) {
      var dom = _ref2.dom;

      state.el = dom;
      // resize: update scroll state ("overflow" borders)
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["g" /* subscribe */])("resize", update);
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["g" /* subscribe */])("keydown", handleEscape);

      updateScrollState(state);

      showInstance(state, opts).then(function () {
        updateScrollState(state);
        updateFooterState(state);
        if (state.topOverflow || state.bottomOverflow) {
          setTimeout(__WEBPACK_IMPORTED_MODULE_1_mithril___default.a.redraw, 0);
        }
      });
    },
    onremove: cleanup,
    // click backdrop: close dialog
    onclick: function onclick(e) {
      if (e.target !== state.el) {
        return;
      }
      if (opts.modal) {
        // not allowed
        return;
      }
      if (!state.transitioning) {
        hideInstance(state, _extends({}, opts, {
          hideDelay: 0
        }));
      }
    }
  }, opts.formOptions ? opts.formOptions : null);

  var body = createViewContent(state, opts);
  var content = __WEBPACK_IMPORTED_MODULE_1_mithril___default()("div", {
    class: [classes.content, opts.menu ? classes.menuContent : null].join(" "),
    style: opts.style
  }, [opts.fullscreen ? null : __WEBPACK_IMPORTED_MODULE_1_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_shadow__["a" /* default */], {
    z: state.z,
    animated: true
  }), opts.fullscreen ? null : opts.title ? __WEBPACK_IMPORTED_MODULE_1_mithril___default()("div", {
    class: classes.header,
    oncreate: function oncreate(_ref3) {
      var dom = _ref3.dom;

      state.headerHeight = dom.scrollHeight;
    }
  }, __WEBPACK_IMPORTED_MODULE_1_mithril___default()("div", {
    class: classes.title
  }, opts.title)) : null, body, opts.fullscreen ? null : opts.footer ? __WEBPACK_IMPORTED_MODULE_1_mithril___default()("div", {
    class: classes.footer,
    oncreate: function oncreate(_ref4) {
      var dom = _ref4.dom;

      state.footerHeight = dom.scrollHeight;
      state.footerEl = dom;
      updateFooterState(state);
    },
    onupdate: function onupdate(_ref5) {
      var dom = _ref5.dom;
      return state.footerHeight = dom.scrollHeight, updateFooterState(state);
    }
  }, [__WEBPACK_IMPORTED_MODULE_1_mithril___default()("div", {
    class: classes.actions
  }, opts.footer)]) : null]);

  return __WEBPACK_IMPORTED_MODULE_1_mithril___default()(element, props, [opts.before, content, opts.after]);
};

var instance = {
  theme: customTheme, // accepts (selector, vars)
  oninit: function oninit(vnode) {
    var attrs = vnode.attrs;
    var opts = attrs.opts;
    var z = opts.z !== undefined ? opts.z : 3; // shadow depth
    vnode.state = _extends(vnode.state, attrs, {
      z: z,
      scrollEl: undefined,
      footerEl: undefined,
      topOverflow: false,
      bottomOverflow: false,
      scrollWatchId: 0,
      isScrolling: false,
      headerHeight: 0,
      footerHeight: 0,
      el: undefined,
      visible: false,
      transitioning: false
    });
  },
  view: function view(_ref6) {
    var state = _ref6.state,
        attrs = _ref6.attrs;

    // attrs contains {id, opts}
    var opts = typeof attrs.opts === "function" ? attrs.opts() : attrs.opts;
    if (attrs.hide && !state.transitioning) {
      hideInstance(state, opts);
    }
    return createView(state, opts);
  }
};

var show$1 = function show$$1(el, opts) {
  return {
    el: el,
    showDuration: opts.showDuration || .220,
    showDelay: opts.showDelay || 0,
    beforeShow: function beforeShow() {
      return el.style.opacity = 0;
    },
    show: function show$$1() {
      return el.style.opacity = 1;
    }
  };
};

var hide$1 = function hide$$1(el, opts) {
  return {
    el: el,
    hideDuration: opts.hideDuration || .220,
    hideDelay: opts.hideDelay || 0,
    hide: function hide$$1() {
      return el.style.opacity = 0;
    }
  };
};

var transitions = {
  show: show$1,
  hide: hide$1
};

var dialog = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["d" /* multiple */])({
  instance: instance,
  transitions: transitions,
  defaultId: "default_dialog",
  element: ".pe-dialog__holder",
  placeholder: "span.pe-dialog__placeholder",
  bodyShowClass: "pe-dialog--open"
});

/* harmony default export */ __webpack_exports__["a"] = (dialog);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_icon__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_button__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_polythene_theme__ = __webpack_require__(2);
/* unused harmony export classes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return vars$1; });






var rgba = __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].rgba;
var padding = (__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].grid_unit_icon_button - __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].unit_icon_size) / 2; // 12
var padding_compact = (__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].grid_unit_icon_button - __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].unit_icon_size) / 3; // 8

var vars$1 = {
  padding: padding,
  padding_compact: padding_compact,

  color_background: "transparent", // only specify this variable to get all 2 states
  // theme specific background colors may be set in theme; disabled by default
  // color_light_background:    "none",
  // color_dark_background:     "none",

  color_light: __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].blend_light_text_secondary),
  color_light_disabled: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].blend_light_text_disabled),
  color_light_wash_opacity: __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].blend_light_background_hover_medium,
  color_light_focus_opacity: __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].blend_light_background_hover_medium,

  color_dark: __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].blend_dark_text_secondary),
  color_dark_disabled: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].blend_dark_text_disabled),
  color_dark_wash_opacity: __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].blend_dark_background_hover_medium,
  color_dark_focus_opacity: __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].blend_dark_background_hover_medium

};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var layout = (function (selector, componentVars) {
  return [_defineProperty({}, selector, {
    // don"t set button size to facilitate different icon sizes
    display: "inline-block",
    "vertical-align": "middle",
    cursor: "pointer",
    position: "relative",
    "font-size": "1rem",
    "border-radius": "50%",
    border: "none",

    " .pe-icon-button__content": {
      "line-height": 1,
      padding: componentVars.padding + "px"
    },

    ".pe-icon-button--compact": {
      " .pe-icon-button__content": {
        padding: componentVars.padding_compact + "px"
      }
    }
  })];
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = function style(scopes, selector, componentVars, tint) {
  return [_defineProperty$1({}, scopes.map(function (s) {
    return s + selector;
  }).join(","), {
    color: componentVars["color_" + tint],
    backgroundColor: componentVars["color_" + tint + "_background"] || componentVars["color_background"],
    " .pe-button__wash": {
      opacity: componentVars["color_" + tint + "_wash_opacity"]
    },

    ".pe-button--focus, &.pe-button--selected": {
      " .pe-button__focus": {
        opacity: componentVars["color_" + tint + "_focus_opacity"],
        backgroundColor: "currentcolor"
      }
    },

    ".pe-button--disabled": {
      color: componentVars["color_" + tint + "_disabled"]
    }
  })];
};

var noTouchStyle = function noTouchStyle(scopes, selector, componentVars, tint) {
  var backgroundColor = tint === "light" ? "currentcolor" : componentVars["color_" + tint];
  return [_defineProperty$1({}, scopes.map(function (s) {
    return s + selector + ":hover";
  }).join(","), {
    " .pe-button__wash": {
      backgroundColor: backgroundColor
    }
  })];
};

var color = (function (selector, componentVars) {
  return [style([".pe-dark-theme", ".pe-dark-theme "], selector, componentVars, "dark"), // has/inside dark theme
  style(["", ".pe-light-theme", ".pe-light-theme "], selector, componentVars, "light"), // normal, has/inside light theme
  noTouchStyle(["html.pe-no-touch .pe-dark-theme "], selector, componentVars, "dark"), // inside dark theme
  noTouchStyle(["html.pe-no-touch ", "html.pe-no-touch .pe-light-theme "], selector, componentVars, "light")];
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [layout, color];
var selector = ".pe-button.pe-icon-button";

var customTheme = function customTheme(customSelector, customVars) {
  return __WEBPACK_IMPORTED_MODULE_3_polythene_css__["b" /* styler */].generateStyles([customSelector, selector], _extends$1({}, vars$1, customVars), fns);
};

__WEBPACK_IMPORTED_MODULE_3_polythene_css__["b" /* styler */].generateStyles([selector], vars$1, fns);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var classes = {
  component: "pe-button pe-icon-button",
  content: "pe-icon-button__content",
  compact: "pe-icon-button--compact"
};

var view = function view(vnode) {
  var attrs = vnode.attrs;
  var content = attrs.content ? attrs.content : attrs.icon ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_icon__["a" /* default */], attrs.icon) : attrs.children || vnode.children;
  return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_button__["a" /* default */], _extends({}, {
    content: __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", { class: classes.content }, content),
    parentClass: [attrs.parentClass || classes.component, attrs.compact ? classes.compact : null].join(" "),
    // defaults
    wash: false,
    animateOnTap: false
  }, attrs));
};

var iconButton = {
  theme: customTheme, // accepts (selector, vars)
  view: view
};

/* harmony default export */ __webpack_exports__["a"] = (iconButton);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_theme__ = __webpack_require__(2);
/* unused harmony export classes */
/* unused harmony export vars */





var vars$1 = {
  transition: "box-shadow " + __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].animation_duration + " ease-out",

  "shadow-top-z-1": "initial",
  "shadow-bottom-z-1": "0 1px 4px 0 rgba(0, 0, 0, 0.37)",

  "shadow-top-z-2": "0 2px 2px 0 rgba(0, 0, 0, 0.2)",
  "shadow-bottom-z-2": "0 6px 10px 0 rgba(0, 0, 0, 0.3)",

  "shadow-top-z-3": "0 11px 7px 0 rgba(0, 0, 0, 0.19)",
  "shadow-bottom-z-3": "0 13px 25px 0 rgba(0, 0, 0, 0.3)",

  "shadow-top-z-4": "0 14px 12px 0 rgba(0, 0, 0, 0.17)",
  "shadow-bottom-z-4": "0 20px 40px 0 rgba(0, 0, 0, 0.3)",

  "shadow-top-z-5": "0 17px 17px 0 rgba(0, 0, 0, 0.15)",
  "shadow-bottom-z-5": "0 27px 55px 0 rgba(0, 0, 0, 0.3)",

  "shadow-down-z-1": "inset 0px 1px 2px -1px rgba(0, 0, 0, 0.15)",
  "shadow-down-z-2": "inset 0px 4px 6px -3px rgba(0, 0, 0, 0.25)"
};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var shadowDirective = function shadowDirective(dir) {
  return {
    boxShadow: dir
  };
};

var layout = (function (selector, componentVars) {
  return [_defineProperty({}, selector, [__WEBPACK_IMPORTED_MODULE_2_polythene_css__["c" /* mixin */].fit(), {
    borderRadius: "inherit",
    pointerEvents: "none",

    " .pe-shadow__bottom, .pe-shadow__top": [__WEBPACK_IMPORTED_MODULE_2_polythene_css__["c" /* mixin */].fit(), {
      borderRadius: "inherit"
    }],

    ".pe-shadow--animated": {
      " .pe-shadow__bottom, .pe-shadow__top": {
        transition: componentVars.transition
      }
    }
  }, [1, 2, 3, 4, 5].map(function (index) {
    var _ref;

    return _ref = {}, _defineProperty(_ref, " .pe-shadow__top.pe-shadow--z-" + index, shadowDirective(componentVars["shadow-top-z-" + index])), _defineProperty(_ref, " .pe-shadow__bottom.pe-shadow--z-" + index, shadowDirective(componentVars["shadow-bottom-z-" + index])), _ref;
  })])];
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [layout];
var selector = ".pe-shadow";

var customTheme = function customTheme(customSelector, customVars) {
  return __WEBPACK_IMPORTED_MODULE_2_polythene_css__["b" /* styler */].generateStyles([customSelector, selector], _extends$1({}, vars$1, customVars), fns);
};

__WEBPACK_IMPORTED_MODULE_2_polythene_css__["b" /* styler */].generateStyles([selector], vars$1, fns);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var classes = {
  component: "pe-shadow",
  topShadow: "pe-shadow__top",
  bottomShadow: "pe-shadow__bottom",
  animated: "pe-shadow--animated",
  depth_n: "pe-shadow--z-"
};

var view = function view(vnode) {
  var attrs = vnode.attrs;
  var depthClass = "" + classes.depth_n + Math.min(5, attrs.z !== undefined ? attrs.z : 1);
  var element = attrs.element || "div";
  var props = _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_polythene_core__["c" /* filterSupportedAttributes */])(attrs), {
    class: [classes.component, attrs.animated && classes.animated, attrs.class].join(" ")
  });
  var content = attrs.content ? attrs.content : attrs.children || vnode.children;
  var shadowContent = [content, __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
    class: [classes.bottomShadow, depthClass].join(" ")
  }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
    class: [classes.topShadow, depthClass].join(" ")
  })];
  return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(element, props, [attrs.before, shadowContent, attrs.after]);
};

var shadow = {
  theme: customTheme, // accepts (selector, vars)
  view: view
};

/* harmony default export */ __webpack_exports__["a"] = (shadow);


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_button__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_shadow__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_polythene_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_polythene_theme__ = __webpack_require__(2);
/* unused harmony export classes */
/* unused harmony export vars */







var rgba = __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].rgba;

var vars$1 = {
  color_light_background: "#e0e0e0", // grey-300
  color_light_text: rgba(__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].blend_light_text_primary),
  color_light_hover_background: "transparent",
  color_light_focus_background: rgba(__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].blend_light_background_hover),
  color_light_active_background: rgba(__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].blend_light_background_hover), // same as hover
  color_light_disabled_background: rgba(__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].blend_light_background_disabled),
  color_light_disabled_text: rgba(__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].blend_light_text_disabled),

  color_dark_background: rgba(__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_primary),
  color_dark_text: rgba(__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].blend_dark_text_primary),
  color_dark_hover_background: __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_primary_active,
  color_dark_focus_background: __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_primary_active,
  color_dark_active_background: __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_primary_dark,
  color_dark_disabled_background: rgba(__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].blend_dark_background_disabled),
  color_dark_disabled_text: rgba(__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].blend_dark_text_disabled)
};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = function style(scopes, selector, componentVars, tint) {
  var normalBorder = componentVars["color_" + tint + "_border"] || "transparent";
  var activeBorder = componentVars["color_" + tint + "_active_border"] || normalBorder;
  var disabledBorder = componentVars["color_" + tint + "_disabled_border"] || normalBorder;
  return [_defineProperty({}, scopes.map(function (s) {
    return s + selector;
  }).join(","), {
    "&, &:link, &:visited": {
      color: componentVars["color_" + tint + "_text"]
    },

    " .pe-button__content": {
      backgroundColor: componentVars["color_" + tint + "_background"],
      borderColor: normalBorder
    },

    ".pe-button--disabled": {
      color: componentVars["color_" + tint + "_disabled_text"],

      " .pe-button__content": {
        backgroundColor: componentVars["color_" + tint + "_disabled_background"],
        borderColor: disabledBorder
      }
    },

    ".pe-button--selected": {
      " .pe-button__content": {
        backgroundColor: componentVars["color_" + tint + "_active_background"],
        borderColor: activeBorder
      },
      " .pe-button__focus": {
        opacity: 1,
        backgroundColor: componentVars["color_" + tint + "_focus_background"]
      }
    },

    ".pe-button--focus": {
      " .pe-button__focus": {
        opacity: 1,
        backgroundColor: componentVars["color_" + tint + "_focus_background"]
      }
    }
  })];
};

var noTouchStyle = function noTouchStyle(scopes, selector, componentVars, tint) {
  var normalBorder = componentVars["color_" + tint + "_border"];
  var hoverBorder = componentVars["color_" + tint + "_border"] || normalBorder;
  return [_defineProperty({}, scopes.map(function (s) {
    return s + selector + ":hover";
  }).join(","), {
    ":not(.pe-button--selected):not(.pe-button--inactive) .pe-button__wash": {
      backgroundColor: componentVars["color_" + tint + "_hover_background"],
      borderColor: hoverBorder
    }
  })];
};

var color = (function (selector, componentVars) {
  return [style([".pe-dark-theme", ".pe-dark-theme "], selector, componentVars, "dark"), // has/inside dark theme
  style(["", ".pe-light-theme", ".pe-light-theme "], selector, componentVars, "light"), // normal, has/inside light theme
  noTouchStyle(["html.pe-no-touch .pe-dark-theme "], selector, componentVars, "dark"), // inside dark theme
  noTouchStyle(["html.pe-no-touch ", "html.pe-no-touch .pe-light-theme "], selector, componentVars, "light")];
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [color];
var selector = ".pe-button.pe-text-button.pe-raised-button";

var customTheme = function customTheme(customSelector, customVars) {
  return __WEBPACK_IMPORTED_MODULE_4_polythene_css__["b" /* styler */].generateStyles([customSelector, selector], _extends$1({}, vars$1, customVars), fns);
};

__WEBPACK_IMPORTED_MODULE_4_polythene_css__["b" /* styler */].generateStyles([selector], vars$1, fns);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var classes = {
  component: "pe-button pe-text-button pe-raised-button"
};

var MAX_Z = 5;

var tapStart = void 0;
var tapEndAll = function tapEndAll() {};
var downButtons = [];

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_polythene_core__["g" /* subscribe */])(__WEBPACK_IMPORTED_MODULE_3_polythene_core__["j" /* touchEndEvent */], function () {
  return tapEndAll();
});

var animateZ = function animateZ(state, attrs, name) {
  var zBase = state.zBase;
  var increase = attrs.increase || 1;
  var z = state.z;
  if (name === "down" && zBase !== 5) {
    z = Math.min(z + increase, MAX_Z);
  } else if (name === "up") {
    z = Math.max(z - increase, zBase);
  }
  if (z !== state.z) {
    state.z = z;
    __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.redraw(); // show shadow animation
  }
};

var inactivate = function inactivate(state, attrs) {
  state.inactive = true;
  __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.redraw();
  setTimeout(function () {
    state.inactive = false;
    __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.redraw();
  }, attrs.inactivate * 1000);
};

var initTapEvents = function initTapEvents(el, state, attrs) {
  var tapHandler = function tapHandler(state, attrs, name) {
    if (name === "down") {
      downButtons.push({
        state: state,
        attrs: attrs
      });
    } else if (name === "up") {
      if (attrs.inactivate && !state.inactive) {
        inactivate(state, attrs);
      }
    }
    // no z animation on touch
    var animateOnTap = attrs.animateOnTap !== false ? true : false;
    if (animateOnTap && !__WEBPACK_IMPORTED_MODULE_3_polythene_core__["i" /* isTouch */]) {
      animateZ(state, attrs, name);
    }
  };
  tapStart = function tapStart() {
    return tapHandler(state, attrs, "down");
  };
  tapEndAll = function tapEndAll() {
    downButtons.map(function (btn) {
      tapHandler(btn.state, btn.attrs, "up");
    });
    downButtons = [];
  };
  el.addEventListener(__WEBPACK_IMPORTED_MODULE_3_polythene_core__["k" /* touchStartEvent */], tapStart);
};

var clearTapEvents = function clearTapEvents(el) {
  el.removeEventListener(__WEBPACK_IMPORTED_MODULE_3_polythene_core__["k" /* touchStartEvent */], tapStart);
};

var view = function view(vnode) {
  var attrs = vnode.attrs;
  var state = vnode.state;
  var children = (attrs.children || vnode.children || []).filter(function (c) {
    return c !== void 0;
  });
  return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_button__["a" /* default */], _extends({}, {
    parentClass: [attrs.parentClass || classes.component].join(" "),
    animateOnTap: false,
    shadowComponent: __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_shadow__["a" /* default */], { z: state.z, animated: true }),
    children: children
  }, attrs));
};

var raisedButton = {
  theme: customTheme, // accepts (selector, vars)
  oninit: function oninit(vnode) {
    var z = vnode.attrs.z !== undefined ? vnode.attrs.z : 1;
    vnode.state = _extends(vnode.state, {
      el: undefined,
      zBase: z,
      z: z,
      tapEventsInited: false
    });
  },
  oncreate: function oncreate(vnode) {
    if (!vnode.attrs.disabled && !vnode.state.inactive && !vnode.state.tapEventsInited) {
      vnode.state.el = vnode.dom;
      initTapEvents(vnode.dom, vnode.state, vnode.attrs);
      vnode.state.tapEventsInited = true;
    }
  },
  onremove: function onremove(vnode) {
    if (vnode.state.tapEventsInited) {
      clearTapEvents(vnode.dom);
    }
  },
  view: view
};

/* harmony default export */ __webpack_exports__["a"] = (raisedButton);


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_button__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_dialog__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return shortText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return longText; });
/* unused harmony export cancelOkButtons */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return commonDialogProps; });




var shortText = "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>";

var longText = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(function () {
  return shortText;
}).join("");

var cancelOkButtons = [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_button__["a" /* default */], {
  label: "Cancel",
  events: {
    onclick: function onclick() {
      return __WEBPACK_IMPORTED_MODULE_2_polythene_dialog__["a" /* default */].hide();
    }
  }
}), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_button__["a" /* default */], {
  label: "Discard",
  events: {
    onclick: function onclick() {
      return __WEBPACK_IMPORTED_MODULE_2_polythene_dialog__["a" /* default */].hide();
    }
  }
})];

var commonDialogProps = {
  footer: cancelOkButtons,
  didHide: function didHide() {
    return __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.route.set("/dialog");
  }
};

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_shadow__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_polythene_theme__ = __webpack_require__(2);
/* unused harmony export classes */
/* unused harmony export vars */






var rgba = __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].rgba;

var vars$1 = {
  sizes: [1, 1.5, 2, 3, 4, 5, 6, 7],
  min_size: 1.5,
  max_size_small_screen: 5,
  size_factor: __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].grid_unit_menu,
  border_radius: __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].unit_block_border_radius,

  color_light_background: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_light_background),
  color_dark_background: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_dark_background)
  // text colors are set by content, usually list tiles
};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var unifySize$1 = function unifySize(componentVars, size) {
  return size < componentVars.min_size ? componentVars.min_size : size;
};

var widthClass$1 = function widthClass(size) {
  var sizeStr = size.toString().replace(".", "-");
  return "pe-menu--width-" + sizeStr;
};

var widthStyle = function widthStyle(componentVars, size) {
  var s = unifySize$1(componentVars, size);
  return _defineProperty({}, "&." + widthClass$1(s), {
    width: componentVars.size_factor * s + "px",
    "max-width": "100%"
  });
};

var layout = (function (selector, componentVars) {
  return [_defineProperty({}, selector, [componentVars.sizes.map(function (size) {
    return widthStyle(componentVars, size);
  }), _defineProperty({
    transitionTimingFunction: "ease-out",
    transitionProperty: "opacity",
    zIndex: __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].z_menu,
    opacity: 0,
    position: "absolute",
    width: "100%",
    minWidth: __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].grid_unit_menu * componentVars.min_size + "px",

    "&.pe-menu--width-auto": {
      width: "auto"
    },

    "&.pe-menu--visible": {
      opacity: 1
    },

    "&.pe-menu--permanent": {
      position: "relative",
      opacity: 1,
      zIndex: 0
    },

    " .pe-menu__content": {
      width: "100%",
      borderRadius: componentVars.border_radius + "px"
    }

  }, "@media (max-width: " + __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].unit_screen_size_large + "px)", {
    "max-width": componentVars.max_size_small_screen * __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].grid_unit_menu + "px"
  })])];
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = function style(scopes, selector, componentVars, tint) {
  return [_defineProperty$1({}, scopes.map(function (s) {
    return s + selector;
  }).join(","), {
    " .pe-menu__content": {
      "background-color": componentVars["color_" + tint + "_background"]
    }
  })];
};

var color = (function (selector, componentVars) {
  return [style([".pe-dark-theme", ".pe-dark-theme "], selector, componentVars, "dark"), // has/inside dark theme
  style(["", ".pe-light-theme", ".pe-light-theme "], selector, componentVars, "light")];
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [layout, color];
var selector = ".pe-menu";

var customTheme = function customTheme(customSelector, customVars) {
  return __WEBPACK_IMPORTED_MODULE_3_polythene_css__["b" /* styler */].generateStyles([customSelector, selector], _extends$1({}, vars$1, customVars), fns);
};

__WEBPACK_IMPORTED_MODULE_3_polythene_css__["b" /* styler */].generateStyles([selector], vars$1, fns);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var classes = {
  component: "pe-menu",
  content: "pe-menu__content",
  placeholder: "pe-menu__placeholder",
  target: "pe-menu__target",
  visible: "pe-menu--visible",
  permanent: "pe-menu--permanent",
  width_n: "pe-menu--width-",
  width_auto: "pe-menu--width-auto",

  // lookup
  listTile: "pe-list-tile",
  selectedListTile: "pe-list-tile--selected"
};

var SHADOW_Z = 1;
var OFFSET_V = -8;
var DEFAULT_OFFSET_H = 16;
var MIN_SIZE = 1.5;

var positionMenu = function positionMenu(state, attrs) {
  if (!attrs.target) {
    return;
  }
  var targetEl = document.querySelector("#" + attrs.target);
  if (!targetEl) {
    return;
  }
  var offsetH = attrs.offset !== undefined ? attrs.offset : DEFAULT_OFFSET_H;
  var menuEl = state.el;
  if (!menuEl) {
    return;
  }
  var contentEl = state.el.querySelector("." + classes.content);
  var origin = attrs.origin || "top-left";
  var reposition = attrs.reposition === false ? false : true;
  var positionOffset = 0;
  if (reposition) {
    var firstItem = contentEl.querySelectorAll("." + classes.listTile)[0];
    var selectedItem = contentEl.querySelector("." + classes.selectedListTile);
    if (firstItem && selectedItem) {
      // calculate v position: menu should shift upward relative to the first item
      var firstItemRect = firstItem.getBoundingClientRect();
      var selectedItemRect = selectedItem.getBoundingClientRect();
      positionOffset = selectedItemRect.top - firstItemRect.top;
    }
    // align to middle of target
    var alignEl = selectedItem || firstItem;
    var alignRect = alignEl.getBoundingClientRect();
    var _targetRect = targetEl.getBoundingClientRect();
    var heightDiff = alignRect.height - _targetRect.height;
    positionOffset += heightDiff / 2;
  }
  var targetRect = targetEl.getBoundingClientRect();
  if (menuEl.parentNode) {
    var parentRect = menuEl.parentNode.getBoundingClientRect();
    var alignLeft = function alignLeft() {
      return menuEl.style.left = targetRect.left - parentRect.left + offsetH + "px";
    };
    var alignRight = function alignRight() {
      return menuEl.style.right = targetRect.right - parentRect.right + offsetH + "px";
    };
    var alignTop = function alignTop() {
      return menuEl.style.top = targetRect.top - parentRect.top - positionOffset + OFFSET_V + "px";
    };
    var alignBottom = function alignBottom() {
      return menuEl.style.bottom = targetRect.bottom - parentRect.bottom - positionOffset + "px";
    };
    var alignFn = {
      "top-left": function topLeft() {
        return alignTop() && alignLeft();
      },
      "top-right": function topRight() {
        return alignTop() && alignRight();
      },
      "bottom-left": function bottomLeft() {
        return alignBottom() && alignLeft();
      },
      "bottom-right": function bottomRight() {
        return alignBottom() && alignRight();
      }
    };
    alignFn[origin].call();
  }
};

var showMenu = function showMenu(state, attrs) {
  state.isTransitioning = true;
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_polythene_core__["a" /* show */])(_extends({}, attrs, {
    el: state.el,
    showClass: classes.visible
  })).then(function () {
    state.isTransitioning = false;
    state.visible = true;
    if (attrs.didShow) {
      attrs.didShow(attrs.id);
    }
  });
};

var hideMenu = function hideMenu(state, attrs) {
  state.isTransitioning = true;
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_polythene_core__["b" /* hide */])(_extends({}, attrs, {
    el: state.el,
    showClass: classes.visible
  })).then(function () {
    state.isTransitioning = false;
    state.visible = false;
    if (attrs.didHide) {
      attrs.didHide(attrs.id);
    }
    __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.redraw(); // removes remainder of drawn component
  });
};

var unifySize = function unifySize(size) {
  return size < MIN_SIZE ? MIN_SIZE : size;
};

var widthClass = function widthClass(size) {
  return classes.width_n + size.toString().replace(".", "-");
};

var createView = function createView(vnode) {
  var attrs = vnode.attrs;
  var state = vnode.state;
  var listenEl = document.body;

  var activateDismissTap = function activateDismissTap() {
    listenEl.addEventListener("click", handleDismissTap);
  };

  var deActivateDismissTap = function deActivateDismissTap() {
    listenEl.removeEventListener("click", handleDismissTap);
  };

  var handleDismissTap = function handleDismissTap(e) {
    if (e.target === state.el) {
      return;
    }
    deActivateDismissTap();
    if (e.defaultPrevented) {
      // clicked on .pe-menu__content
      hideMenu(state, attrs);
    } else {
      hideMenu(state, _extends({}, attrs, {
        hideDelay: 0
      }));
    }
  };

  var update = function update() {
    positionMenu(state, attrs);
    __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.redraw();
  };

  var handleEscape = function handleEscape(e) {
    if (e.which === 27) {
      hideMenu(state, _extends({}, attrs, {
        hideDelay: 0
      }));
    }
  };

  var element = attrs.element || "div";
  var props = _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_polythene_core__["c" /* filterSupportedAttributes */])(attrs), {
    class: [classes.component, attrs.permanent ? classes.permanent : null, attrs.target ? classes.target : null, attrs.size ? widthClass(unifySize(attrs.size)) : null, attrs.tone === "dark" ? "pe-dark-theme" : null, attrs.tone === "light" ? "pe-light-theme" : null, attrs.class].join(" "),
    oncreate: function oncreate(_ref) {
      var dom = _ref.dom;

      state.el = dom;
      if (!attrs.permanent) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_polythene_core__["g" /* subscribe */])("resize", update);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_polythene_core__["g" /* subscribe */])("keydown", handleEscape);
        setTimeout(function () {
          activateDismissTap();
          showMenu(state, attrs);
        }, 0);
      }
      positionMenu(state, attrs);
    },
    onremove: function onremove() {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_polythene_core__["f" /* unsubscribe */])("resize", update);
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_polythene_core__["f" /* unsubscribe */])("keydown", handleEscape);
      if (!attrs.permanent) {
        deActivateDismissTap();
      }
    }
  });
  var content = __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
    class: classes.content,
    onclick: function onclick(e) {
      return e.preventDefault();
    },
    style: attrs.style
  }, [state.z > 0 && __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_shadow__["a" /* default */], {
    z: state.z,
    animated: true
  }), attrs.content ? attrs.content : vnode.children]);
  return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(element, props, [attrs.before, content, attrs.after]);
};

var menu = {
  theme: customTheme, // accepts (selector, vars)
  oninit: function oninit(vnode) {
    var attrs = vnode.attrs;
    vnode.state = _extends(vnode.state, {
      z: attrs.z !== undefined ? attrs.z : SHADOW_Z,
      el: null,
      isTransitioning: false,
      visible: attrs.permanent || false
    });
  },
  view: function view(vnode) {
    if (vnode.attrs.show) {
      vnode.state.visible = true;
    }
    return vnode.state.visible ? createView(vnode) : __WEBPACK_IMPORTED_MODULE_0_mithril___default()("span", {
      class: classes.placeholder
    });
  }
};

/* harmony default export */ __webpack_exports__["a"] = (menu);


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_theme__ = __webpack_require__(2);
/* unused harmony export classes */
/* unused harmony export vars */





var rgba = __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].rgba;
var line_height_input = 20;
var input_padding_v = 7;

var vars$1 = {
  vertical_spacing_top: 6, // 8 minus natural label height padding (1)
  vertical_spacing_bottom: 7, // 8 minus natural label height padding (1)
  input_focus_border_width: 2,
  input_focus_border_animation_duration: __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].animation_duration,

  floating_label_vertical_spacing_top: 30, // 16 + 8 + 8 minus natural label height padding (2)
  floating_label_vertical_spacing_bottom: 7, // 8 minus natural label height padding (1)
  floating_label_top: 14,
  floating_label_animation_duration: ".12s",

  input_padding_h: 0,
  input_padding_v: input_padding_v,
  input_border_width: 1,
  margin_top_error_message: 6,
  font_size_input: 16,
  font_size_error: 12,
  font_size_floating_label: 12,

  line_height_input: line_height_input,

  dense_floating_label_vertical_spacing_top: 23, // 12 + 8 + 4 minus natural label height padding (1)
  dense_floating_label_vertical_spacing_bottom: 4, // 8 minus natural label height padding (1)
  dense_floating_label_top: 10,
  dense_font_size_input: 13,
  dense_font_size_floating_label: 13,

  full_width_input_padding_h: 20,
  full_width_input_padding_v: 18, // 20 minus natural label height padding (2)

  dense_full_width_input_padding_h: 16,
  dense_full_width_input_padding_v: 15, // 16 minus natural label height padding (1)
  dense_full_width_font_size_input: 13,

  color_light_input_text: rgba(__WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].blend_light_text_primary),
  color_light_input_background: "transparent", // only used to "remove" autofill color
  color_light_highlight_text: rgba(__WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].color_primary, __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].blend_light_text_primary),
  color_light_input_bottom_border: rgba(__WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].blend_light_border_light),
  color_light_input_error_text: rgba("221, 44, 0"),
  color_light_input_error_border: rgba("221, 44, 0"),
  color_light_input_placeholder: rgba(__WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].blend_light_text_tertiary),
  color_light_label_text: rgba(__WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].blend_light_text_tertiary),
  color_light_disabled_label_text: rgba(__WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].blend_light_text_disabled),
  color_light_readonly_label_text: rgba(__WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].blend_light_text_tertiary),
  color_light_help_text: rgba(__WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].blend_light_text_tertiary),
  color_light_required_symbol: rgba("221, 44, 0"),
  color_light_focus_border: rgba(__WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].color_primary),
  color_light_counter_ok_border: rgba(__WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].color_primary),

  color_dark_input_text: rgba(__WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].blend_dark_text_primary),
  color_dark_input_background: "transparent", // only used to "remove" autofill color
  color_dark_highlight_text: rgba(__WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].color_primary, __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].blend_dark_text_primary),
  color_dark_input_bottom_border: rgba(__WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].blend_dark_border_light),
  color_dark_input_error_text: rgba("222, 50, 38"),
  color_dark_input_error_border: rgba("222, 50, 38"),
  color_dark_input_placeholder: rgba(__WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].blend_dark_text_tertiary),
  color_dark_label_text: rgba(__WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].blend_dark_text_tertiary),
  color_dark_disabled_label_text: rgba(__WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].blend_dark_text_disabled),
  color_dark_readonly_label_text: rgba(__WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].blend_dark_text_tertiary),
  color_dark_help_text: rgba(__WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].blend_dark_text_tertiary),
  color_dark_required_symbol: rgba("221, 44, 0"),
  color_dark_focus_border: rgba(__WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].color_primary),
  color_dark_counter_ok_border: rgba(__WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].color_primary)
};

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var layout = (function (selector, componentVars) {
  return [_defineProperty$1({}, selector, [__WEBPACK_IMPORTED_MODULE_2_polythene_css__["c" /* mixin */].clearfix(), {
    position: "relative",
    lineHeight: __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].line_height,
    display: "inline-block",
    boxSizing: "border-box",
    margin: 0,
    overflow: "visible", // Firefox needs this
    paddingBottom: componentVars.vertical_spacing_bottom + "px",
    width: "100%",
    maxWidth: "100%",

    " .pe-textfield__input-area": {
      position: "relative",
      paddingTop: componentVars.vertical_spacing_top + "px",

      "&:after": [__WEBPACK_IMPORTED_MODULE_2_polythene_css__["c" /* mixin */].defaultTransition("opacity", componentVars.input_focus_border_animation_duration), {
        position: "absolute",
        content: "\"\"",
        bottom: 0,
        left: 0,
        height: componentVars.input_focus_border_width + "px",
        width: "100%",
        opacity: 0
      }]
    },
    ".pe-textfield--focused .pe-textfield__input-area:after": {
      opacity: 1
    },

    " .pe-textfield__input": {
      display: "block",
      fontSize: componentVars.font_size_input + "px",
      lineHeight: componentVars.line_height_input + "px",
      width: "100%",
      background: "none",
      textAlign: "left",
      color: "inherit",
      borderWidth: componentVars.input_border_width + "px",
      borderStyle: "none none solid none",
      borderRadius: 0,
      margin: 0,
      padding: componentVars.input_padding_v + "px " + componentVars.input_padding_h + "px",

      // disable glow on textfield--invalid fields
      "&:textfield--invalid": {
        boxShadow: "none"
      },
      ":invalid": {
        boxShadow: "none"
      }
    },
    " textarea.pe-textfield__input": {
      margin: componentVars.input_padding_v + "px " + componentVars.input_padding_h + "px",
      padding: 0,
      display: "block"
    },

    // focus border
    " textfield__input:focus, &.pe-textfield--focused .pe-textfield__input": {
      "border-width": componentVars.input_border_width + "px",
      outline: "none"
    },

    " .pe-textfield__label": {
      position: "absolute",
      display: "block",
      top: componentVars.vertical_spacing_top + componentVars.input_padding_v + "px",
      bottom: 0,
      left: componentVars.input_padding_h + "px",
      right: componentVars.input_padding_h + "px",
      fontSize: componentVars.font_size_input + "px",
      lineHeight: componentVars.line_height_input + "px",
      pointerEvents: "none",
      whiteSpace: "nowrap",
      textAlign: "left",
      cursor: "text"
    },
    ".pe-textfield--dirty .pe-textfield__label": {
      visibility: "hidden"
    },

    "&:not(.pe-textfield--no-char)": {
      " .pe-textfield__required-indicator, .pe-textfield__optional-indicator": {
        padding: "0 0 0 .25em"
      }
    },

    ".pe-textfield--floating-label": {
      paddingBottom: componentVars.floating_label_vertical_spacing_bottom + "px",

      " .pe-textfield__input-area": {
        paddingTop: componentVars.floating_label_vertical_spacing_top + "px"
      },

      " .pe-textfield__label": [__WEBPACK_IMPORTED_MODULE_2_polythene_css__["c" /* mixin */].defaultTransition("all", componentVars.floating_label_animation_duration), {
        top: componentVars.floating_label_vertical_spacing_top + componentVars.input_padding_v + "px"
      }],

      ".pe-textfield--focused, &.pe-textfield--dirty": {
        " .pe-textfield__label": {
          fontSize: componentVars.font_size_floating_label + "px",
          top: componentVars.floating_label_top + "px",
          visibility: "visible"
        }
      },

      ".pe-textfield--dense": {
        fontSize: componentVars.dense_font_size_input + "px",
        paddingBottom: componentVars.dense_floating_label_vertical_spacing_bottom + "px",

        " .pe-textfield__input-area": {
          paddingTop: componentVars.dense_floating_label_vertical_spacing_top + "px"
        },

        " .pe-textfield__input": {
          fontSize: componentVars.dense_font_size_input + "px"
        },
        " .pe-textfield__label": {
          fontSize: componentVars.dense_font_size_input + "px",
          top: componentVars.dense_floating_label_vertical_spacing_top + componentVars.input_padding_v + "px"
        },

        ".pe-textfield--focused, &.pe-textfield--dirty": {
          " .pe-textfield__label": {
            fontSize: componentVars.dense_font_size_floating_label + "px",
            top: componentVars.dense_floating_label_top + "px"
          }
        }
      }
    },

    ".pe-textfield--disabled, &.pe-textfield--readonly": {
      " .pe-textfield__label": {
        cursor: "auto"
      },
      " .pe-textfield__input": {
        "border-bottom": "none"
      },
      " .pe-textfield__input-area:after": {
        opacity: 1,
        height: "1px",
        bottom: "-1px",
        backgroundPosition: "top",
        backgroundSize: "4px 1px",
        backgroundRepeat: "repeat-x"
      }
    },

    " .pe-textfield__error, .pe-textfield__error-placeholder, .pe-textfield__help, .pe-textfield__counter": {
      marginTop: componentVars.margin_top_error_message + "px",
      fontSize: componentVars.font_size_error + "px",
      lineHeight: __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].line_height,
      minHeight: componentVars.font_size_error * __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].line_height + "px"
    },

    " .pe-textfield__counter": {
      textAlign: "right",
      float: "right",
      padding: "0 0 0 16px"
    },

    " .pe-textfield__help-focus": [__WEBPACK_IMPORTED_MODULE_2_polythene_css__["c" /* mixin */].defaultTransition("opacity"), {
      opacity: 0
    }],
    ".pe-textfield--focused .pe-textfield__help-focus, &.pe-textfield--dirty .pe-textfield__help-focus": {
      opacity: 1
    },

    ".pe-textfield--hide-clear": {
      " .pe-textfield__input::-ms-clear": {
        display: "none"
      }
    },
    ".pe-textfield--hide-spinner": {
      " input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button": {
        "-webkit-appearance": "none",
        margin: 0
      },
      " input[type=number]": {
        "-moz-appearance": "textfield"
      }
    }
  }, {
    ".pe-textfield--full-width": {
      width: "100%",
      padding: 0,

      " .pe-textfield__input-area": {
        padding: 0
      },

      " .pe-textfield__input": {
        padding: componentVars.full_width_input_padding_v + "px " + componentVars.full_width_input_padding_h + "px"
      },

      " .pe-textfield__error, .pe-textfield__help, .pe-textfield__counter": {
        paddingLeft: componentVars.full_width_input_padding_h + "px",
        paddingRight: componentVars.full_width_input_padding_h + "px"
      },

      " .pe-textfield__label": {
        top: componentVars.full_width_input_padding_v + "px",
        left: componentVars.full_width_input_padding_h + "px",
        right: componentVars.full_width_input_padding_h + "px"
      },

      ".pe-textfield--dense": {
        " .pe-textfield__input": {
          fontSize: componentVars.dense_full_width_font_size_input + "px",
          padding: componentVars.dense_full_width_input_padding_v + "px " + componentVars.dense_full_width_input_padding_h + "px"
        },
        " .pe-textfield__label": {
          fontSize: componentVars.dense_full_width_font_size_input + "px",
          top: componentVars.dense_full_width_input_padding_v + "px",
          left: componentVars.dense_full_width_input_padding_h + "px",
          right: componentVars.dense_full_width_input_padding_h + "px"
        }
      }
    }
  }])];
});

function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = function style(scopes, selector, componentVars, tint) {
  return [_defineProperty$2({}, scopes.map(function (s) {
    return s + selector;
  }).join(","), {
    // border color
    color: componentVars["color_" + tint + "_focus_border"], // override by specifying "color"

    " .pe-textfield__input-area": {
      color: "inherit",
      backgroundColor: componentVars["color_" + tint + "_input_background"],

      "&:after": {
        backgroundColor: "currentcolor"
      }
    },
    "&.pe-textfield--counter ": {
      " .pe-textfield__input-area:after": {
        backgroundColor: componentVars["color_" + tint + "_counter_ok_border"]
      }
    },

    " .pe-textfield__input": {
      color: componentVars["color_" + tint + "_input_text"],
      borderColor: componentVars["color_" + tint + "_input_bottom_border"]
    },

    " .pe-textfield__label": {
      color: componentVars["color_" + tint + "_label_text"]
    },

    "&.pe-textfield--disabled, &.pe-textfield--readonly": {
      " .pe-textfield__input-area:after": {
        backgroundColor: "transparent",
        backgroundImage: "linear-gradient(to right, " + componentVars["color_" + tint + "_disabled_label_text"] + " 20%, rgba(255, 255, 255, 0) 0%)"
      }
    },

    "&.pe-textfield--disabled": {
      " .pe-textfield__input, .pe-textfield__label": {
        color: componentVars["color_" + tint + "_disabled_label_text"]
      }
    },

    "&.pe-textfield--readonly": {
      " .pe-textfield__input, .pe-textfield__label": {
        color: componentVars["color_" + tint + "_readonly_label_text"]
      }
    },

    "&.pe-textfield--focused": {
      // note: not when textfield--dirty and not textfield--focused
      "&.pe-textfield--floating-label .pe-textfield__label": {
        color: componentVars["color_" + tint + "_highlight_text"]
      },

      "&.pe-textfield--required.pe-textfield--floating-label": {
        " .pe-textfield__required-indicator": {
          color: componentVars["color_" + tint + "_required_symbol"]
        }
      }
    },

    " .pe-textfield__help, .pe-textfield__counter": {
      color: componentVars["color_" + tint + "_help_text"]
    },

    "&.pe-textfield--invalid:not(.pe-textfield--hide-validation)": {
      " .pe-textfield__input": {
        borderColor: componentVars["color_" + tint + "_input_error_border"],
        boxShadow: "none"
      },
      " .pe-textfield__label": {
        color: componentVars["color_" + tint + "_input_error_text"]
      },
      " .pe-textfield__error, .pe-textfield__counter, .pe-textfield__help": {
        color: componentVars["color_" + tint + "_input_error_text"]
      },
      "&.pe-textfield--required .pe-textfield__label": {
        color: componentVars["color_" + tint + "_input_error_text"]
      },
      "&, &.pe-textfield--counter": {
        " .pe-textfield__input-area:after": {
          backgroundColor: componentVars["color_" + tint + "_input_error_border"]
        }
      }
    },

    " .pe-textfield__input:-webkit-autofill": {
      "-webkit-box-shadow": "0 0 0px 1000px " + componentVars["color_" + tint + "_input_background"] + " inset",
      color: componentVars["color_" + tint + "_input_text"] + " !important"
    }
  })];
};

var color = (function (selector, componentVars) {
  return [style([".pe-dark-theme", ".pe-dark-theme "], selector, componentVars, "dark"), // has/inside dark theme
  style(["", ".pe-light-theme", ".pe-light-theme "], selector, componentVars, "light")];
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [layout, color];
var selector = ".pe-textfield";

var customTheme = function customTheme(customSelector, customVars) {
  return __WEBPACK_IMPORTED_MODULE_2_polythene_css__["b" /* styler */].generateStyles([customSelector, selector], _extends$1({}, vars$1, customVars), fns);
};

__WEBPACK_IMPORTED_MODULE_2_polythene_css__["b" /* styler */].generateStyles([selector], vars$1, fns);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var classes = {
  component: "pe-textfield",
  inputArea: "pe-textfield__input-area",
  input: "pe-textfield__input",
  label: "pe-textfield__label",
  counter: "pe-textfield__counter",
  help: "pe-textfield__help",
  focusHelp: "pe-textfield__help-focus",
  error: "pe-textfield__error",
  errorPlaceholder: "pe-textfield__error-placeholder",
  requiredIndicator: "pe-textfield__required-indicator",
  optionalIndicator: "pe-textfield__optional-indicator",
  stateFocused: "pe-textfield--focused",
  stateDisabled: "pe-textfield--disabled",
  stateReadonly: "pe-textfield--readonly",
  stateInvalid: "pe-textfield--invalid",
  stateDirty: "pe-textfield--dirty",
  hasFloatingLabel: "pe-textfield--floating-label",
  isDense: "pe-textfield--dense",
  isRequired: "pe-textfield--required",
  hasFullWidth: "pe-textfield--full-width",
  hasCounter: "pe-textfield--counter",
  hideSpinner: "pe-textfield--hide-spinner",
  hideClear: "pe-textfield--hide-clear",
  hideValidation: "pe-textfield--hide-validation"
};

var validateCustom = function validateCustom(state, attrs) {
  var validState = attrs.validate(state.value);
  return {
    invalid: validState && !validState.valid,
    message: validState && validState.error
  };
};

var validateCounter = function validateCounter(state, attrs) {
  return {
    invalid: state.value.length > attrs.counter,
    message: attrs.error
  };
};

var validateHTML = function validateHTML(state, attrs) {
  return {
    invalid: !state.inputEl().checkValidity(),
    message: attrs.error
  };
};

var getValidStatus = function getValidStatus(state, attrs) {
  var status = {
    invalid: false,
    message: undefined
  };

  // validateResetOnClear: reset validation when field is cleared
  if (state.touched && state.isInvalid && state.value.length === 0 && attrs.validateResetOnClear) {
    state.touched = false;
    state.isInvalid = false;
    state.error = undefined;
  }

  if (!status.invalid && attrs.counter) {
    status = validateCounter(state, attrs);
  }
  if (!status.invalid && state.inputEl() && state.inputEl().checkValidity) {
    status = validateHTML(state, attrs);
  }
  if (!status.invalid && attrs.validate) {
    status = validateCustom(state, attrs);
  }
  return status;
};

var checkValidity = function checkValidity(state, attrs) {
  // default
  var status = !state.touched && !attrs.validateAtStart ? {
    invalid: false,
    message: undefined
  } : getValidStatus(state, attrs);
  var previousInvalid = state.isInvalid;
  state.error = status.message;
  state.isInvalid = status.invalid;
  if (status.invalid !== previousInvalid) {
    setTimeout(__WEBPACK_IMPORTED_MODULE_0_mithril___default.a.redraw, 0);
  }
  if (!status.invalid) {
    state.error = undefined;
  }
};

// dirty = contains text
var checkDirty = function checkDirty(state) {
  return state.isDirty = state.value.toString().length > 0;
};

var updateState = function updateState(state, attrs) {
  return checkValidity(state, attrs), checkDirty(state);
};

var notifyState = function notifyState(state, attrs) {
  if (attrs.getState) {
    // get status directly without updating controller
    var status = getValidStatus(state, attrs);
    attrs.getState({
      focus: state.focus(),
      dirty: state.isDirty,
      value: state.value,
      el: state.inputEl(),
      invalid: status.invalid,
      error: status.error
    });
  }
};

var ignoreEvent = function ignoreEvent(attrs, name) {
  return attrs.ignoreEvents && attrs.ignoreEvents.indexOf(name) !== -1;
};

var view = function view(_ref) {
  var state = _ref.state,
      attrs = _ref.attrs;

  // Early state update to prevent a flash (which would happen if the update is done in oncreate)
  updateState(state, attrs);

  var inputEl = state.inputEl();
  var isInvalid = state.isInvalid;
  var element = attrs.element || "div";
  var inputType = attrs.multiline ? "textarea" : "input";
  var type = attrs.multiline ? null : !attrs.type || attrs.type === "submit" || attrs.type === "search" ? "text" : attrs.type;
  var showError = isInvalid && state.error;
  var validates = attrs.validate || attrs.min || attrs.max || attrs.minlength || attrs.required || attrs.pattern;
  var inactive = attrs.disabled || attrs.readonly;

  if (attrs.focus && !state.focus() && !inactive) {
    state.focus(true);
    if (inputEl) {
      inputEl.focus();
    }
  }

  // Only update from outside if the field is not being edited
  if (typeof attrs.value === "function" && inputEl && !state.focus() && !inactive) {
    var value = attrs.value().toString();
    state.value = value;
    state.touched = true;
    updateState(state, attrs);
    notifyState(state, attrs);
    inputEl.value = value;
  }

  var props = _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_polythene_core__["c" /* filterSupportedAttributes */])(attrs), {
    class: [classes.component, isInvalid ? classes.stateInvalid : "", state.focus() ? classes.stateFocused : "", attrs.floatingLabel ? classes.hasFloatingLabel : "", attrs.disabled ? classes.stateDisabled : "", attrs.readonly ? classes.stateReadonly : "", state.isDirty ? classes.stateDirty : "", attrs.dense ? classes.isDense : "", attrs.required ? classes.isRequired : "", attrs.fullWidth ? classes.hasFullWidth : "", attrs.counter ? classes.hasCounter : "", attrs.hideSpinner !== false ? classes.hideSpinner : "", attrs.hideClear !== false ? classes.hideClear : "", attrs.hideValidation ? classes.hideValidation : "", attrs.tone === "dark" ? "pe-dark-theme" : null, attrs.tone === "light" ? "pe-light-theme" : null, attrs.class].join(" "),
    oncreate: function oncreate(_ref2) {
      var dom = _ref2.dom;

      state.el = dom;
      if (!inactive) {
        updateState(state, attrs);
      }
    }
  });

  var requiredIndicator = attrs.required && attrs.requiredIndicator !== "" ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()("span", { class: classes.requiredIndicator }, attrs.requiredIndicator || "*") : null;
  var optionalIndicator = !attrs.required && attrs.optionalIndicator ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()("span", { class: classes.optionalIndicator }, attrs.optionalIndicator) : null;
  var label = attrs.label ? [attrs.label, requiredIndicator, optionalIndicator] : null;

  var content = [__WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
    class: classes.inputArea
  }, [label ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()("label", _defineProperty({
    class: classes.label
  }, "on" + __WEBPACK_IMPORTED_MODULE_1_polythene_core__["k" /* touchStartEvent */], function () {
    if (!inactive) {
      setTimeout(function () {
        state.inputEl().focus();
      }, 0);
    }
  }), label) : null, __WEBPACK_IMPORTED_MODULE_0_mithril___default()(inputType, _extends({}, {
    class: classes.input,
    disabled: attrs.disabled
  }, type ? { type: type } : null, attrs.name ? { name: attrs.name } : null, !ignoreEvent(attrs, "onclick") ? {
    onclick: function onclick() {
      if (inactive) {
        return;
      }
      // in case the browser does not give the field focus,
      // for instance when the user tapped to the current field off screen
      state.focus(true);
      notifyState(state, attrs);
    }
  } : null, !ignoreEvent(attrs, "onfocus") ? {
    onfocus: function onfocus() {
      if (inactive) {
        return;
      }
      state.focus(true);
      // set CSS class manually in case field gets focus but is off screen
      // and no redraw is triggered
      // at the next redraw state.focus() will be read and the focus class be set
      // in the props.class statement
      if (state.el) {
        state.el.classList.add(classes.stateFocused);
      }
      notifyState(state, attrs);
    }
  } : null,

  // onblur defined in oncreate
  !ignoreEvent(attrs, "onblur") ? {
    onblur: function onblur(e) {
      state.focus(false);
      state.touched = true;
      state.value = e.target.value;
      updateState(state, attrs);
      notifyState(state, attrs);
      // same principle as onfocus
      state.el.classList.remove(classes.stateFocused);
    }
  } : null, !ignoreEvent(attrs, "oninput") ? {
    oninput: function oninput(e) {
      // default input event
      // may be overwritten by attrs.events
      state.value = e.target.value;
      // Don"t set state.touched to true to prevent error messages popping up while typing
      if (attrs.validateOnInput) {
        state.touched = true;
      }
      updateState(state, attrs);
      notifyState(state, attrs);
      if (attrs.oninput) {
        attrs.oninput(state.value, e);
      }
    }
  } : null, !ignoreEvent(attrs, "onkeydown") ? {
    onkeydown: function onkeydown(e) {
      if (e.which === 13) {
        // ENTER
        state.touched = true;
        updateState(state, attrs);
        notifyState(state, attrs);
      } else if (e.which === 27) {
        // ESCAPE
        state.inputEl().blur(e);
      } else if (e.which === 9) {
        // TAB
        // Update after the blur event when TAB is used to leave the field and no other field will get focus.
        // Safari only needs 1 tick, but Chrome needs more than 150ms to create a distinctive new redraw event.
        // But we also may have buttons that change place (search field), a large timeout works better in general.
        setTimeout(function () {
          __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.redraw();
          setTimeout(__WEBPACK_IMPORTED_MODULE_0_mithril___default.a.redraw, 250);
        }, 1);
      }
    }
  } : null, {
    oncreate: function oncreate(_ref3) {
      var dom = _ref3.dom;

      state.inputEl(dom);
      state.inputEl().value = state.value;
      notifyState(state, attrs);
    }
  }, attrs.events ? attrs.events : null, // NOTE: may overwrite oninput
  attrs.readonly !== undefined ? { readonly: true } : null, attrs.pattern !== undefined ? { pattern: attrs.pattern } : null, attrs.maxlength !== undefined ? { maxlength: attrs.maxlength } : null, attrs.minlength !== undefined ? { minlength: attrs.minlength } : null, attrs.max !== undefined ? { max: attrs.max } : null, attrs.min !== undefined ? { min: attrs.min } : null, attrs.autofocus !== undefined ? { autofocus: attrs.autofocus } : null, attrs.required !== undefined ? { required: attrs.required } : null, attrs.tabindex !== undefined ? { tabindex: attrs.tabindex } : null, attrs.rows !== undefined ? { rows: attrs.rows } : null))]), attrs.counter ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", { class: classes.counter }, state.value.length + " / " + attrs.counter) : null, attrs.help && !showError ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
    class: [classes.help, attrs.focusHelp ? classes.focusHelp : ""].join(" ")
  }, attrs.help) : null, showError ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", { class: classes.error }, state.error) : validates && !attrs.help ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", { class: classes.errorPlaceholder }) : null];
  return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(element, props, [attrs.before, content, attrs.after]);
};

var textfield = {
  theme: customTheme, // accepts (selector, vars)
  oninit: function oninit(vnode) {
    var attrs = vnode.attrs;
    var value = void 0,
        isInvalid = false,
        touched = false,
        // true when any change is made
    error = attrs.error || "",
        el = void 0,
        inputEl = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_polythene_core__["l" /* prop */])(),
        hasFocus = attrs.focus || false;

    if (typeof attrs.value === "function") {
      var v = attrs.value();
      value = v !== undefined ? v : "";
    } else {
      value = attrs.value !== undefined ? attrs.value : "";
    }
    if (value !== "") {
      touched = true;
    }

    var focus = function focus(focusState) {
      // read
      if (focusState === undefined) {
        return hasFocus;
      }
      // write
      hasFocus = focusState;
      if (focusState && inputEl()) {
        // Draw in next tick, to prevent getting an immediate onblur
        // Explicit setting of focus needed for most browsers other than Safari
        setTimeout(function () {
          return inputEl() && inputEl().focus && inputEl().focus();
        }, 0);
      }
    };

    vnode.state = _extends(vnode.state, {
      value: value,
      error: error,
      el: el,
      inputEl: inputEl,
      focus: focus,
      isInvalid: isInvalid,
      touched: touched
    });
  },
  view: view
};

/* harmony default export */ __webpack_exports__["a"] = (textfield);


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_theme__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return classes; });
/* unused harmony export vars */





var rgba = __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].rgba;

var padding_side = __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].grid_unit_component * 2 - 12; // 16 - 12 = 4
var title_padding = __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].grid_unit_component * 9 - __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].grid_unit_component * 6 - padding_side; // 72 - 48 - 4
var height_mobile_portrait = __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].grid_unit_component * 7; // 56
var height_desktop = __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].grid_unit_component * 8; // 64

var vars$1 = {
  padding_side: padding_side,
  title_padding: title_padding,
  indent: __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].unit_indent,
  transition_duration: __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].animation_duration,
  font_size: 18,
  line_height: __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].line_height,

  height: height_desktop,
  height_compact: height_mobile_portrait,

  color_light_text: rgba(__WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].blend_light_text_primary),
  color_dark_text: rgba(__WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].blend_dark_text_primary),

  // default gray background, expected to be overridden
  color_light_background: "#CFD8DC", // blue-gray-100
  color_dark_background: "#37474F" // blue-gray-800
};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var layout = (function (selector, componentVars) {
  return [_defineProperty({}, selector, [__WEBPACK_IMPORTED_MODULE_2_polythene_css__["a" /* flex */].layout, __WEBPACK_IMPORTED_MODULE_2_polythene_css__["a" /* flex */].layoutHorizontal, __WEBPACK_IMPORTED_MODULE_2_polythene_css__["a" /* flex */].layoutCenter, {
    height: componentVars.height + "px",
    fontSize: componentVars.font_size + "px",
    lineHeight: componentVars.line_height + "em",
    padding: "0 " + componentVars.padding_side + "px",

    ".pe-toolbar--compact": {
      height: componentVars.height_compact + "px"
    },

    "> *:not(.disabled)": {
      // make elements (e.g. buttons) respond to mouse/touch events
      pointerEvents: "auto"
    },
    " > span, .pe-toolbar__title, .pe-toolbar__title--indent": [__WEBPACK_IMPORTED_MODULE_2_polythene_css__["a" /* flex */].layout, __WEBPACK_IMPORTED_MODULE_2_polythene_css__["a" /* flex */].flex(1), __WEBPACK_IMPORTED_MODULE_2_polythene_css__["c" /* mixin */].ellipsis(1, __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].line_height, "em"), {
      transformOrigin: "left 50%",
      lineHeight: __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].line_height + "em",
      wordBreak: "break-all"
    }],
    " > span, .pe-toolbar__title": {
      marginLeft: componentVars.title_padding + "px"
    },
    " .pe-toolbar__title--indent": {
      marginLeft: componentVars.indent - componentVars.padding_side + "px"
    },
    " .pe-fit": [__WEBPACK_IMPORTED_MODULE_2_polythene_css__["c" /* mixin */].fit(), {
      margin: 0
    }]
  }])];
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = function style(scopes, selector, componentVars, tint) {
  return [_defineProperty$1({}, scopes.map(function (s) {
    return s + selector;
  }).join(","), {
    color: componentVars["color_" + tint + "_text"],
    backgroundColor: componentVars["color_" + tint + "_background"]
  })];
};

var color = (function (selector, componentVars) {
  return [style([".pe-dark-theme", ".pe-dark-theme "], selector, componentVars, "dark"), // has/inside dark theme
  style(["", ".pe-light-theme", ".pe-light-theme "], selector, componentVars, "light")];
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [layout, color];
var selector = ".pe-toolbar";

var customTheme = function customTheme(customSelector, customVars) {
  return __WEBPACK_IMPORTED_MODULE_2_polythene_css__["b" /* styler */].generateStyles([customSelector, selector], _extends$1({}, vars$1, customVars), fns);
};

__WEBPACK_IMPORTED_MODULE_2_polythene_css__["b" /* styler */].generateStyles([selector], vars$1, fns);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var classes = {
  component: "pe-toolbar",
  compact: "pe-toolbar--compact",
  title: "pe-toolbar__title",
  indentedTitle: "pe-toolbar__title--indent"
};

var view = function view(vnode) {
  var attrs = vnode.attrs;
  var element = attrs.element || "div";
  var props = _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_polythene_core__["c" /* filterSupportedAttributes */])(attrs), {
    class: [classes.component, attrs.compact ? classes.compact : null, attrs.tone === "dark" ? "pe-dark-theme" : null, attrs.tone === "light" ? "pe-light-theme" : null, attrs.class].join(" ")
  }, attrs.events ? attrs.events : null);
  var content = attrs.content ? attrs.content : attrs.children || vnode.children;
  return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(element, props, [attrs.before, content, attrs.after]);
};

var toolbar = {
  theme: customTheme, // accepts (selector, vars)
  view: view
};

/* harmony default export */ __webpack_exports__["a"] = (toolbar);


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_theme__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_polythene_utilities__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return instance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return classes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return vars$1; });






var classes = {
  component: "pe-notification",
  holder: "pe-notification__holder",
  placeholder: "pe-notification__placeholder",
  content: "pe-notification__content",
  title: "pe-notification__title",
  multilineTitle: "pe-notification__title--multiline",
  action: "pe-notification__action",
  horizontal: "pe-notification--horizontal",
  vertical: "pe-notification--vertical",
  hasContainer: "pe-notification--container"
};

var rgba = __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].rgba;

var buttonPaddingH = 8; // padding, inner text space

var vars$1 = {
  width: 274,
  min_height: 80,
  border_radius: __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].unit_block_border_radius,
  title_padding_h: buttonPaddingH,
  title_single_padding_v: 14,
  title_multi_padding_v: 20,
  side_padding: 24 - buttonPaddingH,
  font_size: 14,
  line_height: 20,

  color_light_background: rgba(__WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].color_light_background),
  color_light_text: rgba(__WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].blend_light_dark_primary),

  color_dark_background: rgba(__WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].color_dark_background, .85),
  color_dark_text: rgba(__WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].blend_light_text_primary)
};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var layout = (function (selector, componentVars) {
  return [_defineProperty({}, selector, [__WEBPACK_IMPORTED_MODULE_2_polythene_css__["a" /* flex */].layoutCenter, {
    width: componentVars.width + "px",
    minHeight: componentVars.min_height + "px",
    position: "relative",
    padding: "0 " + componentVars.side_padding + "px",
    margin: "0 auto",
    borderRadius: componentVars.border_radius + "px",
    pointerEvents: "all",

    " .pe-notification__content": {
      width: "100%"
    },

    " .pe-notification__title": {
      padding: componentVars.title_single_padding_v + "px " + componentVars.title_padding_h + "px",
      fontSize: componentVars.font_size + "px",
      lineHeight: componentVars.line_height + "px"
    },

    " .pe-notification__action": {
      " .pe-button": {
        margin: 0
      }
    },

    "&.pe-notification--horizontal": {
      " .pe-notification__content": __WEBPACK_IMPORTED_MODULE_2_polythene_css__["a" /* flex */].layoutHorizontal,
      " .pe-notification__title": __WEBPACK_IMPORTED_MODULE_2_polythene_css__["a" /* flex */].flex(),
      " .pe-notification__title--multi-line": {
        paddingTop: componentVars.title_multi_padding_v + "px",
        paddingBottom: componentVars.title_multi_padding_v + "px"
      },
      " .pe-notification__action": __WEBPACK_IMPORTED_MODULE_2_polythene_css__["a" /* flex */].layoutCenter
    },
    "&.pe-notification--vertical": {
      " .pe-notification__content": __WEBPACK_IMPORTED_MODULE_2_polythene_css__["a" /* flex */].layoutVertical,
      " .pe-notification__title": {
        paddingBottom: "4px"
      },
      " .pe-notification__title--multi-line": {
        paddingTop: componentVars.title_multi_padding_v + "px"
      },
      " .pe-notification__action": __WEBPACK_IMPORTED_MODULE_2_polythene_css__["a" /* flex */].layoutEndJustified
    }
  }])];
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = function style(scopes, selector, componentVars, tint) {
  return [_defineProperty$1({}, scopes.map(function (s) {
    return s + selector;
  }).join(","), {
    color: componentVars["color_" + tint + "_text"],
    background: componentVars["color_" + tint + "_background"]
  })];
};

var color = (function (selector, componentVars) {
  return [style([".pe-dark-theme", ".pe-dark-theme "], selector, componentVars, "dark"), // has/inside dark theme
  style(["", ".pe-light-theme", ".pe-light-theme "], selector, componentVars, "light")];
});

function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var holderLayout = (function (selector) {
  return [_defineProperty$2({}, selector, [__WEBPACK_IMPORTED_MODULE_2_polythene_css__["a" /* flex */].layoutCenterCenter, {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].z_notification,
    pointerEvents: "none",

    ".pe-multiple--screen": {
      position: "fixed"
    },
    ".pe-multiple--container": {
      position: "absolute"
    }
  }])];
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [layout, color];
var selector = "." + classes.component;

var holderFns = [holderLayout];
var holderSelector = "." + classes.holder;

var customTheme = function customTheme(customSelector, customVars) {
  return __WEBPACK_IMPORTED_MODULE_2_polythene_css__["b" /* styler */].generateStyles([customSelector, selector], _extends$1({}, vars$1, customVars), fns), __WEBPACK_IMPORTED_MODULE_2_polythene_css__["b" /* styler */].generateStyles([customSelector, holderSelector], _extends$1({}, vars$1, customVars), holderFns);
};

__WEBPACK_IMPORTED_MODULE_2_polythene_css__["b" /* styler */].generateStyles([selector], vars$1, fns);
__WEBPACK_IMPORTED_MODULE_2_polythene_css__["b" /* styler */].generateStyles([holderSelector], vars$1, holderFns);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var DEFAULT_TIME_OUT = 3;

var pauseInstance = function pauseInstance(state) {
  state.isPaused = true;
  if (state.timer) {
    state.timer.pause();
  }
};

var unpauseInstance = function unpauseInstance(state) {
  state.isPaused = false;
  if (state.timer) {
    state.timer.resume();
  }
};

var stopTimer = function stopTimer(state) {
  if (state.timer) {
    state.timer.stop();
  }
};

var prepareShow = function prepareShow(state, opts) {
  state.containerEl = state.containerEl || document.querySelector(opts.containerSelector || state.element);
  if (opts.containerSelector) {
    var holderEl = state.containerEl.querySelector(state.element);
    holderEl.classList.add(classes.hasContainer);
  }
};

var showInstance = function showInstance(state, opts) {
  prepareShow(state, opts);
  stopTimer(state);
  state.transitioning = true;
  var transitions = opts.transitions || state.transitions;
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["a" /* show */])(_extends({}, opts, transitions.show(state.containerEl, opts))).then(function () {
    state.transitioning = false;
    if (state.didShow) {
      // notify multiple
      state.didShow(state.instanceId);
      // this will call opts.didShow
    }
    // set timer to hide in a few seconds
    var timeout = opts.timeout;
    if (timeout === 0) {
      // do not time out
    } else {
      var timeoutSeconds = timeout !== undefined ? timeout : DEFAULT_TIME_OUT;
      state.timer = new __WEBPACK_IMPORTED_MODULE_4_polythene_utilities__["a" /* Timer */](function () {
        hideInstance(state, opts);
      }, timeoutSeconds);
    }
  });
};

var hideInstance = function hideInstance(state, opts) {
  stopTimer(state);
  var id = state.instanceId;
  state.transitioning = true;
  var transitions = opts.transitions || state.transitions;
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["b" /* hide */])(_extends({}, opts, transitions.hide(state.containerEl, opts))).then(function () {
    stopTimer(state);
    state.transitioning = false;
    if (state.didHide) {
      // notify multiple
      state.didHide(id);
      // this will call opts.didHide
    }
    __WEBPACK_IMPORTED_MODULE_1_mithril___default.a.redraw(); // removes remainder of drawn component
  });
};

var createView = function createView(state, opts) {
  var element = opts.element || "div";
  var props = _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["c" /* filterSupportedAttributes */])(opts), {
    class: [state.class, opts.tone === "light" ? null : "pe-dark-theme", // default dark theme
    opts.tone === "light" ? "pe-light-theme" : null, opts.containerSelector ? classes.hasContainer : null, opts.layout === "vertical" ? classes.vertical : classes.horizontal, opts.tone === "dark" ? "pe-dark-theme" : null, opts.tone === "light" ? "pe-light-theme" : null, opts.class].join(" "),
    oncreate: function oncreate(_ref) {
      var dom = _ref.dom;

      state.el = dom;
      showInstance(state, opts);
    },
    onclick: function onclick(e) {
      return e.preventDefault();
    }
  });

  var content = __WEBPACK_IMPORTED_MODULE_1_mithril___default()("div", {
    class: classes.content
  }, opts.content || [opts.title ? __WEBPACK_IMPORTED_MODULE_1_mithril___default()("div", {
    class: classes.title,
    oncreate: function oncreate(_ref2) {
      var dom = _ref2.dom;

      var height = dom.getBoundingClientRect().height;
      var lineHeight = parseInt(window.getComputedStyle(dom).lineHeight, 10);
      var paddingTop = parseInt(window.getComputedStyle(dom).paddingTop, 10);
      var paddingBottom = parseInt(window.getComputedStyle(dom).paddingBottom, 10);
      if (height > lineHeight + paddingTop + paddingBottom) {
        dom.classList.add(classes.multilineTitle);
      }
    }
  }, opts.title) : null, opts.action ? __WEBPACK_IMPORTED_MODULE_1_mithril___default()("div", { class: classes.action }, [opts.action]) : null]);
  return __WEBPACK_IMPORTED_MODULE_1_mithril___default()(element, props, content);
};

var instance = {
  theme: customTheme, // accepts (selector, vars)
  oninit: function oninit(vnode) {
    var attrs = vnode.attrs;
    vnode.state = _extends(vnode.state, attrs, {
      el: null,
      containerEl: null,
      dismissEl: null,
      transitioning: false,
      timer: null,
      isPaused: false
    });
  },
  view: function view(_ref3) {
    var state = _ref3.state,
        attrs = _ref3.attrs;

    // attrs contains {id, opts}
    var opts = typeof attrs.opts === "function" ? attrs.opts() : attrs.opts;
    if (attrs.hide && !state.transitioning) {
      hideInstance(state, opts);
    }
    if (attrs.pause && !state.isPaused) {
      pauseInstance(state, attrs);
    } else if (attrs.unpause && state.isPaused) {
      unpauseInstance(state, attrs);
    }
    return createView(state, opts);
  }
};

var show$1 = function show$$1(el, opts) {
  return {
    el: el,
    showDuration: opts.showDuration || .5,
    showDelay: opts.showDelay || 0,
    beforeShow: function beforeShow() {
      return el.style.opacity = 0;
    },
    show: function show$$1() {
      return el.style.opacity = 1;
    }
  };
};

var hide$1 = function hide$$1(el, opts) {
  return {
    el: el,
    hideDuration: opts.hideDuration || .5,
    hideDelay: opts.hideDelay || 0,
    hide: function hide$$1() {
      return el.style.opacity = 0;
    }
  };
};

var transitions = {
  show: show$1,
  hide: hide$1
};

var notification = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["d" /* multiple */])({
  instance: instance,
  transitions: transitions,
  queue: true,
  defaultId: "default_notification",
  class: classes.component,
  element: "." + classes.holder,
  placeholder: "span." + classes.placeholder,
  bodyShowClass: classes.open
});

/* harmony default export */ __webpack_exports__["a"] = (notification);


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_theme__ = __webpack_require__(2);
/* unused harmony export classes */
/* unused harmony export vars */





var vars$1 = {
  color: "inherit" // only specify this variable to get both states
  // color_light:   "inherit",
  // color_dark:    "inherit"
};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var layout = (function (selector) {
  return [_defineProperty({}, selector, [__WEBPACK_IMPORTED_MODULE_2_polythene_css__["c" /* mixin */].fit(), {
    color: "inherit",
    borderRadius: "inherit",
    pointerEvents: "none",

    ".pe-ripple--constrained": {
      borderRadius: "inherit",

      " .pe-ripple__mask": {
        overflow: "hidden",
        borderRadius: "inherit"
      }
    },
    " .pe-ripple__mask": [__WEBPACK_IMPORTED_MODULE_2_polythene_css__["c" /* mixin */].fit(), {
      transform: "translate3d(0,0,0)"
    }],

    " .pe-ripple__waves": {
      outline: "1px solid transparent", // for IE10
      position: "absolute",
      borderRadius: "50%",
      pointerEvents: "none",
      display: "none"
    },
    " .pe-ripple__waves--animating": {
      display: "block"
    }
  }])];
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = function style(scopes, selector, componentVars, tint) {
  return [_defineProperty$1({}, scopes.map(function (s) {
    return s + selector;
  }).join(","), {
    color: componentVars["color_" + tint] || componentVars["color"] || "inherit"
  })];
};

var color = (function (selector, componentVars) {
  return [style([".pe-dark-theme", ".pe-dark-theme "], selector, componentVars, "dark"), // has/inside dark theme
  style(["", ".pe-light-theme", ".pe-light-theme "], selector, componentVars, "light")];
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [layout, color];
var selector = ".pe-ripple";

var customTheme = function customTheme(customSelector, customVars) {
  return __WEBPACK_IMPORTED_MODULE_2_polythene_css__["b" /* styler */].generateStyles([customSelector, selector], _extends$1({}, vars$1, customVars), fns);
};

__WEBPACK_IMPORTED_MODULE_2_polythene_css__["b" /* styler */].generateStyles([selector], vars$1, fns);

function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ANIMATION_END_EVENT = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_polythene_core__["h" /* animationEndEvent */])();
var DEFAULT_START_OPACITY = 0.2;
var DEFAULT_END_OPACITY = 0.0;
var DEFAULT_START_SCALE = 0.1;
var DEFAULT_END_SCALE = 2.0;
var OPACITY_DECAY_VELOCITY = 0.35;

var animation = (function (e, el, wavesEl, attrs, classes, endCallback) {
  var rect = el.getBoundingClientRect();
  var x = __WEBPACK_IMPORTED_MODULE_1_polythene_core__["i" /* isTouch */] && e.touches ? e.touches[0].pageX : e.clientX;
  var y = __WEBPACK_IMPORTED_MODULE_1_polythene_core__["i" /* isTouch */] && e.touches ? e.touches[0].pageY : e.clientY;
  var w = el.offsetWidth;
  var h = el.offsetHeight;
  var waveRadius = Math.sqrt(w * w + h * h);
  var mx = attrs.center ? rect.left + rect.width / 2 : x;
  var my = attrs.center ? rect.top + rect.height / 2 : y;
  var rx = mx - rect.left - waveRadius / 2;
  var ry = my - rect.top - waveRadius / 2;
  var startOpacity = attrs.startOpacity !== undefined ? attrs.startOpacity : DEFAULT_START_OPACITY;
  var opacityDecayVelocity = attrs.opacityDecayVelocity !== undefined ? attrs.opacityDecayVelocity : OPACITY_DECAY_VELOCITY;
  var endOpacity = attrs.endOpacity || DEFAULT_END_OPACITY;
  var startScale = attrs.startScale || DEFAULT_START_SCALE;
  var endScale = attrs.endScale || DEFAULT_END_SCALE;
  var duration = attrs.duration ? attrs.duration : 1 / opacityDecayVelocity * 0.2;
  var color = window.getComputedStyle(el).color;
  var animationId = "ripple_animation_" + new Date().getTime();
  var style = wavesEl.style;
  style.width = style.height = waveRadius + "px";
  style.top = ry + "px";
  style.left = rx + "px";
  style["animation-duration"] = style["-webkit-animation-duration"] = style["-moz-animation-duration"] = style["-o-animation-duration"] = duration + "s";
  style.backgroundColor = color;
  style.opacity = startOpacity;
  style.animationName = animationId;
  style.animationTimingFunction = attrs.animationTimingFunction || __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].animation_curve_default;

  var keyframeStyle = [_defineProperty$2({}, "@keyframes " + animationId, {
    " 0%": {
      transform: "scale(" + startScale + ")",
      "opacity": startOpacity
    },
    " 100%": {
      transform: "scale(" + endScale + ")",
      "opacity": endOpacity
    }
  })];
  __WEBPACK_IMPORTED_MODULE_2_polythene_css__["b" /* styler */].add(animationId, keyframeStyle);

  var onEnd = function onEnd(evt) {
    if (attrs.persistent) {
      style.opacity = endOpacity;
      style.transform = "scale(" + endScale + ")";
    } else {
      endCallback();
      wavesEl.classList.remove(classes.wavesAnimating);
    }
    wavesEl.removeEventListener(ANIMATION_END_EVENT, onEnd, false);
    __WEBPACK_IMPORTED_MODULE_2_polythene_css__["b" /* styler */].remove(animationId);
    if (attrs.end) {
      attrs.end(evt);
    }
  };
  wavesEl.addEventListener(ANIMATION_END_EVENT, onEnd, false);
  if (attrs.start) {
    attrs.start(e);
  }
  wavesEl.classList.add(classes.wavesAnimating);
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var classes = {
  component: "pe-ripple",
  waves: "pe-ripple__waves",
  mask: "pe-ripple__mask",
  constrained: "pe-ripple--constrained",
  wavesAnimating: "pe-ripple__waves--animating"
};

var destroyRipple = void 0;

var initRipple = function initRipple(vnode) {
  var state = vnode.state;
  var attrs = vnode.attrs;
  if (!vnode.dom) {
    return;
  }
  var rippleEl = vnode.dom;
  var wavesEl = vnode.dom.querySelector("." + classes.waves);

  var tap = function tap(e) {
    if (state.animating) {
      return;
    }
    animation(e, rippleEl, wavesEl, attrs, classes, function () {
      return state.animating = false;
    });
    state.animating = true;
  };
  var triggerEl = attrs.getTarget ? attrs.getTarget() : vnode.dom.parentElement;
  triggerEl.addEventListener(__WEBPACK_IMPORTED_MODULE_1_polythene_core__["j" /* touchEndEvent */], tap, false);
  destroyRipple = function destroyRipple() {
    triggerEl.removeEventListener(__WEBPACK_IMPORTED_MODULE_1_polythene_core__["j" /* touchEndEvent */], tap, false);
  };
};

var view = function view(vnode) {
  var attrs = vnode.attrs;
  if (attrs.disabled) {
    return null;
  }
  var element = attrs.element || "div";
  var props = _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_polythene_core__["c" /* filterSupportedAttributes */])(attrs), {
    class: [classes.component, attrs.constrained !== false ? classes.constrained : null, attrs.tone === "dark" ? "pe-dark-theme" : null, attrs.tone === "light" ? "pe-light-theme" : null, attrs.class].join(" ")
  });
  var content = __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
    class: classes.mask
  }, __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
    class: classes.waves
  }));
  return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(element, props, [attrs.before, content, attrs.after]);
};

var ripple = {
  theme: customTheme, // accepts (selector, vars)
  oninit: function oninit(vnode) {
    return vnode.state.animating = false;
  },
  oncreate: initRipple,
  onremove: destroyRipple,
  view: view
};

/* harmony default export */ __webpack_exports__["a"] = (ripple);


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_icon__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_icon_button__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_polythene_theme__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_polythene_css__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return selectionControl; });
/* unused harmony export classes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return controlView; });
/* unused harmony export controlViewClasses */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return vars$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return layout; });







var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var classes = {
  component: "pe-control",
  formLabel: "pe-control__form-label",
  label: "pe-control__label",
  input: "pe-control__input",
  on: "pe-control--on",
  off: "pe-control--off",
  disabled: "pe-control--disabled",
  inactive: "pe-control--inactive",
  small: "pe-control--small",
  regular: "pe-control--regular",
  medium: "pe-control--medium",
  large: "pe-control--large"
};

var typeClasses = {
  small: classes.small,
  regular: classes.regular,
  medium: classes.medium,
  large: classes.large
};

var classForType = function classForType() {
  var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "regular";
  return typeClasses[mode];
};

var view = function view(vnode) {
  var attrs = vnode.attrs;
  var state = vnode.state;
  if (typeof attrs.checked === "function") {
    state.setChecked(attrs.checked());
  }
  var checked = state.checked();
  var selectable = attrs.selectable !== undefined ? attrs.selectable(checked) : false;
  var inactive = attrs.disabled || !selectable;
  var element = attrs.element || "div";
  var name = attrs.name || "";
  var props = _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_polythene_core__["c" /* filterSupportedAttributes */])(attrs), {
    class: [classes.component, attrs.defaultClass, checked ? classes.on : classes.off, attrs.disabled ? classes.disabled : null, inactive ? classes.inactive : null, classForType(attrs.size), attrs.tone === "dark" ? "pe-dark-theme" : null, attrs.tone === "light" ? "pe-light-theme" : null, attrs.class].join(" ")
  }, attrs.events ? attrs.events : null);
  var content = [__WEBPACK_IMPORTED_MODULE_0_mithril___default()("input", {
    class: classes.input,
    name: name,
    value: state.value(),
    type: attrs.type, // set by checkbox / radio-button
    tabindex: -1, // set in controlView / icon-button
    checked: checked,
    oncreate: function oncreate(vnode) {
      return state.setInputEl(vnode.dom);
    }
  }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()("label", {
    class: classes.formLabel
  }, [attrs.controlView ? attrs.controlView(checked, _extends({}, attrs, { events: { onclick: state.toggle } })) : null, attrs.label ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()("." + classes.label, inactive ? null : {
    onclick: state.toggle
  }, attrs.label) : null])];
  return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(element, props, [attrs.before, content, attrs.after]);
};

var selectionControl = {
  oninit: function oninit(vnode) {
    var attrs = vnode.attrs;
    // Because this module also supports radio buttons (paired control elements)
    // we won"t keep a separate "checked" value but instead keep the checked value
    // as a HTMLElement checked state.
    var defaultChecked = false;
    var _value = attrs.value || "1";
    var inputEl = void 0;

    var setInputElChecked = function setInputElChecked(isChecked) {
      if (inputEl) {
        inputEl.checked = isChecked;
      }
    };

    var getAttrsChecked = function getAttrsChecked() {
      if (typeof attrs.checked === "function") {
        var v = attrs.checked();
        return v !== undefined ? v : defaultChecked;
      } else {
        return attrs.checked !== undefined ? attrs.checked : defaultChecked;
      }
    };

    var setInputEl = function setInputEl(el) {
      inputEl = el;
      setInputElChecked(getAttrsChecked());
    };

    var setChecked = function setChecked(isChecked) {
      setInputElChecked(isChecked);
      if (attrs.getState) {
        attrs.getState({
          checked: inputEl ? inputEl.checked : getAttrsChecked(),
          value: _value,
          el: inputEl
        });
      }
    };

    var toggle = function toggle() {
      return setChecked(!inputEl.checked);
    };

    vnode.state = _extends(vnode.state, {
      setInputEl: setInputEl,
      setChecked: setChecked,
      checked: function checked() {
        return inputEl ? inputEl.checked : getAttrsChecked();
      },
      toggle: toggle,
      value: function value() {
        return _value;
      }
    });
  },
  view: view
};

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var classes$1 = {
  box: "pe-control__box",
  button: "pe-control__button",
  buttonOn: "pe-control__button--on",
  buttonOff: "pe-control__button--off"
};

var createIcon = function createIcon(onOffType, attrs) {
  return (
    // if attrs.iconOn/Off is passed, use that icon options object and ignore size
    // otherwise create a new object
    _extends$1({}, attrs[onOffType] ? attrs[onOffType] : { msvg: attrs.theme[onOffType] }, { class: attrs.class }, attrs.icon, attrs.size ? { type: attrs.size } : null)
  );
};

var controlView = function controlView(checked, attrs) {
  return __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
    class: classes$1.box
  }, __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_3_polythene_icon_button__["a" /* default */], _extends$1({}, {
    element: "div",
    class: classes$1.button,
    content: [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_icon__["a" /* default */], createIcon("iconOn", _extends$1({}, attrs, { class: classes$1.buttonOn }))), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_icon__["a" /* default */], createIcon("iconOff", _extends$1({}, attrs, { class: classes$1.buttonOff })))],
    ripple: { center: true },
    disabled: attrs.disabled,
    events: attrs.events
  }, attrs.selectable !== undefined ? { inactive: !attrs.selectable(checked) } : null, attrs.iconButton)));
};

var rgba = __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].rgba;

var vars$1 = {
  label_font_size: 2 * __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].grid_unit_component, // 16
  label_height: 3 * __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].grid_unit_component, // 24
  label_padding_before: __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].grid_unit * 4, // 16
  label_padding_after: 0,
  button_size: 6 * __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].grid_unit_component,
  icon_size: 3 * __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].grid_unit_component,
  animation_duration: __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].animation_duration,

  color_light_on: __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_primary),
  color_light_off: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].blend_light_text_secondary),
  color_light_label: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].blend_light_text_secondary),
  color_light_disabled: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].blend_light_text_disabled),
  color_light_thumb_off_focus_opacity: .08,
  color_light_thumb_on_focus_opacity: .11,

  // icon colors may be set in theme; disabled by default
  // color_light_on_icon
  // color_light_off_icon

  color_light_focus_on: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_primary),
  color_light_focus_on_opacity: .11,
  color_light_focus_off: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_light_foreground),
  color_light_focus_off_opacity: .07,

  color_dark_on: __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_primary),
  color_dark_off: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].blend_dark_text_secondary),
  color_dark_label: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].blend_dark_text_secondary),
  color_dark_disabled: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].blend_dark_text_disabled),
  color_dark_thumb_off_focus_opacity: .08,
  color_dark_thumb_on_focus_opacity: .11,

  // icon color may be set in theme; disabled by default
  // color_dark_on_icon
  // color_dark_off_icon

  color_dark_focus_on: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_primary), // or '#80cbc4'
  color_dark_focus_on_opacity: .14,
  color_dark_focus_off: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_dark_foreground),
  color_dark_focus_off_opacity: .09
};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Returns a style function to be used by checkbox and radio-button

var style = function style(scopes, selector, componentVars, tint) {
  return [_defineProperty({}, scopes.map(function (s) {
    return s + selector;
  }).join(","), {
    color: componentVars["color_" + tint + "_on"], // override by specifying "color"

    " .pe-control__label": {
      color: componentVars["color_" + tint + "_label"]
    },
    " .pe-control__box": {
      " .pe-control__button": {
        color: "inherit",

        " .pe-control__button--on": {
          color: componentVars["color_" + tint + "_on_icon"] || "inherit"
        },

        " .pe-control__button--off": {
          color: componentVars["color_" + tint + "_off_icon"] || componentVars["color_" + tint + "_off"]
        }
      }
    },
    ".pe-control--off": {
      " .pe-button--focus .pe-button__focus": {
        opacity: componentVars["color_" + tint + "_focus_off_opacity"],
        backgroundColor: componentVars["color_" + tint + "_focus_off"]
      }
    },
    ".pe-control--on": {
      " .pe-button--focus .pe-button__focus": {
        opacity: componentVars["color_" + tint + "_focus_on_opacity"],
        backgroundColor: componentVars["color_" + tint + "_focus_on"]
      }
    },

    ".pe-control--disabled": {
      " .pe-control__label": {
        color: componentVars["color_" + tint + "_disabled"]
      },
      " .pe-control__box": {
        " .pe-control__button--on, .pe-control__button--off": {
          color: componentVars["color_" + tint + "_disabled"]
        }
      }
    }
  })];
};

var color = (function (selector, componentVars) {
  return [style([".pe-dark-theme", ".pe-dark-theme "], selector, componentVars, "dark"), // has/inside dark theme
  style(["", ".pe-light-theme", ".pe-light-theme "], selector, componentVars, "light")];
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Returns a style function to be used by checkbox and radio-button

var makeSize = function makeSize(componentVars, height) {
  var iconSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].unit_icon_size;

  var labelSize = iconSize + componentVars.label_height;
  var iconOffset = (labelSize - iconSize) / 2;
  return {
    " .pe-control__form-label": {
      height: height + "px"
    },
    " .pe-control__box": {
      width: iconSize + "px",
      height: iconSize + "px"
    },
    " .pe-button__content": {
      width: labelSize + "px",
      height: labelSize + "px",

      " .pe-icon": [__WEBPACK_IMPORTED_MODULE_5_polythene_css__["c" /* mixin */].fit(iconOffset)]
    }
  };
};

var activeButton = function activeButton() {
  return {
    opacity: 1,
    zIndex: 1
  };
};

var inactiveButton = function inactiveButton() {
  return {
    opacity: 0,
    zIndex: 0
  };
};

var layout = (function (selector, componentVars, type) {
  var _selector;

  return [_defineProperty$1({}, selector, (_selector = {
    display: "inline-block",
    boxSizing: "border-box",
    margin: 0,
    padding: 0

  }, _defineProperty$1(_selector, " input[type=" + type + "].pe-control__input", {
    appearance: "none",
    lineHeight: componentVars.label_height + "px",
    // Hide input element
    position: "absolute",
    zIndex: "-1",
    width: 0,
    height: 0,
    margin: 0,
    padding: 0,
    opacity: 0,
    border: "none",
    pointerEvents: "none"
  }), _defineProperty$1(_selector, " .pe-control__form-label", [__WEBPACK_IMPORTED_MODULE_5_polythene_css__["a" /* flex */].layoutHorizontal, __WEBPACK_IMPORTED_MODULE_5_polythene_css__["a" /* flex */].layoutCenter, {
    position: "relative",
    cursor: "pointer",
    fontSize: componentVars.label_font_size + "px",
    lineHeight: componentVars.label_height + "px",
    margin: 0,
    color: "inherit",

    ":focus": {
      outline: 0
    }
  }]), _defineProperty$1(_selector, ".pe-control--inactive", {
    " .pe-control__form-label": {
      cursor: "default"
    }
  }), _defineProperty$1(_selector, " .pe-control__box", {
    position: "relative",
    display: "inline-block",
    boxSizing: "border-box",
    width: componentVars.label_height + "px",
    height: componentVars.label_height + "px",
    color: "inherit",

    ":focus": {
      outline: 0
    }
  }), _defineProperty$1(_selector, " .pe-button.pe-control__button", [__WEBPACK_IMPORTED_MODULE_5_polythene_css__["c" /* mixin */].defaultTransition("opacity", componentVars.animation_duration), {
    position: "absolute",
    left: -((componentVars.button_size - componentVars.icon_size) / 2) + "px",
    top: -((componentVars.button_size - componentVars.icon_size) / 2) + "px",
    zIndex: 1
  }]), _defineProperty$1(_selector, ".pe-control--off", {
    " .pe-control__button--on": inactiveButton(),
    " .pe-control__button--off": activeButton()
  }), _defineProperty$1(_selector, ".pe-control--on", {
    " .pe-control__button--on": activeButton(),
    " .pe-control__button--off": inactiveButton()
  }), _defineProperty$1(_selector, " .pe-control__label", {
    paddingLeft: componentVars.label_padding_before + "px",
    paddingRight: componentVars.label_padding_after + "px"
  }), _defineProperty$1(_selector, ".pe-control--disabled", {
    " .pe-control__form-label": {
      cursor: "auto"
    },
    " .pe-control__button": {
      pointerEvents: "none"
    }
  }), _defineProperty$1(_selector, " .pe-button__content", {
    " .pe-icon": {
      position: "absolute"
    }
  }), _defineProperty$1(_selector, ".pe-control--small", makeSize(componentVars, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].unit_icon_size_small, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].unit_icon_size_small)), _defineProperty$1(_selector, ".pe-control--regular", makeSize(componentVars, componentVars.label_height, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].unit_icon_size)), _defineProperty$1(_selector, ".pe-control--medium", makeSize(componentVars, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].unit_icon_size_medium, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].unit_icon_size_medium)), _defineProperty$1(_selector, ".pe-control--large", makeSize(componentVars, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].unit_icon_size_large, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].unit_icon_size_large)), _selector))];
});




/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_theme__ = __webpack_require__(2);
/* unused harmony export classes */
/* unused harmony export vars */





var rgba = __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].rgba;

var lightForeground = __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].color_light_foreground;
var darkForeground = __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].color_dark_foreground;
var activeColor = __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].color_primary; // or override in CSS by setting 'color' property on '.pe-slider'
var thumb_size = 12;
var thumb_touch_size = Math.max(40, thumb_size);
var thumb_border_width = 2;
var active_thumb_scale = 3 / 2;
var disabled_thumb_scale = 2 / 3;
var active_pin_thumb_scale = 2 / 6;
var largestThumbSize = active_thumb_scale * thumb_size;
var largestElement = Math.max(thumb_touch_size, largestThumbSize);
var height = Math.max(52, largestThumbSize);
var side_spacing = Math.max(10, largestElement / 2 - thumb_size / 2);
var horizontal_layout_side_spacing = side_spacing + 4; // optimization for horizontal layout

var vars$1 = {
  height: height,
  side_spacing: side_spacing,
  horizontal_layout_side_spacing: horizontal_layout_side_spacing,
  thumb_size: thumb_size,
  thumb_touch_size: thumb_touch_size,
  track_height: height,
  bar_height: 2,
  thumb_border_width: thumb_border_width,
  active_thumb_scale: active_thumb_scale,
  animation_duration: __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].animation_duration,
  disabled_thumb_scale: disabled_thumb_scale,
  active_pin_thumb_scale: active_pin_thumb_scale,

  step_width: 2,
  pin_height: 32,
  pin_width: 26,
  pin_font_size: 10,

  color_light_track_active: rgba(lightForeground, .38),
  color_light_track_inactive: rgba(lightForeground, .26),
  color_light_track_value: rgba(activeColor),
  // background color may be set in theme; disabled by default
  // color_light_thumb_background:        undefined,
  color_light_thumb_off: rgba(lightForeground, .26),
  color_light_thumb_off_focus: rgba(lightForeground),
  color_light_thumb_off_focus_opacity: .08,
  color_light_thumb_on: rgba(activeColor),
  color_light_thumb_on_focus_opacity: .11,
  color_light_thumb_inactive: rgba(lightForeground, .26),
  color_light_tick: rgba(lightForeground, 1),
  color_light_icon: __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].rgba(__WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].blend_light_text_secondary),
  color_light_disabled_icon: __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].rgba(__WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].blend_light_text_disabled),
  color_light_label: __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].rgba(__WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].blend_light_text_secondary),
  color_light_disabled_label: __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].rgba(__WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].blend_light_text_disabled),

  color_dark_track_active: rgba(darkForeground, .3),
  color_dark_track_inactive: rgba(darkForeground, .2),
  color_dark_track_value: rgba(activeColor),
  // background color may be set in theme; disabled by default
  // color_dark_thumb_background:         undefined,
  color_dark_thumb_off: rgba(darkForeground, .2),
  color_dark_thumb_off_focus: rgba(darkForeground),
  color_dark_thumb_off_focus_opacity: .08,
  color_dark_thumb_on: rgba(activeColor),
  color_dark_thumb_on_focus_opacity: .11,
  color_dark_thumb_inactive: rgba(darkForeground, .2),
  color_dark_tick: rgba(darkForeground, 1),
  color_dark_icon: __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].rgba(__WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].blend_dark_text_secondary),
  color_dark_disabled_icon: __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].rgba(__WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].blend_dark_text_disabled),
  color_dark_label: __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].rgba(__WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].blend_dark_text_secondary),
  color_dark_disabled_label: __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].rgba(__WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].blend_dark_text_disabled)
};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var positionBorder = function positionBorder(thumbSize, borderWidth) {
  return {
    borderWidth: borderWidth + "px",
    width: thumbSize - 2 * borderWidth + "px",
    height: thumbSize - 2 * borderWidth + "px",
    left: "2px",
    top: "2px"
  };
};

var layout = (function (selector, componentVars) {
  var thumbSize = Math.max(componentVars.thumb_size, 2 * componentVars.thumb_border_width);
  var scaledThumbDiff = (componentVars.active_thumb_scale - 1) * thumbSize / 2;
  var barOffset = thumbSize / 2;
  var scaledBorderWidth = Math.max(1, componentVars.thumb_border_width / componentVars.active_thumb_scale);
  var thumbTouchSize = componentVars.thumb_touch_size;
  var stepsOffset = barOffset - 1;

  return [_defineProperty({}, selector, [__WEBPACK_IMPORTED_MODULE_2_polythene_css__["a" /* flex */].layoutHorizontal, __WEBPACK_IMPORTED_MODULE_2_polythene_css__["a" /* flex */].flexGrow(1), {
    userSelect: "none",
    height: componentVars.height + "px",
    marginTop: (componentVars.height - componentVars.track_height) / 2 + "px ",

    " > .pe-icon": [__WEBPACK_IMPORTED_MODULE_2_polythene_css__["a" /* flex */].layoutCenter, {
      height: componentVars.height + "px"
    }],

    " .pe-slider__track": [__WEBPACK_IMPORTED_MODULE_2_polythene_css__["a" /* flex */].layoutHorizontal, __WEBPACK_IMPORTED_MODULE_2_polythene_css__["a" /* flex */].flexGrow(1), __WEBPACK_IMPORTED_MODULE_2_polythene_css__["c" /* mixin */].defaultTransition("transform", componentVars.animation_duration), {
      userSelect: "none",
      position: "relative",
      height: componentVars.track_height + "px",
      margin: "0 " + componentVars.side_spacing + "px",
      outline: 0
    }],
    " div + .pe-slider__track": {
      margin: "0 " + componentVars.horizontal_layout_side_spacing + "px"
    },

    " .pe-slider__control": [__WEBPACK_IMPORTED_MODULE_2_polythene_css__["a" /* flex */].selfCenter, __WEBPACK_IMPORTED_MODULE_2_polythene_css__["c" /* mixin */].defaultTransition("transform, background", componentVars.animation_duration), {
      userSelect: "none",
      width: thumbSize + "px",
      height: thumbSize + "px",
      lineHeight: 0,
      borderRadius: "50%",
      outline: 0,
      zIndex: 1,
      position: "relative",

      // touch area
      "&:before": [__WEBPACK_IMPORTED_MODULE_2_polythene_css__["c" /* mixin */].defaultTransition("background-color", componentVars.animation_duration), {
        content: "\"\"",
        position: "absolute",
        borderRadius: "50%",
        left: -thumbTouchSize / 2 + thumbSize / 2 + "px",
        top: -thumbTouchSize / 2 + thumbSize / 2 + "px",
        width: thumbTouchSize + "px",
        height: thumbTouchSize + "px"
      }],

      // border
      "&:after": [__WEBPACK_IMPORTED_MODULE_2_polythene_css__["c" /* mixin */].defaultTransition("border", componentVars.animation_duration), positionBorder(thumbSize, componentVars.thumb_border_width), {
        content: "\"\"",
        position: "absolute",
        borderRadius: "50%",
        borderStyle: "solid"
      }]
    }],

    " .pe-slider__thumb": [__WEBPACK_IMPORTED_MODULE_2_polythene_css__["c" /* mixin */].defaultTransition("opacity", componentVars.animation_duration), __WEBPACK_IMPORTED_MODULE_2_polythene_css__["c" /* mixin */].fit(), {
      "&, .pe-icon": {
        width: "inherit",
        height: "inherit"
      }
    }],

    " .pe-slider__label": {
      height: componentVars.height + "px",
      lineHeight: componentVars.height + "px",
      minWidth: __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].unit_icon_size + "px",
      textAlign: "center",
      fontSize: "16px",
      fontWeight: __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].font_weight_medium
    },

    " .pe-slider__track-part": [__WEBPACK_IMPORTED_MODULE_2_polythene_css__["a" /* flex */].flex(), {
      userSelect: "none",
      height: componentVars.bar_height + "px",
      margin: (componentVars.track_height - componentVars.bar_height) / 2 + "px 0",
      overflow: "hidden" // Firefox otherwise uses 6x at 0%
    }],

    " .pe-slider__track-value, .pe-slider__track-rest": __WEBPACK_IMPORTED_MODULE_2_polythene_css__["a" /* flex */].layoutHorizontal,

    " .pe-slider__track-bar": [__WEBPACK_IMPORTED_MODULE_2_polythene_css__["a" /* flex */].flex(), {
      position: "relative",
      overflow: "hidden"
    }],
    " .pe-slider__track-bar-value": [__WEBPACK_IMPORTED_MODULE_2_polythene_css__["a" /* flex */].flex(), __WEBPACK_IMPORTED_MODULE_2_polythene_css__["c" /* mixin */].defaultTransition("transform, background-color", componentVars.animation_duration), {
      height: componentVars.bar_height + "px"
    }],
    " .pe-slider__track-value .pe-slider__track-bar": {
      marginLeft: barOffset + "px"
    },
    " .pe-slider__track-rest .pe-slider__track-bar": {
      marginRight: barOffset + "px"
    },

    " .pe-slider__ticks": [__WEBPACK_IMPORTED_MODULE_2_polythene_css__["a" /* flex */].layoutJustified, {
      userSelect: "none",
      position: "absolute",
      width: "calc(100% - " + 2 * stepsOffset + "px)",
      height: componentVars.bar_height + "px",
      left: 0,
      top: componentVars.height / 2 - 1 + "px",
      margin: "0 " + stepsOffset + "px",
      pointerEvents: "none"
    }],

    " .pe-slider__ticks-tick": {
      width: componentVars.step_width + "px",
      height: componentVars.bar_height + "px"
    },

    " .pe-slider__pin": [__WEBPACK_IMPORTED_MODULE_2_polythene_css__["c" /* mixin */].defaultTransition("transform", ".11s"), {
      transform: "translateZ(0) scale(0) translate(0, 0)",
      transformOrigin: "bottom",
      position: "absolute",
      zIndex: 1,
      width: componentVars.pin_width + "px",
      height: 0,
      left: 0, // set in js
      top: 0,
      margin: "0 " + stepsOffset + "px 0 " + (stepsOffset - componentVars.pin_width / 2 + 1) + "px",
      pointerEvents: "none",

      "&::before": {
        transform: "rotate(-45deg)",
        content: "\"\"",
        position: "absolute",
        top: 0,
        left: 0,
        width: componentVars.pin_width + "px",
        height: componentVars.pin_width + "px",
        borderRadius: "50% 50% 50% 0",
        backgroundColor: "inherit"
      },
      "&::after": {
        content: "attr(value)",
        position: "absolute",
        top: 0,
        left: 0,
        width: componentVars.pin_width + "px",
        height: componentVars.pin_height + "px",
        textAlign: "center",
        color: "#fff",
        fontSize: componentVars.pin_font_size + "px",
        lineHeight: componentVars.pin_width + "px"
      }
    }],

    "&.pe-slider--active:not(.pe-slider--ticks)": {
      " .pe-slider__control": {
        transform: "scale(" + componentVars.active_thumb_scale + ")",
        borderWidth: scaledBorderWidth + "px"
      },
      // left side
      " .pe-slider__track-value .pe-slider__track-bar-value": {
        transform: "translateX(" + -scaledThumbDiff + "px)"
      },
      // right side
      " .pe-slider__track-rest .pe-slider__track-bar-value": {
        transform: "translateX(" + scaledThumbDiff + "px)"
      }
    },

    "&.pe-slider--pin.pe-slider--active, &.pe-slider--pin.pe-slider--focus": {
      " .pe-slider__pin": {
        transform: "translateZ(0) scale(1) translate(0, -24px)"
      },
      " .pe-slider__control": {
        transform: "scale(" + componentVars.active_pin_thumb_scale + ")"
      }
    },

    "&:not(.pe-slider--disabled)": {
      " .pe-slider__control": {
        cursor: "pointer"
      },
      "&.pe-slider--track": {
        " .pe-slider__track": {
          cursor: "pointer"
        }
      }
    },

    "&.pe-slider--disabled": {
      " .pe-slider__control": {
        transform: "scale(" + componentVars.disabled_thumb_scale + ")",
        borderWidth: 0
      },
      "&.pe-slider--min": {
        " .pe-slider__control:after": [positionBorder(thumbSize, 1 / componentVars.disabled_thumb_scale * componentVars.thumb_border_width)]
      }
    }
  }])];
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = function style(scopes, selector, componentVars, tint) {
  return [_defineProperty$1({}, scopes.map(function (s) {
    return s + selector;
  }).join(","), {
    color: componentVars["color_" + tint + "_thumb_on"], // override by specifying "color"

    " .pe-slider__control": {
      "&:after": {
        borderColor: "transparent"
      }
    },
    " .pe-slider__track-bar-value": {
      background: componentVars["color_" + tint + "_track_inactive"]
    },

    " .pe-slider__ticks-tick": {
      background: componentVars["color_" + tint + "_tick"]
    },

    " .pe-slider__pin": {
      backgroundColor: "currentcolor"
    },

    " > .pe-icon": {
      color: componentVars["color_" + tint + "_disabled_icon"]
    },

    " .pe-slider__label": {
      color: componentVars["color_" + tint + "_disabled_label"]
    },

    // states

    "&.pe-slider--active": {
      " .pe-slider__track-bar-value": {
        background: componentVars["color_" + tint + "_track_active"]
      }
    },

    ".pe-slider--disabled": {
      " .pe-slider__control": {
        background: componentVars["color_" + tint + "_thumb_inactive"]
      }
    },

    "&:not(.pe-slider--disabled)": {
      " .pe-slider__control": {
        backgroundColor: componentVars["color_" + tint + "_thumb_background"] || "currentcolor",

        "&:before": {
          opacity: componentVars["color_" + tint + "_thumb_off_focus_opacity"]
        }
      },
      " .pe-slider__track-value .pe-slider__track-bar-value": {
        background: "currentcolor"
      },
      "&.pe-slider--focus.pe-slider--min:not(.pe-slider--pin) .pe-slider__control:before,\
      &.pe-slider--min:not(.pe-slider--pin) .pe-slider__control:focus:before": {
        backgroundColor: componentVars["color_" + tint + "_thumb_off_focus"]
      },
      "&.pe-slider--focus:not(.pe-slider--min):not(.pe-slider--pin) .pe-slider__control:before,\
      &:not(.pe-slider--min):not(.pe-slider--pin) .pe-slider__control:focus:before": {
        backgroundColor: "currentcolor",
        opacity: componentVars["color_" + tint + "_thumb_on_focus_opacity"]
      },
      " > .pe-icon": {
        color: componentVars["color_" + tint + "_icon"]
      },
      " .pe-slider__label": {
        color: componentVars["color_" + tint + "_label"]
      }
    },

    "&.pe-slider--min:not(.pe-slider--disabled)": {
      " .pe-slider__control": {
        backgroundColor: "transparent"
      },
      " .pe-slider__thumb": {
        opacity: 0
      },
      " .pe-slider__control:after": {
        borderColor: componentVars["color_" + tint + "_track_inactive"]
      },
      "&.pe-slider--active .pe-slider__control:after": {
        borderColor: componentVars["color_" + tint + "_track_active"]
      },
      "&.pe-slider--ticks": {
        " .pe-slider__control": {
          backgroundColor: componentVars["color_" + tint + "_tick"]
        },
        " .pe-slider__control:after": {
          borderColor: "transparent"
        }
      },
      " .pe-slider__pin": {
        backgroundColor: componentVars["color_" + tint + "_track_inactive"]
      }
    }
  })];
};

var color = (function (selector, componentVars) {
  return [style([".pe-dark-theme", ".pe-dark-theme "], selector, componentVars, "dark"), // has/inside dark theme
  style(["", ".pe-light-theme", ".pe-light-theme "], selector, componentVars, "light")];
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [layout, color];
var selector = ".pe-slider";

var customTheme = function customTheme(customSelector, customVars) {
  return __WEBPACK_IMPORTED_MODULE_2_polythene_css__["b" /* styler */].generateStyles([customSelector, selector], _extends$1({}, vars$1, customVars), fns);
};

__WEBPACK_IMPORTED_MODULE_2_polythene_css__["b" /* styler */].generateStyles([selector], vars$1, fns);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var classes = {
  component: "pe-slider",
  thumb: "pe-slider__thumb",
  label: "pe-slider__label",
  track: "pe-slider__track",
  trackPart: "pe-slider__track-part",
  trackPartValue: "pe-slider__track-value",
  trackPartRest: "pe-slider__track-rest",
  trackBar: "pe-slider__track-bar",
  trackBarValue: "pe-slider__track-bar-value",

  control: "pe-slider__control",
  ticks: "pe-slider__ticks",
  tick: "pe-slider__ticks-tick",
  pin: "pe-slider__pin",

  isDisabled: "pe-slider--disabled",
  isActive: "pe-slider--active",
  hasTrack: "pe-slider--track",
  hasPin: "pe-slider--pin",
  hasFocus: "pe-slider--focus",
  isAtMin: "pe-slider--min",
  hasTicks: "pe-slider--ticks"
};

var focusElement = void 0;

var deFocus = function deFocus(state) {
  if (focusElement) {
    focusElement.blur();
  }
  focusElement = undefined;
  state.hasFocus = false;
};

var focus = function focus(state, el) {
  deFocus(state);
  focusElement = el;
  state.hasFocus = true;
};

var positionFromEvent = function positionFromEvent(e, isVertical) {
  return __WEBPACK_IMPORTED_MODULE_1_polythene_core__["i" /* isTouch */] ? isVertical ? e.touches[0].pageY : e.touches[0].pageX : isVertical ? e.pageY : e.pageX;
};

var updatePinPosition = function updatePinPosition(state) {
  if (state.controlEl && state.pinEl) {
    var left = state.fraction() * state.rangeWidth;
    state.pinEl.style.left = left + "px";
  }
};

var updateValue = function updateValue(state, value) {
  state.setValue(value);
  updatePinPosition(state);
};

var generateTickMarks = function generateTickMarks(min, max, stepSize) {
  var steps = Math.round((max - min) / stepSize);
  var items = [];
  var s = steps + 1;
  while (s > 0) {
    items.push(__WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", { class: classes.tick }));
    s--;
  }
  return items;
};

var readRangeData = function readRangeData(state) {
  if (state.controlEl) {
    // range is from the far left to the far right minus the thumb width (max x is at the left side of the thumb)
    state.controlWidth = vars$1.thumb_size;
    state.rangeWidth = state.trackEl.getBoundingClientRect().width - state.controlWidth;
    var styles = window.getComputedStyle(state.trackEl);
    state.rangeOffset = parseFloat(styles.marginLeft);
  }
};

var calculateClickOffset = function calculateClickOffset(state) {
  var controlOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  state.clickOffset = state.trackEl.getBoundingClientRect().left - (state.rangeOffset - state.controlWidth / 2) + controlOffset;
};

var initControlEvent = function initControlEvent(state, e) {
  var controlPos = state.controlEl.getBoundingClientRect().left;
  var eventPos = positionFromEvent(e);
  var controlOffset = eventPos - controlPos - state.controlWidth / 2;
  calculateClickOffset(state, controlOffset);
};

var initTrackEvent = function initTrackEvent(state) {
  return calculateClickOffset(state, 0);
};

var handlePosEvent = function handlePosEvent(state, e) {
  var pos = positionFromEvent(e) - state.clickOffset;
  var value = state.min + (pos - state.rangeOffset) / state.rangeWidth * (state.max - state.min);
  updateValue(state, value);
  __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.redraw();
};

var startDrag = function startDrag(state, attrs, e) {
  if (state.isDragging) return;
  e.preventDefault();
  state.isDragging = true;
  state.isActive = true;
  deFocus(state);

  var drag = function drag(e) {
    if (!state.isDragging) return;
    handlePosEvent(state, e);
  };

  var endDrag = function endDrag() {
    if (!state.isDragging) return;
    state.isDragging = false;
    state.isActive = false;
    deFocus(state);
    window.removeEventListener(__WEBPACK_IMPORTED_MODULE_1_polythene_core__["m" /* moveEvent */], drag);
    window.removeEventListener(__WEBPACK_IMPORTED_MODULE_1_polythene_core__["n" /* endEvent */], endDrag);
    __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.redraw();
  };

  window.addEventListener(__WEBPACK_IMPORTED_MODULE_1_polythene_core__["m" /* moveEvent */], drag);
  window.addEventListener(__WEBPACK_IMPORTED_MODULE_1_polythene_core__["n" /* endEvent */], endDrag);

  readRangeData(state);

  if (attrs.pin) {
    updatePinPosition(state);
  }
};

var startTrack = function startTrack(state, attrs, e) {
  e.preventDefault();
  if (state.isDragging) {
    return;
  }
  readRangeData(state);
  initTrackEvent(state);
  handlePosEvent(state, e);
  startDrag(state, attrs, e);
};

var createSlider = function createSlider(state, attrs, hasTicks, interactiveTrack) {
  var fraction = state.fraction();
  var stepCount = Math.max(10, parseInt(attrs.step, 10) || 1); // not more than 100 steps on the screen

  var onStartTrack = function onStartTrack(e) {
    return startTrack(state, attrs, e);
  };

  var onInitDrag = function onInitDrag(e) {
    readRangeData(state);
    initControlEvent(state, e);
    startDrag(state, attrs, e);
  };

  var flexValueCss = fraction + " 1 0%";
  var flexRestValue = 1 - fraction;
  var flexRestCss = flexRestValue + " 1 0%";

  return [__WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", _extends({}, {
    class: classes.track,
    oncreate: function oncreate(_ref) {
      var dom = _ref.dom;

      state.trackEl = dom;
      if (attrs.pin) {
        setTimeout(function () {
          updatePinPosition(state);
        }, 0);
      }
    }
  }, interactiveTrack && !attrs.disabled && !__WEBPACK_IMPORTED_MODULE_1_polythene_core__["i" /* isTouch */] ? { onmousedown: onStartTrack } : null, interactiveTrack && !attrs.disabled && __WEBPACK_IMPORTED_MODULE_1_polythene_core__["i" /* isTouch */] ? { ontouchstart: onStartTrack } : null), [__WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
    class: classes.trackPart + " " + classes.trackPartValue,
    style: {
      flex: flexValueCss,
      "-ms-flex": flexValueCss,
      webkitFlex: flexValueCss
    }
  }, __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", { class: classes.trackBar }, __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", { class: classes.trackBarValue }))), __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", _extends({}, {
    class: classes.control,
    oncreate: function oncreate(_ref2) {
      var dom = _ref2.dom;
      return state.controlEl = dom;
    }
  }, attrs.disabled ? { disabled: true } : {
    tabindex: attrs.tabindex || 0,
    onfocus: function onfocus() {
      return focus(state, state.controlEl);
    },
    onblur: function onblur() {
      return deFocus(state);
    },
    onkeydown: function onkeydown(e) {
      if (e.which === 27) {
        // ESCAPE
        state.controlEl.blur(e);
      } else if (e.which === 37) {
        // LEFT
        state.decrease(e.shiftKey);
      } else if (e.which === 38) {
        // UP
        state.increase(e.shiftKey);
      } else if (e.which === 39) {
        // RIGHT
        state.increase(e.shiftKey);
      } else if (e.which === 40) {
        // DOWN
        state.decrease(e.shiftKey);
      }
      readRangeData(state);
      updatePinPosition(state);
    }
  }, !attrs.disabled && !__WEBPACK_IMPORTED_MODULE_1_polythene_core__["i" /* isTouch */] ? { onmousedown: onInitDrag } : null, !attrs.disabled && __WEBPACK_IMPORTED_MODULE_1_polythene_core__["i" /* isTouch */] ? { ontouchstart: onInitDrag } : null, attrs.events ? attrs.events : null, hasTicks ? { step: stepCount } : null), attrs.icon ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", { class: classes.thumb }, attrs.icon) : null), __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
    class: classes.trackPart + " " + classes.trackPartRest,
    style: {
      flex: flexRestCss,
      "-ms-flex": flexRestCss,
      webkitFlex: flexRestCss,
      maxWidth: flexRestValue * 100 + "%" // for IE Edge
    }
  }, __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", { class: classes.trackBar }, __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", { class: classes.trackBarValue }))), hasTicks && !attrs.disabled ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", { class: classes.ticks }, generateTickMarks(state.min, state.max, stepCount)) : null, hasTicks && attrs.pin && !attrs.disabled ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
    class: classes.pin,
    value: Math.round(state.value()),
    oncreate: function oncreate(_ref3) {
      var dom = _ref3.dom;
      return state.pinEl = dom;
    }
  }) : null])];
};

var view = function view(_ref4) {
  var attrs = _ref4.attrs,
      state = _ref4.state;

  if (typeof attrs.value === "function") {
    state.setValue(attrs.value());
  }
  var element = attrs.element || "div";
  var hasTicks = attrs.ticks !== undefined && attrs.ticks !== false;
  var interactiveTrack = attrs.interactiveTrack !== undefined ? attrs.interactiveTrack : true;
  var props = _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_polythene_core__["c" /* filterSupportedAttributes */])(attrs), {
    class: [classes.component, attrs.disabled ? classes.isDisabled : null, attrs.pin ? classes.hasPin : null, interactiveTrack ? classes.hasTrack : null, state.isActive ? classes.isActive : null, state.hasFocus ? classes.hasFocus : null, state.fraction() === 0 ? classes.isAtMin : null, hasTicks ? classes.hasTicks : null, attrs.tone === "dark" ? "pe-dark-theme" : null, attrs.tone === "light" ? "pe-light-theme" : null, attrs.class].join(" ")
  });
  var content = createSlider(state, attrs, hasTicks, interactiveTrack);
  return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(element, props, [attrs.before, content, attrs.after]);
};

var oninit = function oninit(vnode) {
  var attrs = vnode.attrs;
  var min = attrs.min !== undefined ? attrs.min : 0;
  var max = attrs.max !== undefined ? attrs.max : 100;
  var step = attrs.step !== undefined ? attrs.step : 1;
  var defaultValue = 0;
  var _fraction = min;
  var _value = defaultValue;

  if (typeof attrs.value === "function") {
    var v = attrs.value();
    _value = v !== undefined ? v : defaultValue;
  } else {
    _value = attrs.value !== undefined ? attrs.value : defaultValue;
  }

  var setValue = function setValue(v) {
    if (v < min) v = min;
    if (v > max) v = max;
    _value = step ? Math.round(v / step) * step : v;
    _fraction = (_value - min) / (max - min);
    if (attrs.getValue) {
      attrs.getValue(_value);
    }
  };

  setValue(_value);

  vnode.state = _extends(vnode.state, {
    min: min,
    max: max,
    trackEl: null,
    controlEl: null,
    pinEl: null,
    setValue: setValue,
    value: function value() {
      return _value;
    },
    fraction: function fraction() {
      return _fraction;
    },
    increase: function increase(multiply) {
      return setValue(_value + (multiply ? 10 : 1) * (step || 1));
    },
    decrease: function decrease(multiply) {
      return setValue(_value - (multiply ? 10 : 1) * (step || 1));
    },
    isActive: false,
    hasFocus: false,
    isDragging: false,
    // coordinates
    controlWidth: 0,
    rangeWidth: 0,
    rangeOffset: 0,
    clickOffset: 0
  });
};

var slider = {
  theme: customTheme, // accepts (selector, vars)
  oninit: oninit,
  view: view
};

/* harmony default export */ __webpack_exports__["a"] = (slider);


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_css__ = __webpack_require__(1);
/* unused harmony export classes */
/* unused harmony export vars */




var vars = {
  color_light: "currentcolor",
  color_dark: "currentcolor"
};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var layout = (function (selector) {
  return [_defineProperty({}, selector, {
    lineHeight: 1
  })];
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = function style(scopes, selector, componentVars, tint) {
  return [_defineProperty$1({}, scopes.map(function (s) {
    return s + selector;
  }).join(","), {
    color: "inherit",

    " svg": {
      color: "inherit",

      " path, rect, circle, polygon": {
        "&:not([fill=none])": {
          fill: componentVars["color_" + tint] || "currentcolor"
        }
      }
    }
  })];
};

var color = (function (selector, componentVars) {
  return [style([".pe-dark-theme", ".pe-dark-theme "], selector, componentVars, "dark"), // has/inside dark theme
  style(["", ".pe-light-theme", ".pe-light-theme "], selector, componentVars, "light")];
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [layout, color];
var selector = ".pe-svg";

var customTheme = function customTheme(customSelector, customVars) {
  return __WEBPACK_IMPORTED_MODULE_2_polythene_css__["b" /* styler */].generateStyles([customSelector, selector], _extends$1({}, vars, customVars), fns);
};

__WEBPACK_IMPORTED_MODULE_2_polythene_css__["b" /* styler */].generateStyles([selector], vars, fns);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var classes = {
  component: "pe-svg"
};

var view = function view(vnode) {
  var attrs = vnode.attrs;
  var element = attrs.element || "div";
  var props = _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_polythene_core__["c" /* filterSupportedAttributes */])(attrs), {
    class: [classes.component, attrs.tone === "dark" ? "pe-dark-theme" : null, attrs.tone === "light" ? "pe-light-theme" : null, attrs.class].join(" ")
  });
  var content = attrs.content ? attrs.content : attrs.children || vnode.children;
  return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(element, props, [attrs.before, content, attrs.after]);
};

var svg = {
  theme: customTheme, // accepts (selector, vars)
  view: view
};

/* harmony default export */ __webpack_exports__["a"] = (svg);


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"/></svg>');


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>');


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return rules; });
/*
Theme style definitions using Tachyon.
Complete list of tags: http://tachyons.io/docs/table-of-styles/
*/

var bottomBorder = ".bb";
var resultHeight = ".minh8";

var rules = {
  page: ".pa4.lh-title-m.mid-gray",
  pageTitle: "h1.ma0.normal.f3.pv3",
  headerRow: ".header-row" + bottomBorder + ".fixed.w-100.z-3",
  interactive: ".interactive.bg-washed-blue",
  separator: "span.ph2.light-silver",
  link: "a.link.underline-hover.blue",
  list: "ul.list.pa0",
  listItem: "li.mv1",
  results: ".results",
  resultRow: ".result-row.flex-column" + bottomBorder + resultHeight + ".pv2",
  resultTitle: ".flex.flex-row-ns.f5.ma3",
  resultData: ".flex.flex-column.flex-row-l.mv3",
  resultDataRendered: ".result.relative.flex-none.flex-l.flex-one.ma3.minh4",
  content: ".component-result.relative.w-100",
  resultDataRaw: ".flex-none.flex-l.flex-one.ma3",
  resultDataRawHtml: ".generated-html.prewrap.relative.light-silver.h-100"
};

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_raised_button__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_icon__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_polythene_theme__ = __webpack_require__(2);
/* unused harmony export classes */
/* unused harmony export vars */






var rgba = __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].rgba;

var vars$1 = {
  size_regular: 7 * __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].grid_unit_component,
  size_mini: 5 * __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].grid_unit_component,
  padding_regular: 2 * __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].grid_unit_component,

  color_light: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_primary_foreground),
  color_dark: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_primary_foreground),

  color_light_background: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_primary),
  color_dark_background: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_primary)
};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var layout = (function (selector, componentVars) {
  return [_defineProperty({}, selector, {
    userSelect: "none",
    display: "inline-block",
    position: "relative",
    outline: "none",
    cursor: "pointer",
    padding: 0,
    border: "none",

    " .pe-button__content": {
      position: "relative",
      width: componentVars.size_regular + "px",
      height: componentVars.size_regular + "px",
      borderRadius: "50%",
      padding: componentVars.padding_regular + "px"
    },

    ".pe-fab--mini": {
      " .pe-button__content": {
        width: componentVars.size_mini + "px",
        height: componentVars.size_mini + "px",
        padding: (componentVars.size_mini - __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].unit_icon_size) / 2 + "px"
      }
    },

    " .pe-ripple": {
      borderRadius: "inherit"
    },

    " .pe-button__wash": {
      transition: "background-color " + __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].animation_duration + " ease-in-out",
      borderRadius: "inherit",
      pointerEvents: "none",
      backgroundColor: "transparent"
    }
  })];
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = function style(scopes, selector, componentVars, tint) {
  return [_defineProperty$1({}, scopes.map(function (s) {
    return s + selector;
  }).join(","), {
    " .pe-button__content": {
      backgroundColor: componentVars["color_" + tint + "_background"],
      color: componentVars["color_" + tint]
    }
  })];
};

var color = (function (selector, componentVars) {
  return [style([".pe-dark-theme", ".pe-dark-theme "], selector, componentVars, "dark"), // has/inside dark theme
  style(["", ".pe-light-theme", ".pe-light-theme "], selector, componentVars, "light")];
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [layout, color];
var selector = ".pe-fab";

var customTheme = function customTheme(customSelector, customVars) {
  return __WEBPACK_IMPORTED_MODULE_3_polythene_css__["b" /* styler */].generateStyles([customSelector, selector], _extends$1({}, vars$1, customVars), fns);
};

__WEBPACK_IMPORTED_MODULE_3_polythene_css__["b" /* styler */].generateStyles([selector], vars$1, fns);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var classes = {
  component: "pe-fab",
  content: "pe-fab__content",
  mini: "pe-fab--mini"
};

var view = function view(vnode) {
  var attrs = vnode.attrs;
  var content = attrs.content ? attrs.content : attrs.icon ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_icon__["a" /* default */], attrs.icon) : attrs.children || vnode.children;
  return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_raised_button__["a" /* default */], _extends({}, {
    content: __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
      class: classes.content
    }, content),
    parentClass: [classes.component, attrs.mini ? classes.mini : null].join(" "),
    // defaults
    ripple: {
      center: true,
      opacityDecayVelocity: 0.24
    },
    shadow: { increase: 5 },
    ink: true,
    wash: true,
    animateOnTap: attrs.animateOnTap !== undefined ? attrs.animateOnTap : true
  }, attrs));
};

var fab = {
  theme: customTheme, // accepts (selector, vars)
  view: view
};

/* harmony default export */ __webpack_exports__["a"] = (fab);


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_textfield__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_polythene_theme__ = __webpack_require__(2);
/* unused harmony export classes */
/* unused harmony export vars */






var rgba = __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].rgba;

var insetSideMargin = 8;

var line_height_input = 20;
var font_size_input = 20;

var inset_height = 48;
var inset_input_indent = 16;
var inset_input_right_padding = 0;
var inset_side_padding = 0;
var inset_border_radius = __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].unit_block_border_radius;

var full_width_side_margin = 0;
var full_width_height = 56;
var full_width_side_padding = insetSideMargin;
var full_width_input_right_padding = 0;
var full_width_border_radius = 0;

var vars$1 = {
  font_size_input: font_size_input,
  line_height_input: line_height_input,

  inset_height: inset_height,
  inset_input_indent: inset_input_indent,
  inset_side_padding: inset_side_padding,
  inset_input_right_padding: inset_input_right_padding,
  inset_border_radius: inset_border_radius,

  full_width_height: full_width_height,
  full_width_side_margin: full_width_side_margin,
  full_width_side_padding: full_width_side_padding,
  full_width_input_right_padding: full_width_input_right_padding,
  full_width_border_radius: full_width_border_radius,

  color_light_label_text: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].blend_light_text_disabled),
  color_light_input_text: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].blend_light_text_primary),
  color_light_background: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_light_background),

  color_dark_label_text: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].blend_dark_text_disabled),
  color_dark_input_text: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].blend_dark_text_primary),
  color_dark_background: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_dark_background)
};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var layout = (function (selector, componentVars) {
  var inset_input_padding_v = (componentVars.inset_height - componentVars.line_height_input) / 2;
  var full_width_input_padding_v = (componentVars.full_width_height - componentVars.line_height_input) / 2;
  var full_width_input_indent = __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].unit_indent - componentVars.full_width_side_padding - __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].grid_unit_icon_button;

  return [_defineProperty({}, selector, [__WEBPACK_IMPORTED_MODULE_3_polythene_css__["a" /* flex */].flex(), {
    position: "relative", // necessary when a shadow is added

    " .pe-textfield": [__WEBPACK_IMPORTED_MODULE_3_polythene_css__["a" /* flex */].flex(), {
      padding: 0,
      // prevent that neighboring icon button with ripple hides the cursor
      position: "relative",
      zIndex: 1,

      " .pe-textfield__input-area": {
        padding: 0,

        ":after": {
          display: "none"
        }
      },

      " .pe-textfield__input, .pe-textfield__label": {
        fontSize: componentVars.font_size_input + "px",
        lineHeight: componentVars.line_height_input + "px"
      },

      " .pe-textfield__input": {
        // reset
        border: "none"
      },

      " .pe-textfield__label": {
        // reset
        top: 0,
        bottom: 0
      }
    }],

    " .pe-search__content": __WEBPACK_IMPORTED_MODULE_3_polythene_css__["a" /* flex */].layoutHorizontal,

    " .pe-search__content > *": [__WEBPACK_IMPORTED_MODULE_3_polythene_css__["a" /* flex */].layoutVertical, __WEBPACK_IMPORTED_MODULE_3_polythene_css__["a" /* flex */].selfCenter],

    ".pe-search--inset": {
      "border-radius": componentVars.inset_border_radius + "px",
      padding: "0 " + componentVars.inset_side_padding + "px",

      "&, .pe-textfield__input-area, .pe-textfield__input, .pe-textfield__label": {
        padding: 0,
        height: componentVars.inset_height + "px"
      },
      " .pe-textfield__input, .pe-textfield__label": {
        paddingTop: inset_input_padding_v + "px",
        paddingBottom: inset_input_padding_v + "px",
        paddingLeft: componentVars.inset_input_indent + "px",
        paddingRight: componentVars.inset_input_right_padding + "px"
      }
    },

    ".pe-search--full-width": {
      borderRadius: componentVars.full_width_border_radius + "px",
      padding: "0 " + componentVars.full_width_side_padding + "px",

      "&, .pe-textfield__input-area, .pe-textfield__input, .pe-textfield__label": {
        height: componentVars.full_width_height + "px"
      },
      " .pe-textfield__input, .pe-textfield__label": {
        paddingTop: full_width_input_padding_v + "px",
        paddingBottom: full_width_input_padding_v + "px",
        paddingLeft: full_width_input_indent + "px",
        paddingRight: componentVars.full_width_input_right_padding + "px"
      }
    }
  }])];
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = function style(scopes, selector, componentVars, tint) {
  return [_defineProperty$1({}, scopes.map(function (s) {
    return s + selector;
  }).join(","), {
    backgroundColor: componentVars["color_" + tint + "_background"],

    " .pe-textfield": {
      " .pe-textfield__label": {
        color: componentVars["color_" + tint + "_label_text"]
      },
      " .pe-textfield__input": {
        color: componentVars["color_" + tint + "_input_text"]
      },
      " .pe-textfield__input-area": {
        backgroundColor: "transparent"
      }
    }
  })];
};

var color = (function (selector, componentVars) {
  return [style([".pe-dark-theme", ".pe-dark-theme "], selector, componentVars, "dark"), // has/inside dark theme
  style(["", ".pe-light-theme", ".pe-light-theme "], selector, componentVars, "light")];
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [layout, color];
var selector = ".pe-search";

var customTheme = function customTheme(customSelector, customVars) {
  return __WEBPACK_IMPORTED_MODULE_3_polythene_css__["b" /* styler */].generateStyles([customSelector, selector], _extends$1({}, vars$1, customVars), fns);
};

__WEBPACK_IMPORTED_MODULE_3_polythene_css__["b" /* styler */].generateStyles([selector], vars$1, fns);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var classes = {
  component: "pe-search",
  content: "pe-search__content",
  searchInset: "pe-search--inset",
  searchFullWidth: "pe-search--full-width"
};

var getNameOfState = function getNameOfState(state) {
  return state.focus && state.dirty ? "focus_dirty" : state.focus ? "focus" : state.dirty ? "dirty" : "none";
};

var view = function view(_ref) {
  var state = _ref.state,
      attrs = _ref.attrs;

  var element = attrs.element || "div";
  var props = _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_polythene_core__["c" /* filterSupportedAttributes */])(attrs), {
    class: [classes.component, attrs.fullWidth ? classes.searchFullWidth : classes.searchInset, attrs.tone === "dark" ? "pe-dark-theme" : null, attrs.tone === "light" ? "pe-light-theme" : null, attrs.class].join(" ")
  }, attrs.events);
  var searchState = getNameOfState(state.searchState);
  var buttons = (attrs.buttons || {})[searchState] || {};
  var textfieldAttrs = attrs.textfield || {};
  var content = __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
    class: classes.content
  }, [buttons.before, __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_textfield__["a" /* default */], _extends({}, textfieldAttrs, {
    getState: function getState(newState) {
      state.searchState = _extends({}, newState);
      if (textfieldAttrs.getState) {
        textfieldAttrs.getState(state.searchState);
      }
    }
  })), buttons.after]);
  return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(element, props, [attrs.before, content, attrs.after]);
};

var search = {
  theme: customTheme, // accepts (selector, vars)
  oninit: function oninit(vnode) {
    vnode.state.searchState = {};
  },
  view: view
};

/* harmony default export */ __webpack_exports__["a"] = (search);


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_notification__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_theme__ = __webpack_require__(2);
/* unused harmony export vars */
/* unused harmony export classes */





var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var classes$1 = _extends$2({}, __WEBPACK_IMPORTED_MODULE_1_polythene_notification__["b" /* classes */], {
  component: "pe-notification pe-snackbar",
  holder: "pe-snackbar__holder",
  placeholder: "pe-snackbar__placeholder",
  open: "pe-snackbar--open"
});

var _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var rgba = __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].rgba;

var vars$2 = _extends$3({}, __WEBPACK_IMPORTED_MODULE_1_polythene_notification__["c" /* vars */], {
  border_radius: 0,
  tablet_min_width: 288,
  tablet_max_width: 568,
  min_height: 0,

  color_dark_background: rgba(__WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].color_dark_background)
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var tabletStyle = function tabletStyle(componentVars) {
  return {
    width: "100%",
    minWidth: componentVars.tablet_min_width + "px",
    maxWidth: componentVars.tablet_max_width + "px",
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].unit_block_border_radius + "px",
    borderTopRightRadius: __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].unit_block_border_radius + "px",

    ".pe-notification--horizontal": {
      " .pe-notification__title": {
        paddingRight: "30px"
      }
    }
  };
};

var layout = (function (selector, componentVars) {
  var _ref2;

  return [(_ref2 = {}, _defineProperty(_ref2, selector, {
    minHeight: componentVars.min_height
  }), _defineProperty(_ref2, "@media (min-width: " + __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].breakpoint_small_handset_landscape + "px)", _defineProperty({}, selector, tabletStyle(componentVars))), _ref2)];
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = function style(scopes, selector, componentVars, tint) {
  return [_defineProperty$1({}, scopes.map(function (s) {
    return s + selector;
  }).join(","), {
    color: componentVars["color_" + tint + "_text"],
    background: componentVars["color_" + tint + "_background"]
  })];
};

var color = (function (selector, componentVars) {
  return [style([".pe-dark-theme", ".pe-dark-theme "], selector, componentVars, "dark"), // has/inside dark theme
  style(["", ".pe-light-theme", ".pe-light-theme "], selector, componentVars, "light")];
});

function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var holderLayout = (function (selector) {
  return [_defineProperty$2({}, selector, [__WEBPACK_IMPORTED_MODULE_2_polythene_css__["a" /* flex */].layoutCenterCenter, {
    top: "auto",
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].z_notification,
    pointerEvents: "none",

    ".pe-multiple--screen": {
      position: "fixed"
    },
    ".pe-multiple--container": {
      position: "absolute"
    }
  }])];
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [layout, color];
var selector = "." + classes$1.component.replace(/ /g, ".");

var holderFns = [holderLayout];
var holderSelector = "." + classes$1.holder.replace(/ /g, ".");

var customTheme = function customTheme(customSelector, customVars) {
  return __WEBPACK_IMPORTED_MODULE_2_polythene_css__["b" /* styler */].generateStyles([customSelector, selector], _extends$1({}, vars$2, customVars), fns), __WEBPACK_IMPORTED_MODULE_2_polythene_css__["b" /* styler */].generateStyles([customSelector, holderSelector], _extends$1({}, vars$2, customVars), holderFns);
};

__WEBPACK_IMPORTED_MODULE_2_polythene_css__["b" /* styler */].generateStyles([selector], vars$2, fns);
__WEBPACK_IMPORTED_MODULE_2_polythene_css__["b" /* styler */].generateStyles([holderSelector], vars$2, holderFns);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var instance$1 = _extends({}, __WEBPACK_IMPORTED_MODULE_1_polythene_notification__["d" /* instance */], {
  theme: customTheme // accepts (selector, vars)
});

var show = function show(el, opts) {
  var height = el.getBoundingClientRect().height;
  return {
    el: el,
    showDuration: opts.showDuration || .4,
    showDelay: opts.showDelay || 0,
    beforeShow: function beforeShow() {
      return el.style.transform = "translate3d(0, " + height + "px, 0)";
    },
    show: function show() {
      return el.style.transform = "translate3d(0, " + 0 + "px, 0)";
    }
  };
};

var hide = function hide(el, opts) {
  var height = el.getBoundingClientRect().height;
  return {
    el: el,
    hideDuration: opts.hideDuration || .4,
    hideDelay: opts.hideDelay || 0,
    hide: function hide() {
      return el.style.transform = "translate3d(0, " + height + "px, 0)";
    },
    afterHide: function afterHide() {
      return el.style.transform = "translate3d(0, " + 0 + "px, 0)";
    }
  };
};

var transitions = {
  show: show,
  hide: hide
};

var snackbar = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["d" /* multiple */])({
  instance: instance$1,
  transitions: transitions,
  queue: true,
  defaultId: "default_snackbar",
  class: classes$1.component,
  element: "." + classes$1.holder.replace(/ /g, "."),
  placeholder: "span." + classes$1.placeholder.replace(/ /g, "."),
  bodyShowClass: classes$1.open
});

/* harmony default export */ __webpack_exports__["a"] = (snackbar);


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_utilities__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_polythene_theme__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_polythene_button__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_polythene_icon_button__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_polythene_icon__ = __webpack_require__(4);
/* unused harmony export classes */
/* unused harmony export vars */









var rgba = __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].rgba;

var fontSize = __WEBPACK_IMPORTED_MODULE_5_polythene_button__["b" /* vars */].font_size;
var tab_label_line_height = 1.1 * fontSize;

var vars$3 = {
  tab_min_width: 72,
  tab_max_width: "initial",
  tab_height: 48,
  // tab_min_width_tablet:             160,
  label_max_width: 264,
  menu_tab_height: 44,
  menu_tab_icon_label_height: 44,
  tab_icon_label_height: 72,
  tab_icon_label_icon_spacing: 7,
  indicator_slide_speed: 600, // px per second
  indicator_slide_min_duration: .250,
  tabs_indent: __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].unit_indent,
  tabs_scroll_speed: 600, // px per second
  tabs_scroll_delay: .15,
  tabs_scroll_min_duration: .5,
  scroll_button_fade_duration: .2,
  scroll_button_fade_delay: .5,
  tab_content_padding_v: 12,
  tab_menu_content_padding_v: 6,
  tab_indicator_height: 2,
  scrollbar_offset: 20,
  scroll_button_opacity: .7,
  label_opacity: .7,

  tab_label_line_height: tab_label_line_height,
  tab_label_vertical_offset: tab_label_line_height - fontSize,
  tab_label_transition_property: "opacity, color, backgroundColor",

  color_light: "inherit",
  color_light_selected: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_primary),
  color_light_selected_background: "transparent",
  color_light_tab_indicator: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_primary),
  color_light_icon: __WEBPACK_IMPORTED_MODULE_6_polythene_icon_button__["b" /* vars */].color_light,

  color_dark: "inherit",
  color_dark_selected: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_primary),
  color_dark_selected_background: "transparent",
  color_dark_tab_indicator: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_primary),
  color_dark_icon: __WEBPACK_IMPORTED_MODULE_6_polythene_icon_button__["b" /* vars */].color_dark
};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var layout = (function (selector, componentVars) {
  return [_defineProperty({}, selector, {
    userSelect: "none",
    transform: "translate3d(0,0,0)",
    "-webkit-overflow-scrolling": "touch",

    "& ::-webkit-scrollbar": {
      "display": "none"
    },

    ".pe-tabs--menu": {
      // reset sizes to fit within a small space
      " .pe-tabs__tab": {
        height: componentVars.menu_tab_height + "px"
      },
      " .pe-tabs__tab---icon": {
        height: componentVars.menu_tab_icon_label_height + "px"
      },
      " .pe-tabs__tab, .pe-tabs__tab.pe-tabs__tab---icon, .pe-tabs__tab.pe-text-button": {
        minWidth: 0,
        height: componentVars.menu_tab_icon_label_height + "px",

        " .pe-button__content": {
          padding: "0 " + componentVars.tab_menu_content_padding_v + "px",
          height: componentVars.menu_tab_height + "px",

          " .pe-icon": {
            marginBottom: 0
          },
          " .pe-button__content": {
            fontSize: "10px",
            lineHeight: "12px",
            textTransform: "none"
          }
        }
      }
    },

    ".pe-tabs--scrollable": {
      // hide scrollbar (this approach is required for Firefox)
      "max-height": componentVars.tab_height + "px",
      "-ms-overflow-style": "none",

      " .pe-tabs__scroll-button": {
        // default hide, show with html.pe-no-touch
        display: "none"
      },

      " .pe-tabs__row": {
        marginBottom: -componentVars.scrollbar_offset + "px"
      }
    },

    " .pe-no-touch &": {
      ".pe-tabs--scrollable": {
        backgroundColor: "inherit"
      },

      " .pe-tabs__scroll-button": {
        position: "absolute",
        display: "block",
        top: 0,
        backgroundColor: "inherit",
        zIndex: 1,
        borderRadius: 0,

        " .pe-button__content": {
          borderRadius: 0,
          backgroundColor: "inherit",
          transitionProperty: componentVars.tab_label_transition_property,
          transitionDuration: componentVars.scroll_button_fade_duration + "s",
          transitionTimingFunction: "ease-out",
          transitionDelay: componentVars.scroll_button_fade_delay + "s",
          opacity: componentVars.scroll_button_opacity
        }
      },
      ".pe-tabs--start .pe-tabs__scroll-button-start": {
        pointerEvents: "none",
        cursor: "default",

        " .pe-button__content": {
          opacity: 0
        }
      },
      ".pe-tabs--end .pe-tabs__scroll-button-end": {
        pointerEvents: "none",
        cursor: "default",

        " .pe-button__content": {
          opacity: 0
        }
      },

      " .pe-tabs__scroll-button-start": {
        left: 0
      },
      " .pe-tabs__scroll-button-end": {
        right: 0
      }
    },

    " .pe-tabs__row": [__WEBPACK_IMPORTED_MODULE_3_polythene_css__["a" /* flex */].layoutHorizontal, {
      userSelect: "none",
      position: "relative",
      whiteSpace: "nowrap",

      ".pe-tabs__row--indent": {
        margin: 0,
        paddingLeft: componentVars.tabs_indent + "px",
        overflow: "auto"
      },

      ".pe-tabs__row--centered": __WEBPACK_IMPORTED_MODULE_3_polythene_css__["a" /* flex */].layoutCenterJustified
    }],

    " .pe-tabs__scroll-button-offset": [__WEBPACK_IMPORTED_MODULE_3_polythene_css__["a" /* flex */].flex(), __WEBPACK_IMPORTED_MODULE_3_polythene_css__["a" /* flex */].flexIndex("none")],

    " .pe-tabs__tab": [__WEBPACK_IMPORTED_MODULE_3_polythene_css__["a" /* flex */].flex(), __WEBPACK_IMPORTED_MODULE_3_polythene_css__["a" /* flex */].flexIndex("none"), __WEBPACK_IMPORTED_MODULE_3_polythene_css__["c" /* mixin */].defaultTransition("color"), {
      userSelect: "none",
      margin: 0,
      borderRadius: 0,
      height: componentVars.tab_height + "px",
      padding: 0,
      color: "inherit",
      minWidth: !isNaN(componentVars.tab_min_width) ? componentVars.tab_min_width + "px" : componentVars.tab_min_width, // for smaller screens, see also media query below
      maxWidth: !isNaN(componentVars.tab_max_width) ? componentVars.tab_max_width + "px" : componentVars.tab_max_width,

      ".pe-text-button .pe-button__content": {
        padding: "0 " + componentVars.tab_content_padding_v + "px",
        height: componentVars.tab_height + "px",
        lineHeight: __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].line_height + "em",
        borderRadius: 0,

        " .pe-button__label, .pe-icon": {
          maxWidth: componentVars.label_max_width + "px", // or .pe-tabs width minus 56dp
          lineHeight: componentVars.tab_label_line_height + "px",
          maxHeight: 2 * componentVars.tab_label_line_height + "px",
          overflow: "hidden",
          whiteSpace: "normal"
        },
        " .pe-button__label": [__WEBPACK_IMPORTED_MODULE_3_polythene_css__["c" /* mixin */].defaultTransition("opacity", componentVars.animation_duration), {
          margin: componentVars.tab_label_vertical_offset + "px 0 0 0",
          padding: 0,
          opacity: componentVars.label_opacity
        }],
        " .pe-icon": {
          marginLeft: "auto",
          marginRight: "auto"
        },
        " .pe-button__focus": {
          display: "none"
        }
      },
      ".pe-button--selected": {
        " .pe-button__content .pe-button__content": {
          opacity: 1
        }
      },
      ".pe-tabs__tab---icon": {
        "&, .pe-button__content": [{
          height: componentVars.tab_icon_label_height + "px"
        }, {
          " .pe-button__content, .pe-icon": {
            margin: "0 auto"
          }
        }, {
          " .pe-icon": {
            marginBottom: componentVars.tab_icon_label_icon_spacing + "px"
          }
        }]
      }
    }],

    " .pe-tabs__tab-content": [__WEBPACK_IMPORTED_MODULE_3_polythene_css__["a" /* flex */].layoutCenterCenter, __WEBPACK_IMPORTED_MODULE_3_polythene_css__["a" /* flex */].layoutVertical, {
      height: "inherit"
    }],

    ".pe-tabs--autofit .pe-tabs__tab": [__WEBPACK_IMPORTED_MODULE_3_polythene_css__["a" /* flex */].flex(), {
      minWidth: "initial",
      maxWidth: "none"
    }],

    ".pe-tabs__active-selectable": {
      " .pe-tabs__tab.pe-button--selected": {
        cursor: "pointer",
        pointerEvents: "initial"
      }
    },

    " .pe-tabs__indicator": {
      transform: "translate3d(0,0,0)",
      transformOrigin: "left 50%",
      transitionProperty: "all",
      transitionTimingFunction: "ease-out",
      position: "absolute",
      height: componentVars.tab_indicator_height + "px",
      bottom: 0,
      left: 0,
      width: "100%" // and transformed with js
      // background-color defined in implementation/theme css
    },

    " .pe-toolbar--tabs .pe-toolbar__bar &": [__WEBPACK_IMPORTED_MODULE_3_polythene_css__["c" /* mixin */].fit(), {
      width: "auto",
      margin: 0,
      top: "auto"
    }]

    // ["@media (min-width: " + vars.breakpoint_small_tablet_portrait + "px)"]: {
    //   ":not(.pe-tabs--small):not(.pe-tabs--menu):not(.pe-tabs--autofit) .pe-tabs__tab": {
    //     minWidth: componentVars.tab_min_width_tablet + "px"
    //   }
    // }
  })];
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = function style(scopes, selector, componentVars, tint) {
  return [_defineProperty$1({}, scopes.map(function (s) {
    return s + selector;
  }).join(","), {
    color: componentVars["color_" + tint],

    " .pe-tabs__tab.pe-button--selected": {
      color: componentVars["color_" + tint + "_selected"],

      " .pe-button__content": {
        background: componentVars["color_" + tint + "_selected_background"]
      }
    },
    " .pe-tabs__tab:not(.pe-button--selected) .pe-icon": {
      color: componentVars["color_" + tint + "_icon"]
    },
    " .pe-tabs__indicator": {
      backgroundColor: componentVars["color_" + tint + "_tab_indicator"]
    },
    " .pe-tabs__scroll-button": {
      color: "inherit"
    }
  })];
};

var color = (function (selector, componentVars) {
  return [style([".pe-dark-theme", ".pe-dark-theme "], selector, componentVars, "dark"), // has/inside dark theme
  style(["", ".pe-light-theme", ".pe-light-theme "], selector, componentVars, "light")];
});

var iconArrowBackward = __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.trust("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"/></svg>");

var iconArrowForward = __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.trust("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/></svg>");

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var arrowBackward = {
  msvg: iconArrowBackward
};
var arrowForward = {
  msvg: iconArrowForward
};

var fns = [layout, color];
var selector = ".pe-tabs";

var customTheme = function customTheme(customSelector, customVars) {
  return __WEBPACK_IMPORTED_MODULE_3_polythene_css__["b" /* styler */].generateStyles([customSelector, selector], _extends$1({}, vars$3, customVars), fns);
};

__WEBPACK_IMPORTED_MODULE_3_polythene_css__["b" /* styler */].generateStyles([selector], vars$3, fns);

var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var view$1 = function view(vnode) {
  var attrs = vnode.attrs;
  // Let internal onclick function co-exist with passed button option
  attrs.events = attrs.events || {};
  attrs.events.onclick = attrs.events.onclick || function () {};
  var tabButtonOptions = _extends$2({}, attrs, {
    content: __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", { class: classes.tabContent }, [attrs.icon ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_7_polythene_icon__["a" /* default */], attrs.icon) : null, attrs.label ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", { class: classes.label }, __WEBPACK_IMPORTED_MODULE_0_mithril___default()("span", attrs.label)) : null]),
    class: [classes.tab, attrs.icon && attrs.label ? classes.tabHasIcon : null, attrs.class].join(" "),
    selected: attrs.selected,
    wash: false,
    ripple: true,
    events: _extends$2({}, attrs.events, {
      onclick: function onclick(e) {
        attrs.onSelect();
        attrs.events.onclick(e);
      }
    }),
    oncreate: function oncreate(vnode) {
      return attrs.register(attrs.index, {
        data: attrs,
        el: vnode.dom
      });
    }
  });
  return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_5_polythene_button__["a" /* default */], tabButtonOptions);
};

var tab = {
  view: view$1
};

var view$2 = function view(vnode) {
  var attrs = vnode.attrs;
  var icon$$1 = attrs.position === "start" ? attrs.icon || arrowBackward : attrs.icon || arrowForward;
  return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_6_polythene_icon_button__["a" /* default */], {
    class: [classes.scrollButton, attrs.class].join(" "),
    icon: icon$$1,
    ripple: { center: true },
    events: attrs.events,
    oncreate: function oncreate(vnode) {
      return attrs.register(attrs.position, vnode.dom);
    }
  });
};

var scrollButton = {
  view: view$2
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var classes = {
  component: "pe-tabs",
  scrollButton: "pe-tabs__scroll-button",
  scrollButtonAtStart: "pe-tabs__scroll-button-start",
  scrollButtonAtEnd: "pe-tabs__scroll-button-end",
  scrollButtonOffset: "pe-tabs__scroll-button-offset",
  tabRow: "pe-tabs__row",
  tabRowCentered: "pe-tabs__row--centered",
  tabRowIndent: "pe-tabs__row--indent",
  tab: "pe-tabs__tab",
  tabContent: "pe-tabs__tab-content",
  tabHasIcon: "pe-tabs__tab---icon",
  indicator: "pe-tabs__indicator",
  scrollable: "pe-tabs--scrollable",
  isAutofit: "pe-tabs--autofit",
  isAtStart: "pe-tabs--start",
  isAtEnd: "pe-tabs--end",
  smallTabs: "pe-tabs--small",
  isMenu: "pe-tabs--menu",
  activeSelectable: "pe-tabs__active-selectable",
  // reference:  
  label: "pe-button__label"
};

var whenCreateDone = function whenCreateDone() {
  return Promise.resolve();
};

var getNewIndex = function getNewIndex(index, tabs) {
  var minTabIndex = 0;
  var maxTabIndex = tabs.length - 1;
  return {
    backward: Math.max(index - 1, minTabIndex),
    forward: Math.min(index + 1, maxTabIndex)
  };
};

var handleScrollButtonClick = function handleScrollButtonClick(state, attrs, e, direction) {
  e.stopPropagation();
  e.preventDefault();
  var currentTabIndex = state.selectedTabIndex;
  var newIndex = getNewIndex(currentTabIndex, state.tabs)[direction];
  if (newIndex !== currentTabIndex) {
    setSelectedTab(state, attrs, newIndex, true);
    __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.redraw();
  } else {
    scrollToTab(state, newIndex);
  }
};

/*
Moves the first tab to the left so that the text label is as position 0. 
*/
var alignToTitle = function alignToTitle(state) {
  var firstTab = state.tabs[0].el;
  var firstInnerLabel = firstTab.querySelector("." + classes.label + " span");
  var firstOuterLabelWidth = firstTab.getBoundingClientRect().width;
  var firstInnerLabelWidth = firstInnerLabel.getBoundingClientRect().width;
  var firstTabOffset = (firstOuterLabelWidth - firstInnerLabelWidth) / 2;
  firstTab.style.marginLeft = -firstTabOffset + "px";
};

var createRightButtonOffset = function createRightButtonOffset(state) {
  // add padding to right so that last item is not hidden behind scroll button
  var scrollButtonAtEndWidth = state.scrollButtons["end"].getBoundingClientRect().width;
  var scrollButtonOffsetEl = state.tabsEl.querySelector("." + classes.scrollButtonOffset);
  scrollButtonOffsetEl.style.width = scrollButtonAtEndWidth + "px";
};

var scrollToTab = function scrollToTab(state, tabIndex) {
  var tabs = state.tabs;
  var scroller = state.scrollerEl;
  // Scroll to position of selected tab
  var tabLeft = tabs.slice(0, tabIndex).reduce(function (totalWidth, tabData) {
    return totalWidth + tabData.el.getBoundingClientRect().width;
  }, 0);
  // Tabs at the far right will not fully move to the left
  // because the scrollable row will stick to the right 
  // to get the max scroll left, we subtract the visible viewport from the scroll width
  var scrollerWidth = scroller.getBoundingClientRect().width; // frame width
  var scrollingWidth = scroller.scrollWidth;
  var maxScroll = scrollingWidth - scrollerWidth;
  var left = Math.min(tabLeft, maxScroll);
  var currentLeft = scroller.scrollLeft;
  if (currentLeft !== left) {
    var duration = Math.abs(currentLeft - left) / vars$3.tabs_scroll_speed;
    var delaySeconds = vars$3.tabs_scroll_delay || 0;
    setTimeout(function () {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_polythene_utilities__["b" /* scrollTo */])({
        element: scroller,
        to: left,
        duration: Math.max(vars$3.tabs_scroll_min_duration, duration),
        direction: "horizontal"
      });
    }, delaySeconds * 1000);
  }
};

var updateScrollButtons = function updateScrollButtons(state) {
  var scrollerEl = state.scrollerEl;
  var scrollLeft = scrollerEl.scrollLeft;
  var currentTabIndex = state.selectedTabIndex;
  var tabsEl = state.tabsEl;
  var minTabIndex = 0;
  var maxTabIndex = state.tabs.length - 1;
  var isAtStart = scrollerEl.scrollLeft === 0 && currentTabIndex === minTabIndex;
  var isAtEnd = scrollLeft >= scrollerEl.scrollWidth - tabsEl.getBoundingClientRect().width - 1 && currentTabIndex === maxTabIndex;
  state.scrollButtonStates.start = !isAtStart;
  state.scrollButtonStates.end = !isAtEnd;
};

var animateIndicator = function animateIndicator(selectedTabEl, animate, state) {
  var parentRect = state.tabsEl.getBoundingClientRect();
  var rect = selectedTabEl.getBoundingClientRect();
  var style = state.tabIndicatorEl.style;
  var translateX = rect.left - parentRect.left + state.scrollerEl.scrollLeft;
  var transformCmd = "translate(" + translateX + "px, 0)";
  var duration = animate ? vars$3.indicator_slide_min_duration : 0;
  // use width instead of scale to please IE10
  style.width = rect.width + "px";
  style["transition-duration"] = style["-webkit-transition-duration"] = style["-moz-transition-duration"] = style["-o-transition-duration"] = duration + "s";
  style.transform = style["-webkit-transform"] = style["-moz-transform"] = style["-ms-transform"] = style["-o-transform"] = transformCmd;
};

var setSelectedTab = function setSelectedTab(state, attrs, index, animate) {
  state.selectedTabIndex = index;
  if (!state.tabs.length) return;
  var selectedTabEl = state.tabs[index].el;
  if (selectedTabEl && state.tabIndicatorEl && state.tabsEl) {
    animateIndicator(selectedTabEl, animate, state);
  }
  if (state.managesScroll) {
    updateScrollButtons(state);
    scrollToTab(state, index);
  }
  if (attrs.getState) {
    attrs.getState({
      index: index,
      data: state.tabs[index].data,
      el: selectedTabEl
    });
  }
};

var sortByLargestWidth = function sortByLargestWidth(a, b) {
  return a < b ? 1 : a > b ? -1 : 0;
};

var view = function view(vnode) {
  var attrs = vnode.attrs;
  var state = vnode.state;
  var element = attrs.element || "div";
  var autofit = attrs.scrollable || attrs.centered ? false : attrs.autofit ? true : false;

  // Keep selected tab up to date
  if (attrs.selectedTab !== undefined && state.previousSelectedTab !== attrs.selectedTab) {
    setSelectedTab(state, attrs, attrs.selectedTab, true);
  }
  state.previousSelectedTab = attrs.selectedTab;

  var onResize = function onResize() {
    return setSelectedTab(state, attrs, state.selectedTabIndex, false), __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.redraw();
  };

  var props = _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_polythene_core__["c" /* filterSupportedAttributes */])(attrs), {
    class: [classes.component, attrs.scrollable ? classes.scrollable : null, state.selectedTabIndex === 0 ? classes.isAtStart : null, state.selectedTabIndex === state.tabs.length - 1 ? classes.isAtEnd : null, attrs.activeSelected ? classes.activeSelectable : null, autofit ? classes.isAutofit : null, attrs.small ? classes.smallTabs : null, attrs.menu ? classes.isMenu : null, attrs.tone === "dark" ? "pe-dark-theme" : null, attrs.tone === "light" ? "pe-light-theme" : null, attrs.class].join(" "),
    oninit: function oninit() {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_polythene_core__["g" /* subscribe */])("resize", onResize);
    },
    oncreate: function oncreate(vnode) {
      state.tabsEl = vnode.dom;
      // A promise can't resolve during the oncreate loop
      // The Mithril draw loop is synchronous - there is no delay between one this oncreate and the tab button's oncreate
      whenCreateDone().then(function () {
        if (attrs.largestWidth) {
          var widths = state.tabs.map(function (tabData) {
            return tabData.el.getBoundingClientRect().width;
          });
          var largest = widths.sort(sortByLargestWidth)[0];
          state.tabs.forEach(function (tabData) {
            return tabData.el.style.width = largest + "px";
          });
        }
        // Align first scrollable tab to title
        if (attrs.scrollable) {
          alignToTitle(state);
        }
        // Handle scroll
        if (attrs.scrollable && !__WEBPACK_IMPORTED_MODULE_1_polythene_core__["i" /* isTouch */]) {
          state.managesScroll = true;
          createRightButtonOffset(state);
        }
        setSelectedTab(state, attrs, state.selectedTabIndex, false);
        if (attrs.getState) {
          // Give immediate feedback
          setTimeout(__WEBPACK_IMPORTED_MODULE_0_mithril___default.a.redraw);
        }
      });
    },
    onremove: function onremove() {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_polythene_core__["f" /* unsubscribe */])("resize", onResize);
    }
  });

  var buttons = attrs.content ? attrs.content : attrs.buttons ? attrs.buttons : attrs.children || vnode.children;

  var tabRowButtons = buttons.map(function () {
    var buttonOpts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var index = arguments[1];

    var buttonOptsCombined = _extends({}, buttonOpts, {
      // These options can be overridden by tabsOpts
      selected: index === state.selectedTabIndex,
      animateOnTap: attrs.animateOnTap !== false ? true : false
    }, attrs.tabsOpts || {}, {
      // Internal options, should never be overridden
      index: index,
      key: "tab-" + index,
      register: state.registerTabButton,
      onSelect: function onSelect() {
        return setSelectedTab(state, attrs, index, attrs.noIndicatorSlide ? false : true), setTimeout(__WEBPACK_IMPORTED_MODULE_0_mithril___default.a.redraw);
      }
    });
    return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(tab, buttonOptsCombined);
  });

  var tabRow = attrs.scrollable ? tabRowButtons.concat([
  // offset for right scroll button
  __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", { class: classes.scrollButtonOffset })]) : tabRowButtons;

  var scrollButtonAtStart = void 0,
      scrollButtonAtEnd = void 0;
  if (attrs.scrollable) {
    scrollButtonAtStart = __WEBPACK_IMPORTED_MODULE_0_mithril___default()(scrollButton, _extends({}, {
      icon: attrs.scrollIconBackward,
      class: classes.scrollButtonAtStart,
      position: "start",
      register: state.registerScrollButton,
      events: { onclick: function onclick(e) {
          return handleScrollButtonClick(state, attrs, e, "backward");
        } }
    }));
    scrollButtonAtEnd = __WEBPACK_IMPORTED_MODULE_0_mithril___default()(scrollButton, _extends({}, {
      icon: attrs.scrollIconForward,
      class: classes.scrollButtonAtEnd,
      position: "end",
      register: state.registerScrollButton,
      events: { onclick: function onclick(e) {
          return handleScrollButtonClick(state, attrs, e, "forward");
        } }
    }));
  }

  var tabIndicator = attrs.hideIndicator ? null : __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
    class: classes.indicator,
    oncreate: function oncreate(vnode) {
      return state.tabIndicatorEl = vnode.dom;
    }
  });

  var content = [attrs.scrollable ? scrollButtonAtStart : null, __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
    class: [classes.tabRow, attrs.centered ? classes.tabRowCentered : null, attrs.scrollable ? classes.tabRowIndent : null].join(" "),
    oncreate: function oncreate(vnode) {
      return state.scrollerEl = vnode.dom;
    }
  }, [tabRow, tabIndicator]), attrs.scrollable ? scrollButtonAtEnd : null];

  return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(element, props, [attrs.before, content, attrs.after]);
};

var tabs = {
  theme: customTheme, // accepts (selector, vars)
  view: view,
  oninit: function oninit(vnode) {
    var registerTabButton = function registerTabButton(index, data) {
      return vnode.state.tabs[index] = data;
    };
    var registerScrollButton = function registerScrollButton(position, dom) {
      return vnode.state.scrollButtons[position] = dom;
    };
    vnode.state = _extends(vnode.state, {
      tabsEl: undefined,
      scrollerEl: undefined,
      tabs: [], // {data, el}
      tabRow: undefined,
      tabIndicatorEl: undefined,
      selectedTabIndex: vnode.attrs.selectedTab || 0,
      previousSelectedTab: undefined,
      managesScroll: false,
      scrollButtonStates: {
        start: false,
        end: false
      },
      scrollButtons: {
        start: undefined,
        end: undefined
      },
      registerTabButton: registerTabButton,
      registerScrollButton: registerScrollButton
    });
  }
};

/* harmony default export */ __webpack_exports__["a"] = (tabs);


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export easing */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scrollTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Timer; });
/*
https://gist.github.com/gre/1650294
Easing Functions - inspired from http://gizma.com/easing/
Only considering the t value for the range [0, 1] => [0, 1]
*/

var easing = {
  // no easing, no acceleration
  linear: function linear(t) {
    return t;
  },
  // accelerating from zero velocity
  easeInQuad: function easeInQuad(t) {
    return t * t;
  },
  // decelerating to zero velocity
  easeOutQuad: function easeOutQuad(t) {
    return t * (2 - t);
  },
  // acceleration until halfway, then deceleration
  easeInOutQuad: function easeInOutQuad(t) {
    return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  },
  // accelerating from zero velocity
  easeInCubic: function easeInCubic(t) {
    return t * t * t;
  },
  // decelerating to zero velocity
  easeOutCubic: function easeOutCubic(t) {
    return --t * t * t + 1;
  },
  // acceleration until halfway, then deceleration
  easeInOutCubic: function easeInOutCubic(t) {
    return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  },
  // accelerating from zero velocity
  easeInQuart: function easeInQuart(t) {
    return t * t * t * t;
  },
  // decelerating to zero velocity
  easeOutQuart: function easeOutQuart(t) {
    return 1 - --t * t * t * t;
  },
  // acceleration until halfway, then deceleration
  easeInOutQuart: function easeInOutQuart(t) {
    return t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
  },
  // accelerating from zero velocity
  easeInQuint: function easeInQuint(t) {
    return t * t * t * t * t;
  },
  // decelerating to zero velocity
  easeOutQuint: function easeOutQuint(t) {
    return 1 + --t * t * t * t * t;
  },
  // acceleration until halfway, then deceleration
  easeInOutQuint: function easeInOutQuint(t) {
    return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
  }
};

/*
 Animated scroll to a position.
 Derived from https://github.com/madebysource/animated-scrollto
 Adapted to Mithril and rewritten to es6.
*/

var scrollTo = function scrollTo(opts) {
  var element = opts.element;
  var which = opts.direction === "horizontal" ? "scrollLeft" : "scrollTop";
  var to = opts.to;
  var duration = opts.duration * 1000;
  var easingFn = opts.easing || easing.easeInOutCubic;
  var start = element[which];
  var change = to - start;
  var animationStart = new Date().getTime();
  var animating = true;
  return new Promise(function (resolve) {
    var animateScroll = function animateScroll() {
      if (!animating) {
        return;
      }
      requestAnimFrame(animateScroll);
      var now = new Date().getTime();
      var percentage = (now - animationStart) / duration;
      var val = start + change * easingFn(percentage);
      element[which] = val;
      if (percentage >= 1) {
        element[which] = to;
        animating = false;
        resolve();
      }
    };
    requestAnimFrame(animateScroll);
  });
};

var requestAnimFrame = function () {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
    return window.setTimeout(callback, 1000 / 60);
  };
}();

var Timer = function Timer(callback, delaySeconds) {
  var timerId = void 0,
      startTime = void 0,
      remaining = delaySeconds * 1000;

  var stop = function stop() {
    return window.clearTimeout(timerId);
  };

  var pause = function pause() {
    window.clearTimeout(timerId);
    remaining -= new Date() - startTime;
  };

  var start = function start() {
    startTime = new Date();
    window.clearTimeout(timerId);
    timerId = window.setTimeout(callback, remaining);
  };

  start();

  return {
    start: start,
    pause: pause,
    resume: start,
    stop: stop
  };
};




/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm1-11h-2v3H8v2h3v3h2v-3h3v-2h-3V9z"/></svg>');


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>');


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg>');


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>');


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" baseProfile="full" width="24" height="24" viewBox="0 0 24.00 24.00" enable-background="new 0 0 24.00 24.00" xml:space="preserve"><path fill="#000000" fill-opacity="1" stroke-width="1.33333" stroke-linejoin="miter" d="M 12,2C 6.47715,2 2,6.4772 2,12C 2,17.5228 6.47715,22 12,22C 17.5228,22 22,17.5228 22,12C 22,6.4772 17.5228,2 12,2 Z M 12,4C 16.4183,4 20,7.5817 20,12C 20,16.4183 16.4183,20 12,20C 7.58172,20 4,16.4183 4,12C 4,7.5817 7.58172,4 12,4 Z M 12,6C 8.68629,6 6,8.6863 6,12C 6,15.3137 8.68629,18 12,18C 15.3137,18 18,15.3137 18,12C 18,8.6863 15.3137,6 12,6 Z M 12,8C 14.2091,8 16,9.7909 16,12C 16,14.2091 14.2091,16 12,16C 9.79086,16 8,14.2091 8,12C 8,9.7909 9.79086,8 12,8 Z M 12,10C 10.8954,10 10,10.8954 10,12C 10,13.1046 10.8954,14 12,14C 13.1046,14 14,13.1046 14,12C 14,10.8954 13.1046,10 12,10 Z "/></svg>');


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" baseProfile="full" width="24" height="24" viewBox="0 0 24.00 24.00" enable-background="new 0 0 24.00 24.00" xml:space="preserve"><path fill="#000000" fill-opacity="1" stroke-width="0.2" stroke-linejoin="round" d="M 11.9994,21.3497L 10.5504,20.0327C 5.4014,15.3607 1.99939,12.2736 1.99939,8.49762C 1.99939,5.41364 4.41537,2.99762 7.49939,2.99762C 9.24039,2.99762 10.9084,3.80566 11.9994,5.08362C 13.0904,3.80566 14.7584,2.99762 16.4994,2.99762C 19.5834,2.99762 21.9994,5.41364 21.9994,8.49762C 21.9994,12.2736 18.5974,15.3607 13.4484,20.0327L 11.9994,21.3497 Z "/></svg>');


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_fastclick__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_material_design__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__page__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_polythene_list__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_polythene_list_tile__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_polythene_toolbar__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tests_button_tests__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__tests_card_tests__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__tests_checkbox_tests__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__tests_dialog_tests__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__tests_fab_tests__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__tests_icon_tests__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__tests_icon_button_tests__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__tests_list_tests__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__tests_list_tile_tests__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__tests_menu_tests__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__tests_notification_tests__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__tests_radio_button_tests__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__tests_raised_button_tests__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__tests_ripple_tests__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__tests_search_tests__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__tests_shadow_tests__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__tests_slider_tests__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__tests_snackbar_tests__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__tests_svg_tests__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__tests_switch_button_tests__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__tests_tabs_tests__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__tests_textfield_tests__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__tests_toolbar_tests__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__tests_css_tests__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__tests_css_classes_tests__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__tests_theme_tests__ = __webpack_require__(81);



































var pages = [{
  path: "/button",
  name: "Button",
  tests: __WEBPACK_IMPORTED_MODULE_8__tests_button_tests__["a" /* tests */]
}, {
  path: "/raised-button",
  name: "Raised button",
  tests: __WEBPACK_IMPORTED_MODULE_20__tests_raised_button_tests__["a" /* tests */]
}, {
  path: "/card",
  name: "Card",
  tests: __WEBPACK_IMPORTED_MODULE_9__tests_card_tests__["a" /* tests */]
}, {
  path: "/checkbox",
  name: "Checkbox",
  tests: __WEBPACK_IMPORTED_MODULE_10__tests_checkbox_tests__["a" /* tests */]
}, {
  path: "/dialog",
  name: "Dialog",
  tests: __WEBPACK_IMPORTED_MODULE_11__tests_dialog_tests__["a" /* tests */]
}, {
  path: "/fab",
  name: "FAB",
  tests: __WEBPACK_IMPORTED_MODULE_12__tests_fab_tests__["a" /* tests */]
}, {
  path: "/icon",
  name: "Icon",
  tests: __WEBPACK_IMPORTED_MODULE_13__tests_icon_tests__["a" /* tests */]
}, {
  path: "/icon-button",
  name: "Icon Button",
  tests: __WEBPACK_IMPORTED_MODULE_14__tests_icon_button_tests__["a" /* tests */]
}, {
  path: "/list",
  name: "List",
  tests: __WEBPACK_IMPORTED_MODULE_15__tests_list_tests__["a" /* tests */]
}, {
  path: "/list-tile",
  name: "List tile",
  tests: __WEBPACK_IMPORTED_MODULE_16__tests_list_tile_tests__["a" /* tests */]
}, {
  path: "/menu",
  name: "Menu",
  tests: __WEBPACK_IMPORTED_MODULE_17__tests_menu_tests__["a" /* tests */]
}, {
  path: "/notification",
  name: "Notification",
  tests: __WEBPACK_IMPORTED_MODULE_18__tests_notification_tests__["a" /* tests */]
}, {
  path: "/snackbar",
  name: "Notification - Snackbar",
  tests: __WEBPACK_IMPORTED_MODULE_25__tests_snackbar_tests__["a" /* tests */]
}, {
  path: "/radio-button",
  name: "Radio button",
  tests: __WEBPACK_IMPORTED_MODULE_19__tests_radio_button_tests__["a" /* tests */]
}, {
  path: "/ripple",
  name: "Ripple",
  tests: __WEBPACK_IMPORTED_MODULE_21__tests_ripple_tests__["a" /* tests */]
}, {
  path: "/search",
  name: "Search",
  tests: __WEBPACK_IMPORTED_MODULE_22__tests_search_tests__["a" /* tests */]
}, {
  path: "/shadow",
  name: "Shadow",
  tests: __WEBPACK_IMPORTED_MODULE_23__tests_shadow_tests__["a" /* tests */]
}, {
  path: "/slider",
  name: "Slider",
  tests: __WEBPACK_IMPORTED_MODULE_24__tests_slider_tests__["a" /* tests */]
}, {
  path: "/svg",
  name: "SVG",
  tests: __WEBPACK_IMPORTED_MODULE_26__tests_svg_tests__["a" /* tests */]
}, {
  path: "/switch-button",
  name: "Switch button",
  tests: __WEBPACK_IMPORTED_MODULE_27__tests_switch_button_tests__["a" /* tests */]
}, {
  path: "/tabs",
  name: "Tabs",
  tests: __WEBPACK_IMPORTED_MODULE_28__tests_tabs_tests__["a" /* tests */]
}, {
  path: "/textfield",
  name: "Textfield",
  tests: __WEBPACK_IMPORTED_MODULE_29__tests_textfield_tests__["a" /* tests */]
}, {
  path: "/toolbar",
  name: "Toolbar",
  tests: __WEBPACK_IMPORTED_MODULE_30__tests_toolbar_tests__["a" /* tests */]
}, {
  path: "/theme",
  name: "Custom theme",
  tests: __WEBPACK_IMPORTED_MODULE_33__tests_theme_tests__["a" /* tests */]
}, {
  path: "/css",
  name: "CSS tools",
  tests: __WEBPACK_IMPORTED_MODULE_31__tests_css_tests__["a" /* tests */]
}, {
  path: "/css-classes",
  name: "CSS classes",
  tests: __WEBPACK_IMPORTED_MODULE_32__tests_css_classes_tests__["a" /* tests */]
}];

var index = {
  oncreate: function oncreate() {
    return document.title = "Polythene components";
  },
  view: function view() {
    return [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_3__styles__["a" /* rules */].headerRow, __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_7_polythene_toolbar__["a" /* default */], {
      style: {
        backgroundColor: "rgba(255,255,255,.93)"
      }
    }, __WEBPACK_IMPORTED_MODULE_0_mithril___default()("span", "Polythene components"))), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_5_polythene_list__["a" /* default */], {
      style: {
        padding: "88px 8px 24px 8px"
      }
    }, pages.map(function (link) {
      return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_6_polythene_list_tile__["a" /* default */], {
        title: link.name,
        url: {
          href: link.path,
          oncreate: __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.route.link
        }
      });
    }))];
  }
};

__WEBPACK_IMPORTED_MODULE_0_mithril___default.a.route.prefix("#");
var mountNode = document.querySelector("#app");
var routes = {
  "/": index
};
pages.forEach(function (page) {
  return routes[page.path] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__page__["a" /* default */])(page.name, page.tests, "/");
});
__WEBPACK_IMPORTED_MODULE_0_mithril___default.a.route(mountNode, "/", routes);

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_index__ = __webpack_require__(35);


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tidy; });
/* globals tidy_html5 */

var defaultHtmlTidyOptions = {
  "show-body-only": true,
  "indent-spaces": 4,
  "drop-empty-elements": false,
  "doctype": "omit",
  "indent": true,
  "quiet": true, // Hides "About this fork of Tidy ..."
  "show-warnings": false, // Hides "line 1 column 1 - Warning: missing <!DOCTYPE> declaration ...""
  "new-blocklevel-tags": ["svg", "defs"],
  "new-inline-tags": ["path", "polyline", "line", "polygon"]
};

var tidy = function tidy(html) {
  var htmltidyOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultHtmlTidyOptions;

  return tidy_html5(html, htmltidyOptions);
};

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scripts_render__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_toolbar__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_polythene_icon_button__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_polythene_dialog__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_polythene_notification__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_polythene_snackbar__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_mmsvg_google_msvg_navigation_arrow_back__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_mmsvg_google_msvg_navigation_arrow_back___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_mmsvg_google_msvg_navigation_arrow_back__);










var generatedHtml = {
  oninit: function oninit(vnode) {
    return vnode.state.open = false, vnode.state.toggle = function () {
      return vnode.state.open = !vnode.state.open;
    };
  },
  view: function view(vnode) {
    return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1__styles__["a" /* rules */].resultDataRawHtml, {
      class: vnode.state.open ? "open" : "closed",
      onclick: vnode.state.toggle
    }, [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(".html", { id: vnode.attrs.id }, ""), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(".ellipsis", "...")]);
  }
};

/* harmony default export */ __webpack_exports__["a"] = (function (name, tests, previous) {
  return {
    oncreate: function oncreate() {
      return document.title = name, scrollTo(0, 0);
    },
    view: function view() {
      return [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1__styles__["a" /* rules */].headerRow, __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_3_polythene_toolbar__["a" /* default */], {
        style: {
          backgroundColor: "rgba(255,255,255,.93)"
        }
      }, [previous && __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_4_polythene_icon_button__["a" /* default */], {
        icon: { msvg: __WEBPACK_IMPORTED_MODULE_8_mmsvg_google_msvg_navigation_arrow_back___default.a },
        url: {
          href: "/",
          oncreate: __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.route.link
        },
        style: {
          color: "#0091EA"
        }
      }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()("span", name)])), __WEBPACK_IMPORTED_MODULE_0_mithril___default()([__WEBPACK_IMPORTED_MODULE_1__styles__["a" /* rules */].results].join(" "), {
        class: "tests-" + name.replace(/[\:\-\+\(\)\[\]]/g, "").replace(/ /g, "-").toLowerCase()
      }, tests.map(function (test, index) {
        var testName = "test-" + test.name.replace(/[\:\-\+\[\]\(\)]/g, "").replace(/ /g, "-").toLowerCase();
        var uid = "id-" + index;
        return __WEBPACK_IMPORTED_MODULE_0_mithril___default()([__WEBPACK_IMPORTED_MODULE_1__styles__["a" /* rules */].resultRow, test.interactive ? __WEBPACK_IMPORTED_MODULE_1__styles__["a" /* rules */].interactive : null].join(""), {
          key: testName,
          class: [testName, test.class || null].join(" ")
        }, [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1__styles__["a" /* rules */].resultTitle, {
          class: "result-title"
        }, test.name), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1__styles__["a" /* rules */].resultData, [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1__styles__["a" /* rules */].resultDataRendered, __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1__styles__["a" /* rules */].content, {
          oncreate: function oncreate(vnode) {
            if (!test.exclude) {
              document.querySelector("#" + uid).textContent = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__scripts_render__["a" /* tidy */])(vnode.dom.innerHTML);
            }
          }
        }, __WEBPACK_IMPORTED_MODULE_0_mithril___default()(test.component, test.attrs, test.children))), !test.exclude && __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1__styles__["a" /* rules */].resultDataRaw, __WEBPACK_IMPORTED_MODULE_0_mithril___default()(generatedHtml, { id: uid }))])]);
      })), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_5_polythene_dialog__["a" /* default */]), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_7_polythene_snackbar__["a" /* default */]), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_6_polythene_notification__["a" /* default */])];
    }
  };
});

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_button__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tests; });



__WEBPACK_IMPORTED_MODULE_1_polythene_button__["a" /* default */].theme(".tests-button-themed-button", {
  color_light_background: "#2196F3",
  color_dark_background: "#2196F3",
  color_light_text: "#fff"
});

__WEBPACK_IMPORTED_MODULE_1_polythene_button__["a" /* default */].theme(".blue-on-dark-button", {
  color_dark_text: "#2196F3"
});

__WEBPACK_IMPORTED_MODULE_1_polythene_button__["a" /* default */].theme(".tests-button-bordered-button", {
  color_light_text: "#673ab7",
  color_light_border: "#673ab7",
  color_dark_text: "yellow",
  color_dark_border: "yellow"
});

var tests = [{
  name: "Option: label",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_button__["a" /* default */],
  attrs: {
    label: "Label"
  }
}, {
  name: "Themed button: (option: borders)",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_button__["a" /* default */],
  attrs: {
    label: "Borders",
    class: "tests-button-bordered-button",
    borders: true
  }
}, {
  name: "Themed button (colors)",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_button__["a" /* default */],
  attrs: {
    label: "Themed button",
    class: "tests-button-themed-button"
  }
}, {
  name: "Option: style (colors)",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_button__["a" /* default */],
  attrs: {
    label: "Styled",
    style: {
      backgroundColor: "#EF6C00",
      color: "#fff"
    }
  }
}, {
  name: "Option: wash (false)",
  interactive: true,
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_button__["a" /* default */],
  attrs: {
    label: "No wash",
    wash: false
  }
}, {
  name: "Option: ink (false)",
  interactive: true,
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_button__["a" /* default */],
  attrs: {
    label: "No ink",
    ink: false
  }
}, {
  name: "Option: disabled (true)",
  interactive: true,
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_button__["a" /* default */],
  attrs: {
    label: "Disabled",
    disabled: true
  }
}, {
  name: "Option: disabled (false)",
  interactive: true,
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_button__["a" /* default */],
  attrs: {
    label: "Not disabled",
    disabled: false
  }
}, {
  name: "Option: selected",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_button__["a" /* default */],
  attrs: {
    label: "Selected",
    selected: true
  }
}, {
  name: "Option: formaction",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_button__["a" /* default */],
  attrs: {
    label: "Form action",
    formaction: "http://polythene.js.org"
  }
}, {
  name: "Option: url (with oncreate)",
  interactive: true,
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_button__["a" /* default */],
  attrs: {
    label: "Go to /#/shadow",
    url: {
      href: "/shadow",
      oncreate: __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.route.link
    }
  }
}, {
  name: "Option: url (without oncreate)",
  interactive: true,
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_button__["a" /* default */],
  attrs: {
    label: "Go to /shadow",
    url: {
      href: "/shadow"
    }
  }
}, {
  name: "onbeforeupdate",
  interactive: true,
  exclude: true,
  component: {
    oninit: function oninit(vnode) {
      return vnode.state.updated = 0;
    },
    view: function view(vnode) {
      return [__WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", "Updated: " + vnode.state.updated), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_button__["a" /* default */], {
        label: "Button",
        onbeforeupdate: function onbeforeupdate() {
          return vnode.state.updated++;
        }
      })];
    }
  }
}, {
  name: "Option: events (onclick)",
  interactive: true,
  exclude: true,
  component: {
    oninit: function oninit(vnode) {
      return vnode.state.clicked = 0;
    },
    view: function view(vnode) {
      return [__WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", "onclick called: " + vnode.state.clicked), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_button__["a" /* default */], {
        label: "Button",
        events: {
          onclick: function onclick() {
            return vnode.state.clicked++;
          }
        }
      })];
    }
  }
}, {
  name: "Key down (after having focus) results in click",
  interactive: true,
  exclude: true,
  component: {
    oninit: function oninit(vnode) {
      return vnode.state.clickCount = 0;
    },
    view: function view(vnode) {
      return [__WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", "onclick called: " + vnode.state.clickCount), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_button__["a" /* default */], {
        label: "Button",
        events: {
          onclick: function onclick() {
            return vnode.state.clickCount++;
          }
        }
      })];
    }
  }
}, {
  name: "Option: inactive (false)",
  interactive: true,
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_button__["a" /* default */],
  attrs: {
    label: "Not inactive",
    inactive: false
  }
}, {
  name: "Option: inactive (true)",
  interactive: true,
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_button__["a" /* default */],
  attrs: {
    label: "Inactive",
    inactive: true
  }
}, {
  name: "Option: inactivate (2)",
  interactive: true,
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_button__["a" /* default */],
  attrs: {
    label: "Inactivated for 2s",
    inactivate: 2
  }
},

// Dark theme class

{
  name: "Option: label -- dark theme class",
  class: "pe-dark-theme",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_button__["a" /* default */],
  attrs: {
    label: "Label"
  }
}, {
  name: "Option: tone \"dark\" -- dark theme class",
  class: "test-dark-theme",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_button__["a" /* default */],
  attrs: {
    label: "Label",
    tone: "dark"
  }
}, {
  name: "Themed button -- dark theme class",
  class: "pe-dark-theme",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_button__["a" /* default */],
  attrs: {
    label: "Themed button",
    class: "tests-button-themed-button"
  }
}, {
  name: "Themed button blue on dark -- dark theme class",
  class: "pe-dark-theme",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_button__["a" /* default */],
  attrs: {
    label: "Blue on dark button",
    class: "blue-on-dark-button"
  }
}, {
  name: "Themed button: (option: borders) -- dark theme class",
  class: "pe-dark-theme",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_button__["a" /* default */],
  attrs: {
    label: "Borders dark theme",
    class: "tests-button-bordered-button",
    borders: true
  }
}, {
  name: "Dark theme class + light theme class",
  class: "pe-dark-theme",
  component: {
    view: function view() {
      return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(".pe-light-theme", {
        style: { background: "#fff" }
      }, [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_button__["a" /* default */], {
        label: "Normal"
      }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_button__["a" /* default */], {
        label: "Disabled",
        disabled: true
      }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_button__["a" /* default */], {
        label: "Theme",
        class: "tests-button-themed-button"
      })]);
    }
  }
}, {
  name: "Dark theme class + light tone",
  class: "test-dark-theme",
  component: {
    view: function view() {
      return __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
        style: { background: "#fff" }
      }, [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_button__["a" /* default */], {
        label: "Normal",
        tone: "light"
      }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_button__["a" /* default */], {
        label: "Disabled",
        disabled: true,
        tone: "light"
      }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_button__["a" /* default */], {
        label: "Theme",
        class: "tests-button-themed-button",
        tone: "light"
      })]);
    }
  }
}];

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_card__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_tabs__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_list__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_polythene_list_tile__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_polythene_button__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_polythene_icon_button__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_mmsvg_google_msvg_navigation_expand_less__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_mmsvg_google_msvg_navigation_expand_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_mmsvg_google_msvg_navigation_expand_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_mmsvg_templarian_msvg_heart__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_mmsvg_templarian_msvg_heart___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_mmsvg_templarian_msvg_heart__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_mmsvg_templarian_msvg_bookmark__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_mmsvg_templarian_msvg_bookmark___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_mmsvg_templarian_msvg_bookmark__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_mmsvg_templarian_msvg_share__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_mmsvg_templarian_msvg_share___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_mmsvg_templarian_msvg_share__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tests; });








var IMG_URL = "http://arthurclemens.github.io/assets/polythene/examples/";
var greyImage = IMG_URL + "grey.jpg";
var squareImage = IMG_URL + "circle.png";
var landscapeImage = IMG_URL + "1.jpg";
var portraitImage = IMG_URL + "2.jpg";
var holidayImage = IMG_URL + "3.jpg";






var listTitle = "Title line Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco";
var listSubtitle = "Secondary text Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

var titleLineText = "Title";
var infoLineText = "Subhead";
var ipsum = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.";
var shortIpsum = "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat";

var avatarImageUrl = function avatarImageUrl(fileName) {
  return "http://arthurclemens.github.io/assets/polythene/examples/avatar-" + fileName;
};

var twoButtonRow = [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_5_polythene_button__["a" /* default */], { label: "Action 1" }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_5_polythene_button__["a" /* default */], { label: "Action 2" })];

var twoButtonAndLessRow = [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_5_polythene_button__["a" /* default */], { label: "Action 1" }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_5_polythene_button__["a" /* default */], { label: "Action 2" }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(".flex"), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_6_polythene_icon_button__["a" /* default */], {
  icon: {
    type: "medium",
    msvg: __WEBPACK_IMPORTED_MODULE_7_mmsvg_google_msvg_navigation_expand_less___default.a
  }
})];

var iconButtonRow = [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(".flex"), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_6_polythene_icon_button__["a" /* default */], {
  icon: { msvg: __WEBPACK_IMPORTED_MODULE_8_mmsvg_templarian_msvg_heart___default.a }
}), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_6_polythene_icon_button__["a" /* default */], {
  icon: { msvg: __WEBPACK_IMPORTED_MODULE_9_mmsvg_templarian_msvg_bookmark___default.a }
}), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_6_polythene_icon_button__["a" /* default */], {
  icon: { msvg: __WEBPACK_IMPORTED_MODULE_10_mmsvg_templarian_msvg_share___default.a }
})];

var justifiedButtonActions = {
  layout: "justified",
  tight: true,
  content: [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_6_polythene_icon_button__["a" /* default */], {
    icon: { msvg: __WEBPACK_IMPORTED_MODULE_8_mmsvg_templarian_msvg_heart___default.a }
  }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_6_polythene_icon_button__["a" /* default */], {
    icon: { msvg: __WEBPACK_IMPORTED_MODULE_9_mmsvg_templarian_msvg_bookmark___default.a }
  }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_6_polythene_icon_button__["a" /* default */], {
    icon: { msvg: __WEBPACK_IMPORTED_MODULE_10_mmsvg_templarian_msvg_share___default.a }
  })]
};

var verticalButtonActions = {
  layout: "vertical",
  content: [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_6_polythene_icon_button__["a" /* default */], {
    icon: { msvg: __WEBPACK_IMPORTED_MODULE_8_mmsvg_templarian_msvg_heart___default.a }
  }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_6_polythene_icon_button__["a" /* default */], {
    icon: { msvg: __WEBPACK_IMPORTED_MODULE_9_mmsvg_templarian_msvg_bookmark___default.a }
  }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_6_polythene_icon_button__["a" /* default */], {
    icon: { msvg: __WEBPACK_IMPORTED_MODULE_10_mmsvg_templarian_msvg_share___default.a }
  })]
};

var titleImage = function titleImage(type, title) {
  return [{
    primary: {
      title: title,
      subtitle: "Subtitle",
      media: {
        ratio: "square",
        type: type,
        content: __WEBPACK_IMPORTED_MODULE_0_mithril___default()("img", {
          src: landscapeImage
        })
      }
    }
  }, {
    actions: {
      content: twoButtonRow
    }
  }];
};

var titleImageExtraLarge = function titleImageExtraLarge(ratio) {
  return [{
    primary: {
      content: [{
        media: {
          ratio: ratio,
          type: "large",
          content: __WEBPACK_IMPORTED_MODULE_0_mithril___default()("img", {
            src: landscapeImage
          })
        }
      }, __WEBPACK_IMPORTED_MODULE_0_mithril___default()(".flex"), {
        actions: verticalButtonActions
      }]
    }
  }];
};

var tabsContent = {
  view: function view() {
    return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_tabs__["a" /* default */], {
      buttons: [{ label: "New" }, { label: "My Favorites" }, { label: "Saved" }],
      autofit: true
    });
  }
};

__WEBPACK_IMPORTED_MODULE_1_polythene_card__["a" /* default */].theme(".tests-card-colored-card", {
  color_light_main_background: "#0097a7",
  color_light_title_text: "#fff",
  color_light_subtitle_text: "#fff"
});

var tests = [{
  name: "Any content (list)",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_card__["a" /* default */],
  attrs: {
    content: __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_3_polythene_list__["a" /* default */], {
      hoverable: true,
      tiles: [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_4_polythene_list_tile__["a" /* default */], {
        title: listTitle,
        subtitle: listSubtitle
      }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_4_polythene_list_tile__["a" /* default */], {
        title: listTitle,
        subtitle: listSubtitle
      }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_4_polythene_list_tile__["a" /* default */], {
        title: listTitle,
        subtitle: listSubtitle
      })]
    })
  }
}, {
  name: "Any content (tabs)",
  component: {
    view: function view() {
      return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_card__["a" /* default */], {
        content: __WEBPACK_IMPORTED_MODULE_0_mithril___default()(tabsContent)
      });
    }
  }
}, {
  name: "Text only",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_card__["a" /* default */],
  attrs: {
    content: [{
      primary: {
        title: "Primary title",
        subtitle: "Subtitle"
      }
    }]
  }
}, {
  name: "Themed (color)",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_card__["a" /* default */],
  attrs: {
    class: "tests-card-colored-card",
    content: [{
      primary: {
        title: "Primary title",
        subtitle: "Subtitle"
      }
    }]
  }
}, {
  name: "Header with icon",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_card__["a" /* default */],
  attrs: {
    content: [{
      header: {
        title: titleLineText,
        subtitle: infoLineText,
        icon: {
          type: "large",
          avatar: true,
          src: avatarImageUrl("1.png")
        }
      }
    }, {
      media: {
        content: __WEBPACK_IMPORTED_MODULE_0_mithril___default()("img", {
          src: greyImage
        })
      }
    }]
  }
}, {
  name: "Primary text with supporting text",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_card__["a" /* default */],
  attrs: {
    content: [{
      media: {
        content: __WEBPACK_IMPORTED_MODULE_0_mithril___default()("img", {
          src: greyImage
        })
      }
    }, {
      primary: {
        title: "Primary title",
        subtitle: "Subtitle " + shortIpsum
      }
    }]
  }
}, {
  name: "Primary text with action row and text",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_card__["a" /* default */],
  attrs: {
    content: [{
      media: {
        content: __WEBPACK_IMPORTED_MODULE_0_mithril___default()("img", {
          src: greyImage
        })
      }
    }, {
      primary: {
        title: "Primary title",
        subtitle: "Subtitle"
      }
    }, {
      actions: {
        content: twoButtonAndLessRow
      }
    }, {
      text: { content: ipsum }
    }]
  }
}, {
  name: "Bottom action row, bordered",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_card__["a" /* default */],
  attrs: {
    content: [{
      header: {
        title: titleLineText,
        subtitle: infoLineText,
        icon: {
          type: "large",
          avatar: true,
          src: avatarImageUrl("1.png")
        }
      }
    }, {
      media: {
        content: __WEBPACK_IMPORTED_MODULE_0_mithril___default()("img", {
          src: greyImage
        })
      }
    }, {
      text: { content: ipsum }
    }, {
      actions: {
        bordered: true,
        content: twoButtonAndLessRow
      }
    }]
  }
}, {
  name: "Bottom action row, vertical",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_card__["a" /* default */],
  attrs: {
    content: [{
      header: {
        title: titleLineText,
        subtitle: infoLineText,
        icon: {
          type: "large",
          avatar: true,
          src: avatarImageUrl("1.png")
        }
      }
    }, {
      media: {
        content: __WEBPACK_IMPORTED_MODULE_0_mithril___default()("img", {
          src: greyImage
        })
      }
    }, {
      text: { content: ipsum }
    }, {
      actions: {
        layout: "vertical",
        bordered: true,
        tight: true,
        content: __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_3_polythene_list__["a" /* default */], { borders: true }, [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_4_polythene_list_tile__["a" /* default */], { hoverable: true }, "Action 1"), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_4_polythene_list_tile__["a" /* default */], { hoverable: true }, "Action 2"), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_4_polythene_list_tile__["a" /* default */], { hoverable: true }, "Action 3")])
      }
    }]
  }
},

// 16:9 square

{
  name: "16:9 media with square image, anchor origin: default",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_card__["a" /* default */],
  attrs: {
    content: [{
      media: {
        content: __WEBPACK_IMPORTED_MODULE_0_mithril___default()("img", {
          src: squareImage
        })
      }
    }, {
      actions: { content: iconButtonRow }
    }]
  }
}, {
  name: "16:9 media with square image, anchor origin: start",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_card__["a" /* default */],
  attrs: {
    content: [{
      media: {
        origin: "start",
        content: __WEBPACK_IMPORTED_MODULE_0_mithril___default()("img", {
          src: squareImage
        })
      }
    }, {
      actions: { content: iconButtonRow }
    }]
  }
}, {
  name: "16:9 media with square image, anchor origin: end",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_card__["a" /* default */],
  attrs: {
    content: [{
      media: {
        origin: "end",
        content: __WEBPACK_IMPORTED_MODULE_0_mithril___default()("img", {
          src: squareImage
        })
      }
    }, {
      actions: { content: iconButtonRow }
    }]
  }
},

// 16:9 landscape

{
  name: "16:9 media with landscape image, anchor origin: default",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_card__["a" /* default */],
  attrs: {
    content: [{
      media: {
        content: __WEBPACK_IMPORTED_MODULE_0_mithril___default()("img", {
          src: landscapeImage
        })
      }
    }, {
      actions: { content: iconButtonRow }
    }]
  }
}, {
  name: "16:9 media with landscape image, anchor origin: start",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_card__["a" /* default */],
  attrs: {
    content: [{
      media: {
        origin: "start",
        content: __WEBPACK_IMPORTED_MODULE_0_mithril___default()("img", {
          src: landscapeImage
        })
      }
    }, {
      actions: { content: iconButtonRow }
    }]
  }
}, {
  name: "16:9 media with landscape image, anchor origin: end",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_card__["a" /* default */],
  attrs: {
    content: [{
      media: {
        origin: "end",
        content: __WEBPACK_IMPORTED_MODULE_0_mithril___default()("img", {
          src: landscapeImage
        })
      }
    }, {
      actions: { content: iconButtonRow }
    }]
  }
},

// 16:9 portrait

{
  name: "16:9 media with portrait image, anchor origin: default",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_card__["a" /* default */],
  attrs: {
    content: [{
      media: {
        content: __WEBPACK_IMPORTED_MODULE_0_mithril___default()("img", {
          src: portraitImage
        })
      }
    }, {
      actions: { content: iconButtonRow }
    }]
  }
}, {
  name: "16:9 media with portrait image, anchor origin: start",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_card__["a" /* default */],
  attrs: {
    content: [{
      media: {
        origin: "start",
        content: __WEBPACK_IMPORTED_MODULE_0_mithril___default()("img", {
          src: portraitImage
        })
      }
    }, {
      actions: { content: iconButtonRow }
    }]
  }
}, {
  name: "16:9 media with portrait image, anchor origin: end",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_card__["a" /* default */],
  attrs: {
    content: [{
      media: {
        origin: "end",
        content: __WEBPACK_IMPORTED_MODULE_0_mithril___default()("img", {
          src: portraitImage
        })
      }
    }, {
      actions: { content: iconButtonRow }
    }]
  }
},

// 1:1 portrait

{
  name: "1:1 media with square image, anchor origin: default",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_card__["a" /* default */],
  attrs: {
    content: [{
      media: {
        ratio: "square",
        content: __WEBPACK_IMPORTED_MODULE_0_mithril___default()("img", {
          src: landscapeImage
        })
      }
    }, {
      actions: { content: iconButtonRow }
    }]
  }
}, {
  name: "16:9 media with square image, anchor origin: start",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_card__["a" /* default */],
  attrs: {
    content: [{
      media: {
        ratio: "square",
        origin: "start",
        content: __WEBPACK_IMPORTED_MODULE_0_mithril___default()("img", {
          src: landscapeImage
        })
      }
    }, {
      actions: { content: iconButtonRow }
    }]
  }
}, {
  name: "16:9 media with square image, anchor origin: end",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_card__["a" /* default */],
  attrs: {
    content: [{
      media: {
        ratio: "square",
        origin: "end",
        content: __WEBPACK_IMPORTED_MODULE_0_mithril___default()("img", {
          src: landscapeImage
        })
      }
    }, {
      actions: { content: iconButtonRow }
    }]
  }
},

// Overlay

{
  name: "Overlay with sheet",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_card__["a" /* default */],
  attrs: {
    content: [{
      media: {
        ratio: "square",
        content: __WEBPACK_IMPORTED_MODULE_0_mithril___default()("img", {
          src: landscapeImage
        }),
        overlay: {
          class: "pe-dark-theme",
          sheet: true,
          content: [{
            primary: {
              title: "Primary title",
              subtitle: "Subtitle"
            }
          }, {
            actions: {
              content: twoButtonRow
            }
          }]
        }
      }
    }]
  }
}, {
  name: "Overlay without sheet",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_card__["a" /* default */],
  attrs: {
    content: [{
      media: {
        ratio: "square",
        content: __WEBPACK_IMPORTED_MODULE_0_mithril___default()("img", {
          src: landscapeImage
        }),
        overlay: {
          class: "pe-dark-theme",
          content: [{
            primary: { title: "Title" }
          }]
        }
      }
    }, {
      actions: justifiedButtonActions
    }]
  }
},

// Title image

{
  name: "Title image, small",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_card__["a" /* default */],
  attrs: {
    style: { maxWidth: "400px" },
    content: titleImage("small", "Title image small")
  }
}, {
  name: "Title image, regular",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_card__["a" /* default */],
  attrs: {
    style: { maxWidth: "400px" },
    content: titleImage("regular", "Title image regular")
  }
}, {
  name: "Title image, medium",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_card__["a" /* default */],
  attrs: {
    style: { maxWidth: "400px" },
    content: titleImage("medium", "Title image medium")
  }
}, {
  name: "Title image, type large, square",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_card__["a" /* default */],
  attrs: {
    style: { maxWidth: "360px" },
    content: titleImageExtraLarge("square")
  }
}, {
  name: "Title image, type large, landscape",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_card__["a" /* default */],
  attrs: {
    style: { maxWidth: "360px" },
    content: titleImageExtraLarge("landscape")
  }
}, {
  name: "Card URL",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_card__["a" /* default */],
  attrs: {
    url: {
      href: "http://en.wikipedia.org/wiki/Road_to_Nowhere"
    },
    content: [{
      header: {
        title: titleLineText,
        subtitle: infoLineText,
        icon: {
          type: "large",
          class: "pe-icon--avatar",
          src: avatarImageUrl("1.png")
        },
        url: {
          href: "http://www.imdb.com/name/nm0260632/"
        }
      }
    }, {
      media: {
        content: __WEBPACK_IMPORTED_MODULE_0_mithril___default()("img", {
          src: landscapeImage
        })
      }
    }, {
      primary: {
        title: "Primary title",
        subtitle: "Subtitle"
      }
    }, {
      actions: {
        content: [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_5_polythene_button__["a" /* default */], {
          label: "Action 1",
          events: { onclick: function onclick(e) {
              return e.preventDefault();
            } } // prevent URL 
        }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_5_polythene_button__["a" /* default */], {
          label: "Action 2",
          events: { onclick: function onclick(e) {
              return e.preventDefault();
            } } // prevent URL 
        })]
      }
    }]
  }
}, {
  name: "Card events",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_card__["a" /* default */],
  attrs: {
    events: {
      onmouseover: function onmouseover() {
        this.classList.add("on");
      },
      onmouseout: function onmouseout() {
        this.classList.remove("on");
      },
      onclick: function onclick() {
        window.alert("Card clicked");
      }
    },
    content: [{
      header: {
        title: titleLineText,
        subtitle: infoLineText,
        icon: {
          type: "large",
          avatar: true,
          src: avatarImageUrl("1.png")
        }
      }
    }, {
      media: {
        content: __WEBPACK_IMPORTED_MODULE_0_mithril___default()("img", {
          src: landscapeImage
        })
      }
    }, {
      primary: {
        title: "Primary title",
        subtitle: "Subtitle"
      }
    }, {
      actions: {
        content: [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_5_polythene_button__["a" /* default */], {
          label: "Action 1",
          events: {
            onclick: function onclick(e) {
              // prevent card event
              e.stopPropagation();
              window.alert("Action 1 clicked");
            }
          }
        }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_5_polythene_button__["a" /* default */], {
          label: "Action 2",
          events: {
            onclick: function onclick(e) {
              // prevent card event
              e.stopPropagation();
              window.alert("Action 2 clicked");
            }
          }
        })]
      }
    }]
  }
}, {
  name: "Custom card white",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_card__["a" /* default */],
  attrs: {
    style: { maxWidth: "360px" },
    content: [{
      primary: {
        content: [{
          title: __WEBPACK_IMPORTED_MODULE_0_mithril___default()(".pe-card__title", [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(".pe-card__subtitle", "Travel"), __WEBPACK_IMPORTED_MODULE_0_mithril___default()("span", "Road Trip")])
        }, {
          media: {
            ratio: "square",
            type: "small",
            content: __WEBPACK_IMPORTED_MODULE_0_mithril___default()("img", {
              src: landscapeImage
            })
          }
        }]
      }
    }, {
      text: { content: "A road trip is a long distance journey on the road. Typically, road trips are long distances traveled by automobile." }
    }, {
      actions: { content: twoButtonRow }
    }]
  }
}, {
  name: "Custom card sand",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_card__["a" /* default */],
  attrs: {
    style: { maxWidth: "360px", backgroundColor: "#B89E58" },
    class: "pe-dark-theme",
    content: [{
      primary: {
        title: "Get Ready",
        subtitle: "2 Unlimited",
        media: {
          ratio: "square",
          type: "medium",
          content: __WEBPACK_IMPORTED_MODULE_0_mithril___default()("img", {
            src: "http://www.the2unlimited.com/pochettes/GET%20READY%2001.JPG"
          })
        }
      }
    }, {
      actions: {
        content: [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_5_polythene_button__["a" /* default */], {
          label: "Listen now"
        })]
      }
    }]
  }
}, {
  name: "Custom card blue",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_card__["a" /* default */],
  attrs: {
    style: { maxWidth: "360px", backgroundColor: "#227586" },
    class: "pe-dark-theme",
    content: [{
      primary: {
        title: "Supermodel",
        subtitle: "Foster the People",
        media: {
          ratio: "square",
          type: "medium",
          content: __WEBPACK_IMPORTED_MODULE_0_mithril___default()("img", {
            src: "http://upload.wikimedia.org/wikipedia/en/f/f9/Foster_the_People_-_Supermodel.jpg"
          })
        }
      }
    }, {
      actions: {
        content: [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_5_polythene_button__["a" /* default */], {
          label: "Listen now"
        })]
      }
    }]
  }
}, {
  name: "Custom card purple",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_card__["a" /* default */],
  attrs: {
    style: { maxWidth: "360px", backgroundColor: "#871E6A" },
    class: "pe-dark-theme",
    content: [{
      primary: {
        title: "Bucket List"
      }
    }, {
      text: {
        content: __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.trust("<ul><li>Skydiving</li><li>Alaska</li><li>Kite surfing</li></ul>")
      }
    }, {
      actions: {
        content: __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_5_polythene_button__["a" /* default */], {
          label: "Edit"
        })
      }
    }]
  }
},

// Depth

{
  name: "Depth normal, tight text",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_card__["a" /* default */],
  attrs: {
    style: { maxWidth: "170px" },
    content: [{
      text: {
        tight: true,
        content: "Normal"
      }
    }]
  }
}, {
  name: "Depth 0, tight text",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_card__["a" /* default */],
  attrs: {
    style: { maxWidth: "170px" },
    content: [{
      text: {
        tight: true,
        content: "Flat"
      }
    }],
    z: 0
  }
}, {
  name: "Depth 2, tight text",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_card__["a" /* default */],
  attrs: {
    style: { maxWidth: "170px" },
    content: [{
      text: {
        tight: true,
        content: "Raised"
      }
    }],
    z: 2
  }
},

// Separate elements

{
  name: "Separate elements - media",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_card__["a" /* default */],
  attrs: {
    style: { maxWidth: "400px" },
    content: [{
      media: {
        content: __WEBPACK_IMPORTED_MODULE_0_mithril___default()("img", {
          src: holidayImage
        })
      }
    }]
  }
}, {
  name: "Separate elements - text",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_card__["a" /* default */],
  attrs: {
    style: { maxWidth: "400px" },
    content: [{
      text: {
        content: __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.trust("<strong>Normal - (visual) 24px bottom padding</strong> " + ipsum)
      }
    }]
  }
}, {
  name: "Separate elements - tight text",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_card__["a" /* default */],
  attrs: {
    style: { maxWidth: "400px" },
    content: [{
      text: {
        tight: true,
        content: __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.trust("<strong>Tight - (visual) 16px bottom padding</strong> " + ipsum)
      }
    }]
  }
}, {
  name: "Separate elements - header with avatar",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_card__["a" /* default */],
  attrs: {
    style: { maxWidth: "400px" },
    content: [{
      header: {
        title: titleLineText,
        subtitle: infoLineText,
        icon: {
          type: "large",
          avatar: true,
          src: avatarImageUrl("1.png")
        }
      }
    }]
  }
}, {
  name: "Separate elements - normal primary title",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_card__["a" /* default */],
  attrs: {
    style: { maxWidth: "400px" },
    content: [{
      primary: {
        title: "Primary title",
        subtitle: "Normal - (visual) 24px bottom padding"
      }
    }]
  }
}, {
  name: "Separate elements - tight primary title",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_card__["a" /* default */],
  attrs: {
    style: { maxWidth: "400px" },
    content: [{
      primary: {
        title: "Primary title",
        subtitle: "Normal - (visual) 16px bottom padding",
        tight: true
      }
    }]
  }
}, {
  name: "Separate elements - actions",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_card__["a" /* default */],
  attrs: {
    style: { maxWidth: "400px" },
    content: [{
      actions: {
        content: twoButtonRow
      }
    }]
  }
}, {
  name: "Separate elements - vertical actions",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_card__["a" /* default */],
  attrs: {
    style: { maxWidth: "400px" },
    content: [{
      actions: {
        layout: "vertical",
        tight: true,
        content: __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_3_polythene_list__["a" /* default */], { borders: true }, [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_4_polythene_list_tile__["a" /* default */], { hoverable: true }, "Action 1"), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_4_polythene_list_tile__["a" /* default */], { hoverable: true }, "Action 2"), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_4_polythene_list_tile__["a" /* default */], { hoverable: true }, "Action 3")])
      }
    }]
  }
}, {
  name: "Separate elements - icon button actions",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_card__["a" /* default */],
  attrs: {
    style: { maxWidth: "400px" },
    content: [{
      actions: {
        content: iconButtonRow
      }
    }]
  }
},

// Dark theme

{
  name: "Texts -- dark theme class",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_card__["a" /* default */],
  class: "pe-dark-theme",
  attrs: {
    content: [{
      header: {
        title: titleLineText,
        subtitle: infoLineText,
        icon: {
          type: "large",
          avatar: true,
          src: avatarImageUrl("1.png")
        }
      }
    }, {
      media: {
        content: __WEBPACK_IMPORTED_MODULE_0_mithril___default()("img", {
          src: landscapeImage
        })
      }
    }, {
      primary: {
        title: "Primary title " + shortIpsum,
        subtitle: "Subtitle " + shortIpsum
      }
    }, {
      text: {
        content: ipsum
      }
    }, {
      actions: {
        bordered: true,
        content: twoButtonAndLessRow
      }
    }]
  }
}, {
  name: "Dark theme class + light theme class",
  class: "pe-dark-theme",
  component: {
    view: function view() {
      return __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
        style: {
          background: "#fff"
        },
        class: "pe-light-theme"
      }, __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_card__["a" /* default */], {
        content: [{
          header: {
            title: titleLineText,
            subtitle: infoLineText,
            icon: {
              type: "large",
              avatar: true,
              src: avatarImageUrl("1.png")
            }
          }
        }, {
          media: {
            content: __WEBPACK_IMPORTED_MODULE_0_mithril___default()("img", {
              src: landscapeImage
            })
          }
        }, {
          primary: {
            title: "Primary title " + shortIpsum,
            subtitle: "Subtitle " + shortIpsum
          }
        }, {
          text: {
            content: ipsum
          }
        }, {
          actions: {
            bordered: true,
            content: twoButtonAndLessRow
          }
        }]
      }));
    }
  }
}, {
  name: "Dark theme class + light tone",
  class: "test-dark-theme",
  component: {
    view: function view() {
      return __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
        style: {
          background: "#fff"
        }
      }, __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_card__["a" /* default */], {
        tone: "light",
        content: [{
          header: {
            title: titleLineText,
            subtitle: infoLineText,
            icon: {
              type: "large",
              avatar: true,
              src: avatarImageUrl("1.png")
            }
          }
        }, {
          media: {
            content: __WEBPACK_IMPORTED_MODULE_0_mithril___default()("img", {
              src: landscapeImage
            })
          }
        }, {
          primary: {
            title: "Primary title " + shortIpsum,
            subtitle: "Subtitle " + shortIpsum
          }
        }, {
          text: {
            content: ipsum
          }
        }, {
          actions: {
            bordered: true,
            content: twoButtonAndLessRow
          }
        }]
      }));
    }
  }
}];

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_checkbox__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mmsvg_google_msvg_toggle_star_border__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mmsvg_google_msvg_toggle_star_border___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mmsvg_google_msvg_toggle_star_border__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_toggle_star__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_toggle_star___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_toggle_star__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tests; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };






__WEBPACK_IMPORTED_MODULE_1_polythene_checkbox__["a" /* default */].theme(".tests-checkbox-themed-checkbox", {
  label_font_size: 28,
  color_light_on: "#2196F3",
  color_light_off: "#2196F3",
  color_dark_on: "#2196F3",
  color_dark_off: "#2196F3",
  color_light_label: "#2196F3",
  color_dark_label: "#2196F3"
});

var sizeNames = ["small", "regular", "medium", "large"];

var sizes = function sizes(_sizes, attrs) {
  return _sizes.map(function (size) {
    return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_checkbox__["a" /* default */], _extends({}, attrs, {
      label: size,
      size: size
    }));
  });
};

var tests = [{
  name: "Option: label",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_checkbox__["a" /* default */],
  attrs: {
    label: "Label"
  }
}, {
  name: "Option: checked",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_checkbox__["a" /* default */],
  attrs: {
    checked: true
  }
}, {
  name: "Option: value",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_checkbox__["a" /* default */],
  attrs: {
    name: "worth",
    value: "notable"
  }
}, {
  name: "Option: size",
  component: {
    view: function view() {
      return __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
        style: {
          display: "flex",
          alignItems: "center"
        }
      }, sizes(sizeNames, {
        label: "Label"
      }));
    } }
}, {
  name: "Themed checkbox (color and font size)",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_checkbox__["a" /* default */],
  attrs: {
    label: "Label",
    class: "tests-checkbox-themed-checkbox"
  }
}, {
  name: "Option: style (colors)",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_checkbox__["a" /* default */],
  attrs: {
    label: "Label",
    style: {
      color: "#EF6C00"
    }
  }
}, {
  name: "Option: iconOn, iconOff (custom icon)",
  component: {
    view: function view() {
      return __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
        style: {
          display: "flex",
          alignItems: "center"
        }
      }, sizes(sizeNames, {
        label: "Label",
        iconOn: {
          msvg: __WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_toggle_star___default.a
        },
        iconOff: {
          msvg: __WEBPACK_IMPORTED_MODULE_2_mmsvg_google_msvg_toggle_star_border___default.a
        }
      }));
    } }
}, {
  name: "Option: disabled",
  interactive: true,
  component: {
    view: function view() {
      return [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_checkbox__["a" /* default */], {
        disabled: true,
        label: "Off"
      }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_checkbox__["a" /* default */], {
        disabled: true,
        checked: true,
        label: "On"
      })];
    }
  }
}, {
  name: "Option: selectable (false)",
  interactive: true,
  component: {
    view: function view() {
      return [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_checkbox__["a" /* default */], {
        selectable: function selectable() {
          return false;
        },
        label: "Never"
      }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_checkbox__["a" /* default */], {
        selectable: function selectable(checked) {
          return !checked;
        },
        label: "Only when unchecked"
      })];
    }
  }
}, {
  name: "Option: iconButton (custom hover behaviour)",
  interactive: true,
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_checkbox__["a" /* default */],
  attrs: {
    iconButton: {
      wash: true,
      ink: false
    }
  }
}, {
  name: "Option: getState",
  interactive: true,
  exclude: true,
  component: {
    oninit: function oninit(vnode) {
      return vnode.state.checked = false;
    },
    view: function view(vnode) {
      return [__WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
        style: {
          marginBottom: "1rem"
        }
      }, "Checked: " + vnode.state.checked), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_checkbox__["a" /* default */], {
        getState: function getState(state) {
          return vnode.state.checked = state.checked;
        }
      })];
    }
  }
}, {
  name: "Setting the value from outside",
  interactive: true,
  exclude: true,
  component: {
    oninit: function oninit(vnode) {
      return vnode.state.checked = false;
    },
    view: function view(vnode) {
      return [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_checkbox__["a" /* default */], {
        label: "Initiator",
        getState: function getState(state) {
          return vnode.state.checked = state.checked;
        }
      }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_checkbox__["a" /* default */], {
        label: "Result",
        disabled: true,
        checked: function checked() {
          return vnode.state.checked;
        }
      })];
    }
  }
}, {
  name: "Option: events",
  interactive: true,
  exclude: true,
  component: {
    oninit: function oninit(vnode) {
      return vnode.state.checked = false;
    },
    view: function view(vnode) {
      return [__WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
        style: {
          marginBottom: "1rem"
        }
      }, "Checked: " + vnode.state.checked), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_checkbox__["a" /* default */], {
        events: {
          onclick: function onclick() {
            return vnode.state.checked = !vnode.state.checked;
          }
        }
      })];
    }
  }
},

// Dark theme

{
  name: "Option: checked -- dark theme class",
  class: "pe-dark-theme",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_checkbox__["a" /* default */],
  attrs: {
    checked: true
  }
}, {
  name: "Themed checkbox (colors) -- dark theme class",
  class: "pe-dark-theme",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_checkbox__["a" /* default */],
  attrs: {
    label: "Label",
    class: "tests-checkbox-themed-checkbox"
  }
}, {
  name: "Option: disabled -- dark theme class",
  class: "pe-dark-theme",
  component: {
    view: function view() {
      return [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_checkbox__["a" /* default */], {
        disabled: true,
        label: "Off"
      }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_checkbox__["a" /* default */], {
        disabled: true,
        checked: true,
        label: "On"
      })];
    }
  }
}, {
  name: "Dark theme class + light theme class",
  class: "pe-dark-theme",
  component: {
    view: function view() {
      return __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
        style: {
          background: "#fff",
          padding: "20px"
        },
        class: "pe-light-theme"
      }, __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_checkbox__["a" /* default */], {
        label: "On"
      }));
    }
  }
}, {
  name: "Dark theme class + light tone",
  class: "test-dark-theme",
  component: {
    view: function view() {
      return __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
        style: {
          background: "#fff",
          padding: "20px"
        }
      }, __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_checkbox__["a" /* default */], {
        tone: "light",
        label: "On"
      }));
    }
  }
}];

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_css__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return blocks; });


var blockSize = 40;

var styles = [{
  " .block": {
    "min-width": blockSize + "px",
    "min-height": blockSize + "px",
    color: "#fff",
    "text-align": "center",
    "line-height": blockSize + "px",

    "&:nth-child(1)": {
      background: "#311B92"
    },
    "&:nth-child(2)": {
      background: "#4527A0"
    },
    "&:nth-child(3)": {
      background: "#512DA8"
    },
    "&:nth-child(4)": {
      background: "#5E35B1"
    },
    "&.fixed-height": {
      height: "90px",
      position: "relative"
    }
  },
  " .vertical-blocks": [__WEBPACK_IMPORTED_MODULE_1_polythene_css__["a" /* flex */].layoutVertical]
}];

var blocks = [1, 2, 3, 4].map(function (num) {
  return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(".block", num);
});

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_css_classes__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__block_styles__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tests; });





__WEBPACK_IMPORTED_MODULE_2_polythene_css__["b" /* styler */].add("css-classes", __WEBPACK_IMPORTED_MODULE_3__block_styles__["a" /* styles */]);

var tests = [{
  name: "Should be aligned horizontally",
  component: {
    view: function view() {
      return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(".layout", __WEBPACK_IMPORTED_MODULE_3__block_styles__["b" /* blocks */]);
    }
  }
}, {
  name: "Should be aligned vertically",
  component: {
    view: function view() {
      return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(".vertical-blocks", __WEBPACK_IMPORTED_MODULE_3__block_styles__["b" /* blocks */]);
    }
  }
}, {
  name: "Should be stacked vertically and inline",
  component: {
    view: function view() {
      return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(".layout.vertical.inline", __WEBPACK_IMPORTED_MODULE_3__block_styles__["b" /* blocks */]);
    }
  }
}, {
  name: "Should be reversed",
  component: {
    view: function view() {
      return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(".layout.horizontal.reverse", __WEBPACK_IMPORTED_MODULE_3__block_styles__["b" /* blocks */]);
    }
  }
}, {
  name: "Should be justified horizontally",
  component: {
    view: function view() {
      return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(".layout.justified", __WEBPACK_IMPORTED_MODULE_3__block_styles__["b" /* blocks */]);
    }
  }
}, {
  name: "Should fill the space",
  component: {
    view: function view() {
      return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(".fixed-height", __WEBPACK_IMPORTED_MODULE_0_mithril___default()(".block.pe-fit"));
    }
  }
}];

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_button__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_css__ = __webpack_require__(1);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





var styles = [{
  ".pe-button.secondary-button .pe-button__content": {
    backgroundColor: "#fff",
    borderColor: "#ddd"
  }
}];
__WEBPACK_IMPORTED_MODULE_2_polythene_css__["b" /* styler */].add("secondary-button", styles);

/* harmony default export */ __webpack_exports__["a"] = ({
  view: function view(vnode) {
    return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_button__["a" /* default */], _extends({
      class: "secondary-button",
      borders: true,
      raised: false
    }, vnode.attrs));
  }
});

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_button__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__secondary_button__ = __webpack_require__(44);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tests; });





var myStyle = [{
  ".my-component": {
    backgroundColor: "#FF1744"
  }
}];

__WEBPACK_IMPORTED_MODULE_2_polythene_css__["b" /* styler */].add("my-component", myStyle);

var buttonStyles = [{
  ".pe-button.send-button .pe-button__content": {
    backgroundColor: "#FF1744",
    color: "white"
  },
  ".pe-button.info-button .pe-button__content": {
    backgroundColor: "#2196f3",
    color: "white"
  }
}];

__WEBPACK_IMPORTED_MODULE_2_polythene_css__["b" /* styler */].add("app-buttons", buttonStyles);

var colors = {
  send: "#FF1744",
  info: "#2196f3"
};
var makeButton = function makeButton(name) {
  return {
    " .pe-button__content": {
      backgroundColor: colors[name],
      color: "white"
    }
  };
};
var mixinButtonStyles = [{
  ".pe-button.send-button-x": makeButton("send"),
  ".pe-button.info-button-x": makeButton("info")
}];

__WEBPACK_IMPORTED_MODULE_2_polythene_css__["b" /* styler */].add("app-buttons-x", mixinButtonStyles);

var tests = [{
  name: "Element should have a red background",
  component: {
    view: function view() {
      return __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
        class: "my-component",
        style: {
          width: "100px",
          height: "100px"
        }
      });
    }
  },
  attrs: null
}, {
  name: "Buttons should have different background colors",
  component: {
    view: function view() {
      return [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_button__["a" /* default */], {
        label: "Send",
        class: "send-button"
      }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_button__["a" /* default */], {
        label: "Info",
        class: "info-button"
      }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_button__["a" /* default */], {
        label: "Send",
        class: "send-button-x"
      }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_button__["a" /* default */], {
        label: "Info",
        class: "info-button-x"
      })];
    }
  }
}, {
  name: "Custom button",
  component: __WEBPACK_IMPORTED_MODULE_3__secondary_button__["a" /* default */],
  attrs: {
    label: "Secondary button"
  }
}];

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_dialog__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_button__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__(12);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };






var hasValue = false;

// use a function to have the state of hasValue reflected in the dialog
/* harmony default export */ __webpack_exports__["a"] = (function () {
  return _extends({}, __WEBPACK_IMPORTED_MODULE_3__shared__["c" /* commonDialogProps */], {
    title: "Select a file...",
    body: __WEBPACK_IMPORTED_MODULE_0_mithril___default()("input", {
      type: "file",
      id: "file",
      name: "file",
      onchange: function onchange(e) {
        var fileInput = e.target;
        hasValue = fileInput.value !== undefined;
      }
    }),
    formOptions: {
      name: "demo",
      type: "post",
      enctype: "multipart/form-data",
      onsubmit: function onsubmit(e) {
        e.preventDefault();
        var form = e.target;
        alert("Posted: " + form.file.value);
        __WEBPACK_IMPORTED_MODULE_1_polythene_dialog__["a" /* default */].hide();
        hasValue = false;
      }
    },
    footer: [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_button__["a" /* default */], {
      label: "Cancel",
      events: {
        onclick: function onclick() {
          return __WEBPACK_IMPORTED_MODULE_1_polythene_dialog__["a" /* default */].hide();
        }
      }
    }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_button__["a" /* default */], {
      disabled: !hasValue,
      label: "Post",
      element: "button",
      type: "submit"
    })],
    didHide: function didHide() {
      return hasValue = false;
    }
  });
});

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_button__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_toolbar__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_icon_button__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_polythene_dialog__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mmsvg_google_msvg_navigation_close__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mmsvg_google_msvg_navigation_close___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_mmsvg_google_msvg_navigation_close__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared__ = __webpack_require__(12);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };









var DIALOG_CONFIRM = "confirm-fullscreen";

var fullscreenToolbarRow = function fullscreenToolbarRow(title) {
  return [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_3_polythene_icon_button__["a" /* default */], {
    icon: {
      msvg: __WEBPACK_IMPORTED_MODULE_5_mmsvg_google_msvg_navigation_close___default.a
    },
    events: {
      onclick: function onclick() {
        return __WEBPACK_IMPORTED_MODULE_4_polythene_dialog__["a" /* default */].show(confirmDialogOptsFn, { id: DIALOG_CONFIRM });
      }
    }
  }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()("span.flex", title), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_button__["a" /* default */], {
    label: "Save",
    events: {
      onclick: function onclick() {
        return __WEBPACK_IMPORTED_MODULE_4_polythene_dialog__["a" /* default */].hide();
      }
    }
  })];
};

var fullscreenPane = {
  view: function view() {
    return [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_toolbar__["a" /* default */], {
      content: fullscreenToolbarRow("New event")
    }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
      style: {
        padding: "21px"
      }
    }, __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.trust(__WEBPACK_IMPORTED_MODULE_6__shared__["b" /* longText */]))];
  }
};

var confirmDialogOptsFn = function confirmDialogOptsFn() {
  return _extends({}, __WEBPACK_IMPORTED_MODULE_6__shared__["c" /* commonDialogProps */], {
    class: "demo-dialog",
    footer: [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_button__["a" /* default */], {
      label: "Cancel",
      events: {
        onclick: function onclick() {
          return __WEBPACK_IMPORTED_MODULE_4_polythene_dialog__["a" /* default */].hide({ id: DIALOG_CONFIRM });
        }
      }
    }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_button__["a" /* default */], {
      label: "Discard",
      events: {
        onclick: function onclick() {
          return (
            // hide confirm dialog
            __WEBPACK_IMPORTED_MODULE_4_polythene_dialog__["a" /* default */].hide({ id: DIALOG_CONFIRM }),
            // hide main dialog
            __WEBPACK_IMPORTED_MODULE_4_polythene_dialog__["a" /* default */].hide()
          );
        }
      }
    })],
    body: __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.trust(__WEBPACK_IMPORTED_MODULE_6__shared__["a" /* shortText */])),
    modal: true,
    backdrop: true
  });
};

/* harmony default export */ __webpack_exports__["a"] = (_extends({}, __WEBPACK_IMPORTED_MODULE_6__shared__["c" /* commonDialogProps */], {
  body: __WEBPACK_IMPORTED_MODULE_0_mithril___default()(fullscreenPane),
  fullscreen: true
}));

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_dialog__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_button__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__(12);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };






var buttonEvents = {
  onclick: function onclick() {
    return __WEBPACK_IMPORTED_MODULE_1_polythene_dialog__["a" /* default */].hide();
  }
};

var buttons = [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_button__["a" /* default */], {
  label: "Turn on location services",
  events: buttonEvents
}), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_button__["a" /* default */], {
  label: "No thanks",
  events: buttonEvents
})];

/* harmony default export */ __webpack_exports__["a"] = (_extends({}, __WEBPACK_IMPORTED_MODULE_3__shared__["c" /* commonDialogProps */], {
  class: "demo-dialog fullwidth-dialog",
  style: {
    width: "280px"
  },
  body: [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(".pe-dialog__title", "Let your apps know your location"), __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", "This means that your location data will be sent to our servers, anonymously of course.")],
  footer: buttons
}));

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_dialog__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_icon__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_list__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_polythene_list_tile__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_mmsvg_google_msvg_action_account_circle__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_mmsvg_google_msvg_action_account_circle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_mmsvg_google_msvg_action_account_circle__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };










/* harmony default export */ __webpack_exports__["a"] = (_extends({}, __WEBPACK_IMPORTED_MODULE_5__shared__["c" /* commonDialogProps */], {
  class: "demo-dialog dialog-simple",
  title: "Set backup account",
  menu: __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_3_polythene_list__["a" /* default */], {
    hoverable: true,
    tiles: [1, 2, 3].map(function () {
      return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_4_polythene_list_tile__["a" /* default */], {
        class: "demo-item",
        front: __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_icon__["a" /* default */], {
          type: "large",
          msvg: __WEBPACK_IMPORTED_MODULE_6_mmsvg_google_msvg_action_account_circle___default.a
        }),
        title: "Account",
        events: {
          onclick: function onclick() {
            return __WEBPACK_IMPORTED_MODULE_1_polythene_dialog__["a" /* default */].hide();
          }
        }
      });
    })
  }),
  footer: null
}));

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_dialog__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_button__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__(12);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };






var dialogTwoOptions = _extends({}, __WEBPACK_IMPORTED_MODULE_3__shared__["c" /* commonDialogProps */], {
  body: "Dialog Two",
  footer: __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_button__["a" /* default */], {
    label: "Show One",
    events: {
      onclick: function onclick() {
        return __WEBPACK_IMPORTED_MODULE_1_polythene_dialog__["a" /* default */].show(dialogOneOptions);
      }
    }
  })
});

var dialogOneOptions = _extends({}, __WEBPACK_IMPORTED_MODULE_3__shared__["c" /* commonDialogProps */], {
  body: "Dialog One",
  footer: __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_button__["a" /* default */], {
    label: "Show Two",
    events: {
      onclick: function onclick() {
        return __WEBPACK_IMPORTED_MODULE_1_polythene_dialog__["a" /* default */].show(dialogTwoOptions);
      }
    }
  })
});

/* harmony default export */ __webpack_exports__["a"] = (dialogOneOptions);

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_list__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_dialog__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_list_tile__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__(12);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };







var createListTile = function createListTile(title) {
  return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_3_polythene_list_tile__["a" /* default */], {
    title: title,
    events: {
      onclick: function onclick() {
        return __WEBPACK_IMPORTED_MODULE_2_polythene_dialog__["a" /* default */].hide();
      }
    },
    ink: true
  });
};

/* harmony default export */ __webpack_exports__["a"] = (_extends({}, __WEBPACK_IMPORTED_MODULE_4__shared__["c" /* commonDialogProps */], {
  menu: __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_list__["a" /* default */], {
    hoverable: true,
    tiles: [createListTile("Show all notification content including sensitive notification content"), createListTile("Hide sensitive notification content"), createListTile("Hide all notification content")]
  }),
  hideDelay: .15,
  header: null,
  footer: null
}));

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_dialog__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_raised_button__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fullscreen__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__menu__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__fullwidth__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__form__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__replace__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__settings__ = __webpack_require__(51);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tests; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };












var btn = function btn(dialogAttrs) {
  var label = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Open";
  return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_raised_button__["a" /* default */], {
    label: label,
    events: { onclick: function onclick() {
        return __WEBPACK_IMPORTED_MODULE_1_polythene_dialog__["a" /* default */].show(dialogAttrs);
      } }
  });
};

var promiseShownBtn = function promiseShownBtn(dialogAttrs) {
  var label = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Open";
  return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_raised_button__["a" /* default */], {
    label: label,
    events: { onclick: function onclick() {
        return __WEBPACK_IMPORTED_MODULE_1_polythene_dialog__["a" /* default */].show(dialogAttrs).then(function (id) {
          return alert("dialog shown: " + id);
        });
      } }
  });
};

__WEBPACK_IMPORTED_MODULE_1_polythene_dialog__["a" /* default */].theme(".dialog-tests-blue-dialog", {
  color_light_content_background: "#2196F3",
  color_light_body_text: "#fff",
  border_radius: 5
});

var tests = [{
  name: "Option: body",
  interactive: true,
  exclude: true,
  component: {
    view: function view() {
      return btn({
        body: "Hello"
      });
    }
  }
}, {
  name: "Option: body as function",
  interactive: true,
  exclude: true,
  component: {
    view: function view() {
      return btn(function () {
        return {
          body: "Hello"
        };
      });
    }
  }
}, {
  name: "Option: content",
  interactive: true,
  exclude: true,
  component: {
    view: function view() {
      return btn({
        content: __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", "Hello")
      });
    }
  }
}, {
  name: "Themed (color and border radius)",
  interactive: true,
  exclude: true,
  component: {
    view: function view() {
      return btn({
        content: __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", "Hello"),
        class: "dialog-tests-blue-dialog"
      });
    }
  }
}, {
  name: "Option: style",
  interactive: true,
  exclude: true,
  component: {
    view: function view() {
      return btn({
        body: "Hello",
        style: {
          background: "#fff59d",
          padding: "1.5rem"
        }
      });
    }
  }
}, {
  name: "Option: z (0)",
  interactive: true,
  exclude: true,
  component: {
    view: function view() {
      return btn({
        body: __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.trust(__WEBPACK_IMPORTED_MODULE_3__shared__["a" /* shortText */]),
        z: 0
      });
    }
  }
}, {
  name: "Option: z (5)",
  interactive: true,
  exclude: true,
  component: {
    view: function view() {
      return btn({
        body: __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.trust(__WEBPACK_IMPORTED_MODULE_3__shared__["a" /* shortText */]),
        z: 5
      });
    }
  }
}, {
  name: "Option: title and body (long text)",
  interactive: true,
  exclude: true,
  component: {
    view: function view() {
      return btn({
        title: "Long dialog with a very long title that surely won't fit here",
        body: __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.trust(__WEBPACK_IMPORTED_MODULE_3__shared__["b" /* longText */])
      });
    }
  }
}, {
  name: "Option: modal with backdrop",
  interactive: true,
  exclude: true,
  component: {
    view: function view() {
      return btn(_extends({}, __WEBPACK_IMPORTED_MODULE_3__shared__["c" /* commonDialogProps */], {
        title: "Long dialog with a very long title that surely won't fit here",
        body: __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.trust(__WEBPACK_IMPORTED_MODULE_3__shared__["b" /* longText */]),
        modal: true,
        backdrop: true
      }));
    }
  }
}, {
  name: "Option: fullscreen (and show second dialog on top)",
  interactive: true,
  exclude: true,
  component: {
    view: function view() {
      return btn(__WEBPACK_IMPORTED_MODULE_4__fullscreen__["a" /* default */]);
    }
  }
}, {
  name: "Fullwidth buttons",
  interactive: true,
  exclude: true,
  component: {
    view: function view() {
      return btn(__WEBPACK_IMPORTED_MODULE_6__fullwidth__["a" /* default */]);
    }
  }
}, {
  name: "Option: menu",
  interactive: true,
  exclude: true,
  component: {
    view: function view() {
      return btn(__WEBPACK_IMPORTED_MODULE_5__menu__["a" /* default */]);
    }
  }
}, {
  name: "Conditional button states",
  interactive: true,
  exclude: true,
  component: {
    view: function view() {
      return btn(__WEBPACK_IMPORTED_MODULE_7__form__["a" /* default */]);
    }
  }
}, {
  name: "Settings dialog",
  interactive: true,
  exclude: true,
  component: {
    view: function view() {
      return btn(__WEBPACK_IMPORTED_MODULE_9__settings__["a" /* default */]);
    }
  }
}, {
  name: "Replace dialog",
  interactive: true,
  exclude: true,
  component: {
    view: function view() {
      return btn(__WEBPACK_IMPORTED_MODULE_8__replace__["a" /* default */]);
    }
  }
}, {
  name: "Promise shown",
  interactive: true,
  exclude: true,
  component: {
    view: function view() {
      return promiseShownBtn({
        body: "Hello"
      });
    }
  }
}, {
  name: "Option: didShow",
  interactive: true,
  exclude: true,
  component: {
    view: function view() {
      return btn({
        body: "Hello",
        didShow: function didShow(id) {
          return alert("dialog shown: " + id);
        }
      });
    }
  }
}, {
  name: "Option: didHide",
  interactive: true,
  exclude: true,
  component: {
    view: function view() {
      return btn({
        body: "Hello",
        didHide: function didHide(id) {
          return alert("dialog hidden: " + id);
        }
      });
    }
  }
}, {
  name: "Option: transitions",
  interactive: true,
  exclude: true,
  component: {
    view: function view() {
      return btn({
        body: "Hello",
        transitions: {
          show: function show(el) {
            return {
              el: el,
              showDuration: .5,
              beforeShow: function beforeShow() {
                return el.style.opacity = 0, el.style.transform = "translate3d(0, 20px, 0)";
              },
              show: function show() {
                return el.style.opacity = 1, el.style.transform = "translate3d(0, 0px,  0)";
              }
            };
          },
          hide: function hide(el) {
            return {
              el: el,
              hideDuration: .5,
              hide: function hide() {
                return el.style.opacity = 0;
              }
            };
          }
        }
      });
    }
  }
}, {
  name: "Option: showDelay, hideDelay, showDuration, hideDuration",
  interactive: true,
  exclude: true,
  component: {
    view: function view() {
      return btn({
        body: "Hello",
        showDelay: .4,
        hideDelay: .4,
        showDuration: 1.0,
        hideDuration: 1.0
      });
    }
  }
}, {
  name: "Option: transition (show)",
  interactive: true,
  exclude: true,
  component: {
    view: function view() {
      return btn({
        body: "Hello",
        showDuration: 1.0,
        hideDuration: 1.0,
        transition: "show"
      });
    }
  }
}, {
  name: "Option: transition (hide)",
  interactive: true,
  exclude: true,
  component: {
    view: function view() {
      return btn({
        body: "Hello",
        showDuration: 1.0,
        hideDuration: 1.0,
        transition: "hide"
      });
    }
  }
}, {
  name: "Option: no transition",
  interactive: true,
  exclude: true,
  component: {
    view: function view() {
      return btn({
        body: __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.trust(__WEBPACK_IMPORTED_MODULE_3__shared__["a" /* shortText */]),
        transition: "none"
      });
    }
  }
},

// Dark theme
{
  name: "Option: modal with backdrop -- dark theme class",
  interactive: true,
  exclude: true,
  component: {
    view: function view() {
      return btn(_extends({}, __WEBPACK_IMPORTED_MODULE_3__shared__["c" /* commonDialogProps */], {
        title: "Long dialog with a very long title that surely won't fit here",
        body: __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.trust(__WEBPACK_IMPORTED_MODULE_3__shared__["b" /* longText */]),
        modal: true,
        backdrop: true,
        class: "pe-dark-theme"
      }));
    }
  }
}, {
  name: "Dark theme class + light theme class",
  interactive: true,
  exclude: true,
  component: {
    view: function view() {
      return btn(_extends({}, __WEBPACK_IMPORTED_MODULE_3__shared__["c" /* commonDialogProps */], {
        title: "Long dialog with a very long title that surely won't fit here",
        body: __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.trust(__WEBPACK_IMPORTED_MODULE_3__shared__["b" /* longText */]),
        modal: true,
        backdrop: true,
        class: "pe-dark-theme pe-light-theme"
      }));
    }
  }
}, {
  name: "Dark theme class + light tone",
  interactive: true,
  exclude: true,
  component: {
    view: function view() {
      return btn(_extends({}, __WEBPACK_IMPORTED_MODULE_3__shared__["c" /* commonDialogProps */], {
        title: "Long dialog with a very long title that surely won't fit here",
        body: __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.trust(__WEBPACK_IMPORTED_MODULE_3__shared__["b" /* longText */]),
        modal: true,
        backdrop: true,
        class: "pe-dark-theme",
        tone: "light"
      }));
    }
  }
}];

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_fab__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_icon__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_action_alarm_add__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_action_alarm_add___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_action_alarm_add__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tests; });






__WEBPACK_IMPORTED_MODULE_1_polythene_fab__["a" /* default */].theme(".tests-fab-themed-fab", {
  color_light_background: "#2196F3",
  color_dark_background: "#0097A7",
  color_light: "#fff",
  color_dark: "#B2EBF2"
});

var tests = [{
  name: "Child node",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_fab__["a" /* default */],
  attrs: null,
  children: __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_icon__["a" /* default */], { msvg: __WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_action_alarm_add___default.a })
}, {
  name: "Option: icon",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_fab__["a" /* default */],
  attrs: {
    icon: {
      msvg: __WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_action_alarm_add___default.a
    }
  }
}, {
  name: "Option: content",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_fab__["a" /* default */],
  attrs: {
    content: __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_icon__["a" /* default */], { msvg: __WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_action_alarm_add___default.a })
  }
}, {
  name: "Colored icon",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_fab__["a" /* default */],
  attrs: {
    icon: {
      msvg: __WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_action_alarm_add___default.a
    },
    style: {
      color: "#333"
    }
  }
}, {
  name: "Themed FAB (colors)",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_fab__["a" /* default */],
  attrs: {
    icon: {
      msvg: __WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_action_alarm_add___default.a
    },
    class: "tests-fab-themed-fab"
  }
}, {
  name: "Option: style (colors)",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_fab__["a" /* default */],
  attrs: {
    icon: {
      msvg: __WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_action_alarm_add___default.a
    },
    style: {
      color: "#FFCCBC",
      backgroundColor: "#4E342E"
    }
  }
}, {
  name: "Option: mini",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_fab__["a" /* default */],
  attrs: {
    icon: {
      msvg: __WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_action_alarm_add___default.a
    },
    mini: true
  }
}, {
  name: "Option: z (0)",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_fab__["a" /* default */],
  attrs: {
    icon: {
      msvg: __WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_action_alarm_add___default.a
    },
    z: 0
  }
}, {
  name: "Option: z (5)",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_fab__["a" /* default */],
  attrs: {
    icon: {
      msvg: __WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_action_alarm_add___default.a
    },
    z: 5
  }
}, {
  name: "Option: animateOnTap (false)",
  interactive: true,
  exclude: true,
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_fab__["a" /* default */],
  attrs: {
    icon: {
      msvg: __WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_action_alarm_add___default.a
    },
    animateOnTap: false
  }
}, {
  name: "Option: url",
  interactive: true,
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_fab__["a" /* default */],
  attrs: {
    icon: {
      msvg: __WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_action_alarm_add___default.a
    },
    url: {
      href: "/shadow",
      oncreate: __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.route.link
    }
  }
},

// Dark theme

{
  name: "Option: icon -- dark theme class",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_fab__["a" /* default */],
  class: "pe-dark-theme",
  attrs: {
    icon: {
      msvg: __WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_action_alarm_add___default.a
    }
  }
}, {
  name: "Themed FAB -- dark theme class",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_fab__["a" /* default */],
  class: "pe-dark-theme",
  attrs: {
    icon: {
      msvg: __WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_action_alarm_add___default.a
    },
    class: "tests-fab-themed-fab"
  }
}, {
  name: "Dark theme class + light theme class",
  class: "pe-dark-theme",
  component: {
    view: function view() {
      return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(".pe-light-theme", {
        style: { background: "#fff", padding: "10px" }
      }, [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_fab__["a" /* default */], {
        icon: {
          msvg: __WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_action_alarm_add___default.a
        }
      }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_fab__["a" /* default */], {
        icon: {
          msvg: __WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_action_alarm_add___default.a
        },
        class: "tests-fab-themed-fab"
      })]);
    }
  }
}, {
  name: "Dark theme class + light tone",
  class: "test-dark-theme",
  component: {
    view: function view() {
      return __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
        style: { background: "#fff", padding: "10px" }
      }, [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_fab__["a" /* default */], {
        icon: {
          msvg: __WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_action_alarm_add___default.a
        },
        tint: "light"
      }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_fab__["a" /* default */], {
        icon: {
          msvg: __WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_action_alarm_add___default.a
        },
        class: "tests-fab-themed-fab",
        tint: "light"
      })]);
    }
  }
}];

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_icon_button__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_icon__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_action_favorite_border__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_action_favorite_border___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_action_favorite_border__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tests; });





__WEBPACK_IMPORTED_MODULE_1_polythene_icon_button__["a" /* default */].theme(".tests-icon-button-themed-icon-button", {
  padding: 24,
  color_light_background: "purple",
  color_dark_background: "orange",
  color_light: "white"
});

var tests = [{
  name: "Child node (icon component)",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_icon_button__["a" /* default */],
  attrs: null,
  children: __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_icon__["a" /* default */], { msvg: __WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_action_favorite_border___default.a })
}, {
  name: "Option: icon",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_icon_button__["a" /* default */],
  attrs: {
    icon: {
      msvg: __WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_action_favorite_border___default.a
    }
  }
}, {
  name: "Option: compact",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_icon_button__["a" /* default */],
  attrs: {
    icon: {
      msvg: __WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_action_favorite_border___default.a
    },
    compact: true
  }
}, {
  name: "Option: style (colors)",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_icon_button__["a" /* default */],
  attrs: {
    icon: {
      msvg: __WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_action_favorite_border___default.a
    },
    style: {
      color: "#FFCCBC",
      backgroundColor: "#4E342E"
    }
  }
}, {
  name: "Themed (colors and padding)",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_icon_button__["a" /* default */],
  attrs: {
    icon: {
      msvg: __WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_action_favorite_border___default.a
    },
    class: "tests-icon-button-themed-icon-button"
  }
}, {
  name: "Option: ripple (center)",
  interactive: true,
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_icon_button__["a" /* default */],
  attrs: {
    icon: {
      msvg: __WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_action_favorite_border___default.a
    },
    ripple: {
      center: true
    }
  }
}, {
  name: "Option: url",
  interactive: true,
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_icon_button__["a" /* default */],
  attrs: {
    icon: {
      msvg: __WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_action_favorite_border___default.a
    },
    url: {
      href: "/shadow",
      oncreate: __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.route.link
    }
  }
}, {
  name: "Option: type (small)",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_icon_button__["a" /* default */],
  attrs: {
    icon: {
      msvg: __WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_action_favorite_border___default.a,
      type: "small"
    }
  }
}, {
  name: "Option: type (regular)",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_icon_button__["a" /* default */],
  attrs: {
    icon: {
      msvg: __WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_action_favorite_border___default.a,
      type: "regular"
    }
  }
}, {
  name: "Option: type (medium)",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_icon_button__["a" /* default */],
  attrs: {
    icon: {
      msvg: __WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_action_favorite_border___default.a,
      type: "medium"
    }
  }
}, {
  name: "Option: type (large)",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_icon_button__["a" /* default */],
  attrs: {
    icon: {
      msvg: __WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_action_favorite_border___default.a,
      type: "large"
    }
  }
},

// Dark theme

{
  name: "Child node (icon component) -- dark theme class",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_icon_button__["a" /* default */],
  class: "pe-dark-theme",
  attrs: null,
  children: __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_icon__["a" /* default */], { msvg: __WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_action_favorite_border___default.a })
}, {
  name: "Themed (color and size) -- dark theme class",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_icon_button__["a" /* default */],
  class: "pe-dark-theme",
  attrs: {
    icon: {
      msvg: __WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_action_favorite_border___default.a
    },
    class: "tests-icon-button-themed-icon-button"
  }
}, {
  name: "Dark theme class + light theme class",
  class: "pe-dark-theme",
  component: {
    view: function view() {
      return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(".pe-light-theme", {
        style: { background: "#fff", padding: "10px" }
      }, [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_icon_button__["a" /* default */], {
        icon: {
          msvg: __WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_action_favorite_border___default.a
        }
      }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_icon_button__["a" /* default */], {
        icon: {
          msvg: __WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_action_favorite_border___default.a
        },
        class: "tests-icon-button-themed-icon-button"
      })]);
    }
  }
}, {
  name: "Dark theme class + light tone",
  class: "test-dark-theme",
  component: {
    view: function view() {
      return __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
        style: { background: "#fff", padding: "10px" }
      }, [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_icon_button__["a" /* default */], {
        icon: {
          msvg: __WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_action_favorite_border___default.a
        },
        tone: "light"
      }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_icon_button__["a" /* default */], {
        icon: {
          msvg: __WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_action_favorite_border___default.a
        },
        tone: "light",
        class: "tests-icon-button-themed-icon-button"
      })]);
    }
  }
}];

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_icon__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_svg__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_action_stars__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_action_stars___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_action_stars__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mmsvg_zondicons_msvg_wrench__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mmsvg_zondicons_msvg_wrench___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_mmsvg_zondicons_msvg_wrench__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tests; });




var trustedSvg = __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.trust("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z\"/></svg>");




__WEBPACK_IMPORTED_MODULE_1_polythene_icon__["a" /* default */].theme(".tests-icon-themed-icon", {
  size_regular: 50,
  color_light: "purple",
  color_dark: "orange"
});

var tests = [{
  name: "Child node (svg children mmsvg)",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_icon__["a" /* default */],
  attrs: null,
  children: __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_svg__["a" /* default */], [__WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_action_stars___default.a])
}, {
  name: "Option: content",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_icon__["a" /* default */],
  attrs: {
    content: __WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_action_stars___default.a
  }
}, {
  name: "Option: content (svg trusted content)",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_icon__["a" /* default */],
  attrs: {
    svg: { content: trustedSvg }
  }
}, {
  name: "Option: content (svg content mmsvg)",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_icon__["a" /* default */],
  attrs: {
    svg: { content: __WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_action_stars___default.a }
  }
}, {
  name: "Option: msvg",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_icon__["a" /* default */],
  attrs: {
    msvg: __WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_action_stars___default.a
  }
}, {
  name: "Option: msvg (Zondicons)",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_icon__["a" /* default */],
  attrs: {
    msvg: __WEBPACK_IMPORTED_MODULE_4_mmsvg_zondicons_msvg_wrench___default.a
  }
}, {
  name: "Option: src (image file)",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_icon__["a" /* default */],
  attrs: {
    src: "img/arrow-back.png"
  }
}, {
  name: "Option: src (svg file)",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_icon__["a" /* default */],
  attrs: {
    src: "img/arrow-back.svg"
  }
}, {
  name: "Option: style",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_icon__["a" /* default */],
  attrs: {
    msvg: __WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_action_stars___default.a,
    style: {
      color: "#EF6C00"
    }
  }
}, {
  name: "Themed (color and size)",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_icon__["a" /* default */],
  attrs: {
    msvg: __WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_action_stars___default.a,
    class: "tests-icon-themed-icon"
  }
}, {
  name: "Option: type (small)",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_icon__["a" /* default */],
  attrs: {
    msvg: __WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_action_stars___default.a,
    type: "small"
  }
}, {
  name: "Option: type (regular)",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_icon__["a" /* default */],
  attrs: {
    msvg: __WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_action_stars___default.a,
    type: "regular"
  }
}, {
  name: "Option: type (medium)",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_icon__["a" /* default */],
  attrs: {
    msvg: __WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_action_stars___default.a,
    type: "medium"
  }
}, {
  name: "Option: type (large)",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_icon__["a" /* default */],
  attrs: {
    msvg: __WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_action_stars___default.a,
    type: "large"
  }
}, {
  name: "Option: avatar (type large)",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_icon__["a" /* default */],
  attrs: {
    src: "http://arthurclemens.github.io/assets/polythene/examples/avatar-1.png",
    avatar: true,
    type: "large"
  }
},

// Dark theme

{
  name: "Child node (svg children mmsvg) -- dark theme class (color set with style option)",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_icon__["a" /* default */],
  class: "pe-dark-theme",
  attrs: {
    style: {
      color: "#fff"
    }
  },
  children: __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_svg__["a" /* default */], [__WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_action_stars___default.a])
}, {
  name: "Themed (color and size) -- dark theme class",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_icon__["a" /* default */],
  class: "pe-dark-theme",
  attrs: {
    msvg: __WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_action_stars___default.a,
    class: "tests-icon-themed-icon"
  }
}, {
  name: "Dark theme class + light theme class",
  class: "pe-dark-theme",
  component: {
    view: function view() {
      return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(".pe-light-theme", {
        style: { background: "#fff" }
      }, [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_icon__["a" /* default */], {
        msvg: __WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_action_stars___default.a
      }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_icon__["a" /* default */], {
        msvg: __WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_action_stars___default.a,
        class: "tests-icon-themed-icon"
      })]);
    }
  }
}, {
  name: "Dark theme class + light tone",
  class: "test-dark-theme",
  component: {
    view: function view() {
      return __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
        style: { background: "#fff" }
      }, [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_icon__["a" /* default */], {
        msvg: __WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_action_stars___default.a,
        tone: "light"
      }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_icon__["a" /* default */], {
        msvg: __WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_action_stars___default.a,
        tone: "light",
        class: "tests-icon-themed-icon"
      })]);
    }
  }
}];

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_list_tile__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_icon__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_action_stars__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_action_stars___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_action_stars__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tests; });





__WEBPACK_IMPORTED_MODULE_1_polythene_list_tile__["a" /* default */].theme(".tests-list-tile-themed-list-tile", {
  color_light_title: "#424242",
  color_light_background: "#FFECB3",
  color_dark_title: "#FFECB3",
  color_dark_background: "#5D4037",
  font_size_title: 21
});

var tests = [{
  name: "Child node",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_list_tile__["a" /* default */],
  attrs: null,
  children: __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_icon__["a" /* default */], { msvg: __WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_action_stars___default.a })
}, {
  name: "Option: title",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_list_tile__["a" /* default */],
  attrs: {
    title: "Ancillary Justice"
  }
}, {
  name: "Option: content",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_list_tile__["a" /* default */],
  attrs: {
    title: "Ancillary Justice",
    content: __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_icon__["a" /* default */], { msvg: __WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_action_stars___default.a })
  }
}, {
  name: "Option: subtitle",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_list_tile__["a" /* default */],
  attrs: {
    title: "Ancillary Justice",
    subtitle: "The body lay naked and facedown, a deathly gray, spatters of blood staining the snow around it. It was minus fifteen degrees Celsius and a storm had passed just hours before."
  }
}, {
  name: "Option: highSubtitle",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_list_tile__["a" /* default */],
  attrs: {
    title: "Ancillary Justice",
    highSubtitle: "The body lay naked and facedown, a deathly gray, spatters of blood staining the snow around it. It was minus fifteen degrees Celsius and a storm had passed just hours before."
  }
}, {
  name: "Option: highSubtitle and compact",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_list_tile__["a" /* default */],
  attrs: {
    title: "Ancillary Justice",
    highSubtitle: "The body lay naked and facedown, a deathly gray, spatters of blood staining the snow around it. It was minus fifteen degrees Celsius and a storm had passed just hours before.",
    compact: true
  }
}, {
  name: "Option: events",
  interactive: true,
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_list_tile__["a" /* default */],
  attrs: {
    title: "Click me",
    events: {
      onclick: function onclick() {
        return alert("clicked");
      }
    }
  }
}, {
  name: "Option: href",
  interactive: true,
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_list_tile__["a" /* default */],
  attrs: {
    title: "Ancillary Justice",
    url: {
      href: "/",
      oncreate: __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.route.link
    }
  }
}, {
  name: "Option: front (avatar)",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_list_tile__["a" /* default */],
  attrs: {
    title: "Ancillary Justice",
    front: __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_icon__["a" /* default */], {
      src: "http://arthurclemens.github.io/assets/polythene/examples/avatar-1.png",
      avatar: true,
      type: "large"
    })
  }
}, {
  name: "Option: front (icon)",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_list_tile__["a" /* default */],
  attrs: {
    title: "Ancillary Justice",
    front: __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_icon__["a" /* default */], {
      msvg: __WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_action_stars___default.a,
      type: "medium"
    })
  }
}, {
  name: "Themed (color and font size)",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_list_tile__["a" /* default */],
  attrs: {
    title: "Ancillary Justice",
    front: __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_icon__["a" /* default */], {
      msvg: __WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_action_stars___default.a,
      type: "medium"
    }),
    class: "tests-list-tile-themed-list-tile"
  }
}, {
  name: "Option: style (colors)",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_list_tile__["a" /* default */],
  attrs: {
    title: "Ancillary Justice",
    front: __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_icon__["a" /* default */], {
      msvg: __WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_action_stars___default.a,
      type: "medium"
    }),
    style: {
      color: "#fff",
      backgroundColor: "#EF6C00"
    }
  }
},

// Combined 

{
  name: "Option: highSubtitle and front",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_list_tile__["a" /* default */],
  attrs: {
    title: "Ancillary Justice",
    highSubtitle: "The body lay naked and facedown, a deathly gray, spatters of blood staining the snow around it. It was minus fifteen degrees Celsius and a storm had passed just hours before.",
    front: __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_icon__["a" /* default */], {
      src: "http://arthurclemens.github.io/assets/polythene/examples/avatar-1.png",
      avatar: true,
      type: "large"
    }),
    secondary: {
      icon: {
        msvg: __WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_action_stars___default.a
      },
      url: {
        href: "/",
        oncreate: __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.route.link
      }
    }
  }
},

// Appearance options

{
  name: "Option: indent",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_list_tile__["a" /* default */],
  attrs: {
    title: "Ancillary Justice",
    indent: true
  }
}, {
  name: "Option: selected",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_list_tile__["a" /* default */],
  attrs: {
    title: "Ancillary Justice",
    selected: true
  }
}, {
  name: "Option: disabled url",
  interactive: true,
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_list_tile__["a" /* default */],
  attrs: {
    title: "Ancillary Justice",
    url: {
      href: "/",
      oncreate: __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.route.link
    },
    disabled: true
  }
}, {
  name: "Option: ink",
  interactive: true,
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_list_tile__["a" /* default */],
  attrs: {
    title: "Ancillary Justice",
    ink: true
  }
}, {
  name: "Option: ink with ripple options",
  interactive: true,
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_list_tile__["a" /* default */],
  attrs: {
    title: "Ancillary Justice",
    ink: true,
    ripple: {
      opacityDecayVelocity: 0.1
    }
  }
}, {
  name: "Option: hoverable",
  interactive: true,
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_list_tile__["a" /* default */],
  attrs: {
    title: "Ancillary Justice",
    hoverable: true
  }
}, {
  name: "Option: selectable",
  interactive: true,
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_list_tile__["a" /* default */],
  attrs: {
    title: "Ancillary Justice",
    selectable: true
  }
},

// Secondary content options

{
  name: "Option: secondary (icon)",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_list_tile__["a" /* default */],
  attrs: {
    title: "Ancillary Justice",
    secondary: {
      icon: {
        msvg: __WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_action_stars___default.a,
        type: "medium"
      }
    }
  }
}, {
  name: "Option: secondary (url)",
  interactive: true,
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_list_tile__["a" /* default */],
  attrs: {
    title: "Ancillary Justice",
    secondary: {
      icon: {
        msvg: __WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_action_stars___default.a,
        type: "medium"
      },
      url: {
        href: "/",
        oncreate: __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.route.link
      }
    }
  }
}, {
  name: "Option: secondary (content)",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_list_tile__["a" /* default */],
  attrs: {
    title: "Ancillary Justice",
    secondary: {
      content: __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_icon__["a" /* default */], { msvg: __WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_action_stars___default.a })
    }
  }
},

// Dark theme

{
  name: "Option: highSubtitle and front -- dark theme class",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_list_tile__["a" /* default */],
  class: "pe-dark-theme",
  attrs: {
    title: "Ancillary Justice",
    highSubtitle: "The body lay naked and facedown, a deathly gray, spatters of blood staining the snow around it. It was minus fifteen degrees Celsius and a storm had passed just hours before.",
    front: __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_icon__["a" /* default */], {
      src: "http://arthurclemens.github.io/assets/polythene/examples/avatar-1.png",
      avatar: true,
      type: "large"
    }),
    secondary: {
      icon: {
        msvg: __WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_action_stars___default.a
      },
      url: {
        href: "/",
        oncreate: __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.route.link
      }
    }
  }
}, {
  name: "Option: disabled url -- dark theme class",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_list_tile__["a" /* default */],
  class: "pe-dark-theme",
  attrs: {
    title: "Ancillary Justice",
    disabled: true
  }
}, {
  name: "Themed (color and font size) -- dark theme class",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_list_tile__["a" /* default */],
  class: "pe-dark-theme",
  attrs: {
    title: "Ancillary Justice",
    front: __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_icon__["a" /* default */], {
      msvg: __WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_action_stars___default.a,
      type: "medium"
    }),
    class: "tests-list-tile-themed-list-tile"
  }
}, {
  name: "Dark theme class + light theme class",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_list_tile__["a" /* default */],
  class: "pe-dark-theme",
  attrs: {
    title: "Ancillary Justice",
    class: "pe-light-theme",
    front: __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_icon__["a" /* default */], {
      msvg: __WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_action_stars___default.a,
      type: "medium"
    })
  }
}, {
  name: "Dark theme class + light tone",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_list_tile__["a" /* default */],
  class: "test-dark-theme",
  attrs: {
    title: "Ancillary Justice",
    tone: "light",
    front: __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_icon__["a" /* default */], {
      msvg: __WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_action_stars___default.a,
      type: "medium"
    })
  }
}];

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_list__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_list_tile__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_icon__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tests; });





__WEBPACK_IMPORTED_MODULE_1_polythene_list__["a" /* default */].theme(".tests-lists-themed-list", {
  color_light_background: "#F57C00",
  color_light_border: "#F57C00",
  color_dark_background: "#5D4037",
  color_dark_border: "#5D4037",
  padding: 32
});
__WEBPACK_IMPORTED_MODULE_2_polythene_list_tile__["a" /* default */].theme(".tests-lists-themed-list-tile", {
  color_light_title: "#fff",
  color_light_subtitle: "rgba(255,255,255,.8)",
  color_light_background: "#EF6C00",
  color_dark_title: "#D7CCC8",
  color_dark_subtitle: "#BCAAA4",
  color_dark_background: "#4E342E"
});

var listTileJennifer = __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_list_tile__["a" /* default */], {
  title: "Jennifer Barker",
  subtitle: "Starting post doc",
  front: __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_3_polythene_icon__["a" /* default */], {
    src: "http://arthurclemens.github.io/assets/polythene/examples/avatar-1.png",
    avatar: true,
    type: "large"
  }),
  url: {
    href: "/",
    oncreate: __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.route.link
  }
});

var listTileAli = __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_list_tile__["a" /* default */], {
  title: "Ali Connors",
  subtitle: "Brunch this weekend?",
  front: __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_3_polythene_icon__["a" /* default */], {
    src: "http://arthurclemens.github.io/assets/polythene/examples/avatar-2.png",
    avatar: true,
    type: "large"
  }),
  url: {
    href: "/",
    oncreate: __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.route.link
  }
});

var listTileGrace = __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_list_tile__["a" /* default */], {
  title: "Grace VanDam",
  subtitle: "Binge watching...",
  front: __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_3_polythene_icon__["a" /* default */], {
    src: "http://arthurclemens.github.io/assets/polythene/examples/avatar-3.png",
    avatar: true,
    type: "large"
  }),
  url: {
    href: "/",
    oncreate: __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.route.link
  }
});

var tests = [{
  name: "Child nodes",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_list__["a" /* default */],
  attrs: {
    borders: true
  },
  children: [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_list_tile__["a" /* default */], {
    title: "Jennifer Barker",
    subtitle: "Starting post doc"
  }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_list_tile__["a" /* default */], {
    title: "Ali Connors",
    subtitle: "Brunch this weekend?"
  }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_list_tile__["a" /* default */], {
    title: "Grace VanDam",
    subtitle: "Binge watching..."
  })]
}, {
  name: "Option: tiles",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_list__["a" /* default */],
  attrs: {
    borders: true,
    tiles: [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_list_tile__["a" /* default */], {
      title: "Jennifer Barker",
      subtitle: "Starting post doc"
    }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_list_tile__["a" /* default */], {
      title: "Ali Connors",
      subtitle: "Brunch this weekend?"
    }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_list_tile__["a" /* default */], {
      title: "Grace VanDam",
      subtitle: "Binge watching..."
    })]
  }
}, {
  name: "Options: header, tiles, indent, indentedBorders",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_list__["a" /* default */],
  attrs: {
    indentedBorders: true,
    header: {
      title: "Friends",
      indent: true
    },
    tiles: [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_list_tile__["a" /* default */], {
      title: "Jennifer Barker",
      subtitle: "Starting post doc",
      indent: true
    }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_list_tile__["a" /* default */], {
      title: "Ali Connors",
      subtitle: "Brunch this weekend?",
      indent: true
    }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_list_tile__["a" /* default */], {
      title: "Grace VanDam",
      subtitle: "Binge watching...",
      indent: true
    })]
  }
}, {
  name: "Options: header, tiles with urls",
  interactive: true,
  component: {
    view: function view() {
      return [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_list__["a" /* default */], {
        header: {
          title: "Friends"
        },
        borders: true,
        tiles: [listTileJennifer, listTileAli, listTileGrace]
      }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_list__["a" /* default */], {
        header: {
          title: "Friends"
        },
        borders: true,
        tiles: [listTileJennifer, listTileAli, listTileGrace]
      })];
    }
  }
}, {
  name: "Option: compact",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_list__["a" /* default */],
  attrs: {
    compact: true,
    borders: true,
    header: {
      title: "Friends"
    },
    tiles: [listTileJennifer, listTileAli, listTileGrace]
  }
}, {
  name: "Options: header.sticky",
  interactive: true,
  exclude: true,
  component: {
    view: function view() {
      return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(".scrollable-list", [0, 1, 2, 3, 4].map(function () {
        return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_list__["a" /* default */], {
          header: {
            title: "Subheader",
            sticky: true
          },
          tiles: [listTileJennifer, listTileAli, listTileGrace, listTileJennifer, listTileAli, listTileGrace]
        });
      }));
    }
  }
}, {
  name: "Themed list (colors and padding)",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_list__["a" /* default */],
  attrs: {
    borders: true,
    class: "tests-lists-themed-list"
  },
  children: [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_list_tile__["a" /* default */], {
    title: "Jennifer Barker",
    subtitle: "Starting post doc",
    class: "tests-lists-themed-list-tile"
  }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_list_tile__["a" /* default */], {
    title: "Ali Connors",
    subtitle: "Brunch this weekend?",
    class: "tests-lists-themed-list-tile"
  }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_list_tile__["a" /* default */], {
    title: "Grace VanDam",
    subtitle: "Binge watching...",
    class: "tests-lists-themed-list-tile"
  })]
}, {
  name: "Option: style (colors)",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_list__["a" /* default */],
  attrs: {
    header: { style: { color: "rgba(255,255,255,.8)" }, title: "Friends" },
    tiles: [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_list_tile__["a" /* default */], { style: { color: "#fff" }, title: "One" }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_list_tile__["a" /* default */], { style: { color: "#fff" }, title: "Two" }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_list_tile__["a" /* default */], { style: { color: "#fff" }, title: "Three" })],
    style: {
      backgroundColor: "#EF6C00",
      color: "#fff"
    }
  }
},

// Dark theme

{
  name: "Option: class -- dark theme class",
  interactive: true,
  class: "pe-dark-theme",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_list__["a" /* default */],
  attrs: {
    borders: true,
    header: {
      title: "Friends"
    },
    tiles: [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_list_tile__["a" /* default */], {
      title: "Jennifer Barker",
      subtitle: "Starting post doc"
    }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_list_tile__["a" /* default */], {
      title: "Ali Connors",
      subtitle: "Brunch this weekend?"
    }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_list_tile__["a" /* default */], {
      title: "Grace VanDam",
      subtitle: "Binge watching..."
    })]
  }
}, {
  name: "Themed list (colors and padding) -- dark theme class",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_list__["a" /* default */],
  class: "pe-dark-theme",
  attrs: {
    borders: true,
    class: "tests-lists-themed-list"
  },
  children: [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_list_tile__["a" /* default */], {
    title: "Jennifer Barker",
    subtitle: "Starting post doc",
    class: "tests-lists-themed-list-tile"
  }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_list_tile__["a" /* default */], {
    title: "Ali Connors",
    subtitle: "Brunch this weekend?",
    class: "tests-lists-themed-list-tile"
  }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_list_tile__["a" /* default */], {
    title: "Grace VanDam",
    subtitle: "Binge watching...",
    class: "tests-lists-themed-list-tile"
  })]
}, {
  name: "Dark theme class + light theme class",
  interactive: true,
  class: "pe-dark-theme",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_list__["a" /* default */],
  attrs: {
    class: "pe-light-theme",
    style: { background: "#fff" },
    borders: true,
    header: {
      title: "Friends"
    },
    tiles: [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_list_tile__["a" /* default */], {
      title: "Jennifer Barker",
      subtitle: "Starting post doc",
      hoverable: true
    }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_list_tile__["a" /* default */], {
      title: "Ali Connors",
      subtitle: "Brunch this weekend?",
      hoverable: true
    }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_list_tile__["a" /* default */], {
      title: "Grace VanDam",
      subtitle: "Binge watching...",
      hoverable: true
    })]
  }
}, {
  name: "Dark theme class + light tone",
  interactive: true,
  class: "test-dark-theme",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_list__["a" /* default */],
  attrs: {
    style: { background: "#fff" },
    borders: true,
    header: {
      title: "Friends"
    },
    tone: "light",
    tiles: [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_list_tile__["a" /* default */], {
      title: "Jennifer Barker",
      subtitle: "Starting post doc",
      hoverable: true
    }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_list_tile__["a" /* default */], {
      title: "Ali Connors",
      subtitle: "Brunch this weekend?",
      hoverable: true
    }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_list_tile__["a" /* default */], {
      title: "Grace VanDam",
      subtitle: "Binge watching...",
      hoverable: true
    })]
  }
}];

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_menu__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_list__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_list_tile__ = __webpack_require__(5);





var tile = function tile(left, right, disabled) {
  return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_3_polythene_list_tile__["a" /* default */], {
    title: left,
    secondary: { content: right },
    disabled: disabled
  });
};

/* harmony default export */ __webpack_exports__["a"] = ({
  view: function view() {
    return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_menu__["a" /* default */], {
      size: 5,
      permanent: true,
      content: [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_list__["a" /* default */], {
        compact: true,
        hoverable: true,
        tiles: [tile("Bold", "\u2318B"), tile("Italic", "\u2318I"), tile("Underline", "\u2318U"), tile("Strikethrough", "Alt+Shift+5"), tile("Superscript", "\u2318."), tile("Subscript", "\u2318,")]
      }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_list__["a" /* default */], {
        compact: true,
        hoverable: true,
        tiles: [tile("Clear formatting", "\u2318/", true), tile("Custom spacing", "")]
      })]
    });
  }
});

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_menu__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_list__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_list_tile__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_polythene_shadow__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_polythene_icon_button__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_mmsvg_google_msvg_navigation_more_vert__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_mmsvg_google_msvg_navigation_more_vert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_mmsvg_google_msvg_navigation_more_vert__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_polythene_css__ = __webpack_require__(1);









var styles = [{
  " .position-container": {
    position: "relative",
    width: "47%",
    height: "230px",
    background: "#fff",
    margin: "10px",

    " .bar": {
      position: "relative",
      width: "100%"
    },
    " .bar-row.pe-dark-theme": {
      background: "#3F51B5",
      padding: "4px 0"
    }
  }
}];

__WEBPACK_IMPORTED_MODULE_7_polythene_css__["b" /* styler */].add("test-menu-position", styles);

var positionContainer = {
  showMenu: false,
  view: function view(vnode) {
    return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(".position-container.layout.vertical", vnode.attrs.barPosition === "bottom" ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()(".flex") : null, __WEBPACK_IMPORTED_MODULE_0_mithril___default()(".bar", [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_4_polythene_shadow__["a" /* default */], { z: 1 }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_menu__["a" /* default */], {
      class: "light-theme",
      target: vnode.attrs.id,
      origin: vnode.attrs.origin,
      show: vnode.state.showMenu,
      size: 3,
      hideDelay: .240,
      didHide: function didHide() {
        return vnode.state.showMenu = false;
      },
      content: __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_list__["a" /* default */], {
        hoverable: true,
        tiles: ["Refresh", "Help & Feedback", "Settings", "Sign Out"].map(function (item) {
          return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_3_polythene_list_tile__["a" /* default */], {
            title: item,
            positionSelected: false,
            ink: true
          });
        })
      })
    }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(".bar-row.pe-dark-theme.layout.horizontal", [vnode.attrs.buttonPosition === "right" ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()(".flex") : null, __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_5_polythene_icon_button__["a" /* default */], {
      id: vnode.attrs.id,
      icon: {
        msvg: __WEBPACK_IMPORTED_MODULE_6_mmsvg_google_msvg_navigation_more_vert___default.a
      },
      events: {
        onclick: function onclick() {
          return vnode.state.showMenu = true;
        }
      }
    })])]));
  }
};

/* harmony default export */ __webpack_exports__["a"] = ({
  view: function view() {
    return [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(".layout.horizontal", [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(positionContainer, {
      id: "show_menu_top_left",
      origin: "top-left",
      barPosition: "top",
      buttonPosition: "left"
    }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(".flex"), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(positionContainer, {
      id: "show_menu_top_right",
      origin: "top-right",
      barPosition: "top",
      buttonPosition: "right"
    })]), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(".layout.horizontal", [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(positionContainer, {
      id: "show_menu_bottom_left",
      origin: "bottom-left",
      barPosition: "bottom",
      buttonPosition: "left"
    }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(".flex"), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(positionContainer, {
      id: "show_menu_bottom_right",
      origin: "bottom-right",
      barPosition: "bottom",
      buttonPosition: "right"
    })])];
  }
});

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_dialog__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_raised_button__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_list__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_polythene_list_tile__ = __webpack_require__(5);






var tile = function tile(title, selected, disabled) {
  return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_4_polythene_list_tile__["a" /* default */], {
    title: title,
    selected: selected,
    disabled: disabled,
    ink: true,
    events: {
      onclick: function onclick() {
        if (!disabled) {
          __WEBPACK_IMPORTED_MODULE_1_polythene_dialog__["a" /* default */].hide();
        }
      }
    }
  });
};

var settingsMenuDialog = {
  menu: __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_3_polythene_list__["a" /* default */], {
    hoverable: true,
    tiles: [tile("Any bar, any cross, any impediment will be medicinable to me: I am sick in displeasure to him", true, false), tile("and whatsoever comes athwart his affection ranges", false, false), tile("evenly with mine. How canst thou cross this marriage?", false, true)]
  }),
  hideDelay: .240
};

/* harmony default export */ __webpack_exports__["a"] = ({
  view: function view() {
    return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_raised_button__["a" /* default */], {
      label: "Open",
      events: {
        onclick: function onclick() {
          return __WEBPACK_IMPORTED_MODULE_1_polythene_dialog__["a" /* default */].show(settingsMenuDialog);
        }
      }
    });
  }
});

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_menu__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_list__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_list_tile__ = __webpack_require__(5);





var menuOptions = ["Show all notification content", "Hide sensitive notification content", "Hide all notification content"];

/* harmony default export */ __webpack_exports__["a"] = ({
  isOpen: false,
  selectedIndex: 0,
  id: "id-" + Math.floor(Math.random() * 1000),
  view: function view(vnode) {
    return __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
      style: { position: "relative" }
    }, [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_menu__["a" /* default */], {
      target: vnode.state.id,
      show: vnode.state.isOpen,
      hideDelay: .240,
      didHide: function didHide() {
        return vnode.state.isOpen = false;
      },
      size: 5,
      content: __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_list__["a" /* default */], {
        hoverable: true,
        tiles: menuOptions.map(function (setting, index) {
          return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_3_polythene_list_tile__["a" /* default */], {
            title: setting,
            selected: index === vnode.state.selectedIndex,
            ink: true,
            events: {
              onclick: function onclick() {
                return vnode.state.selectedIndex = index;
              }
            }
          });
        })
      })
    }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_list__["a" /* default */], {
      selectable: true,
      style: {
        backgroundColor: "#fff",
        maxWidth: "320px"
      },
      tiles: [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_3_polythene_list_tile__["a" /* default */], {
        id: vnode.state.id,
        title: "When device is locked",
        subtitle: menuOptions[vnode.state.selectedIndex],
        events: {
          onclick: function onclick() {
            return vnode.state.isOpen = true;
          }
        }
      }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_3_polythene_list_tile__["a" /* default */], {
        title: "Item 2",
        disabled: true
      }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_3_polythene_list_tile__["a" /* default */], {
        title: "Item 3",
        disabled: true
      })]
    })]);
  }
});

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_menu__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_raised_button__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_list__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_polythene_list_tile__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return simpleMenuContent; });






var simpleMenuContent = __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_3_polythene_list__["a" /* default */], [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_4_polythene_list_tile__["a" /* default */], {
  title: "Yes",
  ink: true
}), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_4_polythene_list_tile__["a" /* default */], {
  title: "No",
  ink: true
})]);

/* harmony default export */ __webpack_exports__["b"] = ({
  isOpen: false,
  id: "id-" + Math.floor(Math.random() * 1000),
  view: function view(vnode) {
    return __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
      style: { position: "relative" }
    }, [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_raised_button__["a" /* default */], {
      label: "Open menu",
      id: vnode.state.id,
      events: {
        onclick: function onclick() {
          return vnode.state.isOpen = true;
        }
      }
    }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_menu__["a" /* default */], {
      offset: -4,
      target: vnode.state.id,
      show: vnode.state.isOpen,
      didHide: function didHide() {
        return vnode.state.isOpen = false;
      },
      content: simpleMenuContent
    })]);
  }
});

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_menu__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_list__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_list_tile__ = __webpack_require__(5);





/* harmony default export */ __webpack_exports__["a"] = (function (size) {
  var sizeTexts = {
    "1": ["en", "nl", "de"],
    "1.5": ["Yes", "No", "Maybe"],
    "2": ["Copy", "Paste", "Undo"],
    "3": ["Home", "Back", "Recently viewed"],
    "4": ["Paragraph styles", "Line spacing", "Numbered list"],
    "5": ["Add space before paragraph", "Add space after paragraph", "Custom spacing"],
    "6": ["The Mind Is Its Own Beautiful Prisoner", "If I Should Sleep With A Lady Called Death", "It May Not Always Be So; And I Say"],
    "7": ["Any bar, any cross, any impediment will be", "medicinable to me: I am sick in displeasure to him", "and whatsoever comes athwart his affection ranges", "evenly with mine. How canst thou cross this marriage?"],
    "auto": ["Paragraph styles", "Line spacing", "Numbered list"]
  };
  var sizeStr = size.toString();
  return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_menu__["a" /* default */], {
    size: size,
    permanent: true,
    content: __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_list__["a" /* default */], {
      compact: true,
      header: {
        title: size
      },
      tiles: sizeTexts[sizeStr].map(function (label) {
        return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_3_polythene_list_tile__["a" /* default */], {
          title: label
        });
      })
    }),
    style: { margin: "0 0 1rem 0" }
  });
});

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_menu__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_list__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_list_tile__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__simple__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sizes__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__menu_items__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__settings_dialog__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__position__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__settings__ = __webpack_require__(61);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tests; });











var themeColor = "#2196F3";
__WEBPACK_IMPORTED_MODULE_1_polythene_menu__["a" /* default */].theme(".menu-tests-blue-menu", {
  color_light_background: themeColor,
  border_radius: 0
});
__WEBPACK_IMPORTED_MODULE_3_polythene_list_tile__["a" /* default */].theme(".menu-tests-blue-menu-list-tile", {
  color_light_title: "#fff",
  color_light_background: themeColor
});

var themedSimpleMenuContent = __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_list__["a" /* default */], [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_3_polythene_list_tile__["a" /* default */], {
  title: "Yes",
  ink: true,
  class: "menu-tests-blue-menu-list-tile"
}), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_3_polythene_list_tile__["a" /* default */], {
  title: "No",
  ink: true,
  class: "menu-tests-blue-menu-list-tile"
})]);

var styledSimpleMenuContent = __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_list__["a" /* default */], [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_3_polythene_list_tile__["a" /* default */], {
  title: "Yes",
  ink: true,
  style: {
    backgroundColor: themeColor,
    color: "#fff"
  }
}), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_3_polythene_list_tile__["a" /* default */], {
  title: "No",
  ink: true,
  style: {
    backgroundColor: themeColor,
    color: "#fff"
  }
})]);

var tests = [{
  name: "Simple menu - permanent",
  component: {
    view: function view() {
      return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_menu__["a" /* default */], {
        content: __WEBPACK_IMPORTED_MODULE_4__simple__["a" /* simpleMenuContent */],
        permanent: true
      });
    }
  }
}, {
  name: "Themed (color and border radius)",
  component: {
    view: function view() {
      return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_menu__["a" /* default */], {
        content: themedSimpleMenuContent,
        permanent: true,
        class: "menu-tests-blue-menu"
      });
    }
  }
}, {
  name: "Option: style",
  component: {
    view: function view() {
      return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_menu__["a" /* default */], {
        content: styledSimpleMenuContent,
        permanent: true,
        tone: "dark",
        style: {
          backgroundColor: themeColor,
          color: "#fff"
        }
      });
    }
  }
}, {
  name: "Simple menu",
  interactive: true,
  exclude: true,
  component: __WEBPACK_IMPORTED_MODULE_4__simple__["b" /* default */]
}, {
  name: "Menu items",
  component: __WEBPACK_IMPORTED_MODULE_6__menu_items__["a" /* default */]
}, {
  name: "Dialog with option 'menu'",
  interactive: true,
  exclude: true,
  component: __WEBPACK_IMPORTED_MODULE_7__settings_dialog__["a" /* default */]
}, {
  name: "Positioning",
  interactive: true,
  exclude: true,
  component: __WEBPACK_IMPORTED_MODULE_8__position__["a" /* default */]
}, {
  name: "Change setting and reposition according to selected item",
  interactive: true,
  exclude: true,
  component: __WEBPACK_IMPORTED_MODULE_9__settings__["a" /* default */]
}, {
  name: "Option: size",
  component: {
    view: function view() {
      return [1.5, 2, 3, 4, 5, 6, 7, "auto"].map(function (s) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__sizes__["a" /* default */])(s);
      });
    }
  }
},

// Dark theme
{
  name: "Simple menu - permanent -- dark theme class",
  class: "pe-dark-theme",
  component: {
    view: function view() {
      return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_menu__["a" /* default */], {
        content: __WEBPACK_IMPORTED_MODULE_4__simple__["a" /* simpleMenuContent */],
        permanent: true
      });
    }
  }
}, {
  name: "Menu items -- dark theme class",
  class: "pe-dark-theme",
  component: __WEBPACK_IMPORTED_MODULE_6__menu_items__["a" /* default */]
}, {
  name: "Dark theme class + light theme class",
  class: "pe-dark-theme",
  component: {
    view: function view() {
      return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_menu__["a" /* default */], {
        class: "pe-light-theme",
        content: __WEBPACK_IMPORTED_MODULE_4__simple__["a" /* simpleMenuContent */],
        permanent: true
      });
    }
  }
}, {
  name: "Dark theme class + light tone",
  class: "test-dark-theme",
  component: {
    view: function view() {
      return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_menu__["a" /* default */], {
        tone: "light",
        content: __WEBPACK_IMPORTED_MODULE_4__simple__["a" /* simpleMenuContent */],
        permanent: true
      });
    }
  }
}];

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_notification__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_dialog__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_button__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_polythene_raised_button__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tests; });






__WEBPACK_IMPORTED_MODULE_1_polythene_notification__["a" /* default */].theme(".notification-tests-blue-notification", {
  color_dark_background: "#2196F3",
  border_radius: 5
});

var buttonRow = function buttonRow(messageOptions, spawnOptions) {
  return [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_4_polythene_raised_button__["a" /* default */], {
    label: "Show",
    events: { onclick: function onclick() {
        return __WEBPACK_IMPORTED_MODULE_1_polythene_notification__["a" /* default */].show(messageOptions, spawnOptions);
      } }
  }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_4_polythene_raised_button__["a" /* default */], {
    label: "Hide",
    disabled: __WEBPACK_IMPORTED_MODULE_1_polythene_notification__["a" /* default */].count() === 0,
    events: { onclick: function onclick() {
        return __WEBPACK_IMPORTED_MODULE_1_polythene_notification__["a" /* default */].hide(spawnOptions);
      } }
  }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_4_polythene_raised_button__["a" /* default */], {
    label: "Clear",
    disabled: __WEBPACK_IMPORTED_MODULE_1_polythene_notification__["a" /* default */].count() === 0,
    events: {
      onclick: function onclick() {
        __WEBPACK_IMPORTED_MODULE_1_polythene_notification__["a" /* default */].hide().then(function () {
          __WEBPACK_IMPORTED_MODULE_1_polythene_notification__["a" /* default */].clear();
          __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.redraw();
        });
      }
    }
  })];
};

var dialogOptions = {
  body: "You pressed a message action",
  footer: [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_3_polythene_button__["a" /* default */], {
    label: "Cancel",
    events: {
      onclick: function onclick() {
        __WEBPACK_IMPORTED_MODULE_2_polythene_dialog__["a" /* default */].hide();
        __WEBPACK_IMPORTED_MODULE_1_polythene_notification__["a" /* default */].unpause();
      }
    }
  }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_3_polythene_button__["a" /* default */], {
    label: "OK",
    events: {
      onclick: function onclick() {
        __WEBPACK_IMPORTED_MODULE_2_polythene_dialog__["a" /* default */].hide();
        __WEBPACK_IMPORTED_MODULE_1_polythene_notification__["a" /* default */].hide();
      }
    }
  })],
  backdrop: true,
  modal: true,
  hideDelay: .2
};

var tests = [{
  name: "Option: title (1 line)",
  interactive: true,
  exclude: true,
  component: {
    view: function view() {
      return buttonRow({
        title: "A one line message"
      });
    }
  }
}, {
  name: "Option: title (2 lines)",
  interactive: true,
  exclude: true,
  component: {
    view: function view() {
      return buttonRow({
        title: "This message tells some things using two lines"
      });
    }
  }
}, {
  name: "Option: title (1 line) as function",
  interactive: true,
  exclude: true,
  component: {
    view: function view() {
      return buttonRow(function () {
        return {
          title: "A one line message"
        };
      });
    }
  }
}, {
  name: "Option: content",
  interactive: true,
  exclude: true,
  component: {
    view: function view() {
      return buttonRow({
        content: __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", "This message tells some things using two lines")
      });
    }
  }
}, {
  name: "Option: style",
  interactive: true,
  exclude: true,
  component: {
    view: function view() {
      return buttonRow({
        title: "This message tells some things using two lines",
        style: {
          color: "orange",
          backgroundColor: "#4E342E",
          padding: "1.5rem"
        }
      });
    }
  }
}, {
  name: "Themed (color and border radius)",
  interactive: true,
  exclude: true,
  component: {
    view: function view() {
      return buttonRow({
        title: "This message tells some things using two lines",
        class: "notification-tests-blue-notification"
      });
    }
  }
}, {
  name: "Option: title (1 line), action",
  interactive: true,
  exclude: true,
  component: {
    view: function view() {
      return buttonRow({
        title: "Archived",
        action: __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_3_polythene_button__["a" /* default */], {
          label: "Undo",
          events: {
            onclick: function onclick() {
              __WEBPACK_IMPORTED_MODULE_1_polythene_notification__["a" /* default */].pause();
              __WEBPACK_IMPORTED_MODULE_2_polythene_dialog__["a" /* default */].show(dialogOptions);
            }
          }
        })
      });
    }
  }
}, {
  name: "Option: title (1 line), action -- light tone",
  interactive: true,
  exclude: true,
  component: {
    view: function view() {
      return buttonRow({
        title: "Archived",
        tone: "light",
        action: __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_3_polythene_button__["a" /* default */], {
          label: "Undo",
          events: {
            onclick: function onclick() {
              __WEBPACK_IMPORTED_MODULE_1_polythene_notification__["a" /* default */].pause();
              __WEBPACK_IMPORTED_MODULE_2_polythene_dialog__["a" /* default */].show(dialogOptions);
            }
          }
        })
      });
    }
  }
}, {
  name: "Option: title (2 lines), action, layout (\"vertical\")",
  interactive: true,
  exclude: true,
  component: {
    view: function view() {
      return buttonRow({
        title: "This message tells some things using two lines",
        layout: "vertical",
        action: __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_3_polythene_button__["a" /* default */], {
          label: "Let me think about it",
          events: {
            onclick: function onclick() {
              __WEBPACK_IMPORTED_MODULE_1_polythene_notification__["a" /* default */].pause();
              __WEBPACK_IMPORTED_MODULE_2_polythene_dialog__["a" /* default */].show(dialogOptions);
            }
          }
        })
      });
    }
  }
}, {
  name: "Multiple ids",
  interactive: true,
  exclude: true,
  component: {
    view: function view() {
      return [__WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", buttonRow({
        title: "A one line message"
      }, {
        id: "one"
      })), __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", buttonRow({
        title: "This message tells some things using two lines"
      }, {
        id: "two"
      }))];
    }
  }
}, {
  name: "Option: containerSelector",
  interactive: true,
  exclude: true,
  component: {
    view: function view() {
      return [buttonRow({
        title: "Notification in a container",
        containerSelector: "#notifs1"
      }, {
        spawn: "container1"
      }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()("#notifs1", {
        style: {
          position: "relative",
          height: "180px"
        }
      }, __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_notification__["a" /* default */], { spawn: "container1", position: "container" })), buttonRow({
        title: "Notification in container two",
        containerSelector: "#notifs2"
      }, {
        spawn: "container2"
      }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()("#notifs2", {
        style: {
          position: "relative",
          height: "180px"
        }
      }, __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_notification__["a" /* default */], { spawn: "container2", position: "container" }))];
    }
  }
}, {
  name: "Option: transitions",
  interactive: true,
  exclude: true,
  component: {
    view: function view() {
      return buttonRow({
        title: "Custom transitions",
        transitions: {
          show: function show(el) {
            return {
              el: el,
              showDuration: .5,
              beforeShow: function beforeShow() {
                return el.style.opacity = 0, el.style.transform = "translate3d(0, 20px, 0)";
              },
              show: function show() {
                return el.style.opacity = 1, el.style.transform = "translate3d(0, 0px,  0)";
              }
            };
          },
          hide: function hide(el) {
            return {
              el: el,
              hideDuration: .5,
              hide: function hide() {
                return el.style.opacity = 0;
              }
            };
          }
        }
      });
    }
  }
}, {
  name: "Option: showDelay, showDuration, hideDuration",
  interactive: true,
  exclude: true,
  component: {
    view: function view() {
      return buttonRow({
        title: "Custom timing",
        showDelay: .3,
        showDuration: 1.1,
        hideDuration: 1.5
      });
    }
  }
}, {
  name: "Option: transition (show)",
  interactive: true,
  exclude: true,
  component: {
    view: function view() {
      return buttonRow({
        title: "A one line message",
        transition: "show"
      });
    }
  }
}, {
  name: "Option: transition (hide)",
  interactive: true,
  exclude: true,
  component: {
    view: function view() {
      return buttonRow({
        title: "A one line message",
        transition: "hide"
      });
    }
  }
}, {
  name: "Option: no transition",
  interactive: true,
  exclude: true,
  component: {
    view: function view() {
      return buttonRow({
        title: "A one line message",
        transition: "none"
      });
    }
  }
}];

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_radio_button__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mmsvg_google_msvg_toggle_star_border__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mmsvg_google_msvg_toggle_star_border___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mmsvg_google_msvg_toggle_star_border__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_toggle_star__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_toggle_star___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_toggle_star__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tests; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };






__WEBPACK_IMPORTED_MODULE_1_polythene_radio_button__["a" /* default */].theme(".tests-radio-button-themed-radio", {
  label_font_size: 28,
  color_light_on: "#2196F3",
  color_light_off: "#2196F3",
  color_dark_on: "#2196F3",
  color_dark_off: "#2196F3",
  color_light_label: "#2196F3",
  color_dark_label: "#2196F3"
});

var sizeNames = ["small", "regular", "medium", "large"];

var idCounter = 0;

var group = function group(attrs1) {
  var attrs2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : attrs1;

  var name = attrs1.name || "name-" + idCounter++ + "}";
  return {
    view: function view() {
      return [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_radio_button__["a" /* default */], _extends({}, attrs1, {
        name: name
      })), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_radio_button__["a" /* default */], _extends({}, attrs2, {
        name: name
      }))];
    }
  };
};

var radioGroup = {
  view: function view() {
    return [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_radio_button__["a" /* default */], {
      name: "setting",
      label: "Label"
    }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_radio_button__["a" /* default */], {
      name: "setting",
      label: "Label",
      checked: true
    })];
  }
};

var tests = [{
  name: "Option: label",
  component: radioGroup
}, {
  name: "Option: checked",
  component: group({
    label: "Label"
  }, {
    label: "Label",
    checked: true
  })
}, {
  name: "Option: value",
  component: group({
    label: "Label",
    name: "worth",
    value: "notable"
  })
}, {
  name: "Option: size",
  component: {
    view: function view() {
      return __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", sizeNames.map(function (size) {
        var options = {
          name: size,
          label: "Label",
          size: size
        };
        return __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
          style: {
            marginBottom: "1rem"
          }
        }, [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_radio_button__["a" /* default */], options), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_radio_button__["a" /* default */], options)]);
      }));
    }
  }
}, {
  name: "Themed radio button (color and font size)",
  component: group({
    label: "Label",
    class: "tests-radio-button-themed-radio"
  }, {
    label: "Label",
    class: "tests-radio-button-themed-radio",
    checked: true
  })
}, {
  name: "Option: style (colors)",
  component: group({
    label: "Label",
    style: {
      color: "#EF6C00"
    }
  }, {
    label: "Label",
    style: {
      color: "#EF6C00"
    },
    checked: true
  })
}, {
  name: "Option: iconOn, iconOff (custom icon)",
  component: {
    view: function view() {
      return __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", sizeNames.map(function (size) {
        var options = {
          name: size,
          label: "Label",
          size: size,
          iconOn: {
            msvg: __WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_toggle_star___default.a
          },
          iconOff: {
            msvg: __WEBPACK_IMPORTED_MODULE_2_mmsvg_google_msvg_toggle_star_border___default.a
          }
        };
        return __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
          style: {
            marginBottom: "1rem"
          }
        }, [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_radio_button__["a" /* default */], options), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_radio_button__["a" /* default */], options)]);
      }));
    }
  }
},

// // Interactive

{
  name: "Select with TAB and ENTER",
  interactive: true,
  exclude: true,
  component: {
    view: function view() {
      var options = {
        label: "Label",
        name: "enter"
      };
      return [__WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
        style: {
          marginBottom: "1rem"
        }
      }, "On desktop, TAB can be used to give focus, ENTER to select."), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_radio_button__["a" /* default */], options), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_radio_button__["a" /* default */], options)];
    }
  }
}, {
  name: "Option: disabled",
  interactive: true,
  component: group({
    label: "Off",
    disabled: true
  }, {
    label: "On",
    disabled: true,
    checked: true
  })
}, {
  name: "Option: selectable (true)",
  interactive: true,
  component: group({
    label: "Always",
    selectable: function selectable() {
      return true;
    }
  })
}, {
  name: "Option: iconButton (custom hover behaviour)",
  interactive: true,
  component: group({
    label: "Hover me",
    iconButton: {
      wash: true,
      ink: false
    }
  })
}, {
  name: "Option: getState",
  interactive: true,
  exclude: true,
  component: {
    oninit: function oninit(vnode) {
      return vnode.state.radio = {};
    },
    view: function view(vnode) {
      var options = function options(label, value) {
        return {
          name: "getState",
          value: value,
          label: label,
          getState: function getState(state) {
            return vnode.state.radio = state;
          }
        };
      };
      return [__WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
        style: {
          marginBottom: "1rem"
        }
      }, "Value: " + vnode.state.radio.value), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_radio_button__["a" /* default */], options("First", "first")), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_radio_button__["a" /* default */], options("Second", "second"))];
    }
  }
}, {
  name: "Setting the value from outside",
  interactive: true,
  exclude: true,
  component: {
    oninit: function oninit(vnode) {
      return vnode.state.value = undefined;
    },
    view: function view(vnode) {
      return [__WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
        style: {
          marginBottom: "1rem"
        }
      }, [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_radio_button__["a" /* default */], {
        label: "Initiator 1",
        name: "initiator",
        value: "first",
        getState: function getState(state) {
          return vnode.state.value = state.value;
        }
      }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_radio_button__["a" /* default */], {
        label: "Initiator 2",
        name: "initiator",
        value: "second",
        getState: function getState(state) {
          return vnode.state.value = state.value;
        }
      })]), __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
        style: {
          marginBottom: "1rem"
        }
      }, [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_radio_button__["a" /* default */], {
        label: "Receiver 1",
        name: "receiver",
        value: "first",
        disabled: true,
        checked: function checked() {
          return vnode.state.value === "first";
        }
      }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_radio_button__["a" /* default */], {
        label: "Receiver 2",
        name: "receiver",
        value: "second",
        disabled: true,
        checked: function checked() {
          return vnode.state.value === "second";
        }
      })])];
    }
  }
}, {
  name: "Option: events",
  interactive: true,
  exclude: true,
  component: {
    oninit: function oninit(vnode) {
      return vnode.state.value = undefined;
    },
    view: function view(vnode) {
      var options = function options(label, value) {
        return {
          name: "events",
          value: value,
          checked: function checked() {
            return vnode.state.value === value;
          },
          events: {
            onclick: function onclick() {
              return vnode.state.value = value;
            }
          }
        };
      };
      return [__WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
        style: {
          marginBottom: "1rem"
        }
      }, "Value: " + vnode.state.value), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_radio_button__["a" /* default */], options("First", "first")), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_radio_button__["a" /* default */], options("Second", "second"))];
    }
  }
},

// // Dark theme

{
  name: "Option: checked -- dark theme class",
  class: "pe-dark-theme",
  component: group({
    label: "Label"
  }, {
    label: "Label",
    checked: true
  })
}, {
  name: "Themed radio button (colors) -- dark theme class",
  class: "pe-dark-theme",
  component: group({
    label: "Label",
    class: "tests-radio-button-themed-radio"
  }, {
    label: "Label",
    class: "tests-radio-button-themed-radio",
    checked: true
  })
}, {
  name: "Option: disabled -- dark theme class",
  class: "pe-dark-theme",
  interactive: true,
  component: group({
    label: "Off",
    disabled: true
  }, {
    label: "On",
    disabled: true,
    checked: true
  })
}, {
  name: "Dark theme class + light theme class",
  class: "pe-dark-theme",
  component: {
    view: function view() {
      return __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
        style: {
          background: "#fff",
          padding: "20px"
        },
        class: "pe-light-theme"
      }, __WEBPACK_IMPORTED_MODULE_0_mithril___default()(radioGroup));
    }
  }
}, {
  name: "Dark theme class + light tone",
  class: "test-dark-theme",
  component: {
    view: function view() {
      return __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
        style: {
          background: "#fff",
          padding: "20px"
        }
      }, __WEBPACK_IMPORTED_MODULE_0_mithril___default()({
        view: function view() {
          return [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_radio_button__["a" /* default */], {
            name: "setting",
            label: "Label",
            tone: "light"
          }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_radio_button__["a" /* default */], {
            name: "setting",
            label: "Label",
            checked: true,
            tone: "light"
          })];
        }
      }));
    }
  }
}];

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_raised_button__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tests; });



__WEBPACK_IMPORTED_MODULE_1_polythene_raised_button__["a" /* default */].theme(".tests-raised-button-themed-button", {
  color_light_background: "#FF1744",
  color_light_text: "#fff"
});

var tests = [{
  name: "Option: label",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_raised_button__["a" /* default */],
  attrs: {
    label: "Label"
  }
}, {
  name: "Option: raised (with option z: 2)",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_raised_button__["a" /* default */],
  attrs: {
    label: "Raised to 2",
    z: 2
  }
}, {
  name: "Option: raised (with option z: 5)",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_raised_button__["a" /* default */],
  attrs: {
    label: "Raised to 5",
    z: 5
  }
}, {
  name: "Themed button (should be red)",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_raised_button__["a" /* default */],
  attrs: {
    label: "Themed button",
    class: "tests-raised-button-themed-button"
  }
}, {
  name: "Themed button (with option disabled)",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_raised_button__["a" /* default */],
  attrs: {
    label: "Disabled themed button",
    class: "tests-raised-button-themed-button",
    disabled: true
  }
}, {
  name: "Option: style (colors)",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_raised_button__["a" /* default */],
  attrs: {
    label: "Styled",
    style: {
      backgroundColor: "#EF6C00",
      color: "#fff"
    }
  }
}, {
  name: "Option: wash (false)",
  interactive: true,
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_raised_button__["a" /* default */],
  attrs: {
    label: "No wash",
    wash: false
  }
}, {
  name: "Option: ink (false)",
  interactive: true,
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_raised_button__["a" /* default */],
  attrs: {
    label: "No ink",
    ink: false
  }
}, {
  name: "Option: disabled (true)",
  interactive: true,
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_raised_button__["a" /* default */],
  attrs: {
    label: "Disabled",
    disabled: true
  }
}, {
  name: "Option: disabled (false)",
  interactive: true,
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_raised_button__["a" /* default */],
  attrs: {
    label: "Not disabled",
    disabled: false
  }
}, {
  name: "Option: animateOnTap (false)",
  interactive: true,
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_raised_button__["a" /* default */],
  attrs: {
    label: "Don't animate shadow",
    animateOnTap: false
  }
}, {
  name: "Option: selected",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_raised_button__["a" /* default */],
  attrs: {
    label: "Selected",
    selected: true
  }
}, {
  name: "Option: url (with oncreate)",
  interactive: true,
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_raised_button__["a" /* default */],
  attrs: {
    label: "Go to /#/shadow",
    url: {
      href: "/shadow",
      oncreate: __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.route.link
    }
  }
}, {
  name: "Option: events (onclick)",
  interactive: true,
  exclude: true,
  component: {
    oninit: function oninit(vnode) {
      return vnode.state.clicked = 0;
    },
    view: function view(vnode) {
      return [__WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", "onclick called: " + vnode.state.clicked), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_raised_button__["a" /* default */], {
        label: "Button",
        events: {
          onclick: function onclick() {
            return vnode.state.clicked++;
          }
        }
      })];
    }
  }
}, {
  name: "Option: inactive (false)",
  interactive: true,
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_raised_button__["a" /* default */],
  attrs: {
    label: "Not inactive",
    inactive: false
  }
}, {
  name: "Option: inactive (true)",
  interactive: true,
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_raised_button__["a" /* default */],
  attrs: {
    label: "Inactive",
    inactive: true
  }
},

// Dark theme

{
  name: "Option: label -- dark theme class (should be app's primary color)",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_raised_button__["a" /* default */],
  class: "pe-dark-theme",
  attrs: {
    label: "Label"
  }
}, {
  name: "Option: disabled -- dark theme class",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_raised_button__["a" /* default */],
  class: "pe-dark-theme",
  attrs: {
    label: "Label",
    disabled: true
  }
}, {
  name: "Dark theme class + light theme class",
  class: "pe-dark-theme",
  component: {
    view: function view() {
      return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(".pe-light-theme", {
        style: { background: "#fff" }
      }, [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_raised_button__["a" /* default */], {
        label: "Normal"
      }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_raised_button__["a" /* default */], {
        label: "Disabled",
        disabled: true
      }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_raised_button__["a" /* default */], {
        label: "Theme",
        class: "tests-raised-button-themed-button"
      })]);
    }
  }
}, {
  name: "Dark theme class + light tone",
  class: "pe-dark-theme",
  component: {
    view: function view() {
      return __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
        style: { background: "#fff" }
      }, [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_raised_button__["a" /* default */], {
        label: "Normal",
        tone: "light"
      }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_raised_button__["a" /* default */], {
        label: "Disabled",
        disabled: true,
        tone: "light"
      }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_raised_button__["a" /* default */], {
        label: "Theme",
        class: "tests-raised-button-themed-button",
        tone: "light"
      })]);
    }
  }
}];

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_ripple__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tests; });



__WEBPACK_IMPORTED_MODULE_1_polythene_ripple__["a" /* default */].theme(".tests-ripple-themed-ripple", {
  color_light: "#F44336"
});

var tests = [{
  name: "Option: constrained (true)",
  interactive: true,
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_ripple__["a" /* default */],
  attrs: {
    constrained: true
  }
}, {
  name: "Option: constrained (false)",
  interactive: true,
  exclude: true,
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_ripple__["a" /* default */],
  attrs: {
    constrained: false
  }
}, {
  name: "Option: center",
  interactive: true,
  exclude: true,
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_ripple__["a" /* default */],
  attrs: {
    center: true
  }
}, {
  name: "Option: start opacity (0.5)",
  interactive: true,
  exclude: true,
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_ripple__["a" /* default */],
  attrs: {
    startOpacity: 0.5
  }
}, {
  name: "Option: end opacity (0.1)",
  interactive: true,
  exclude: true,
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_ripple__["a" /* default */],
  attrs: {
    endOpacity: 0.1
  }
}, {
  name: "Option: duration (3.0)",
  interactive: true,
  exclude: true,
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_ripple__["a" /* default */],
  attrs: {
    duration: 3.0
  }
}, {
  name: "Option: initial opacityDecayVelocity (0.1)",
  interactive: true,
  exclude: true,
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_ripple__["a" /* default */],
  attrs: {
    opacityDecayVelocity: 0.1
  }
}, {
  name: "Option: disabled",
  interactive: true,
  exclude: true,
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_ripple__["a" /* default */],
  attrs: {
    disabled: true
  }
}, {
  name: "Option: style (color)",
  interactive: true,
  exclude: true,
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_ripple__["a" /* default */],
  attrs: {
    startOpacity: 0.7,
    style: {
      color: "#2196F3"
    }
  }
}, {
  name: "Themed (should be red and permanent)",
  interactive: true,
  exclude: true,
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_ripple__["a" /* default */],
  attrs: {
    class: "tests-ripple-themed-ripple",
    endOpacity: 1.0,
    persistent: true
  }
}, {
  name: "Appended to an element",
  interactive: true,
  exclude: true,
  component: {
    view: function view() {
      return __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
        style: {
          position: "relative",
          width: "100px",
          height: "100px"
        }
      }, __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_ripple__["a" /* default */]));
    }
  }
}, {
  name: "Option: start (after click)",
  interactive: true,
  exclude: true,
  component: {
    oninit: function oninit(vnode) {
      return vnode.state.started = 0;
    },
    view: function view(vnode) {
      return [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_ripple__["a" /* default */], {
        before: __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", "start called: " + vnode.state.started),
        start: function start() {
          return vnode.state.started++, __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.redraw();
        }
      })];
    }
  }
}, {
  name: "Option: end (after click)",
  interactive: true,
  exclude: true,
  component: {
    oninit: function oninit(vnode) {
      return vnode.state.ended = 0;
    },
    view: function view(vnode) {
      return [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_ripple__["a" /* default */], {
        before: __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", "end called: " + vnode.state.ended),
        end: function end() {
          return vnode.state.ended++, __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.redraw();
        }
      })];
    }
  }
},

// Dark theme

{
  name: "Option: style (white) -- dark theme class",
  interactive: true,
  exclude: true,
  class: "pe-dark-theme",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_ripple__["a" /* default */],
  attrs: {
    constrained: true,
    style: {
      color: "#fff"
    }
  }
}, {
  name: "Dark theme class + light theme class",
  interactive: true,
  exclude: true,
  class: "pe-dark-theme",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_ripple__["a" /* default */],
  attrs: {
    constrained: true,
    style: {
      background: "#fff"
    },
    class: "pe-light-theme"
  }
}, {
  name: "Dark theme class + light tone",
  interactive: true,
  exclude: true,
  class: "test-dark-theme",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_ripple__["a" /* default */],
  attrs: {
    constrained: true,
    style: {
      background: "#fff"
    },
    tone: "light"
  }
}];

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_search__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_icon_button__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_shadow__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mmsvg_google_msvg_action_search__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mmsvg_google_msvg_action_search___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_mmsvg_google_msvg_action_search__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mmsvg_google_msvg_navigation_arrow_back__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mmsvg_google_msvg_navigation_arrow_back___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_mmsvg_google_msvg_navigation_arrow_back__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_mmsvg_google_msvg_content_clear__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_mmsvg_google_msvg_content_clear___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_mmsvg_google_msvg_content_clear__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_mmsvg_google_msvg_av_mic__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_mmsvg_google_msvg_av_mic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_mmsvg_google_msvg_av_mic__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };











var searchButton = {
  view: function view() {
    return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_icon_button__["a" /* default */], {
      icon: { msvg: __WEBPACK_IMPORTED_MODULE_4_mmsvg_google_msvg_action_search___default.a },
      inactive: true
    });
  }
};

var backButton = {
  view: function view(_ref) {
    var attrs = _ref.attrs;
    return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_icon_button__["a" /* default */], {
      icon: { msvg: __WEBPACK_IMPORTED_MODULE_5_mmsvg_google_msvg_navigation_arrow_back___default.a },
      ink: false,
      events: { onclick: attrs.leave }
    });
  }
};

var clearButton = {
  view: function view(_ref2) {
    var attrs = _ref2.attrs;
    return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_icon_button__["a" /* default */], {
      icon: { msvg: __WEBPACK_IMPORTED_MODULE_6_mmsvg_google_msvg_content_clear___default.a },
      ink: false,
      events: { onclick: attrs.clear }
    });
  }
};

var micButton = {
  view: function view() {
    return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_icon_button__["a" /* default */], {
      icon: { msvg: __WEBPACK_IMPORTED_MODULE_7_mmsvg_google_msvg_av_mic___default.a },
      inactive: true
    });
  }
};

/* harmony default export */ __webpack_exports__["a"] = ({
  oninit: function oninit(_ref3) {
    var state = _ref3.state;

    state.fieldState = {};
    state.clear = function () {
      state.fieldState.value = "";
      state.fieldState.el.focus();
      __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.redraw();
    };
    state.leave = function () {
      state.fieldState.value = "";
      __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.redraw();
    };
  },
  view: function view(_ref4) {
    var state = _ref4.state,
        attrs = _ref4.attrs;
    return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_search__["a" /* default */], _extends({}, {
      textfield: {
        label: "Search",
        value: function value() {
          return state.fieldState ? state.fieldState.value : "";
        },
        getState: function getState(fieldState) {
          return state.fieldState = fieldState;
        }
      },
      buttons: {
        none: {
          before: __WEBPACK_IMPORTED_MODULE_0_mithril___default()(searchButton),
          after: __WEBPACK_IMPORTED_MODULE_0_mithril___default()(micButton)
        },
        focus: {
          before: __WEBPACK_IMPORTED_MODULE_0_mithril___default()(searchButton),
          after: __WEBPACK_IMPORTED_MODULE_0_mithril___default()(micButton)
        },
        focus_dirty: {
          before: __WEBPACK_IMPORTED_MODULE_0_mithril___default()(backButton, { leave: state.leave }),
          after: __WEBPACK_IMPORTED_MODULE_0_mithril___default()(clearButton, { clear: state.clear })
        },
        dirty: {
          before: __WEBPACK_IMPORTED_MODULE_0_mithril___default()(backButton, { leave: state.leave }),
          after: __WEBPACK_IMPORTED_MODULE_0_mithril___default()(clearButton, { clear: state.clear })
        }
      },
      before: __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_3_polythene_shadow__["a" /* default */])
    }, attrs));
  }
});

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_search__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__searchfield__ = __webpack_require__(69);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tests; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





__WEBPACK_IMPORTED_MODULE_1_polythene_search__["a" /* default */].theme(".tests-search-themed-search", {
  color_light_input_text: "#0D47A1",
  color_light_background: "#BBDEFB",
  color_dark_input_text: "#eee",
  color_dark_background: "#333"
});

var block = {
  view: function view(_ref) {
    var attrs = _ref.attrs;
    return __WEBPACK_IMPORTED_MODULE_0_mithril___default()("form", {
      style: _extends({}, {
        minHeight: "130px",
        overflow: "hidden" // hides top and side shadow with full width search field
      }, attrs.dark ? { backgroundColor: "transparent" } : { backgroundColor: "#e4e4e4" }, attrs.fullWidth ? null : { padding: "8px" }) }, __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2__searchfield__["a" /* default */], attrs));
  }
};

var tests = [{
  name: "Option: textfield, buttons",
  component: {
    view: function view() {
      return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(block);
    }
  }
}, {
  name: "Option: textfield, buttons, fullWidth",
  component: {
    view: function view() {
      return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(block, { fullWidth: true });
    }
  }
}, {
  name: "Colored field",
  component: {
    view: function view() {
      return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(block, {
        style: {
          background: "#BBDEFB"
        }
      });
    }
  }
}, {
  name: "Theme",
  component: {
    view: function view() {
      return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(block, {
        class: "tests-search-themed-search"
      });
    }
  }
},

// Dark theme

{
  name: "Theme -- dark theme class",
  class: "pe-dark-theme",
  component: {
    view: function view() {
      return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(block, {
        class: "tests-search-themed-search",
        dark: true
      });
    }
  }
}, {
  name: "Dark theme class + light theme class",
  class: "pe-dark-theme",
  component: {
    view: function view() {
      return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(block, {
        class: "pe-light-theme",
        dark: true
      });
    }
  }
}, {
  name: "Dark theme class + light tone",
  class: "test-dark-theme",
  component: {
    view: function view() {
      return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(block, {
        tone: "light",
        dark: true
      });
    }
  }
}];

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_shadow__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tests; });



var interactiveTest = {
  oninit: function oninit(vnode) {
    return vnode.state.z = 1;
  },
  view: function view(vnode) {
    return [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(".absolute.absolute--fill", {
      onclick: function onclick() {
        var newZ = (vnode.state.z + 1) % 6;
        vnode.state.z = newZ;
      }
    }, "Click me"), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_shadow__["a" /* default */], {
      animated: true,
      z: vnode.state.z
    })];
  }
};

var tests = [{
  name: "Child node",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_shadow__["a" /* default */],
  attrs: {},
  children: ["Child"]
}, {
  name: "Option: content",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_shadow__["a" /* default */],
  attrs: {
    content: "Content"
  }
}, {
  name: "Add to a Mithril element",
  component: {
    view: function view() {
      return [__WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", "Some element"), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_shadow__["a" /* default */])];
    }
  }
}, {
  name: "Interactive option: animated",
  interactive: true,
  exclude: true,
  component: interactiveTest
}, {
  name: "Option: z (0)",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_shadow__["a" /* default */],
  attrs: {
    z: 0
  }
}, {
  name: "Option: z (1)",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_shadow__["a" /* default */],
  attrs: {
    z: 1
  }
}, {
  name: "Option: z (2)",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_shadow__["a" /* default */],
  attrs: {
    z: 2
  }
}, {
  name: "Option: z (3)",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_shadow__["a" /* default */],
  attrs: {
    z: 3
  }
}, {
  name: "Option: z (4)",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_shadow__["a" /* default */],
  attrs: {
    z: 4
  }
}, {
  name: "Option: z (5)",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_shadow__["a" /* default */],
  attrs: {
    z: 5
  }
},

// Dark theme

{
  name: "Interactive option: animated -- dark theme class",
  interactive: true,
  class: "pe-dark-theme",
  component: interactiveTest
}];

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_theme__ = __webpack_require__(2);


var labelWidth = 24;
var trackWidth = 164;
var inputWidth = 32;

/* harmony default export */ __webpack_exports__["a"] = ([{
  " .rgb-slider": {
    " .result": {
      width: "100%",
      height: "100px",
      marginBottom: "10px"
    },
    " .pe-header": {
      fontSize: "14px",
      color: __WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].rgba(__WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].blend_light_text_secondary)
    },
    " .pe-slider": {
      color: "#009688",
      marginTop: "0 !important",
      marginBottom: "0 !important",

      " .pe-slider__label": {
        width: labelWidth + "px"
      },
      " .pe-slider__track": {
        width: trackWidth + "px"
      }
    },
    " .pe-textfield": {
      color: "#009688",
      width: inputWidth + "px",

      " .pe-textfield__input": {
        "text-align": "center"
      }
    }
  }
}]);

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_slider__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_textfield__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__slider_rgb_style__ = __webpack_require__(72);






__WEBPACK_IMPORTED_MODULE_3_polythene_css__["b" /* styler */].add("polythene-test-slider-rgb", __WEBPACK_IMPORTED_MODULE_4__slider_rgb_style__["a" /* default */]);

var colorSlider = function colorSlider(state, which, label) {
  return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_slider__["a" /* default */], {
    min: 0,
    max: 255,
    value: function value() {
      return state[which];
    },
    getValue: function getValue(value) {
      return state[which] = value;
    },
    before: __WEBPACK_IMPORTED_MODULE_0_mithril___default()(".pe-slider__label", label),
    after: __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_textfield__["a" /* default */], {
      type: "number",
      hideSpinner: true,
      value: function value() {
        return state[which].toString();
      },
      events: {
        oninput: null,
        onchange: function onchange(e) {
          return state[which] = e.target.value;
        }
      },
      maxlength: 3,
      min: 0,
      max: 255,
      hideValidation: true
    })
  });
};

/* harmony default export */ __webpack_exports__["a"] = ({
  oninit: function oninit(vnode) {
    return vnode.state.red = 127, vnode.state.green = 127, vnode.state.blue = 127;
  },
  view: function view(vnode) {
    return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(".rgb-slider", [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(".result", {
      style: { backgroundColor: "rgb(" + vnode.state.red + "," + vnode.state.green + "," + vnode.state.blue + ")" }
    }), colorSlider(vnode.state, "red", "R"), colorSlider(vnode.state, "green", "G"), colorSlider(vnode.state, "blue", "B")]);
  }
});

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_slider__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_icon__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_polythene_theme__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mmsvg_google_msvg_av_volume_up__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mmsvg_google_msvg_av_volume_up___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_mmsvg_google_msvg_av_volume_up__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_mmsvg_google_msvg_action_alarm__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_mmsvg_google_msvg_action_alarm___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_mmsvg_google_msvg_action_alarm__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_mmsvg_templarian_msvg_headphones__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_mmsvg_templarian_msvg_headphones___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_mmsvg_templarian_msvg_headphones__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };







var styles = [{
  " .volume": {
    " .pe-header": {
      fontSize: "14px",
      color: __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].blend_light_text_secondary)
    },
    " .pe-slider": {
      color: "#009688",
      margin: "13px 0 11px 0"
    }
  },
  " .pe-dark-theme.volume": {
    " .pe-header": {
      color: __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].blend_dark_text_secondary)
    }
  }
}];

__WEBPACK_IMPORTED_MODULE_3_polythene_css__["b" /* styler */].add("polythene-test-slider-volume", styles);





/* harmony default export */ __webpack_exports__["a"] = ({
  oninit: function oninit(vnode) {
    return vnode.state.defaults = {
      min: 0,
      max: 10,
      step: 0
    };
  },
  view: function view(vnode) {
    return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(".volume", [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(".header", "Media volume"), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_slider__["a" /* default */], _extends({}, vnode.state.defaults, {
      value: 4,
      before: __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_icon__["a" /* default */], {
        msvg: __WEBPACK_IMPORTED_MODULE_5_mmsvg_google_msvg_av_volume_up___default.a
      })
    })), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(".header", "Alarm volume"), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_slider__["a" /* default */], _extends({}, vnode.state.defaults, {
      value: 2,
      before: __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_icon__["a" /* default */], {
        msvg: __WEBPACK_IMPORTED_MODULE_6_mmsvg_google_msvg_action_alarm___default.a
      })
    })), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(".header", "Headphone volume"), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_slider__["a" /* default */], _extends({}, vnode.state.defaults, {
      value: 2,
      disabled: true,
      before: __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_icon__["a" /* default */], {
        msvg: __WEBPACK_IMPORTED_MODULE_7_mmsvg_templarian_msvg_headphones___default.a
      })
    }))]);
  }
});

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_slider__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_icon__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_textfield__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__slider_volume__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__slider_rgb__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_mmsvg_templarian_msvg_bullseye__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_mmsvg_templarian_msvg_bullseye___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_mmsvg_templarian_msvg_bullseye__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_mmsvg_google_msvg_av_volume_up__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_mmsvg_google_msvg_av_volume_up___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_mmsvg_google_msvg_av_volume_up__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tests; });










__WEBPACK_IMPORTED_MODULE_1_polythene_slider__["a" /* default */].theme(".slider-custom-icon", {
  color_light_thumb_background: "#fff"
});

__WEBPACK_IMPORTED_MODULE_1_polythene_slider__["a" /* default */].theme(".slider-custom-color", {
  color_light_track_active: "#82b1ff",
  color_light_track_inactive: "#c5cae9",
  color_light_track_value: "#f50057",
  color_light_thumb_on: "#f50057"
});

var tests = [{
  name: "No options (range 0-100, steps rounded to 1)",
  interactive: true,
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_slider__["a" /* default */]
}, {
  name: "Option: step (0), value (50)",
  interactive: true,
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_slider__["a" /* default */],
  attrs: {
    step: 0,
    value: 50
  }
}, {
  name: "Option: ticks",
  interactive: true,
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_slider__["a" /* default */],
  attrs: {
    min: 0,
    max: 100,
    step: 10,
    ticks: true
  }
}, {
  name: "Option: ticks with pin",
  interactive: true,
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_slider__["a" /* default */],
  attrs: {
    min: 0,
    max: 100,
    step: 10,
    value: 2,
    pin: true,
    ticks: true
  }
}, {
  name: "Option: interactiveTrack (false)",
  interactive: true,
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_slider__["a" /* default */],
  attrs: {
    interactiveTrack: false
  }
}, {
  name: "Option: style (colors)",
  interactive: true,
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_slider__["a" /* default */],
  attrs: {
    style: {
      color: "red"
    },
    min: 0,
    max: 100,
    value: 50
  }
}, {
  name: "Option: icon (custom msvg)",
  interactive: true,
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_slider__["a" /* default */],
  attrs: {
    min: 0,
    max: 100,
    value: 50,
    icon: __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_icon__["a" /* default */], {
      msvg: __WEBPACK_IMPORTED_MODULE_6_mmsvg_templarian_msvg_bullseye___default.a
    }),
    class: "slider-custom-icon"
  }
}, {
  name: "Option: style (color)",
  interactive: true,
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_slider__["a" /* default */],
  attrs: {
    style: { color: "red" },
    min: 0,
    max: 100,
    value: 50
  }
}, {
  name: "Themed slider (colors)",
  interactive: true,
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_slider__["a" /* default */],
  attrs: {
    min: 0,
    max: 100,
    value: 50,
    class: "slider-custom-color"
  }
}, {
  name: "With icons",
  interactive: true,
  component: __WEBPACK_IMPORTED_MODULE_4__slider_volume__["a" /* default */]
}, {
  name: "With an editable numeric value",
  interactive: true,
  component: __WEBPACK_IMPORTED_MODULE_5__slider_rgb__["a" /* default */]
}, {
  name: "With icon, pin and ticks",
  interactive: true,
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_slider__["a" /* default */],
  attrs: {
    min: 0,
    max: 100,
    step: 10,
    value: 2,
    pin: true,
    ticks: true,
    before: __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_icon__["a" /* default */], {
      msvg: __WEBPACK_IMPORTED_MODULE_7_mmsvg_google_msvg_av_volume_up___default.a
    })
  }
}, {
  name: "Read value",
  interactive: true,
  component: {
    oninit: function oninit(vnode) {
      return vnode.state.value = 0;
    },
    view: function view(vnode) {
      return [__WEBPACK_IMPORTED_MODULE_0_mithril___default()("p", "Value: " + vnode.state.value), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_slider__["a" /* default */], {
        min: 0,
        max: 100,
        value: vnode.state.value,
        getValue: function getValue(value) {
          return vnode.state.value = value;
        }
      })];
    }
  }
}, {
  name: "Set value",
  interactive: true,
  component: {
    oninit: function oninit(vnode) {
      return vnode.state.value = 0;
    },
    view: function view(vnode) {
      return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(".layout.horizontal", [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_3_polythene_textfield__["a" /* default */], {
        style: {
          width: "10%"
        },
        value: function value() {
          return vnode.state.value.toString();
        },
        events: {
          oninput: function oninput(e) {
            return vnode.state.value = e.target.value;
          }
        },
        maxlength: 3,
        min: 0,
        max: 999,
        hideValidation: true
      }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_slider__["a" /* default */], {
        min: 0,
        max: 999,
        value: function value() {
          return vnode.state.value;
        }
      })]);
    }
  }
}, {
  name: "Small range, no step",
  interactive: true,
  component: {
    oninit: function oninit(vnode) {
      return vnode.state.value = 0;
    },
    view: function view(vnode) {
      return [__WEBPACK_IMPORTED_MODULE_0_mithril___default()("p", "Value: " + vnode.state.value), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_slider__["a" /* default */], {
        min: 0,
        max: 1,
        step: 0,
        value: vnode.state.value,
        getValue: function getValue(value) {
          return vnode.state.value = value;
        }
      })];
    }
  }
}, {
  name: "Negative range, step=0.1",
  interactive: true,
  component: {
    oninit: function oninit(vnode) {
      return vnode.state.value = 0;
    },
    view: function view(vnode) {
      return [__WEBPACK_IMPORTED_MODULE_0_mithril___default()("p", "Value: " + vnode.state.value), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_slider__["a" /* default */], {
        min: -1,
        max: 1,
        step: 0.1,
        value: vnode.state.value,
        getValue: function getValue(value) {
          return vnode.state.value = value;
        }
      })];
    }
  }
}, {
  name: "Use left value for extra \"unspecified value\" step",
  interactive: true,
  component: {
    oninit: function oninit(vnode) {
      return vnode.state.value = -1;
    },
    view: function view(vnode) {
      return [__WEBPACK_IMPORTED_MODULE_0_mithril___default()("p", vnode.state.value !== -1 ? "Age: " + vnode.state.value : "Age: not set"), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_slider__["a" /* default */], {
        min: -1,
        max: 110,
        value: vnode.state.value,
        getValue: function getValue(value) {
          return vnode.state.value = value;
        }
      })];
    }
  }
}, {
  name: "Option: disabled",
  interactive: true,
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_slider__["a" /* default */],
  attrs: {
    min: 0,
    max: 100,
    value: 50,
    disabled: true
  }
}, {
  name: "Option: disabled, value 0",
  interactive: true,
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_slider__["a" /* default */],
  attrs: {
    min: 0,
    max: 100,
    value: 0,
    disabled: true
  }
}, {
  name: "Option: disabled, ticks",
  interactive: true,
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_slider__["a" /* default */],
  attrs: {
    min: 0,
    max: 100,
    value: 50,
    ticks: true,
    disabled: true
  }
},

// Dark theme

{
  name: "Option: value (50) -- dark theme class",
  interactive: true,
  class: "pe-dark-theme",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_slider__["a" /* default */],
  attrs: {
    value: 50
  }
}, {
  name: "With icons -- dark theme class",
  class: "pe-dark-theme",
  interactive: true,
  component: __WEBPACK_IMPORTED_MODULE_4__slider_volume__["a" /* default */]
}, {
  name: "Option: disabled -- dark theme class",
  class: "pe-dark-theme",
  interactive: true,
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_slider__["a" /* default */],
  attrs: {
    min: 0,
    max: 100,
    value: 50,
    disabled: true
  }
}, {
  name: "Dark theme class + light theme class",
  interactive: true,
  class: "pe-dark-theme",
  component: {
    view: function view() {
      return __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
        style: {
          background: "#fff",
          padding: "10px"
        },
        class: "pe-light-theme"
      }, __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_slider__["a" /* default */], { value: 50 }));
    }
  }
}, {
  name: "Dark theme class + light tone",
  interactive: true,
  class: "test-dark-theme",
  component: {
    view: function view() {
      return __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
        style: {
          background: "#fff",
          padding: "10px"
        }
      }, __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_slider__["a" /* default */], {
        value: 50,
        tone: "light"
      }));
    }
  }
}];

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_snackbar__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_dialog__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_button__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_polythene_raised_button__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tests; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };







__WEBPACK_IMPORTED_MODULE_1_polythene_snackbar__["a" /* default */].theme(".snackbar-tests-blue-snackbar", {
  color_dark_background: "#2196F3",
  border_radius: 5
});

var buttonRow = function buttonRow(messageOptions, spawnOptions) {
  return __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", { style: { margin: "0 0 10px 0" } }, [messageOptions.map(function (opts) {
    return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_4_polythene_raised_button__["a" /* default */], {
      label: opts.label,
      events: { onclick: function onclick() {
          return __WEBPACK_IMPORTED_MODULE_1_polythene_snackbar__["a" /* default */].show(opts, spawnOptions);
        } }
    });
  }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_4_polythene_raised_button__["a" /* default */], {
    label: "Hide",
    disabled: __WEBPACK_IMPORTED_MODULE_1_polythene_snackbar__["a" /* default */].count() === 0,
    events: { onclick: function onclick() {
        return __WEBPACK_IMPORTED_MODULE_1_polythene_snackbar__["a" /* default */].hide(spawnOptions);
      } }
  }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_4_polythene_raised_button__["a" /* default */], {
    label: "Clear",
    disabled: __WEBPACK_IMPORTED_MODULE_1_polythene_snackbar__["a" /* default */].count() === 0,
    events: {
      onclick: function onclick() {
        __WEBPACK_IMPORTED_MODULE_1_polythene_snackbar__["a" /* default */].hide().then(function () {
          __WEBPACK_IMPORTED_MODULE_1_polythene_snackbar__["a" /* default */].clear();
          __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.redraw();
        });
      }
    }
  })]);
};

var pattern = function pattern(foreground, background) {
  return {
    "background-image": "radial-gradient(circle at 100% 150%, " + foreground + " 24%, " + background + " 25%, " + background + " 28%, " + foreground + " 29%, " + foreground + " 36%, " + background + " 36%, " + background + " 40%, transparent 40%, transparent), radial-gradient(circle at 0 150%, " + foreground + " 24%, " + background + " 25%, " + background + " 28%, " + foreground + " 29%, " + foreground + " 36%, " + background + " 36%, " + background + " 40%, transparent 40%, transparent), radial-gradient(circle at 50%  100%, " + background + " 10%, " + foreground + " 11%, " + foreground + " 23%, " + background + " 24%, " + background + " 30%, " + foreground + " 31%, " + foreground + " 43%, " + background + " 44%, " + background + " 50%, " + foreground + " 51%, " + foreground + " 63%, " + background + " 64%, " + background + " 71%, transparent 71%, transparent), radial-gradient(circle at 100% 50%, " + background + " 5%, " + foreground + " 6%, " + foreground + " 15%, " + background + " 16%, " + background + " 20%, " + foreground + " 21%, " + foreground + " 30%, " + background + " 31%, " + background + " 35%, " + foreground + " 36%, " + foreground + " 45%, " + background + " 46%, " + background + " 49%, transparent 50%, transparent), radial-gradient(circle at 0 50%, " + background + " 5%, " + foreground + " 6%, " + foreground + " 15%, " + background + " 16%, " + background + " 20%, " + foreground + " 21%, " + foreground + " 30%, " + background + " 31%, " + background + " 35%, " + foreground + " 36%, " + foreground + " 45%, " + background + " 46%, " + background + " 49%, transparent 50%, transparent)",
    "background-size": "100px 50px"
  };
};

var variations = [{
  label: "1 line",
  title: "A one line message"
}, {
  label: "2 lines",
  title: "This message tells some things using two lines"
}, {
  label: "1 line action",
  title: "Archived",
  action: __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_3_polythene_button__["a" /* default */], {
    label: "Undo",
    events: {
      onclick: function onclick() {
        __WEBPACK_IMPORTED_MODULE_1_polythene_snackbar__["a" /* default */].pause();
        __WEBPACK_IMPORTED_MODULE_2_polythene_dialog__["a" /* default */].show(dialogOptions);
      }
    }
  })
}, {
  label: "2 line action",
  title: "This message tells some things using two lines",
  layout: "vertical",
  action: __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_3_polythene_button__["a" /* default */], {
    label: "Let me think about it",
    events: {
      onclick: function onclick() {
        __WEBPACK_IMPORTED_MODULE_1_polythene_snackbar__["a" /* default */].pause();
        __WEBPACK_IMPORTED_MODULE_2_polythene_dialog__["a" /* default */].show(dialogOptions);
      }
    }
  })
}, {
  label: "Custom timing",
  title: "Custom timing",
  showDelay: .3,
  showDuration: 1.1,
  hideDuration: 1.5
}];

var dialogOptions = {
  body: "You pressed a message action",
  footer: [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_3_polythene_button__["a" /* default */], {
    label: "Cancel",
    events: {
      onclick: function onclick() {
        __WEBPACK_IMPORTED_MODULE_2_polythene_dialog__["a" /* default */].hide();
        __WEBPACK_IMPORTED_MODULE_1_polythene_snackbar__["a" /* default */].unpause();
      }
    }
  }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_3_polythene_button__["a" /* default */], {
    label: "OK",
    events: {
      onclick: function onclick() {
        __WEBPACK_IMPORTED_MODULE_2_polythene_dialog__["a" /* default */].hide();
        __WEBPACK_IMPORTED_MODULE_1_polythene_snackbar__["a" /* default */].hide();
      }
    }
  })],
  backdrop: true,
  modal: true,
  hideDelay: .2
};

var tests = [{
  name: "Main screen snackbar",
  interactive: true,
  exclude: true,
  component: {
    view: function view() {
      return buttonRow(variations);
    }
  }
}, {
  name: "Snackbar in container",
  interactive: true,
  exclude: true,
  component: {
    view: function view() {
      return [buttonRow(variations, { spawn: "container1" }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
        style: _extends({}, pattern("#fff", "#eceff1"), {
          height: "180px",
          overflow: "hidden",
          position: "relative"
        })
      }, __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_snackbar__["a" /* default */], { spawn: "container1", position: "container" }))];
    }
  }
}, {
  name: "Snackbar in container -- dark theme class",
  interactive: true,
  exclude: true,
  class: "pe-dark-theme",
  component: {
    view: function view() {
      return [buttonRow(variations.map(function (v) {
        return _extends({}, v, { tone: "light" });
      }), { spawn: "container2" }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
        style: _extends({}, pattern("#444", "#263238"), {
          height: "180px",
          overflow: "hidden",
          position: "relative"
        })
      }, __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_snackbar__["a" /* default */], { spawn: "container2", position: "container" }))];
    }
  }
}, {
  name: "Dark theme class + light theme class",
  interactive: true,
  exclude: true,
  class: "pe-dark-theme",
  component: {
    view: function view() {
      return [buttonRow(variations.map(function (v) {
        return _extends({}, v, { class: "pe-light-theme" });
      }), { spawn: "container3" }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
        style: _extends({}, pattern("#444", "#263238"), {
          height: "180px",
          overflow: "hidden",
          position: "relative"
        })
      }, __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_snackbar__["a" /* default */], { spawn: "container3", position: "container" }))];
    }
  }
}, {
  name: "Dark theme class + light tone",
  interactive: true,
  exclude: true,
  class: "pe-dark-theme",
  component: {
    view: function view() {
      return [buttonRow(variations.map(function (v) {
        return _extends({}, v, { tone: "dark" });
      }), { spawn: "container4" }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
        style: _extends({}, pattern("#fff", "#eceff1"), {
          height: "180px",
          overflow: "hidden",
          position: "relative"
        })
      }, __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_snackbar__["a" /* default */], { spawn: "container4", position: "container" }))];
    }
  }
}];

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_svg__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mmsvg_google_msvg_action_stars__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mmsvg_google_msvg_action_stars___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mmsvg_google_msvg_action_stars__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tests; });




var svgString = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z\"/></svg>";
var trustedSvg = __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.trust(svgString);

__WEBPACK_IMPORTED_MODULE_1_polythene_svg__["a" /* default */].theme(".tests-svg-themed-svg", {
  color_light: "#0D47A1",
  color_dark: "orange"
});

var tests = [{
  name: "Child node (trusted svg)",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_svg__["a" /* default */],
  attrs: null,
  children: [trustedSvg]
}, {
  name: "Child node (mmsvg)",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_svg__["a" /* default */],
  attrs: null,
  children: [__WEBPACK_IMPORTED_MODULE_2_mmsvg_google_msvg_action_stars___default.a]
}, {
  name: "Option: content (trusted svg)",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_svg__["a" /* default */],
  attrs: {
    content: trustedSvg
  }
}, {
  name: "Option: content (mmsvg)",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_svg__["a" /* default */],
  attrs: {
    content: __WEBPACK_IMPORTED_MODULE_2_mmsvg_google_msvg_action_stars___default.a
  }
}, {
  name: "Option: style (color)",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_svg__["a" /* default */],
  attrs: {
    content: __WEBPACK_IMPORTED_MODULE_2_mmsvg_google_msvg_action_stars___default.a,
    style: {
      color: "#EF6C00"
    }
  }
}, {
  name: "Themed (color)",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_svg__["a" /* default */],
  attrs: {
    content: __WEBPACK_IMPORTED_MODULE_2_mmsvg_google_msvg_action_stars___default.a,
    class: "tests-svg-themed-svg"
  }
},

// Dark theme

{
  name: "Option: content (mmsvg) -- dark theme class",
  class: "pe-dark-theme",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_svg__["a" /* default */],
  attrs: {
    content: __WEBPACK_IMPORTED_MODULE_2_mmsvg_google_msvg_action_stars___default.a
  }
}, {
  name: "Themed (color) -- dark theme class",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_svg__["a" /* default */],
  class: "pe-dark-theme",
  attrs: {
    content: __WEBPACK_IMPORTED_MODULE_2_mmsvg_google_msvg_action_stars___default.a,
    class: "tests-svg-themed-svg"
  }
}, {
  name: "Dark theme class + light theme class",
  class: "pe-dark-theme",
  component: {
    view: function view() {
      return __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
        style: {
          background: "#fff",
          padding: "10px"
        },
        class: "pe-light-theme"
      }, __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_svg__["a" /* default */], { content: __WEBPACK_IMPORTED_MODULE_2_mmsvg_google_msvg_action_stars___default.a }));
    }
  }
}, {
  name: "Dark theme class + light tone",
  class: "test-dark-theme",
  component: {
    view: function view() {
      return __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
        style: {
          background: "#fff",
          padding: "10px"
        }
      }, __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_svg__["a" /* default */], {
        content: __WEBPACK_IMPORTED_MODULE_2_mmsvg_google_msvg_action_stars___default.a,
        tone: "light"
      }));
    }
  }
}];

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_switch_button__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_icon__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mmsvg_templarian_msvg_bullseye__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mmsvg_templarian_msvg_bullseye___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_mmsvg_templarian_msvg_bullseye__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tests; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };






__WEBPACK_IMPORTED_MODULE_1_polythene_switch_button__["a" /* default */].theme(".tests-switch-themed-switch", {
  label_font_size: 28,
  color_light_thumb_on: "#2196F3",
  color_dark_thumb_on: "#2196F3"
});

__WEBPACK_IMPORTED_MODULE_1_polythene_switch_button__["a" /* default */].theme(".tests-switch-themed-icon", {
  color_light_thumb_off: "#fff",
  color_light_thumb_on: "#fff",
  color_light_icon_on: "#EF6C00",
  color_light_icon_off: "#ddd",
  color_dark_thumb_off: "#fff",
  color_dark_thumb_on: "#fff",
  color_dark_icon_on: "#EF6C00",
  color_dark_icon_off: "#fff"
});

var sizeNames = ["small", "regular", "medium", "large"];

var sizes = function sizes(_sizes, attrs) {
  return _sizes.map(function (size) {
    return __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
      style: {
        marginBottom: "1rem"
      }
    }, __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_switch_button__["a" /* default */], _extends({}, attrs, {
      label: size,
      size: size
    })));
  });
};

var tests = [{
  name: "No options",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_switch_button__["a" /* default */]
}, {
  name: "Option: label",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_switch_button__["a" /* default */],
  attrs: {
    label: "Label"
  }
}, {
  name: "Option: checked",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_switch_button__["a" /* default */],
  attrs: {
    checked: true
  }
}, {
  name: "Option: value",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_switch_button__["a" /* default */],
  attrs: {
    name: "worth",
    value: "notable"
  }
}, {
  name: "Option: size",
  component: {
    view: function view() {
      return __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", sizes(sizeNames, {
        label: "Label"
      }));
    } }
}, {
  name: "Themed checkbox (color and font size)",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_switch_button__["a" /* default */],
  attrs: {
    label: "Label",
    class: "tests-switch-themed-switch"
  }
}, {
  name: "Option: style (colors)",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_switch_button__["a" /* default */],
  attrs: {
    label: "Label",
    style: {
      color: "#EF6C00"
    }
  }
}, {
  name: "Option: icon",
  component: {
    view: function view() {
      return __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", sizes(sizeNames, {
        label: "Label",
        class: "tests-switch-themed-icon",
        icon: __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_icon__["a" /* default */], {
          msvg: __WEBPACK_IMPORTED_MODULE_3_mmsvg_templarian_msvg_bullseye___default.a
        })
      }));
    } }
}, {
  name: "Option: disabled",
  interactive: true,
  component: {
    view: function view() {
      return [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_switch_button__["a" /* default */], {
        disabled: true,
        label: "Off"
      }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_switch_button__["a" /* default */], {
        disabled: true,
        checked: true,
        label: "On"
      })];
    }
  }
}, {
  name: "Option: selectable (false)",
  interactive: true,
  component: {
    view: function view() {
      return [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_switch_button__["a" /* default */], {
        selectable: function selectable() {
          return false;
        },
        label: "Never"
      }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_switch_button__["a" /* default */], {
        selectable: function selectable(checked) {
          return !checked;
        },
        label: "Only when unchecked"
      })];
    }
  }
}, {
  name: "Option: iconButton (custom hover behaviour)",
  interactive: true,
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_switch_button__["a" /* default */],
  attrs: {
    iconButton: {
      wash: true,
      ink: false
    }
  }
}, {
  name: "Option: getState",
  interactive: true,
  exclude: true,
  component: {
    oninit: function oninit(vnode) {
      return vnode.state.checked = false;
    },
    view: function view(vnode) {
      return [__WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
        style: {
          marginBottom: "1rem"
        }
      }, "Checked: " + vnode.state.checked), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_switch_button__["a" /* default */], {
        getState: function getState(state) {
          return vnode.state.checked = state.checked;
        }
      })];
    }
  }
}, {
  name: "Setting the value from outside",
  interactive: true,
  exclude: true,
  component: {
    oninit: function oninit(vnode) {
      return vnode.state.checked = false;
    },
    view: function view(vnode) {
      return [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_switch_button__["a" /* default */], {
        label: "Initiator",
        getState: function getState(state) {
          return vnode.state.checked = state.checked;
        }
      }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_switch_button__["a" /* default */], {
        label: "Result",
        disabled: true,
        checked: function checked() {
          return vnode.state.checked;
        }
      })];
    }
  }
}, {
  name: "Option: events",
  interactive: true,
  exclude: true,
  component: {
    oninit: function oninit(vnode) {
      return vnode.state.checked = false;
    },
    view: function view(vnode) {
      return [__WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
        style: {
          marginBottom: "1rem"
        }
      }, "Checked: " + vnode.state.checked), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_switch_button__["a" /* default */], {
        events: {
          onclick: function onclick() {
            return vnode.state.checked = !vnode.state.checked;
          }
        }
      })];
    }
  }
},

// Dark theme

{
  name: "Option: checked -- dark theme",
  class: "pe-dark-theme",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_switch_button__["a" /* default */],
  attrs: {
    checked: true
  }
}, {
  name: "Themed checkbox (colors) -- dark theme class",
  class: "pe-dark-theme",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_switch_button__["a" /* default */],
  attrs: {
    label: "Label",
    class: "tests-switch-themed-switch"
  }
}, {
  name: "Option: disabled -- dark theme class",
  class: "pe-dark-theme",
  component: {
    view: function view() {
      return [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_switch_button__["a" /* default */], {
        disabled: true,
        label: "Off"
      }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_switch_button__["a" /* default */], {
        disabled: true,
        checked: true,
        label: "On"
      })];
    }
  }
}, {
  name: "Dark theme class + light theme class",
  class: "pe-dark-theme",
  component: {
    view: function view() {
      return __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
        style: {
          background: "#fff",
          padding: "20px"
        },
        class: "pe-light-theme"
      }, __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_switch_button__["a" /* default */]));
    }
  }
}, {
  name: "Dark theme class + light tone",
  class: "test-dark-theme",
  component: {
    view: function view() {
      return __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
        style: {
          background: "#fff",
          padding: "20px"
        }
      }, __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_switch_button__["a" /* default */], {
        tone: "light"
      }));
    }
  }
}];

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_tabs__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mmsvg_templarian_msvg_heart__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mmsvg_templarian_msvg_heart___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mmsvg_templarian_msvg_heart__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mmsvg_templarian_msvg_bell__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mmsvg_templarian_msvg_bell___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_mmsvg_templarian_msvg_bell__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mmsvg_templarian_msvg_settings__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mmsvg_templarian_msvg_settings___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_mmsvg_templarian_msvg_settings__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mmsvg_google_msvg_navigation_arrow_back__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mmsvg_google_msvg_navigation_arrow_back___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_mmsvg_google_msvg_navigation_arrow_back__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_mmsvg_google_msvg_navigation_arrow_forward__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_mmsvg_google_msvg_navigation_arrow_forward___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_mmsvg_google_msvg_navigation_arrow_forward__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tests; });







// import iconMenu from "mmsvg/google/msvg/navigation/menu";
// import iconSearch from "mmsvg/google/msvg/action/search";
// import iconMore from "mmsvg/google/msvg/navigation/more-vert";




__WEBPACK_IMPORTED_MODULE_1_polythene_tabs__["a" /* default */].theme(".tests-tabs-fixed-width", {
  tab_max_width: 110,
  tab_min_width: 110
});

__WEBPACK_IMPORTED_MODULE_1_polythene_tabs__["a" /* default */].theme(".tests-tabs-custom_color", {
  color_light: "#00BCD4",
  color_light_selected: "#F44336",
  color_light_tab_indicator: "#F44336",
  color_dark: "#00BCD4",
  color_dark_selected: "#F44336",
  color_dark_tab_indicator: "#F44336"
});

var threeButtons = [{ label: "New" }, { label: "My Favorites" }, { label: "Saved" }];

var menuButtons = [{ label: "New" }, { label: "Favs" }, { label: "Saved" }];

var longLabels = [{ label: "New" }, { label: "A very long label that does not fit" }, { label: "Saved" }];

var longList = [{ label: "Web" }, { label: "Shopping" }, { label: "Videos" }, { label: "Images" }, { label: "Books" }, { label: "More" }];

var iconButtons = [{
  icon: { msvg: __WEBPACK_IMPORTED_MODULE_2_mmsvg_templarian_msvg_heart___default.a }
}, {
  icon: { msvg: __WEBPACK_IMPORTED_MODULE_3_mmsvg_templarian_msvg_bell___default.a }
}, {
  icon: { msvg: __WEBPACK_IMPORTED_MODULE_4_mmsvg_templarian_msvg_settings___default.a }
}];

var iconTextButtons = [{
  icon: { msvg: __WEBPACK_IMPORTED_MODULE_2_mmsvg_templarian_msvg_heart___default.a },
  label: "Favs"
}, {
  icon: { msvg: __WEBPACK_IMPORTED_MODULE_3_mmsvg_templarian_msvg_bell___default.a },
  label: "Notifs"
}, {
  icon: { msvg: __WEBPACK_IMPORTED_MODULE_4_mmsvg_templarian_msvg_settings___default.a },
  label: "Custom"
}];

var tests = [{
  name: "Child node",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_tabs__["a" /* default */],
  attrs: null,
  children: threeButtons
}, {
  name: "Option: content",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_tabs__["a" /* default */],
  attrs: {
    content: threeButtons
  }
}, {
  name: "Option: buttons (text buttons)",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_tabs__["a" /* default */],
  attrs: {
    buttons: threeButtons
  }
}, {
  name: "Option: autofit (true)",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_tabs__["a" /* default */],
  attrs: {
    buttons: threeButtons,
    autofit: true
  }
}, {
  name: "Option: centered (no autofit)",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_tabs__["a" /* default */],
  attrs: {
    buttons: threeButtons,
    centered: true
  }
}, {
  name: "Option: largestWidth (no autofit)",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_tabs__["a" /* default */],
  attrs: {
    buttons: threeButtons,
    largestWidth: true
  }
}, {
  name: "Theme: small fixed width",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_tabs__["a" /* default */],
  attrs: {
    buttons: threeButtons,
    class: "tests-tabs-fixed-width",
    centered: true
  }
}, {
  name: "Option: selectedTab (1)",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_tabs__["a" /* default */],
  attrs: {
    buttons: threeButtons,
    autofit: true,
    selectedTab: 1
  }
}, {
  name: "Theme: custom colors",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_tabs__["a" /* default */],
  attrs: {
    buttons: threeButtons,
    autofit: true,
    class: "tests-tabs-custom_color"
  }
}, {
  name: "Long labels: wrap to second line",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_tabs__["a" /* default */],
  attrs: {
    buttons: longLabels,
    autofit: true,
    class: "tests-tabs-fixed-width"
  }
}, {
  name: "Option: scrollable",
  component: {
    view: function view() {
      return __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
        style: {
          maxWidth: "400px",
          color: "#fff",
          backgroundColor: "#444",
          overflowX: "hidden",
          height: "48px"
        }
      }, __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_tabs__["a" /* default */], {
        buttons: longList,
        scrollable: true
      }));
    }
  }
}, {
  name: "Option: scrollable with custom icons",
  component: {
    view: function view() {
      return __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
        style: {
          maxWidth: "400px",
          color: "#fff",
          backgroundColor: "#444",
          overflowX: "hidden",
          height: "48px"
        }
      }, __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_tabs__["a" /* default */], {
        buttons: longList,
        scrollable: true,
        scrollIconBackward: { msvg: __WEBPACK_IMPORTED_MODULE_5_mmsvg_google_msvg_navigation_arrow_back___default.a },
        scrollIconForward: { msvg: __WEBPACK_IMPORTED_MODULE_6_mmsvg_google_msvg_navigation_arrow_forward___default.a }
      }));
    }
  }
}, {
  name: "Option: menu",
  component: {
    view: function view() {
      return __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
        style: {
          maxWidth: "320px",
          color: "#444",
          backgroundColor: "#fff",
          height: "400px",
          display: "flex",
          flexDirection: "column"
        }
      }, [__WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
        style: {
          padding: "20px",
          display: "flex",
          overflowX: "hidden",
          overflowY: "scroll",
          flexDirection: "column"
        }
      }, [1, 2, 3, 4, 5].map(function () {
        return __WEBPACK_IMPORTED_MODULE_0_mithril___default()("p", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
      })), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_tabs__["a" /* default */], {
        buttons: menuButtons,
        menu: true,
        autofit: true,
        hideIndicator: true,
        style: {
          borderTop: "1px solid #eee"
        }
      })]);
    }
  }
}, {
  name: "Option: hideIndicator",
  interactive: true,
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_tabs__["a" /* default */],
  attrs: {
    buttons: threeButtons,
    autofit: true,
    hideIndicator: true
  }
}, {
  name: "Option: noIndicatorSlide",
  interactive: true,
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_tabs__["a" /* default */],
  attrs: {
    buttons: threeButtons,
    autofit: true,
    noIndicatorSlide: true
  }
}, {
  name: "Option: tabsOpts (ink: false)",
  interactive: true,
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_tabs__["a" /* default */],
  attrs: {
    buttons: threeButtons,
    autofit: true,
    tabsOpts: {
      ink: false
    }
  }
}, {
  name: "Option: activeSelected",
  interactive: true,
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_tabs__["a" /* default */],
  attrs: {
    buttons: threeButtons,
    autofit: true,
    activeSelected: true
  }
}, {
  name: "Option: tabsOpts (style - colors)",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_tabs__["a" /* default */],
  attrs: {
    buttons: threeButtons,
    autofit: true,
    tabsOpts: {
      style: {
        backgroundColor: "#EF6C00",
        color: "#fff"
      }
    }
  }
}, {
  name: "Tabs with icons",
  class: "small-result",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_tabs__["a" /* default */],
  attrs: {
    buttons: iconButtons,
    autofit: true
  }
}, {
  name: "Tabs with icons and text",
  class: "small-result",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_tabs__["a" /* default */],
  attrs: {
    buttons: iconTextButtons,
    autofit: true
  }
}, {
  name: "Option: getState",
  interactive: true,
  exclude: true,
  component: {
    oninit: function oninit(vnode) {
      return vnode.state.tab = {};
    },
    view: function view(vnode) {
      return [__WEBPACK_IMPORTED_MODULE_0_mithril___default()("ul", {
        style: {
          margin: "0 0 1rem 0",
          padding: 0,
          maxHeight: "7rem",
          overflow: "hidden"
        }
      }, [__WEBPACK_IMPORTED_MODULE_0_mithril___default()("li", "" + vnode.state.tab.index), __WEBPACK_IMPORTED_MODULE_0_mithril___default()("li", "" + JSON.stringify(vnode.state.tab.data))]), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_tabs__["a" /* default */], {
        buttons: threeButtons,
        autofit: true,
        getState: function getState(s) {
          return vnode.state.tab = s;
        }
      })];
    }
  }
},

// Dark theme

{
  name: "Option: buttons (text buttons) -- dark theme class",
  class: "pe-dark-theme",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_tabs__["a" /* default */],
  attrs: {
    buttons: threeButtons
  }
}, {
  name: "Theme: custom colors -- dark theme class",
  class: "pe-dark-theme",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_tabs__["a" /* default */],
  attrs: {
    buttons: threeButtons,
    autofit: true,
    class: "tests-tabs-custom_color"
  }
}, {
  name: "Tabs with icons -- dark theme class",
  class: "small-result pe-dark-theme",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_tabs__["a" /* default */],
  attrs: {
    buttons: iconButtons,
    autofit: true
  }
}, {
  name: "Option: scrollable -- dark theme class",
  class: "pe-dark-theme",
  component: {
    view: function view() {
      return __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
        style: {
          maxWidth: "400px",
          overflowX: "hidden",
          height: "48px",
          color: "#fff"
        }
      }, __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_tabs__["a" /* default */], {
        buttons: longList,
        scrollable: true
      }));
    }
  }
}, {
  name: "Dark theme class + light theme class",
  class: "pe-dark-theme",
  component: {
    view: function view() {
      return __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
        style: {
          background: "#fff",
          padding: "20px"
        },
        class: "pe-light-theme"
      }, __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_tabs__["a" /* default */], {
        buttons: longList,
        scrollable: true
      }));
    }
  }
}, {
  name: "Dark theme class + light tone",
  class: "test-dark-theme",
  component: {
    view: function view() {
      return __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
        style: {
          background: "#fff",
          padding: "20px"
        }
      }, __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_tabs__["a" /* default */], {
        buttons: longList,
        scrollable: true,
        tone: "light"
      }));
    }
  }
}];

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_textfield__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_raised_button__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tests; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





__WEBPACK_IMPORTED_MODULE_1_polythene_textfield__["a" /* default */].theme(".tests-textfield-themed-textfield", {
  color_light_input_text: "#0D47A1",
  color_light_input_background: "#BBDEFB",
  color_light_focus_border: "#0D47A1",
  input_padding_h: 16
});

var ipsum = "Lorem ipsum dolor sit amet, idque signiferumque at usu, eum recusabo aliquando id. Deleniti percipitur concludaturque eu eos. Vix elitr feugait ne. Mel agam integre eu, has minim aliquid salutandi eu. Est nusquam abhorreant ne. Ei wisi dicant eam, vix tota reque persequeris an. Quo in theophrastus reprehendunt, ius te graecis epicuri volutpat.";

var shortIpsum = "Lorem ipsum dolor sit amet,";

var block = function block(test) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
    style: _extends({}, opts.dark ? null : { background: "#fff" }, opts.fullWidth ? null : { padding: "10px 15px" }) }, test);
};

var tests = [{
  name: "Option: value",
  component: {
    view: function view() {
      return block([__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_textfield__["a" /* default */], {
        value: "Text A"
      }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_textfield__["a" /* default */], {
        value: "Text B"
      })]);
    }
  }
}, {
  name: "Option: autofocus",
  component: {
    view: function view() {
      return block([__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_textfield__["a" /* default */], {
        autofocus: true
      })]);
    }
  }
}, {
  name: "Option: type (password, number, email)",
  component: {
    view: function view() {
      return block([__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_textfield__["a" /* default */], {
        type: "password",
        value: "123456"
      }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_textfield__["a" /* default */], {
        type: "number",
        value: "123456"
      }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_textfield__["a" /* default */], {
        type: "email",
        value: "a@b.com"
      })]);
    }
  }
}, {
  name: "Option: label",
  component: {
    view: function view() {
      return block([__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_textfield__["a" /* default */], {
        label: "Your Name"
      })]);
    }
  }
}, {
  name: "Option: floatingLabel",
  interactive: true,
  component: {
    view: function view() {
      return block([__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_textfield__["a" /* default */], {
        label: "Your name",
        floatingLabel: true
      }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_textfield__["a" /* default */], {
        label: "Your email",
        floatingLabel: true
      }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_textfield__["a" /* default */], {
        label: "Your address",
        floatingLabel: true
      })]);
    }
  }
}, {
  name: "Option: floatingLabel, dense",
  component: {
    view: function view() {
      return block([__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_textfield__["a" /* default */], {
        label: "Your name",
        floatingLabel: true,
        dense: true
      }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_textfield__["a" /* default */], {
        label: "Your email",
        floatingLabel: true,
        dense: true
      }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_textfield__["a" /* default */], {
        label: "Your address",
        floatingLabel: true,
        dense: true
      })]);
    }
  }
}, {
  name: "Option: help",
  component: {
    view: function view() {
      return block([__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_textfield__["a" /* default */], {
        label: "Your Name",
        help: "Enter the name as written on the credit card"
      })]);
    }
  }
}, {
  name: "Option: focusHelp",
  component: {
    view: function view() {
      return block([__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_textfield__["a" /* default */], {
        label: "Your Name",
        help: "Enter the name as written on the credit card",
        focusHelp: true
      })]);
    }
  }
}, {
  name: "Option: fullWidth",
  component: {
    view: function view() {
      return block([__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_textfield__["a" /* default */], {
        label: "Your name",
        fullWidth: true
      }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_textfield__["a" /* default */], {
        label: "Your email",
        fullWidth: true
      }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_textfield__["a" /* default */], {
        label: "Your address",
        fullWidth: true
      })], { fullWidth: true });
    }
  }
}, {
  name: "Option: multiline",
  component: {
    view: function view() {
      return block([__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_textfield__["a" /* default */], {
        label: "Label in multi-line input",
        multiline: true,
        rows: 2
      }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_textfield__["a" /* default */], {
        label: "Floating label in multi-line input",
        floatingLabel: true,
        multiline: true,
        rows: 2
      }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_textfield__["a" /* default */], {
        value: "4 rows: " + ipsum,
        multiline: true,
        rows: 4
      })]);
    }
  }
}, {
  name: "Option: required",
  interactive: true,
  component: {
    view: function view() {
      return block([__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_textfield__["a" /* default */], {
        label: "Your name",
        help: "Enter the name as written on the credit card",
        required: true
      })]);
    }
  }
}, {
  name: "Option: required, hideValidation",
  interactive: true,
  component: {
    view: function view() {
      return block([__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_textfield__["a" /* default */], {
        label: "Your name",
        help: "Enter the name as written on the credit card",
        required: true,
        hideValidation: true
      })]);
    }
  }
}, {
  name: "Option: required, floatingLabel",
  interactive: true,
  component: {
    view: function view() {
      return block([__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_textfield__["a" /* default */], {
        label: "Your name",
        floatingLabel: true,
        help: "Enter the name as written on the credit card",
        required: true
      })]);
    }
  }
}, {
  name: "Option: required, floatingLabel, requiredIndicator (string)",
  interactive: true,
  component: {
    view: function view() {
      return block([__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_textfield__["a" /* default */], {
        label: "Your name",
        floatingLabel: true,
        help: "Enter the name as written on the credit card",
        required: true,
        requiredIndicator: "(required)"
      })]);
    }
  }
}, {
  name: "Option: required, floatingLabel, requiredIndicator (element)",
  interactive: true,
  component: {
    view: function view() {
      return block([__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_textfield__["a" /* default */], {
        label: "Your name",
        floatingLabel: true,
        help: "Enter the name as written on the credit card",
        required: true,
        requiredIndicator: __WEBPACK_IMPORTED_MODULE_0_mithril___default()("small", { style: { color: "#333" } }, "this field is required")
      })]);
    }
  }
}, {
  name: "Option: optionalIndicator (string)",
  interactive: true,
  component: {
    view: function view() {
      return block([__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_textfield__["a" /* default */], {
        label: "Your name",
        floatingLabel: true,
        optionalIndicator: "(optional)"
      })]);
    }
  }
}, {
  name: "Option: optionalIndicator (element)",
  interactive: true,
  component: {
    view: function view() {
      return block([__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_textfield__["a" /* default */], {
        label: "Your name",
        floatingLabel: true,
        optionalIndicator: __WEBPACK_IMPORTED_MODULE_0_mithril___default()("small", { style: { color: "#333" } }, "this field is optional")
      })]);
    }
  }
}, {
  name: "Option: required, floatingLabel, empty requiredIndicator",
  interactive: true,
  component: {
    view: function view() {
      return block([__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_textfield__["a" /* default */], {
        label: "Floating label in multi-line input",
        floatingLabel: true,
        help: "This required field does not show a *",
        error: "Please enter your name",
        focusHelp: true,
        required: true,
        requiredIndicator: ""
      })]);
    }
  }
}, {
  name: "Option: maxlength",
  interactive: true,
  component: {
    view: function view() {
      return block([__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_textfield__["a" /* default */], {
        value: "123",
        maxlength: 3,
        error: "Enter max 3 characters"
      })]);
    }
  }
}, {
  name: "Option: min, max",
  interactive: true,
  component: {
    view: function view() {
      return block([__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_textfield__["a" /* default */], {
        type: "number",
        min: 3,
        max: 8,
        value: 10,
        error: "Enter a value between 3 and 8"
      })]);
    }
  }
}, {
  name: "Option: type email, required",
  interactive: true,
  component: {
    view: function view() {
      return block([__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_textfield__["a" /* default */], {
        label: "Email",
        type: "email",
        value: "a@",
        required: true,
        error: "Enter a valid email address"
      })]);
    }
  }
}, {
  name: "Option: pattern, validateAtStart",
  interactive: true,
  component: {
    view: function view() {
      return block([__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_textfield__["a" /* default */], {
        label: "Number",
        type: "text",
        value: "abc",
        pattern: "[0-9]+",
        validateAtStart: true
      })]);
    }
  }
}, {
  name: "Custom validation",
  interactive: true,
  component: {
    view: function view() {
      return block([__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_textfield__["a" /* default */], {
        value: "abC",
        validate: function validate(value) {
          return value !== value.toLowerCase() ? {
            valid: false,
            error: "Only use lowercase characters."
          } : null;
        },
        validateAtStart: true
      })]);
    }
  }
}, {
  name: "Option: counter",
  interactive: true,
  component: {
    view: function view() {
      return block([__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_textfield__["a" /* default */], {
        label: "Description",
        floatingLabel: true,
        value: shortIpsum,
        counter: 30,
        error: "You have exceeded the maximum number of characters."
      })]);
    }
  }
}, {
  name: "Option: counter, maxlength",
  interactive: true,
  component: {
    view: function view() {
      return block([__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_textfield__["a" /* default */], {
        label: "Description",
        floatingLabel: true,
        value: shortIpsum,
        counter: 30,
        maxlength: 30
      })]);
    }
  }
}, {
  name: "Give focus",
  interactive: true,
  component: {
    view: function view(vnode) {
      return block([__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_textfield__["a" /* default */], {
        label: "Your name",
        focus: vnode.state.hasFocus,
        getState: function getState(focusState) {
          return vnode.state.hasFocus = focusState.focus;
        }
      }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_raised_button__["a" /* default */], {
        label: "Give focus",
        raised: true,
        events: {
          onclick: function onclick() {
            return vnode.state.hasFocus = true;
          }
        }
      })]);
    }
  }
}, {
  name: "Set value from outside",
  interactive: true,
  component: {
    value: "00000",
    view: function view(vnode) {
      return block([__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_textfield__["a" /* default */], {
        value: function value() {
          return vnode.state.value;
        },
        getState: function getState(state) {
          return vnode.state.value = state.value;
        }
      }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_raised_button__["a" /* default */], {
        label: "Randomize",
        raised: true,
        events: {
          onclick: function onclick() {
            return vnode.state.value = Math.floor(Math.random() * 100000);
          }
        }
      })]);
    }
  }
}, {
  name: "Option: disabled (label)",
  component: {
    view: function view() {
      return block([__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_textfield__["a" /* default */], {
        label: "Your name",
        disabled: true
      })]);
    }
  }
}, {
  name: "Option: disabled (input)",
  component: {
    view: function view() {
      return block([__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_textfield__["a" /* default */], {
        value: "John",
        disabled: true
      })]);
    }
  }
}, {
  name: "Option: readonly",
  component: {
    view: function view() {
      return block([__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_textfield__["a" /* default */], {
        value: "John",
        readonly: true
      })]);
    }
  }
}, {
  name: "Themed",
  component: {
    view: function view() {
      return block([__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_textfield__["a" /* default */], {
        label: "Your name",
        class: "tests-textfield-themed-textfield"
      })]);
    }
  }
}, {
  name: "Option: style",
  component: {
    view: function view() {
      return block([__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_textfield__["a" /* default */], {
        label: "Your name",
        style: {
          background: "#2196F3"
        }
      })]);
    }
  }
},

/* Dark theme */

{
  name: "Option: label -- dark theme class",
  class: "pe-dark-theme",
  component: {
    view: function view() {
      return block([__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_textfield__["a" /* default */], {
        label: "Your Name"
      })], { dark: true });
    }
  }
}, {
  name: "Option: floatingLabel -- dark theme class",
  interactive: true,
  class: "pe-dark-theme",
  component: {
    view: function view() {
      return block([__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_textfield__["a" /* default */], {
        label: "Your name",
        floatingLabel: true
      }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_textfield__["a" /* default */], {
        label: "Your email",
        floatingLabel: true
      }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_textfield__["a" /* default */], {
        label: "Your address",
        floatingLabel: true
      })], { dark: true });
    }
  }
}, {
  name: "Option: type email, required -- dark theme class",
  interactive: true,
  class: "pe-dark-theme",
  component: {
    view: function view() {
      return block([__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_textfield__["a" /* default */], {
        label: "Email",
        type: "email",
        value: "a@",
        required: true,
        error: "Enter a valid email address"
      })], { dark: true });
    }
  }
}, {
  name: "Option: disabled (input) -- dark theme class",
  class: "pe-dark-theme",
  component: {
    view: function view() {
      return block([__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_textfield__["a" /* default */], {
        value: "John",
        disabled: true
      })], { dark: true });
    }
  }
}, {
  name: "Option: readonly -- dark theme class",
  class: "pe-dark-theme",
  component: {
    view: function view() {
      return block([__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_textfield__["a" /* default */], {
        value: "John",
        readonly: true
      })], { dark: true });
    }
  }
}, {
  name: "Dark theme class + light theme class",
  class: "pe-dark-theme",
  component: {
    view: function view() {
      return block([__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_textfield__["a" /* default */], {
        label: "Your Name",
        class: "pe-light-theme"
      })]);
    }
  }
}, {
  name: "Dark theme class + light tone",
  class: "test-dark-theme",
  component: {
    view: function view() {
      return block([__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_textfield__["a" /* default */], {
        label: "Your Name",
        tone: "light"
      })]);
    }
  }
}];

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_button__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_fab__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_icon__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_polythene_icon_button__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_polythene_list__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_polythene_list_tile__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_mmsvg_google_msvg_action_alarm_add__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_mmsvg_google_msvg_action_alarm_add___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_mmsvg_google_msvg_action_alarm_add__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tests; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/*
Testing 2 theming methods:
1. Style variables
2. Deriving components
*/










// [1]

__WEBPACK_IMPORTED_MODULE_1_polythene_button__["a" /* default */].theme(".tests-custom-theme-blue-button", {
  color_light_background: "#2196F3",
  color_light_text: "#fff"
});

__WEBPACK_IMPORTED_MODULE_1_polythene_button__["a" /* default */].theme(".tests-custom-theme-red-button", {
  color_light_background: "#ff0000",
  color_light_text: "#fff"
});

__WEBPACK_IMPORTED_MODULE_3_polythene_icon__["a" /* default */].theme(".tests-custom-theme-red-icon", {
  color_light: "red"
});

__WEBPACK_IMPORTED_MODULE_2_polythene_fab__["a" /* default */].theme(".tests-custom-theme-red-fab", {
  color_light_background: "#ff0000",
  color_light: "#fff"
});

__WEBPACK_IMPORTED_MODULE_4_polythene_icon_button__["a" /* default */].theme(".tests-custom-theme-large-icon-button", {
  padding: 50,
  color_background: "#fff"
});

__WEBPACK_IMPORTED_MODULE_5_polythene_list__["a" /* default */].theme(".tests-custom-theme-blue-list", {
  color_light_border: "#2196F3"
});

__WEBPACK_IMPORTED_MODULE_6_polythene_list_tile__["a" /* default */].theme(".tests-custom-theme-red-list-tile", {
  color_light_title: "red"
});

// [2]

var secondaryButton = {
  theme: __WEBPACK_IMPORTED_MODULE_1_polythene_button__["a" /* default */].theme,
  view: function view(vnode) {
    return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_button__["a" /* default */], _extends({
      class: "tests-custom-theme-secondary-button",
      borders: true
    }, vnode.attrs));
  }
};
secondaryButton.theme(".tests-custom-theme-secondary-button", {
  color_light_border: "#ddd",
  color_light_background: "#fff"
});

var tests = [{
  name: "Theme with style variables: button (should be blue)",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_button__["a" /* default */],
  attrs: {
    class: "tests-custom-theme-blue-button",
    label: "Blue button"
  }
}, {
  name: "Theme with style variables: button (should be red)",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_button__["a" /* default */],
  attrs: {
    class: "tests-custom-theme-red-button",
    label: "Red button"
  }
}, {
  name: "Theme with deriving component: button (should be bordered with white background)",
  component: secondaryButton,
  attrs: {
    label: "Bordered button"
  }
}, {
  name: "No theme: normal button",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_button__["a" /* default */],
  attrs: {
    label: "Unaffected button"
  }
}, {
  name: "Theme with theme file (global primary color): FAB (should be orange)",
  component: __WEBPACK_IMPORTED_MODULE_2_polythene_fab__["a" /* default */],
  attrs: {
    icon: {
      msvg: __WEBPACK_IMPORTED_MODULE_7_mmsvg_google_msvg_action_alarm_add___default.a
    }
  }
}, {
  name: "Theme with style variables: FAB (should be red)",
  component: __WEBPACK_IMPORTED_MODULE_2_polythene_fab__["a" /* default */],
  attrs: {
    class: "tests-custom-theme-red-fab",
    icon: {
      msvg: __WEBPACK_IMPORTED_MODULE_7_mmsvg_google_msvg_action_alarm_add___default.a
    }
  }
}, {
  name: "Theme with style variables: icon (should be red)",
  component: __WEBPACK_IMPORTED_MODULE_3_polythene_icon__["a" /* default */],
  attrs: {
    class: "tests-custom-theme-red-icon",
    msvg: __WEBPACK_IMPORTED_MODULE_7_mmsvg_google_msvg_action_alarm_add___default.a
  }
}, {
  name: "Theme with style variables: icon button (should have large padding)",
  component: __WEBPACK_IMPORTED_MODULE_4_polythene_icon_button__["a" /* default */],
  attrs: {
    class: "tests-custom-theme-large-icon-button",
    icon: {
      msvg: __WEBPACK_IMPORTED_MODULE_7_mmsvg_google_msvg_action_alarm_add___default.a
    }
  }
}, {
  name: "Theme with style variables: list (should have blue borders)",
  component: __WEBPACK_IMPORTED_MODULE_5_polythene_list__["a" /* default */],
  attrs: {
    class: "tests-custom-theme-blue-list",
    borders: true,
    tiles: [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_6_polythene_list_tile__["a" /* default */], {
      title: "Jennifer Barker",
      subtitle: "Starting post doc"
    }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_6_polythene_list_tile__["a" /* default */], {
      title: "Ali Connors",
      subtitle: "Brunch this weekend?"
    }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_6_polythene_list_tile__["a" /* default */], {
      title: "Mike Eden",
      subtitle: "Watch a game"
    })]
  }
}, {
  name: "Theme with style variables: list tile (should have red titles)",
  component: __WEBPACK_IMPORTED_MODULE_5_polythene_list__["a" /* default */],
  attrs: {
    tiles: [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_6_polythene_list_tile__["a" /* default */], {
      class: "tests-custom-theme-red-list-tile",
      title: "Jennifer Barker",
      subtitle: "Starting post doc"
    }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_6_polythene_list_tile__["a" /* default */], {
      class: "tests-custom-theme-red-list-tile",
      title: "Ali Connors",
      subtitle: "Brunch this weekend?"
    }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_6_polythene_list_tile__["a" /* default */], {
      class: "tests-custom-theme-red-list-tile",
      title: "Mike Eden",
      subtitle: "Watch a game"
    })]
  }
}];

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_toolbar__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_icon_button__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_shadow__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mmsvg_google_msvg_navigation_menu__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mmsvg_google_msvg_navigation_menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_mmsvg_google_msvg_navigation_menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mmsvg_google_msvg_navigation_refresh__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mmsvg_google_msvg_navigation_refresh___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_mmsvg_google_msvg_navigation_refresh__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_mmsvg_google_msvg_content_add__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_mmsvg_google_msvg_content_add___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_mmsvg_google_msvg_content_add__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tests; });








__WEBPACK_IMPORTED_MODULE_1_polythene_toolbar__["a" /* default */].theme(".tests-toolbar-themed-toolbar", {
  color_dark_background: "#00c853"
});

var btn = function btn(msvg) {
  return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_icon_button__["a" /* default */], {
    icon: { msvg: msvg }
  });
};

var toolbarRow = [btn(__WEBPACK_IMPORTED_MODULE_4_mmsvg_google_msvg_navigation_menu___default.a), __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", { class: __WEBPACK_IMPORTED_MODULE_1_polythene_toolbar__["b" /* classes */].title }, "Toolbar with a very very very very very very very very very long title"), btn(__WEBPACK_IMPORTED_MODULE_5_mmsvg_google_msvg_navigation_refresh___default.a), btn(__WEBPACK_IMPORTED_MODULE_6_mmsvg_google_msvg_content_add___default.a)];

var toolbarTitleAsSpan = [btn(__WEBPACK_IMPORTED_MODULE_4_mmsvg_google_msvg_navigation_menu___default.a), __WEBPACK_IMPORTED_MODULE_0_mithril___default()("span", "Toolbar with a very very very long title"), btn(__WEBPACK_IMPORTED_MODULE_6_mmsvg_google_msvg_content_add___default.a)];

var toolbarTitleAtStart = [__WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", { class: __WEBPACK_IMPORTED_MODULE_1_polythene_toolbar__["b" /* classes */].title }, "Title"), btn(__WEBPACK_IMPORTED_MODULE_6_mmsvg_google_msvg_content_add___default.a)];

var toolbarRowIndentedTitle = [__WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", { class: __WEBPACK_IMPORTED_MODULE_1_polythene_toolbar__["b" /* classes */].indentedTitle }, "Indented title"), btn(__WEBPACK_IMPORTED_MODULE_6_mmsvg_google_msvg_content_add___default.a)];

var tests = [{
  name: "Child node",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_toolbar__["a" /* default */],
  attrs: null,
  children: toolbarRow
}, {
  name: "Option: content",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_toolbar__["a" /* default */],
  attrs: {
    content: toolbarRow
  }
}, {
  name: "Option: compact",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_toolbar__["a" /* default */],
  attrs: {
    compact: true,
    content: toolbarRow
  }
}, {
  name: "Title as span",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_toolbar__["a" /* default */],
  attrs: {
    content: toolbarTitleAsSpan
  }
}, {
  name: "Indented title",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_toolbar__["a" /* default */],
  attrs: {
    content: toolbarRowIndentedTitle
  }
}, {
  name: "Title at start",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_toolbar__["a" /* default */],
  attrs: {
    content: toolbarTitleAtStart
  }
}, {
  name: "Option: shadow",
  class: "small-result",
  component: {
    view: function view() {
      return __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
        style: {
          position: "relative"
        }
      }, [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_toolbar__["a" /* default */], toolbarRow), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_3_polythene_shadow__["a" /* default */])]);
    }
  }
}, {
  name: "Option: style (colors and height)",
  class: "small-result",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_toolbar__["a" /* default */],
  attrs: {
    content: toolbarRow,
    style: {
      backgroundColor: "#EF6C00",
      color: "#fff",
      height: "72px"
    }
  }
},

// Dark theme

{
  name: "Option: content -- dark theme class",
  class: "pe-dark-theme",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_toolbar__["a" /* default */],
  attrs: {
    content: toolbarRow
  }
}, {
  name: "Themed -- dark theme class",
  class: "pe-dark-theme",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_toolbar__["a" /* default */],
  attrs: {
    class: "tests-toolbar-themed-toolbar",
    content: toolbarRow
  }
}, {
  name: "Dark theme class + light theme class",
  class: "pe-dark-theme",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_toolbar__["a" /* default */],
  attrs: {
    content: toolbarRow,
    class: "pe-light-theme"
  }
}, {
  name: "Dark theme class + light tone",
  class: "test-dark-theme",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene_toolbar__["a" /* default */],
  attrs: {
    content: toolbarRow,
    tone: "light"
  }
}];

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_icon__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_shadow__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_list_tile__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_polythene_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_polythene_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_polythene_theme__ = __webpack_require__(2);
/* unused harmony export classes */
/* unused harmony export vars */








var rgba = __WEBPACK_IMPORTED_MODULE_6_polythene_theme__["a" /* vars */].rgba;

var padding_v = 24;
var padding_actions_v = 8;
var actions_button_margin_v = 2;

var vars$1 = {
  image_size_small: 1 * 80,
  image_size_regular: 1.4 * 80,
  image_size_medium: 2 * 80,
  image_size_large: 3 * 80,
  border_radius: __WEBPACK_IMPORTED_MODULE_6_polythene_theme__["a" /* vars */].unit_block_border_radius,
  padding_h: 16,
  offset_small_padding_v: padding_v - 16,
  padding_actions_h: 8,
  title_padding_h: 16,
  title_padding_v: 24,
  tight_title_padding_bottom: 16,
  text_padding_h: 16,
  text_padding_v: 16,
  text_padding_bottom: 24,
  tight_text_padding_bottom: 16,
  subtitle_line_height_padding_bottom: 7,
  text_line_height_padding_top: 6,
  text_line_height_padding_bottom: 7,
  one_line_height_with_icon: 72,
  icon_element_width: 72 - 4,
  one_line_padding_v: 8,
  actions_padding_v: padding_actions_v - 6,
  actions_button_margin_v: actions_button_margin_v,
  actions_vertical_padding_v: padding_actions_v - actions_button_margin_v,

  color_light_main_background: rgba(__WEBPACK_IMPORTED_MODULE_6_polythene_theme__["a" /* vars */].color_light_background),
  color_light_title_text: rgba(__WEBPACK_IMPORTED_MODULE_6_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_6_polythene_theme__["a" /* vars */].blend_light_text_primary),
  color_light_subtitle_text: rgba(__WEBPACK_IMPORTED_MODULE_6_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_6_polythene_theme__["a" /* vars */].blend_light_text_secondary),
  color_light_text: rgba(__WEBPACK_IMPORTED_MODULE_6_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_6_polythene_theme__["a" /* vars */].blend_light_text_regular),
  color_light_actions_border: rgba(__WEBPACK_IMPORTED_MODULE_6_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_6_polythene_theme__["a" /* vars */].blend_light_border_light),
  color_light_overlay_background: rgba(__WEBPACK_IMPORTED_MODULE_6_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_6_polythene_theme__["a" /* vars */].blend_light_overlay_background),

  color_dark_main_background: rgba(__WEBPACK_IMPORTED_MODULE_6_polythene_theme__["a" /* vars */].color_dark_background),
  color_dark_title_text: rgba(__WEBPACK_IMPORTED_MODULE_6_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_6_polythene_theme__["a" /* vars */].blend_dark_text_primary),
  color_dark_subtitle_text: rgba(__WEBPACK_IMPORTED_MODULE_6_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_6_polythene_theme__["a" /* vars */].blend_dark_text_secondary),
  color_dark_text: rgba(__WEBPACK_IMPORTED_MODULE_6_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_6_polythene_theme__["a" /* vars */].blend_dark_text_regular),
  color_dark_actions_border: rgba(__WEBPACK_IMPORTED_MODULE_6_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_6_polythene_theme__["a" /* vars */].blend_dark_border_light),
  color_dark_overlay_background: rgba(__WEBPACK_IMPORTED_MODULE_6_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_6_polythene_theme__["a" /* vars */].blend_dark_overlay_background)
};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var layout = (function (selector, componentVars) {
  return [_defineProperty({}, selector, {
    display: "block",
    position: "relative",
    borderRadius: componentVars.border_radius + "px",

    "&, a:link, a:visited": {
      textDecoration: "none"
    },

    " .pe-card__content": {
      position: "relative",
      borderRadius: "inherit",
      overflow: "hidden",
      width: "inherit",
      height: "inherit"
    },

    " .pe-card__media": {
      position: "relative",
      overflow: "hidden",
      borderTopLeftRadius: "inherit",
      borderTopRightRadius: "inherit",
      zIndex: 1, // makes rounded corners on absolute images work (without this, no rounded image)

      "&.pe-card__media--landscape": {
        paddingBottom: Math.floor(100 / 16 * 9) + "%"
      },
      "&.pe-card__media--square": {
        paddingBottom: "100%"
      },
      "&:last-child": {
        "&, img": {
          borderBottomLeftRadius: componentVars.border_radius + "px",
          borderBottomRightRadius: componentVars.border_radius + "px"
        }
      },
      " img": [__WEBPACK_IMPORTED_MODULE_5_polythene_css__["c" /* mixin */].fit(), {
        display: "none",
        width: "100%",
        maxWidth: "initial",

        "&.pe-card__media--crop-x": {
          width: "100%",
          height: "auto",
          display: "block"
        },
        "&.pe-card__media--crop-y": {
          height: "100%",
          width: "auto",
          display: "block"
        }
      }]
    },

    " .pe-card__header + .pe-card__media": {
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0
    },

    " .pe-card__primary-media": {
      margin: "16px 16px 0 16px",

      " .pe-card__media--small": {
        width: componentVars.image_size_small + "px"
      },
      " .pe-card__media--regular": {
        width: componentVars.image_size_regular + "px"
      },
      " .pe-card__media--medium": {
        width: componentVars.image_size_medium + "px"
      },
      " .pe-card__media--large": {
        width: componentVars.image_size_large + "px",
        marginBottom: "16px"
      },
      " .pe-card__media": {
        "&, img": {
          borderRadius: 0
        }
      },

      " .shadow + &": {
        // first child
        "&, img": {
          borderTopLeftRadius: componentVars.border_radius + "px",
          borderTopRightRadius: componentVars.border_radius + "px"
        }
      }
    },

    " .pe-card__overlay": __WEBPACK_IMPORTED_MODULE_5_polythene_css__["c" /* mixin */].fit(),

    " .pe-card__media__dimmer": [__WEBPACK_IMPORTED_MODULE_5_polythene_css__["c" /* mixin */].fit(), {
      zIndex: 1
    }],

    " .pe-card__overlay__content": {
      position: "absolute",
      bottom: 0,
      top: "auto",
      right: 0,
      left: 0,
      zIndex: 2
    },

    " .pe-card__header": {
      height: componentVars.one_line_height_with_icon + "px",

      " .pe-list-tile__title": {
        fontSize: "14px",
        fontWeight: __WEBPACK_IMPORTED_MODULE_6_polythene_theme__["a" /* vars */].font_weight_normal,
        lineHeight: "20px",
        marginTop: "2px"
      },
      " .pe-list-tile__subtitle": {
        marginTop: "-1px"
      }
    },

    " .pe-card__primary": [__WEBPACK_IMPORTED_MODULE_5_polythene_css__["a" /* flex */].layoutHorizontal, {
      position: "relative",

      "&.pe-card__primary--media:not(:last-child)": {
        paddingBottom: "16px"
      },
      "&.pe-card__primary--media + .pe-card__actions": {
        marginTop: "-16px"
      },
      "& + .pe-card__text": {
        marginTop: "-16px"
      },
      "&.pe-card__primary--tight": {
        " .pe-card__title": {
          paddingBottom: componentVars.tight_title_padding_bottom - componentVars.subtitle_line_height_padding_bottom + "px"
        }
      }
    }],
    " .pe-card__title": [__WEBPACK_IMPORTED_MODULE_5_polythene_css__["a" /* flex */].flex(), {
      padding: [componentVars.title_padding_v, componentVars.title_padding_h, componentVars.title_padding_v - componentVars.subtitle_line_height_padding_bottom, componentVars.title_padding_h].map(function (v) {
        return v + "px";
      }).join(" "),
      fontSize: "24px",
      lineHeight: "29px"
    }],
    " .pe-card__subtitle": {
      fontSize: "14px",
      lineHeight: "24px"
    },

    " .pe-card__actions": [{
      minHeight: 36 + 2 * 8 + "px",
      padding: componentVars.actions_padding_v + "px" + " " + componentVars.padding_actions_h + "px",

      "&.pe-card__actions--tight": {
        minHeight: 0,
        padding: 0
      },
      "&.pe-card__actions--horizontal:not(.pe-card__actions--justified)": [__WEBPACK_IMPORTED_MODULE_5_polythene_css__["a" /* flex */].layoutHorizontal, __WEBPACK_IMPORTED_MODULE_5_polythene_css__["a" /* flex */].layoutCenter, {
        " :first-child": {
          marginLeft: 0
        },
        " .pe-button": {
          minWidth: 0
        },
        " .pe-button--icon": {
          marginRight: "8px"
        }
      }],

      "&.pe-card__actions--justified": [__WEBPACK_IMPORTED_MODULE_5_polythene_css__["a" /* flex */].layoutJustified],

      "&.pe-card__actions--vertical": [__WEBPACK_IMPORTED_MODULE_5_polythene_css__["a" /* flex */].layoutVertical, {
        ":not(.pe-card__actions--tight)": {
          // vertical flex layout
          paddingTop: componentVars.actions_vertical_padding_v + "px",
          paddingBottom: componentVars.actions_vertical_padding_v + "px"
        },

        // nested
        " .pe-card__actions": [{
          marginLeft: -componentVars.padding_actions_h + "px",
          marginRight: -componentVars.padding_actions_h + "px",
          minHeight: 0,

          "&:first-child": {
            marginTop: -componentVars.actions_vertical_padding_v + "px"
          },
          "&:last-child": {
            marginBottom: -componentVars.actions_vertical_padding_v + "px"
          }
        }],

        " .pe-button": {
          height: "36px",
          padding: 0,
          marginTop: componentVars.actions_button_margin_v + "px",
          marginBottom: componentVars.actions_button_margin_v + "px"
        },
        " .pe-list": {
          padding: 0
        }
      }]
    }],

    " .pe-card__text": {
      paddingTop: componentVars.text_padding_v - componentVars.text_line_height_padding_top + "px",
      paddingRight: componentVars.text_padding_h + "px",
      paddingLeft: componentVars.text_padding_h + "px",
      paddingBottom: componentVars.tight_text_padding_bottom - componentVars.text_line_height_padding_bottom + "px",
      fontSize: "14px",
      lineHeight: "24px",

      "&:last-child": {
        paddingBottom: componentVars.text_padding_bottom - componentVars.text_line_height_padding_bottom + "px"
      },
      "&.pe-card__text--tight, &.pe-card__text--tight:last-child": {
        paddingBottom: componentVars.tight_text_padding_bottom - componentVars.text_line_height_padding_bottom + "px"
      },
      " .pe-card__actions + &": {
        marginTop: "8px"
      }
    },

    " .pe-card__text, .pe-card__primary": {
      "& + .pe-card__actions:not(:last-child)": {
        marginTop: -(componentVars.offset_small_padding_v + 1) + "px",
        marginBottom: -(componentVars.offset_small_padding_v - 1) + "px"
      }
    }
  })];
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var baseStyle = function baseStyle(scopes, selector, componentVars, tint) {
  return [_defineProperty$1({}, scopes.map(function (s) {
    return s + selector;
  }).join(","), {
    backgroundColor: componentVars["color_" + tint + "_main_background"]
  })];
};

var contentStyle = function contentStyle(scopes, selector, componentVars, tint) {
  return [_defineProperty$1({}, scopes.map(function (s) {
    return s + selector;
  }).join(","), {
    " .pe-card__title": {
      color: componentVars["color_" + tint + "_title_text"]
    },
    " .pe-card__subtitle": {
      color: componentVars["color_" + tint + "_subtitle_text"]
    },
    " .pe-card__text": {
      color: componentVars["color_" + tint + "_text"]
    },
    " .pe-card__actions--borders": {
      borderTop: "1px solid " + componentVars["color_" + tint + "_actions_border"]
    }
  })];
};

var overlayStyle = function overlayStyle(scopes, selector, componentVars, tint) {
  return [_defineProperty$1({}, scopes.map(function (s) {
    return s + ".pe-card__overlay--sheet";
  }).join(","), {
    " .pe-card__overlay__content": {
      backgroundColor: componentVars["color_" + tint + "_overlay_background"]
    }
  })];
};

var color = (function (selector, componentVars) {
  return [baseStyle([".pe-dark-theme", ".pe-dark-theme "], selector, componentVars, "dark"), // has/inside dark theme
  baseStyle(["", ".pe-light-theme", ".pe-light-theme "], selector, componentVars, "light"), // normal, has/inside light theme

  contentStyle([".pe-dark-theme", ".pe-dark-theme "], selector, componentVars, "dark"), // has/inside dark theme
  contentStyle(["", ".pe-light-theme", ".pe-light-theme "], selector, componentVars, "light"), // normal, has/inside light theme

  overlayStyle([".pe-dark-theme", ".pe-dark-theme "], selector, componentVars, "dark"), // has/inside dark theme
  overlayStyle(["", ".pe-light-theme", ".pe-light-theme "], selector, componentVars, "light")];
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [layout, color];
var selector = ".pe-card";

var customTheme = function customTheme(customSelector, customVars) {
  return __WEBPACK_IMPORTED_MODULE_5_polythene_css__["b" /* styler */].generateStyles([customSelector, selector], _extends$1({}, vars$1, customVars), fns);
};

__WEBPACK_IMPORTED_MODULE_5_polythene_css__["b" /* styler */].generateStyles([selector], vars$1, fns);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var classes = {
  component: "pe-card",
  content: "pe-card__content",
  overlay: "pe-card__overlay",
  overlaySheet: "pe-card__overlay--sheet",
  overlayContent: "pe-card__overlay__content",
  mediaDimmer: "pe-card__media__dimmer",
  mediaCropX: "pe-card__media--crop-x",
  mediaCropY: "pe-card__media--crop-y",
  media: "pe-card__media",
  header: "pe-card__header",
  headerTitle: "pe-card__header-title",
  title: "pe-card__title",
  subtitle: "pe-card__subtitle",
  text: "pe-card__text",
  textTight: "pe-card__text--tight",
  primary: "pe-card__primary",
  primaryMedia: "pe-card__primary-media",
  primaryTight: "pe-card__primary--tight",
  actions: "pe-card__actions",
  actionsHorizontal: "pe-card__actions--horizontal",
  actionsVertical: "pe-card__actions--vertical",
  actionsJustified: "pe-card__actions--justified",
  actionsBordered: "pe-card__actions--borders",
  actionsTight: "pe-card__actions--tight",
  mediaRatioSquare: "pe-card__media--square",
  mediaRatioLandscape: "pe-card__media--landscape",
  primaryHasMedia: "pe-card__primary--media",
  mediaSmall: "pe-card__media--small",
  mediaRegular: "pe-card__media--regular",
  mediaMedium: "pe-card__media--medium",
  mediaLarge: "pe-card__media--large"
};

var imageRatios = {
  landscape: 16 / 9,
  square: 1
};

var createOverlay = function createOverlay() {
  var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var element = attrs.element || "div";
  var content = attrs.content.map(function (o) {
    var key = Object.keys(o)[0];
    return contentMap[key](o);
  });
  return __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
    class: [classes.overlay, attrs.sheet ? classes.overlaySheet : null].join(" ")
  }, [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(element, {
    class: [classes.overlayContent, attrs.class].join(" ")
  }, content), __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
    class: classes.mediaDimmer
  })]);
};

var createText = function createText(o) {
  var attrs = o.text || {};
  var element = attrs.element || "div";
  return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(element, {
    class: [classes.text, attrs.tight ? classes.textTight : null, attrs.class].join(" ")
  }, attrs.content);
};

// media type to class

var mediaTypeClasses = {
  small: classes.mediaSmall,
  regular: classes.mediaRegular,
  medium: classes.mediaMedium,
  large: classes.mediaLarge
};

var mediaClassForType = function mediaClassForType() {
  var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "regular";
  return mediaTypeClasses[mode];
};

var createMedia = function createMedia(o) {
  var attrs = o.media || {};
  var ratio = attrs.ratio || "landscape";
  var origin = attrs.origin || "center";
  var element = attrs.element || "div";
  var initImage = function initImage(_ref) {
    var dom = _ref.dom;

    var img = dom.querySelector("img");
    if (img) {
      img.onload = function () {
        var w = this.naturalWidth;
        var h = this.naturalHeight;
        var naturalRatio = w / h;
        // crop-x: crop over x axis
        // crop-y: crop over y axis
        var cropClass = naturalRatio < imageRatios[ratio] ? classes.mediaCropX : classes.mediaCropY;
        img.className = cropClass;

        var containerWidth = dom.clientWidth;
        var containerHeight = dom.clientHeight;

        if (naturalRatio < imageRatios[ratio]) {
          // orient on y axis
          if (origin === "center") {
            var imageHeight = containerWidth / naturalRatio;
            var diff = containerHeight - imageHeight;
            var offset = diff / 2;
            this.style.marginTop = offset + "px";
          } else if (origin === "start") {
            this.style.top = 0;
            this.style.bottom = "auto";
          } else {
            // end
            this.style.top = "auto";
            this.style.bottom = 0;
          }
        } else {
          // orient on x axis
          if (origin === "center") {
            var imageWidth = containerHeight * naturalRatio;
            var _diff = containerWidth - imageWidth;
            var _offset = _diff / 2;
            this.style.marginLeft = _offset + "px";
          } else if (origin === "start") {
            this.style.left = 0;
            this.style.right = "auto";
          } else {
            // end
            this.style.left = "auto";
            this.style.right = 0;
          }
        }
      };
    }
  };

  return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(element, {
    class: [classes.media, mediaClassForType(attrs.type), ratio === "landscape" ? classes.mediaRatioLandscape : classes.mediaRatioSquare, attrs.class].join(" "),
    oncreate: initImage
  }, [attrs.content, attrs.overlay ? createOverlay(attrs.overlay) : __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", { class: classes.mediaDimmer })]);
};

var createHeader = function createHeader(o) {
  var attrs = o.header || {};
  return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_3_polythene_list_tile__["a" /* default */], _extends({}, attrs, {
    class: [classes.header, attrs.class].join(" ")
  }, attrs.icon ? { front: __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_icon__["a" /* default */], attrs.icon) } : null));
};

var actionLayoutClasses = {
  horizontal: classes.actionsHorizontal,
  vertical: classes.actionsVertical,
  justified: classes.actionsJustified
};

var actionClassForLayout = function actionClassForLayout() {
  var layout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "horizontal";
  return actionLayoutClasses[layout];
};

var createActions = function createActions(o) {
  var attrs = o.actions || {};
  var element = attrs.element || "div";
  return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(element, {
    class: [classes.actions, actionClassForLayout(attrs.layout), attrs.bordered ? classes.actionsBordered : null, attrs.tight ? classes.actionsTight : null, attrs.class].join(" ")
  }, attrs.content);
};

var createPrimary = function createPrimary(o) {
  var content = void 0,
      key = void 0,
      partOpts = void 0;
  var attrs = o.primary || {};
  var element = attrs.element || "div";
  var primaryHasMedia = false;

  var lookup = {
    title: function title(pops) {
      return pops.attrs ? pops : __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", { class: classes.title }, [pops.title ? pops.title : null, pops.subtitle ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", { class: classes.subtitle }, pops.subtitle) : null]);
    },
    media: function media(pops) {
      primaryHasMedia = true;
      return __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
        class: classes.primaryMedia
      }, createMedia({
        media: pops
      }));
    },
    actions: function actions(pops) {
      return createActions({
        actions: pops
      });
    }
  };

  if (Array.isArray(attrs.content)) {
    content = attrs.content.map(function (part) {
      key = Object.keys(part)[0];
      partOpts = part[key];
      if (lookup[key]) {
        return lookup[key](partOpts);
      } else {
        return part;
      }
    });
  } else {
    // shorthand for simple primary titles
    content = [attrs.title ? lookup.title({
      title: attrs.title,
      subtitle: attrs.subtitle
    }) : null, attrs.media ? lookup.media(attrs.media) : null, attrs.actions ? lookup.actions(attrs.actions) : null, attrs.content];
  }
  return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(element, {
    class: [classes.primary, attrs.tight ? classes.primaryTight : null, primaryHasMedia ? classes.primaryHasMedia : null].join(" ")
  }, content);
};

var contentMap = {
  text: createText,
  media: createMedia,
  header: createHeader,
  primary: createPrimary,
  actions: createActions
};

var view = function view(_ref2) {
  var attrs = _ref2.attrs;

  var element = attrs.element || attrs.url ? "a" : "div";
  var props = _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_polythene_core__["c" /* filterSupportedAttributes */])(attrs), {
    class: [classes.component, attrs.tone === "dark" ? "pe-dark-theme" : null, attrs.tone === "light" ? "pe-light-theme" : null, attrs.class].join(" ")
  }, attrs.url ? attrs.url : null, attrs.events ? attrs.events : null);

  var contents = Array.isArray(attrs.content) ? attrs.content.map(function (attr) {
    var key = Object.keys(attr)[0];
    if (!contentMap[key]) {
      throw "Content type \"" + key + "\" does not exist";
    }
    return contentMap[key](attr);
  }) : attrs.content;

  var content = [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_shadow__["a" /* default */], {
    z: attrs.z !== undefined ? attrs.z : 1,
    animated: true
  }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
    class: classes.content
  }, contents)];
  return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(element, props, [attrs.before, content, attrs.after]);
};

var card = {
  theme: customTheme, // accepts (selector, vars)
  view: view
};

/* harmony default export */ __webpack_exports__["a"] = (card);


/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_selection_control__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_css__ = __webpack_require__(1);
/* unused harmony reexport vars */
/* unused harmony export classes */




var layout$1 = (function (selector, componentVars) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_polythene_selection_control__["b" /* layout */])(selector, componentVars, "checkbox");
});

var color$1 = (function (selector, componentVars) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_polythene_selection_control__["d" /* color */])(selector, componentVars);
});

var iconOff = __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.trust("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z\"/></svg>");

var iconOn = __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.trust("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z\"/></svg>");

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [layout$1, color$1];
var selector = ".pe-control.pe-checkbox-control";

var customTheme = function customTheme(customSelector, customVars) {
  return __WEBPACK_IMPORTED_MODULE_2_polythene_css__["b" /* styler */].generateStyles([customSelector, selector], _extends$1({}, __WEBPACK_IMPORTED_MODULE_1_polythene_selection_control__["a" /* vars */], customVars), fns);
};

__WEBPACK_IMPORTED_MODULE_2_polythene_css__["b" /* styler */].generateStyles([selector], __WEBPACK_IMPORTED_MODULE_1_polythene_selection_control__["a" /* vars */], fns);

var theme = {
  iconOff: iconOff,
  iconOn: iconOn
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var classes = {
  component: "pe-checkbox-control"
};

var view = function view(vnode) {
  return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_selection_control__["c" /* selectionControl */], _extends({}, vnode.attrs, {
    theme: theme,
    controlView: __WEBPACK_IMPORTED_MODULE_1_polythene_selection_control__["e" /* controlView */],
    selectable: vnode.attrs.selectable || function () {
      return true;
    }, // default: always selectable, regardless the checked state
    defaultClass: classes.component,
    type: "checkbox"
  }));
};

var checkbox = {
  theme: customTheme, // accepts (selector, vars)
  view: view
};

/* harmony default export */ __webpack_exports__["a"] = (checkbox);


/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_css__ = __webpack_require__(1);


var flex$1 = [{
  ".layout, .layout.horizontal": __WEBPACK_IMPORTED_MODULE_0_polythene_css__["a" /* flex */].layout,
  ".layout.horizontal.inline, .layout.vertical.inline": __WEBPACK_IMPORTED_MODULE_0_polythene_css__["a" /* flex */].layoutInline,
  ".layout.horizontal": __WEBPACK_IMPORTED_MODULE_0_polythene_css__["a" /* flex */].layoutHorizontal,
  ".layout.horizontal.reverse": __WEBPACK_IMPORTED_MODULE_0_polythene_css__["a" /* flex */].layoutHorizontalReverse,
  ".layout.vertical": __WEBPACK_IMPORTED_MODULE_0_polythene_css__["a" /* flex */].layoutVertical,
  ".layout.vertical.reverse": __WEBPACK_IMPORTED_MODULE_0_polythene_css__["a" /* flex */].layoutVerticalReverse,
  ".layout.wrap": __WEBPACK_IMPORTED_MODULE_0_polythene_css__["a" /* flex */].layoutWrap,
  ".layout.wrap.reverse": __WEBPACK_IMPORTED_MODULE_0_polythene_css__["a" /* flex */].layoutWrapReverse,
  ".flex": __WEBPACK_IMPORTED_MODULE_0_polythene_css__["a" /* flex */].flex(1),
  ".span.flex": { "display": "block" }, // for IE 10
  ".flex.auto-vertical": __WEBPACK_IMPORTED_MODULE_0_polythene_css__["a" /* flex */].flexAutoVertical,
  ".flex.auto": __WEBPACK_IMPORTED_MODULE_0_polythene_css__["a" /* flex */].flexAuto,
  ".flex.none": __WEBPACK_IMPORTED_MODULE_0_polythene_css__["a" /* flex */].flexIndex("none"),
  ".flex.one": __WEBPACK_IMPORTED_MODULE_0_polythene_css__["a" /* flex */].flexIndex(1),
  ".flex.two": __WEBPACK_IMPORTED_MODULE_0_polythene_css__["a" /* flex */].flexIndex(2),
  ".flex.three": __WEBPACK_IMPORTED_MODULE_0_polythene_css__["a" /* flex */].flexIndex(3),
  ".flex.four": __WEBPACK_IMPORTED_MODULE_0_polythene_css__["a" /* flex */].flexIndex(4),
  ".flex.five": __WEBPACK_IMPORTED_MODULE_0_polythene_css__["a" /* flex */].flexIndex(5),
  ".flex.six": __WEBPACK_IMPORTED_MODULE_0_polythene_css__["a" /* flex */].flexIndex(6),
  ".flex.seven": __WEBPACK_IMPORTED_MODULE_0_polythene_css__["a" /* flex */].flexIndex(7),
  ".flex.eight": __WEBPACK_IMPORTED_MODULE_0_polythene_css__["a" /* flex */].flexIndex(8),
  ".flex.nine": __WEBPACK_IMPORTED_MODULE_0_polythene_css__["a" /* flex */].flexIndex(9),
  ".flex.ten": __WEBPACK_IMPORTED_MODULE_0_polythene_css__["a" /* flex */].flexIndex(10),
  ".flex.eleven": __WEBPACK_IMPORTED_MODULE_0_polythene_css__["a" /* flex */].flexIndex(11),
  ".flex.twelve": __WEBPACK_IMPORTED_MODULE_0_polythene_css__["a" /* flex */].flexIndex(12),

  // alignment in cross axis
  ".layout.start": __WEBPACK_IMPORTED_MODULE_0_polythene_css__["a" /* flex */].layoutStart,
  ".layout.center, .layout.center-center": __WEBPACK_IMPORTED_MODULE_0_polythene_css__["a" /* flex */].layoutCenter,
  ".layout.end": __WEBPACK_IMPORTED_MODULE_0_polythene_css__["a" /* flex */].layoutEnd,

  // alignment in main axis
  ".layout.start-justified": __WEBPACK_IMPORTED_MODULE_0_polythene_css__["a" /* flex */].layoutStartJustified,
  ".layout.center-justified, .layout.center-center": __WEBPACK_IMPORTED_MODULE_0_polythene_css__["a" /* flex */].layoutCenterJustified,
  ".layout.end-justified": __WEBPACK_IMPORTED_MODULE_0_polythene_css__["a" /* flex */].layoutEndJustified,
  ".layout.around-justified": __WEBPACK_IMPORTED_MODULE_0_polythene_css__["a" /* flex */].layoutAroundJustified,
  ".layout.justified": __WEBPACK_IMPORTED_MODULE_0_polythene_css__["a" /* flex */].layoutJustified,

  // self alignment
  ".self-start": __WEBPACK_IMPORTED_MODULE_0_polythene_css__["a" /* flex */].selfStart,
  ".self-center": __WEBPACK_IMPORTED_MODULE_0_polythene_css__["a" /* flex */].selfCenter,
  ".self-end": __WEBPACK_IMPORTED_MODULE_0_polythene_css__["a" /* flex */].selfEnd,
  ".self-stretch": __WEBPACK_IMPORTED_MODULE_0_polythene_css__["a" /* flex */].selfStretch
}];

var commonStyle = [{
  ".pe-block": {
    display: "block"
  },

  ".pe-inline-block": {
    display: "inline-block"
  },

  // ie support for hidden
  ".pe-hidden": {
    display: "none !important"
  },

  ".pe-relative": {
    position: "relative"
  },

  ".pe-absolute": {
    position: "absolute"
  },

  ".pe-fit": {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },

  ".pe-fullbleed": {
    margin: 0,
    height: "100vh"
  }
}];

__WEBPACK_IMPORTED_MODULE_0_polythene_css__["b" /* styler */].add("pe-layout", flex$1, commonStyle);


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

// Derived from Lea Verou's PrefixFree

var allStyles;
var styleAttr;
var styleElement;
var supportedProperty;
var supportedDecl;

function init() {
  allStyles = getComputedStyle(document.documentElement, null);
  styleAttr = document.createElement('div').style;
  styleElement = document.documentElement.appendChild(document.createElement('style'));
  supportedDecl = _supportedDecl;
  supportedProperty = _supportedProperty;
  if ('zIndex' in styleAttr && !('z-index' in styleAttr)) {
    // Some browsers like it dash-cased, some camelCased, most like both.
    supportedDecl = function(property, value) {return _supportedDecl(camelCase(property), value)};
    supportedProperty = function(property) {return _supportedProperty(camelCase(property))};
  }
}
function finalize() {
  if (typeof document !== 'undefined') document.documentElement.removeChild(styleElement);
  // `styleAttr` is used at run time via `supportedProperty()`
  // `allStyles` and `styleElement` can be displosed of after initialization.
  allStyles = styleElement = null;
}
// Helpers, in alphabetic order

function camelCase(str) {
  return str.replace(/-([a-z])/g, function($0, $1) { return $1.toUpperCase() }).replace('-','')
}
function deCamelCase(str) {
  return str.replace(/[A-Z]/g, function($0) { return '-' + $0.toLowerCase() })
}
function _supportedDecl(property, value) {
  styleAttr[property] = '';
  styleAttr[property] = value;
  return !!styleAttr[property]
}
function supportedMedia(condition) {
  styleElement.textContent = '@media (' + condition +'){}';
  // Opera 11 treats unknown conditions as 'all', the rest as 'not all'.
  // So far tested in modern browsers (01/01/2017), and desktop IE9, FF4,
  // Opera 11/12, and Safari 6. TY SauceLabs.
  return !/^@media(?:\s+not)?\s+all/.test(styleElement.sheet.cssRules[0].cssText)
}
function _supportedProperty(property) {
  return property in styleAttr
}
function supportedRule(selector) {
  styleElement.textContent = selector + '{}';
  return !!styleElement.sheet.cssRules.length
}

// Derived from Lea Verou's PrefixFree

// TODO: http://caniuse.com/#feat=css-media-resolution

function detectAtrules(fixers) {
  if (fixers.prefix === '') return
  var atrules = {
    'keyframes': 'name',
    'viewport': null,
    'document': 'regexp(".")'
  };

  // build a map of {'@ruleX': '@-prefix-ruleX'}
  for(var atrule in atrules) {
    var test = atrule + ' ' + (atrules[atrule] || '');
    if (!supportedRule('@' + test) && supportedRule('@' + fixers.prefix + test)) {

      fixers.hasAtrules = true;
      fixers.atrules['@' + atrule] = '@' + fixers.prefix + atrule;
    }
  }

  // Standard
  fixers.hasDppx = supportedMedia('resolution:1dppx');
  // Webkit
  fixers.hasPixelRatio = supportedMedia(fixers.prefix + 'device-pixel-ratio:1');
  // Opera
  fixers.hasPixelRatioFraction = supportedMedia(fixers.prefix + 'device-pixel-ratio:1/1');

  if (fixers.hasPixelRatio || fixers.hasPixelRatioFraction) {
    fixers.properties['resolution'] = fixers.prefix + 'device-pixel-ratio';
    fixers.properties['min-resolution'] = fixers.prefix + 'min-device-pixel-ratio';
    fixers.properties['max-resolution'] = fixers.prefix + 'max-device-pixel-ratio';
    if (supportedMedia('min-' + fixers.prefix + 'device-pixel-ratio:1')) {
      // Mozilla/Firefox tunred a vendor prefix into a vendor infix
      fixers.properties['min-resolution'] = 'min-' + fixers.prefix + 'device-pixel-ratio';
      fixers.properties['max-resolution'] = 'max-' + fixers.prefix + 'device-pixel-ratio';
    }
  }
}

// Derived from Lea Verou's PrefixFree

function detectFunctions(fixers) {
  // Values that might need prefixing
  if (fixers.prefix === '') return
  var functions = {
    'linear-gradient': {
      property: 'background-image',
      params: 'red, teal'
    },
    'calc': {
      property: 'width',
      params: '1px + 5%'
    },
    'element': {
      property: 'background-image',
      params: '#foo'
    },
    'cross-fade': {
      property: 'backgroundImage',
      params: 'url(a.png), url(b.png), 50%'
    }
  };
  functions['repeating-linear-gradient'] =
  functions['repeating-radial-gradient'] =
  functions['radial-gradient'] =
  functions['linear-gradient'];

  // build an array of prefixable functions
  for (var func in functions) {
    var test = functions[func],
      property = test.property,
      value = func + '(' + test.params + ')';

    if (!supportedDecl(property, value) && supportedDecl(property, fixers.prefix + value)) {
      // It's only supported with a prefix
      fixers.functions.push(func);
    }
  }
}

// Derived from Lea Verou's PrefixFree and Robin Frischmann's Inline Style Prefixer

// TODO: http://caniuse.com/#feat=css-writing-mode

// db of prop/value pairs whose values may need treatment.

var keywords = [

  // `initial` applies to all properties and is thus handled separately.
  {
    props: ['cursor'],
    values: [ 'grab', 'grabbing', 'zoom-in', 'zoom-out']
  },
  {
    props: ['display'],
    values:['box', 'inline-box', 'flexbox', 'inline-flexbox', 'flex', 'inline-flex', 'grid', 'inline-grid']
  },
  {
    props: ['position'],
    values: [ 'sticky' ]
  },
  {
    props: ['width', 'column-width', 'height', 'max-height', 'max-width', 'min-height', 'min-width'],
    values: ['contain-floats', 'fill-available', 'fit-content', 'max-content', 'min-content']
  }
];
// The flexbox zoo
//
// ## Specs:
// - box     (2009/old):  https://www.w3.org/TR/2009/WD-css3-flexbox-20090723/
// - flexbox (2012/ie10): https://www.w3.org/TR/2012/WD-css3-flexbox-20120322/
// - flex    (final):     https://www.w3.org/TR/css-flexbox-1/
var flex2009Props = {
  // ?align-content =>
  // ?align-self =>
  'align-items': 'box-align',
  'flex': 'box-flex', // https://css-tricks.com/snippets/css/a-guide-to-flexbox/#comment-371025,
  // ?flex-basis =>
  // !!flex-direction => box-direction + box-orient, covered in `plugin.js`
  'box-direction' : 'box-direction', // we prepopulate the cache for the above case.
  'box-orient': 'box-orient',
  // !!flex-flow => flex-direction and/or flex-wrap, covered in `plugin.js`
  // ?flex-grow =>
  // ?flex-shrink =>
  'flex-wrap': 'box-lines',
  'justify-content': 'box-pack',
  'order': 'box-ordinal-group' // https://css-tricks.com/snippets/css/a-guide-to-flexbox/#comment-371025
};
var flex2009Values = {
  // flex => box || only for display? handled in the code
  'flex-end': 'end',
  'flex-start': 'start',
  // inline-flex => inline-box || see flex
  'nowrap': 'single',
  'space-around': 'justify',
  'space-between': 'justify',
  'wrap': 'multiple',
  'wrap-reverse': 'multiple'
};
var flex2012Props = {
  'align-content': '-ms-flex-line-pack',
  'align-items': '-ms-flex-align',
  'align-self': '-ms-flex-item-align',
  // flex => -ms-flex
  'flex-basis': '-ms-preferred-size',
  // flex-direction => -ms-flex-direction
  // flex-flow => -ms-flex-flow
  'flex-grow': '-ms-flex-positive',
  'flex-shrink': '-ms-flex-negative',
  // flex-wrap => -ms-flex-wrap
  'justify-content': '-ms-flex-pack',
  'order': '-ms-flex-order'
};
var flex2012Values = {
  // flex => flexbox || only for display? handled in the code
  'flex-end': 'end',
  'flex-start': 'start',
  // inline-flex => inline-flexbox || see 'flex'
  // nowrap => nowrap
  'space-around': 'distribute',
  'space-between': 'justify'
  // wrap => wrap
  // wrap-reverse => wrap-reverse
};

function detectKeywords(fixers) {
  if (fixers.prefix === '') return

  // build a map of {propertyI: {keywordJ: previxedKeywordJ, ...}, ...}
  for (var i = 0; i < keywords.length; i++) {
    var map = {}, property = keywords[i].props[0];
    // eslint-disable-next-line
    for (var j = 0, keyword; keyword = keywords[i].values[j]; j++) {

      if (
        !supportedDecl(property, keyword) &&
        supportedDecl(property, fixers.prefix + keyword)
      ) {
        fixers.hasKeywords = true;
        map[keyword] = fixers.prefix + keyword;
      }
    }
    // eslint-disable-next-line
    for (j = 0; property = keywords[i].props[j]; j++) {
      fixers.keywords[property] = map;
    }
  }
  if (fixers.keywords.display && fixers.keywords.display.flexbox && !supportedDecl('display', 'flex')) {
    // old IE
    fixers.keywords.display.flex = fixers.keywords.display.flexbox;
    fixers.keywords.display['inline-flex'] = fixers.keywords.display['inline-flexbox'];
    for (var k in flex2012Props) {
      fixers.properties[k] = flex2012Props[k];
      fixers.keywords[k] = flex2012Values;
    }
  } else if (fixers.keywords.display && fixers.keywords.display.box && !supportedDecl('display', 'flex')) {
    // old flexbox spec
    fixers.keywords.display.flex = fixers.keywords.display.box;
    fixers.keywords.display['inline-flex'] = fixers.keywords.display['inline-box'];
    fixers.flexbox2009 = true;
    for (k in flex2009Props) {
      fixers.properties[k] = fixers.prefix + flex2009Props[k];
      fixers.keywords[k] = flex2009Values;
    }
  }
  if (
    !supportedDecl('color', 'initial') &&
    supportedDecl('color', fixers.prefix + 'initial')
  ) {
    // `initial` does not use the `hasKeywords` branch, no need to set it to true.
    fixers.initial = fixers.prefix + 'initial';
  }
}

// Derived from Lea Verou's PrefixFree

function detectPrefix(fixers) {
  var prefixCounters = {};
  // Why are we doing this instead of iterating over properties in a .style object? Because Webkit.
  // 1. Older Webkit won't iterate over those.
  // 2. Recent Webkit will, but the 'Webkit'-prefixed properties are not enumerable. The 'webkit'
  //    (lower case 'w') ones are, but they don't `deCamelCase()` into a prefix that we can detect.

  function iteration(property) {
    if(property.charAt(0) === '-') {
      var prefix = property.split('-')[1];

      // Count prefix uses
      prefixCounters[prefix] = ++prefixCounters[prefix] || 1;
    }
  }

  // Some browsers have numerical indices for the properties, some don't
  if(allStyles && allStyles.length > 0) {
    for(var i=0; i<allStyles.length; i++) {
      iteration(allStyles[i]);
    }
  } else {
    for(var property in allStyles) {
      iteration(deCamelCase(property));
    }
  }

  var highest = 0;
  for(var prefix in prefixCounters) {
    if(highest < prefixCounters[prefix]) {
      highest = prefixCounters[prefix];
      fixers.prefix = '-' + prefix + '-';
    }
  }
  fixers.Prefix = camelCase(fixers.prefix);
}

// Derived from Lea Verou's PrefixFree

function detectSelectors(fixers) {
  var selector, prefixed;
  function prefixSelector(selector) {
    return selector.replace(/^::?/, function($0) { return $0 + fixers.prefix })
  }

  if (fixers.prefix === '') return
  var selectors = {
    ':any-link': ':any-link',
    ':read-only': ':read-only',
    ':read-write': ':read-write',
    '::selection': '::selection',

    ':fullscreen': ':fullscreen', //TODO sort out what changed between specs
    ':full-screen': ':fullscreen',
    '::backdrop': '::backdrop',

    //sigh
    ':placeholder': '::placeholder',
    '::placeholder': '::placeholder',
    ':input-placeholder': '::placeholder',
    '::input-placeholder': '::placeholder'
  };

  // builds an array of selectors that need a prefix.
  for (selector in selectors) {
    prefixed = prefixSelector(selector);
    if(!supportedRule(selector) && supportedRule(prefixed)) {
      fixers.hasSelectors = true;
      fixers.selectorList.push(selectors[selector]);
      fixers.selectorMap[selectors[selector]] = prefixed;
    }
  }
}

function blankFixers() {
  return {
    atrules: {},
    hasAtrules: false,
    hasDppx: null,
    hasKeywords: false,
    hasPixelRatio: false,
    hasPixelRatioFraction: false,
    hasSelectors: false,
    hasValues: false,
    fixAtMediaParams: null,
    fixAtSupportsParams: null,
    fixProperty: null,
    fixSelector: null,
    fixValue: null,
    flexbox2009: false,
    functions: [],
    initial: null,
    keywords: {},
    placeholder: null,
    prefix: '',
    Prefix: '',
    properties: {},
    selectorList: [],
    selectorMap: {},
    valueProperties: {
      'transition': 1,
      'transition-property': 1,
      'will-change': 1
    }
  }
}


function browserDetector(fixers) {
  // add the required data to the fixers object.
  init();
  detectPrefix(fixers);
  detectSelectors(fixers);
  detectAtrules(fixers);
  detectKeywords(fixers);
  detectFunctions(fixers);
  finalize();
}

var emptySet = {};

var valueTokenizer = /[(),]|\/\*[\s\S]*?\*\//g;

/**
 * For properties whose values are also properties, this will split a coma-separated
 * value list into individual values, ignoring comas in comments and in
 * functions(parameter, lists).
 *
 * @param {string} selector
 * @return {string[]}
 */

function splitValue(value) {
  var indices = [], res = [], inParen = 0, o;
  /*eslint-disable no-cond-assign*/
  while (o = valueTokenizer.exec(value)) {
  /*eslint-enable no-cond-assign*/
    switch (o[0]) {
    case '(': inParen++; break
    case ')': inParen--; break
    case ',': if (inParen) break; indices.push(o.index);
    }
  }
  for (o = indices.length; o--;){
    res.unshift(value.slice(indices[o] + 1));
    value = value.slice(0, indices[o]);
  }
  res.unshift(value);
  return res
}

function makeDetector (before, targets, after) {
  return new RegExp(before + '(?:' + targets.join('|') + ')' + after)
}

function makeLexer (before, targets, after) {
  return new RegExp(
        "\"(?:\\\\[\\S\\s]|[^\"])*\"|'(?:\\\\[\\S\\s]|[^'])*'|\\/\\*[\\S\\s]*?\\*\\/|" +
            before + '((?:' +
            targets.join('|') +
            '))' + after,
        'gi'
    )
}


function finalizeFixers(fixers) {
  var prefix = fixers.prefix;


  // properties
  // ----------

  fixers.fixProperty = fixers.fixProperty || function(prop) {
    var prefixed;
    return fixers.properties[prop] = (
      supportedProperty(prop) ||
      !supportedProperty(prefixed = prefix + prop)
    ) ? prop : prefixed
  };


  // selectors
  // ----------

  var selectorDetector = makeDetector('', fixers.selectorList, '(?:\\b|$|[^-])');
  var selectorMatcher = makeLexer('', fixers.selectorList, '(?:\\b|$|[^-])');
  var selectorReplacer = function(match, selector) {
    return selector != null ? fixers.selectorMap[selector] : match
  };
  fixers.fixSelector = function(selector) {
    return selectorDetector.test(selector) ? selector.replace(selectorMatcher, selectorReplacer) : selector
  };


  // values
  // ------

  // When gradients are supported with a prefix, convert angles to legacy
  // (from clockwise to trigonometric)
  var hasGradients = fixers.functions.indexOf('linear-gradient') > -1;
  var gradientDetector = /\blinear-gradient\(/;
  var gradientMatcher = /(^|\s|,|\()((?:repeating-)?linear-gradient\()\s*(-?\d*\.?\d*)deg/ig;
  var gradientReplacer = function (match, delim, gradient, deg) {
    return delim + gradient + (90-deg) + 'deg'
  };

  // functions
  var hasFunctions = !!fixers.functions.length;
  var functionsDetector = makeDetector('(?:^|\\s|,|\\()', fixers.functions, '\\s*\\(');
  var functionsMatcher = makeLexer('(^|\\s|,|\\()', fixers.functions, '(?=\\s*\\()');
  function functionReplacer (match, $1, $2) {
    return $1 + prefix + $2
  }

  // properties as values (for transition, ...)
  // No need to look for strings in these properties. We may insert prefixes in comments. Oh the humanity.
  var valuePropertiesMatcher = /^\s*([-\w]+)/gi;
  var valuePropertiesReplacer = function(match, prop){
    return fixers.properties[prop] || fixers.fixProperty(prop)
  };

  fixers.fixValue = function (value, property) {
    var res;
    if (fixers.initial != null && value === 'initial') return fixers.initial

    if (fixers.hasKeywords && (res = (fixers.keywords[property] || emptySet)[value])) return res

    res = value;

    if (fixers.valueProperties.hasOwnProperty(property)) {
      res = (value.indexOf(',') === -1) ?
        value.replace(valuePropertiesMatcher, valuePropertiesReplacer) :
        splitValue(value).map(function(v) {
          return v.replace(valuePropertiesMatcher, valuePropertiesReplacer)
        }).join(',');
    }

    if (hasFunctions && functionsDetector.test(value)) {
      if (hasGradients && gradientDetector.test(value)) {
        res = res.replace(gradientMatcher, gradientReplacer);
      }
      res = res.replace(functionsMatcher, functionReplacer);
    }
    return res
  };


  // @media (resolution:...) {
  // -------------------------

  var resolutionMatcher = /((?:min-|max-)?resolution)\s*:\s*((?:\d*.)?\d+)dppx/g;
  var resolutionReplacer = (
    fixers.hasPixelRatio ? function(_, prop, param){return fixers.properties[prop] + ':' + param} :
    fixers.hasPixelRatioFraction ? function(_, prop, param){return fixers.properties[prop] + ':' + Math.round(param*10) + '/10'} :
    function(_, prop, param){return prop + ':' + Math.round(param * 96) +'dpi'}
  );

  fixers.fixAtMediaParams = fixers.hasDppx !== false /*it may be null*/ ?
    function(p) {return p} :
    function (params) {
      return (params.indexOf('reso') !== -1) ?
        params.replace(resolutionMatcher, resolutionReplacer) :
        params
    };


  // @supports ... {
  // ---------------

  // regexp built by scripts/regexps.js
  var atSupportsParamsMatcher = /\(\s*([-\w]+)\s*:\s*((?:"(?:\\[\S\s]|[^"])*"|'(?:\\[\S\s]|[^'])*'|\/\*[\S\s]*?\*\/|\((?:"(?:\\[\S\s]|[^"])*"|'(?:\\[\S\s]|[^'])*'|\/\*[\S\s]*?\*\/|\((?:"(?:\\[\S\s]|[^"])*"|'(?:\\[\S\s]|[^'])*'|\/\*[\S\s]*?\*\/|\((?:"(?:\\[\S\s]|[^"])*"|'(?:\\[\S\s]|[^'])*'|\/\*[\S\s]*?\*\/|\((?:"(?:\\[\S\s]|[^"])*"|'(?:\\[\S\s]|[^'])*'|\/\*[\S\s]*?\*\/|\([^\)]*\)|[^\)])*\)|[^\)])*\)|[^\)])*\)|[^\)])*\)|[^\)])*)/g;
  function atSupportsParamsReplacer(match, prop, value) {
    return '(' + (fixers.properties[prop] || fixers.fixProperty(prop)) + ':' + fixers.fixValue(value, prop)
  }
  fixers.fixAtSupportsParams = function(params) {
    return params.replace(atSupportsParamsMatcher, atSupportsParamsReplacer)
  };
}

var commonFixers;

function initBrowser() {
  commonFixers = blankFixers();
  if (typeof getComputedStyle === 'function') browserDetector(commonFixers);
  finalizeFixers(commonFixers);
}
initBrowser();

function prefixPlugin(j2c) {
  var fixers = commonFixers;
  var cache = [];

  if (j2c) j2c.setPrefixDb = function(f) {
    if (cache.indexOf(f) === -1) {
      finalizeFixers(f);
      cache.push(f);
    }
    fixers = f;
    return prefixPlugin
  };
  return {
    $filter: function(next) {
      return {
        atrule: function(rule, kind, params, hasBlock) {
          next.atrule(
            fixers.hasAtrules && fixers.atrules[rule] || rule,
            kind,
            (
              rule === '@media'    ? fixers.fixAtMediaParams(params) :
              rule === '@supports' ? fixers.fixAtSupportsParams(params) :
              params
            ),
            hasBlock
          );
        },
        decl: function decl(property, value) {
          if (!property || !(typeof value === 'string' || typeof value === 'number')){
            return next.decl(fixers.properties[property] || fixers.fixProperty(property), value)
          }
          value = value + '';
          if (property === 'flex-flow' && fixers.flexbox2009) {
            value.split(' ').forEach(function(v){
              // recurse! The lack of `next.` is intentional.
              if (v.indexOf('wrap') > -1) decl('flex-wrap', v);
              else if(v !== '') decl('flex-direction', v);
            });
          } else if (property === 'flex-direction' && fixers.flexbox2009) {
            next.decl(fixers.properties['box-orient'], value.indexOf('column') > -1 ? 'block-axis' : 'inline-axis');
            next.decl(fixers.properties['box-direction'], value.indexOf('-reverse') > -1 ? 'reverse' : 'normal');
          } else {
            next.decl(
              fixers.properties[property] || fixers.fixProperty(property),
              fixers.fixValue(value, property)
            );
          }
        },
        rule: function(selector) {
          next.rule(
            fixers.hasSelectors ? fixers.fixSelector(selector) : selector
          );
        }
      }
    }
  }
}

exports.prefixPlugin = prefixPlugin;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var emptyArray = [];
var emptyObject = {};
var type = emptyObject.toString;
var ARRAY =  type.call(emptyArray);
var OBJECT = type.call(emptyObject);
var STRING = type.call('');
var FUNCTION = type.call(type);
var own =  emptyObject.hasOwnProperty;
var freeze = Object.freeze || function(o) {return o};


function defaults(target, source) {
  for (var k in source) if (own.call(source, k)) {
    if (k.indexOf('$') && !(k in target)) target[k] = source[k];
  }
  return target
}

function cartesian(a,b) {
  var res = [], i, j;
  for (j in b) if(own.call(b, j))
    for (i in a) if(own.call(a, i))
      res.push(a[i] + b[j]);
  return res
}

// "Tokenizes" the selectors into parts relevant for the next function.
// Strings and comments are matched, but ignored afterwards.
// This is not a full tokenizers. It only recognizes comas, parentheses,
// strings and comments.
// regexp generated by scripts/regexps.js then trimmed by hand
var selectorTokenizer = /[(),]|"(?:\\.|[^"\n])*"|'(?:\\.|[^'\n])*'|\/\*[\s\S]*?\*\//g;


/**
 * This will split a coma-separated selector list into individual selectors,
 * ignoring comas in strings, comments and in :pseudo-selectors(parameter, lists).
 *
 * @param {string} selector
 * @return {string[]}
 */

function splitSelector(selector) {
  var indices = [], res = [], inParen = 0, o;
  /*eslint-disable no-cond-assign*/
  while (o = selectorTokenizer.exec(selector)) {
  /*eslint-enable no-cond-assign*/
    switch (o[0]) {
    case '(': inParen++; break
    case ')': inParen--; break
    case ',': if (inParen) break; indices.push(o.index);
    }
  }
  for (o = indices.length; o--;){
    res.unshift(selector.slice(indices[o] + 1));
    selector = selector.slice(0, indices[o]);
  }
  res.unshift(selector);
  return res
}

// Like the `selectorTokenizer`, but for the `&` operator
var ampersandTokenizer = /&|"(?:\\.|[^"\n])*"|'(?:\\.|[^'\n])*'|\/\*[\s\S]*?\*\//g;

function ampersand (selector, parents) {
  var indices = [], split = [], res, o;
  /*eslint-disable no-cond-assign*/
  while (o = ampersandTokenizer.exec(selector)) {
  /*eslint-enable no-cond-assign*/
    if (o[0] == '&') indices.push(o.index);
  }
  for (o = indices.length; o--;){
    split.unshift(selector.slice(indices[o] + 1));
    selector = selector.slice(0, indices[o]);
  }
  split.unshift(selector);
  if (split.length === 1) split.unshift('');
  res = [split[0]];
  for (o = 1; o < split.length; o++) {
    res = cartesian(res, cartesian(parents, [split[o]]));
  }
  return res.join(',')
}

function flatIter (f) {
  return function iter(arg) {
    if (type.call(arg) === ARRAY) for (var i= 0 ; i < arg.length; i ++) iter(arg[i]);
    else f(arg);
  }
}

function decamelize(match) {
  return '-' + match.toLowerCase()
}

/**
 * Handles the property:value; pairs.
 *
 * @param {object} state - holds the localizer- and walker-related methods
 *                         and state
 * @param {object} emit - the contextual emitters to the final buffer
 * @param {string} prefix - the current property or a prefix in case of nested
 *                          sub-properties.
 * @param {array|object|string} o - the declarations.
 * @param {boolean} local - are we in @local or in @global scope.
 */

function declarations(state, emit, prefix, o, local) {
  var k, v, kk;
  if (o==null) return

  switch ( type.call(o = o.valueOf()) ) {
  case ARRAY:
    for (k = 0; k < o.length; k++)

      declarations(state, emit, prefix, o[k], local);

    break
  case OBJECT:
    // prefix is falsy iif it is the empty string, which means we're at the root
    // of the declarations list.
    prefix = (prefix && prefix + '-');
    for (k in o) if (own.call(o, k)){
      v = o[k];
      if (/\$/.test(k)) {
        for (kk in (k = k.split('$'))) if (own.call(k, kk)) {

          declarations(state, emit, prefix + k[kk], v, local);

        }
      } else {

        declarations(state, emit, prefix + k, v, local);

      }
    }
    break
  default:
    // prefix is falsy when it is "", which means that we're
    // at the top level.
    // `o` is then treated as a `property:value` pair, or a
    // semi-colon-separated list thereof.
    // Otherwise, `prefix` is the property name, and
    // `o` is the value.

    // restore the dashes
    k = prefix.replace(/_/g, '-').replace(/[A-Z]/g, decamelize);

    if (local && (k == 'animation-name' || k == 'animation' || k == 'list-style')) {
      // no need to tokenize here a plain `.split(',')` has all bases covered.
      // We may 'localize' a comment, but it's not a big deal.
      o = o.split(',').map(function (o) {

        return o.replace(/^\s*(?:(var\([^)]+\))|:?global\(\s*([_A-Za-z][-\w]*)\s*\)|()(-?[_A-Za-z][-\w]*))/, state.localizeReplacer)

      }).join(',');
    }

    emit.decl(k, o);

  }
}

/**
 * Handles a single at-rules
 *
 * @param {object} state - holds the localizer- and walker-related methods
 *                         and state
 * @param {object} emit - the contextual emitters to the final buffer
 * @param {array} k - The parsed at-rule, including the parameters,
 *                    if takes both parameters and a block.
 *                    k == [match, fullAtRule, atRuleType, params?]
 *                    So in `@-webkit-keyframes foo`, we have
 *                     - match = "@-webkit-keyframes foo"
 *                     - fullAtRule = "@-webkit-keyframes"
 *                     - atRuleType = "keyframes"
 *                     - params = "foo"
 * @param {string|string[]|object|object[]} v - Either parameters for
 *                                              block-less rules or
 *                                              their block
 *                                              for the others.
 * @param {string} prefix - the current selector or the selector prefix
 *                          in case of nested rules
 * @param {boolean} local - are we in @local or in @global scope?
 * @param {string} nestingDepth - are we nested in an at-rule or a selector?
 */

function atRules(state, emit, k, v, prefix, local, nestingDepth) {

  // First iterate over user-provided at-rules and return if one of them corresponds to the current one
  for (var i = 0; i < state.$atHandlers.length; i++) {

    if (state.$atHandlers[i](state, emit, k, v, prefix, local, nestingDepth)) return

  }

  // using `/^global$/.test(k[2])` rather that 'global' == k[2] gzips
  // slightly better thanks to the regexps tests further down.
  // It is slightly less efficient but this isn't a critical path.

  if (!k[3] && /^global$/.test(k[2])) {

    rules(state, emit, prefix, v, 0, nestingDepth);


  } else if (!k[3] && /^local$/.test(k[2])) {

    rules(state, emit, prefix, v, 1, nestingDepth);


  } else if (k[3] && /^adopt$/.test(k[2])) {

    if (!local || nestingDepth) return emit.err('@adopt global or nested: ' + k[0])

    if (!/^\.?[_A-Za-z][-\w]*$/.test(k[3])) return emit.err('bad adopter ' + JSON.stringify(k[3]) + ' in ' + k[0])

    i = [];
    flatIter(function(adoptee, asString) {

      if(adoptee == null || !/^\.?[_A-Za-z][-\w]*(?:\s+\.?[_A-Za-z][-\w]*)*$/.test(asString = adoptee + '')) emit.err('bad adoptee '+ JSON.stringify(adoptee) + ' in ' + k[0]);

      else i.push(asString.replace(/\./g, ''));

    })(v);

    // we may end up with duplicate classes but AFAIK it has no consequences on specificity.
    if (i.length) {
      state.localize(k[3] = k[3].replace(/\./g, ''));
      state.names[k[3]] += (' ' + i.join(' '));
    }


  } else if (!k[3] && /^(?:namespace|import|charset)$/.test(k[2])) {
    flatIter(function(v) {

      emit.atrule(k[1], k[2], v);

    })(v);


  } else if (!k[3] && /^(?:font-face|viewport)$/.test(k[2])) {
    flatIter(function(v) {

      emit.atrule(k[1], k[2], k[3], 1);

      declarations(state, emit, '', v, local);

      emit._atrule();

    })(v);

  } else if (k[3] && /^(?:media|supports|page|keyframes)$/.test(k[2])) {

    if (local && 'keyframes' == k[2]) {
      k[3] = k[3].replace(
        // generated by script/regexps.js
        /(var\([^)]+\))|:?global\(\s*([_A-Za-z][-\w]*)\s*\)|()(-?[_A-Za-z][-\w]*)/,
        state.localizeReplacer
      );
    }


    emit.atrule(k[1], k[2], k[3], 1);

    if ('page' == k[2]) {

      declarations(state, emit, '', v, local);

    } else {

      rules(
        state, emit,
        'keyframes' == k[2] ? '' : prefix,
        v, local, nestingDepth + 1
      );

    }

    emit._atrule();

  } else {

    emit.err('Unsupported at-rule: ' + k[0]);

  }
}

/**
 * Add rulesets and other CSS tree to the sheet.
 *
 * @param {object} state - holds the localizer- and walker-related methods
 *                         and state
 * @param {object} emit - the contextual emitters to the final buffer
 * @param {string} prefix - the current selector or a prefix in case of nested rules
 * @param {array|string|object} tree - a source object or sub-object.
 * @param {string} nestingDepth - are we nested in an at-rule?
 * @param {boolean} local - are we in @local or in @global scope?
 */
function rules(state, emit, prefix, tree, local, nestingDepth) {
  var k, v, inDeclaration, kk;

  switch (type.call(tree)) {

  case OBJECT:
    for (k in tree) if (own.call(tree, k)) {
      v = tree[k];

      if (prefix.length > 0 && /^[-\w$]+$/.test(k)) {
        if (!inDeclaration) {
          inDeclaration = 1;

          emit.rule(prefix);

        }
        if (/\$/.test(k)) {
          for (kk in (k = k.split('$'))) if (own.call(k, kk)) {

            declarations(state, emit, k[kk], v, local);

          }
        } else {

          declarations(state, emit, k, v, local);

        }

      } else if (/^@/.test(k)) {
        // Handle At-rules
        inDeclaration = 0;

        atRules(state, emit,
          /^(.(?:-[\w]+-)?([_A-Za-z][-\w]*))\b\s*(.*?)\s*$/.exec(k) || [k,'@','',''],
          v, prefix, local, nestingDepth
        );

      } else {
        // selector or nested sub-selectors
        inDeclaration = 0;

        rules(
          state, emit,
          // build the selector `prefix` for the next iteration.
          // ugly and full of redundant bits but so far the fastest/shortest.gz
          /*0 if*/(prefix.length > 0 && (/,/.test(prefix) || /,/.test(k))) ?

            /*0 then*/ (kk = splitSelector(prefix), splitSelector(
              local ?

                k.replace(
                  /("(?:\\.|[^"\n])*"|'(?:\\.|[^'\n])*'|\/\*[\s\S]*?\*\/)|:global\(\s*(\.-?[_A-Za-z][-\w]*)\s*\)|(\.)(-?[_A-Za-z][-\w]*)/g,
                  state.localizeReplacer
                ) :

                k
            ).map(function (k) {
              return /&/.test(k) ? ampersand(k, kk) : kk.map(function(kk) {
                return kk + k
              }).join(',')
            }).join(',')) :

            /*0 else*/ /*1 if*/ /&/.test(k) ?

              /*1 then*/ ampersand(
                local ?

                  k.replace(
                    /("(?:\\.|[^"\n])*"|'(?:\\.|[^'\n])*'|\/\*[\s\S]*?\*\/)|:global\(\s*(\.-?[_A-Za-z][-\w]*)\s*\)|(\.)(-?[_A-Za-z][-\w]*)/g,
                    state.localizeReplacer
                  ) :

                  k,
                [prefix]
              ) :

              /*1 else*/ prefix + (
                local ?

                  k.replace(
                    /("(?:\\.|[^"\n])*"|'(?:\\.|[^'\n])*'|\/\*[\s\S]*?\*\/)|:global\(\s*(\.-?[_A-Za-z][-\w]*)\s*\)|(\.)(-?[_A-Za-z][-\w]*)/g,
                    state.localizeReplacer
                  ) :

                  k
                ),
           v, local, nestingDepth + 1
        );

      }
    }

    break

  case ARRAY:
    for (k = 0; k < tree.length; k++){

      rules(state, emit, prefix, tree[k], local, nestingDepth);

    }
    break

  case STRING:
    // CSS hacks or ouptut of `j2c.inline`.
    if (!prefix.length) emit.err('No selector');
    emit.rule(prefix || ' ');

    declarations(state, emit, '', tree, local);

  }
}

// This is the first entry in the filters array, which is
// actually the last step of the compiler. It inserts
// closing braces to close normal (non at-) rules (those
// that start with a selector). Doing it earlier is
// impossible without passing state around in unrelated code
// or ending up with duplicated selectors when the source tree
// contains arrays.
// There's no `_rule` handler, because the core compiler never
// calls it.
function closeSelectors(next, inline) {
  var lastSelector;
  return inline ? next : {
    init: function(){lastSelector = 0; next.init();},
    done: function (raw) {
      if (lastSelector) {next._rule(); lastSelector = 0;}
      return next.done(raw)
    },
    atrule: function (rule, kind, param, takesBlock) {
      if (lastSelector) {next._rule(); lastSelector = 0;}
      next.atrule(rule, kind, param, takesBlock);
    },
    _atrule: function (rule) {
      if (lastSelector) {next._rule(); lastSelector = 0;}
      next._atrule(rule);
    },
    rule: function (selector) {
      if (selector !== lastSelector){
        if (lastSelector) next._rule();
        next.rule(selector);
        lastSelector = selector;
      }
    }
  }
}

function global(x) {
  return ':global(' + x + ')'
}

function kv (k, v, o) {
  o = {};
  o[k] = v;
  return o
}

function at (rule, params, block) {
  if (
    arguments.length < 3
  ) {
    // inner curry!
    var _at = at.bind.apply(at, [null].concat([].slice.call(arguments,0)));
    // So that it can be used as a key in an ES6 object literal.
    _at.toString = function(){return '@' + rule + ' ' + params};
    return _at
  }
  else return kv('@' + rule +' ' + params, block)
}

function j2c() {

  // the buffer that accumulates the output. Initialized in `$sink.i()`
  var buf, err;

  // the bottom of the 'codegen' stream. Mirrors the `$filter` plugin API.
  var $sink = {
    init: function(){buf=[], err=[];},
    done: function (raw) {
      if (err.length != 0) throw new Error('j2c error(s): ' + JSON.stringify(err,null,2) + 'in context:\n' + buf.join(''))
      return raw ? buf : buf.join('')
    },
    err: function(msg) {
      err.push(msg);
      buf.push('/* +++ ERROR +++ ' + msg + ' */\n');
    },
    atrule: function (rule, kind, param, takesBlock) {
      buf.push(rule, param && ' ', param, takesBlock ? ' {' : ';', _instance.endline);
    },
    // close atrule
    _atrule: function () {buf.push('}', _instance.endline);},
    rule: function (selector) {buf.push(selector, ' {', _instance.endline);},
    // close rule
    _rule: function () {buf.push('}', _instance.endline);},
    decl: function (prop, value) {buf.push(prop, prop && ':', value, ';', _instance.endline);}
  };

  // holds the `$filter` and `$at` handlers
  var $filters = [closeSelectors];
  var $atHandlers = [];

  // the public API (see the main docs)
  var _instance = {
    at: at,
    global: global,
    kv: kv,
    names: {},
    endline: '\n',
    suffix: '__j2c-' +
      // 128 bits of randomness
      Math.floor(Math.random() * 0x100000000).toString(36) + '-' +
      Math.floor(Math.random() * 0x100000000).toString(36) + '-' +
      Math.floor(Math.random() * 0x100000000).toString(36) + '-' +
      Math.floor(Math.random() * 0x100000000).toString(36),
    $plugins: [],
    sheet: function(tree) {
      var emit = _createOrRetrieveStream(0);
      emit.init();
      rules(
        _walkers[0],
        emit,
        '', // prefix
        tree,
        1,  // local, by default
        0   // nesting depth
      );

      return emit.done()
    },
    inline: function (tree, options) {
      var emit = _createOrRetrieveStream(1);
      emit.init();
      declarations(
        _walkers[1],
        emit,
        '', // prefix
        tree,
        !(options && options.global)   // local, by default
      );
      return emit.done()
    }
  };

  // The `state` (for the core functions) / `walker` (for the plugins) tables.
  var _walkers = [
    // for j2c.sheet
    {
      // helpers for locaizing class and animation names
      localizeReplacer: _localizeReplacer, // second argument to String.prototype.replace
      localize: _localize,                 // mangles local names
      names: _instance.names,              // local => mangled mapping
      $atHandlers: $atHandlers,            // extra at-rules
      // The core walker methods, to be provided to plugins
      atrule: atRules,
      decl: declarations,
      rule: rules
    },
    // likewise, for j2c.inline (idem with `$a`, `a` and `s` removed)
    {
      localizeReplacer: _localizeReplacer,
      localize: _localize,
      names: _instance.names,
      decl: declarations
    }
  ];


  // inner helpers

  var _use = flatIter(function(plugin) {
    // `~n` is falsy for `n === -1` and truthy otherwise.
    // Works well to turn the  result of `a.indexOf(x)`
    // into a value that reflects the presence of `x` in
    // `a`.
    if (~_instance.$plugins.indexOf(plugin)) return

    _instance.$plugins.push(plugin);

    if (type.call(plugin) === FUNCTION) plugin = plugin(_instance);

    if (!plugin) return

    flatIter(function(filter) {
      $filters.push(filter);
    })(plugin.$filter || emptyArray);

    flatIter(function(handler) {
      $atHandlers.push(handler);
    })(plugin.$at || emptyArray);

    defaults(_instance.names, plugin.$names || emptyObject);

    _use(plugin.$plugins || emptyArray);

    $sink = plugin.$sink || $sink;

    defaults(_instance, plugin);
  });


  var _streams = [];
  /**
   * returns the codegen streams, creating them if necessary
   * @param
   */
  function _createOrRetrieveStream(inline) {
    // build the stream processors if needed
    if (!_streams.length) {
      // append the $sink as the ultimate filter
      $filters.push(function(_, inline) {return inline ? {init:$sink.init, decl:$sink.decl, done:$sink.done, err: $sink.err} : $sink});
      for(var i = 0; i < 2; i++){ // 0 for j2c.sheet, 1 for j2c.inline
        for (var j = $filters.length; j--;) {
          _streams[i] = freeze(
            defaults(
              $filters[j](_streams[i], !!i),
              _streams[i]
            )
          );
        }
      }
    }
    return _streams[inline]
  }

  /**
   * Returns a localized version of a given name.
   * Registers the pair in `instnace.name` if needed.
   *
   * @param {string} name - the name to localize
   * @return {string} - the localized version
   */
  function _localize(name) {
    if (!_instance.names[name]) _instance.names[name] = name + _instance.suffix;
    return _instance.names[name].match(/^\S+/)
  }

  /**
   * Used as second argument for str.replace(localizeRegex, replacer)
   * `ignore`, `global` and `(dot, name)` are mutually exclusive
   *
   * @param {string} match - the whole match (ignored)
   * @param {string|null} ignore - a comment or a string literal
   * @param {string|null} global - a global name
   * @param {string|null} dot - either '.' for a local class name or the empty string otherwise
   * @param {string|null} name - the name to localize
   * @return {string}
   */
  function _localizeReplacer(match, ignore, global$$1, dot, name) {
    return ignore || global$$1 || dot + _localize(name)
  }

  _use(emptyArray.slice.call(arguments));
  return _instance
}

module.exports = j2c;


/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fastclick__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fastclick___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_fastclick__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core__ = __webpack_require__(3);



var THROTTLE_DELAY = 100;
var REINIT_DELAY = THROTTLE_DELAY + 50;
var layer = document.body;

var fastClick = void 0;
var timeoutId = void 0;
var enabled = void 0;

var add = function add() {
  if (!enabled) {
    fastClick = new __WEBPACK_IMPORTED_MODULE_0_fastclick___default.a(layer);
    enabled = true;
  }
};

var remove = function remove() {
  if (enabled) {
    fastClick.destroy();
    enabled = false;
  }
};

var handleScroll = function handleScroll() {
  remove();
  if (timeoutId) {
    window.clearTimeout(timeoutId);
  }
  timeoutId = window.setTimeout(add, REINIT_DELAY);
};

if (__WEBPACK_IMPORTED_MODULE_1_polythene_core__["i" /* isTouch */]) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_polythene_core__["g" /* subscribe */])("scroll", handleScroll, THROTTLE_DELAY);
  add();
}


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;;(function () {
	'use strict';

	/**
	 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
	 *
	 * @codingstandard ftlabs-jsv2
	 * @copyright The Financial Times Limited [All Rights Reserved]
	 * @license MIT License (see LICENSE.txt)
	 */

	/*jslint browser:true, node:true*/
	/*global define, Event, Node*/


	/**
	 * Instantiate fast-clicking listeners on the specified layer.
	 *
	 * @constructor
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	function FastClick(layer, options) {
		var oldOnClick;

		options = options || {};

		/**
		 * Whether a click is currently being tracked.
		 *
		 * @type boolean
		 */
		this.trackingClick = false;


		/**
		 * Timestamp for when click tracking started.
		 *
		 * @type number
		 */
		this.trackingClickStart = 0;


		/**
		 * The element being tracked for a click.
		 *
		 * @type EventTarget
		 */
		this.targetElement = null;


		/**
		 * X-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartX = 0;


		/**
		 * Y-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartY = 0;


		/**
		 * ID of the last touch, retrieved from Touch.identifier.
		 *
		 * @type number
		 */
		this.lastTouchIdentifier = 0;


		/**
		 * Touchmove boundary, beyond which a click will be cancelled.
		 *
		 * @type number
		 */
		this.touchBoundary = options.touchBoundary || 10;


		/**
		 * The FastClick layer.
		 *
		 * @type Element
		 */
		this.layer = layer;

		/**
		 * The minimum time between tap(touchstart and touchend) events
		 *
		 * @type number
		 */
		this.tapDelay = options.tapDelay || 200;

		/**
		 * The maximum time for a tap
		 *
		 * @type number
		 */
		this.tapTimeout = options.tapTimeout || 700;

		if (FastClick.notNeeded(layer)) {
			return;
		}

		// Some old versions of Android don't have Function.prototype.bind
		function bind(method, context) {
			return function() { return method.apply(context, arguments); };
		}


		var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
		var context = this;
		for (var i = 0, l = methods.length; i < l; i++) {
			context[methods[i]] = bind(context[methods[i]], context);
		}

		// Set up event handlers as required
		if (deviceIsAndroid) {
			layer.addEventListener('mouseover', this.onMouse, true);
			layer.addEventListener('mousedown', this.onMouse, true);
			layer.addEventListener('mouseup', this.onMouse, true);
		}

		layer.addEventListener('click', this.onClick, true);
		layer.addEventListener('touchstart', this.onTouchStart, false);
		layer.addEventListener('touchmove', this.onTouchMove, false);
		layer.addEventListener('touchend', this.onTouchEnd, false);
		layer.addEventListener('touchcancel', this.onTouchCancel, false);

		// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
		// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
		// layer when they are cancelled.
		if (!Event.prototype.stopImmediatePropagation) {
			layer.removeEventListener = function(type, callback, capture) {
				var rmv = Node.prototype.removeEventListener;
				if (type === 'click') {
					rmv.call(layer, type, callback.hijacked || callback, capture);
				} else {
					rmv.call(layer, type, callback, capture);
				}
			};

			layer.addEventListener = function(type, callback, capture) {
				var adv = Node.prototype.addEventListener;
				if (type === 'click') {
					adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
						if (!event.propagationStopped) {
							callback(event);
						}
					}), capture);
				} else {
					adv.call(layer, type, callback, capture);
				}
			};
		}

		// If a handler is already declared in the element's onclick attribute, it will be fired before
		// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
		// adding it as listener.
		if (typeof layer.onclick === 'function') {

			// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
			// - the old one won't work if passed to addEventListener directly.
			oldOnClick = layer.onclick;
			layer.addEventListener('click', function(event) {
				oldOnClick(event);
			}, false);
			layer.onclick = null;
		}
	}

	/**
	* Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
	*
	* @type boolean
	*/
	var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;

	/**
	 * Android requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;


	/**
	 * iOS requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;


	/**
	 * iOS 4 requires an exception for select elements.
	 *
	 * @type boolean
	 */
	var deviceIsIOS4 = deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);


	/**
	 * iOS 6.0-7.* requires the target element to be manually derived
	 *
	 * @type boolean
	 */
	var deviceIsIOSWithBadTarget = deviceIsIOS && (/OS [6-7]_\d/).test(navigator.userAgent);

	/**
	 * BlackBerry requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;

	/**
	 * Determine whether a given element requires a native click.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element needs a native click
	 */
	FastClick.prototype.needsClick = function(target) {
		switch (target.nodeName.toLowerCase()) {

		// Don't send a synthetic click to disabled inputs (issue #62)
		case 'button':
		case 'select':
		case 'textarea':
			if (target.disabled) {
				return true;
			}

			break;
		case 'input':

			// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
			if ((deviceIsIOS && target.type === 'file') || target.disabled) {
				return true;
			}

			break;
		case 'label':
		case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames
		case 'video':
			return true;
		}

		return (/\bneedsclick\b/).test(target.className);
	};


	/**
	 * Determine whether a given element requires a call to focus to simulate click into element.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
	 */
	FastClick.prototype.needsFocus = function(target) {
		switch (target.nodeName.toLowerCase()) {
		case 'textarea':
			return true;
		case 'select':
			return !deviceIsAndroid;
		case 'input':
			switch (target.type) {
			case 'button':
			case 'checkbox':
			case 'file':
			case 'image':
			case 'radio':
			case 'submit':
				return false;
			}

			// No point in attempting to focus disabled inputs
			return !target.disabled && !target.readOnly;
		default:
			return (/\bneedsfocus\b/).test(target.className);
		}
	};


	/**
	 * Send a click event to the specified element.
	 *
	 * @param {EventTarget|Element} targetElement
	 * @param {Event} event
	 */
	FastClick.prototype.sendClick = function(targetElement, event) {
		var clickEvent, touch;

		// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
		if (document.activeElement && document.activeElement !== targetElement) {
			document.activeElement.blur();
		}

		touch = event.changedTouches[0];

		// Synthesise a click event, with an extra attribute so it can be tracked
		clickEvent = document.createEvent('MouseEvents');
		clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
		clickEvent.forwardedTouchEvent = true;
		targetElement.dispatchEvent(clickEvent);
	};

	FastClick.prototype.determineEventType = function(targetElement) {

		//Issue #159: Android Chrome Select Box does not open with a synthetic click event
		if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
			return 'mousedown';
		}

		return 'click';
	};


	/**
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.focus = function(targetElement) {
		var length;

		// Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
		if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
			length = targetElement.value.length;
			targetElement.setSelectionRange(length, length);
		} else {
			targetElement.focus();
		}
	};


	/**
	 * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
	 *
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.updateScrollParent = function(targetElement) {
		var scrollParent, parentElement;

		scrollParent = targetElement.fastClickScrollParent;

		// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
		// target element was moved to another parent.
		if (!scrollParent || !scrollParent.contains(targetElement)) {
			parentElement = targetElement;
			do {
				if (parentElement.scrollHeight > parentElement.offsetHeight) {
					scrollParent = parentElement;
					targetElement.fastClickScrollParent = parentElement;
					break;
				}

				parentElement = parentElement.parentElement;
			} while (parentElement);
		}

		// Always update the scroll top tracker if possible.
		if (scrollParent) {
			scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
		}
	};


	/**
	 * @param {EventTarget} targetElement
	 * @returns {Element|EventTarget}
	 */
	FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {

		// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
		if (eventTarget.nodeType === Node.TEXT_NODE) {
			return eventTarget.parentNode;
		}

		return eventTarget;
	};


	/**
	 * On touch start, record the position and scroll offset.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchStart = function(event) {
		var targetElement, touch, selection;

		// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
		if (event.targetTouches.length > 1) {
			return true;
		}

		targetElement = this.getTargetElementFromEventTarget(event.target);
		touch = event.targetTouches[0];

		if (deviceIsIOS) {

			// Only trusted events will deselect text on iOS (issue #49)
			selection = window.getSelection();
			if (selection.rangeCount && !selection.isCollapsed) {
				return true;
			}

			if (!deviceIsIOS4) {

				// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
				// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
				// with the same identifier as the touch event that previously triggered the click that triggered the alert.
				// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
				// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
				// Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
				// which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
				// random integers, it's safe to to continue if the identifier is 0 here.
				if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
					event.preventDefault();
					return false;
				}

				this.lastTouchIdentifier = touch.identifier;

				// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
				// 1) the user does a fling scroll on the scrollable layer
				// 2) the user stops the fling scroll with another tap
				// then the event.target of the last 'touchend' event will be the element that was under the user's finger
				// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
				// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
				this.updateScrollParent(targetElement);
			}
		}

		this.trackingClick = true;
		this.trackingClickStart = event.timeStamp;
		this.targetElement = targetElement;

		this.touchStartX = touch.pageX;
		this.touchStartY = touch.pageY;

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			event.preventDefault();
		}

		return true;
	};


	/**
	 * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.touchHasMoved = function(event) {
		var touch = event.changedTouches[0], boundary = this.touchBoundary;

		if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
			return true;
		}

		return false;
	};


	/**
	 * Update the last position.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchMove = function(event) {
		if (!this.trackingClick) {
			return true;
		}

		// If the touch has moved, cancel the click tracking
		if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
			this.trackingClick = false;
			this.targetElement = null;
		}

		return true;
	};


	/**
	 * Attempt to find the labelled control for the given label element.
	 *
	 * @param {EventTarget|HTMLLabelElement} labelElement
	 * @returns {Element|null}
	 */
	FastClick.prototype.findControl = function(labelElement) {

		// Fast path for newer browsers supporting the HTML5 control attribute
		if (labelElement.control !== undefined) {
			return labelElement.control;
		}

		// All browsers under test that support touch events also support the HTML5 htmlFor attribute
		if (labelElement.htmlFor) {
			return document.getElementById(labelElement.htmlFor);
		}

		// If no for attribute exists, attempt to retrieve the first labellable descendant element
		// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
		return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
	};


	/**
	 * On touch end, determine whether to send a click event at once.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchEnd = function(event) {
		var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;

		if (!this.trackingClick) {
			return true;
		}

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			this.cancelNextClick = true;
			return true;
		}

		if ((event.timeStamp - this.trackingClickStart) > this.tapTimeout) {
			return true;
		}

		// Reset to prevent wrong click cancel on input (issue #156).
		this.cancelNextClick = false;

		this.lastClickTime = event.timeStamp;

		trackingClickStart = this.trackingClickStart;
		this.trackingClick = false;
		this.trackingClickStart = 0;

		// On some iOS devices, the targetElement supplied with the event is invalid if the layer
		// is performing a transition or scroll, and has to be re-detected manually. Note that
		// for this to function correctly, it must be called *after* the event target is checked!
		// See issue #57; also filed as rdar://13048589 .
		if (deviceIsIOSWithBadTarget) {
			touch = event.changedTouches[0];

			// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
			targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
			targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
		}

		targetTagName = targetElement.tagName.toLowerCase();
		if (targetTagName === 'label') {
			forElement = this.findControl(targetElement);
			if (forElement) {
				this.focus(targetElement);
				if (deviceIsAndroid) {
					return false;
				}

				targetElement = forElement;
			}
		} else if (this.needsFocus(targetElement)) {

			// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
			// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
			if ((event.timeStamp - trackingClickStart) > 100 || (deviceIsIOS && window.top !== window && targetTagName === 'input')) {
				this.targetElement = null;
				return false;
			}

			this.focus(targetElement);
			this.sendClick(targetElement, event);

			// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
			// Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
			if (!deviceIsIOS || targetTagName !== 'select') {
				this.targetElement = null;
				event.preventDefault();
			}

			return false;
		}

		if (deviceIsIOS && !deviceIsIOS4) {

			// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
			// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
			scrollParent = targetElement.fastClickScrollParent;
			if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
				return true;
			}
		}

		// Prevent the actual click from going though - unless the target node is marked as requiring
		// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
		if (!this.needsClick(targetElement)) {
			event.preventDefault();
			this.sendClick(targetElement, event);
		}

		return false;
	};


	/**
	 * On touch cancel, stop tracking the click.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.onTouchCancel = function() {
		this.trackingClick = false;
		this.targetElement = null;
	};


	/**
	 * Determine mouse events which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onMouse = function(event) {

		// If a target element was never set (because a touch event was never fired) allow the event
		if (!this.targetElement) {
			return true;
		}

		if (event.forwardedTouchEvent) {
			return true;
		}

		// Programmatically generated events targeting a specific element should be permitted
		if (!event.cancelable) {
			return true;
		}

		// Derive and check the target element to see whether the mouse event needs to be permitted;
		// unless explicitly enabled, prevent non-touch click events from triggering actions,
		// to prevent ghost/doubleclicks.
		if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

			// Prevent any user-added listeners declared on FastClick element from being fired.
			if (event.stopImmediatePropagation) {
				event.stopImmediatePropagation();
			} else {

				// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
				event.propagationStopped = true;
			}

			// Cancel the event
			event.stopPropagation();
			event.preventDefault();

			return false;
		}

		// If the mouse event is permitted, return true for the action to go through.
		return true;
	};


	/**
	 * On actual clicks, determine whether this is a touch-generated click, a click action occurring
	 * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
	 * an actual click which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onClick = function(event) {
		var permitted;

		// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
		if (this.trackingClick) {
			this.targetElement = null;
			this.trackingClick = false;
			return true;
		}

		// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
		if (event.target.type === 'submit' && event.detail === 0) {
			return true;
		}

		permitted = this.onMouse(event);

		// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
		if (!permitted) {
			this.targetElement = null;
		}

		// If clicks are permitted, return true for the action to go through.
		return permitted;
	};


	/**
	 * Remove all FastClick's event listeners.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.destroy = function() {
		var layer = this.layer;

		if (deviceIsAndroid) {
			layer.removeEventListener('mouseover', this.onMouse, true);
			layer.removeEventListener('mousedown', this.onMouse, true);
			layer.removeEventListener('mouseup', this.onMouse, true);
		}

		layer.removeEventListener('click', this.onClick, true);
		layer.removeEventListener('touchstart', this.onTouchStart, false);
		layer.removeEventListener('touchmove', this.onTouchMove, false);
		layer.removeEventListener('touchend', this.onTouchEnd, false);
		layer.removeEventListener('touchcancel', this.onTouchCancel, false);
	};


	/**
	 * Check whether FastClick is needed.
	 *
	 * @param {Element} layer The layer to listen on
	 */
	FastClick.notNeeded = function(layer) {
		var metaViewport;
		var chromeVersion;
		var blackberryVersion;
		var firefoxVersion;

		// Devices that don't support touch don't need FastClick
		if (typeof window.ontouchstart === 'undefined') {
			return true;
		}

		// Chrome version - zero for other browsers
		chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (chromeVersion) {

			if (deviceIsAndroid) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// Chrome 32 and above with width=device-width or less don't need FastClick
					if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}

			// Chrome desktop doesn't need FastClick (issue #15)
			} else {
				return true;
			}
		}

		if (deviceIsBlackBerry10) {
			blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);

			// BlackBerry 10.3+ does not require Fastclick library.
			// https://github.com/ftlabs/fastclick/issues/251
			if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// user-scalable=no eliminates click delay.
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// width=device-width (or less than device-width) eliminates click delay.
					if (document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}
			}
		}

		// IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)
		if (layer.style.msTouchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		// Firefox version - zero for other browsers
		firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (firefoxVersion >= 27) {
			// Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896

			metaViewport = document.querySelector('meta[name=viewport]');
			if (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
				return true;
			}
		}

		// IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
		// http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx
		if (layer.style.touchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		return false;
	};


	/**
	 * Factory method for creating a FastClick object
	 *
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	FastClick.attach = function(layer, options) {
		return new FastClick(layer, options);
	};


	if (true) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return FastClick;
		}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = FastClick.attach;
		module.exports.FastClick = FastClick;
	} else {
		window.FastClick = FastClick;
	}
}());


/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_theme__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_webfontloader__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_webfontloader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_webfontloader__);




var fontSize = 14;

var typography = [{
  " h1, h2, h3, h4, h5, h6, p": {
    margin: 0,
    padding: 0
  }
}, {
  " h1 small, h2 small, h3 small, h4 small, h5 small, h6 small": {
    "font-weight": __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].font_weight_normal,
    "line-height": __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].line_height,
    "letter-spacing": "-0.02em",
    "font-size": "0.6em"
  }
}, {
  " h1": {
    "font-size": "56px",
    "font-weight": __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].font_weight_normal,
    "line-height": __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].line_height,
    "margin-top": "24px",
    "margin-bottom": "24px"
  }
}, {
  " h2": {
    "font-size": "45px",
    "font-weight": __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].font_weight_normal,
    "line-height": "48px",
    "margin-top": "24px",
    "margin-bottom": "24px"
  }
}, {
  " h3": {
    "font-size": "34px",
    "font-weight": __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].font_weight_normal,
    "line-height": "40px",
    "margin-top": "24px",
    "margin-bottom": "24px"
  }
}, {
  " h4": {
    "font-size": "24px",
    "font-weight": __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].font_weight_normal,
    "line-height": "32px",
    "-moz-osx-font-smoothing": "grayscale",
    "margin-top": "24px",
    "margin-bottom": "16px"
  }
}, {
  " h5": {
    "font-size": "20px",
    "font-weight": __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].font_weight_medium,
    "line-height": "1",
    "letter-spacing": "-0.02em",
    "margin-top": "24px",
    "margin-bottom": "16px"
  }
}, {
  " h6": {
    "font-size": "16px",
    "font-weight": __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].font_weight_normal,
    "line-height": "24px",
    "letter-spacing": "0.04em",
    "margin-top": "24px",
    "margin-bottom": "16px"
  }
}, {
  " html, body": {
    "font-size": fontSize + "px",
    "line-height": "20px",
    "font-weight": __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].font_weight_normal
  },
  " p": {
    "font-size": fontSize + "px",
    "font-weight": __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].font_weight_normal,
    "line-height": "24px",
    "letter-spacing": "0",
    "margin-bottom": "16px"
  },
  " blockquote": {
    "position": "relative",
    "font-size": "24px",
    "font-weight": __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].font_weight_normal,
    "font-style": "italic",
    "line-height": __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].line_height,
    "letter-spacing": "0.08em",
    "margin-top": "24px",
    "margin-bottom": "16px"
  },
  " ul, ol": {
    "font-size": fontSize + "px",
    "font-weight": __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].font_weight_normal,
    "line-height": "24px",
    "letter-spacing": 0
  },
  "b, strong": {
    "font-weight": __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].font_weight_medium
  }
}];

var reset = [{
  // apply a natural box layout model to all elements, but allow elements to change
  " html": {
    "box-sizing": "border-box"
  },
  " *, *:before, *:after": {
    "box-sizing": "inherit"
  },
  " *": [
  // remove tap highlight in mobile Safari
  {
    "-webkit-tap-highlight-color": "rgba(0,0,0,0)"
  }, {
    "-webkit-tap-highlight-color": "transparent" // For some Androids
  }],

  // Remove dotted link borders in Firefox
  " a, a:active, a:focus, input:active, input[type]:focus": {
    outline: 0
  },

  // Mobile Safari: override default fading of disabled elements
  " input:disabled": {
    opacity: 1
  }
}];

__WEBPACK_IMPORTED_MODULE_2_webfontloader___default.a.load({
  google: {
    families: ["Roboto:400,500,700,400italic:latin"]
  }
});

var roboto = [{
  "html, body, button, input, select, textarea": {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif"
  }
}];

__WEBPACK_IMPORTED_MODULE_0_polythene_css__["b" /* styler */].add("pe-theme", reset, typography, roboto);


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/* Web Font Loader v1.6.27 - (c) Adobe Systems, Google. License: Apache 2.0 */(function(){function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function p(a,b,c){p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return p.apply(null,arguments)}var q=Date.now||function(){return+new Date};function ca(a,b){this.a=a;this.m=b||a;this.c=this.m.document}var da=!!window.FontFace;function t(a,b,c,d){b=a.c.createElement(b);if(c)for(var e in c)c.hasOwnProperty(e)&&("style"==e?b.style.cssText=c[e]:b.setAttribute(e,c[e]));d&&b.appendChild(a.c.createTextNode(d));return b}function u(a,b,c){a=a.c.getElementsByTagName(b)[0];a||(a=document.documentElement);a.insertBefore(c,a.lastChild)}function v(a){a.parentNode&&a.parentNode.removeChild(a)}
function w(a,b,c){b=b||[];c=c||[];for(var d=a.className.split(/\s+/),e=0;e<b.length;e+=1){for(var f=!1,g=0;g<d.length;g+=1)if(b[e]===d[g]){f=!0;break}f||d.push(b[e])}b=[];for(e=0;e<d.length;e+=1){f=!1;for(g=0;g<c.length;g+=1)if(d[e]===c[g]){f=!0;break}f||b.push(d[e])}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function y(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return!0;return!1}
function z(a){if("string"===typeof a.f)return a.f;var b=a.m.location.protocol;"about:"==b&&(b=a.a.location.protocol);return"https:"==b?"https:":"http:"}function ea(a){return a.m.location.hostname||a.a.location.hostname}
function A(a,b,c){function d(){k&&e&&f&&(k(g),k=null)}b=t(a,"link",{rel:"stylesheet",href:b,media:"all"});var e=!1,f=!0,g=null,k=c||null;da?(b.onload=function(){e=!0;d()},b.onerror=function(){e=!0;g=Error("Stylesheet failed to load");d()}):setTimeout(function(){e=!0;d()},0);u(a,"head",b)}
function B(a,b,c,d){var e=a.c.getElementsByTagName("head")[0];if(e){var f=t(a,"script",{src:b}),g=!1;f.onload=f.onreadystatechange=function(){g||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(g=!0,c&&c(null),f.onload=f.onreadystatechange=null,"HEAD"==f.parentNode.tagName&&e.removeChild(f))};e.appendChild(f);setTimeout(function(){g||(g=!0,c&&c(Error("Script load timeout")))},d||5E3);return f}return null};function C(){this.a=0;this.c=null}function D(a){a.a++;return function(){a.a--;E(a)}}function F(a,b){a.c=b;E(a)}function E(a){0==a.a&&a.c&&(a.c(),a.c=null)};function G(a){this.a=a||"-"}G.prototype.c=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.a)};function H(a,b){this.c=a;this.f=4;this.a="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.a=c[1],this.f=parseInt(c[2],10))}function fa(a){return I(a)+" "+(a.f+"00")+" 300px "+J(a.c)}function J(a){var b=[];a=a.split(/,\s*/);for(var c=0;c<a.length;c++){var d=a[c].replace(/['"]/g,"");-1!=d.indexOf(" ")||/^\d/.test(d)?b.push("'"+d+"'"):b.push(d)}return b.join(",")}function K(a){return a.a+a.f}function I(a){var b="normal";"o"===a.a?b="oblique":"i"===a.a&&(b="italic");return b}
function ga(a){var b=4,c="n",d=null;a&&((d=a.match(/(normal|oblique|italic)/i))&&d[1]&&(c=d[1].substr(0,1).toLowerCase()),(d=a.match(/([1-9]00|normal|bold)/i))&&d[1]&&(/bold/i.test(d[1])?b=7:/[1-9]00/.test(d[1])&&(b=parseInt(d[1].substr(0,1),10))));return c+b};function ha(a,b){this.c=a;this.f=a.m.document.documentElement;this.h=b;this.a=new G("-");this.j=!1!==b.events;this.g=!1!==b.classes}function ia(a){a.g&&w(a.f,[a.a.c("wf","loading")]);L(a,"loading")}function M(a){if(a.g){var b=y(a.f,a.a.c("wf","active")),c=[],d=[a.a.c("wf","loading")];b||c.push(a.a.c("wf","inactive"));w(a.f,c,d)}L(a,"inactive")}function L(a,b,c){if(a.j&&a.h[b])if(c)a.h[b](c.c,K(c));else a.h[b]()};function ja(){this.c={}}function ka(a,b,c){var d=[],e;for(e in b)if(b.hasOwnProperty(e)){var f=a.c[e];f&&d.push(f(b[e],c))}return d};function N(a,b){this.c=a;this.f=b;this.a=t(this.c,"span",{"aria-hidden":"true"},this.f)}function O(a){u(a.c,"body",a.a)}function P(a){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+J(a.c)+";"+("font-style:"+I(a)+";font-weight:"+(a.f+"00")+";")};function Q(a,b,c,d,e,f){this.g=a;this.j=b;this.a=d;this.c=c;this.f=e||3E3;this.h=f||void 0}Q.prototype.start=function(){var a=this.c.m.document,b=this,c=q(),d=new Promise(function(d,e){function k(){q()-c>=b.f?e():a.fonts.load(fa(b.a),b.h).then(function(a){1<=a.length?d():setTimeout(k,25)},function(){e()})}k()}),e=new Promise(function(a,d){setTimeout(d,b.f)});Promise.race([e,d]).then(function(){b.g(b.a)},function(){b.j(b.a)})};function R(a,b,c,d,e,f,g){this.v=a;this.B=b;this.c=c;this.a=d;this.s=g||"BESbswy";this.f={};this.w=e||3E3;this.u=f||null;this.o=this.j=this.h=this.g=null;this.g=new N(this.c,this.s);this.h=new N(this.c,this.s);this.j=new N(this.c,this.s);this.o=new N(this.c,this.s);a=new H(this.a.c+",serif",K(this.a));a=P(a);this.g.a.style.cssText=a;a=new H(this.a.c+",sans-serif",K(this.a));a=P(a);this.h.a.style.cssText=a;a=new H("serif",K(this.a));a=P(a);this.j.a.style.cssText=a;a=new H("sans-serif",K(this.a));a=
P(a);this.o.a.style.cssText=a;O(this.g);O(this.h);O(this.j);O(this.o)}var S={D:"serif",C:"sans-serif"},T=null;function U(){if(null===T){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);T=!!a&&(536>parseInt(a[1],10)||536===parseInt(a[1],10)&&11>=parseInt(a[2],10))}return T}R.prototype.start=function(){this.f.serif=this.j.a.offsetWidth;this.f["sans-serif"]=this.o.a.offsetWidth;this.A=q();la(this)};
function ma(a,b,c){for(var d in S)if(S.hasOwnProperty(d)&&b===a.f[S[d]]&&c===a.f[S[d]])return!0;return!1}function la(a){var b=a.g.a.offsetWidth,c=a.h.a.offsetWidth,d;(d=b===a.f.serif&&c===a.f["sans-serif"])||(d=U()&&ma(a,b,c));d?q()-a.A>=a.w?U()&&ma(a,b,c)&&(null===a.u||a.u.hasOwnProperty(a.a.c))?V(a,a.v):V(a,a.B):na(a):V(a,a.v)}function na(a){setTimeout(p(function(){la(this)},a),50)}function V(a,b){setTimeout(p(function(){v(this.g.a);v(this.h.a);v(this.j.a);v(this.o.a);b(this.a)},a),0)};function W(a,b,c){this.c=a;this.a=b;this.f=0;this.o=this.j=!1;this.s=c}var X=null;W.prototype.g=function(a){var b=this.a;b.g&&w(b.f,[b.a.c("wf",a.c,K(a).toString(),"active")],[b.a.c("wf",a.c,K(a).toString(),"loading"),b.a.c("wf",a.c,K(a).toString(),"inactive")]);L(b,"fontactive",a);this.o=!0;oa(this)};
W.prototype.h=function(a){var b=this.a;if(b.g){var c=y(b.f,b.a.c("wf",a.c,K(a).toString(),"active")),d=[],e=[b.a.c("wf",a.c,K(a).toString(),"loading")];c||d.push(b.a.c("wf",a.c,K(a).toString(),"inactive"));w(b.f,d,e)}L(b,"fontinactive",a);oa(this)};function oa(a){0==--a.f&&a.j&&(a.o?(a=a.a,a.g&&w(a.f,[a.a.c("wf","active")],[a.a.c("wf","loading"),a.a.c("wf","inactive")]),L(a,"active")):M(a.a))};function pa(a){this.j=a;this.a=new ja;this.h=0;this.f=this.g=!0}pa.prototype.load=function(a){this.c=new ca(this.j,a.context||this.j);this.g=!1!==a.events;this.f=!1!==a.classes;qa(this,new ha(this.c,a),a)};
function ra(a,b,c,d,e){var f=0==--a.h;(a.f||a.g)&&setTimeout(function(){var a=e||null,k=d||null||{};if(0===c.length&&f)M(b.a);else{b.f+=c.length;f&&(b.j=f);var h,m=[];for(h=0;h<c.length;h++){var l=c[h],n=k[l.c],r=b.a,x=l;r.g&&w(r.f,[r.a.c("wf",x.c,K(x).toString(),"loading")]);L(r,"fontloading",x);r=null;if(null===X)if(window.FontFace){var x=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent),ya=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);
X=x?42<parseInt(x[1],10):ya?!1:!0}else X=!1;X?r=new Q(p(b.g,b),p(b.h,b),b.c,l,b.s,n):r=new R(p(b.g,b),p(b.h,b),b.c,l,b.s,a,n);m.push(r)}for(h=0;h<m.length;h++)m[h].start()}},0)}function qa(a,b,c){var d=[],e=c.timeout;ia(b);var d=ka(a.a,c,a.c),f=new W(a.c,b,e);a.h=d.length;b=0;for(c=d.length;b<c;b++)d[b].load(function(b,d,c){ra(a,f,b,d,c)})};function sa(a,b){this.c=a;this.a=b}function ta(a,b,c){var d=z(a.c);a=(a.a.api||"fast.fonts.net/jsapi").replace(/^.*http(s?):(\/\/)?/,"");return d+"//"+a+"/"+b+".js"+(c?"?v="+c:"")}
sa.prototype.load=function(a){function b(){if(f["__mti_fntLst"+d]){var c=f["__mti_fntLst"+d](),e=[],h;if(c)for(var m=0;m<c.length;m++){var l=c[m].fontfamily;void 0!=c[m].fontStyle&&void 0!=c[m].fontWeight?(h=c[m].fontStyle+c[m].fontWeight,e.push(new H(l,h))):e.push(new H(l))}a(e)}else setTimeout(function(){b()},50)}var c=this,d=c.a.projectId,e=c.a.version;if(d){var f=c.c.m;B(this.c,ta(c,d,e),function(e){e?a([]):(f["__MonotypeConfiguration__"+d]=function(){return c.a},b())}).id="__MonotypeAPIScript__"+
d}else a([])};function ua(a,b){this.c=a;this.a=b}ua.prototype.load=function(a){var b,c,d=this.a.urls||[],e=this.a.families||[],f=this.a.testStrings||{},g=new C;b=0;for(c=d.length;b<c;b++)A(this.c,d[b],D(g));var k=[];b=0;for(c=e.length;b<c;b++)if(d=e[b].split(":"),d[1])for(var h=d[1].split(","),m=0;m<h.length;m+=1)k.push(new H(d[0],h[m]));else k.push(new H(d[0]));F(g,function(){a(k,f)})};function va(a,b,c){a?this.c=a:this.c=b+wa;this.a=[];this.f=[];this.g=c||""}var wa="//fonts.googleapis.com/css";function xa(a,b){for(var c=b.length,d=0;d<c;d++){var e=b[d].split(":");3==e.length&&a.f.push(e.pop());var f="";2==e.length&&""!=e[1]&&(f=":");a.a.push(e.join(f))}}
function za(a){if(0==a.a.length)throw Error("No fonts to load!");if(-1!=a.c.indexOf("kit="))return a.c;for(var b=a.a.length,c=[],d=0;d<b;d++)c.push(a.a[d].replace(/ /g,"+"));b=a.c+"?family="+c.join("%7C");0<a.f.length&&(b+="&subset="+a.f.join(","));0<a.g.length&&(b+="&text="+encodeURIComponent(a.g));return b};function Aa(a){this.f=a;this.a=[];this.c={}}
var Ba={latin:"BESbswy","latin-ext":"\u00e7\u00f6\u00fc\u011f\u015f",cyrillic:"\u0439\u044f\u0416",greek:"\u03b1\u03b2\u03a3",khmer:"\u1780\u1781\u1782",Hanuman:"\u1780\u1781\u1782"},Ca={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Da={i:"i",italic:"i",n:"n",normal:"n"},
Ea=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
function Fa(a){for(var b=a.f.length,c=0;c<b;c++){var d=a.f[c].split(":"),e=d[0].replace(/\+/g," "),f=["n4"];if(2<=d.length){var g;var k=d[1];g=[];if(k)for(var k=k.split(","),h=k.length,m=0;m<h;m++){var l;l=k[m];if(l.match(/^[\w-]+$/)){var n=Ea.exec(l.toLowerCase());if(null==n)l="";else{l=n[2];l=null==l||""==l?"n":Da[l];n=n[1];if(null==n||""==n)n="4";else var r=Ca[n],n=r?r:isNaN(n)?"4":n.substr(0,1);l=[l,n].join("")}}else l="";l&&g.push(l)}0<g.length&&(f=g);3==d.length&&(d=d[2],g=[],d=d?d.split(","):
g,0<d.length&&(d=Ba[d[0]])&&(a.c[e]=d))}a.c[e]||(d=Ba[e])&&(a.c[e]=d);for(d=0;d<f.length;d+=1)a.a.push(new H(e,f[d]))}};function Ga(a,b){this.c=a;this.a=b}var Ha={Arimo:!0,Cousine:!0,Tinos:!0};Ga.prototype.load=function(a){var b=new C,c=this.c,d=new va(this.a.api,z(c),this.a.text),e=this.a.families;xa(d,e);var f=new Aa(e);Fa(f);A(c,za(d),D(b));F(b,function(){a(f.a,f.c,Ha)})};function Ia(a,b){this.c=a;this.a=b}Ia.prototype.load=function(a){var b=this.a.id,c=this.c.m;b?B(this.c,(this.a.api||"https://use.typekit.net")+"/"+b+".js",function(b){if(b)a([]);else if(c.Typekit&&c.Typekit.config&&c.Typekit.config.fn){b=c.Typekit.config.fn;for(var e=[],f=0;f<b.length;f+=2)for(var g=b[f],k=b[f+1],h=0;h<k.length;h++)e.push(new H(g,k[h]));try{c.Typekit.load({events:!1,classes:!1,async:!0})}catch(m){}a(e)}},2E3):a([])};function Ja(a,b){this.c=a;this.f=b;this.a=[]}Ja.prototype.load=function(a){var b=this.f.id,c=this.c.m,d=this;b?(c.__webfontfontdeckmodule__||(c.__webfontfontdeckmodule__={}),c.__webfontfontdeckmodule__[b]=function(b,c){for(var g=0,k=c.fonts.length;g<k;++g){var h=c.fonts[g];d.a.push(new H(h.name,ga("font-weight:"+h.weight+";font-style:"+h.style)))}a(d.a)},B(this.c,z(this.c)+(this.f.api||"//f.fontdeck.com/s/css/js/")+ea(this.c)+"/"+b+".js",function(b){b&&a([])})):a([])};var Y=new pa(window);Y.a.c.custom=function(a,b){return new ua(b,a)};Y.a.c.fontdeck=function(a,b){return new Ja(b,a)};Y.a.c.monotype=function(a,b){return new sa(b,a)};Y.a.c.typekit=function(a,b){return new Ia(b,a)};Y.a.c.google=function(a,b){return new Ga(b,a)};var Z={load:p(Y.load,Y)}; true?!(__WEBPACK_AMD_DEFINE_RESULT__ = function(){return Z}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"undefined"!==typeof module&&module.exports?module.exports=Z:(window.WebFont=Z,window.WebFontConfig&&Y.load(window.WebFontConfig));}());


/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_selection_control__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_css__ = __webpack_require__(1);
/* unused harmony reexport vars */
/* unused harmony export classes */




var layout$1 = (function (selector, componentVars) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_polythene_selection_control__["b" /* layout */])(selector, componentVars, "radio");
});

var color$1 = (function (selector, componentVars) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_polythene_selection_control__["d" /* color */])(selector, componentVars);
});

var iconOff = __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.trust("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z\"/></svg>");

var iconOn = __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.trust("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z\"/></svg>");

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [layout$1, color$1];
var selector = ".pe-control.pe-radio-control";

var customTheme = function customTheme(customSelector, customVars) {
  return __WEBPACK_IMPORTED_MODULE_2_polythene_css__["b" /* styler */].generateStyles([customSelector, selector], _extends$1({}, __WEBPACK_IMPORTED_MODULE_1_polythene_selection_control__["a" /* vars */], customVars), fns);
};

__WEBPACK_IMPORTED_MODULE_2_polythene_css__["b" /* styler */].generateStyles([selector], __WEBPACK_IMPORTED_MODULE_1_polythene_selection_control__["a" /* vars */], fns);

var theme = {
  iconOff: iconOff,
  iconOn: iconOn
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var classes = {
  component: "pe-radio-control"
};

var view = function view(vnode) {
  return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_selection_control__["c" /* selectionControl */], _extends({}, vnode.attrs, {
    theme: theme,
    controlView: __WEBPACK_IMPORTED_MODULE_1_polythene_selection_control__["e" /* controlView */],
    selectable: vnode.attrs.selectable || function (selected) {
      return !selected;
    }, // default: only selectable when not checked
    defaultClass: classes.component,
    type: "radio"
  }));
};

var radioButton = {
  theme: customTheme, // accepts (selector, vars)
  view: view
};

/* harmony default export */ __webpack_exports__["a"] = (radioButton);


/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_selection_control__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_shadow__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_icon_button__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_polythene_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_polythene_theme__ = __webpack_require__(2);
/* unused harmony export classes */
/* unused harmony export controlView */
/* unused harmony export controlViewClasses */
/* unused harmony export vars */







var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var classes$1 = {
  track: "pe-switch-control__track",
  thumb: "pe-switch-control__thumb",
  knob: "pe-switch-control__knob"
};

var controlView = function controlView(checked, attrs) {
  var zOff = attrs.zOff !== undefined ? attrs.zOff : 1;
  var zOn = attrs.zOn !== undefined ? attrs.zOn : 2;
  var z = checked ? zOn : zOff;
  var raised = attrs.disabled ? false : attrs.raised !== undefined ? attrs.raised : true;
  return [__WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
    class: classes$1.track
  }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_3_polythene_icon_button__["a" /* default */], _extends$1({}, {
    class: classes$1.thumb,
    content: [__WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
      class: classes$1.knob
    }, [attrs.icon ? attrs.icon : null, raised ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_shadow__["a" /* default */], {
      z: z,
      animated: true
    }) : null])],
    style: attrs.style,
    disabled: attrs.disabled,
    events: attrs.events,
    ink: attrs.ink || false
  }, attrs.selectable !== undefined ? { inactive: !attrs.selectable(checked) } : null, attrs.iconButton))];
};

var _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var rgba = __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].rgba;
var hit_area_padding = (__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].grid_unit_icon_button - __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].unit_icon_size) / 2; // 12

var vars$3 = _extends$3({}, __WEBPACK_IMPORTED_MODULE_1_polythene_selection_control__["a" /* vars */], {
  track_height: 14,
  track_length: 36,
  thumb_size: 20,
  padding: __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].grid_unit_component,
  icon_button_padding: __WEBPACK_IMPORTED_MODULE_3_polythene_icon_button__["b" /* vars */].padding,
  hit_area_padding: hit_area_padding,

  animation_duration: __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].animation_duration,

  color_light_thumb_on: rgba(__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_primary),
  color_light_thumb_off: "#f1f1f1",
  color_light_thumb_disabled: "#bdbdbd",

  color_light_track_on: rgba(__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_primary_faded),
  color_light_track_on_opacity: .55,
  color_light_track_off: rgba(__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].blend_light_text_regular),
  color_light_track_off_opacity: .55,
  color_light_track_disabled: rgba(__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].blend_light_background_disabled),
  color_light_track_disabled_opacity: 1,

  // icon color may be set in theme; default "currentcolor"
  // color_light_icon_on:                   "currentcolor",
  // color_light_icon_off:                  "currentcolor",

  // color_light_focus_on and so on taken from selectionControlVars

  color_dark_thumb_on: rgba(__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_primary), // or "#80cbc4"
  color_dark_thumb_off: "#bdbdbd",
  color_dark_thumb_disabled: "#555",

  color_dark_track_on: rgba(__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_primary_faded, __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].blend_dark_text_tertiary), // or "#5a7f7c"
  color_dark_track_on_opacity: 9,
  color_dark_track_off: "#717171",
  color_dark_track_off_opacity: .55,
  color_dark_track_disabled: "#717171",
  color_dark_track_disabled_opacity: .3

});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var transition = function transition(componentVars, properties) {
  var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : componentVars.animation_duration;
  return [__WEBPACK_IMPORTED_MODULE_4_polythene_css__["c" /* mixin */].defaultTransition(properties, duration, "ease-out")];
};

var customSize = function customSize(componentVars, size) {
  var factor = size / __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].unit_icon_size;
  var thumbSize = Math.floor(0.5 * componentVars.thumb_size * factor) * 2; // round to even
  var scaledTrackHeight = Math.floor(0.5 * componentVars.track_height * factor) * 2; // round to even
  var scaledTrackWidth = Math.floor(0.5 * componentVars.track_length * factor) * 2;
  var scaledThumbSize = Math.floor(0.5 * componentVars.thumb_size * factor) * 2;
  var trackTop = (componentVars.label_height * factor - scaledTrackHeight) / 2;
  var thumbPadding = componentVars.icon_button_padding;
  var thumbMargin = (size - scaledThumbSize) / 2;
  var thumbOuterSize = size + 2 * thumbPadding;
  var thumbOffsetMin = -(thumbOuterSize / 2) + thumbSize / 2;
  var thumbOffsetMax = thumbOffsetMin + scaledTrackWidth - thumbSize;
  var thumbOffsetY = thumbOffsetMin + thumbMargin;
  var trackVisualOffset = 0.3; // prevent sub pixel of track to shine through knob border

  return {
    " .pe-control__form-label": {
      height: size + "px",
      minWidth: scaledTrackWidth + "px"
    },
    " .pe-control__label": {
      paddingLeft: componentVars.padding * factor + 8 + scaledTrackWidth + "px"
    },
    " .pe-switch-control__track": {
      left: trackVisualOffset + "px",
      height: scaledTrackHeight + "px",
      width: scaledTrackWidth - 2 * trackVisualOffset + "px",
      top: trackTop + "px",
      borderRadius: scaledTrackHeight + "px"
    },
    " .pe-switch-control__thumb": {
      top: thumbOffsetY + "px",
      left: thumbOffsetMin + "px"
    },

    " .pe-switch-control__knob": {
      width: scaledThumbSize + "px",
      height: scaledThumbSize + "px",
      margin: thumbMargin + "px"
    },

    " .pe-button__content": {
      padding: thumbPadding + "px"
    },

    ".pe-control--on": {
      " .pe-switch-control__thumb": {
        left: thumbOffsetMax + "px"
      }
    }
  };
};

var layout$1 = (function (selector, componentVars) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_polythene_selection_control__["b" /* layout */])(selector, componentVars, "checkbox").concat([_defineProperty({}, selector, {
    " .pe-switch-control__track": [transition(componentVars, "background, opacity"), {
      position: "absolute",
      left: 0
    }],

    " .pe-switch-control__thumb": [transition(componentVars, "left, color"), {
      position: "absolute",
      zIndex: 1, // Prevents flickering of text label when toggling
      color: "inherit",

      ":focus": {
        outline: 0
      }
    }],

    " .pe-switch-control__knob": {
      position: "relative",
      borderRadius: "50%"
    },

    " .pe-button__content .pe-switch-control__knob .pe-icon": [__WEBPACK_IMPORTED_MODULE_4_polythene_css__["c" /* mixin */].fit(), transition(componentVars, "color"), {
      width: "100%",
      height: "100%"
    }],

    " .pe-button__focus": [transition(componentVars, "all")],

    ".pe-control--small": customSize(componentVars, __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].unit_icon_size_small),
    ".pe-control--regular": customSize(componentVars, __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].unit_icon_size),
    ".pe-control--medium": customSize(componentVars, __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].unit_icon_size_medium),
    ".pe-control--large": customSize(componentVars, __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].unit_icon_size_large)
  })]);
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = function style(scopes, selector, componentVars, tint) {
  return [_defineProperty$1({}, scopes.map(function (s) {
    return s + selector;
  }).join(","), {
    ".pe-control--off": {
      " .pe-switch-control__track": {
        opacity: componentVars["color_" + tint + "_track_off_opacity"],
        backgroundColor: componentVars["color_" + tint + "_track_off"]
      },
      " .pe-switch-control__thumb": {
        color: componentVars["color_" + tint + "_thumb_off"]
      },
      " .pe-switch-control__knob": {
        backgroundColor: "currentcolor"
      },
      " .pe-button--focus": {
        " .pe-button__focus": {
          opacity: componentVars["color_" + tint + "_focus_off_opacity"],
          backgroundColor: componentVars["color_" + tint + "_focus_off"]
        }
      },
      " .pe-icon": {
        color: componentVars["color_" + tint + "_icon_off"] || "currentcolor"
      }
    },

    ".pe-control--on": {
      " .pe-switch-control__track": {
        opacity: componentVars["color_" + tint + "_track_on_opacity"],
        backgroundColor: componentVars["color_" + tint + "_track_on"]
      },
      " .pe-switch-control__thumb": {
        color: componentVars["color_" + tint + "_thumb_on"]
      },
      " .pe-switch-control__knob": {
        backgroundColor: "currentcolor"
      },
      " .pe-button--focus": {
        " .pe-button__focus": {
          opacity: componentVars["color_" + tint + "_focus_on_opacity"],
          backgroundColor: componentVars["color_" + tint + "_focus_on"]
        }
      },
      " .pe-icon": {
        color: componentVars["color_" + tint + "_icon_on"] || "currentcolor"
      }
    },

    ".pe-control--on.pe-control--disabled, &.pe-control--off.pe-control--disabled": {
      " .pe-switch-control__track": {
        opacity: componentVars["color_" + tint + "_track_disabled_opacity"],
        backgroundColor: componentVars["color_" + tint + "_track_disabled"]
      },
      " .pe-switch-control__thumb": {
        color: componentVars["color_" + tint + "_thumb_disabled"]
      }
    }
  })];
};

var color = (function (selector, componentVars) {
  return [style([".pe-dark-theme", ".pe-dark-theme "], selector, componentVars, "dark"), // has/inside dark theme
  style(["", ".pe-light-theme", ".pe-light-theme "], selector, componentVars, "light")];
});

var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [layout$1, color];
var selector = ".pe-control.pe-switch-control";

var customTheme = function customTheme(customSelector, customVars) {
  return __WEBPACK_IMPORTED_MODULE_4_polythene_css__["b" /* styler */].generateStyles([customSelector, selector], _extends$2({}, vars$3, customVars), fns);
};

__WEBPACK_IMPORTED_MODULE_4_polythene_css__["b" /* styler */].generateStyles([selector], vars$3, fns);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var classes$$1 = {
  component: "pe-switch-control"
};

var view = function view(vnode) {
  return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_selection_control__["c" /* selectionControl */], _extends({}, vnode.attrs, {
    controlView: controlView,
    selectable: vnode.attrs.selectable || function () {
      return true;
    }, // default: always selectable, regardless the checked state
    defaultClass: classes$$1.component,
    type: "checkbox"
  }));
};

var switchButton = {
  theme: customTheme, // accepts (selector, vars)
  view: view
};

/* harmony default export */ __webpack_exports__["a"] = (switchButton);


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>');


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/></svg>');


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></svg>');


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>');


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/></svg>');


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>');


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>');


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>');


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>');


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"/></svg>');


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>');


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>');


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/></svg>');


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" baseProfile="full" width="24" height="24" viewBox="0 0 24.00 24.00" enable-background="new 0 0 24.00 24.00" xml:space="preserve"><path fill="#000000" fill-opacity="1" stroke-width="0.2" stroke-linejoin="round" d="M 14,20C 14,21.1046 13.1046,22 12,22C 10.8954,22 10,21.1046 10,20L 14,20 Z M 12,2.00001C 12.5523,2.00001 13,2.44772 13,3L 13,4.08298C 15.8377,4.55905 18,7.02702 18,10L 18,16L 21,19L 3,19L 6,16L 6.00001,9.99998C 6.00001,7.02698 8.1623,4.55902 11,4.08294L 11,3C 11,2.44772 11.4477,2.00001 12,2.00001 Z "/></svg>');


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" baseProfile="full" width="24" height="24" viewBox="0 0 24.00 24.00" enable-background="new 0 0 24.00 24.00" xml:space="preserve"><path fill="#050708" fill-opacity="1" stroke-width="0.2" stroke-linejoin="round" d="M 16.9994,2.99805L 6.9994,2.99805C 5.8954,2.99805 5.0104,3.89404 5.0104,4.99805L 4.9994,20.998L 11.9994,17.998L 18.9994,20.998L 18.9994,4.99805C 18.9994,3.89404 18.1044,2.99805 16.9994,2.99805 Z "/></svg>');


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" baseProfile="full" width="24" height="24" viewBox="0 0 24.00 24.00" enable-background="new 0 0 24.00 24.00" xml:space="preserve"><path fill="#000000" fill-opacity="1" stroke-width="0.2" stroke-linejoin="round" d="M 11.9994,0.998068C 7.02841,0.998068 2.9994,5.02706 2.9994,9.99807L 2.9994,16.9981C 2.9994,18.6551 4.3424,19.9981 5.9994,19.9981L 8.9994,19.9981L 8.9994,11.9981L 4.9994,11.9981L 4.9994,9.99807C 4.9994,6.13207 8.1334,2.99807 11.9994,2.99807C 15.8654,2.99807 18.9994,6.13207 18.9994,9.99807L 18.9994,11.9981L 14.9994,11.9981L 14.9994,19.9981L 17.9994,19.9981C 19.6564,19.9981 20.9994,18.6551 20.9994,16.9981L 20.9994,9.99807C 20.9994,5.02706 16.9704,0.998068 11.9994,0.998068 Z "/></svg>');


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" baseProfile="full" width="24" height="24" viewBox="0 0 24.00 24.00" enable-background="new 0 0 24.00 24.00" xml:space="preserve"><path fill="#000000" fill-opacity="1" stroke-width="0.2" stroke-linejoin="round" d="M 11.9994,15.498C 10.0664,15.498 8.49939,13.931 8.49939,11.998C 8.49939,10.0651 10.0664,8.49805 11.9994,8.49805C 13.9324,8.49805 15.4994,10.0651 15.4994,11.998C 15.4994,13.931 13.9324,15.498 11.9994,15.498 Z M 19.4284,12.9741C 19.4704,12.6531 19.4984,12.329 19.4984,11.998C 19.4984,11.6671 19.4704,11.343 19.4284,11.022L 21.5414,9.36804C 21.7294,9.21606 21.7844,8.94604 21.6594,8.73004L 19.6594,5.26605C 19.5354,5.05005 19.2734,4.96204 19.0474,5.04907L 16.5584,6.05206C 16.0424,5.65607 15.4774,5.32104 14.8684,5.06903L 14.4934,2.41907C 14.4554,2.18103 14.2484,1.99805 13.9994,1.99805L 9.99939,1.99805C 9.74939,1.99805 9.5434,2.18103 9.5054,2.41907L 9.1304,5.06805C 8.52039,5.32104 7.95538,5.65607 7.43939,6.05206L 4.95139,5.04907C 4.7254,4.96204 4.46338,5.05005 4.33939,5.26605L 2.33939,8.73004C 2.21439,8.94604 2.26938,9.21606 2.4574,9.36804L 4.5694,11.022C 4.5274,11.342 4.49939,11.6671 4.49939,11.998C 4.49939,12.329 4.5274,12.6541 4.5694,12.9741L 2.4574,14.6271C 2.26938,14.78 2.21439,15.05 2.33939,15.2661L 4.33939,18.73C 4.46338,18.946 4.7254,19.0341 4.95139,18.947L 7.4404,17.944C 7.95639,18.34 8.52139,18.675 9.1304,18.9271L 9.5054,21.577C 9.5434,21.8151 9.74939,21.998 9.99939,21.998L 13.9994,21.998C 14.2484,21.998 14.4554,21.8151 14.4934,21.577L 14.8684,18.9271C 15.4764,18.6741 16.0414,18.34 16.5574,17.9431L 19.0474,18.947C 19.2734,19.0341 19.5354,18.946 19.6594,18.73L 21.6594,15.2661C 21.7844,15.05 21.7294,14.78 21.5414,14.6271L 19.4284,12.9741 Z "/></svg>');


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" baseProfile="full" width="24" height="24" viewBox="0 0 24.00 24.00" enable-background="new 0 0 24.00 24.00" xml:space="preserve"><path fill="#000000" fill-opacity="1" stroke-width="0.2" stroke-linejoin="round" d="M 20.9994,10.9981L 13.9994,3.99807L 13.9994,7.99807C 6.9994,8.99807 3.9994,13.9981 2.9994,18.9981C 5.4994,15.4981 8.9994,13.8981 13.9994,13.8981L 13.9994,17.9981L 20.9994,10.9981 Z "/></svg>');


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>wrench</title><desc>Created with Sketch.</desc><defs></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="wrench" fill="#000000"><path d="M9.42239525,7.09396812 C10.2387498,5.25806681 9.89409813,3.03105216 8.38844025,1.52539428 C6.93864576,0.0755997864 4.82002948,-0.297742297 3.02577331,0.40536803 L6.97422669,4.35382141 L4.14579956,7.18224853 L0.197346187,3.23379515 C-0.50576414,5.02805132 -0.132422056,7.1466676 1.31737244,8.59646209 C2.70997507,9.98906472 4.71967257,10.3884681 6.46624524,9.79467236 L16.5961941,19.9246212 L19.4246212,17.0961941 L9.42239525,7.09396812 Z" id="Combined-Shape"></path></g></g></svg>');


/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map