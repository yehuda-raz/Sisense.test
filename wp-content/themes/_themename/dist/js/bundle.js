/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/bundle.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/_variables.js":
/*!******************************!*\
  !*** ./src/js/_variables.js ***!
  \******************************/
/*! exports provided: containeMaxWidths */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containeMaxWidths", function() { return containeMaxWidths; });
// This one need to be equle to the values in "scss _variables.scss"
var containeMaxWidths = {
  sm: 540,
  md: 720,
  lg: 960,
  xl: 1200
};


/***/ }),

/***/ "./src/js/bundle.js":
/*!**************************!*\
  !*** ./src/js/bundle.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vanila_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vanila/navigation */ "./src/js/vanila/navigation.js");
/* harmony import */ var _vanila_navigation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vanila_navigation__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vanila_skip_link_focus_fix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vanila/skip-link-focus-fix */ "./src/js/vanila/skip-link-focus-fix.js");
/* harmony import */ var _vanila_skip_link_focus_fix__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vanila_skip_link_focus_fix__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_general__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/general */ "./src/js/components/general.js");
/* harmony import */ var _components_general__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_general__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_fixed_responsive_nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/fixed-responsive-nav */ "./src/js/components/fixed-responsive-nav.js");
/* harmony import */ var _components_sis_add_show_new_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sis-add-show-new-post */ "./src/js/components/sis-add-show-new-post.js");
$ = jQuery.noConflict();






/***/ }),

/***/ "./src/js/components/fixed-responsive-nav.js":
/*!***************************************************!*\
  !*** ./src/js/components/fixed-responsive-nav.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_variables */ "./src/js/_variables.js");

jQuery(document).ready(function ($) {
  checkSize();
  $('.nav-toggle').click(function (e) {
    $(e.target).toggleClass('active');
    $('body').toggleClass('nav-active');
  });
  $(window).on('resize', function () {
    checkSize();
  });
});

var checkSize = function checkSize() {
  if ($(window).width() < _variables__WEBPACK_IMPORTED_MODULE_0__["containeMaxWidths"].lg) {
    $('.nav-sis').addClass('responsive-nav');
    $('.nav-toggle').css('display', 'block');
  } else {
    $('.nav-sis').removeClass('responsive-nav');
    $('body').removeClass('nav-active');
    $('.nav-toggle').removeClass('active');
    $('.nav-toggle').css('display', 'none');
  }
};

/***/ }),

/***/ "./src/js/components/general.js":
/*!**************************************!*\
  !*** ./src/js/components/general.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

jQuery(document).ready(function ($) {
  $('a[href$="#"]').click(function (event) {
    event.preventDefault ? event.preventDefault() : event.returnValue = false;
  });
});

/***/ }),

/***/ "./src/js/components/sis-add-show-new-post.js":
/*!****************************************************!*\
  !*** ./src/js/components/sis-add-show-new-post.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vanila_general__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vanila/general */ "./src/js/vanila/general.js");

jQuery(document).ready(function ($) {
  var formBtn = $('#sis-add-post-submission-form button');
  $('#sis-add-post-submission-form input ,#sis-add-post-submission-form  textarea').keyup(function (e) {
    Object(_vanila_general__WEBPACK_IMPORTED_MODULE_0__["isFiledValid"])(e.target, formBtn);
  }); // for silde new post

  $(window).resize(function () {
    Object(_vanila_general__WEBPACK_IMPORTED_MODULE_0__["slidersize"])($('.sis-slider'), $('.sis-slider article'));
  });
  Object(_vanila_general__WEBPACK_IMPORTED_MODULE_0__["slidersize"])($('.sis-slider'), $('.sis-slider article'));
  $('#sis-add-post-submission-form').on('submit', function (e) {
    e.preventDefault();
    var formPassVaildation = true;
    $(e.target).find('input , textarea').each(function (index, element) {
      var inputPassVaildation = Object(_vanila_general__WEBPACK_IMPORTED_MODULE_0__["isFiledValid"])(element, formBtn);

      if (!inputPassVaildation) {
        formPassVaildation = false;
      }
    });

    if (formPassVaildation) {
      $('.loader-div').css("display", "flex").hide().fadeIn(100);
      var data = {
        title: $('#sis-add-post-title').val().trim(),
        excerpt: $('#sis-add-post-excerpt').val().trim(),
        status: 'publish'
      };
      $.ajax({
        method: "POST",
        url: POST_SUBMITTER.root + 'wp/v2/posts',
        data: data,
        beforeSend: function beforeSend(xhr) {
          POST_SUBMITTER.login ? xhr.setRequestHeader('X-WP-Nonce', POST_SUBMITTER.nonce) : xhr.setRequestHeader('Authorization', 'Basic ' + _vanila_general__WEBPACK_IMPORTED_MODULE_0__["Base64"].encode('Unknown:Unknown'));
        },
        success: function success(response) {
          var preArticle = $('.sis-slider-wrap article');
          var newArticle = "<article>\n                                            <h3>".concat(response.title.raw, "</h3>\n                                            <p class=\"date-create\">").concat(Object(_vanila_general__WEBPACK_IMPORTED_MODULE_0__["convertDate"])(response.date), " ").concat(Object(_vanila_general__WEBPACK_IMPORTED_MODULE_0__["convertAmPmTime"])(response.date), "</p>\n                                            ").concat(response.excerpt.rendered, "\n                                        </article>");

          if ($('.sis-slider-wrap')) {
            $(".sis-slider-wrap").append(newArticle);
            Object(_vanila_general__WEBPACK_IMPORTED_MODULE_0__["slidersize"])($('.sis-slider'), $('.sis-slider article'));
          }

          $('.sis-slider-wrap').css('left', "-".concat(preArticle.width(), "px")); //preArticle.css('margin-right', `-${preArticle.width()}px`);
          //preArticle.css('margin-right', '5px');

          $('.loader-div').css('display', 'none');
          $('#confirm_msg').css("display", "flex").hide().fadeIn(); // alert(POST_SUBMITTER.success);
        },
        fail: function fail(response) {
          console.log(response);
          alert(POST_SUBMITTER.failure);
        }
      });
    }
  });
});

/***/ }),

/***/ "./src/js/vanila/general.js":
/*!**********************************!*\
  !*** ./src/js/vanila/general.js ***!
  \**********************************/
