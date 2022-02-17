import fractions from '../arithmetic/fractions'
import Const from '../constants/constants'

const PI_GLYPH = "π";

const angleMeasurements = {
    /**
    @param {number_string} radian You can place a string (fraction) or a number
    **/
    radian: function(radian) {
        return {
            toCentesimal: function() {
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
                    return Number.parseFloat(((radian * 200) / Const.PI).toFixed(3));
                }

                else {
                    return "Place a number or string (fraction)"
                }
            },

            toSexagesimal: function() {
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
                    return Number.parseFloat(((radian * 180) / Const.PI).toFixed(3));
                }

                else {
                    return "Place a number or string (fraction)"
                }
            }
        }
    },
    centesimal: function(number) {
        return {
            toRadian: function() {
                if(typeof number !== 'number') {
                    return "Place a number"
                }

                else {
                    
                    var dest = destructure(fractions.simplify(number, 200));
                    var top = dest.top, bottom = dest.bottom;

                    var t, result;

                    result = `${t}/${bottom}`

                    //top
                    top == 1 ? t = `${PI_GLYPH}` : t = `${top}${PI_GLYPH}`

                    //bottom
                    bottom == 1 ? result = `${t}` : result = `${t}/${bottom}`

                    return result;
                }
            },

            toSexagesimal: function() {
                if(typeof number !== 'number') {
                    return "Place a number"
                }

                else {
                    return (number * 9) / 10
                }
            }
        }

    },
    sexagesimal: function(number) {
        return {
            toRadian: function() {
                if(typeof number !== 'number') {
                    return "Place a number"
                }

                else {
                    var dest = destructure(fractions.simplify(number, 180));
                    var top = dest.top, bottom = dest.bottom;

                    var t, result;

                    result = `${t}/${bottom}`

                    //top
                    top == 1 ? t = `${PI_GLYPH}` : t = `${top}${PI_GLYPH}`

                    //bottom
                    bottom == 1 ? result = `${t}` : result = `${t}/${bottom}`

                    return result;
                }
            },

            toCentesimal: function() {
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

export default angleMeasurements