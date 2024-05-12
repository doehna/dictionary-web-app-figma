import * as dropdown from "./dropdown"
import * as toggle from "./toggle"

document.addEventListener('DOMContentLoaded', function () {
    addDropdownEventListener();
    addToggleEventListener();
})

function addDropdownEventListener() {
    document.querySelector(".select").addEventListener("click", function () {
        dropdown.displayDropdownOptions();
       });
}

function addToggleEventListener() {
    document.querySelector(".toggle").addEventListener("click", function() {        
        let checkbox = document.querySelector(".toggle-checkbox");
        checkbox.isChecked = !checkbox.isChecked;

        toggle.changeElementsClass(document.querySelector("html"));

        let toggleTranslateX = checkbox.isChecked ? "20px" : "0px";
        toggle.changeTogglePosition(document.querySelector(".toggle-button"), toggleTranslateX);
    });
}