/*! exports provided: convertDate, convertAmPmTime, Base64, isFiledValid, slidersize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertDate", function() { return convertDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertAmPmTime", function() { return convertAmPmTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Base64", function() { return Base64; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFiledValid", function() { return isFiledValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slidersize", function() { return slidersize; });
var convertDate = function convertDate(date) {
  var d = new Date(date);
  var ye = new Intl.DateTimeFormat('en', {
    year: 'numeric'
  }).format(d);
  var mo = new Intl.DateTimeFormat('en', {
    month: 'long'
  }).format(d);
  var da = new Intl.DateTimeFormat('en', {
    day: '2-digit'
  }).format(d);
  return "".concat(mo, " ").concat(da, ", ").concat(ye);
};
var convertAmPmTime = function convertAmPmTime(date) {
  var d = new Date(date);
  var h = d.getHours();
  var m = d.getMinutes(); // Check whether AM or PM 

  var ampm = h >= 12 ? 'PM' : 'AM'; // Find current hour in AM-PM Format 

  h = h % 12; // To display "0" as "12" 

  h = h ? h : 12;
  m = m < 10 ? '0' + m : m;
  return "".concat(h, ":").concat(m, " ").concat(ampm);
};
var Base64 = {
  _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  encode: function encode(e) {
    var t = "";
    var n, r, i, s, o, u, a;
    var f = 0;
    e = Base64._utf8_encode(e);

    while (f < e.length) {
      n = e.charCodeAt(f++);
      r = e.charCodeAt(f++);
      i = e.charCodeAt(f++);
      s = n >> 2;
      o = (n & 3) << 4 | r >> 4;
      u = (r & 15) << 2 | i >> 6;
      a = i & 63;

      if (isNaN(r)) {
        u = a = 64;
      } else if (isNaN(i)) {
        a = 64;
      }

      t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a);
    }

    return t;
  },
  decode: function decode(e) {
    var t = "";
    var n, r, i;
    var s, o, u, a;
    var f = 0;
    e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");

    while (f < e.length) {
      s = this._keyStr.indexOf(e.charAt(f++));
      o = this._keyStr.indexOf(e.charAt(f++));
      u = this._keyStr.indexOf(e.charAt(f++));
      a = this._keyStr.indexOf(e.charAt(f++));
      n = s << 2 | o >> 4;
      r = (o & 15) << 4 | u >> 2;
      i = (u & 3) << 6 | a;
      t = t + String.fromCharCode(n);

      if (u != 64) {
        t = t + String.fromCharCode(r);
      }

      if (a != 64) {
        t = t + String.fromCharCode(i);
      }
    }

    t = Base64._utf8_decode(t);
    return t;
  },
  _utf8_encode: function _utf8_encode(e) {
    e = e.replace(/\r\n/g, "\n");
    var t = "";

    for (var n = 0; n < e.length; n++) {
      var r = e.charCodeAt(n);

      if (r < 128) {
        t += String.fromCharCode(r);
      } else if (r > 127 && r < 2048) {
        t += String.fromCharCode(r >> 6 | 192);
        t += String.fromCharCode(r & 63 | 128);
      } else {
        t += String.fromCharCode(r >> 12 | 224);
        t += String.fromCharCode(r >> 6 & 63 | 128);
        t += String.fromCharCode(r & 63 | 128);
      }
    }

    return t;
  },
  _utf8_decode: function _utf8_decode(e) {
    var t = "";
    var n = 0;
    var r = c1 = c2 = 0;

    while (n < e.length) {
      r = e.charCodeAt(n);

      if (r < 128) {
        t += String.fromCharCode(r);
        n++;
      } else if (r > 191 && r < 224) {
        c2 = e.charCodeAt(n + 1);
        t += String.fromCharCode((r & 31) << 6 | c2 & 63);
        n += 2;
      } else {
        c2 = e.charCodeAt(n + 1);
        c3 = e.charCodeAt(n + 2);
        t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
        n += 3;
      }
    }

    return t;
  }
};

var uiValidator = function uiValidator(element, isvalid, btn) {
  if (isvalid) {
    $(element).removeClass('alert-danger');
    $(btn).removeClass('not-hover');
    return true;
  } else {
    $(element).addClass('alert-danger');
    $(btn).addClass('not-hover');
    return false;
  }
};

var isFiledValid = function isFiledValid(element, btn) {
  var fieldText = element.value.trim();
  var isvalid = fieldText.length > 5 ? true : false;
  return uiValidator(element, isvalid, btn);
};
var slidersize = function slidersize(perent, sildes) {
  $(sildes).each(function (index, slide) {
    $(slide).css("width", $(perent).width());
  });
};

/***/ }),

/***/ "./src/js/vanila/navigation.js":
/*!*************************************!*\
  !*** ./src/js/vanila/navigation.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */
(function () {
  var container, button, menu, links, i, len;
  container = document.getElementById('site-navigation');

  if (!container) {
    return;
  }

  button = container.getElementsByTagName('button')[0];

  if ('undefined' === typeof button) {
    return;
  }

  menu = container.getElementsByTagName('ul')[0]; // Hide menu toggle button if menu is empty and return early.

  if ('undefined' === typeof menu) {
    button.style.display = 'none';
    return;
  }

  menu.setAttribute('aria-expanded', 'false');

  if (-1 === menu.className.indexOf('nav-menu')) {
    menu.className += ' nav-menu';
  }

  button.onclick = function () {
    if (-1 !== container.className.indexOf('toggled')) {
      container.className = container.className.replace(' toggled', '');
      button.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-expanded', 'false');
    } else {
      container.className += ' toggled';
      button.setAttribute('aria-expanded', 'true');
      menu.setAttribute('aria-expanded', 'true');
    }
  }; // Get all the link elements within the menu.


  links = menu.getElementsByTagName('a'); // Each time a menu link is focused or blurred, toggle focus.

  for (i = 0, len = links.length; i < len; i++) {
    links[i].addEventListener('focus', toggleFocus, true);
    links[i].addEventListener('blur', toggleFocus, true);
  }
  /**
   * Sets or removes .focus class on an element.
   */


  function toggleFocus() {
    var self = this; // Move up through the ancestors of the current link until we hit .nav-menu.

    while (-1 === self.className.indexOf('nav-menu')) {
      // On li elements toggle the class .focus.
      if ('li' === self.tagName.toLowerCase()) {
        if (-1 !== self.className.indexOf('focus')) {
          self.className = self.className.replace(' focus', '');
        } else {
          self.className += ' focus';
        }
      }

      self = self.parentElement;
    }
  }
  /**
   * Toggles `focus` class to allow submenu access on tablets.
   */


  (function (container) {
    var touchStartFn,
        i,
        parentLink = container.querySelectorAll('.menu-item-has-children > a, .page_item_has_children > a');

    if ('ontouchstart' in window) {
      touchStartFn = function touchStartFn(e) {
        var menuItem = this.parentNode,
            i;

        if (!menuItem.classList.contains('focus')) {
          e.preventDefault();

          for (i = 0; i < menuItem.parentNode.children.length; ++i) {
            if (menuItem === menuItem.parentNode.children[i]) {
              continue;
            }

            menuItem.parentNode.children[i].classList.remove('focus');
          }

          menuItem.classList.add('focus');
        } else {
          menuItem.classList.remove('focus');
        }
      };

      for (i = 0; i < parentLink.length; ++i) {
        parentLink[i].addEventListener('touchstart', touchStartFn, false);
      }
    }
  })(container);
})();

