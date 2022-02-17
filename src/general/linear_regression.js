const linealRegression = {
    simple: function(array_x, array_y) {
        // Verificar que ambos sean arreglos
        if((typeof array_x == 'object') && (typeof array_y == 'object')) {
            //Si son arreglos, ver que tengan la misma cantidad de datos
            if(array_x.length == array_y.length) {
                //Longitud
                var length = array_y.length

                var array_x2 = [], array_xy = [];

                // x ** 2
                array_x.forEach(e => array_x2.push(e ** 2))

                // xy
                for(var i = 0; i < length; i++) {
                    array_xy.push(array_x[i] * array_y[i])
                }

                // Sumatorias
                var sum_y = array_y.reduce(sum)
                var sum_x = array_x.reduce(sum)
                var sum_x2 = array_x2.reduce(sum);
                var sum_xy = array_xy.reduce(sum);

                // Inicia la formula
                var a, b, equation;

                a = Number.parseFloat((((length * sum_xy) - (sum_x * sum_y) ) / ( (length * sum_x2) - (sum_x ** 2))).toString().match(/^-?\d+(?:\.\d{0,5})?/)[0]);
                b = (sum_y - (a * sum_x)) / length;

                //Ecuacion lineal
                equation = `${a}x + ${b}`

                return {
                    a, b, equation,
                    coefficient() {
                        var average_x = sum_x / length;
                        var average_y = sum_y / length;

                        //Aquí se necesitan 5 arreglos nuevos
                        var array_x_avgx = [], array_y_avgy = [], 
                        array_x_avgx2 = [], array_y_avgy2 = [], product = [];

                        //Agregando los valores a sus arreglos
                        for(var i = 0; i < length; i++) {
                            // x - average_x
                            array_x_avgx.push(array_x[i] - average_x)
                            // y - average_y
                            array_y_avgy.push(Number.parseFloat((array_y[i] - average_y).toFixed(2)))
                        }

                        // Los cuadrados
                        // (x - average_x) al cuadrado
                        array_x_avgx.forEach(e => array_x_avgx2.push(e ** 2))
                        // (y - average_y) al cuadrado
                        array_y_avgy.forEach(e => array_y_avgy2.push(Number.parseFloat((e ** 2).toFixed(2))))

                        // el producto de los cuadrados
                        for(var i = 0; i < length; i++) {
                            product.push(Number.parseFloat((array_x_avgx[i] * array_y_avgy[i]).toFixed(2)))
                        }                        
                        
                        //3 sumatorias nuevas
                        var sum_avgx2 = Number.parseFloat((array_x_avgx2.reduce(sum)).toFixed(2));
                        var sum_avgy2 = Number.parseFloat((array_y_avgy2.reduce(sum)).toFixed(2));
                        var sum_product = Number.parseInt((product.reduce(sum)).toFixed(2));
                        
                        var result = sum_product / ((sum_avgx2 ** (1/2)) * (sum_avgy2 ** (1/2)))

                        return Number.parseFloat((result).toFixed(5));
                    }
                }
            }

            else {
                return "The arrays must have the same amount of data";
            }
        }

        else {
            return "The function requires objects"
        }
    }
}

const sum = (accumulator, curr) => accumulator + curr;

export default linealRegression