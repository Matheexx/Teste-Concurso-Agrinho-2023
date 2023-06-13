const navMobileHeader:HTMLDivElement = window.document.getElementById('navMobileHeader') as HTMLDivElement;

const menuContent:HTMLDivElement = window.document.getElementById("menu-content") as HTMLDivElement;

function clickMenu():void {
    if (menuContent.style.visibility !== "visible") {
        menuContent.style.visibility = "visible";
        navMobileHeader.style.height = "100%";
        navMobileHeader.style.width = "70%";
    } else {
        leaveMenu();
    }
}

function leaveMenu():void {
    menuContent.style.visibility = "collapse";
    navMobileHeader.style.height = "0";
}

const menuButton:HTMLDivElement = window.document.getElementById("menu-button") as HTMLDivElement;

var ultimaPosicao = 0;

function rollY() {
    var atualPosicao = window.scrollY;

    if(atualPosicao > ultimaPosicao) {
        menuButton.style.backgroundColor = "black";
    } else {
        menuButton.style.backgroundColor = "transparent";
    }
}