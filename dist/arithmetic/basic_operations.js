"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var basicOperations = {
  /**
      Returns the sum of the numbers
      @param {number} parameters You can add as many numbers as you wish
  **/
  sum: function sum() {
    for (var _len = arguments.length, parameters = new Array(_len), _key = 0; _key < _len; _key++) {
      parameters[_key] = arguments[_key];
    }

    for (var i = 0; i <= parameters.length - 1; i++) {
      if (typeof parameters[i] != 'number') return "Only numbers";else {
        var _ret = function () {
          var result = parameters.reduce(function (previous, current) {
            return previous + current;
          });
          return {
            v: {
              result: result,
              toNegative: function toNegative() {
                return result * -1;
              }
            }
          };
        }();

        if (_typeof(_ret) === "object") return _ret.v;
      }
    }
  },

  /**
      Returns the substract of the numbers
      @param {number} parameters You can add as many numbers as you wish
  **/
  substract: function substract() {
    for (var _len2 = arguments.length, parameters = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      parameters[_key2] = arguments[_key2];
    }

    for (var i = 0; i <= parameters.length - 1; i++) {
      if (typeof parameters[i] != 'number') {
        return "Only numbers";
      } else {
        var result = parameters.reduce(function (previous, current) {
          return previous - current;
        });
        return {
          result: result,
          toNegative: function toNegative() {
            return result * -1;
          }
        };
      }
    }
  },

  /**
      Returns the product of the numbers
      @param {number} parameters You can add as many numbers as you wish
  **/
  product: function product() {
    for (var _len3 = arguments.length, parameters = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      parameters[_key3] = arguments[_key3];
    }

    for (var i = 0; i <= parameters.length - 1; i++) {
      if (typeof parameters[i] != 'number') {
        return "Only numbers";
      } else {
        var result = parameters.reduce(function (previous, current) {
          return previous * current;
        });
        return {
          result: result,
          toNegative: function toNegative() {
            return result * -1;
          }
        };
      }
    }
  },

  /**
      Returns the division by 2 numbers
  **/
  division: function division(param1, param2) {
    if (typeof param1 != 'number' || typeof param2 != 'number') {
      return "Only numbers";
    } else {
      return param1 / param2;
    }
  },

  /**
  Returns the remainder of a division by 2 numbers
  **/
  module: function module(param1, param2) {
    if (typeof param1 != 'number' || typeof param2 != 'number') {
      return "Only numbers";
    } else {
      return param1 % param2;
    }
  },
  raiseTo: function raiseTo(number, exponent) {
    if (typeof number === 'string' || typeof exponent === 'string') {
      return "You must enter a number";
    } else {
      if (exponent == 0) {
        return "1";
      } else if (exponent < 0) {
        return "1/".concat(Math.pow(number, exponent * -1));
      } else {
        return Math.pow(number, exponent).toString();
      }
    }
  },

  /**
      ʳᵒᵒᵗ√number
       If you do not enter a root, you will get the square root by default.
       @param {number} number The number whose root you need
      @param {number} root The root you wish to obtain
  **/
  root: function root(number) {
    var _root = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

    if (typeof number === 'string' || typeof _root === 'string') {
      return "You must enter a number";
    } else {
      return String(Math.pow(number, 1 / _root));
    }
  }
};
var _default = basicOperations;
exports["default"] = _default;