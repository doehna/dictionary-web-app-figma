import * as dropdown from "./dropdown"

document.addEventListener('DOMContentLoaded', function () {
   // const setTheme = theme => document.documentElement.className = theme;
   document.getElementsByClassName("select").addEventListener("click", dropdown.displayDropdownOptions());
})