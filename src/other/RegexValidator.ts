export const RegexValidator = {
    /**
     * @param capitalize If true, you allos capital letters
     * @returns The regex pattern that allows only letters
     */
    onlyLetters: function (object: {
        capitalize: boolean
    }) {
        return object?.capitalize ? /^[a-zA-Z]+$/ : /^[a-z]+$/
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

    // /**
    //  * 
    //  * @param minvalue 
    //  * @returns The regex pattern
    //  */
    // length: function (object: {
    //     minvalue: Number, maxvalue: Number
    // }) {
    //     // `/^.{${object?.minvalue}, ${object?.maxvalue}}`
    //     return /^.{1, 20}$/
    // }
}
