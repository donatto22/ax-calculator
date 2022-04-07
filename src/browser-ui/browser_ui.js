import Toastr from './toastr/toastr.js'
import Table from './table/table.js'
import ColorsUI from './colors-ui/colors_ui.js'

export const BrowserUI = {

    /**
     * Web function
     * @param {object} props
    **/
    toastr: (props) =>  {
        Toastr({
            type : props ? props.type : null,
            message : props ? props.message : null,
            bolder : props ? props.bolder : null,
            fontfamily : props ? props.fontfamily : null,
            fontSize : props ? props.fontSize : null,
            position : props ? props.position : null,
            message : props ? props.message : null
        })
    },

    /**
     * Web function
     * @param {object} props
    **/
    table: (props) => {
        Table({
            tableID : props ? props.tableID : null,
            type : props ? props.type : null,
        })
    },

    /**
     * Web function
    **/
    colorsUI: () => {
        return ColorsUI()
    },

    /**
     * Web function
     * @param {string} divID
     * @param {object} props
    **/
    card: (divID, props) => {
        
    }
}