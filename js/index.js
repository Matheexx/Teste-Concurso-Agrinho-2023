"use strict";
const navMobileHeader = window.document.getElementById('navMobileHeader');
const menuAccess = window.document.getElementById("menu-access");
const menuContent = window.document.getElementById("menu-content");
function clickMenu() {
    if (menuContent.style.visibility !== "visible") {
        menuContent.style.visibility = "visible";
        navMobileHeader.style.height = "100%";
        navMobileHeader.style.width = "70%";
    }
    else {
        leaveMenu();
    }
}
function leaveMenu() {
    menuContent.style.visibility = "collapse";
    navMobileHeader.style.height = "0";
    navMobileHeader.style.width = "100%";
}
function scroll() {
    if (window.scrollY > 0) {
        menuAccess.style.backgroundColor = "#161616";
    }
    else {
        menuAccess.style.backgroundColor = "transparent";
    }
}
function clickMenuLinks() {
    leaveMenu();
}