/***/ }),

/***/ "./src/js/vanila/skip-link-focus-fix.js":
/*!**********************************************!*\
  !*** ./src/js/vanila/skip-link-focus-fix.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * File skip-link-focus-fix.js.
 *
 * Helps with accessibility for keyboard only users.
 *
 * Learn more: https://git.io/vWdr2
 */
(function () {
  var isIe = /(trident|msie)/i.test(navigator.userAgent);

  if (isIe && document.getElementById && window.addEventListener) {
    window.addEventListener('hashchange', function () {
      var id = location.hash.substring(1),
          element;

      if (!/^[A-z0-9_-]+$/.test(id)) {
        return;
      }

      element = document.getElementById(id);

      if (element) {
        if (!/^(?:a|select|input|button|textarea)$/i.test(element.tagName)) {
          element.tabIndex = -1;
        }

        element.focus();
      }
    }, false);
  }
})();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL192YXJpYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9maXhlZC1yZXNwb25zaXZlLW5hdi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9nZW5lcmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3Npcy1hZGQtc2hvdy1uZXctcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdmFuaWxhL2dlbmVyYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3ZhbmlsYS9uYXZpZ2F0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy92YW5pbGEvc2tpcC1saW5rLWZvY3VzLWZpeC5qcyJdLCJuYW1lcyI6WyJjb250YWluZU1heFdpZHRocyIsInNtIiwibWQiLCJsZyIsInhsIiwiJCIsImpRdWVyeSIsIm5vQ29uZmxpY3QiLCJkb2N1bWVudCIsInJlYWR5IiwiY2hlY2tTaXplIiwiY2xpY2siLCJlIiwidGFyZ2V0IiwidG9nZ2xlQ2xhc3MiLCJ3aW5kb3ciLCJvbiIsIndpZHRoIiwiYWRkQ2xhc3MiLCJjc3MiLCJyZW1vdmVDbGFzcyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJyZXR1cm5WYWx1ZSIsImZvcm1CdG4iLCJrZXl1cCIsImlzRmlsZWRWYWxpZCIsInJlc2l6ZSIsInNsaWRlcnNpemUiLCJmb3JtUGFzc1ZhaWxkYXRpb24iLCJmaW5kIiwiZWFjaCIsImluZGV4IiwiZWxlbWVudCIsImlucHV0UGFzc1ZhaWxkYXRpb24iLCJoaWRlIiwiZmFkZUluIiwiZGF0YSIsInRpdGxlIiwidmFsIiwidHJpbSIsImV4Y2VycHQiLCJzdGF0dXMiLCJhamF4IiwibWV0aG9kIiwidXJsIiwiUE9TVF9TVUJNSVRURVIiLCJyb290IiwiYmVmb3JlU2VuZCIsInhociIsImxvZ2luIiwic2V0UmVxdWVzdEhlYWRlciIsIm5vbmNlIiwiQmFzZTY0IiwiZW5jb2RlIiwic3VjY2VzcyIsInJlc3BvbnNlIiwicHJlQXJ0aWNsZSIsIm5ld0FydGljbGUiLCJyYXciLCJjb252ZXJ0RGF0ZSIsImRhdGUiLCJjb252ZXJ0QW1QbVRpbWUiLCJyZW5kZXJlZCIsImFwcGVuZCIsImZhaWwiLCJjb25zb2xlIiwibG9nIiwiYWxlcnQiLCJmYWlsdXJlIiwiZCIsIkRhdGUiLCJ5ZSIsIkludGwiLCJEYXRlVGltZUZvcm1hdCIsInllYXIiLCJmb3JtYXQiLCJtbyIsIm1vbnRoIiwiZGEiLCJkYXkiLCJoIiwiZ2V0SG91cnMiLCJtIiwiZ2V0TWludXRlcyIsImFtcG0iLCJfa2V5U3RyIiwidCIsIm4iLCJyIiwiaSIsInMiLCJvIiwidSIsImEiLCJmIiwiX3V0ZjhfZW5jb2RlIiwibGVuZ3RoIiwiY2hhckNvZGVBdCIsImlzTmFOIiwiY2hhckF0IiwiZGVjb2RlIiwicmVwbGFjZSIsImluZGV4T2YiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJfdXRmOF9kZWNvZGUiLCJjMSIsImMyIiwiYzMiLCJ1aVZhbGlkYXRvciIsImlzdmFsaWQiLCJidG4iLCJmaWVsZFRleHQiLCJ2YWx1ZSIsInBlcmVudCIsInNpbGRlcyIsInNsaWRlIiwiY29udGFpbmVyIiwiYnV0dG9uIiwibWVudSIsImxpbmtzIiwibGVuIiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInN0eWxlIiwiZGlzcGxheSIsInNldEF0dHJpYnV0ZSIsImNsYXNzTmFtZSIsIm9uY2xpY2siLCJhZGRFdmVudExpc3RlbmVyIiwidG9nZ2xlRm9jdXMiLCJzZWxmIiwidGFnTmFtZSIsInRvTG93ZXJDYXNlIiwicGFyZW50RWxlbWVudCIsInRvdWNoU3RhcnRGbiIsInBhcmVudExpbmsiLCJxdWVyeVNlbGVjdG9yQWxsIiwibWVudUl0ZW0iLCJwYXJlbnROb2RlIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJjaGlsZHJlbiIsInJlbW92ZSIsImFkZCIsImlzSWUiLCJ0ZXN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiaWQiLCJsb2NhdGlvbiIsImhhc2giLCJzdWJzdHJpbmciLCJ0YWJJbmRleCIsImZvY3VzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDakZBO0FBQUE7QUFBQTtBQUNBLElBQU1BLGlCQUFpQixHQUFHO0FBQ3RCQyxJQUFFLEVBQUUsR0FEa0I7QUFFdEJDLElBQUUsRUFBRSxHQUZrQjtBQUd0QkMsSUFBRSxFQUFFLEdBSGtCO0FBSXRCQyxJQUFFLEVBQUU7QUFKa0IsQ0FBMUI7Ozs7Ozs7Ozs7Ozs7QUNEQUM7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUEsQ0FBQyxHQUFHQyxNQUFNLENBQUNDLFVBQVAsRUFBSjtBQUdBO0FBQ0E7QUFJQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FD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QXpCLEVBQXVDLFlBQVc7QUFDakQsVUFBSW9CLEVBQUUsR0FBR0MsUUFBUSxDQUFDQyxJQUFULENBQWNDLFNBQWQsQ0FBeUIsQ0FBekIsQ0FBVDtBQUFBLFVBQ0N4SCxPQUREOztBQUdBLFVBQUssQ0FBSSxnQkFBZ0JrSCxJQUFoQixDQUFzQkcsRUFBdEIsQ0FBVCxFQUF3QztBQUN2QztBQUNBOztBQUVEckgsYUFBTyxHQUFHekIsUUFBUSxDQUFDbUgsY0FBVCxDQUF5QjJCLEVBQXpCLENBQVY7O0FBRUEsVUFBS3JILE9BQUwsRUFBZTtBQUNkLFlBQUssQ0FBSSx3Q0FBd0NrSCxJQUF4QyxDQUE4Q2xILE9BQU8sQ0FBQ29HLE9BQXRELENBQVQsRUFBNkU7QUFDNUVwRyxpQkFBTyxDQUFDeUgsUUFBUixHQUFtQixDQUFDLENBQXBCO0FBQ0E7O0FBRUR6SCxlQUFPLENBQUMwSCxLQUFSO0FBQ0E7QUFDRCxLQWpCRCxFQWlCRyxLQWpCSDtBQWtCQTtBQUNELENBdkJELEkiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvYnVuZGxlLmpzXCIpO1xuIiwiXHJcbi8vIFRoaXMgb25lIG5lZWQgdG8gYmUgZXF1bGUgdG8gdGhlIHZhbHVlcyBpbiBcInNjc3MgX3ZhcmlhYmxlcy5zY3NzXCJcclxuY29uc3QgY29udGFpbmVNYXhXaWR0aHMgPSB7XHJcbiAgICBzbTogNTQwLFxyXG4gICAgbWQ6IDcyMCxcclxuICAgIGxnOiA5NjAsXHJcbiAgICB4bDogMTIwMFxyXG59XHJcblxyXG5cclxuZXhwb3J0IHsgY29udGFpbmVNYXhXaWR0aHMgfTsiLCJcclxuJCA9IGpRdWVyeS5ub0NvbmZsaWN0KCk7XHJcblxyXG5cclxuaW1wb3J0ICcuL3ZhbmlsYS9uYXZpZ2F0aW9uJ1xyXG5pbXBvcnQgJy4vdmFuaWxhL3NraXAtbGluay1mb2N1cy1maXgnXHJcblxyXG5cclxuXHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2dlbmVyYWwnXHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2ZpeGVkLXJlc3BvbnNpdmUtbmF2J1xyXG5cclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvc2lzLWFkZC1zaG93LW5ldy1wb3N0JztcclxuIiwiaW1wb3J0IHsgY29udGFpbmVNYXhXaWR0aHMgfSBmcm9tIFwiLi4vX3ZhcmlhYmxlc1wiXHJcblxyXG5cclxualF1ZXJ5KGRvY3VtZW50KS5yZWFkeSgoJCkgPT4ge1xyXG5cclxuICAgIGNoZWNrU2l6ZSgpXHJcblxyXG4gICAgJCgnLm5hdi10b2dnbGUnKS5jbGljaygoZSkgPT4ge1xyXG4gICAgICAgICQoZS50YXJnZXQpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAkKCdib2R5JykudG9nZ2xlQ2xhc3MoJ25hdi1hY3RpdmUnKTtcclxuICAgIH0pXHJcblxyXG4gICAgJCh3aW5kb3cpLm9uKCdyZXNpemUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY2hlY2tTaXplKClcclxuICAgIH0pO1xyXG5cclxuXHJcbn0pXHJcblxyXG5cclxuXHJcbmNvbnN0IGNoZWNrU2l6ZSA9ICgpID0+IHtcclxuICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8IGNvbnRhaW5lTWF4V2lkdGhzLmxnKSB7XHJcbiAgICAgICAgJCgnLm5hdi1zaXMnKS5hZGRDbGFzcygncmVzcG9uc2l2ZS1uYXYnKVxyXG4gICAgICAgICQoJy5uYXYtdG9nZ2xlJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJylcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgICQoJy5uYXYtc2lzJykucmVtb3ZlQ2xhc3MoJ3Jlc3BvbnNpdmUtbmF2JylcclxuICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ25hdi1hY3RpdmUnKVxyXG4gICAgICAgICQoJy5uYXYtdG9nZ2xlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXHJcbiAgICAgICAgJCgnLm5hdi10b2dnbGUnKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpXHJcblxyXG4gICAgfVxyXG59IiwialF1ZXJ5KGRvY3VtZW50KS5yZWFkeSgoJCkgPT4ge1xyXG4gICAgJCgnYVtocmVmJD1cIiNcIl0nKS5jbGljayhmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCA/IGV2ZW50LnByZXZlbnREZWZhdWx0KCkgOiBldmVudC5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xyXG5cclxuICAgIH0pO1xyXG59KVxyXG4iLCJpbXBvcnQgeyBjb252ZXJ0RGF0ZSwgY29udmVydEFtUG1UaW1lLCBCYXNlNjQsIGlzRmlsZWRWYWxpZCwgc2xpZGVyc2l6ZSB9IGZyb20gJy4uL3ZhbmlsYS9nZW5lcmFsJztcclxuXHJcblxyXG5cclxualF1ZXJ5KGRvY3VtZW50KS5yZWFkeSgoJCkgPT4ge1xyXG5cclxuXHJcblxyXG4gICAgY29uc3QgZm9ybUJ0biA9ICQoJyNzaXMtYWRkLXBvc3Qtc3VibWlzc2lvbi1mb3JtIGJ1dHRvbicpO1xyXG5cclxuXHJcbiAgICAkKCcjc2lzLWFkZC1wb3N0LXN1Ym1pc3Npb24tZm9ybSBpbnB1dCAsI3Npcy1hZGQtcG9zdC1zdWJtaXNzaW9uLWZvcm0gIHRleHRhcmVhJykua2V5dXAoKGUpID0+IHtcclxuICAgICAgICBpc0ZpbGVkVmFsaWQoZS50YXJnZXQsIGZvcm1CdG4pXHJcbiAgICB9KVxyXG5cclxuXHJcblxyXG4gICAgLy8gZm9yIHNpbGRlIG5ldyBwb3N0XHJcblxyXG4gICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc2xpZGVyc2l6ZSgkKCcuc2lzLXNsaWRlcicpLCAkKCcuc2lzLXNsaWRlciBhcnRpY2xlJykpO1xyXG4gICAgfSk7XHJcbiAgICBzbGlkZXJzaXplKCQoJy5zaXMtc2xpZGVyJyksICQoJy5zaXMtc2xpZGVyIGFydGljbGUnKSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICQoJyNzaXMtYWRkLXBvc3Qtc3VibWlzc2lvbi1mb3JtJykub24oJ3N1Ym1pdCcsIChlKSA9PiB7XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgbGV0IGZvcm1QYXNzVmFpbGRhdGlvbiA9IHRydWU7XHJcbiAgICAgICAgJChlLnRhcmdldCkuZmluZCgnaW5wdXQgLCB0ZXh0YXJlYScpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlucHV0UGFzc1ZhaWxkYXRpb24gPSBpc0ZpbGVkVmFsaWQoZWxlbWVudCwgZm9ybUJ0bilcclxuICAgICAgICAgICAgaWYgKCFpbnB1dFBhc3NWYWlsZGF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBmb3JtUGFzc1ZhaWxkYXRpb24gPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgaWYgKGZvcm1QYXNzVmFpbGRhdGlvbikge1xyXG5cclxuXHJcbiAgICAgICAgICAgICQoJy5sb2FkZXItZGl2JykuY3NzKFwiZGlzcGxheVwiLCBcImZsZXhcIilcclxuICAgICAgICAgICAgICAgIC5oaWRlKClcclxuICAgICAgICAgICAgICAgIC5mYWRlSW4oMTAwKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJCgnI3Npcy1hZGQtcG9zdC10aXRsZScpLnZhbCgpLnRyaW0oKSxcclxuICAgICAgICAgICAgICAgIGV4Y2VycHQ6ICQoJyNzaXMtYWRkLXBvc3QtZXhjZXJwdCcpLnZhbCgpLnRyaW0oKSxcclxuICAgICAgICAgICAgICAgIHN0YXR1czogJ3B1Ymxpc2gnLFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICB1cmw6IFBPU1RfU1VCTUlUVEVSLnJvb3QgKyAnd3AvdjIvcG9zdHMnLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICAgICAgICAgIGJlZm9yZVNlbmQ6ICh4aHIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBQT1NUX1NVQk1JVFRFUi5sb2dpbiA/IHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdYLVdQLU5vbmNlJywgUE9TVF9TVUJNSVRURVIubm9uY2UpIDogeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0F1dGhvcml6YXRpb24nLCAnQmFzaWMgJyArIEJhc2U2NC5lbmNvZGUoJ1Vua25vd246VW5rbm93bicpKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXNwb25zZSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmVBcnRpY2xlID0gJCgnLnNpcy1zbGlkZXItd3JhcCBhcnRpY2xlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0FydGljbGUgPSBgPGFydGljbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPiR7cmVzcG9uc2UudGl0bGUucmF3fTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJkYXRlLWNyZWF0ZVwiPiR7Y29udmVydERhdGUocmVzcG9uc2UuZGF0ZSl9ICR7Y29udmVydEFtUG1UaW1lKHJlc3BvbnNlLmRhdGUpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3Jlc3BvbnNlLmV4Y2VycHQucmVuZGVyZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2FydGljbGU+YDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoJCgnLnNpcy1zbGlkZXItd3JhcCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIuc2lzLXNsaWRlci13cmFwXCIpLmFwcGVuZChuZXdBcnRpY2xlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVyc2l6ZSgkKCcuc2lzLXNsaWRlcicpLCAkKCcuc2lzLXNsaWRlciBhcnRpY2xlJykpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLnNpcy1zbGlkZXItd3JhcCcpLmNzcygnbGVmdCcsIGAtJHtwcmVBcnRpY2xlLndpZHRoKCl9cHhgKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL3ByZUFydGljbGUuY3NzKCdtYXJnaW4tcmlnaHQnLCBgLSR7cHJlQXJ0aWNsZS53aWR0aCgpfXB4YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9wcmVBcnRpY2xlLmNzcygnbWFyZ2luLXJpZ2h0JywgJzVweCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKCcubG9hZGVyLWRpdicpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI2NvbmZpcm1fbXNnJykuY3NzKFwiZGlzcGxheVwiLCBcImZsZXhcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmhpZGUoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmFkZUluKCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBhbGVydChQT1NUX1NVQk1JVFRFUi5zdWNjZXNzKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmYWlsOiAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoUE9TVF9TVUJNSVRURVIuZmFpbHVyZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgfSk7XHJcblxyXG5cclxufSlcclxuXHJcblxyXG5cclxuXHJcbiIsImV4cG9ydCBjb25zdCBjb252ZXJ0RGF0ZSA9IChkYXRlKSA9PiB7XHJcbiAgICBjb25zdCBkID0gbmV3IERhdGUoZGF0ZSlcclxuICAgIGNvbnN0IHllID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoJ2VuJywgeyB5ZWFyOiAnbnVtZXJpYycgfSkuZm9ybWF0KGQpXHJcbiAgICBjb25zdCBtbyA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCdlbicsIHsgbW9udGg6ICdsb25nJyB9KS5mb3JtYXQoZClcclxuICAgIGNvbnN0IGRhID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoJ2VuJywgeyBkYXk6ICcyLWRpZ2l0JyB9KS5mb3JtYXQoZClcclxuICAgIHJldHVybiBgJHttb30gJHtkYX0sICR7eWV9YDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNvbnZlcnRBbVBtVGltZSA9IChkYXRlKSA9PiB7XHJcbiAgICBjb25zdCBkID0gbmV3IERhdGUoZGF0ZSlcclxuICAgIGxldCBoID0gZC5nZXRIb3VycygpO1xyXG4gICAgbGV0IG0gPSBkLmdldE1pbnV0ZXMoKTtcclxuXHJcbiAgICAvLyBDaGVjayB3aGV0aGVyIEFNIG9yIFBNIFxyXG4gICAgY29uc3QgYW1wbSA9IGggPj0gMTIgPyAnUE0nIDogJ0FNJztcclxuXHJcbiAgICAvLyBGaW5kIGN1cnJlbnQgaG91ciBpbiBBTS1QTSBGb3JtYXQgXHJcbiAgICBoID0gaCAlIDEyO1xyXG5cclxuICAgIC8vIFRvIGRpc3BsYXkgXCIwXCIgYXMgXCIxMlwiIFxyXG4gICAgaCA9IGggPyBoIDogMTI7XHJcbiAgICBtID0gbSA8IDEwID8gJzAnICsgbSA6IG07XHJcblxyXG4gICAgcmV0dXJuIGAke2h9OiR7bX0gJHthbXBtfWA7XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEJhc2U2NCA9IHsgX2tleVN0cjogXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvPVwiLCBlbmNvZGU6IGZ1bmN0aW9uIChlKSB7IHZhciB0ID0gXCJcIjsgdmFyIG4sIHIsIGksIHMsIG8sIHUsIGE7IHZhciBmID0gMDsgZSA9IEJhc2U2NC5fdXRmOF9lbmNvZGUoZSk7IHdoaWxlIChmIDwgZS5sZW5ndGgpIHsgbiA9IGUuY2hhckNvZGVBdChmKyspOyByID0gZS5jaGFyQ29kZUF0KGYrKyk7IGkgPSBlLmNoYXJDb2RlQXQoZisrKTsgcyA9IG4gPj4gMjsgbyA9IChuICYgMykgPDwgNCB8IHIgPj4gNDsgdSA9IChyICYgMTUpIDw8IDIgfCBpID4+IDY7IGEgPSBpICYgNjM7IGlmIChpc05hTihyKSkgeyB1ID0gYSA9IDY0IH0gZWxzZSBpZiAoaXNOYU4oaSkpIHsgYSA9IDY0IH0gdCA9IHQgKyB0aGlzLl9rZXlTdHIuY2hhckF0KHMpICsgdGhpcy5fa2V5U3RyLmNoYXJBdChvKSArIHRoaXMuX2tleVN0ci5jaGFyQXQodSkgKyB0aGlzLl9rZXlTdHIuY2hhckF0KGEpIH0gcmV0dXJuIHQgfSwgZGVjb2RlOiBmdW5jdGlvbiAoZSkgeyB2YXIgdCA9IFwiXCI7IHZhciBuLCByLCBpOyB2YXIgcywgbywgdSwgYTsgdmFyIGYgPSAwOyBlID0gZS5yZXBsYWNlKC9bXkEtWmEtejAtOVxcK1xcL1xcPV0vZywgXCJcIik7IHdoaWxlIChmIDwgZS5sZW5ndGgpIHsgcyA9IHRoaXMuX2tleVN0ci5pbmRleE9mKGUuY2hhckF0KGYrKykpOyBvID0gdGhpcy5fa2V5U3RyLmluZGV4T2YoZS5jaGFyQXQoZisrKSk7IHUgPSB0aGlzLl9rZXlTdHIuaW5kZXhPZihlLmNoYXJBdChmKyspKTsgYSA9IHRoaXMuX2tleVN0ci5pbmRleE9mKGUuY2hhckF0KGYrKykpOyBuID0gcyA8PCAyIHwgbyA+PiA0OyByID0gKG8gJiAxNSkgPDwgNCB8IHUgPj4gMjsgaSA9ICh1ICYgMykgPDwgNiB8IGE7IHQgPSB0ICsgU3RyaW5nLmZyb21DaGFyQ29kZShuKTsgaWYgKHUgIT0gNjQpIHsgdCA9IHQgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKHIpIH0gaWYgKGEgIT0gNjQpIHsgdCA9IHQgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpIH0gfSB0ID0gQmFzZTY0Ll91dGY4X2RlY29kZSh0KTsgcmV0dXJuIHQgfSwgX3V0ZjhfZW5jb2RlOiBmdW5jdGlvbiAoZSkgeyBlID0gZS5yZXBsYWNlKC9cXHJcXG4vZywgXCJcXG5cIik7IHZhciB0ID0gXCJcIjsgZm9yICh2YXIgbiA9IDA7IG4gPCBlLmxlbmd0aDsgbisrKSB7IHZhciByID0gZS5jaGFyQ29kZUF0KG4pOyBpZiAociA8IDEyOCkgeyB0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocikgfSBlbHNlIGlmIChyID4gMTI3ICYmIHIgPCAyMDQ4KSB7IHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyID4+IDYgfCAxOTIpOyB0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUociAmIDYzIHwgMTI4KSB9IGVsc2UgeyB0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUociA+PiAxMiB8IDIyNCk7IHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyID4+IDYgJiA2MyB8IDEyOCk7IHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyICYgNjMgfCAxMjgpIH0gfSByZXR1cm4gdCB9LCBfdXRmOF9kZWNvZGU6IGZ1bmN0aW9uIChlKSB7IHZhciB0ID0gXCJcIjsgdmFyIG4gPSAwOyB2YXIgciA9IGMxID0gYzIgPSAwOyB3aGlsZSAobiA8IGUubGVuZ3RoKSB7IHIgPSBlLmNoYXJDb2RlQXQobik7IGlmIChyIDwgMTI4KSB7IHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyKTsgbisrIH0gZWxzZSBpZiAociA+IDE5MSAmJiByIDwgMjI0KSB7IGMyID0gZS5jaGFyQ29kZUF0KG4gKyAxKTsgdCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChyICYgMzEpIDw8IDYgfCBjMiAmIDYzKTsgbiArPSAyIH0gZWxzZSB7IGMyID0gZS5jaGFyQ29kZUF0KG4gKyAxKTsgYzMgPSBlLmNoYXJDb2RlQXQobiArIDIpOyB0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKHIgJiAxNSkgPDwgMTIgfCAoYzIgJiA2MykgPDwgNiB8IGMzICYgNjMpOyBuICs9IDMgfSB9IHJldHVybiB0IH0gfTtcclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IHVpVmFsaWRhdG9yID0gKGVsZW1lbnQsIGlzdmFsaWQsIGJ0bikgPT4ge1xyXG4gICAgaWYgKGlzdmFsaWQpIHtcclxuICAgICAgICAkKGVsZW1lbnQpLnJlbW92ZUNsYXNzKCdhbGVydC1kYW5nZXInKTtcclxuICAgICAgICAkKGJ0bikucmVtb3ZlQ2xhc3MoJ25vdC1ob3ZlcicpO1xyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICAkKGVsZW1lbnQpLmFkZENsYXNzKCdhbGVydC1kYW5nZXInKVxyXG4gICAgICAgICQoYnRuKS5hZGRDbGFzcygnbm90LWhvdmVyJylcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBpc0ZpbGVkVmFsaWQgPSAoZWxlbWVudCwgYnRuKSA9PiB7XHJcbiAgICBjb25zdCBmaWVsZFRleHQgPSBlbGVtZW50LnZhbHVlLnRyaW0oKVxyXG4gICAgY29uc3QgaXN2YWxpZCA9IGZpZWxkVGV4dC5sZW5ndGggPiA1ID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICByZXR1cm4gdWlWYWxpZGF0b3IoZWxlbWVudCwgaXN2YWxpZCwgYnRuKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHNsaWRlcnNpemUgPSAocGVyZW50LCBzaWxkZXMpID0+IHtcclxuICAgICQoc2lsZGVzKS5lYWNoKChpbmRleCwgc2xpZGUpID0+IHtcclxuICAgICAgICAkKHNsaWRlKS5jc3MoXCJ3aWR0aFwiLCAkKHBlcmVudCkud2lkdGgoKSk7XHJcbiAgICB9KVxyXG59IiwiLyoqXG4gKiBGaWxlIG5hdmlnYXRpb24uanMuXG4gKlxuICogSGFuZGxlcyB0b2dnbGluZyB0aGUgbmF2aWdhdGlvbiBtZW51IGZvciBzbWFsbCBzY3JlZW5zIGFuZCBlbmFibGVzIFRBQiBrZXlcbiAqIG5hdmlnYXRpb24gc3VwcG9ydCBmb3IgZHJvcGRvd24gbWVudXMuXG4gKi9cbiggZnVuY3Rpb24oKSB7XG5cdHZhciBjb250YWluZXIsIGJ1dHRvbiwgbWVudSwgbGlua3MsIGksIGxlbjtcblxuXHRjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3NpdGUtbmF2aWdhdGlvbicgKTtcblx0aWYgKCAhIGNvbnRhaW5lciApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRidXR0b24gPSBjb250YWluZXIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoICdidXR0b24nIClbMF07XG5cdGlmICggJ3VuZGVmaW5lZCcgPT09IHR5cGVvZiBidXR0b24gKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bWVudSA9IGNvbnRhaW5lci5nZXRFbGVtZW50c0J5VGFnTmFtZSggJ3VsJyApWzBdO1xuXG5cdC8vIEhpZGUgbWVudSB0b2dnbGUgYnV0dG9uIGlmIG1lbnUgaXMgZW1wdHkgYW5kIHJldHVybiBlYXJseS5cblx0aWYgKCAndW5kZWZpbmVkJyA9PT0gdHlwZW9mIG1lbnUgKSB7XG5cdFx0YnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bWVudS5zZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyApO1xuXHRpZiAoIC0xID09PSBtZW51LmNsYXNzTmFtZS5pbmRleE9mKCAnbmF2LW1lbnUnICkgKSB7XG5cdFx0bWVudS5jbGFzc05hbWUgKz0gJyBuYXYtbWVudSc7XG5cdH1cblxuXHRidXR0b24ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuXHRcdGlmICggLTEgIT09IGNvbnRhaW5lci5jbGFzc05hbWUuaW5kZXhPZiggJ3RvZ2dsZWQnICkgKSB7XG5cdFx0XHRjb250YWluZXIuY2xhc3NOYW1lID0gY29udGFpbmVyLmNsYXNzTmFtZS5yZXBsYWNlKCAnIHRvZ2dsZWQnLCAnJyApO1xuXHRcdFx0YnV0dG9uLnNldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnICk7XG5cdFx0XHRtZW51LnNldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnRhaW5lci5jbGFzc05hbWUgKz0gJyB0b2dnbGVkJztcblx0XHRcdGJ1dHRvbi5zZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJywgJ3RydWUnICk7XG5cdFx0XHRtZW51LnNldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScgKTtcblx0XHR9XG5cdH07XG5cblx0Ly8gR2V0IGFsbCB0aGUgbGluayBlbGVtZW50cyB3aXRoaW4gdGhlIG1lbnUuXG5cdGxpbmtzICAgID0gbWVudS5nZXRFbGVtZW50c0J5VGFnTmFtZSggJ2EnICk7XG5cblx0Ly8gRWFjaCB0aW1lIGEgbWVudSBsaW5rIGlzIGZvY3VzZWQgb3IgYmx1cnJlZCwgdG9nZ2xlIGZvY3VzLlxuXHRmb3IgKCBpID0gMCwgbGVuID0gbGlua3MubGVuZ3RoOyBpIDwgbGVuOyBpKysgKSB7XG5cdFx0bGlua3NbaV0uYWRkRXZlbnRMaXN0ZW5lciggJ2ZvY3VzJywgdG9nZ2xlRm9jdXMsIHRydWUgKTtcblx0XHRsaW5rc1tpXS5hZGRFdmVudExpc3RlbmVyKCAnYmx1cicsIHRvZ2dsZUZvY3VzLCB0cnVlICk7XG5cdH1cblxuXHQvKipcblx0ICogU2V0cyBvciByZW1vdmVzIC5mb2N1cyBjbGFzcyBvbiBhbiBlbGVtZW50LlxuXHQgKi9cblx0ZnVuY3Rpb24gdG9nZ2xlRm9jdXMoKSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXG5cdFx0Ly8gTW92ZSB1cCB0aHJvdWdoIHRoZSBhbmNlc3RvcnMgb2YgdGhlIGN1cnJlbnQgbGluayB1bnRpbCB3ZSBoaXQgLm5hdi1tZW51LlxuXHRcdHdoaWxlICggLTEgPT09IHNlbGYuY2xhc3NOYW1lLmluZGV4T2YoICduYXYtbWVudScgKSApIHtcblxuXHRcdFx0Ly8gT24gbGkgZWxlbWVudHMgdG9nZ2xlIHRoZSBjbGFzcyAuZm9jdXMuXG5cdFx0XHRpZiAoICdsaScgPT09IHNlbGYudGFnTmFtZS50b0xvd2VyQ2FzZSgpICkge1xuXHRcdFx0XHRpZiAoIC0xICE9PSBzZWxmLmNsYXNzTmFtZS5pbmRleE9mKCAnZm9jdXMnICkgKSB7XG5cdFx0XHRcdFx0c2VsZi5jbGFzc05hbWUgPSBzZWxmLmNsYXNzTmFtZS5yZXBsYWNlKCAnIGZvY3VzJywgJycgKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzZWxmLmNsYXNzTmFtZSArPSAnIGZvY3VzJztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRzZWxmID0gc2VsZi5wYXJlbnRFbGVtZW50O1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBUb2dnbGVzIGBmb2N1c2AgY2xhc3MgdG8gYWxsb3cgc3VibWVudSBhY2Nlc3Mgb24gdGFibGV0cy5cblx0ICovXG5cdCggZnVuY3Rpb24oIGNvbnRhaW5lciApIHtcblx0XHR2YXIgdG91Y2hTdGFydEZuLCBpLFxuXHRcdFx0cGFyZW50TGluayA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCAnLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW4gPiBhLCAucGFnZV9pdGVtX2hhc19jaGlsZHJlbiA+IGEnICk7XG5cblx0XHRpZiAoICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyApIHtcblx0XHRcdHRvdWNoU3RhcnRGbiA9IGZ1bmN0aW9uKCBlICkge1xuXHRcdFx0XHR2YXIgbWVudUl0ZW0gPSB0aGlzLnBhcmVudE5vZGUsIGk7XG5cblx0XHRcdFx0aWYgKCAhIG1lbnVJdGVtLmNsYXNzTGlzdC5jb250YWlucyggJ2ZvY3VzJyApICkge1xuXHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRmb3IgKCBpID0gMDsgaSA8IG1lbnVJdGVtLnBhcmVudE5vZGUuY2hpbGRyZW4ubGVuZ3RoOyArK2kgKSB7XG5cdFx0XHRcdFx0XHRpZiAoIG1lbnVJdGVtID09PSBtZW51SXRlbS5wYXJlbnROb2RlLmNoaWxkcmVuW2ldICkge1xuXHRcdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdG1lbnVJdGVtLnBhcmVudE5vZGUuY2hpbGRyZW5baV0uY2xhc3NMaXN0LnJlbW92ZSggJ2ZvY3VzJyApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRtZW51SXRlbS5jbGFzc0xpc3QuYWRkKCAnZm9jdXMnICk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bWVudUl0ZW0uY2xhc3NMaXN0LnJlbW92ZSggJ2ZvY3VzJyApO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHRmb3IgKCBpID0gMDsgaSA8IHBhcmVudExpbmsubGVuZ3RoOyArK2kgKSB7XG5cdFx0XHRcdHBhcmVudExpbmtbaV0uYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNoc3RhcnQnLCB0b3VjaFN0YXJ0Rm4sIGZhbHNlICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KCBjb250YWluZXIgKSApO1xufSApKCk7XG4iLCIvKipcbiAqIEZpbGUgc2tpcC1saW5rLWZvY3VzLWZpeC5qcy5cbiAqXG4gKiBIZWxwcyB3aXRoIGFjY2Vzc2liaWxpdHkgZm9yIGtleWJvYXJkIG9ubHkgdXNlcnMuXG4gKlxuICogTGVhcm4gbW9yZTogaHR0cHM6Ly9naXQuaW8vdldkcjJcbiAqL1xuKCBmdW5jdGlvbigpIHtcblx0dmFyIGlzSWUgPSAvKHRyaWRlbnR8bXNpZSkvaS50ZXN0KCBuYXZpZ2F0b3IudXNlckFnZW50ICk7XG5cblx0aWYgKCBpc0llICYmIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkICYmIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyICkge1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAnaGFzaGNoYW5nZScsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGlkID0gbG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoIDEgKSxcblx0XHRcdFx0ZWxlbWVudDtcblxuXHRcdFx0aWYgKCAhICggL15bQS16MC05Xy1dKyQvLnRlc3QoIGlkICkgKSApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoIGlkICk7XG5cblx0XHRcdGlmICggZWxlbWVudCApIHtcblx0XHRcdFx0aWYgKCAhICggL14oPzphfHNlbGVjdHxpbnB1dHxidXR0b258dGV4dGFyZWEpJC9pLnRlc3QoIGVsZW1lbnQudGFnTmFtZSApICkgKSB7XG5cdFx0XHRcdFx0ZWxlbWVudC50YWJJbmRleCA9IC0xO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0ZWxlbWVudC5mb2N1cygpO1xuXHRcdFx0fVxuXHRcdH0sIGZhbHNlICk7XG5cdH1cbn0gKSgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==