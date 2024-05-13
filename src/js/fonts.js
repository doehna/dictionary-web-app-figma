import * as dropdown from "./dropdown"

export function changeFont(fontFamily) {
    let html = document.querySelector("html");
    html.classList.remove("sans-serif");
    html.classList.remove("serif");
    html.classList.remove("monospace");
    html.classList.add(fontFamily);
    saveSelectedFontInLocalStorage(fontFamily);
}

export function saveSelectedFontInLocalStorage(fontFamily) {
    localStorage.setItem("fontFamily", fontFamily);
}

export function getFontFromLocalStorageOrDefault() {
    return localStorage.getItem("fontFamily") ?? "sans-serif";
}

export function getFontNameByFontFamily(fontFamily) {
    switch (fontFamily) {
        case "sans-serif":
            return "Sans Serif";
        case "serif":
            return "Serif";
        case "monospace":
            return "Mono"
        default:
            return null;
    }
}

export function setSavedOrDefaultFont() {
    let font = getFontFromLocalStorageOrDefault();
    changeFont(font);
    let fontName = getFontNameByFontFamily(font);
    dropdown.changeDropdownDisplay(fontName ?? "Sans Serif", font);
}