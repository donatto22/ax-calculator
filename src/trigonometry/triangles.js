export class triangles {
    static angle30_60() {
        return triangle('2k', 'k', 'k√3');
    }

    static angle45() {
        return triangle('k√2', 'k', 'k');
    }

    static angle37_53() {
        return triangle('5k', '3k', '4k');
    }

    static angle16_74() {
        return triangle('25k', '7k', '24k')
    }

    static angle14_76() {
        return triangle('k√17', 'k', '4k')
    }

    static angle15_75() {
        return triangle('4k', '(√6 - √2)k', '(√6 + √2)k')
    }

    static angle50_40() {
        return triangle('k√61', '6k', '5k')
    }

    static angle8_82() {
        return triangle('5k√2', 'k', '7k')
    }

    static angle70_20() {
        return triangle('k√137', '11k', '4k')
    }

    static angle35_55() {
        return triangle('k√149', '7k', '10k')
    }    
}

function triangle(hypotenuse, opposite, adjacent) {
    var sin = `${opposite}/${hypotenuse}`, cos = `${adjacent}/${hypotenuse}`, tan = `${opposite}/${adjacent}`;

    return {
        hypotenuse, opposite, adjacent,
        sin, cos, tan
    }
}