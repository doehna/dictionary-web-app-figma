export function getArticleHtml(jsonList) {
    let html = "";
    jsonList.forEach(element => {
        html += 
        `<article class="article">
            <header class="results-header">
                ${getResultsHeaderHtml(element)}
                ${getAudioHtml(element.phonetics)}
            </header>
            <main class="definition">
                ${getDefinitionHtml(element.meanings)}
            </main>
            <footer>
                <span class="line"></span>
            </footer>
        </article>`
    });
    return html;
}

function getAudioHtml(listOfPhonetics) {
    let html = "";
    let audio;
    for (let phonetics of listOfPhonetics) {
        if (phonetics.audio) {
            audio = phonetics.audio;
            break;
        }
    }

    if (audio) {
        html =
        `<div class="audio">
            <audio class="audio" src="${audio}" autostart="false"></audio>
            <button class="play-button" onclick="playAudio(this);"></button>
        </div>`     
    }
    return html
}

function getResultsHeaderHtml(jsonElement) {
    let html = "";
    html =
    `<div class="results-header-container">
        <div class="search-fraze">${jsonElement.word}</div>
        ${displayElementIfExists(jsonElement.phonetic, "pronouncation")}
    </div>`
    return html;
}

function getDefinitionHtml(jsonList) {
    let html = "";
    jsonList.forEach(element => {
        html +=
        `<span class='part-of-speech'>
            ${element.partOfSpeech.toLowerCase()}
            <span class="line"></span>
        </span>
        <div class="meaning-container">
            <div class="meanings-header">Meaning</div>
            <ul class="meaning">
                ${displayExpressionMeanings(element.definitions)}
            </ul>
        </div>
        ${displaySynonymsHtml(element.synonyms)}`

    });
    return html;
}

function displaySynonymsHtml(jsonElement) {
    let html = "";
    if (jsonElement && jsonElement.length > 0) {
        html = 
        `<div class="synonyms">
            <div class="synonyms-header">Synonyms</div>
            <div class="synonyms-list">${displaySynonymsList(jsonElement)}</div>
        </div>`
    }
    return html;
}

function displaySynonymsList(synonyms) {
    let html = "";
    synonyms.forEach(element => {
        html += element + " ";
    });
    return html;
}

function displayExpressionMeanings(listOfMeanings) {
    let list = "";
    listOfMeanings.forEach(element => {
        if (element.definition) {
            list +=
            `<li>
                ${element.definition}
            </li>
            ${displayElementIfExists(element.example, "example")}`
        }
    });
    return list
}

function displayElementIfExists(element, className) {
    if (element) {
        return `<div class="${className}">"${element}"</div>`
    }
    return "";
}