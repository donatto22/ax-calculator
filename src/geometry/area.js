const Area = {
    triangle: function(base, height) {
        return (base * height) / 2
    },

    rectangle: function(width, height) {
        return width * height
    },

    circle: function(radio) {
        return (radio * radio) + "π"
    },

    /**
        @param side The measure of one side of the square
    **/

    square: function(side) {
        return String(side * side)
    },

    square2: function(diagonal) {
        var top = diagonal ** diagonal;

        if(Number.isInteger(top/2)) {
            return String(top / 2)            
        }

        else {
            return String(top + "/2")
        }
    },

    trapeze: function(bottom, top, height) {
        return ((bottom + top) / 2) * height
    }
}

export default Area