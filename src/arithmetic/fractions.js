export class fractions {
    static sum(numerator1, denominator1, numerator2, denominator2) {
        var result;

        var bober = false;        

        if(denominator1 == denominator2) {
            // When dominators are equals
            var top = numerator1 + numerator2
            var bottom = denominator1
            
            //Check if negative
            if(top < 0) {
                bober  = true;
                top = top * -1;
            }
            
            if((top / bottom) % 1 == 0) {
                result = String(top / bottom)
            }
            
            else {
                result = String(top) + "/" + String(bottom);
            }
        }
        
        else {
            // When dominators are different
            var top = (denominator2 * numerator1) + (denominator1 * numerator2)
            var bottom = denominator1 * denominator2

            result = simplify(top, bottom);
        }

        return result;
    }

    static substract(numerator1, denominator1, numerator2, denominator2) {
        var result;

        if(denominator1 == denominator2) {
            // When dominators are equals
            var top = numerator1 - numerator2
            var bottom = denominator1
            
            if((top / bottom) % 1 == 0) {
                result = String(top / bottom)
            }
            
            else {
                result = String(top) + "/" + String(bottom);
            }
        }

        else {
            // When dominators are different
            var top = (denominator2 * numerator1) - (denominator1 * numerator2)
            var bottom = denominator1 * denominator2
            
            result = simplify(top, bottom);
        }

        return result;
    }

    static product(numerator1, denominator1, numerator2, denominator2) {
        var top = numerator1 * numerator2;
        var bottom = denominator1 * denominator2;

        return simplify(top, bottom);
    }

    static division(numerator1, denominator1, numerator2, denominator2) {
        var top = numerator1 * denominator2;
        var bottom = denominator1 * numerator2;

        return simplify(top, bottom);
    }

    static simplify(top, bottom) {
        return simplify(top, bottom);
    }

    static destructure(fraction) {
        return destructure(fraction);
    }
}

/**
@param {number} top - Numerator
@param {number} bottom - Denominator
**/

function simplify(top, bottom) {
    var result;

    var bober = false;
    
    if(top < 0) {
        bober  = true;
        top = top * -1;
    }

    if(bottom < 0) {
        bober  = true;
        bottom = bottom * -1;
    }

    for(let i = 2; i < 20; i++) {
        while((top / i > 0) && ((bottom / i) > 0)) {
            if((top % i == 0) && ((bottom % i) == 0)) {
                top = top / i;
                bottom = bottom / i;
            }

            else{
                if(bober) {
                    result = "-" + String(top) + "/" + String(bottom)
                }
                    
                else {
                    result = String(top) + "/" + String(bottom)
                }

                break;
            }
        }
    }

    return result;
}

function destructure(string) {
    let array = string.split('/');
    var top =  array[0], bottom = array[1];
    return {
        top, bottom
    }
}