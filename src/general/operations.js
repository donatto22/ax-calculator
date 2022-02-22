export class operations {
    /**
    Returns the square root of the product of 
    the sum of the squared sides of the triangle.
    **/
    static hypotenuse(param1, param2) {
        var result = Math.sqrt((param1 * param1) + (param2 * param2));

        if(Number.isInteger(result)) {
            return String(result);
        }

        else {
            return "√" + String(result.toFixed(2));
        }
    }

    /**
    Convert a number to Roman numerals
    @param {number} num The number you are going to convert
    **/
    static toRomanized(num) {
        var roman = {
            M: 1000,
            CM: 900,
            D: 500,
            CD: 400,
            C: 100,
            XC: 90,
            L: 50,
            XL: 40,
            X: 10,
            IX: 9,
            V: 5,
            IV: 4,
            I: 1
        }

        var result = '';
        
        for (var key in roman) {
            if (num == roman[key]) {
                return result +=key;
            }

            var bober = num > roman[key];

            if(bober) {
                result = result + key.repeat(parseInt(num/roman[key]));
                num = num % roman[key];
            }
        }

        return result;
    }

    /**
    - You have a simple log like log(b)a = c
    
    @param {number} base The base of the log -> b
    @param {number} argument The result of bᶜ -> a
    @param {number} logarithm Also known as exponent -> c
    @return {string} Return the missing value in the log, 
    set null to the value you need to find
    **/
    static log(base, argument, logarithm) {
        if(base == null) {
            return String(Math.pow(argument, 1/logarithm));
        }

        else if(argument == null) {
            return String(base ** logarithm);
        }

        else {
            for(var i = 2; i < 13; i++) {
                if(base ** i == argument) {
                    return String(i);
                }

                else {
                    continue;
                }
            }
        }
    }

    /**
    - Return the factorial of a number

    @param {number} number 
    **/

    static factorial(number) {
        return factorial(number, 1);
    }

    static doubleFactorial(number) {
        return factorial(number, 2);
    }

    /**
    - Example -> C¹¹₇
    - Returns the number of possible combinations

    @param {number} top - 11
    @param {number} bottom - 7
    **/
    static combinatorial(top, bottom) {
        if(typeof top === 'string' || typeof bottom === 'string') {
            return "You must enter a number"
        }

        else {
            return factorial(top, 1) / (factorial(top - bottom, 1) * factorial(bottom, 1))
        }
    }

    /**
    Returns the fibonacci series
    @param {number} maxlength - The number of values you wish to obtain
    @return {object} - Returns an array with the inserted values
    **/
    
    static fibonacci(maxlength) {
        let n1 = 0, n2 = 1, nextTerm;
        var serie = [0, 1];

        if(maxlength < 2) {
            return "The base number of digits is 2";
        }

        else if(typeof maxlength === 'string') {
            return "You must enter a numerical value";
        }

        else {
            for (var i = 1; i <= maxlength - 2; i++) {
                nextTerm = n1 + n2;
                n1 = n2;
                n2 = nextTerm;

                serie.push(nextTerm)
            }
        }

        return serie;
    }

    /**
    Returns the divisors of a number

    @param {number} number
    @return {object} 
    **/

    static divisors(number) {
        if(typeof number !== 'number') {
            return "Error in divisors: Place a number"
        }

        else {
            return divisors(number);
        }
    }
}

function divisors(number) {
    var arr = [];

    for(var i = 1; i <= number; i++) {
        if(number % i == 0) {
            arr.push(i);
        }
    }

    return arr;
}

function factorial(number, decrease) {
    var result;

    if(typeof number === 'string') {
        return "You must enter a number"
    }

    else if(number < 0) {
        return "For now, it only receives positive numbers"
    }

    else {
        if(number === 0 || number === 1) {
            result = 1;
        }

        else if(number === 2 && decrease === 2) {
            result = 2;
        }

        else {
            for(var i = number - decrease; i >= 1; i-=decrease) {
                result = (number *= i)
            }
        }

        return result;
    }
}