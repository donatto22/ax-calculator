import { Validator, Browser } from '../../main.js';
import ColorsUI from "../colors-ui/colors_ui.js";

// create element
let toastrElement = document.createElement('div')
toastrElement.setAttribute('id', 'ax-toastr-js')

// create the message
let message = document.createElement("div")
message.setAttribute('id', 'message-toastr')

function Toastr (p) {
    if(Validator.isObject(p)) {
        Browser.addCSSToElement(toastrElement, {
            "display" : "flex",
            "align-items" : "center",
            "color" : "white",
            "margin" : "1em",
            "right" : "0",
            'width' : "calc(320px - 2em)",
            "padding" : "1em",
            "height": "80px",
            "position" : "fixed",
            "z-index" : "99",
            "border-radius": "6px",
            "box-shadow": "0 2px 14px -1px #b3b3b3",
            "transition" : "right .2s",
            "cursor" : "pointer",
        })

        // set bold message
        p.bolder === true ? message.style.fontWeight = "600" : message.style.fontWeight = "normal"
        p.fontSize ? message.style.fontSize = p.fontSize : message.style.fontSize = "20px"

        if(p.type == "success") {
            setBgColor(ColorsUI().green)
            p.message ? setMessage(p.message) : setMessage("Process success!")
        }

        else if(p.type == "warning") {
            setBgColor(ColorsUI().yellow)
            p.message ? setMessage(p.message) : setMessage("Warning")
        }

        else if(p.type == "error") {
            setBgColor(ColorsUI().red)
            p.message ? setMessage(p.message) : setMessage("Error")
        }

        else {
            setBgColor("blue")
            p.message ? setMessage(p.message) : setMessage("Simple toastr")
        }
        
        // add toastr to body
        document.querySelector("body").appendChild(toastrElement)

        // add message in the toastr
        toastrElement.appendChild(message)
    }
}

// hidden
toastrElement.addEventListener('click', () => {
    toastrElement.style.right = "calc(calc(300px + 2em) * -1)"
    setTimeout(() => {toastrElement.remove()}, 200)
})

// set a bg color
const setBgColor = (color) => {
    toastrElement.style.backgroundColor = color
}

// set a message
const setMessage = (string) => {
    message.textContent = string
}

export default Toastr