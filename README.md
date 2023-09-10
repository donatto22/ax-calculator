<p align="center">
  <img width="150px" src="https://user-images.githubusercontent.com/68967448/158041774-b2ba586a-b1a2-41b3-a30f-9eff177ae8c0.png" alt="logo">
</p>

<h1 align="center">4x-Calculator</h1>
<p align="center">This is a quick mathematical calculator</p>

<p align="center">
  <a href="https://www.npmjs.com/package/ax-calculator"><img src="https://img.shields.io/npm/v/ax-calculator?style=flat-square" alt="version">
  <a href="https://www.npmjs.com/package/ax-calculator"><img src="https://img.shields.io/npm/dt/ax-calculator?style=flat-square" alt="downloads"></a>
</p>

## Last added feature
### RegexValidator
```js
RegexValidator.onlyLetters({ capitalize: true }).test('abcABC') // true

const example = RegexValidator.onlyLetters({
  length: {
    minvalue: 3,
    maxvalue: 10,
  }
})

console.log(example.test('ab')) // false
console.log(example.test('abc123')) // true

// in this examle, words with 2 and 4 letters are allowed
// you can put other and more values if you need
RegexValidator.implicitLength(2, 4).test('ab') // true
RegexValidator.implicitLength(2, 4).test('abc123') // false, don't have 2 or 4 characters

// text that contains something
RegexValidator.coincidence('abc').test('ab1') // false
RegexValidator.coincidence('abc').test('hello abc') // true
```

### Instalation

npm
```
npm i ax-calculator
```

yarn
```
yarn add ax-calculator
```

- Import / Require

```js
//esm
import * as ax from 'ax-calculator'
import { ... } from 'ax-calculator

//cjs
const ax = require('ax-calculator')
const { ... } = require('ax-calculator')
```

