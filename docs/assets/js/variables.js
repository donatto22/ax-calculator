const root = document.documentElement;

// get footer height
let footerHeight = getStyleComputed("footer", "height");
root.style.setProperty('--footer-height', footerHeight)

// blur effect in toggle menu
root.style.setProperty('--blur', '0px')


/**
@param { string } id
@param { string } property
**/
function getStyleComputed (id, property) {
    return getComputedStyle(document.getElementById(id)).getPropertyValue(property)
}