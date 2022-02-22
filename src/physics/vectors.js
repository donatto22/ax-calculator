export class vectors {
    static sum(...vectors) {
        var arr_x = [], arr_y = [];

        for(var i = 0; i <= vectors.length - 1; i++) {
            if(typeof vectors[i] != 'object') {
                return "Only objects"
            }
    
            else if(typeof vectors[i][0] != 'number' || typeof vectors[i][1] != 'number') {
                return "Only numbers in the objects"
            }
    
            else {
                arr_x.push(vectors[i][0])
                arr_y.push(vectors[i][1])
            }
        }

        var x = arr_x.reduce(sum)
        var y = arr_y.reduce(sum)

        var expression = validateExpression(x, y)
        var cartesian = [x, y]

        var unit_vector = unitVector(x, y)

        return {
            x, y, expression, cartesian, unit_vector
        }
    }

    static substract(...vectors) {
        var arr_x = [], arr_y = [];

        for(var i = 0; i <= vectors.length - 1; i++) {
            if(typeof vectors[i] != 'object') {
                return "Only objects"
            }
    
            else if(typeof vectors[i][0] != 'number' || typeof vectors[i][1] != 'number') {
                return "Only numbers in the objects"
            }
    
            else {
                arr_x.push(vectors[i][0])
                arr_y.push(vectors[i][1])
            }
        }

        var x = arr_x.reduce(substract)
        var y = arr_y.reduce(substract)

        var expression = validateExpression(x, y)
        var cartesian = [x, y]
        
        var unit_vector = unitVector(x, y)

        return {
            x, y, expression, cartesian, unit_vector
        }
    }

    static product(...vectors) {
        var arr_x =[], arr_y = [];

        for(var i = 0; i <= vectors.length - 1; i++) {
            if(typeof vectors[i] != 'object') {
                return "Only objects"
            }
    
            else if(typeof vectors[i][0] != 'number' || typeof vectors[i][1] != 'number') {
                return "Only numbers in the objects"
            }
    
            else {
                arr_x.push(vectors[i][0])
                arr_y.push(vectors[i][1])
            }
        }

        var x = arr_x.reduce(product)
        var y = arr_y.reduce(product)

        return x + y;
    }

    static unitVector(vector) {
        return unitVector(vector[0], vector[1]);
    }
}

const sum = (accumulator, curr) => accumulator + curr;
const substract = (accumulator, curr) => accumulator - curr;
const product = (accumulator, curr) => accumulator * curr;

function validateExpression(x, y) {
    var expression;

    if(x == 0) {
        x = '';
    }

    if(y == 0) {
        y = ''
    }

    if(x == 1) {
        x = 'i'
    }

    if(y == 1) {
        y = 'i'
    }

    if(x > 1) {
        x = `${x}i`
    }

    if(y > 1 ) {
        y = `${y}j`
    }

    if(y < 0) {
        expression = `${x} - ${y * -1}j`
    }

    else if(x < 0) {
        expression = `-${x * -1}i + ${y}`
    }

    else if(x < 0 && y < 0) {
        expression = `-${x * -1}i - ${y * -1}j`
    }

    else {
        expression = `${x} + ${y}`
    }


    return expression;
}

function unitVector(x, y) {
    var module = ((x ** 2) + (y ** 2)) ** (1/2);

    var x2 = Number.parseFloat((x / module).toString().match(/^-?\d+(?:\.\d{0,2})?/))
    var y2 = Number.parseFloat((y / module).toString().match(/^-?\d+(?:\.\d{0,2})?/))

    return [x2, y2]
}