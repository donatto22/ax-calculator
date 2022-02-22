export class base {

    /**
        @param number The number in base 10
        @param base The base to which you want to pass the number
    **/

    static toBase(number, base) {
        if(typeof(number) == 'string' || typeof(base) == 'string') {
            return "This method does not accept strings";
        }

        else {
            return number.toString(base)
        }
    }

    /**
        @param number The binary number you need in base 10
    **/

    static binaryToBase10(number) {        
        if(!isNaN(number)) {
            var binary = number.toString().replace(/[^01]/gi, '')
            return Number.parseInt(binary, 2).toString()
        }

        else {
            return "You must place a binary number";
        }

    }
}