const ruleThree = {
    /**
        @param {string} type Can be direct or inverse
    **/
    simple: function(type, a, b, c, d) {
        if(type == 'direct') {
            if(a === undefined) {
                var top = b * c;
                var bottom = d;

                a = top / bottom;

                var bober = top < 0 ? true : false
    
                if(!Number.isInteger(a)) {
                    if(bober == true) {
                        top = top * -1
                    }

                    for(let i = 2; i < 13; i++) {
                        while((top / i > 0) && ((bottom / i) > 0)) {
                            if((top % i == 0) && ((bottom % i) == 0)) {
                                top = top / i;
                                bottom = bottom / i;
                            }

                            else {
                                if(bober) {
                                    a = `-${top}/${bottom}`;
                                }
                                
                                else {
                                    a = `${top}/${bottom}`;
                                }

                                break; 
                            }
                        }
                    }
                }
                
                return a;
            }
    
            else if(b === undefined) {
                var top = a * d;
                var bottom = c;

                b = top / bottom;

                var bober = top < 0 ? true : false
                
                if(!Number.isInteger(b)) {
                    if(bober == true) {
                        top = top * -1
                    }

                    for(let i = 2; i < 13; i++) {
                        while((top / i > 0) && ((bottom / i) > 0)) {
                            if((top % i == 0) && ((bottom % i) == 0)) {
                                top = top / i;
                                bottom = bottom / i;
                            }

                            else {
                                if(bober) {
                                    b = `-${top}/${bottom}`;
                                }
                                
                                else {
                                    b = `${top}/${bottom}`;
                                }

                                break; 
                            }
                        }
                    }
                }

                return b;
            }
            
            else if(c === undefined) {
                var top = d * a;
                var bottom = b;

                c = top / bottom;

                var bober = top < 0 ? true : false
    
                if(!Number.isInteger(b)) {
                    if(bober == true) {
                        top = top * -1
                    }

                    for(let i = 2; i < 13; i++) {
                        while((top / i > 0) && ((bottom / i) > 0)) {
                            if((top % i == 0) && ((bottom % i) == 0)) {
                                top = top / i;
                                bottom = bottom / i;
                            }

                            else {
                                if(bober) {
                                    c = `-${top}/${bottom}`;
                                }
                                
                                else {
                                    c = `${top}/${bottom}`;
                                }

                                break; 
                            }
                        }
                    }
                }

                return c;
            }
    
            else {
                var top = b * c;
                var bottom = a;

                d = top / bottom;

                var bober = top < 0 ? true : false

                if(!Number.isInteger(b)) {
                    if(bober == true) {
                        top = top * -1
                    }

                    for(let i = 2; i < 13; i++) {
                        while((top / i > 0) && ((bottom / i) > 0)) {
                            if((top % i == 0) && ((bottom % i) == 0)) {
                                top = top / i;
                                bottom = bottom / i;
                            }

                            else {
                                if(bober) {
                                    d = `-${top}/${bottom}`;
                                }
                                
                                else {
                                    d = `${top}/${bottom}`;
                                }

                                break; 
                            }
                        }
                    }
                }

                return d;
            }
        }

        else if (type == 'inverse') {
            if(a === undefined) {
                var top = b * d;
                var bottom = c;

                a = top / bottom;

                var bober = top < 0 ? true : false

                if(!Number.isInteger(a)) {
                    if(bober == true) {
                        top = top * -1
                    }

                    for(let i = 2; i < 13; i++) {
                        while((top / i > 0) && ((bottom / i) > 0)) {
                            if((top % i == 0) && ((bottom % i) == 0)) {
                                top = top / i;
                                bottom = bottom / i;
                            }

                            else {
                                if(bober) {
                                    a = `-${top}/${bottom}`;
                                }
                                
                                else {
                                    a = `${top}/${bottom}`;
                                }

                                break; 
                            }
                        }
                    }

                    return a;
                }
            }

            else if(b === undefined) {
                var top = a * c;
                var bottom = d;

                b = top / bottom;

                var bober = top < 0 ? true : false

                if(!Number.isInteger(b)) {
                    if(bober == true) {
                        top = top * -1
                    }

                    for(let i = 2; i < 13; i++) {
                        while((top / i > 0) && ((bottom / i) > 0)) {
                            if((top % i == 0) && ((bottom % i) == 0)) {
                                top = top / i;
                                bottom = bottom / i;
                            }

                            else {
                                if(bober) {
                                    b = `-${top}/${bottom}`;
                                }
                                
                                else {
                                    b = `${top}/${bottom}`;
                                }

                                break; 
                            }
                        }
                    }
                }

                return b;
            }

            else if(c === undefined) {
                var top = b * d;
                var bottom = a;

                c = top / bottom;

                var bober = top < 0 ? true : false

                if(!Number.isInteger(c)) {
                    if(bober == true) {
                        top = top * -1
                    }

                    for(let i = 2; i < 13; i++) {
                        while((top / i > 0) && ((bottom / i) > 0)) {
                            if((top % i == 0) && ((bottom % i) == 0)) {
                                top = top / i;
                                bottom = bottom / i;
                            }

                            else {
                                if(bober) {
                                    c = `-${top}/${bottom}`;
                                }
                                
                                else {
                                    c = `${top}/${bottom}`;
                                }

                                break;
                            }
                        }
                    }
                }

                return c;
            }

            else {
                var top = a * c;
                var bottom = b;

                d = top / bottom;

                var bober = top < 0 ? true : false

                if(!Number.isInteger(d)) {
                    if(bober == true) {
                        top = top * -1
                    }

                    for(let i = 2; i < 13; i++) {
                        while((top / i > 0) && ((bottom / i) > 0)) {
                            if((top % i == 0) && ((bottom % i) == 0)) {
                                top = top / i;
                                bottom = bottom / i;
                            }
                            
                            else {
                                if(bober) {
                                    d = `-${top}/${bottom}`;
                                }
                                
                                else {
                                    d = `${top}/${bottom}`;
                                }
                                break;
                            }
                        }
                    }
                }

                return d;
            }
        }

        else { return "You must write 'direct' or 'inverse', there are no other ways." }
    }
}

export default ruleThree