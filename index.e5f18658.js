// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"7ENHu":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "07860fbde5f18658";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"1Jxk5":[function(require,module,exports) {
var _dropdown = require("./dropdown");
var _toggle = require("./toggle");
var _fonts = require("./fonts");
var _theme = require("./theme");
var _api = require("./api");
var _html = require("./html");
var _validation = require("./validation");
document.addEventListener("DOMContentLoaded", function() {
    setDefaultValues();
    hideOptionsBoxWhenClickedOutside();
    addDropdownEventListener();
    addToggleEventListener();
    addFontOptionListener();
    addSubmitEventListeners();
    addSearchEventListener();
});
function addSearchEventListener() {
    let searchIcon = document.querySelector(".search-icon");
    searchIcon.addEventListener("click", async function(e) {
        search(e);
    });
}
function addSubmitEventListeners() {
    let typingTimer;
    let doneTypingInterval = 500;
    let searchInput = document.querySelector(".search");
    searchInput.addEventListener("keyup", async function(e) {
        if (e.key.length === 1 || e.key === "Delete" || e.key === "Backspace") {
            clearTimeout(typingTimer);
            typingTimer = setTimeout(()=>{
                search(e);
            }, doneTypingInterval);
        }
    });
    searchInput.addEventListener("keydown", async function(e) {
        if (e.key === "Enter") search(e);
        if (e.key.length === 1 || e.key === "Delete" || e.key === "Backspace") clearTimeout(typingTimer);
    });
}
async function search(e) {
    let searchInput = document.querySelector(".search");
    let searchFraze = searchInput.value;
    document.querySelector(".content").innerHTML = "";
    if (searchFraze) {
        showLoader();
        _validation.removeSearchInputValidation();
        try {
            let result = await _api.getApiData(searchFraze);
            hideLoader();
            displayResult(result);
            hideError();
        } catch (e) {
            hideLoader();
            displayError();
        }
    } else _validation.addSearchInputValidation();
}
function showLoader() {
    document.querySelector(".loader").classList.remove("hidden");
}
function hideLoader() {
    document.querySelector(".loader").classList.add("hidden");
}
function hideError() {
    let error = document.querySelector(".error-content");
    error.classList.add("hidden");
}
function displayError() {
    let error = document.querySelector(".error-content");
    error.classList.remove("hidden");
}
function displayResult(result) {
    const jsonList = JSON.parse(result);
    document.querySelector(".content").innerHTML = _html.getArticleHtml(jsonList);
    let footer = document.querySelector("footer");
    footer.classList.remove("hidden");
}
function hideOptionsBoxWhenClickedOutside() {
    window.addEventListener("mouseup", function(event) {
        var box = document.querySelector(".options-box");
        if (event.target != box && event.target.parentNode != box) box.classList.add("hidden");
    });
}
function setDefaultValues() {
    _fonts.setSavedOrDefaultFont();
    _theme.setSavedOrDefaultThemeOnElement();
}
function addDropdownEventListener() {
    document.querySelector(".select").addEventListener("click", function() {
        _dropdown.displayDropdownOptions();
    });
}
function addToggleEventListener() {
    document.querySelector(".toggle").addEventListener("click", function() {
        let checkbox = document.querySelector(".toggle-checkbox");
        checkbox.isChecked = !checkbox.isChecked;
        _theme.changeThemeOnElement(checkbox.isChecked);
        _toggle.setTogglePositionByIsCheckedValue(checkbox.isChecked);
    });
}
function addFontOptionListener() {
    let links = document.querySelectorAll(".font-link-js");
    for (let link of links)link.addEventListener("click", function() {
        let fontFamily = link.innerHTML === "Sans Serif" ? "sans-serif" : link.innerHTML === "Serif" ? "serif" : "monospace";
        _fonts.changeFont(fontFamily);
        _dropdown.changeDropdownDisplay(link.innerHTML, fontFamily);
    });
}

},{"./dropdown":"k9Fs8","./toggle":"4dVGB","./fonts":"hgVc3","./theme":"bTBbp","./api":"9u7qN","./html":"bYo64","./validation":"1Gxkx"}],"k9Fs8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "displayDropdownOptions", ()=>displayDropdownOptions);
parcelHelpers.export(exports, "changeDropdownDisplay", ()=>changeDropdownDisplay);
var _constants = require("./constants");
function displayDropdownOptions() {
    const options = document.querySelector(".options-box");
    options.classList.toggle("hidden");
}
function changeDropdownDisplay(fontName, fontFamily) {
    let select = document.querySelector(".select").firstElementChild;
    select.innerHTML = fontName;
    select.style.fontFamily = fontFamily;
}

},{"./constants":"itKcQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"itKcQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "apiUrl", ()=>apiUrl);
const apiUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"4dVGB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setTogglePositionByIsCheckedValue", ()=>setTogglePositionByIsCheckedValue);
function changeTogglePosition(translateX) {
    let toggleButton = document.querySelector(".toggle-button");
    toggleButton.style.transform = `translateX(${translateX})`;
}
function setTogglePositionByIsCheckedValue(isChecked) {
    let toggleTranslateX = isChecked ? "20px" : "0px";
    changeTogglePosition(toggleTranslateX);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hgVc3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "changeFont", ()=>changeFont);
