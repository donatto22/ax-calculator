import { Validator } from "./Validator.js"

export const Clock = {
    timer: function(refer, time) {

    },

    time: function(seconds = false, spacing = false, day = false, dayPosition = "bottom") {
        if(Validator.isBool(seconds) && Validator.isBool(spacing) && Validator.isBool(day) && Validator.isString(dayPosition)) {
            let date = new Date(), time = ""

            let hour = String(date.getHours()), minute = String(date.getMinutes()), second = String(date.getSeconds())

            // ---------------------- // Validar los tiempos, colocando el 0 delante
            hour.length == 1 ? hour = `0${hour}` : hour = hour
            minute.length == 1 ? minute =`0${minute}` : minute = minute
            second.length == 1 ? second =`0${second}` : second = second
            // ---------------------- //

            // ---------------------- // Validando segundos y el espaciado
            if(seconds == true && spacing == true) // V -V
                time = `${hour} : ${minute} : ${second}`

            else if(seconds == false && spacing == true) // F - V
                time = `${hour} : ${minute}`

            else if(seconds == true && spacing == false) // V - F
                time = `${hour}:${minute}:${second}`

            else // F - F
                time = `${hour}:${minute}`
            // ---------------------- //

            return time
        }

        else {

        }
    },

    date: function() {

    }
}