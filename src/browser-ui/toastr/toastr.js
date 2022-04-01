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
            "top" : "0",
            "margin" : "2em",
            "right" : "0",
            'width' : "calc(300px - 1em)",
            "padding" : "1em",
            "height": "80px",
            "position" : "fixed",
            "z-index" : "99",
            "display" : "true",
            "border-radius": "6px",
            "box-shadow": "0 2px 14px -1px #b3b3b3",
            "transition" : "right .2s",
            "cursor" : "pointer",
        })

        p.type == "success" ? setBgColor(toastrColors.green) :
        (p.type == "warning" ? setBgColor(toastrColors.yellow) : 
        (p.type == "error" ? setBgColor(toastrColors.red) : setBgColor("blue")))
        
        // add toastr to body
        document.querySelector("body").appendChild(toastrElement);
    }
}

// hidden
toastrElement.addEventListener('click', () => {
    toastrElement.style.right = "calc(calc(300px + 2em) * -1)"
    setTimeout(() => {toastrElement.remove()}, 500)
})

// add default css to the toast
function addCSS(element, style) {
    for (const property in style)
        element.style[property] = style[property];
}

// set a bg color
const setBgColor = (color) => {
    toastrElement.style.backgroundColor = color
}

function dropToastr() {
    toastrElement.remove()
}

export default Toastr