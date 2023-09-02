export const Equations = {
    /**
        Example -> f1: x² + 7x + 6 = 0
            
        Example -> f2: 3x² - 27 = 0
        @description The parameters vary according to the formula
        @param a - For f1 -> 1, For f2 -> 3
        @param b - For f1 -> 7, For f2 -> -27
        @param c - For f1 -> 6, Do not place anything
    **/
    secondDegree: function (a: number, b: number, c: number) {
        if(typeof(c) == 'undefined') {
            let x: string | number, internal: string | number = (b * -1) / a
            
            if(!Number.isInteger(internal)) {
                var top = b * - 1
                var bottom = a
                
                //Si la raíz cuadrada es un numero entero
                if(Number.isInteger(Math.sqrt(b * - 1))) {
                    top = Math.sqrt(b * - 1)
                }
                
                //Si la raíz cuadrada es un numero entero
                if(Number.isInteger(Math.sqrt(a))) {
                    bottom = Math.sqrt(a)
                }
                
                internal = String(top) + "/" + bottom
                x = `±√${internal}`
            }
            
            else {
                if(internal < 0) {
                    if(Number.isInteger(Math.sqrt(internal * -1))) {
                        internal = Math.sqrt(internal * -1)
                        x = `±${internal}𝓲`
                    }

                    else {
                        x = "𝓲√" + (internal * -1)
                    }

                }

                else {
                    x = Math.sqrt(internal);
                }
                
            }

            return x;
        }

        else {
            let internal: string | number = (b*b) - (4 * a * c)
            let interna2: string | number = Math.sqrt(internal)

            let x1: string | number, x2: string | number

            if (!Number.isInteger(interna2)) {
                interna2 = "√" + internal;
            }
            
            if (internal < 0) {
                interna2 = `𝓲√${String(-1 * internal)}`
            }
            
            if (typeof(interna2) == 'string') {
                x1 = String(-1 * b) + "/" + String(2 * a) + " + " + interna2 + "/" + String(2 * a)
                x2 = String(-1 * b) + "/" + String(2 * a) + " - " + interna2 + "/" + String(2 * a)
                
                return {
                    x1, x2
                }
            }

            else {
                x1 = (((-1 * b) + interna2) / (2 * a)).toFixed(2)
                x2 = (((-1 * b) - interna2) / (2 * a)).toFixed(2)
            }
            

            if (Number.parseInt(x1) < 1) {
                let top = ((-1 * b) + Math.sqrt((b*b) - (4 * a * c)));
                let bottom = 2 * a;

                for (let i = 2; i < 13; i++) {
                    while((top / i > 0) && ((bottom / i) > 0)) {
                        if((top % i == 0) && ((bottom % i) == 0)) {
                            top = top / i;
                            bottom = bottom / i;
                        }

                        else {
                            if(Number.parseInt(x1) < 0) {
                                x1 = "-" + String(top + "/" + bottom);
                            }

                            else {
                                x1 = String(top + "/" + bottom)
                            }

                            break;
                        }
                    }
                }  
            }

            if (Number.parseInt(x2) < 1) {
                var top = ((-1 * b) - Math.sqrt((b*b) - (4 * a * c)));
                var bottom = 2 * a;

                for (let i = 2; i < 13; i++) {
                    while((top / i > 0) && ((bottom / i) > 0)) {
                        if((top % i == 0) && ((bottom % i) == 0)) {
                            top = top / i;
                            bottom = bottom / i;
                        }

                        else {
                            if (top < 0) {
                                x2 = "-" + String(top + "/" + bottom);
                            }

                            else {
                                x2 = String(top + "/" + bottom)
                            }

                            break;
                        }
                    }
                }                
            }
            
            return { x1, x2 }
        }
    }
}