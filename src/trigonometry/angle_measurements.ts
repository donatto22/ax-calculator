// import { Fractions as fractions, Validator, Config } from '../main.js';
// import Const from '../constants/constants.js'

// const PI_GLYPH = "π";

// export const AngleMeasurements = {
//     /**
//     @param radian You can place a string (fraction) or a number
//     **/
//     radian: function(radian: number | string) {
//         return {
//             toCentesimal: function() {
//                 let msg = ""

//                 if(Validator.isString(radian)) {
//                     if(Validator.isUndefined(fractions.destructure(String(radian)).top) || Validator.isUndefined(fractions.destructure(String(radian)).bottom)) {
//                         msg = Config().language == 'en' ? "Place a fraction" : "Coloca una fracción"
//                         return "[x] radian.toCentesimal: " + msg
//                     }

//                     else {
//                         let top = Number.parseInt(fractions.destructure(String(radian)).top), bottom = Number.parseInt(fractions.destructure(String(radian)).bottom)
//                         return (top * 200) / bottom;
//                     }
//                 }

//                 else if(Validator.isNumber(radian))
//                     return Number.parseFloat(((Number.parseInt(radian.toString()) * 200) / Const.PI).toFixed(3))

//                 else {
//                     msg = Config().language == 'en' ? 
//                     "Place a number or string (fraction)" : "Coloca un número o una fracción (cadena)"
//                     return "[x] radian.toCentesimal: " + msg
//                 }
//             },

//             toSexagesimal: function() {
//                 let msg = ""

//                 if(Validator.isString(radian)) {
//                     if(Validator.isUndefined(fractions.destructure(String(radian)).top) || Validator.isUndefined(fractions.destructure(String(radian)).bottom)) {
//                         msg = Config().language == 'en' ? "Place a fraction" : "Coloca una fracción"
//                         return "[x] radian.toSexagesimal: " + msg
//                     }

//                     else {
//                         let top = Number.parseInt(fractions.destructure(String(radian)).top), bottom = Number.parseInt(fractions.destructure(String(radian)).bottom)
//                         return (top * 180) / bottom;
//                     }
//                 }

//                 else if(Validator.isNumber(radian)) {
//                     return Number.parseFloat(((Number.parseInt(radian.toString()) * 180) / Const.PI).toFixed(3));
//                 }

//                 else {
//                     msg = Config().language == 'en' ? 
//                     "Place a number or string (fraction)" : "Coloca un número o una fracción"

//                     return "[x] radian.toSexagesimal: " + msg
//                 }
//             }
//         }
//     },

//     centesimal: function(number: number) {
//         return {
//             toRadian: function() {
//                 let msg = ""

//                 if(!Validator.isNumber(number)) {
//                     msg = Config().language == 'en' ? "Place a number" : "Coloca un número"
//                     return "[x] centesimal.toRadian: " + msg
//                 }

//                 else {
//                     let dest = fractions.destructure(fractions.simplify(number, 200));
//                     let top = dest.top, bottom = dest.bottom;
//                     let t, result;

//                     result = `${t}/${bottom}`

//                     //top
//                     top == '1' ? t = `${PI_GLYPH}` : t = `${top}${PI_GLYPH}`

//                     //bottom
//                     bottom == '1' ? result = `${t}` : result = `${t}/${bottom}`

//                     return result;
//                 }
//             },

//             toSexagesimal: function() {
//                 let msg = ""

//                 if(!Validator.isNumber(number)) {
//                     msg = Config().language == 'en' ? "Place a number" : "Coloca un número"
//                     return "[x] cemtesimal.toSexagesimal: " + msg
//                 }

//                 else {
//                     return (number * 9) / 10
//                 }
//             }
//         }

//     },
//     sexagesimal: function(number: number) {
//         return {
//             toRadian: function() {
//                 if(!Validator.isNumber(number)) {
//                     return "Place a number"
//                 }

//                 else {
//                     let dest = fractions.destructure(fractions.simplify(number, 180));
//                     let top = dest.top, bottom = dest.bottom;

//                     let t, result;

//                     result = `${t}/${bottom}`

//                     //top
//                     top == '1' ? t = `${PI_GLYPH}` : t = `${top}${PI_GLYPH}`

//                     //bottom
//                     bottom == '1' ? result = `${t}` : result = `${t}/${bottom}`

//                     return result;
//                 }
//             },

//             toCentesimal: function() {
//                 if(!Validator.isNumber(number)) {
//                     return "Place a number"
//                 }

//                 else {
//                     var top = 10 * number, bottom = 9;

//                     //Numero entero
//                     if ((top / bottom) % 1 == 0) {
//                         return top / bottom;
//                     }

//                     //Decimal
//                     else {
//                         return `${top}/${bottom}`
//                     }
//                 }
//             }
//         }
//     }
// }