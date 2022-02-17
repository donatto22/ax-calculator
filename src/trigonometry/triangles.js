const Triangles = {
    angle30_60: function() {
        return triangle('2k', 'k', 'k√3')
    },

    angle45: function() {
        return triangle('k√2', 'k', 'k')
    },

    angle37_53: function() {
        return triangle('5k', '3k', '4k')
    },

    angle16_74: function() {
        return triangle('25k', '7k', '24k')
    },

    angle14_76: function() {
        return triangle('k√17', 'k', '4k')
    },

    angle15_75: function() {
        return triangle('4k', '(√6 - √2)k', '(√6 + √2)k')
    },

    angle50_40: function() {
        return triangle('k√61', '6k', '5k')
    },

    angle8_82: function() {
        return triangle('5k√2', 'k', '7k')
    },

    angle70_20: function() {
        return triangle('k√137', '11k', '4k')
    },

    angle35_55: function() {
        return triangle('k√149', '7k', '10k')
    }  
}

function triangle(hypotenuse, opposite, adjacent) {
    let sin = `${opposite}/${hypotenuse}`, cos = `${adjacent}/${hypotenuse}`, tan = `${opposite}/${adjacent}`;
    return { hypotenuse, opposite, adjacent, sin, cos, tan }
}

export default Triangles