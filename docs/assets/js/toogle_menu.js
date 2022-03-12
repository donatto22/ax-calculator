let buttonToggleMenu = document.getElementById("button-toggle-menu");

// variables para el menu
let menuToggle = document.getElementById("toggle-menu");
let blur2 = 0;

/**
toggles menu visibility, and blur
**/
function toggleMenu() {
    menuToggle.classList.toggle('toggle-active')

    blur2 == 0 ? blur2 = 10 : blur2 = 0

    document.documentElement.style.setProperty('--blur', `${blur2}px`)
}

buttonToggleMenu.addEventListener("click", toggleMenu)
document.getElementById("icon-action").addEventListener("click", toggleMenu)