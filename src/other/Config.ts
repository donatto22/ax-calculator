"use strict"

import { Validator } from "../main.js"

let cfg = {
    language: "en",
    history: true,
    globalMessage: "", 
    PI: 3.1415926,
    disabledTriangleConstants: false
}

export function Config(props?: { 
    language: string, 
    history: boolean,
    globalMessage: string,
    PI: number,
    disabledTriangleConstants: boolean
}) {
    if(Validator.isObject(props)) {
        cfg.language = (props?.language && Validator.isString(props.language)) ? 
        props.language : cfg.language

        cfg.history = (props?.history && Validator.isBoolean(props?.history)) ? 
        props.history : cfg.history

        cfg.globalMessage = (props?.globalMessage && Validator.isString(props?.globalMessage)) ? 
        props.globalMessage : cfg.globalMessage

        cfg.PI = (props?.PI && Validator.isNumber(props?.PI)) ? props.PI : cfg.PI

        cfg.disabledTriangleConstants = 
        (props?.disabledTriangleConstants && Validator.isBoolean(props?.disabledTriangleConstants)) ? 
        props.disabledTriangleConstants : cfg.disabledTriangleConstants
    }

    return Object.seal(cfg)
}