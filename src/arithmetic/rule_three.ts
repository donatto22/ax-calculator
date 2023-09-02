export const RuleOfThree = {
    /**
        @param type Can be direct or inverse
    **/
    simple: function(type: string, a: number, b: number, c: number, d: number): number | string | undefined {
        if(type == 'direct') {
            if(a === undefined) {
                let top = b * c, bottom = d
                let bober = top < 0 ? true : false

                let a2: string | number = top / bottom;
    
                if(!Number.isInteger(a2)) {
                    if(bober == true)
                        top = top * -1

                    for(let i = 2; i < 13; i++) {
                        while((top / i > 0) && ((bottom / i) > 0)) {
                            if((top % i == 0) && ((bottom % i) == 0)) {
                                top = top / i;
                                bottom = bottom / i;
                            }

                            else {
                                if(bober)
                                    a2 = `-${top}/${bottom}`
                                
                                else 
                                    a2 = `${top}/${bottom}`

                                break
                            }
                        }
                    }
                }
                
                return a2;
            }
    
            else if(b === undefined) {
                let top = a * d, bottom = c
                let bober = top < 0 ? true : false

                let b2: string | number = top / bottom;
                
                if(!Number.isInteger(b2)) {
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
                                    b2 = `-${top}/${bottom}`;
                                }
                                
                                else {
                                    b2 = `${top}/${bottom}`;
                                }

                                break; 
                            }
                        }
                    }
                }

                return b2
            }
            
            else if(c === undefined) {
                let top = d * a, bottom = b 
                var bober = top < 0 ? true : false

                let c2: string | number = top / bottom
    
                if(!Number.isInteger(c2)) {
                    if(bober == true) 
                        top = top * -1

                    for(let i = 2; i < 13; i++) {
                        while((top / i > 0) && ((bottom / i) > 0)) {
                            if((top % i == 0) && ((bottom % i) == 0)) {
                                top = top / i;
                                bottom = bottom / i;
                            }

                            else {
                                if(bober) 
                                    c2 = `-${top}/${bottom}`
                                
                                else
                                    c2 = `${top}/${bottom}`

                                break;
                            }
                        }
                    }
                }

                return c2
            }
    
            else {
                let top = b * c, bottom = a
                let bober = top < 0 ? true : false

                let d2: string | number = top / bottom

                if(!Number.isInteger(d2)) {
                    if(bober == true) 
                        top = top * -1

                    for(let i = 2; i < 13; i++) {
                        while((top / i > 0) && ((bottom / i) > 0)) {
                            if((top % i == 0) && ((bottom % i) == 0)) {
                                top = top / i;
                                bottom = bottom / i;
                            }

                            else {
                                if(bober) 
                                    d2 = `-${top}/${bottom}`
                                
                                else 
                                    d2 = `${top}/${bottom}`

                                break;
                            }
                        }
                    }
                }

                return d2
            }
        }

        else if (type == 'inverse') {
            if(a === undefined) {
                let top = b * d, bottom = c
                let bober = top < 0 ? true : false

                let a2: string | number = top / bottom

                if(!Number.isInteger(a2)) {
                    if(bober == true) 
                        top = top * -1

                    for(let i = 2; i < 13; i++) {
                        while((top / i > 0) && ((bottom / i) > 0)) {
                            if((top % i == 0) && ((bottom % i) == 0)) {
                                top = top / i;
                                bottom = bottom / i;
                            }

                            else {
                                if(bober) 
                                    a2 = `-${top}/${bottom}`
                                
                                else 
                                    a2 = `${top}/${bottom}`

                                break
                            }
                        }
                    }

                    return a2
                }
            }

            else if(b === undefined) {
                let top = a * c, bottom = d
                let bober = top < 0 ? true : false

                let b2: string | number = top / bottom;

                if(!Number.isInteger(b2)) {
                    if(bober == true) 
                        top = top * -1

                    for(let i = 2; i < 13; i++) {
                        while((top / i > 0) && ((bottom / i) > 0)) {
                            if((top % i == 0) && ((bottom % i) == 0)) {
                                top = top / i;
                                bottom = bottom / i;
                            }

                            else {
                                if(bober) 
                                    b2 = `-${top}/${bottom}`
                                
                                else 
                                    b2 = `${top}/${bottom}`

                                break
                            }
                        }
                    }
                }

                return b2
            }

            else if(c === undefined) {
                let top = b * d, bottom = a
                let bober = top < 0 ? true : false

                let c2: string | number = top / bottom

                if(!Number.isInteger(c2)) {
                    if(bober == true)
                        top = top * -1

                    for(let i = 2; i < 13; i++) {
                        while((top / i > 0) && ((bottom / i) > 0)) {
                            if((top % i == 0) && ((bottom % i) == 0)) {
                                top = top / i;
                                bottom = bottom / i;
                            }

                            else {
                                if(bober) 
                                    c2 = `-${top}/${bottom}`
                                
                                else 
                                    c2 = `${top}/${bottom}`

                                break
                            }
                        }
                    }
                }

                return c2
            }

            else {
                let top = a * c, bottom = b
                let bober = top < 0 ? true : false

                let d2: string | number = top / bottom

                if(!Number.isInteger(d2)) {
                    if(bober == true) 
                        top = top * -1

                    for(let i = 2; i < 13; i++) {
                        while((top / i > 0) && ((bottom / i) > 0)) {
                            if((top % i == 0) && ((bottom % i) == 0)) {
                                top = top / i;
                                bottom = bottom / i;
                            }
                            
                            else {
                                if(bober) 
                                    d2= `-${top}/${bottom}`
                                
                                else 
                                    d2 = `${top}/${bottom}`

                                break
                            }
                        }
                    }
                }

                return d2
            }
        }

        else { return "You must write 'direct' or 'inverse', there are no other ways." }
    }
}