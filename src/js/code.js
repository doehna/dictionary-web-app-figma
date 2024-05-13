import * as dropdown from "./dropdown"
import * as toggle from "./toggle"
import * as fonts from "./fonts"
import * as theme from "./theme"

document.addEventListener('DOMContentLoaded', function () {
    setDefaultValues();
    addDropdownEventListener();
    addToggleEventListener();
    addFontOptionListener();
    hideOptionsBoxWhenClickedOutside();

})

function hideOptionsBoxWhenClickedOutside() {
    window.addEventListener('mouseup',function(event){
        var box = document.querySelector(".options-box");
        if(event.target != box && event.target.parentNode != box){
            box.style.display = 'none';
        }
  });  
}

function setDefaultValues() {
    fonts.setSavedOrDefaultFont();
    theme.setSavedOrDefaultThemeOnElement()
}

function addDropdownEventListener() {
    document.querySelector(".select").addEventListener("click", function () {
        dropdown.displayDropdownOptions();
    });
}

function addToggleEventListener() {
    document.querySelector(".toggle").addEventListener("click", function () {
        let checkbox = document.querySelector(".toggle-checkbox");
        checkbox.isChecked = !checkbox.isChecked;

        theme.changeThemeOnElement(checkbox.isChecked);

        toggle.setTogglePositionByIsCheckedValue(checkbox.isChecked);
    });
}

function addFontOptionListener() {
    let links = document.querySelectorAll(".link");

    for (let link of links) {
        link.addEventListener("click", function () {
            let fontFamily = link.innerHTML === "Sans Serif" ? "sans-serif" : (link.innerHTML === "Serif" ? "serif" : "monospace");
            fonts.changeFont(fontFamily);
            dropdown.changeDropdownDisplay(link.innerHTML, fontFamily);
        })
    }
}