import { RegexValidator } from '../dist/main.js' 

const prueba = RegexValidator.onlyLetters(Animation.apply(1, 2))

console.log(prueba.test('abc '))