export const Validator = {
    isNumber: function(parameter) {
        return typeof parameter === 'number' ? true : false
    },

    // si un número es par
    isEven: function(number) {
        if(this.isNumber(number))
        return number % 2 == 0 ? true : false

        else return "[x] isEven requires number"
    },

    // si un número es impar
    isOdd: function(number) {
        if(this.isNumber(number))
        return number % 2 != 0 ? true : false

        else return "[x] isEven requires number"
    },

    isString: function(parameter) {
        return typeof parameter === 'string' ? true : false
    },

    isObject: function(parameter) {
        return typeof parameter === 'object' ? true : false
    },

    isUndefined: function(parameter) {
        return typeof parameter === 'undefined' ? true : false
    },

    containsString: function(object) {
        let bool;

        if(this.isObject(object)) {
            let total = object.length

            for(let i = 0; i <= total - 1; i++) {
                typeof object[i] === 'string' ? bool = true : bool = false
            }

        }
        return bool
    },

    containsNumber: function(object) {
        let bool;

        if(this.isObject(object)) {
            let total = object.length

            for(let i = 0; i <= total - 1; i++) {
                typeof object[i] === 'number' ? bool = true : bool = false
            }

        }
        return bool
    }
}