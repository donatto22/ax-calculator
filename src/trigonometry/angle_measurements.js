import { fractions } from '../arithmetic/fractions.js';

var piNumber = 3.1415926
var pi = "π";

export class angle_measurements {

    /**
    @param {number_string} radian You can place a string (fraction) or a number
    **/
    static radian(radian) {
        return {
            toCentesimal() {
                if(typeof radian == 'string') {
                    if(typeof destructure(radian).top == 'undefined' || typeof destructure(radian).bottom == 'undefined') {
                        return "Place a fraction"
                    }

                    else {
                        var top = destructure(radian).top, bottom = destructure(radian).bottom;
                        return (top * 200) / bottom;
                    }
                }

                else if(typeof radian == 'number') {
                    return Number.parseFloat(((radian * 200) / piNumber).toFixed(3));
                }

                else {
                    return "Place a number or string (fraction)"
                }
            },

            toSexagesimal() {
                if(typeof radian == 'string') {
                    if(typeof destructure(radian).top == 'undefined' || typeof destructure(radian).bottom == 'undefined') {
                        return "Place a fraction"
                    }

                    else {
                        var top = destructure(radian).top, bottom = destructure(radian).bottom;
                        return (top * 180) / bottom;
                    }
                }

                else if(typeof radian == 'number') {
                    return Number.parseFloat(((radian * 180) / piNumber).toFixed(3));
                }

                else {
                    return "Place a number or string (fraction)"
                }
            }
        }
    }

    static centesimal(number) {
        return {
            toRadian() {
                if(typeof number !== 'number') {
                    return "Place a number"
                }

                else {
                    
                    var dest = destructure(fractions.simplify(number, 200));
                    var top = dest.top, bottom = dest.bottom;

                    var t, result;

                    result = `${t}/${bottom}`

                    //top
                    top == 1 ? t = `${pi}` : t = `${top}${pi}`

                    //bottom
                    bottom == 1 ? result = `${t}` : result = `${t}/${bottom}`

                    return result;
                }
            },

            toSexagesimal() {
                if(typeof number !== 'number') {
                    return "Place a number"
                }

                else {
                    return (number * 9) / 10
                }
            }
        }

    }

    static sexagesimal(number) {
        return {
            toRadian() {
                if(typeof number !== 'number') {
                    return "Place a number"
                }

                else {
                    var dest = destructure(fractions.simplify(number, 180));
                    var top = dest.top, bottom = dest.bottom;

                    var t, result;

                    result = `${t}/${bottom}`

                    //top
                    top == 1 ? t = `${pi}` : t = `${top}${pi}`

                    //bottom
                    bottom == 1 ? result = `${t}` : result = `${t}/${bottom}`

                    return result;
                }
            },

            toCentesimal() {
                if(typeof number !== 'number') {
                    return "Place a number"
                }

                else {
                    var top = 10 * number, bottom = 9;

                    //Numero entero
                    if ((top / bottom) % 1 == 0) {
                        return top / bottom;
                    }

                    //Decimal
                    else {
                        return `${top}/${bottom}`
                    }
                }
            }
        }
    }
}

function destructure(string) {
    let array = string.split('/');
    var top =  array[0], bottom = array[1];
    return {
        top, bottom
    }
}