import { RegexValidator } from '../dist/main.js' 

const test = RegexValidator.onlyLetters({
    length: {
        minvalue: 0,
        maxvalue: 3
    }
}).test('axxc')

console.log(test)