// export const Vectors = {
//     sum: function(...vectors: Array<Array<number>>): string | object {
//         var arr_x = [], arr_y = [];

//         for(var i = 0; i <= vectors.length - 1; i++) {
//             if(typeof vectors[i] != 'object') {
//                 return "Only objects"
//             }
    
//             else if(typeof vectors[i][0] != 'number' || typeof vectors[i][1] != 'number') {
//                 return "Only numbers in the objects"
//             }
    
//             else {
//                 arr_x.push(vectors[i][0])
//                 arr_y.push(vectors[i][1])
//             }
//         }

//         var x = arr_x.reduce(_sum)
//         var y = arr_y.reduce(_sum)

//         var expression = validateExpression(x, y)
//         var cartesian = [x, y]

//         var unit_vector = unitVector(x, y)

//         return {
//             x, y, expression, cartesian, unit_vector
//         }
//     },

//     substract: function(...vectors: Array<Array<number>>): string | object {
//         var arr_x = [], arr_y = [];

//         for(var i = 0; i <= vectors.length - 1; i++) {
//             if(typeof vectors[i] != 'object') {
//                 return "Only objects"
//             }
    
//             else if(typeof vectors[i][0] != 'number' || typeof vectors[i][1] != 'number') {
//                 return "Only numbers in the objects"
//             }
    
//             else {
//                 arr_x.push(vectors[i][0])
//                 arr_y.push(vectors[i][1])
//             }
//         }

//         var x = arr_x.reduce(_substract)
//         var y = arr_y.reduce(_substract)

//         var expression = validateExpression(x, y)
//         var cartesian = [x, y]
        
//         var unit_vector = unitVector(x, y)

//         return {
//             x, y, expression, cartesian, unit_vector
//         }
//     },

//     product: function(...vectors: Array<Array<number>>): string | number {
//         var arr_x =[], arr_y = [];

//         for(var i = 0; i <= vectors.length - 1; i++) {
//             if(typeof vectors[i] != 'object') {
//                 return "Only objects"
//             }
    
//             else if(typeof vectors[i][0] != 'number' || typeof vectors[i][1] != 'number') {
//                 return "Only numbers in the objects"
//             }
    
//             else {
//                 arr_x.push(vectors[i][0])
//                 arr_y.push(vectors[i][1])
//             }
//         }

//         var x = arr_x.reduce(_product)
//         var y = arr_y.reduce(_product)

//         return x + y;
//     },

//     unitVector: function(vector: Array<number>) {
//         return unitVector(vector[0], vector[1]);
//     }
// }

// const _sum = (accumulator: any, curr: any) => accumulator + curr;
// const _substract = (accumulator: number, curr: number) => accumulator - curr;
// const _product = (accumulator: number, curr: number) => accumulator * curr;

// function validateExpression(x: string | number, y: string | number) {
//     let expression

//     if(x == 0)
//         x = ''

//     if(y == 0)
//         y = ''

//     if(x == 1)
//         x = 'i'

//     if(y == 1)
//         y = 'i'

//     if(x > 1)
//         x = `${x}i`

//     if(y > 1)
//         y = `${y}j`

//     if(y < 0)
//         expression = `${x} - ${Number.parseInt(String(y)) * -1}j`

//     else if(x < 0)
//         expression = `-${Number.parseInt(String(x)) * -1}i + ${y}`

//     else if(x < 0 && y < 0)
//         expression = `-${Number.parseInt(String(x)) * -1}i - ${Number.parseInt(String(y)) * -1}j`

//     else
//         expression = `${x} + ${y}`

//     return expression;
// }

// function unitVector(x: number, y: number) {
//     var module = ((x ** 2) + (y ** 2)) ** (1/2);

//     let x2 = Number.parseFloat((Number.parseFloat((x / module).toString())).toString().match(/^-?\d+(?:\.\d{0,2})?/)![0])
//     let y2 = Number.parseFloat((Number.parseFloat((y / module).toString())).toString().match(/^-?\d+(?:\.\d{0,2})?/)![0])
    
//     return [x2, y2]
// }