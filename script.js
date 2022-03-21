const sideMenu = document.getElementById("sideMenu");
const mainHolder = document.getElementById("holderMain");
const menuToggleButton = document.getElementById("navToggle");
let sideMenuOn;

if(window.innerWidth / window.innerHeight < 1.04){
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
    sideMenu.style.display = "none";
    mainHolder.style.marginLeft = "16px";
    navToggle.style.marginLeft = "10px";
}
function enableNav(){
    sideMenuOn = true;
    sideMenu.style.display = "block";
    if((window.innerWidth / window.innerHeight > 1.04)){ // Desktop
        mainHolder.style.marginLeft = "calc((100% - 1900px) / 6 + 396px)";
    }
    else{ // Phone
        navToggle.style.marginLeft = "224px";
    }
}