export function removeSearchInputValidation() {
    let validation = document.querySelector(".validation");
    validation.style.display = "none";

    let searchField = document.querySelector(".search");
    searchField.classList.remove("error");
}

export function addSearchInputValidation() {
    let validation = document.querySelector(".validation");
    validation.style.display = "block";

    let searchField = document.querySelector(".search");
    searchField.classList.add("error");
    searchField.classList.remove("search-focus");
    removeContent();
}

function removeContent() {
    let content = document.querySelector(".content");
    content.innerHTML = "";
}
