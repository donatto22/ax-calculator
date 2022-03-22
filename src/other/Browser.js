import { Validator, Config } from "../main.js"

export const Browser = {
    /**
     * Web function
    @param {boolean} dissableMessage Displays the console message
    @return {object} An object with the most used data on the web
    **/
    getBrowserDetails: function(dissableMessage = false) {
        dissableMessage ? null : console.log('%cThis function uses \'navigator\' to provides information', 'color: pink')

        let userAgent = navigator.userAgent.split(';')
        
        // navigator.userAgent
        let platform = userAgent[0].split('(')[1],
        vendor = navigator.vendor, languages = navigator.languages,
        mobile = navigator.userAgentData.mobile

        // screen
        let resolution = {
            width : screen.width,
            height : screen.height
        }

        let orientation = screen.orientation.type
        let webZoomLevel = Math.round(window.devicePixelRatio * 100)

        // return
        return {
            platform, vendor, 
            languages, resolution, orientation,
            webZoomLevel, mobile
        }
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
    @param {string} property the property you want to get
    **/
    getComputedStyleById: function(id, property) {
        let msg = ''
        
        if(Validator.isUndefined(id)) {
            msg = Config().language == 'en' ? 
            "Place the id of the element" : "Coloca el id del elemento"

            return "[x] getComputedStyleById: " + msg
        }

        else {
            if(document.getElementById(id) == null) {
                msg = Config().language == 'en' ? 
                "The id does not exist" : "El id no existe"

                return "[x] getComputedStyleById: " + msg
            }
    
            else {
                if(Validator.isString(id) && Validator.isString(property)) {
                    let comp = getComputedStyle(document.getElementById(id)).getPropertyValue(property)
                    return comp.length == 0 ? `[x] getComputedStyleById: The element with id ${id} does not have the property ${property}` : comp
                }
        
                else if(Validator.isString(id) && Validator.isUndefined(property)) {
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
        let msg = ""

        if(Validator.isString(variable) && Validator.isString(value)) {
            const root = document.documentElement;
            
            if(root.style.getPropertyValue(variable) != '') {
                msg = Config().language == 'en' ? 
                "The variable already exists" : "La varible ya existe"
                
                console.warn('[x] setCSSVariable: ' + msg)
            }
            
            else {
                root.style.setProperty(variable, value)
            }
        }

        else {
            msg = Config().language == 'en' ? 
            "Variable and value must be strings" : 
            "La variable y su valor deben ser cadenas de texto"

            console.error('[x] setCSSVariable: ' + msg)
        }
    },

    /**
    * Web function
    @param {string} variable The name of the css variable
    **/
    getCSSVariable: function(variable) {
        let msg = ""

        if(Validator.isString(variable)) {
            const root = document.documentElement;

            let property = root.style.getPropertyValue(variable)
            return property.length == 0 ? '[x] getCSSVariable: The variable does not exist' : property
        }

        else {
            msg = Config().language == 'en' ? 
            "Place a valid css variable" : "Coloca una variable css válida"
            return "[x] getCSSVariable: " + msg
        }
    }
}