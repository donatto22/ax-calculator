"use strict"

import { Validator } from "../main.js"

let cfg = {
    language: "en",
    history: true,
    globalMessage: "", 
    pi: 3.1415926
}

export const Config = (props) => {
    // si no se colocan params, retorna la configuración que hay establecida
    if(Validator.isUndefined(props)) {
        return Object.seal(cfg)
    }

    // en caso de recibir parámetro, será un objeto (no un array) con las
    // propiedades a cambiar
    else if(Validator.isObject(props) && !Validator.isArray(props)) {
        cfg.language = props.language ? props.language : cfg.language
        cfg.history = props.history ? props.history : cfg.history
        cfg.globalMessage = props.globalMessage ? props.globalMessage : cfg.globalMessage
        cfg.pi = props.pi ? props.pi : cfg.pi
    }

    // en caso se coloque algo no establecido
    else {
        console.log("%c[x] ax.Config: Incorrect parameter", 'color: pink')
    }
}