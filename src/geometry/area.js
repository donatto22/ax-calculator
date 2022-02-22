export class area {
    static triangle(base, height) {
        return (base * height) / 2
    }

    static rectangle(width, height) {
        return width * height
    }

    static circle(radio) {
        return (radio * radio) + "π"
    }

    /**
        @param side The measure of one side of the square
    **/

    static square(side) {
        return String(side * side)
    }

    static square2(diagonal) {
        var top = diagonal ** diagonal;

        if(Number.isInteger(top/2)) {
            return String(top / 2)            
        }

        else {
            return String(top + "/2")
        }
    }

    static trapeze(bottom, top, height) {
        return ((bottom + top) / 2) * height
    }
}