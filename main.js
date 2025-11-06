let header = document.querySelector("header");

header.style.height = "95px";
header.style.transition = "0.3s";

window.onscroll = function () {
    if (window.scrollY <= 200) {
        header.style.height = "95px";
    } else {
        header.style.height = "70px";
    }
};

// Toggle Menu

let toggleMenu = document.querySelector("header .menu-btn");
let menu = document.querySelector("header .toggle-menu");
let links = document.querySelectorAll("header .toggle-menu li");

toggleMenu.onclick = function () {   
    if (menu.classList.contains("none")) {
        menu.classList.replace("none", "block");
    } else if (menu.classList.contains("block")) {
        menu.classList.replace("block", "none");
    }
};

links.onclick = links.forEach(function (e) {
    e.onclick = function () {
        menu.classList.replace("block", "none");
    }
});
