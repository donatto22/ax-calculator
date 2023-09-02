import { Validator, Config } from "../main.js"

export const Browser = {
    /**
     * Web function
    @param {boolean} dissableMessage Displays the console message
    @return {object} An object with the most used data on the web
    **/
    getBrowserDetails: function(dissableMessage: boolean = false): object {
        dissableMessage ? null : console.log('%cThis function uses \'navigator\' to provides information', 'color: pink')

        let userAgent = navigator.userAgent.split(';')
        
        // navigator.userAgent
        let platform = userAgent[0].split('(')[1],
        vendor = navigator.vendor, languages = navigator.languages,
        mobile = navigator.userAgentData?.mobile

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
    isMobile: function(): boolean | undefined {
        return navigator.userAgentData?.mobile
    },

    /**
    * Web function
    @param {string} id the element id
    @param {string} property the property you want to get
    **/
    getComputedStyleById: function(id: string, property: string) {
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
                if(Validator.isString(id, property)) {
                    // computed stlye
                    let comp = getComputedStyle(document.getElementById(id)!).getPropertyValue(property)

                    msg = Config().language == 'en' ? 
                    `The element with id ${id} does not have the property ${property}` : 
                    `El elemento con el id ${id} no tiene la propiedad ${property}`

                    return comp.length == 0 ? `[x] getComputedStyleById: ${msg}` : comp
                }
        
                else if(Validator.isString(id) && Validator.isUndefined(property)) {
                    return getComputedStyle(document.getElementById(id)!)
                }
        
                else {
                    msg = Config().language == 'en' ? 
                    "Both parameters must be strings" : "Ambos parámetros deben ser cadenas"

                    return "[x] getComputedStyleById: " + msg
                }
            }
        }
    },

    /**
    * Web function
    @param variable The name of the css variable
    @param value The value of the css variable
    **/
    setCSSVariable: function(variable: string, value: string) {
        let msg = ""

        if(Validator.isString(variable, value)) {
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
    @param variable The name of the css variable
    **/
    getCSSVariable: function(variable: string) {
        let msg = ""

        if(Validator.isString(variable)) {
            const root = document.documentElement; // root
            let property = root.style.getPropertyValue(variable) // variable

            msg = Config().language == 'en' ? 
            "The variable does not exist" : "La variable no existe"

            return property.length == 0 ? ('[x] getCSSVariable: ' + msg) : property
        }

        else {
            msg = Config().language == 'en' ? 
            "Place a valid css variable" : "Coloca una variable css válida"
            return "[x] getCSSVariable: " + msg
        }
    },

    /**
    * Web function
    @param element The element you want to set styles
    @param style
    **/
    addCSSToElement: function(element: any, style: any) {
        for (const property in style)
            element.style[property] = style[property]
    }
}