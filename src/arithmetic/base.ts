import { Validator, Config } from "../main.js";

export const Base = {
    toBase: function(number: number, base : number): number | string {
        if(!Validator.isNumber(number, base)) {
            let msg = Config().language == 'en' ? 
            "This function requires numbers" : "Esta función requiere números"
            
            return "[x] Base.toBase: " + msg;
        }

        else return number.toString(base)
    },

    binaryToBase10: function (number: number): number | string {
        if (Validator.isNumber(number)) {
            let binary = number.toString().replace(/[^01]/gi, '')
            return Number.parseInt(binary, 2).toString()
        }

        else {
            let msg = Config().language == 'en' ? 
            "You must place a binary number" : "Coloca un número binario"

            return "[x] Base.binaryToBase10: " + msg
        }
    }
}