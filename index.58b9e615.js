const $14308410f8b0e190$export$e9ddf1da8d18d6f = "https://api.dictionaryapi.dev/api/v2/entries/en/";


function $a2c33ea51e68f42e$export$c116b6234af040fc() {
    const options = document.querySelector(".options-box");
    options.classList.toggle("hidden");
}
function $a2c33ea51e68f42e$export$fd04987cf4c1d237(fontName, fontFamily) {
    let select = document.querySelector(".select").firstElementChild;
    select.innerHTML = fontName;
    select.style.fontFamily = fontFamily;
}


function $6a74e1e6d663a743$var$changeTogglePosition(translateX) {
    let toggleButton = document.querySelector(".toggle-button");
    toggleButton.style.transform = `translateX(${translateX})`;
}
function $6a74e1e6d663a743$export$c2eb44df7c0dd7b9(isChecked) {
    let toggleTranslateX = isChecked ? "20px" : "0px";
    $6a74e1e6d663a743$var$changeTogglePosition(toggleTranslateX);
}



function $80771a0c31a6f52e$export$6500a282d3c938aa(fontFamily) {
    let html = document.querySelector("html");
    html.classList.remove("sans-serif");
    html.classList.remove("serif");
    html.classList.remove("monospace");
    html.classList.add(fontFamily);
    $80771a0c31a6f52e$export$3ffec22a05dd7a7a(fontFamily);
}
function $80771a0c31a6f52e$export$3ffec22a05dd7a7a(fontFamily) {
    localStorage.setItem("fontFamily", fontFamily);
}
function $80771a0c31a6f52e$export$a27ac039a41d48a0() {
    return localStorage.getItem("fontFamily") ?? "sans-serif";
}
function $80771a0c31a6f52e$export$4fc3f20177686e92(fontFamily) {
    switch(fontFamily){
        case "sans-serif":
            return "Sans Serif";
        case "serif":
            return "Serif";
        case "monospace":
            return "Mono";
        default:
            return null;
    }
}
function $80771a0c31a6f52e$export$868515fd38b68034() {
    let font = $80771a0c31a6f52e$export$a27ac039a41d48a0();
    $80771a0c31a6f52e$export$6500a282d3c938aa(font);
    let fontName = $80771a0c31a6f52e$export$4fc3f20177686e92(font);
    $a2c33ea51e68f42e$export$fd04987cf4c1d237(fontName ?? "Sans Serif", font);
}



function $c861477e6985d277$export$4d4dcc81d73375c8() {
    let theme = $c861477e6985d277$export$ef4e8bbbaa7c432a();
    let isChecked = theme === "dark";
    document.querySelector(".toggle-checkbox").isChecked = isChecked;
    !isChecked ? $c861477e6985d277$export$87926c1695de6dce("light", "dark") : $c861477e6985d277$export$87926c1695de6dce("dark", "light");
    $6a74e1e6d663a743$export$c2eb44df7c0dd7b9(isChecked);
}
function $c861477e6985d277$export$87926c1695de6dce(added, removed) {
    let html = document.querySelector("html");
    html.classList.add(added);
    html.classList.remove(removed);
}
function $c861477e6985d277$export$e4363ee9b085910d(isChecked) {
    let html = document.querySelector("html");
    html.classList.toggle("light");
    html.classList.toggle("dark");
    isChecked ? $c861477e6985d277$export$81813995172ddc32("dark") : $c861477e6985d277$export$81813995172ddc32("light");
}
function $c861477e6985d277$export$81813995172ddc32(theme) {
    localStorage.setItem("theme", theme);
}
function $c861477e6985d277$export$ef4e8bbbaa7c432a() {
    let theme;
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) theme = "dark";
    else theme = "light";
    return localStorage.getItem("theme") ?? theme;
}



function $6b537d50865c24c8$export$fe6e2b2c7c409978(searchFraze) {
    const apiUrl = $14308410f8b0e190$export$e9ddf1da8d18d6f + searchFraze;
    return fetch(apiUrl).then((resp)=>{
        if (!resp.ok) throw new Error("Big error");
        else return resp.json();
    }).then((resp)=>{
        let result = JSON.stringify(resp);
        return result;
    }).catch((error)=>{
        throw new Error("Big error 2");
    });
}


