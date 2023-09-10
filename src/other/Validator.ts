import { Config } from '../main.js'

export const Validator = {
    /**
        @param {any} param
    **/
    isNumber: function(...param: Array<any>): boolean | string {
        return simpleValidate(param, 'number')
    },

    /** Return true if the number is even */
    isEven: function(number:number) {
        if(this.isNumber(number)) return number % 2 == 0

        else {
            let msg = Config().language == 'en' ? 
            "Place the number to be evalue" : "Coloca el número a evaluar"

            return "[x] isEven: " + msg
        }
    },

    /** Return true if the number is odd */
    isOdd: function(number:number): boolean | string {
        if(this.isNumber(number)) return number % 2 != 0

        else {
            let msg = Config().language == 'en' ? 
            "Place the number to be evalue" : "Coloca el número a evaluar"

            return "[x] isOdd: " + msg
        }
    },

    /**
        @param {any} param
    **/
    isBoolean: function(...param: Array<any>): boolean {
        return simpleValidate(param, 'boolean')
    },

    /**
        @param {any} param
    **/
    isString: function(...param: Array<any>): boolean {
        return simpleValidate(param, 'string')
    },

    /**
        @param {any} param
    **/
    isObject: function(param:any): boolean {
        return typeof param === 'object' && !Array.isArray(param)
    },

    /**
        @param {any} param
    **/
    isArray: function(param: any): boolean {
        return Array.isArray(param)
    },

    /**
        @description this function returns true if the item you pass is undefined
    **/
    isUndefined: function(param: any): boolean {
        return typeof param === 'undefined'
    },

    /**
        @param {object[]} object
    **/
    containsString: function(object: Array<any>): boolean | string | undefined {
        let bool;

        if(this.isArray(object)) {
            let total = object.length

            for(let i = 0; i <= total - 1; i++) {
                typeof object[i] === 'string' ? bool = true : bool = false
            }
            
        }
        
        else return "[x] containsString requires a object[]"
        
        return bool
    },

    /**
        @param {object[]} object
    **/
    containsNumber: function(object: Array<any>): boolean | string | undefined {
        let bool;

        if(this.isArray(object)) {
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
        @param { Array } object Put an array, this functions validate if this array contains objects.
        Remember that objects are differents from arrays
    **/
    containsObject: function(object: Array<any>): boolean {
        let bool: boolean = false

        if(this.isArray(object)) {
            let total = object.length

            for(let i = 0; i <= total - 1; i++) {
                typeof object[i] === 'object' && !this.isArray(object[i]) ? bool = true : bool = false
            }

            return bool
        }
        
        else throw new Error('[x] containsObject requires an Array')
    },

    /**
        @param { Array } object Put an array, this functions validate if this array contains others arrays
    **/
    containsArray: function(object: Array<any>): boolean {
        let bool: boolean = false
        
        if(this.isArray(object)) {
            let total = object.length

            for(let i = 0; i <= total - 1; i++) {
                this.isArray(object[i]) ? bool = true : bool = false
            }

            return bool
        }

        else throw new Error("[x] containsArray requires an Array")

    }
}

/**
    @param param Put an array, no matter what it has
    @param type you decide what type do you want to validate like "String", "Number", or others
**/

function simpleValidate(param: Array<any>, type:string): boolean {
    let bool = true
    
    if (Validator.containsArray(param) || Validator.containsObject(param)) {
        return false
    }
    
    else {
        for (let i = 0; i < param.length; i++) {
            typeof param[i] == type ? bool = true : bool = false
        }
    }

    return bool
}