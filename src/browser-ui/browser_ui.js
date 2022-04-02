import Toastr from './toastr/toastr.js'
import Table from './table/table.js'
import ColorsUI from './colors-ui/colors_ui.js'

export const BrowserUI = {
    toastr: (props = null) =>  {
        Toastr({
            type : props ? props.type : null,
            message : props ? props.message : null,
            bolder : props ? props.bolder : null,
            fontfamily : props ? props.fontfamily : null,
            position : props ? props.position : null,
            message : props ? props.message : null
        })
    },

    table: (props) => {
        Table({
            tableID : props ? props.tableID : null,
            type : props ? props.type : null,
        })
    },

    colorsUI: () => {
        return ColorsUI()
    },

    card: (divID, props = null) => {
        
    }
}