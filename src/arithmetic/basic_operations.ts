import { Config } from '../main'

export const BasicOperations = {
    /**
        Returns the sum of the numbers
    **/
   sum: function (...parameters: Array<number>) : object | string {
        for (let i = 0; i <= parameters.length - 1; i++) {
            if (typeof parameters[i] != 'number') {
                let msg = Config().language == 'en' ? "Place numbers" : "Coloca números"
                return "[x] sum: " + msg
            }    
        }

        let result:number = 0

        parameters.forEach((number, index) => {
            result += number
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
        Returns the substract of the numbers
    **/
    substract: function (...parameters: Array<number>) : any {
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
                    console.log(parameters)
    }

    /**
        Returns the product of the numbers
        @param {object[]} parameters You can add as many numbers as you wish
        @return {string|number}
    **/
//     product: function (...parameters: object[]) : object | string {
//         for(let i = 0; i <= parameters.length - 1; i++) {
//             if (typeof parameters[i] != 'number') {
//                 let msg = Config().language == 'en' ? "Place numbers" : "Coloca números"
//                 return "[x] product: " + msg
//             }

//             else {
//                 let result = parameters.reduce((previous, current) => { return previous * current });
        
//                 return {
//                     result,
//                     toNegative() {
//                         return result * -1;
//                     }
//                 }
//             }
//         }
        
//     },

//     /**
//         Returns the division by 2 numbers
//         @param {number} number1
//         @param {number} number2
//         @return {string|number}
//     **/
//     division: function(number1, number2) {
//         if(typeof number1 != 'number' || typeof number2 != 'number') {
//             let msg = Config().language == 'en' ? "Place two numbers" : "Coloca dos números"
//             return "[x] division: " + msg
//         }

//         else {
//             return (number1 / number2)
//         }
//     },

//     /**
//     Returns the remainder of a division by 2 numbers
//     @return {string|number}
//     **/
//     module: function(param1, param2) {
//         if(typeof param1 != 'number' || typeof param2 != 'number') {
//             let msg = Config().language == 'en' ? "Place two numbers" : "Coloca dos números"
//             return "[x] module: " + msg
//         }

//         else {
//             return param1 % param2
//         }
//     },

//     /**
//     @param {number} number
//     @param {number} exponent
//     @return {string|number}
//     **/
//     raiseTo: function(number, exponent) {
//         if(typeof number != 'number' || typeof exponent != 'number') {
//             let msg = Config().language == 'en' ? "Place two numbers" : "Coloca dos números"
//             return "[x] raiseTo: " + msg
//         }

//         else {
//             if(exponent == 0) {
//                 return 1
//             }
    
//             else if(exponent < 0) {
//                 return `1/${number ** (exponent * -1)}`
//             }
    
//             else {
//                 return number ** exponent;
//             }
//         }
//     },

//     /**
//         If you do not enter a root, you will get the square root by default.

//         @param {number} number The number whose root you need
//         @param {number} root The root you wish to obtain
//         @return {string|number}
//     **/

//     root: function(number, root = 2) {
//         if(typeof number != 'number' || typeof root != 'number') {
//             let msg = Config().language == 'en' ? "Place a number" : "Coloca un número"
//             return "[x] root: " + msg
//         }

//         else {
//             return number ** (1 / root)
//         }
//     },

//     Chaining: class {
//         constructor() {
//             this.value = 0
//         }
    
//         /**
//         @param {number} value - Place a number to start your chain of operations
//         **/
//         baseNumber(value) {
//             typeof value === 'number' ? this.value = value : "[x] Base Number: Place a number"
//             return this
//         }
    
//         sum(...args) {
//             if(typeof args == 'object') {
//                 if(args.length == 0) {
//                     return "[x] Sum: Place a number"
//                 }

//                 else {
//                     for(let i = 0; i <= args.length - 1; i++) {
//                         if(typeof args[i] !== 'number') {
//                             return "[x] All values must be numbers"
//                         }
//                     }
    
//                     for(let i = 0; i <= args.length - 1; i++) {
//                         this.value += BasicOperations.sum(args[i]).result;
//                     }
            
//                     return this
//                 }
//             }

//             else if(typeof args == 'number') {
//                 this.value = this.value + args
//             }

//             else {
//                 return "[x] Enter a number or several numbers"
//             }
            
//             return this
//         }
    
//         multiply(value) {
//             if(this.value == 0) {
//                 return "[x] You can't multiply with anything"
//             }

//             else if(typeof value != 'number') {
//                 return "[x] Multiply: Place a number"
//             }

//             else {
//                 this.value = this.value * value
//                 return this
//             }
//         }
    
//         substract(value) {
//             if(this.value == 0) {
//                 return "[x] You can't substract with anything"
//             }

//             else if(typeof value != 'number') {
//                 return "[x] Substract Error: Place a number"
//             }

//             else {
//                 this.value = this.value - value
//                 return this
//             }
//         }
    
//         divide(value) {
//             if(this.value == 0) {
//                 return "[x] You can't divide with anything"
//             }

//             else if(typeof value != 'number') {
//                 return "[x] Divide Error: Place a number"
//             }

//             else {
//                 this.value = this.value / value
//                 return this
//             }
//         }
//     }
// }
}