function $150d5ab372dae642$export$3a5327176d22e4ca(jsonList) {
    let html = "";
    jsonList.forEach((element)=>{
        html += `<article class="article">
            <header class="results-header">
                ${$150d5ab372dae642$var$getResultsHeaderHtml(element)}
                ${$150d5ab372dae642$var$getAudioHtml(element.phonetics)}
            </header>
            <main class="definition">
                ${$150d5ab372dae642$var$getDefinitionHtml(element.meanings)}
            </main>
            <footer>
                <span class="line"></span>
            </footer>
        </article>`;
    });
    return html;
}
function $150d5ab372dae642$var$getAudioHtml(listOfPhonetics) {
    let html = "";
    let audio;
    for (let phonetics of listOfPhonetics)if (phonetics.audio) {
        audio = phonetics.audio;
        break;
    }
    if (audio) html = `<div class="audio">
            <audio class="audio" src="${audio}" autostart="false"></audio>
            <button class="play-button" onclick="playAudio(this);"></button>
        </div>`;
    return html;
}
function $150d5ab372dae642$var$getResultsHeaderHtml(jsonElement) {
    let html = "";
    html = `<div class="results-header-container">
        <div class="search-fraze">${jsonElement.word}</div>
        ${$150d5ab372dae642$var$displayElementIfExists(jsonElement.phonetic, "pronouncation")}
    </div>`;
    return html;
}
function $150d5ab372dae642$var$getDefinitionHtml(jsonList) {
    let html = "";
    jsonList.forEach((element)=>{
        html += `<span class='part-of-speech'>
            ${element.partOfSpeech.toLowerCase()}
            <span class="line"></span>
        </span>
        <div class="meaning-container">
            <div class="meanings-header">Meaning</div>
            <ul class="meaning">
                ${$150d5ab372dae642$var$displayExpressionMeanings(element.definitions)}
            </ul>
        </div>
        ${$150d5ab372dae642$var$displaySynonymsHtml(element.synonyms)}`;
    });
    return html;
}
function $150d5ab372dae642$var$displaySynonymsHtml(jsonElement) {
    let html = "";
    if (jsonElement && jsonElement.length > 0) html = `<div class="synonyms">
            <div class="synonyms-header">Synonyms</div>
            <div class="synonyms-list">${$150d5ab372dae642$var$displaySynonymsList(jsonElement)}</div>
        </div>`;
    return html;
}
function $150d5ab372dae642$var$displaySynonymsList(synonyms) {
    let html = "";
    synonyms.forEach((element)=>{
        html += element + " ";
    });
    return html;
}
function $150d5ab372dae642$var$displayExpressionMeanings(listOfMeanings) {
    let list = "";
    listOfMeanings.forEach((element)=>{
        if (element.definition) list += `<li>
                ${element.definition}
            </li>
            ${$150d5ab372dae642$var$displayElementIfExists(element.example, "example")}`;
    });
    return list;
}
function $150d5ab372dae642$var$displayElementIfExists(element, className) {
    if (element) return `<div class="${className}">"${element}"</div>`;
    return "";
}


function $7f84f2c89e036892$export$6d8a88cf67a69ac6() {
    let validation = document.querySelector(".validation");
    validation.classList.add("hidden");
    let searchField = document.querySelector(".search");
    searchField.classList.remove("error");
}
function $7f84f2c89e036892$export$5fa606fdc27c9d9a() {
    let validation = document.querySelector(".validation");
    validation.classList.remove("hidden");
    let searchField = document.querySelector(".search");
    searchField.classList.add("error");
    searchField.classList.remove("search-focus");
    $7f84f2c89e036892$var$removeContent();
}
function $7f84f2c89e036892$var$removeContent() {
    let content = document.querySelector(".content");
    content.innerHTML = "";
}


