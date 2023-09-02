
import { BrowserUI } from "../../../dist/cjs/browser-ui/browser_ui.js";

document.getElementById('success').addEventListener('click', function() {
    console.log(123)
   
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
