// export class Config {
//     #language 
//     #history
//     constructor() {
//         this.#language = "en"
//         this.#history = true        
//     }

//     set = ({
//         language, history
//     }) => {
//         this.#language = language
//         this.#history = history
//     }

//     show = () => {
//     }
// }

import { Validator } from "./Validator.js"

let cfg = {
    language: "en",
    history: true
}


export const Config = (props) => {
    if(Validator.isUndefined(props)) {
        return Object.seal(cfg)
    }

    else if(Validator.isObject(props) && !Validator.isArray(props)) {

    }

    else {

    }
}