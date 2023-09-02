// import { Validator, Config } from "../main.js"

// export const LinearRegression = {
//     simple: function(array_x: Array<number>, array_y: Array<number>): object | string {
//         let msg = ""
//         // Verificar que ambos sean arreglos
//         if(Validator.isArray(array_x) && Validator.isArray(array_y)) {
//             //Si son arreglos, ver que tengan la misma cantidad de datos
//             if(array_x.length == array_y.length) {
//                 //Longitud
//                 let length = array_y.length

//                 let array_x2: number[] = [], array_xy: number[] = [];

//                 // x ** 2
//                 array_x.forEach(e => array_x2.push(e ** 2))

//                 // xy
//                 if (array_x !== undefined && array_x !== undefined) {
//                     for(let i = 0; i < length; i++) {
//                         array_xy.push(array_x[i] * array_y[i])
//                     }
//                 }

//                 // Sumatorias
//                 let sum_y = array_y.reduce(sum)
//                 let sum_x = array_x.reduce(sum)
//                 let sum_x2 = array_x2.reduce(sum)
//                 let sum_xy = array_xy.reduce(sum)

//                 // Inicia la formula
//                 let a:number, b: number, equation: string;

//                 a = Number.parseFloat((((length * sum_xy) - (sum_x * sum_y) ) / ( (length * sum_x2) - (sum_x ** 2))).toString()) // .match(/^-?\d+(?:\.\d{0,5})?/)
//                 b = (sum_y - (a * sum_x)) / length;

//                 //Ecuacion lineal
//                 equation = `${a}x + ${b}`

//                 return {
//                     a, b, equation,
//                     coefficient: function() {
//                         let average_x = sum_x / length
//                         let average_y = sum_y / length

//                         //Aquí se necesitan 5 arreglos nuevos
//                         let array_x_avgx: number[] = [], array_y_avgy: number[] = [], 
//                         array_x_avgx2: number[] = [], array_y_avgy2: number[] = [], product: number[] = [];

//                         //Agregando los valores a sus arreglos
//                         for(let i = 0; i < length; i++) {
//                             // x - average_x
//                             array_x_avgx.push(array_x[i] - average_x)
//                             // y - average_y
//                             array_y_avgy.push(Number.parseFloat((array_y[i] - average_y).toFixed(2)))
//                         }

//                         // Los cuadrados
//                         // (x - average_x) al cuadrado
//                         array_x_avgx.forEach(e => array_x_avgx2.push(e ** 2))
//                         // (y - average_y) al cuadrado
//                         array_y_avgy.forEach(e => array_y_avgy2.push(Number.parseFloat((e ** 2).toFixed(2))))

//                         // el producto de los cuadrados
//                         for(let i = 0; i < length; i++) {
//                             product.push(Number.parseFloat((array_x_avgx[i] * array_y_avgy[i]).toFixed(2)))
//                         }                        
                        
//                         //3 sumatorias nuevas
//                         let sum_avgx2 = Number.parseFloat((array_x_avgx2.reduce(sum)).toFixed(2))
//                         let sum_avgy2 = Number.parseFloat((array_y_avgy2.reduce(sum)).toFixed(2))
//                         let sum_product = Number.parseInt((product.reduce(sum)).toFixed(2))
                        
//                         let result = sum_product / ((sum_avgx2 ** (1/2)) * (sum_avgy2 ** (1/2)))

//                         return Number.parseFloat((result).toFixed(5))
//                     }
//                 }
//             }

//             else {
//                 msg = Config().language == 'en' ? 
//                 "The arrays must have the same amount of data" : 
//                 "Los arreglos deben tener la misma cantidad de datos"

//                 return "[x] LinearRegression: " + msg
//             }
//         }

//         else {
//             msg = Config().language == 'en' ? 
//             "The function requires array objects" : 
//             "La función requiere objetos de tipo arreglo"

//             return "[x] LinearRegression: " + msg
//         }
//     }
// }

// const sum = (accumulator: any, curr: any) => accumulator + curr