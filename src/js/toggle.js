function changeTogglePosition(translateX) {
    let toggleButton = document.querySelector(".toggle-button");
    toggleButton.style.transform = `translateX(${translateX})`;
}

export function setTogglePositionByIsCheckedValue(isChecked) {
    let toggleTranslateX = isChecked ? "20px" : "0px";
    changeTogglePosition(toggleTranslateX);
}