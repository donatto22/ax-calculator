export const Validator = {
    /**
    @param {number} parameter
    **/
    isNumber: function(param) {
        return typeof param === 'number'
    },

    // si un número es par
    /**
    @param {number} number
    **/
    isEven: function(number) {
        if(this.isNumber(number))
        return number % 2 == 0

        else return "[x] isEven requires number"
    },

    // si un número es impar
    /**
    @param {number} number
    **/
    isOdd: function(number) {
        if(this.isNumber(number))
        return number % 2 != 0

        else return "[x] isEven requires number"
    },

    /**
    @param {any} param
    **/
    isBoolean: function(param) {
        return typeof param == "boolean"
    },

    /**
    @param {any} param
    **/
    isString: function(param) {
        return typeof param === 'string'
    },

    /**
    @param {any} param
    **/
    isObject: function(param) {
        return typeof param === 'object'
    },

    /**
    @param {any} param
    **/
    isArray: function(param) {
        return Array.isArray(param)
    },

    /**
    @param {any} param
    **/
    isUndefined: function(param) {
        return typeof param === 'undefined'
    },

    /**
    @param {object[]} object
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
            return "[x] containsString requires a object[]"
        }

        return bool
    },

    /**
    @param {object[]} object
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
            return "[x] containsNumber requires a object[]"
        }

        return bool
    },

    /**
    @param {object[]} object
    **/
    containsObject: function(object) {
        let bool;

        if(this.isObject(object)) {
            let total = object.length

            for(let i = 0; i <= total - 1; i++) {
                typeof object[i] === 'object' && !this.isArray(object[i]) ? bool = true : bool = false
            }
        }

        else {
            return "[x] containsObject requires a object[]"
        }

        return bool
    },

    /**
    @param {object[]} object
    **/
    containsArray: function(object) {

    }
}