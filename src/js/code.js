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
    addSubmitEventListeners();
    addSearchEventListener();
})

function addSearchEventListener() {
    let searchIcon = document.querySelector(".search-icon");

    searchIcon.addEventListener("click", async function (e) {
        search(e);
    })
}

function addSubmitEventListeners() {
    let typingTimer;
    let doneTypingInterval = 500;
    let searchInput = document.querySelector(".search");

    searchInput.addEventListener("keyup", async function (e) {
    if (e.key.length === 1 || e.key === "Delete" || e.key === "Backspace") {
            clearTimeout(typingTimer);
            typingTimer = setTimeout(() => {
                search(e)
            }, doneTypingInterval);
        }
    })

    searchInput.addEventListener("keydown", async function (e) {
        if (e.key === 'Enter') {
            search(e);
        }

        if (e.key.length === 1 || e.key === "Delete" || e.key === "Backspace") {
            clearTimeout(typingTimer);
        }
    })
}

async function search(e) {
    let searchInput = document.querySelector(".search");
    let searchFraze = searchInput.value;
    document.querySelector(".content").innerHTML = "";

    if (searchFraze) {
        showLoader();
        validation.removeSearchInputValidation();
        try {
            let result = await api.getApiData(searchFraze);
            hideLoader();
            displayResult(result);
            hideError();
        }
        catch (e) {
            hideLoader();
            displayError();
        }
    }
    else {
        validation.addSearchInputValidation();
    }
}

function showLoader() {
    document.querySelector(".loader").classList.remove("hidden");
}

function hideLoader() {
    document.querySelector(".loader").classList.add("hidden");
}

function hideError() {
    let error = document.querySelector(".error-content");
    error.classList.add("hidden");
}

function displayError() {
    let error = document.querySelector(".error-content");
    error.classList.remove("hidden");
}


function displayResult(result) {
    const jsonList = JSON.parse(result);
    document.querySelector(".content").innerHTML = html.getArticleHtml(jsonList);
    let footer = document.querySelector("footer");
    footer.classList.remove("hidden");
}

function hideOptionsBoxWhenClickedOutside() {
    window.addEventListener('mouseup', function (event) {
        var box = document.querySelector(".options-box");
        if (event.target != box && event.target.parentNode != box) {
            box.classList.add("hidden");
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