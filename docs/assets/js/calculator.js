// import { BrowserUI } from "//unpkg.com/ax-calculator/src/browser-ui/browser_ui.js";

import {BrowserUI} from "../../../src/main.js"

document.getElementById('success').addEventListener('click', function() {
    BrowserUI.toastr({
        type: "success",
        bolder: true
    });
})

document.getElementById('warning').addEventListener('click', function() {
    BrowserUI.toastr({
        type: "warning",
        bolder: true
    });
})

document.getElementById('danger').addEventListener('click', function() {
    BrowserUI.toastr({
        type: "error",
        bolder: true
    });
})
