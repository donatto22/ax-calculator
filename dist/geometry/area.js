"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var Area = {
  triangle: function triangle(base, height) {
    return base * height / 2;
  },
  rectangle: function rectangle(width, height) {
    return width * height;
  },
  circle: function circle(radio) {
    return radio * radio + "π";
  },

  /**
      @param side The measure of one side of the square
  **/
  square: function square(side) {
    return String(side * side);
  },
  square2: function square2(diagonal) {
    var top = Math.pow(diagonal, diagonal);

    if (Number.isInteger(top / 2)) {
      return String(top / 2);
    } else {
      return String(top + "/2");
    }
  },
  trapeze: function trapeze(bottom, top, height) {
    return (bottom + top) / 2 * height;
  }
};
var _default = Area;
exports["default"] = _default;