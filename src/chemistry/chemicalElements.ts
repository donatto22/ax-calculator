import { Validator, Config } from '../main.js'
import { elements }  from './elements.js'

export const ChemicalElements = {
    show: function(param: string | number ): object | string | undefined {
        for (let i = 0; i < elements.length; i++) {
            if(Validator.isString(param)) {
                if(elements[i]?.simbol == param)
                    return elements[i]
    
                if(elements[i]?.name == param) 
                    return elements[i]
            }

            else if(Validator.isNumber(param)) {
                if(elements[i]?.atomic_number == param)
                    return elements[i]
            }

            else if(Validator.isUndefined(param))
                return elements
            
            else {
                let msg = Config().language == 'en' ? 
                "Place the atomic number, the element symbol or do not place parameters" : 
                "Coloca el número atómico, el simbolo del elemento o no parámetros"

                return "[x] ChemicalElements.show: " + msg
            }
        }
    },

    obtainByFamily: function(type: string): object | string {
        let result = [];
        
        if (Validator.isString(type)) {
            for(var i = 0; i < elements.length; i++) {
                if(elements[i]?.type == type)
                    result.push(elements[i]);
            }   
        }

        else {
            let msg = Config().language == 'en' ? 
            "You must place a string" : "Debes colocar una cadena"
            return "[x] obtainByFamily: " + msg
        }

        return result;
    },
    
    obtainByGroup: function(group: string): object | string {
        let result = [];

        if (Validator.isString(group)) {
            for(var i = 0; i < elements.length; i++) {
                if(elements[i]?.group == group)
                    result.push(elements[i]);
            }
        }

        else {
            let msg = Config().language == 'en' ? 
            "You must place a string" : "Debes colocar una cadena"
            return "[x] obtainByGroup: " + msg
        }

        return result;
    }
}