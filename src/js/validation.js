export function removeSearchInputValidation() {
    let validation = document.querySelector(".validation");
    validation.classList.add("hidden");

    let searchField = document.querySelector(".search");
    searchField.classList.remove("error");
}

export function addSearchInputValidation() {
    let validation = document.querySelector(".validation");
    validation.classList.remove("hidden");

    let searchField = document.querySelector(".search");
    searchField.classList.add("error");
    searchField.classList.remove("search-focus");
    removeContent();
}

function removeContent() {
    let content = document.querySelector(".content");
    content.innerHTML = "";
}
