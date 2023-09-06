export const RegexValidator = {
    /**
     * @param capitalize If true, you allos capital letters
     * @param length You can put the min value and max value for the length
     * @returns The regex pattern that allows only letters
     */
    onlyLetters: function (object: {
        capitalize: boolean,
        length: {
            minvalue: Number,
            maxvalue: Number
        }
    }) {
        if(object.length !== undefined) {
            return object.capitalize ? 
            new RegExp(`^[a-zA-Z]{${object.length.minvalue},${object.length.maxvalue}}$`) : 
            new RegExp(`^[a-z]{${object.length.minvalue},${object.length.maxvalue}}$`)
        } else return object.capitalize ? /^[a-zA-Z]+$/ : /^[a-z]+$/
    },

    /**
     * @returns The regex pattern that allows only numbers
     */
    onlyNumbers: function () {
        return /^\d+$/
    },

    /**
     * @param capitalize If true, you allos capital letters
     * @returns The regex pattern that allows letters and numbers
     */
    onlyLettersAndNumbers: function (object: {
        capitalize: boolean
    }) {
        return object?.capitalize ? /[a-zA-Z0-9]+$/ : /[a-z0-9]+$/
    },

    /**
     * @param minvalue the min length
     * @param maxvalue the max length
     * @returns The regex pattern
     */
    length: function (object: {
        minvalue: Number, maxvalue: Number 
    }) {
        return new RegExp(`^.{${object.minvalue},${object.maxvalue}}$`)
    },

    /**
     * 
     * @param lengths You can put more than one length
     * @returns The regex pattern
     */

    implicitLength: function (...lengths: Array<Number>) {
        // si tiene solo un elemento
        if (lengths.length === 1) {
            return new RegExp(`^.{${lengths[0]}}$`)
        } 
        
        // en caso haya más
        else {
            let conditionals = ''

            // se obtiene el ultimo elemento
            let ultimoElemento = `.{${lengths[lengths.length - 1]}}`

            // y se elimina el último del array
            lengths.pop()

            // se agregan cada uno de los elementos
            lengths.forEach(element => {
                conditionals += `.{${element}}|`
            });

            // agregamos manualmente el ultimo
            conditionals += ultimoElemento
            
            // console.log(conditionals);
            return new RegExp(`^(${conditionals})$`)
        }
    },

    /**
     * 
     * @param text The string you want coincidence
     * @returns The regex pattern
     * @example RegexValidator.coicidence('abc').test('Hello abc') // true
     */
    coindicence: function (text: string) {
        return new RegExp(`/${text}/`)
    }
}
