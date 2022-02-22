import { elements } from "./elements.js";

export class chemical_elements {

    /**
    @return {object}
    **/
    static show(param) {
        for(var i = 0; i < elements.length; i++) {
            if(typeof param === "string") {
                if(elements[i].simbol == param) {
                    return elements[i]
                }
    
                if(elements[i].name == param) {
                    return elements[i]
                }
            }

            else if(typeof param === "number") {
                if(elements[i].atomic_number == param) {
                    return elements[i]
                }
            }

            else if(typeof param != 'undefined') {
                return "Place the atomic number, the element symbol or do not place parameters"
            }

            else {
                return elements
            }
        }
    }

    /**
    @return {object}
    **/
    static obtainByFamily(type) {
        var result = [];
        
        if(typeof type == "string") {
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
    }

    /**
    @return {object}
    **/
    static obtainByGroup(group) {
        var result = [];

        if(typeof group == "string") {
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