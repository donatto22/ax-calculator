import * as ax from "../../../src/main.js";

document.getElementById('success').addEventListener('click', function() {
    ax.BrowserUI.toastr({
        type: "success"
    });
})

document.getElementById('warning').addEventListener('click', function() {
    ax.BrowserUI.toastr({
        type: "warning"
    });
})

document.getElementById('danger').addEventListener('click', function() {
    ax.BrowserUI.toastr({
        type: "error"
    });
})

console.log(ax.BrowserUI.colorsUI().dark)
