"use strict";
const navMobileHeader = window.document.getElementById('navMobileHeader');
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
}
const menuButton = window.document.getElementById("menu-button");
var ultimaPosicao = 0;
function rollY() {
    var atualPosicao = window.scrollY;
    if (atualPosicao > ultimaPosicao) {
        menuButton.style.backgroundColor = "black";
    }
    else {
        menuButton.style.backgroundColor = "transparent";
    }
}
