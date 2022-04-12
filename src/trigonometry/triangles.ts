import { Config } from '../main.js'

export const Triangles = {
    angle30_60: function() {
        return Config().disabledTriangleConstants ? 
        triangle('2', '1', '√3') : triangle('2k', 'k', 'k√3')
    },

    angle45: function() {
        return Config().disabledTriangleConstants ? 
        triangle('√2', '1', '1') : triangle('k√2', 'k', 'k')
    },

    angle37_53: function() {
        return Config().disabledTriangleConstants ? 
        triangle('5', '3', '4') : triangle('5k', '3k', '4k')
    },

    angle16_74: function() {
        return Config().disabledTriangleConstants ? 
        triangle('25', '7', '24') : triangle('25k', '7k', '24k')
    },

    angle14_76: function() {
        return Config().disabledTriangleConstants ? 
        triangle('√17', '1', '4') : triangle('k√17', 'k', '4k')
    },

    angle15_75: function() {
        return Config().disabledTriangleConstants ? 
        triangle('4', '(√6 - √2)', '(√6 + √2)') : triangle('4k', '(√6 - √2)k', '(√6 + √2)k')
    },

    angle50_40: function() {
        return Config().disabledTriangleConstants ? 
        triangle('√61', '6', '5') : triangle('k√61', '6k', '5k')
    },

    angle8_82: function() {
        return Config().disabledTriangleConstants ? 
        triangle('5√2', '1', '7') : triangle('5k√2', 'k', '7k')
    },

    angle70_20: function() {
        return Config().disabledTriangleConstants ? 
        triangle('√137', '11', '4') : triangle('k√137', '11k', '4k')
    },

    angle35_55: function() {
        return Config().disabledTriangleConstants ? 
        triangle('√149', '7', '10') : triangle('k√149', '7k', '10k')
    },

    angle36_54: function() {
        return Config().disabledTriangleConstants ? 
        triangle('4', '√(10 - 2√5)', '(√5 + 1)') : triangle('4k', 'k√(10 - 2√5)', 'k(√5 + 1)')
    }
}

function triangle(hypotenuse: string, opposite: string, adjacent: string) {
    let sin = `${opposite}/${hypotenuse}`, cos = `${adjacent}/${hypotenuse}`, tan = `${opposite}/${adjacent}`
    return { hypotenuse, opposite, adjacent, sin, cos, tan }
}