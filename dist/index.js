"use strict";

var _equations = _interopRequireDefault(require("./algebra/equations"));

var _system_equation = _interopRequireDefault(require("./algebra/system_equation"));

var _base = _interopRequireDefault(require("./arithmetic/base"));

var _basic_operations = _interopRequireDefault(require("./arithmetic/basic_operations"));

var _fractions = _interopRequireDefault(require("./arithmetic/fractions"));

var _percentage = _interopRequireDefault(require("./arithmetic/percentage"));

var _rule_three = _interopRequireDefault(require("./arithmetic/rule_three"));

var _chemical_elements = _interopRequireDefault(require("./chemistry/chemical_elements"));

var _linear_regression = _interopRequireDefault(require("./general/linear_regression"));

var _operations = _interopRequireDefault(require("./general/operations"));

var _area = _interopRequireDefault(require("./geometry/area"));

var _vectors = _interopRequireDefault(require("./physics/vectors"));

var _angle_measurements = _interopRequireDefault(require("./trigonometry/angle_measurements"));

var _triangles = _interopRequireDefault(require("./trigonometry/triangles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = {
  Equations: _equations["default"],
  SystemEquations: _system_equation["default"],
  Base: _base["default"],
  BasicOperations: _basic_operations["default"],
  Fractions: _fractions["default"],
  Percentage: _percentage["default"],
  RuleThree: _rule_three["default"],
  ChemicalElements: _chemical_elements["default"],
  LinearRegresion: _linear_regression["default"],
  Operations: _operations["default"],
  Area: _area["default"],
  Vector: _vectors["default"],
  AngleMeasurements: _angle_measurements["default"],
  Triangle: _triangles["default"]
};