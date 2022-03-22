import { Validator, Config } from "../main.js"

export const Percentage = {
    /**
        Example: What percentaje is 12 out of 30?
        @description Calculates the percentage of the total according to the value you give it
        @param {number} number 12
        @param {number} total 30
    **/
    whatPercentageIs: function(number, total) {
        if(!Validator.isNumber(number) || !Validator.isNumber(total)) {
            let msg = Config().language == 'en' ? "Only numbers" : "Coloca solo números"
            return "[x] whatPercentageIs: " + msg
        }

        else {
            let result = (number * 100) / total;
            return String(result.toFixed(2)) + "%";
        }
    },
    /**    
        Example: How much is 7% of 39?
        @description Calculates the percentage of a number or quantity.
        @param {number} percentage 7%
        @param {number} total 39
    **/
    percentageOf: function(percentage, total) {
        if(!Validator.isNumber(percentage) || !Validator.isNumber(total)) {
            let msg = Config().language == 'en' ? "Only numbers" : "Coloca solo números"
            return "[x] percentageOf: " + msg
        }

        else {
            var result = (percentage * total) / 100;
            return result
        }
    },
    /**
        Example: If 30% is 10, then 60% is...
        @description Calculates a percentage from another percentage.
        @param {number} percentage1 30%
        @param {number} value1 10
        @param {number} percentage2 60
    **/
    percentFromPercent: function(percentage1, value1, percentage2) {
        if(Validator.isNumber(percentage1) && Validator.isNumber(value1) && Validator.isNumber(percentage2)) {
            let result = (value1 * percentage2) / percentage1;
    
            if (Number.isInteger(result)) {
                return String(result);
            }
            
            else {
                return String(result.toFixed(2));
            }
        }

        else {
            let msg = Config().language == 'en' ? "Only numbers" : "Coloca solo números"
            return "[x] percentFromPercent :" + msg
        }
    },
    /**
        Example: If 10% is 20, the total is...
        @description Calculate the total from a percentage
        @param {number} percentage 10%
        @param {number} value 20
    **/
    totalFromPercent: function(percentage, value) {
        let result = (value * 100) / percentage;

        if(Number.isInteger(result)) {
            return String(result);
        }

        else {
            return String(result.toFixed(2));
        }
    }
}