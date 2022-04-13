import { Validator, Config } from "../main.js"

export const Percentage = {
    /**
        Example: What percentaje is 12 out of 30?
        @description Calculates the percentage of the total according to the value you give it
        @param number 12
        @param total 30
    **/
    whatPercentageIs: function(number: number, total: number): string {
        if(!Validator.isNumber(number, total)) {
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
        @param percentage 7%
        @param total 39
    **/
    percentageOf: function(percentage: number, total: number): string | number {
        if(!Validator.isNumber(percentage, total)) {
            let msg = Config().language == 'en' ? "Only numbers" : "Coloca solo números"
            return "[x] percentageOf: " + msg
        }

        else {
            let result = (percentage * total) / 100;
            return result
        }
    },
    /**
        Example: If 30% is 10, then 60% is...
        @description Calculates a percentage from another percentage.
        @param percentage1 30%
        @param value1 10
        @param percentage2 60
    **/
    percentFromPercent: function(percentage1: number, value1: number, percentage2: number): string | number {
        if(Validator.isNumber(percentage1, value1, percentage2)) {
            let result = (value1 * percentage2) / percentage1;
    
            if (Number.isInteger(result)) 
                return result
            
            else 
                return result.toFixed(2)
        }

        else {
            let msg = Config().language == 'en' ? "Only numbers" : "Coloca solo números"
            return "[x] percentFromPercent :" + msg
        }
    },
    /**
        Example: If 10% is 20, the total is...
        @description Calculate the total from a percentage
        @param percentage 10%
        @param value 20
    **/
    totalFromPercent: function(percentage: number, value: number): string | number {
        if(Validator.isNumber(percentage, value)) {
            let result = (value * 100) / percentage;
    
            if(Number.isInteger(result)) 
                return result
    
            else 
                return result.toFixed(2)
        }

        else {
            let msg = Config().language == 'en' ? "Place numbers" : "Coloca solo números"
            return "[x] totalFromPercent: " + msg
        }
    }
}