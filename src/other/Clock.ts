import { Validator, Config } from "../main.js"

export const Clock = {
    /**
    Display the time
    **/
    time: function(seconds: boolean = false, spacing: boolean = false): string {
        if(Validator.isBoolean(seconds, spacing)) {
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
            let msg = ''

            Config().language == 'en' ? 
            msg = 'This function requires boolean parameters' :
            msg = 'Esta función requiere parámetros boleanos'

            return "[x] Clock.time: " + msg
        }
    },

    /**
    @return {string}
    **/
    date: function(format: string = "US", optionalYear: boolean = true): string {
        if(Validator.isString(format) && Validator.isBoolean(optionalYear)) {
            let date = new Date(), fullDate = ""

            let day = String(date.getDate()), month = String(date.getMonth() + 1), year = String(date.getFullYear())

            // ---------------------- // Validar fechas
            day.length == 1 ? day = `0${day}` : day = day
            month.length == 1 ? month = `0${month}` : month = month
            // ---------------------- //

            // ---------------------- // Validando los formatos de fecha y booleano del year
            if (optionalYear == true) {
                if (format == "US")
                    fullDate = `${month}/${day}/${year}`

                else if (format == "EUR")
                    fullDate = `${day}/${month}/${year}`

                else if (format == "AS")
                    fullDate = `${year}/${month}/${day}`

                else {
                    let msg = Config().language == 'en' ? 
                    "[x] Format not found" : "[x] Formato no encontrado"

                    return "[x] Clock.date: " + msg
                }
            }

            else {
                if ((format == "US") || (format == "AS"))
                    fullDate = `${month}/${day}`

                else if (format == "EUR")
                    fullDate = `${day}/${month}`

                else {
                    let msg = Config().language == 'en' ? 
                    "[x] Format not found" : "[x] Formato no encontrado"

                    return "[x] Clock.date(): " + msg
                }
            }

            return fullDate
        // ---------------------- //
        }

        else {
            let msg = Config().language == 'en' ? 
            "Set the correct parameters" : "Coloca los parámetros correctos"
            
            return "[x] Clock.date(): " + msg
        }
    },

    calculateDaysBetweenDates: function(begin: string, end: string): string | number {
        let msg = ''
        const dayMiliseconds = 8.64e+7 // day in milliseconds
        let regex = /^\(?([0-9]{4})\)?[-. ]?([0-9]{2})[-. ]?([0-9]{2})$/g

        if(Validator.isString(begin, end)) {
            if((begin.match(regex) != null) && (end.match(regex) != null)) {
                let firstDate = new Date(begin).getTime(), secondDate = new Date(end).getTime()
                return Math.round(Math.abs((firstDate - secondDate) / dayMiliseconds))
            }

            else {
                msg = Config().language == 'en' ? "Format incorrect (yyyy-mm-dd)" : "Formato incorrecto (yyyy-mm-dd)"
                return "[x] Clock.calculateDaysBetweenDates: " + msg 
            }
        }

        else {
            msg = Config().language == 'en' ? "Place strings" : "Coloca cadenas"
            return "[x] Clock.calculateDaysBetweenDates: " + msg
        }
    }
}