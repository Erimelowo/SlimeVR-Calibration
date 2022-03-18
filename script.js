const sideMenu = document.getElementById("sideMenu");
const mainHolder = document.getElementById("holderMain");
const menuToggleButton = document.getElementById("navToggle");
let sideMenuOn;

if(window.innerWidth / window.innerHeight < 1){
    disableNav();
}
else{
    enableNav();
}

function toggleNav() {
    if(sideMenuOn){
        disableNav();
    }
    else{
        enableNav();
    }
}

function disableNav(){
    sideMenuOn = false;
    sideMenu.style.width = "0px";
    mainHolder.style.marginLeft = "16px";
    navToggle.style.marginLeft = "10px";
}
function enableNav(){
    sideMenuOn = true;
    sideMenu.style.width = "220px";
    if((window.innerWidth / window.innerHeight > 1)){
        mainHolder.style.marginLeft = "234px";
    }
    else{
        navToggle.style.marginLeft = "224px";
    }
}