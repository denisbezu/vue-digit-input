"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var VueDigitType = {
  DIGIT_TYPE: 'digit',
  NUMBER_TYPE: 'int'
};
var directiveName = 'digit';
var vueDigitInputOptions = {
  maxLength: null,
  type: VueDigitType.DIGIT_TYPE
};
var _default = {
  install: function install(vue, options) {
    var self = this;
    options = _objectSpread({}, vueDigitInputOptions, {}, options);
    vue.directive(directiveName, {
      bind: function bind(el, binding) {
        if (_typeof(binding.value) === 'object' && binding.value !== null) {
          options = _objectSpread({}, options, {}, binding.value);
        }

        self.initMaxLength(el, options);
      },
      inserted: function inserted(el) {
        el.oninput = function (event) {
          var formattedValue = '';

          switch (options.type) {
            case VueDigitType.DIGIT_TYPE:
              var pattern = /\d+/g;
              var isDigitValue = pattern.test(event.target.value);
              formattedValue = !isDigitValue ? '' : event.target.value.replace(/[^0-9]/g, '');
              break;

            case VueDigitType.NUMBER_TYPE:
            default:
              var parsedIntValue = parseInt(event.target.value, 10);
              formattedValue = isNaN(parsedIntValue) ? '' : parsedIntValue;
              break;
          }

          el.value = formattedValue;
        };
      }
    });
  },
  initMaxLength: function initMaxLength(el, options) {
    if (options.maxLength !== null) {
      el.setAttribute('maxlength', options.maxLength);
    }
  }
};
exports.default = _default;