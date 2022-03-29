import { Validator, Config } from '../main.js'
import { elements }  from './elements.js'

export const ChemicalElements = {
    show: function(param) {
        for (let i = 0; i < elements.length; i++) {
            if(Validator.isString(param)) {
                if(elements[i].simbol == param) {
                    return elements[i]
                }
    
                if(elements[i].name == param) {
                    return elements[i]
                }
            }

            else if(Validator.isNumber(param)) {
                if(elements[i].atomic_number == param) {
                    return elements[i]
                }
            }

            else if(Validator.isUndefined(param)) {
                return elements
            }
            
            else {
                let msg = Config().language == 'en' ? 
                "Place the atomic number, the element symbol or do not place parameters" : 
                "Coloca el número atómico, el simbolo del elemento o sin parámetros"

                return "[x] ChemicalElements.show: " + msg
            }
        }
    },

    obtainByFamily: function(type) {
        let result = [];
        
        if (Validator.isString(type)) {
            for(var i = 0; i < elements.length; i++) {
                if(elements[i].type == type) {
                    result.push(elements[i]);
                }
            }   
        }

        else {
            return "You must place a string"
        }

        return result;
    },
    
    obtainByGroup: function(group) {
        let result = [];

        if (typeof group == "string") {
            for(var i = 0; i < elements.length; i++) {
                if(elements[i].group == group) {
                    result.push(elements[i]);
                }
            }
        }

        else {
            return "You must place a string" 
        }

        return result;
    }
}