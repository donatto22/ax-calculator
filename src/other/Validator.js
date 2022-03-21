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
    @param {any} parameter
    **/
    isOdd: function(number) {
        if(this.isNumber(number))
        return number % 2 != 0 ? true : false

        else return "[x] isEven requires number"
    },

    /**
    @param {any} parameter
    **/
    isBool: function(parameter) {
        return typeof parameter == "boolean" ? true : false
    },

    /**
    @param {any} parameter
    **/
    isString: function(parameter) {
        return typeof parameter === 'string' ? true : false
    },

    /**
    @param {any} parameter
    **/
    isObject: function(parameter) {
        return typeof parameter === 'object' ? true : false
    },

    /**
    @param {any} param
    **/
    isUndefined: (param) => {
        return typeof param === 'undefined' ? true : false
    },

    isArray: (param) => {
        return Array.isArray(param)
    },

    /**
    @param {object} object
    **/
    containsString: function(object) {
        let bool;

        if(this.isObject(object)) {
            let total = object.length

            for(let i = 0; i <= total - 1; i++) {
                typeof object[i] === 'string' ? bool = true : bool = false
            }

        }

        else {
            return "[x] containsString requires a object"
        }

        return bool
    },

    /**
    @param {object} object
    **/
    containsNumber: function(object) {
        let bool;

        if(this.isObject(object)) {
            let total = object.length

            for(let i = 0; i <= total - 1; i++) {
                typeof object[i] === 'number' ? bool = true : bool = false
            }

        }

        else {
            return "[x] containsNumber requires a object"
        }

        return bool
    },

    /**
    @param {object} object
    **/
    containsObject: function(object) {
        let bool;

        if(this.isObject(object)) {
            let total = object.length

            for(let i = 0; i <= total - 1; i++) {
                typeof object[i] === 'object' ? bool = true : bool = false
            }

        }

        else {
            return "[x] containsObject requires a object"
        }

        return bool
    }
}