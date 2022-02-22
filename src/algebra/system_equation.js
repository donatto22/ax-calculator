export class system_equation {
    /**
    Returns exact values of a system of 2 equations
    @param {number} equation1 - first equation
    @param {number} equation2 - second equation
    **/
    static double(equation1, equation2) {
        //ax + by = c
        //dx + ey = f

        // x = ( c e  -  b f )  /  ( a e  -  b d )
        // y = ( a f  -  c d )  /  ( a e  -  b d )
        var a, b, c, d, e, f, x, y;

        a = equation1[0]; b = equation1[1]; c = equation1[2];
        d = equation2[0]; e = equation2[1]; f = equation2[2];

        x = ( (c * e) - (b * f) ) / ( (a * e) - (b * d) )
        y = ( (a * f) - (c * d) ) / ( (a * e) - (b * d) )

        return {
            x, y
        }
    }
}