"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _fractions = _interopRequireDefault(require("../arithmetic/fractions"));

var _constants = _interopRequireDefault(require("../constants/constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PI_GLYPH = "π";
var angleMeasurements = {
  /**
  @param {number_string} radian You can place a string (fraction) or a number
  **/
  radian: function radian(_radian) {
    return {
      toCentesimal: function toCentesimal() {
        if (typeof _radian == 'string') {
          if (typeof destructure(_radian).top == 'undefined' || typeof destructure(_radian).bottom == 'undefined') {
            return "Place a fraction";
          } else {
            var top = destructure(_radian).top,
                bottom = destructure(_radian).bottom;
            return top * 200 / bottom;
          }
        } else if (typeof _radian == 'number') {
          return Number.parseFloat((_radian * 200 / _constants["default"].PI).toFixed(3));
        } else {
          return "Place a number or string (fraction)";
        }
      },
      toSexagesimal: function toSexagesimal() {
        if (typeof _radian == 'string') {
          if (typeof destructure(_radian).top == 'undefined' || typeof destructure(_radian).bottom == 'undefined') {
            return "Place a fraction";
          } else {
            var top = destructure(_radian).top,
                bottom = destructure(_radian).bottom;
            return top * 180 / bottom;
          }
        } else if (typeof _radian == 'number') {
          return Number.parseFloat((_radian * 180 / _constants["default"].PI).toFixed(3));
        } else {
          return "Place a number or string (fraction)";
        }
      }
    };
  },
  centesimal: function centesimal(number) {
    return {
      toRadian: function toRadian() {
        if (typeof number !== 'number') {
          return "Place a number";
        } else {
          var dest = destructure(_fractions["default"].simplify(number, 200));
          var top = dest.top,
              bottom = dest.bottom;
          var t, result;
          result = "".concat(t, "/").concat(bottom); //top

          top == 1 ? t = "".concat(PI_GLYPH) : t = "".concat(top).concat(PI_GLYPH); //bottom

          bottom == 1 ? result = "".concat(t) : result = "".concat(t, "/").concat(bottom);
          return result;
        }
      },
      toSexagesimal: function toSexagesimal() {
        if (typeof number !== 'number') {
          return "Place a number";
        } else {
          return number * 9 / 10;
        }
      }
    };
  },
  sexagesimal: function sexagesimal(number) {
    return {
      toRadian: function toRadian() {
        if (typeof number !== 'number') {
          return "Place a number";
        } else {
          var dest = destructure(_fractions["default"].simplify(number, 180));
          var top = dest.top,
              bottom = dest.bottom;
          var t, result;
          result = "".concat(t, "/").concat(bottom); //top

          top == 1 ? t = "".concat(PI_GLYPH) : t = "".concat(top).concat(PI_GLYPH); //bottom

          bottom == 1 ? result = "".concat(t) : result = "".concat(t, "/").concat(bottom);
          return result;
        }
      },
      toCentesimal: function toCentesimal() {
        if (typeof number !== 'number') {
          return "Place a number";
        } else {
          var top = 10 * number,
              bottom = 9; //Numero entero

          if (top / bottom % 1 == 0) {
            return top / bottom;
          } //Decimal
          else {
            return "".concat(top, "/").concat(bottom);
          }
        }
      }
    };
  }
};

function destructure(string) {
  var array = string.split('/');
  var top = array[0],
      bottom = array[1];
  return {
    top: top,
    bottom: bottom
  };
}

var _default = angleMeasurements;
exports["default"] = _default;