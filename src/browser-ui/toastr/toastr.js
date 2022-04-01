import { Validator, Config } from '../../main.js';

import path from 'path'

console.log(path)

let toastrColors = {
    green: "#6BCC77",
    yellow: "#EAB632",
    red: "#EF4B4C"
}

let toastrElement = document.createElement('div');
toastrElement.setAttribute('id', 'ax-toastr');

// addCSS(toastrElement, {
//     "margin" : "1em",
//     "right" : "0px",
//     'width' : "calc(300px - 1em)",
//     "padding" : "1em",
//     "height": "80px",
//     "position" : "absolute",
//     "z-index" : "99",
//     "border-radius": "6px",
//     "box-shadow": "0 2px 14px -1px #b3b3b3",
//     "transition-property" : "right",
//     "transition-duration" : ".2s"
// })

const Toastr = (p) => {
    if(Validator.isObject(p)) {
        p.type == "success" ? setBgColor(toastrColors.green) :
        (p.type == "warning" ? setBgColor(toastrColors.yellow) : 
        (p.type == "error" ? setBgColor(toastrColors.red) : setBgColor("blue")))
    }
    console.time("asd")
    document.querySelector("body").appendChild(toastrElement);
    console.timeEnd("asd")
}

// add default css to the toast
function addCSS(element, style) {
    for (const property in style)
        element.style[property] = style[property];
}

// set a bg color
const setBgColor = (color) => {
    toastrElement.style.backgroundColor = color
}

export default Toastr