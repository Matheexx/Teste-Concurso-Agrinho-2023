"use strict";
const navMobileHeader = window.document.getElementById('navMobileHeader');
const menuContent = window.document.getElementById("menu-content");
function clickMenu() {
    if (menuContent.style.visibility !== "visible") {
        menuContent.style.visibility = "visible";
        navMobileHeader.style.height = "100%";
        navMobileHeader.style.width = "70%";
        menuContent.style.height = "100%";
    }
    else {
        leaveMenu();
    }
}
function leaveMenu() {
    menuContent.style.visibility = "collapse";
    navMobileHeader.style.height = "0";
    navMobileHeader.style.width = "100%";
    menuContent.style.height = "0";
}
const menuAccess = window.document.getElementById("menu-access");
const btnToTheTopMobile = window.document.getElementById("button-to-the-top-mobile");
function scroll() {
    if (isNavMobileHeaderVisible()) {
        if (isInTheTop()) {
            menuAccess.style.backgroundColor = "transparent";
            btnToTheTopMobile.style.visibility = "collapse";
        }
        else {
            menuAccess.style.backgroundColor = "#121212";
            btnToTheTopMobile.style.visibility = "visible";
        }
    }
}
btnToTheTopMobile.addEventListener("click", () => {
    leaveMenu();
    menuAccess.style.backgroundColor = "transparent";
    btnToTheTopMobile.style.visibility = "collapse";
});
function clickMenuLinks() {
    leaveMenu();
}
function isInTheTop() {
    return (window.scrollY === 0);
}
function isNavMobileHeaderVisible() {
    return (window.getComputedStyle(navMobileHeader).visibility === "visible");
}
