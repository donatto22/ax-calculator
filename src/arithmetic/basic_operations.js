export const BasicOperations = {
    /**
        Returns the sum of the numbers
        @param {number} parameters You can add as many numbers as you wish
    **/
   sum: function (...parameters) {
        for (let i = 0; i <= parameters.length - 1; i++) {
            if (typeof parameters[i] != 'number') return "Only numbers"

            else {
                let result = parameters.reduce((previous, current) => { return  previous + current })

                return { 
                    result, 
                    toNegative() { 
                        return result * -1; 
                    } 
                }
            }
        }
   },
    /**
        Returns the substract of the numbers
        @param {number} parameters You can add as many numbers as you wish
    **/
    substract: function(...parameters) {
        for(var i = 0; i <= parameters.length - 1; i++) {
            if(typeof parameters[i] != 'number') {
                return "Only numbers"
            }

            else {
                var result =  parameters.reduce((previous, current) => { return previous - current})
        
                return {
                    result,
                    toNegative() {
                        return result * -1;
                    }
                }
            }
        }
    },

    /**
        Returns the product of the numbers
        @param {number} parameters You can add as many numbers as you wish
    **/
    product: function(...parameters) {
        for(let i = 0; i <= parameters.length - 1; i++) {
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
        
    },

    /**
        Returns the division by 2 numbers
    **/
    division: function(param1, param2) {
        if(typeof param1 != 'number' || typeof param2 != 'number') {
            return "Only numbers"
        }

        else {
            return (param1 / param2)
        }
    },

    /**
    Returns the remainder of a division by 2 numbers
    **/
    module: function(param1, param2) {
        if(typeof param1 != 'number' || typeof param2 != 'number') {
            return "Only numbers"
        }

        else {
            return (param1 % param2)
        }
    },

    raiseTo: function(number, exponent) {
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
    },

    /**
        ʳᵒᵒᵗ√number

        If you do not enter a root, you will get the square root by default.

        @param {number} number The number whose root you need
        @param {number} root The root you wish to obtain
    **/

    root: function(number, root = 2) {
        if(typeof number === 'string' || typeof root === 'string') {
            return "You must enter a number"
        }

        else {
            return String(number ** (1/root))
        }
    },

    Chaining: class {
        constructor() {
            this.value = 0
        }
    
        /**
        @param {number} value - Place a number to start your chain of operations
        **/
        baseNumber(value) {
            typeof value === 'number' ? this.value = value : "[x] Base Number Error: Place a number"
            return this
        }
    
        sum(...args) {
            if(typeof args == 'object') {
                if(args.length == 0) {
                    return "[x] Sum error: Place a number"
                }

                else {
                    for(let i = 0; i <= args.length - 1; i++) {
                        if(typeof args[i] !== 'number') {
                            return "[x] All values must be numbers"
                        }
                    }
    
                    for(let i = 0; i <= args.length - 1; i++) {
                        this.value += BasicOperations.sum(args[i]).result;
                    }
            
                    return this
                }
            }

            else if(typeof args == 'number') {
                this.value = this.value + args
            }

            else {
                return "[x] Enter a number or several numbers"
            }
            
            return this
        }
    
        multiply(value) {
            if(this.value == 0) {
                return "[x] You can't multiply with anything"
            }

            else if(typeof value != 'number') {
                return "[x] Multiply Error: Place a number"
            }

            else {
                this.value = this.value * value
                return this
            }
        }
    
        substract(value) {
            if(this.value == 0) {
                return "[x] You can't substract with anything"
            }

            else if(typeof value != 'number') {
                return "[x] Substract Error: Place a number"
            }

            else {
                this.value = this.value - value
                return this
            }
        }
    
        divide(value) {
            if(this.value == 0) {
                return "[x] You can't divide with anything"
            }

            else if(typeof value != 'number') {
                return "[x] Divide Error: Place a number"
            }

            else {
                this.value = this.value / value
                return this
            }
        }
    }
}