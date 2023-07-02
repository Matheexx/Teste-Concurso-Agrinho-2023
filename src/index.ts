const navMobileHeader:HTMLDivElement = window.document.getElementById('navMobileHeader') as HTMLDivElement;

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

const menuAccess:HTMLDivElement = window.document.getElementById("menu-access") as HTMLDivElement;

const btnToTheTopMobile:HTMLAnchorElement = window.document.getElementById("button-to-the-top-mobile") as HTMLAnchorElement;

function scroll():void {
    if (isNavMobileHeaderVisible()) {
        if (isInTheTop()) {
            menuAccess.style.backgroundColor = "transparent";
            btnToTheTopMobile.style.visibility = "collapse";
        } else {
            menuAccess.style.backgroundColor = "#121212";
            btnToTheTopMobile.style.visibility = "visible";
        }
    }
}

btnToTheTopMobile.addEventListener("click", () => {
    leaveMenu();
    menuAccess.style.backgroundColor = "transparent";
    btnToTheTopMobile.style.visibility = "collapse";
})

function clickMenuLinks():void {
    leaveMenu();
}

function isInTheTop() {
    return (window.scrollY === 0);
}

function isNavMobileHeaderVisible() {
    return (window.getComputedStyle(navMobileHeader).visibility === "visible");
}