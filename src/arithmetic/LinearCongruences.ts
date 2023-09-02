export const LinearCongruences = {
    /**
     * @param range By default you find 'x' values between 0 and 10, you can change this value if you need
     * @description a = b mod module
     */
    simple: function (a: number, b: number, module: number, range = 10): Array<number> {
        let values = []

        if(range <= 0) {
            throw new Error("Error in LinearCongruences. You must have a range greater than 0")
        }

        // Va a buscar un valores de x en un rango de 0 a 10
        for (let i = 1; i <= range; i++) {
            // si el producto menos el 2do número es divisible entre el módulo
            if ((((a * i) - b) % module) == 0) {
                // console.log(`x = ${i}, ${a}(${i}) = ${b} + multiplo de ${module}`)
                // console.log((equis * i), ((module * i) + b))
                // console.log((((a * i) - b) % module) == 0)
                // console.log((((a * i) - b)))
                values.push(i)
                continue
            }
        }
        
        return values
    }
}