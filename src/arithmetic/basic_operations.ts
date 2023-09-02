import { Config, Validator } from '../main.js'

export const BasicOperations = {
    /**
        Returns the sum of the numbers
    **/
   sum: function (...parameters: number[]) : object | string {
        for (let i = 0; i <= parameters.length - 1; i++) {
            if (typeof parameters[i] != 'number') {
                let msg = Config().language == 'en' ? "Place numbers" : "Coloca números"
                return "[x] sum: " + msg
            }    
        }

        let result:number = 0

        parameters.forEach((number, index) => {
            result += number
        })

        return { 
            result: result, 
            toNegative: function() { 
                return result * -1; 
            } 
        }
   },

    /**
        Returns the substract of the numbers
    **/
    substract: function (...parameters: number[]) : any {
        for(var i = 0; i <= parameters.length - 1; i++) {
            if (typeof parameters[i] != 'number') {
                let msg = Config().language == 'en' ? "Place numbers" : "Coloca números"
                return "[x] substract: " + msg
            }

            // else {
                //     var result =  parameters.reduce(_sum)
                
                //     return {
                    //         result,
                    //         toNegative() {
                        //             return result * -1;
                        //         }
                        //     }
                        // }
        }
    },

    /** Returns the product of the numbers */
    product: function (...parameters:  number[]) : object | string {
        for(let i = 0; i <= parameters.length - 1; i++) {
            if (typeof parameters[i] != 'number') {
                let msg = Config().language == 'en' ? "Place numbers" : "Coloca números"
                return "[x] product: " + msg
            }
        }

        let result:number = 1

        parameters.forEach((number, index) => {
            result *= number
            console.log(number)
        })

        return { 
            result, 
            toNegative() { 
                return result * -1; 
            } 
        }
        
    },

    /**
        Returns the division by 2 numbers
    **/
    division: function(number1:number, number2:number): string | number {
        if(!Validator.isNumber(number1, number2)) {
            let msg = Config().language == 'en' ? "Place two numbers" : "Coloca dos números"
            return "[x] division: " + msg
        }

        else return (number1 / number2)
    },

    /**
    Returns the remainder of a division by 2 numbers
    **/
    module: function(number1:number, number2:number): string | number {
        if(typeof number1 != 'number' || typeof number2 != 'number') {
            let msg = Config().language == 'en' ? "Place two numbers" : "Coloca dos números"
            return "[x] module: " + msg
        }

        else {
            return number1 % number2
        }
    },

    /**
    Raise a number to a exponent
    **/
    raiseTo: function(number:number, exponent:number): string | number {
        if(typeof number != 'number' || typeof exponent != 'number') {
            let msg = Config().language == 'en' ? "Place two numbers" : "Coloca dos números"
            return "[x] raiseTo: " + msg
        }

        else {
            if(exponent == 0) {
                return 1
            }
    
            else if(exponent < 0) {
                return `1/${number ** (exponent * -1)}`
            }
    
            else {
                return number ** exponent;
            }
        }
    },

    /**
        If you do not enter a root, you will get the square root by default.
    **/

    root: function(number:number, root:number = 2): string | number {
        if(typeof number != 'number' || typeof root != 'number') {
            let msg = Config().language == 'en' ? "Place a number" : "Coloca un número"
            return "[x] root: " + msg
        }

        else {
            return number ** (1 / root)
        }
    },

    probability: function (items: {[key: string]: number}): string {
        function randomItem(): string {
            const probability = Math.random()
            let cumulativeProbability = 0

            for (const item in items) {
                cumulativeProbability += items[item]!
                if (probability <= cumulativeProbability) {
                    return item;
                }
            }

            throw new Error("No item found");
        }

        return randomItem();
    },

    Chaining: class {
        value: number

        constructor() {
            this.value = 0
        }
    
        /** Place a number to start your chain of operations */
        baseNumber(value:number): this {
            typeof value === 'number' ? this.value = value : "[x] Base Number: Place a number"
            return this
        }
    
        sum(value: number) {
            // if(typeof args == 'object') {
            //     if(args.length == 0) {
            //         return "[x] Sum: Place a number"
            //     }

            //     else {
            //         for(let i = 0; i <= args.length - 1; i++) {
            //             if(typeof args[i] !== 'number') {
            //                 return "[x] All values must be numbers"
            //             }
            //         }
    
            //         for(let i = 0; i <= args.length - 1; i++) {
            //             args !== undefined && (this.value += args[i])
            //         }
            
            //         return this
            //     }
            // }

            // else if(typeof args == 'number') {
            //     this.value = this.value + args
            // }

            // else {
            //     return "[x] Enter a number or several numbers"
            // }
            this.value + value
            return this
        }
    
        multiply(value: number) {
            if(this.value == 0) {
                return "[x] You can't multiply with anything"
            }

            else if(typeof value != 'number') {
                return "[x] Multiply: Place a number"
            }

            else {
                this.value = this.value * value
                return this
            }
        }
    
        substract(value: number) {
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
    
        divide(value: number) {
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
