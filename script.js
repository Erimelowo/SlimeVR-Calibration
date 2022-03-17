const sideMenu = document.getElementById("sideMenu");
sideMenu.style.width = "220px";
const mainHolder = document.getElementById("holderMain");
mainHolder.style.marginLeft = "234px";

function toggleNav() {
    if(sideMenu.style.width == "220px"){
        sideMenu.style.width = "0px";
        mainHolder.style.marginLeft = "16px";
    }
    else{
        sideMenu.style.width = "220px";
        mainHolder.style.marginLeft = "234px";
    }
}