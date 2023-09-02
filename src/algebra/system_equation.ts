import { Validator, Config } from '../main.js'

/**
    Returns exact values of a system of 2 equations
    @param equation1 - first equation
    @param equation2 - second equation
**/

export const SystemEquation = {
    double: function (equation1: Array<number>, equation2: Array<number>) {
        if(Validator.isArray(equation1) && Validator.isArray(equation2)) {
            //ax + by = c
            //dx + ey = f
    
            // x = ( c e  -  b f )  /  ( a e  -  b d )
            // y = ( a f  -  c d )  /  ( a e  -  b d )
            var a, b, c, d, e, f, x, y;
    
            a = equation1[0]; b = equation1[1]; c = equation1[2];
            d = equation2[0]; e = equation2[1]; f = equation2[2];

            if(a != undefined && b != undefined && c != undefined && d != undefined && e != undefined
                && f != undefined && x != undefined && y != undefined) {
                x = ( (c * e) - (b * f) ) / ( (a * e) - (b * d) )
                y = ( (a * f) - (c * d) ) / ( (a * e) - (b * d) ) 
            }
    
            return { x, y }
            
        }

        else {
            let msg = Config().language == 'en' ? 
            "Place the objects[] with the equation values" : "Coloca el arreglo con los valores de la equación"

            return "[x] SystemEquation: " + msg
        }
    }
}