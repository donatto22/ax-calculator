const root = document.documentElement;

// get footer height
let footerHeight = getStyleComputedById("footer", "height");
root.style.setProperty('--footer-height', footerHeight)

// get nav height
let navHeight = getStyleComputedById("nav", "height");
root.style.setProperty('--nav-height', navHeight)

// blur effect in toggle menu
root.style.setProperty('--blur', '0px')

/**
    @param { string } id
    @param { string } property
**/
function getStyleComputedById(id, property) {
    return getComputedStyle(document.getElementById(id)).getPropertyValue(property)
}