parcelHelpers.export(exports, "saveSelectedFontInLocalStorage", ()=>saveSelectedFontInLocalStorage);
parcelHelpers.export(exports, "getFontFromLocalStorageOrDefault", ()=>getFontFromLocalStorageOrDefault);
parcelHelpers.export(exports, "getFontNameByFontFamily", ()=>getFontNameByFontFamily);
parcelHelpers.export(exports, "setSavedOrDefaultFont", ()=>setSavedOrDefaultFont);
var _dropdown = require("./dropdown");
function changeFont(fontFamily) {
    let html = document.querySelector("html");
    html.classList.remove("sans-serif");
    html.classList.remove("serif");
    html.classList.remove("monospace");
    html.classList.add(fontFamily);
    saveSelectedFontInLocalStorage(fontFamily);
}
function saveSelectedFontInLocalStorage(fontFamily) {
    localStorage.setItem("fontFamily", fontFamily);
}
function getFontFromLocalStorageOrDefault() {
    return localStorage.getItem("fontFamily") ?? "sans-serif";
}
function getFontNameByFontFamily(fontFamily) {
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
function setSavedOrDefaultFont() {
    let font = getFontFromLocalStorageOrDefault();
    changeFont(font);
    let fontName = getFontNameByFontFamily(font);
    _dropdown.changeDropdownDisplay(fontName ?? "Sans Serif", font);
}

},{"./dropdown":"k9Fs8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bTBbp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setSavedOrDefaultThemeOnElement", ()=>setSavedOrDefaultThemeOnElement);
parcelHelpers.export(exports, "setThemeOnElement", ()=>setThemeOnElement);
parcelHelpers.export(exports, "changeThemeOnElement", ()=>changeThemeOnElement);
parcelHelpers.export(exports, "saveSelectedThemeInLocalStorage", ()=>saveSelectedThemeInLocalStorage);
parcelHelpers.export(exports, "getThemeFromLocalStorageOrDefault", ()=>getThemeFromLocalStorageOrDefault);
var _toggle = require("./toggle");
function setSavedOrDefaultThemeOnElement() {
    let theme = getThemeFromLocalStorageOrDefault();
    let isChecked = theme === "dark";
    document.querySelector(".toggle-checkbox").isChecked = isChecked;
    !isChecked ? setThemeOnElement("light", "dark") : setThemeOnElement("dark", "light");
    _toggle.setTogglePositionByIsCheckedValue(isChecked);
}
function setThemeOnElement(added, removed) {
    let html = document.querySelector("html");
    html.classList.add(added);
    html.classList.remove(removed);
}
function changeThemeOnElement(isChecked) {
    let html = document.querySelector("html");
    html.classList.toggle("light");
    html.classList.toggle("dark");
    isChecked ? saveSelectedThemeInLocalStorage("dark") : saveSelectedThemeInLocalStorage("light");
}
function saveSelectedThemeInLocalStorage(theme) {
    localStorage.setItem("theme", theme);
}
function getThemeFromLocalStorageOrDefault() {
    let theme;
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) theme = "dark";
    else theme = "light";
    return localStorage.getItem("theme") ?? theme;
}

},{"./toggle":"4dVGB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9u7qN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getApiData", ()=>getApiData);
var _constants = require("./constants");
function getApiData(searchFraze) {
    const apiUrl = _constants.apiUrl + searchFraze;
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

},{"./constants":"itKcQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bYo64":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getArticleHtml", ()=>getArticleHtml);
function getArticleHtml(jsonList) {
    let html = "";
    jsonList.forEach((element)=>{
        html += `<article class="article">
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
        </article>`;
    });
    return html;
}
function getAudioHtml(listOfPhonetics) {
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
function getResultsHeaderHtml(jsonElement) {
    let html = "";
    html = `<div class="results-header-container">
        <div class="search-fraze">${jsonElement.word}</div>
        ${displayElementIfExists(jsonElement.phonetic, "pronouncation")}
    </div>`;
    return html;
}
function getDefinitionHtml(jsonList) {
    let html = "";
    jsonList.forEach((element)=>{
        html += `<span class='part-of-speech'>
            ${element.partOfSpeech.toLowerCase()}
            <span class="line"></span>
        </span>
        <div class="meaning-container">
            <div class="meanings-header">Meaning</div>
            <ul class="meaning">
                ${displayExpressionMeanings(element.definitions)}
            </ul>
        </div>
        ${displaySynonymsHtml(element.synonyms)}`;
    });
    return html;
}
function displaySynonymsHtml(jsonElement) {
    let html = "";
    if (jsonElement && jsonElement.length > 0) html = `<div class="synonyms">
            <div class="synonyms-header">Synonyms</div>
            <div class="synonyms-list">${displaySynonymsList(jsonElement)}</div>
        </div>`;
    return html;
}
function displaySynonymsList(synonyms) {
    let html = "";
    synonyms.forEach((element)=>{
        html += element + " ";
    });
    return html;
}
function displayExpressionMeanings(listOfMeanings) {
    let list = "";
    listOfMeanings.forEach((element)=>{
        if (element.definition) list += `<li>
                ${element.definition}
            </li>
            ${displayElementIfExists(element.example, "example")}`;
    });
    return list;
}
function displayElementIfExists(element, className) {
    if (element) return `<div class="${className}">"${element}"</div>`;
    return "";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Gxkx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "removeSearchInputValidation", ()=>removeSearchInputValidation);
parcelHelpers.export(exports, "addSearchInputValidation", ()=>addSearchInputValidation);
function removeSearchInputValidation() {
    let validation = document.querySelector(".validation");
    validation.classList.add("hidden");
    let searchField = document.querySelector(".search");
    searchField.classList.remove("error");
}
function addSearchInputValidation() {
    let validation = document.querySelector(".validation");
    validation.classList.remove("hidden");
    let searchField = document.querySelector(".search");
    searchField.classList.add("error");
    searchField.classList.remove("search-focus");
    removeContent();
}
function removeContent() {
    let content = document.querySelector(".content");
    content.innerHTML = "";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["7ENHu","1Jxk5"], "1Jxk5", "parcelRequire31c6")

//# sourceMappingURL=index.e5f18658.js.map
