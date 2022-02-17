import equations from './algebra/equations'
import system_equation from './algebra/system_equation'

import base from './arithmetic/base'
import basicOperations from './arithmetic/basic_operations'
import fractions from './arithmetic/fractions'
import percentage from './arithmetic/percentage'
import rule_three from './arithmetic/rule_three'

import chemical_elements from './chemistry/chemical_elements'

import linear_regression from './general/linear_regression'
import operations from './general/operations'

import area from './geometry/area'

import vectors from './physics/vectors'

import angle_measurements from './trigonometry/angle_measurements'
import triangles from './trigonometry/triangles'

module.exports = { 
    Equations: equations,
    SystemEquations: system_equation,
    Base: base,
    BasicOperations: basicOperations,
    Fractions: fractions,
    Percentage: percentage,
    RuleThree: rule_three,
    ChemicalElements: chemical_elements,
    LinearRegresion: linear_regression,
    Operations: operations,
    Area: area,
    Vector: vectors,
    AngleMeasurements: angle_measurements,
    Triangle: triangles    
}