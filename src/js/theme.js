import * as toggle from "./toggle"

export function setSavedOrDefaultThemeOnElement() {
    let theme = getThemeFromLocalStorageOrDefault();
    let isChecked = theme === "dark";
    
    document.querySelector(".toggle-checkbox").isChecked = isChecked;
    !isChecked ? setThemeOnElement("light", "dark") : setThemeOnElement("dark", "light");
    toggle.setTogglePositionByIsCheckedValue(isChecked);
}

export function setThemeOnElement(added, removed) {
    let html = document.querySelector("html");
    html.classList.add(added);
    html.classList.remove(removed);
}

export function changeThemeOnElement(isChecked) {
    let html = document.querySelector("html");
    html.classList.toggle("light");
    html.classList.toggle("dark");
    isChecked ? saveSelectedThemeInLocalStorage("dark") : saveSelectedThemeInLocalStorage("light");
}

export function saveSelectedThemeInLocalStorage(theme) {
    localStorage.setItem("theme", theme);
}

export function getThemeFromLocalStorageOrDefault() {
    return localStorage.getItem("theme") ?? "light";
}