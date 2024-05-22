function e(e,t){let n=document.querySelector(".select").firstElementChild;n.innerHTML=e,n.style.fontFamily=t}function t(e){var t;t=e?"20px":"0px",(toggleButton=document.querySelector(".toggle-button")).style.transform=`translateX(${t})`}function n(e){let t=document.querySelector("html");t.classList.remove("sans-serif"),t.classList.remove("serif"),t.classList.remove("monospace"),t.classList.add(e),localStorage.setItem("fontFamily",e)}function o(e,t){let n=document.querySelector("html");n.classList.add(e),n.classList.remove(t)}function s(e){localStorage.setItem("theme",e)}function r(e,t){return e?`<div class="${t}">"${e}"</div>`:""}async function i(e){let t=document.querySelector(".search").value;if(t){document.querySelector(".validation").style.display="none",document.querySelector(".search").classList.remove("error");try{let e=await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/"+t).then(e=>{if(e.ok)return e.json();throw Error("Big error")}).then(e=>JSON.stringify(e)).catch(e=>{throw Error("Big error 2")});(function(e){let t;let n=JSON.parse(e);document.querySelector(".content").innerHTML=(t="",n.forEach(e=>{var n;let o;t+=`<article class="article">
            <header class="results-header">
                <div class="results-header-container">
        <div class="search-fraze">${e.word}</div>
        ${r(e.phonetic,"pronouncation")}
    </div>
                ${function(e){let t,n="";for(let n of e)if(n.audio){t=n.audio;break}return t&&(n=`<div class="audio">
            <audio class="audio" src="${t}" autostart="false"></audio>
            <button class="play-button" onclick="playAudio(this);"></button>
        </div>`),n}(e.phonetics)}
            </header>
            <main class="definition">
                ${n=e.meanings,o="",n.forEach(e=>{var t,n;let s,i,c;o+=`<span class='part-of-speech'>
            ${e.partOfSpeech.toLowerCase()}
            <span class="line"></span>
        </span>
        <div class="meaning-container">
            <div class="meanings-header">Meaning</div>
            <ul class="meaning">
                ${t=e.definitions,s="",t.forEach(e=>{e.definition&&(s+=`<li>
                ${e.definition}
            </li>
            ${r(e.example,"example")}`)}),s}
            </ul>
        </div>
        ${n=e.synonyms,i="",n&&n.length>0&&(i=`<div class="synonyms">
            <div class="synonyms-header">Synonyms</div>
            <div class="synonyms-list">${c="",n.forEach(e=>{c+=e+" "}),c}</div>
        </div>`),i}`}),o}
            </main>
            <footer>
                <span class="line"></span>
            </footer>
        </article>`}),t),document.querySelector("footer").classList.remove("hidden")})(e),document.querySelector(".error-content").classList.add("hidden")}catch(e){document.querySelector(".error-content").classList.remove("hidden")}}else{let e;document.querySelector(".validation").style.display="block",(e=document.querySelector(".search")).classList.add("error"),e.classList.remove("search-focus"),document.querySelector(".content").innerHTML=""}}document.addEventListener("DOMContentLoaded",function(){let r,c;n(r=localStorage.getItem("fontFamily")??"sans-serif"),e(function(e){switch(e){case"sans-serif":return"Sans Serif";case"serif":return"Serif";case"monospace":return"Mono";default:return null}}(r)??"Sans Serif",r),c="dark"===(localStorage.getItem("theme")??"light"),document.querySelector(".toggle-checkbox").isChecked=c,c?o("dark","light"):o("light","dark"),t(c),window.addEventListener("mouseup",function(e){var t=document.querySelector(".options-box");e.target!=t&&e.target.parentNode!=t&&t.classList.add("hidden")}),document.querySelector(".select").addEventListener("click",function(){!function(){let e=document.querySelector(".options-box");e.style.display="inline"===e.style.display?"none":"inline"}()}),document.querySelector(".toggle").addEventListener("click",function(){var e;let n,o=document.querySelector(".toggle-checkbox");o.isChecked=!o.isChecked,e=o.isChecked,(n=document.querySelector("html")).classList.toggle("light"),n.classList.toggle("dark"),e?s("dark"):s("light"),t(o.isChecked)}),function(){for(let t of document.querySelectorAll(".font-link-js"))t.addEventListener("click",function(){let o="Sans Serif"===t.innerHTML?"sans-serif":"Serif"===t.innerHTML?"serif":"monospace";n(o),e(t.innerHTML,o)})}(),document.querySelector(".search").addEventListener("keypress",async function(e){"Enter"===e.key&&i(e)}),document.querySelector(".search-icon").addEventListener("click",async function(e){i(e)})});
//# sourceMappingURL=index.f6e0b393.js.map
