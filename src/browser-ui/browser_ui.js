import Toastr from './toastr/toastr.js'

export const BrowserUI = {
    toastr: (props = null) =>  {
        Toastr({
            type : props ? props.type : null,
            message : props ? props.message : null,
            bolder : props ? props.bolder : null,
            fontfamily : props ? props.fontfamily : null,
        })
    }
}