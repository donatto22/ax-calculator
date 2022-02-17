"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _elements = _interopRequireDefault(require("./elements"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var chemicalElements = {
  show: function show(param) {
    for (var i = 0; i < _elements["default"].length; i++) {
      if (typeof param === "string") {
        if (_elements["default"][i].simbol == param) {
          return _elements["default"][i];
        }

        if (_elements["default"][i].name == param) {
          return _elements["default"][i];
        }
      } else if (typeof param === "number") {
        if (_elements["default"][i].atomic_number == param) {
          return _elements["default"][i];
        }
      } else if (typeof param != 'undefined') {
        return "Place the atomic number, the element symbol or do not place parameters";
      } else {
        return _elements["default"];
      }
    }
  },
  obtainByFamily: function obtainByFamily(type) {
    var result = [];

    if (typeof type == "string") {
      for (var i = 0; i < _elements["default"].length; i++) {
        if (_elements["default"][i].type == type) {
          result.push(_elements["default"][i]);
        }
      }
    } else {
      return "You must place a string";
    }

    return result;
  },
  obtainByGroup: function obtainByGroup(group) {
    var result = [];

    if (typeof group == "string") {
      for (var i = 0; i < _elements["default"].length; i++) {
        if (_elements["default"][i].group == group) {
          result.push(_elements["default"][i]);
        }
      }
    } else {
      return "You must place a string";
    }

    return result;
  }
};
var _default = chemicalElements;
exports["default"] = _default;