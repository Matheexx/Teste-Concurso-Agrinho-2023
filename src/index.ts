const menuContent:HTMLDivElement = window.document.getElementById("menu-content") as HTMLDivElement;

const titleHeader:HTMLDivElement = window.document.getElementById("titleHeader") as HTMLDivElement;

const navMobileHeader:HTMLDivElement = window.document.getElementById("navMobileHeader") as HTMLDivElement;

function clickMenu() {
    if (!(menuContent.style.visibility === "visible")) {
        menuContent.style.visibility = "visible";
        menuContent.style.height = "60vh";
        titleHeader.style.visibility = "collapse"
        titleHeader.style.height = "0";
        
    } else {
        menuContent.style.visibility = "collapse";
        menuContent.style.height = "0";
        titleHeader.style.visibility = "visible";
        titleHeader.style.height = "60vh";
    }
}