document.addEventListener("DOMContentLoaded", function() {
    $60eafcd7eea799ef$var$setDefaultValues();
    $60eafcd7eea799ef$var$hideOptionsBoxWhenClickedOutside();
    $60eafcd7eea799ef$var$addDropdownEventListener();
    $60eafcd7eea799ef$var$addToggleEventListener();
    $60eafcd7eea799ef$var$addFontOptionListener();
    $60eafcd7eea799ef$var$addSubmitEventListeners();
    $60eafcd7eea799ef$var$addSearchEventListener();
});
function $60eafcd7eea799ef$var$addSearchEventListener() {
    let searchIcon = document.querySelector(".search-icon");
    searchIcon.addEventListener("click", async function(e) {
        $60eafcd7eea799ef$var$search(e);
    });
}
function $60eafcd7eea799ef$var$addSubmitEventListeners() {
    let typingTimer;
    let doneTypingInterval = 500;
    let searchInput = document.querySelector(".search");
    searchInput.addEventListener("keyup", async function(e) {
        if (e.key.length === 1 || e.key === "Delete" || e.key === "Backspace") {
            clearTimeout(typingTimer);
            typingTimer = setTimeout(()=>{
                $60eafcd7eea799ef$var$search(e);
            }, doneTypingInterval);
        }
    });
    searchInput.addEventListener("keydown", async function(e) {
        if (e.key === "Enter") $60eafcd7eea799ef$var$search(e);
        if (e.key.length === 1 || e.key === "Delete" || e.key === "Backspace") clearTimeout(typingTimer);
    });
}
async function $60eafcd7eea799ef$var$search(e) {
    let searchInput = document.querySelector(".search");
    let searchFraze = searchInput.value;
    document.querySelector(".content").innerHTML = "";
    if (searchFraze) {
        $60eafcd7eea799ef$var$showLoader();
        $7f84f2c89e036892$export$6d8a88cf67a69ac6();
        try {
            let result = await $6b537d50865c24c8$export$fe6e2b2c7c409978(searchFraze);
            $60eafcd7eea799ef$var$hideLoader();
            $60eafcd7eea799ef$var$displayResult(result);
            $60eafcd7eea799ef$var$hideError();
        } catch (e) {
            $60eafcd7eea799ef$var$hideLoader();
            $60eafcd7eea799ef$var$displayError();
        }
    } else $7f84f2c89e036892$export$5fa606fdc27c9d9a();
}
function $60eafcd7eea799ef$var$showLoader() {
    document.querySelector(".loader").classList.remove("hidden");
}
function $60eafcd7eea799ef$var$hideLoader() {
    document.querySelector(".loader").classList.add("hidden");
}
function $60eafcd7eea799ef$var$hideError() {
    let error = document.querySelector(".error-content");
    error.classList.add("hidden");
}
function $60eafcd7eea799ef$var$displayError() {
    let error = document.querySelector(".error-content");
    error.classList.remove("hidden");
}
function $60eafcd7eea799ef$var$displayResult(result) {
    const jsonList = JSON.parse(result);
    document.querySelector(".content").innerHTML = $150d5ab372dae642$export$3a5327176d22e4ca(jsonList);
    let footer = document.querySelector("footer");
    footer.classList.remove("hidden");
}
function $60eafcd7eea799ef$var$hideOptionsBoxWhenClickedOutside() {
    window.addEventListener("mouseup", function(event) {
        var box = document.querySelector(".options-box");
        if (event.target != box && event.target.parentNode != box) box.classList.add("hidden");
    });
}
function $60eafcd7eea799ef$var$setDefaultValues() {
    $80771a0c31a6f52e$export$868515fd38b68034();
    $c861477e6985d277$export$4d4dcc81d73375c8();
}
function $60eafcd7eea799ef$var$addDropdownEventListener() {
    document.querySelector(".select").addEventListener("click", function() {
        $a2c33ea51e68f42e$export$c116b6234af040fc();
    });
}
function $60eafcd7eea799ef$var$addToggleEventListener() {
    document.querySelector(".toggle").addEventListener("click", function() {
        let checkbox = document.querySelector(".toggle-checkbox");
        checkbox.isChecked = !checkbox.isChecked;
        $c861477e6985d277$export$e4363ee9b085910d(checkbox.isChecked);
        $6a74e1e6d663a743$export$c2eb44df7c0dd7b9(checkbox.isChecked);
    });
}
function $60eafcd7eea799ef$var$addFontOptionListener() {
    let links = document.querySelectorAll(".font-link-js");
    for (let link of links)link.addEventListener("click", function() {
        let fontFamily = link.innerHTML === "Sans Serif" ? "sans-serif" : link.innerHTML === "Serif" ? "serif" : "monospace";
        $80771a0c31a6f52e$export$6500a282d3c938aa(fontFamily);
        $a2c33ea51e68f42e$export$fd04987cf4c1d237(link.innerHTML, fontFamily);
    });
}


//# sourceMappingURL=index.58b9e615.js.map
