const root = document.documentElement;

let footerHeight = getStyleComputed("footer", "height");

root.style.setProperty('--footer-height', footerHeight)


/**
@param { string } id
@param { string } property
**/
function getStyleComputed (id, property) {
    return getComputedStyle(document.getElementById(id)).getPropertyValue(property)
}