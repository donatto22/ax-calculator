import { Validator, Config } from '../../main.js';

let toastrColors = {
    green: "#6BCC77",
    yellow: "#EAB632",
    red: "#EF4B4C"
}

// create element
let toastrElement = document.createElement('div')
toastrElement.setAttribute('id', 'ax-toastr')

// import link
let head = document.getElementsByTagName('head')[0]
let link = document.createElement('link')

link.rel = 'stylesheet'
link.type = 'text/css'
link.href = 'https://raw.githubusercontent.com/donatto22/ax-calculator/master/src/browser-ui/toastr/toastr.css'

head.appendChild(link)

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