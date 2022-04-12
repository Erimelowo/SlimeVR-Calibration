/*
 * Script to manage the side menu depending on the
 * windows' width and when user presses on the hamburger
 * menu. Allows the website to function on a phone vertically.
 */

const sideMenu = document.getElementById("sideMenu");
const mainHolder = document.getElementById("holderMain");
const menuToggleButton = document.getElementById("navToggle");
let sideMenuOnUser, sideMenuOnAuto;

const desktopMinWidth = 926;

resize(true);

// Called when the user clicks the hamburger menu.
function toggleNav() {
  if (sideMenuOnUser) disableNav();
  else enableNav();
}

// Disables the side menu manually
function disableNav() {
  sideMenuOnUser = false;
  sideMenu.style.display = "none";
  mainHolder.style.marginLeft = "16px";
  navToggle.style.marginLeft = "10px";
}

// Enables the side menu manually
function enableNav() {
  sideMenuOnUser = true;
  sideMenu.style.display = "block";
  if (parseInt(getBrowserSize().width) > desktopMinWidth) {
    // Desktop
    mainHolder.style.marginLeft = "calc((100% - 1900px) / 6 + 396px)";
  } else {
    // Phone
    navToggle.style.marginLeft = "224px";
  }
}

window.onresize = function (e) {
  resize(false);
};

// Toggle the side menu automatically when the user resizes the window
function resize(first) {
  if (parseInt(getBrowserSize().width) > desktopMinWidth) {
    // Desktop
    if (sideMenuOnAuto || first) {
      sideMenuOnUser = true;
      sideMenu.style.display = "block";
      mainHolder.style.marginLeft = "calc((100% - 1900px) / 6 + 396px)";
      navToggle.style.marginLeft = "10px";
    }
    sideMenuOnAuto = false;
  } else {
    // Phone
    if (!sideMenuOnAuto || first) {
      sideMenuOnUser = false;
      sideMenu.style.display = "none";
      mainHolder.style.marginLeft = "16px";
      navToggle.style.marginLeft = "10px";
    }
    sideMenuOnAuto = true;
  }
}

// Gets the width and height of the browser.
function getBrowserSize() {
  var w, h;

  if (typeof window.innerWidth != "undefined") {
    w = window.innerWidth; //  Other browsers
    h = window.innerHeight;
  } else if (
    typeof document.documentElement != "undefined" &&
    typeof document.documentElement.clientWidth != "undefined" &&
    document.documentElement.clientWidth != 0
  ) {
    w = document.documentElement.clientWidth; // IE
    h = document.documentElement.clientHeight;
  } else {
    w = document.body.clientWidth; // IE
    h = document.body.clientHeight;
  }
  return { width: w, height: h };
}
