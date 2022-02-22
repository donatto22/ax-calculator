export class basicOperations {
    /**
    Returns the sum of the numbers
    @param {number} parameters You can add as many numbers as you wish
    **/
    static sum(...parameters) {      
        for(var i = 0; i <= parameters.length - 1; i++) {
            if(typeof parameters[i] != 'number') {
                return "Only numbers"
            }

            else {
                var result = parameters.reduce((previous, current) => {
                    return  previous + current
                });
        
                return {
                    result,
                    toNegative() {
                        return result * -1;
                    }
                }
            }
        }
    }

    /**
    Returns the substract of the numbers
    @param {number} parameters You can add as many numbers as you wish
    **/
    static substract(...parameters) {
        for(var i = 0; i <= parameters.length - 1; i++) {
            if(typeof parameters[i] != 'number') {
                return "Only numbers"
            }

            else {
                var result =  parameters.reduce((previous, current) => {
                    return previous - current;
                });
        
                return {
                    result,
                    toNegative() {
                        return result * -1;
                    }
                }
            }
        }
    }

    /**
    Returns the product of the numbers
    @param {number} parameters You can add as many numbers as you wish
    **/
    static product(...parameters) {
        for(var i = 0; i <= parameters.length - 1; i++) {
            if(typeof parameters[i] != 'number') {
                return "Only numbers"
            }

            else {
                var result = parameters.reduce((previous, current) => {
                    return previous * current;
                });
        
                return {
                    result,
                    toNegative() {
                        return result * -1;
                    }
                }
            }
        }
        
    }

    /**
    Returns the division by 2 numbers
    **/
    static division(param1, param2) {
        if(typeof param1 != 'number' || typeof param2 != 'number') {
            return "Only numbers"
        }

        else {
            return (param1 / param2)
        }
    }

    /**
    Returns the remainder of a division by 2 numbers
    **/
    static module(param1, param2) {
        if(typeof param1 != 'number' || typeof param2 != 'number') {
            return "Only numbers"
        }

        else {
            return (param1 % param2)
        }
    }

    static raiseTo(number, exponent) {
        if(typeof number === 'string' || typeof exponent === 'string') {
            return "You must enter a number"
        }

        else {
            if(exponent == 0) {
                return "1"
            }
    
            else if(exponent < 0) {
                return `1/${number ** (exponent * -1)}`
            }
    
            else {
                return (number ** exponent).toString();
            }
        }
    }

    /**
    ʳᵒᵒᵗ√number

    If you do not enter a root, you will get the square root by default.

    @param {number} number The number whose root you need
    @param {number} root The root you wish to obtain
    **/

    static root(number, root = 2) {
        if(typeof number === 'string' || typeof root === 'string') {
            return "You must enter a number"
        }

        else {
            return String(number ** (1/root))
        }
    }
}