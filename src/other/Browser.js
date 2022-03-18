import { Validator } from "./Validator.js"

export const Browser = {
    /**
     * Web function
    Return the operating system
    @return {string} Windows, Linux, Android ...
    **/
    getOS: function() {
        return navigator.userAgentData.platform
    },

    /**
    * Web function
    @return {boolean} true | false
    **/

    isMobile: function() {
        return navigator.userAgentData.mobile
    },

    /**
    * Web function
    @param {string} id the element id
    @param {string} property
    **/

    getComputedStyleById: function(id, property) {
        if(Validator.isUndefined(id)) {
            return "[x] getComputedStyleById: Place an Id"
        }

        else {
            if(document.getElementById(id) == null) {
                return "[x] getComputedStyleById: The id does not exist"
            }
    
            else {
                if(Validator.isString(id) && Validator.isString(property)) {
                    let comp = getComputedStyle(document.getElementById(id)).getPropertyValue(property)
                    return comp.length == 0 ? `[x] getComputedStyleById: The element with id ${id} does not have the property ${property}` : comp
                }
        
                else if(Validator.isString(id) && Validator.isUndefined(property)) {
                    console.log('hola2')
                    return getComputedStyle(document.getElementById(id))
                }
        
                else {
                    return "[x] getComputedStyleById: Both parameters must be strings"
                }
            }
        }
    },

    /**
    * Web function
    @param {string} variable The name of the css variable
    @param {string} value The value of the css variable
    **/

    setCSSVariable: function(variable, value) {
        if(Validator.isString(variable) && Validator.isString(value)) {
            const root = document.documentElement;
            
            if(root.style.getPropertyValue(variable) != '') {
                console.warn('[x] setCSSVariable: The variable already exists')
            }
            
            else {
                root.style.setProperty(variable, value)
            }
        }

        else {
            console.error('[x] setCSSVariable: Variable and value must be strings')
        }
    },

    /**
    * Web function
    @param {string} variable The name of the css variable
    **/

    getCSSVariable: function(variable) {
        if(Validator.isString(variable)) {
            const root = document.documentElement;

            let property = root.style.getPropertyValue(variable)
            return property.length == 0 ? '[x] getCSSVariable: The variable does not exist' : property
        }
    }
}