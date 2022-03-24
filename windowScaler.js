const sideMenu = document.getElementById("sideMenu");
const mainHolder = document.getElementById("holderMain");
const menuToggleButton = document.getElementById("navToggle");
let sideMenuOnUser, sideMenuOnAuto;

resize(true);

function toggleNav() {
    if(sideMenuOnUser) disableNav();
    else enableNav();
}
function disableNav(){
    sideMenuOnUser = false;
    sideMenu.style.display = "none";
    mainHolder.style.marginLeft = "16px";
    navToggle.style.marginLeft = "10px";
}
function enableNav(){
    sideMenuOnUser = true;
    sideMenu.style.display = "block";
    if(parseInt(getBrowserSize().width) / parseInt(getBrowserSize().height) > 1.03){ // Desktop
        mainHolder.style.marginLeft = "calc((100% - 1900px) / 6 + 396px)";
    }
    else{ // Phone
        navToggle.style.marginLeft = "224px";
    }
}

window.onresize = function(e) {
    resize(false);
}
function resize(first){
    if(parseInt(getBrowserSize().width) / parseInt(getBrowserSize().height) > 1.03){ // Desktop
        if(sideMenuOnAuto || first){
            sideMenuOnUser = true;
            sideMenu.style.display = "block";
            mainHolder.style.marginLeft = "calc((100% - 1900px) / 6 + 396px)";
            navToggle.style.marginLeft = "10px";
        }
        sideMenuOnAuto = false;
    }
    else{ // Phone
        if(!sideMenuOnAuto || first){
            sideMenuOnUser = false;
            sideMenu.style.display = "none";
            mainHolder.style.marginLeft = "16px";
            navToggle.style.marginLeft = "10px";
        }
        sideMenuOnAuto = true;
    }
}

function getBrowserSize(){
    var w, h;

      if(typeof window.innerWidth != 'undefined')
      {
       w = window.innerWidth; //other browsers
       h = window.innerHeight;
      } 
      else if(typeof document.documentElement != 'undefined' && typeof document.documentElement.clientWidth != 'undefined' && document.documentElement.clientWidth != 0) 
      {
       w =  document.documentElement.clientWidth; //IE
       h = document.documentElement.clientHeight;
      }
      else{
       w = document.body.clientWidth; //IE
       h = document.body.clientHeight;
      }
    return {'width':w, 'height': h};
}