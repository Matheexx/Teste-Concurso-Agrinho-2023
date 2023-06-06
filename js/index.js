"use strict";
const menuContent = window.document.getElementById("menu-content");
const titleHeader = window.document.getElementById("titleHeader");
const navMobileHeader = window.document.getElementById("navMobileHeader");
function clickMenu() {
    if (!(menuContent.style.visibility === "visible")) {
        menuContent.style.visibility = "visible";
        menuContent.style.height = "60vh";
        titleHeader.style.visibility = "collapse";
        titleHeader.style.height = "0";
    }
    else {
        menuContent.style.visibility = "collapse";
        menuContent.style.height = "0";
        titleHeader.style.visibility = "visible";
        titleHeader.style.height = "60vh";
    }
}
