export function changeElementsClass(element) {
    element.classList.toggle("light");
    element.classList.toggle("dark");
}

export function changeTogglePosition(element, translateX) {
    element.style.transform = `translateX(${translateX})`;
}