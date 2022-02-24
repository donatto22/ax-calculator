import * as calculator from "../src/main.js";

const chaining = new calculator.BasicOperations.Chaining()

console.log(chaining.baseNumber(5).multiply(4).divide(2));