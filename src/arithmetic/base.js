import { Validator, Config } from "../main.js";

export const Base = {
    /**
        @param {number} number The number in base 10
        @param {number} base The base to which you want to pass the number
    **/
    toBase: function (number, base) {
        if(!Validator.isNumber(number, base)) {
            let msg = Config().language == 'en' ? 
            "This function requires numbers" : "Esta función requiere números"
            
            return "[x] Base.toBase: " + msg;
        }

        else {
            return number.toString(base)
        }
    },
    /**
        @param {number} number The binary number you need in base 10
    **/
    binaryToBase10: function (number) {
        if (Validator.isNumber(number)) {
            var binary = number.toString().replace(/[^01]/gi, '')
            return Number.parseInt(binary, 2).toString()
        }

        else {
            let msg = Config().language == 'en' ? 
            "You must place a binary number" : "Coloca un número binario"

            return "[x] Base.binaryToBase10: " + msg
        }
    }
}