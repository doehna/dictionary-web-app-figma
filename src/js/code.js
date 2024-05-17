import * as dropdown from "./dropdown"
import * as toggle from "./toggle"
import * as fonts from "./fonts"
import * as theme from "./theme"
import * as api from "./api"
import * as html from "./html"
import * as validation from "./validation"

document.addEventListener('DOMContentLoaded', function () {
    setDefaultValues();
    hideOptionsBoxWhenClickedOutside();
    addDropdownEventListener();
    addToggleEventListener();
    addFontOptionListener();
    addSubmitEventListener();
    addSearchEventListener();
})

function addSearchEventListener() {
    let searchIcon = document.querySelector(".search-icon");
    searchIcon.addEventListener("click", async function (e) {
        search(e);
    })
}

function addSubmitEventListener() {
    let searchInput = document.querySelector(".search");
    searchInput.addEventListener("keypress", async function (e) {
        if (e.key === 'Enter') {
            search(e);
        }
    })
}

async function search(e) {
    let searchInput = document.querySelector(".search");
    let searchFraze = searchInput.value;

    if (searchFraze) {
        validation.removeSearchInputValidation();
        try {
            let result = await api.getApiData(searchFraze);
            displayResult(result);
        }
        catch (e) {
            throw e;
        }
    }
    else {
        validation.addSearchInputValidation();
    }
}


function displayResult(result) {
    const jsonList = JSON.parse(result);
    document.querySelector(".content").innerHTML = html.getArticleHtml(jsonList);
}

function hideOptionsBoxWhenClickedOutside() {
    window.addEventListener('mouseup', function (event) {
        var box = document.querySelector(".options-box");
        if (event.target != box && event.target.parentNode != box) {
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
    let links = document.querySelectorAll(".font-link-js");

    for (let link of links) {
        link.addEventListener("click", function () {
            let fontFamily = link.innerHTML === "Sans Serif" ? "sans-serif" : (link.innerHTML === "Serif" ? "serif" : "monospace");
            fonts.changeFont(fontFamily);
            dropdown.changeDropdownDisplay(link.innerHTML, fontFamily);
        })
    }
}