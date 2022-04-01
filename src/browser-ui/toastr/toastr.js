import { Validator, Config } from '../../main.js';

let toastrColors = {
    green: "#6BCC77",
    yellow: "#EAB632",
    red: "#EF4B4C"
}

// create element
let toastrElement = document.createElement('div')
toastrElement.setAttribute('id', 'ax-toastr-js')

function Toastr (p) {
    if(Validator.isObject(p)) {     
        addCSS(toastrElement, {
            "margin" : "1em",
            "right" : "0px",
            'width' : "calc(300px - 1em)",
            "padding" : "1em",
            "height": "80px",
            "position" : "absolute",
            "z-index" : "99",
            "display" : "true",
            "border-radius": "6px",
            "box-shadow": "0 2px 14px -1px #b3b3b3",
            "transition" : "display .2s",
            "cursor" : "pointer",
        })

        p.type == "success" ? setBgColor(toastrColors.green) :
        (p.type == "warning" ? setBgColor(toastrColors.yellow) : 
        (p.type == "error" ? setBgColor(toastrColors.red) : setBgColor("blue")))


        toastrElement.addEventListener('click', () => {
            toastrElement.remove()
        })
    }

    // add toastr to body
    document.querySelector("body").appendChild(toastrElement);
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