"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var Triangles = {
  angle30_60: function angle30_60() {
    return triangle('2k', 'k', 'k√3');
  },
  angle45: function angle45() {
    return triangle('k√2', 'k', 'k');
  },
  angle37_53: function angle37_53() {
    return triangle('5k', '3k', '4k');
  },
  angle16_74: function angle16_74() {
    return triangle('25k', '7k', '24k');
  },
  angle14_76: function angle14_76() {
    return triangle('k√17', 'k', '4k');
  },
  angle15_75: function angle15_75() {
    return triangle('4k', '(√6 - √2)k', '(√6 + √2)k');
  },
  angle50_40: function angle50_40() {
    return triangle('k√61', '6k', '5k');
  },
  angle8_82: function angle8_82() {
    return triangle('5k√2', 'k', '7k');
  },
  angle70_20: function angle70_20() {
    return triangle('k√137', '11k', '4k');
  },
  angle35_55: function angle35_55() {
    return triangle('k√149', '7k', '10k');
  }
};

function triangle(hypotenuse, opposite, adjacent) {
  var sin = "".concat(opposite, "/").concat(hypotenuse),
      cos = "".concat(adjacent, "/").concat(hypotenuse),
      tan = "".concat(opposite, "/").concat(adjacent);
  return {
    hypotenuse: hypotenuse,
    opposite: opposite,
    adjacent: adjacent,
    sin: sin,
    cos: cos,
    tan: tan
  };
}

var _default = Triangles;
exports["default"] = _default;