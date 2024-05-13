export function displayDropdownOptions() {
    const options = document.querySelector(".options-box");
    options.style.display = options.style.display === "inline" ? "none" : "inline";
}

export function changeDropdownDisplay(fontName, fontFamily) {
    let select = document.querySelector(".select");
    select.innerHTML = fontName;
    select.style.fontFamily = fontFamily;
}

