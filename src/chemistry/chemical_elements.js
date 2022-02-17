import elements from './elements'

const chemicalElements = {
    show: function(param) {
        for (let i = 0; i < elements.length; i++) {
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
    },
    obtainByFamily: function(type) {
        let result = [];
        
        if (typeof type == "string") {
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

export default chemicalElements