/*
 * Script to manage dark mode on the website.
 * It saves the dark mode state to HTML 5 localStorage.
 */

const holderMain = document.getElementById("holderMain");
const darkModeButton = document.getElementById("darkModeButton");
const darkerBackground = document.getElementById("darkerBackground")

toggleDarkMode(true);

// Toggles dark mode. Called when pressing the dark mode toggle button and on page load.
function toggleDarkMode(first = false){
    if((localStorage.getItem("darkMode") === "on") === !first){
        holderMain.className = "mainLight";
        darkModeButton.className = "dayIcon";
        if(darkerBackground != null){
            darkerBackground.className = "contentLight";
        }
        localStorage.setItem("darkMode", "off");
    } else{
        holderMain.className = "mainDark";
        darkModeButton.className = "nightIcon";
        if(darkerBackground != null){
            darkerBackground.className = "contentDark";
        }
        localStorage.setItem("darkMode", "on");
    }
}