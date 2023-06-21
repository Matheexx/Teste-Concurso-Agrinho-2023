const navMobileHeader:HTMLDivElement = window.document.getElementById('navMobileHeader') as HTMLDivElement;

const menuAccess:HTMLDivElement = window.document.getElementById("menu-access") as HTMLDivElement;

const menuContent:HTMLDivElement = window.document.getElementById("menu-content") as HTMLDivElement;

function clickMenu():void {
    if (menuContent.style.visibility !== "visible") {
        menuContent.style.visibility = "visible";
        navMobileHeader.style.height = "100%";
        navMobileHeader.style.width = "70%";
        menuContent.style.height = "100%";
    } else {
        leaveMenu();
    }
}

function leaveMenu():void {
    menuContent.style.visibility = "collapse";
    navMobileHeader.style.height = "0";
    navMobileHeader.style.width = "100%";
    menuContent.style.height = "0";
}

function scroll():void {
    if (window.scrollY > 0) {
        menuAccess.style.backgroundColor = "#121212";
    } else {
        menuAccess.style.backgroundColor = "transparent";
    }
}

function clickMenuLinks() {
    leaveMenu();
}