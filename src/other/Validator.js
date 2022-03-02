export const Validator = {
    /**
    @param {number} parameter
    **/
    isNumber: function(parameter) {
        return typeof parameter === 'number' ? true : false
    },

    // si un número es par
    /**
    @param {number} parameter
    **/
    isEven: function(number) {
        if(this.isNumber(number))
        return number % 2 == 0 ? true : false

        else return "[x] isEven requires number"
    },

    // si un número es impar
    /**
    @param {number} parameter
    **/
    isOdd: function(number) {
        if(this.isNumber(number))
        return number % 2 != 0 ? true : false

        else return "[x] isEven requires number"
    },

    /**
    @param {string} parameter
    **/
    isString: function(parameter) {
        return typeof parameter === 'string' ? true : false
    },

    /**
    @param {object} parameter
    **/
    isObject: function(parameter) {
        return typeof parameter === 'object' ? true : false
    },

    /**
    @param {any} parameter
    **/
    isUndefined: function(parameter) {
        return typeof parameter === 'undefined' ? true : false
    },

    /**
    @param {object} parameter
    **/
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

    /**
    @param {object} parameter
    **/
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