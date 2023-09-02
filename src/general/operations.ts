import { Validator, Config } from "../main.js"

export const Operations = {
    /** Returns the square root of the product of the sum of the squared sides of the triangle */
    hypotenuse: function(param1:number, param2:number) {
        if(!Validator.isNumber(param1, param2)) {
            let msg = Config().language == 'en' ? 
            "This function requires numbers" : "Esta función requiere números"
            
            return "[x] Operations.hypotenuse: " + msg
        }

        else {
            let result = Math.sqrt((param1 * param1) + (param2 * param2));

            if (Number.isInteger(result))
                return result

            else return "√" + String(result.toFixed(2));
        }
    },
    
    /**
        Convert a number to Roman numerals
        @param num The number you are going to convert
    **/
    // toRoman: function(num: number): string {
    //     if (num < 1 || num > 3999) {
    //         return 'Error: Input integer limited to 1 through 3,999'
    //     }

    //     const numerals = [
    //         ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'], // 1-9
    //         ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'], // 10-90
    //         ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'], // 100-900
    //         ['M', 'MM', 'MMM'], // 1000-3000
    //     ];

    //     // TODO: Could expand to support fractions, simply rounding for now
    //     const digits = Math.round(num).toString().split('');
    //     let position = (digits.length - 1);

    //     return digits.reduce((roman, digit) => {
    //         if (digit !== '0' && numerals !== undefined)
    //             roman += numerals[position][parseInt(digit) - 1];

    //         position -= 1;

    //         return roman;
    //     }, '');
    // },
    /**
    - You have a simple log like log(b)a = c
    
    @param base The base of the log -> b
    @param argument The result of bᶜ -> a
    @param logarithm Also known as exponent -> c
    @return Return the missing value in the log, 
    set null to the value you need to find
    **/
    log: function(base: number, argument: number, logarithm: number) {
        if(base == null) return argument ** (1 / logarithm)

        else if (argument == null) return base ** logarithm

        else {
            for (let i = 2; i < 13; i++) {
                if (base ** i == argument) return i
            }
        }
    },
    /**
        - Example -> C¹¹₇
        - Returns the number of possible combinations

        @param top - 11
        @param bottom - 7
    **/
    combinatorial: function(top: number, bottom: number): number | string {
        if(!Validator.isNumber(top, bottom)) {
            return "You must enter a number"
        }
        
        else {
            return Number.parseInt(factorial(top, 1).toString()) / 
            (Number.parseInt(factorial(top - bottom, 1).toString()) * Number.parseInt(factorial(bottom, 1).toString()))
        }
    },
    /**
        Returns the fibonacci series
        @param  maxlength The number of values you wish to obtain
        @return Returns an array with the inserted values
    **/
    
    fibonacci: function(maxlength: number): Array<number> | string {
        let n1 = 0, n2 = 1, nextTerm;
        var serie = [0, 1];

        if(maxlength < 2) {
            return "The base number of digits is 2";
        }

        else if(typeof maxlength != 'number') {
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
    },

    /**
        Returns the divisors of a number
    **/
    divisors: function(number: number): number[] | string {
        if(!Validator.isNumber(number)) {
            return "[x] Operations.divisors: Place a number"
        }

        else {
            return _divisors(number);
        }
    },

    /**
        Returns the factorial of a number
    **/
    factorial: function(number: number) {
        return factorial(number, 1)
    },

    /**
     * 4!! is difference to (4!)!

    Returns the double factorial of a number 
    **/
    doubleFactorial: function(number: number) {
        return factorial(number, 2)
    }
}

function _divisors(number: number) {
    let arr = [];

    for (let i = 1; i <= number; i++) {
        if (number % i == 0) {
            arr.push(i);
        }
    }

    return arr;
}

function factorial(number: number, decrease: number): string | number {
    let result = 1;

    if (!Validator.isNumber(number)) {
        return "[x] Operations.factorial: You must enter a number"
    }

    else if (number < 0) {
        return "[!] Operations.factorial: For now, it only receives positive numbers"
    }

    else {
        if (number === 0 || number === 1) 
            result = 1;

        else if (number === 2 && decrease === 2) 
            result = 2;

        else {
            for(let i = number - decrease; i >= 1; i-=decrease) {
                result = (number *= i)
            }
        }
    }
    
    return result;
}