function e(e,t){let n=document.querySelector(".select").firstElementChild;n.innerHTML=e,n.style.fontFamily=t}function t(e){var t;t=e?"20px":"0px",document.querySelector(".toggle-button").style.transform=`translateX(${t})`}function n(e){let t=document.querySelector("html");t.classList.remove("sans-serif"),t.classList.remove("serif"),t.classList.remove("monospace"),t.classList.add(e),localStorage.setItem("fontFamily",e)}function r(e,t){let n=document.querySelector("html");n.classList.add(e),n.classList.remove(t)}function o(e){localStorage.setItem("theme",e)}function s(e,t){return e?`<div class="${t}">"${e}"</div>`:""}async function c(e){let t=document.querySelector(".search").value;if(document.querySelector(".content").innerHTML="",t){document.querySelector(".loader").classList.remove("hidden"),document.querySelector(".validation").classList.add("hidden"),document.querySelector(".search").classList.remove("error");try{let e=await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/"+t).then(e=>{if(e.ok)return e.json();throw Error("Big error")}).then(e=>JSON.stringify(e)).catch(e=>{throw Error("Big error 2")});i(),function(e){let t;let n=JSON.parse(e);document.querySelector(".content").innerHTML=(t="",n.forEach(e=>{var n;let r;t+=`<article class="article">
            <header class="results-header">
                <div class="results-header-container">
        <div class="search-fraze">${e.word}</div>
        ${s(e.phonetic,"pronouncation")}
    </div>
                ${function(e){let t,n="";for(let n of e)if(n.audio){t=n.audio;break}return t&&(n=`<div class="audio">
            <audio class="audio" src="${t}" autostart="false"></audio>
            <button class="play-button" onclick="playAudio(this);"></button>
        </div>`),n}(e.phonetics)}
            </header>
            <main class="definition">
                ${n=e.meanings,r="",n.forEach(e=>{var t,n;let o,c,i;r+=`<span class='part-of-speech'>
            ${e.partOfSpeech.toLowerCase()}
            <span class="line"></span>
        </span>
        <div class="meaning-container">
            <div class="meanings-header">Meaning</div>
            <ul class="meaning">
                ${t=e.definitions,o="",t.forEach(e=>{e.definition&&(o+=`<li>
                ${e.definition}
            </li>
            ${s(e.example,"example")}`)}),o}
            </ul>
        </div>
        ${n=e.synonyms,c="",n&&n.length>0&&(c=`<div class="synonyms">
            <div class="synonyms-header">Synonyms</div>
            <div class="synonyms-list">${i="",n.forEach(e=>{i+=e+" "}),i}</div>
        </div>`),c}`}),r}
            </main>
            <footer>
                <span class="line"></span>
            </footer>
        </article>`}),t),document.querySelector("footer").classList.remove("hidden")}(e),document.querySelector(".error-content").classList.add("hidden")}catch(e){i(),document.querySelector(".error-content").classList.remove("hidden")}}else{let e;document.querySelector(".validation").classList.remove("hidden"),(e=document.querySelector(".search")).classList.add("error"),e.classList.remove("search-focus"),document.querySelector(".content").innerHTML=""}}function i(){document.querySelector(".loader").classList.add("hidden")}document.addEventListener("DOMContentLoaded",function(){let s,i;n(s=localStorage.getItem("fontFamily")??"sans-serif"),e(function(e){switch(e){case"sans-serif":return"Sans Serif";case"serif":return"Serif";case"monospace":return"Mono";default:return null}}(s)??"Sans Serif",s),i="dark"===(localStorage.getItem("theme")??"light"),document.querySelector(".toggle-checkbox").isChecked=i,i?r("dark","light"):r("light","dark"),t(i),window.addEventListener("mouseup",function(e){var t=document.querySelector(".options-box");e.target!=t&&e.target.parentNode!=t&&t.classList.add("hidden")}),document.querySelector(".select").addEventListener("click",function(){document.querySelector(".options-box").classList.toggle("hidden")}),document.querySelector(".toggle").addEventListener("click",function(){var e;let n,r=document.querySelector(".toggle-checkbox");r.isChecked=!r.isChecked,e=r.isChecked,(n=document.querySelector("html")).classList.toggle("light"),n.classList.toggle("dark"),e?o("dark"):o("light"),t(r.isChecked)}),function(){for(let t of document.querySelectorAll(".font-link-js"))t.addEventListener("click",function(){let r="Sans Serif"===t.innerHTML?"sans-serif":"Serif"===t.innerHTML?"serif":"monospace";n(r),e(t.innerHTML,r)})}(),document.querySelector(".search").addEventListener("keypress",async function(e){"Enter"===e.key&&c(e)}),document.querySelector(".search-icon").addEventListener("click",async function(e){c(e)})});
//# sourceMappingURL=index.baf640bb.js.map
