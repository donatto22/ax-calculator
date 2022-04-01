import { Validator, Config } from "../../main.js";

const Table = (props) => {
    if(Validator.isObject(props)) {

    }

    else {
        console.log("%cYou need to ")
    }
}


// default styles for the table
function lightTable(table) {

}

// table in dark mode
function darkTable(table) {

}

// add css to the table
function addCSS(element, style) {
    for (const property in style)
        element.style[property] = style[property];
}

export default Table