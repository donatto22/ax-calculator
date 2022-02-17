"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var Fractions = {
  sum: function sum(numerator1, denominator1, numerator2, denominator2) {
    var result;
    var bober = false;

    if (denominator1 == denominator2) {
      // When dominators are equals
      var top = numerator1 + numerator2;
      var bottom = denominator1; //Check if negative

      if (top < 0) {
        bober = true;
        top = top * -1;
      }

      if (top / bottom % 1 == 0) {
        result = String(top / bottom);
      } else {
        result = String(top) + "/" + String(bottom);
      }
    } else {
      // When dominators are different
      var top = denominator2 * numerator1 + denominator1 * numerator2;
      var bottom = denominator1 * denominator2;
      result = _simplify(top, bottom);
    }

    return result;
  },
  substract: function substract(numerator1, denominator1, numerator2, denominator2) {
    var result;

    if (denominator1 == denominator2) {
      // When dominators are equals
      var top = numerator1 - numerator2;
      var bottom = denominator1;

      if (top / bottom % 1 == 0) {
        result = String(top / bottom);
      } else {
        result = String(top) + "/" + String(bottom);
      }
    } else {
      // When dominators are different
      var top = denominator2 * numerator1 - denominator1 * numerator2;
      var bottom = denominator1 * denominator2;
      result = _simplify(top, bottom);
    }

    return result;
  },
  product: function product(numerator1, denominator1, numerator2, denominator2) {
    var top = numerator1 * numerator2;
    var bottom = denominator1 * denominator2;
    return _simplify(top, bottom);
  },
  division: function division(numerator1, denominator1, numerator2, denominator2) {
    var top = numerator1 * denominator2;
    var bottom = denominator1 * numerator2;
    return _simplify(top, bottom);
  },
  simplify: function simplify(top, bottom) {
    return _simplify(top, bottom);
  },
  destructure: function destructure(fraction) {
    return _destructure(fraction);
  }
};
/**
    @param {number} top - Numerator
    @param {number} bottom - Denominator
**/

function _simplify(top, bottom) {
  var result;
  var bober = false;

  if (top < 0) {
    bober = true;
    top = top * -1;
  }

  if (bottom < 0) {
    bober = true;
    bottom = bottom * -1;
  }

  for (var i = 2; i < 20; i++) {
    while (top / i > 0 && bottom / i > 0) {
      if (top % i == 0 && bottom % i == 0) {
        top = top / i;
        bottom = bottom / i;
      } else {
        if (bober) {
          result = "-" + String(top) + "/" + String(bottom);
        } else {
          result = String(top) + "/" + String(bottom);
        }

        break;
      }
    }
  }

  return result;
}

function _destructure(string) {
  var array = string.split('/');
  var top = array[0],
      bottom = array[1];
  return {
    top: top,
    bottom: bottom
  };
}

var _default = Fractions;
exports["default"] = _default;