## Objects and their operations
> Please be [informed](https://github.com/donatto-minaya/npm-ax-calculator/releases) of every change that is made to this calculator, many more operations are being added that can help you and an example of use is given.
### Basic Operations
- Sum, substract, product, division, module, root, raise to, Chaining _`class`_
```js
BasicOperations.sum(2, 5, 8, 4, 11) // { result: 30, toNegative: [Function: toNegative] }
BasicOperations.substract(304, 20, 51) // { result: 233, toNegative: [Function: toNegative] }
BasicOperations.product(35, 1, 9) // { result: 315, toNegative: [Function: toNegative] }
BasicOperations.division(25, 5) // 5.00
BasicOperations.module(40, 4) // 0
BasicOperations.root(1296, 4) // 6
BasicOperations.raiseTo(3, 5) // 243

const chaining = new BasicOperations.Chaining()

console.log(chaining.baseNumber(5).multiply(4).divide(2).value); // 10
```

### Base
- binary to base 10, to base
```js
Base.toBase(20, 4) // -> 110
Base.binaryToBase10(1001) // -> 9
```

### Fractions
- Sum, substract, product, division, simplify, destructure
```js
Fractions.sum(1,2,-4,6) // 1/2 + (-4/6) -> -1/6
Fractions.substract(-5,2,4,7) // -5/2 - 4/7 -> -43/14
Fractions.product(10,2,-5,4) // 10/2 * (-5/4) -> -25/4
Fractions.division(5,3,7,2) // (5/3)/(7/2) ->10/21
Fractions.simplify(154, 6) // 77/3
Fractions.destructure("12/5") // { top: '12', bottom: '5' }
```

### Equations
- Secoond degree
```js
// 2x² - 3x + 3 = 0
Equations.secondDegree(2, -3, 3) // { x1: '3/4 + 𝓲√15/4' , x2: '3/4 - 𝓲√15/4'  }
```

### Percentage
- What percentage is, percentage of, percent from percent, total from percent
```js
// What percentaje is 12 out of 30?
Percentage.whatPercentageIs(12, 30) // 40.00%

// How much is 7% of 39?
Percentage.percentageOf(7, 39) // 2.73

// If 30% is 10, then 60% is...
Percentage.percentFromPercent(30, 10, 60) // 20

// If 10% is 20, the total is...
Percentage.totalFromPercent(10, 20) // 200
```

### Rule of three
- Simple
```js
RuleOfThree.simple("direct", 10, undefined, 60, 90) // 15
```

### Triangles
- Functions return information about triangles
```js
Triangles.angle14_76()

/*
{
  hypotenuse: 'k√17',
  opposite: 'k',
  adjacent: '4k',
  sin: 'k/k√17',
  cos: '4k/k√17',
  tan: 'k/4k'
}
*/
```

### Linear Regression
- Simple
```js
var array_x = [100, 90, 80, 45, 50, 50, 60, 40, 25, 20];
var array_y = [3, 5, 9, 10, 20, 21, 24, 24, 27, 35];

console.log(LinearRegression.simple(array_x, array_y));

//
/*
{
  a: -0.34788,
  b: 37.28128,
  equation: '-0.34788x + 37.28128',
  coefficient: [Function: coefficient]
}
*/
```

### Area
- Triangle, rectangle, circle, square, square2, trapeze
```js
// ...
Area.triangle(4, 3) // 6
Area.circle(5) // 25π
// ...
```

### Operations
- Hypotenuse, to roman, log, factorial, double factorial, combinatorial, fibonacci, divisors
```js
Operations.hypotenuse(7, 9) // -> √11.40
Operations.toRoman(420); // CDXX

// log5x = 4
Operations.log(5, null, 4) // 625

// 4!
Operations.factorial(4); // 24

// 10!!
Operations.doubleFactorial(10); // 3840
Operations.combinatorial(7, 3); // 35

Operations.divisors(25); // [ 1, 5, 25 ]

Operations.fibonacci(13)

/*
Output:

[
    0,  1,  1,  2,  3,  5,
    8, 13, 21, 34, 55, 89,
    144
]
*/
```

### Vectors
- Sum, Substract, Product, unit vector
```js
// (3, 6) + (2, -7)
var vector_a = [3, 6];
var vector_b = [2, -7];

// Sum or sustract returns object
Vectors.sum(vector_a, vector_b)

/*
  {
    x: 5,
    y: -1,
    expression: '5i - 1j',
    cartesian: [ 5, -1 ],
    unit_vector: [ 0.98, -0.19 ]
  }
*/

// (2i - j) • (5i + 2j)
Vectors.product( [2, -1], [5, 2] ) // 8

// (-3, 5)
Vector.unitVector(-3, 5);
```

### System of equations
- Double
<img src="https://user-images.githubusercontent.com/68967448/150624746-9dcd85bb-58ac-4692-a083-0313d7b9674a.png" width="150px">

```js
var equation1 = [1, 2, 10];
var equation2 = [2, -1, 5]

console.log(SystemEquation.double(equation1, equation2))
// { x: 4, y: 3 }
```

### Chemical elements
- Show, obtain by group, obtain by family
```js
ChemicalElements.show("H")

/*
  {
    simbol: 'H',
    atomic_number: 1,
    atomic_mass: 1,
    name: 'Hydrogen',
    group: 'I A',
    type: 'Non-metal',
    electroegativity: 2.2
  }
*/

//  I A, II A, III A, ...
ChemicalElements.obtainByGroup("I B") // object

// You will place the family of the elements you want to obtain
ChemicalElements.obtainByFamily("Halogen") // object
```

### Angle measurements system
- Radian, Centesimal, Sexasegimal _`(toRadian, toCentesimal, toSexagesimal)`_
```js
...

// 2π/5
AngleMeasurements.radian("2/5").toCentesimal() // 80

// 40ᵍ
AngleMeasurements.centesimal(40).toRadian() // π/5

// 45°
AngleMeasurements.sexagesimal(45).toCentesimal() // 50

...
```

### Validator
- isNumber, isString, isObject, isUndefined, containsString, containsNumber `...`
```js
...

Validator.isNumber("2") // false
Validator.isString("test") // true

Validator.containsString([1,2,3,4]) // false
Validator.containsNumber(["1", "2", "3", 4]) // true

...
```

### Clock
- date, time
```js
Clock.time() // Sample: 23:10

// the default format is US
Clock.date() // month/day/year
```

### Browser
- setCSSVariable, getCSSVariable, getBrowserDetails, isMobile, getComputedStyleById
```js
...

Browser.isMobile() // false

Browser.getComputedStyleById('main', 'margin-top') // 0px
Browser.getComputedStyleById('nav', 'border') // 2px solid rgb(123, 123, 123)

Browser.setCSSVariable('--myvariable', '4px')
Browser.getCSSVariable('--myvariable') // '4px'

...
```