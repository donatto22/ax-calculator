export const Fractions = {
    sum: function(numerator1: number, denominator1: number, numerator2: number, denominator2: number) {
        let result, bober = false;

        if(denominator1 == denominator2) {
            // When dominators are equals
            let top = numerator1 + numerator2
            let bottom = denominator1
            
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
            let top = (denominator2 * numerator1) + (denominator1 * numerator2)
            let bottom = denominator1 * denominator2

            result = simplify(top, bottom);
        }

        return result;
    },

    substract: function(numerator1: number, denominator1: number, numerator2: number, denominator2: number) {
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
    },

    product: function(numerator1: number, denominator1: number, numerator2: number, denominator2: number) {
        var top = numerator1 * numerator2;
        var bottom = denominator1 * denominator2;

        return simplify(top, bottom);
    },

    division: function(numerator1: number, denominator1: number, numerator2: number, denominator2: number) {
        var top = numerator1 * denominator2;
        var bottom = denominator1 * numerator2;

        return simplify(top, bottom);
    },

    /**
    @param top - Numerator
    @param bottom - Denominator
    **/
    simplify: function(top: number, bottom: number) {
        return simplify(top, bottom);
    },

    /**
    @param fraction
    **/
    destructure: function(fraction: string) {
        return destructure(fraction);
    }
}

function simplify(top: number, bottom: number): string {
    let result = '';

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

function destructure(string: string) {
    let array = string.split('/');
    var top =  array[0], bottom = array[1];
    return {
        top, bottom
    }
}