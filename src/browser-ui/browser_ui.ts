import Toastr from './toastr/toastr.js'
import Table from './table/table.js'
import ColorsUI from './colors-ui/colors_ui.js'

export const BrowserUI = {

    /**
     * Web function
    **/
    toastr: (props?: {
        type: string,
        message: string
        bolder: boolean,
        fontfamily: string,
        fontSize: string,
        position: string
    }): void =>  {
        Toastr({
            type : props ? props.type : null,
            message : props ? props.message : null,
            bolder : props ? props.bolder : null,
            fontfamily : props ? props.fontfamily : null,
            fontSize : props ? props.fontSize : null,
            position : props ? props.position : null
        })
    },

    /**
     * Web function
     * @param {object} props
    **/
    table: (props?: {tableID: string, type: string}) => {
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
     * @param divID
     * @param props
    **/
    card: (divID: string, props: object) => {
        
    }
}