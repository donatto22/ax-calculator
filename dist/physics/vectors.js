"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var Vector = {
  sum: function sum() {
    var arr_x = [],
        arr_y = [];

    for (var _len = arguments.length, vectors = new Array(_len), _key = 0; _key < _len; _key++) {
      vectors[_key] = arguments[_key];
    }

    for (var i = 0; i <= vectors.length - 1; i++) {
      if (_typeof(vectors[i]) != 'object') {
        return "Only objects";
      } else if (typeof vectors[i][0] != 'number' || typeof vectors[i][1] != 'number') {
        return "Only numbers in the objects";
      } else {
        arr_x.push(vectors[i][0]);
        arr_y.push(vectors[i][1]);
      }
    }

    var x = arr_x.reduce(_sum);
    var y = arr_y.reduce(_sum);
    var expression = validateExpression(x, y);
    var cartesian = [x, y];

    var unit_vector = _unitVector(x, y);

    return {
      x: x,
      y: y,
      expression: expression,
      cartesian: cartesian,
      unit_vector: unit_vector
    };
  },
  substract: function substract() {
    var arr_x = [],
        arr_y = [];

    for (var _len2 = arguments.length, vectors = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      vectors[_key2] = arguments[_key2];
    }

    for (var i = 0; i <= vectors.length - 1; i++) {
      if (_typeof(vectors[i]) != 'object') {
        return "Only objects";
      } else if (typeof vectors[i][0] != 'number' || typeof vectors[i][1] != 'number') {
        return "Only numbers in the objects";
      } else {
        arr_x.push(vectors[i][0]);
        arr_y.push(vectors[i][1]);
      }
    }

    var x = arr_x.reduce(_substract);
    var y = arr_y.reduce(_substract);
    var expression = validateExpression(x, y);
    var cartesian = [x, y];

    var unit_vector = _unitVector(x, y);

    return {
      x: x,
      y: y,
      expression: expression,
      cartesian: cartesian,
      unit_vector: unit_vector
    };
  },
  product: function product() {
    var arr_x = [],
        arr_y = [];

    for (var _len3 = arguments.length, vectors = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      vectors[_key3] = arguments[_key3];
    }

    for (var i = 0; i <= vectors.length - 1; i++) {
      if (_typeof(vectors[i]) != 'object') {
        return "Only objects";
      } else if (typeof vectors[i][0] != 'number' || typeof vectors[i][1] != 'number') {
        return "Only numbers in the objects";
      } else {
        arr_x.push(vectors[i][0]);
        arr_y.push(vectors[i][1]);
      }
    }

    var x = arr_x.reduce(_product);
    var y = arr_y.reduce(_product);
    return x + y;
  },
  unitVector: function unitVector(vector) {
    return _unitVector(vector[0], vector[1]);
  }
};

var _sum = function _sum(accumulator, curr) {
  return accumulator + curr;
};

var _substract = function _substract(accumulator, curr) {
  return accumulator - curr;
};

var _product = function _product(accumulator, curr) {
  return accumulator * curr;
};

function validateExpression(x, y) {
  var expression;

  if (x == 0) {
    x = '';
  }

  if (y == 0) {
    y = '';
  }

  if (x == 1) {
    x = 'i';
  }

  if (y == 1) {
    y = 'i';
  }

  if (x > 1) {
    x = "".concat(x, "i");
  }

  if (y > 1) {
    y = "".concat(y, "j");
  }

  if (y < 0) {
    expression = "".concat(x, " - ").concat(y * -1, "j");
  } else if (x < 0) {
    expression = "-".concat(x * -1, "i + ").concat(y);
  } else if (x < 0 && y < 0) {
    expression = "-".concat(x * -1, "i - ").concat(y * -1, "j");
  } else {
    expression = "".concat(x, " + ").concat(y);
  }

  return expression;
}

function _unitVector(x, y) {
  var module = Math.pow(Math.pow(x, 2) + Math.pow(y, 2), 1 / 2);
  var x2 = Number.parseFloat((x / module).toString().match(/^-?\d+(?:\.\d{0,2})?/));
  var y2 = Number.parseFloat((y / module).toString().match(/^-?\d+(?:\.\d{0,2})?/));
  return [x2, y2];
}

var _default = Vector;
exports["default"] = _default;