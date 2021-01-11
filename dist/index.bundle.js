(()=>{"use strict";var n={541:(n,e,t)=>{t.d(e,{Z:()=>i});var o=t(645),r=t.n(o)()((function(n){return n[1]}));r.push([n.id,"/*! modern-normalize v1.0.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\n\n:root {\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n     tab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/*\nSections\n========\n*/\n\n/**\nRemove the margin in all browsers.\n*/\n\nbody {\n  margin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\n\nbody {\n  font-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\n/**\nAdd the correct font size in all browsers.\n*/\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\n\nbutton { /* 1 */\n  text-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\n/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\n\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\n\n/**\n * Work around a Firefox/IE bug where the transparent `button` background\n * results in a loss of the default `button` focus styles.\n */\n\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\n\nhtml {\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 1 */\n  line-height: 1.5; /* 2 */\n}\n\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\n\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\n\nimg {\n  border-style: solid;\n}\n\ninput::-moz-placeholder {\n  color: #9ca3af;\n}\n\ninput:-ms-input-placeholder {\n  color: #9ca3af;\n}\n\ninput::placeholder {\n  color: #9ca3af;\n}\n\nbutton {\n  cursor: pointer;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\n\nbutton,\ninput {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\n\n/**\n * Make replaced elements `display: block` by default as that's\n * the behavior you want almost all of the time. Inspired by\n * CSS Remedy, with `svg` added as well.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nsvg {\n  display: block;\n  vertical-align: middle;\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their instrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));\n}\n\n.bg-red-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(254, 226, 226, var(--tw-bg-opacity));\n}\n\n.bg-green-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(209, 250, 229, var(--tw-bg-opacity));\n}\n\n.hover\\:bg-red-400:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgba(248, 113, 113, var(--tw-bg-opacity));\n}\n\n.hover\\:bg-green-400:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgba(52, 211, 153, var(--tw-bg-opacity));\n}\n\n.bg-gradient-to-r {\n  background-image: linear-gradient(to right, var(--tw-gradient-stops));\n}\n\n.from-green-400 {\n  --tw-gradient-from: #34d399;\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(52, 211, 153, 0));\n}\n\n.to-blue-500 {\n  --tw-gradient-to: #3b82f6;\n}\n\n.border-gray-200 {\n  --tw-border-opacity: 1;\n  border-color: rgba(229, 231, 235, var(--tw-border-opacity));\n}\n\n.border-gray-300 {\n  --tw-border-opacity: 1;\n  border-color: rgba(209, 213, 219, var(--tw-border-opacity));\n}\n\n.border-blue-200 {\n  --tw-border-opacity: 1;\n  border-color: rgba(191, 219, 254, var(--tw-border-opacity));\n}\n\n.rounded {\n  border-radius: 0.25rem;\n}\n\n.rounded-lg {\n  border-radius: 0.5rem;\n}\n\n.border-2 {\n  border-width: 2px;\n}\n\n.border {\n  border-width: 1px;\n}\n\n.border-b {\n  border-bottom-width: 1px;\n}\n\n.flex {\n  display: flex;\n}\n\n.inline-flex {\n  display: inline-flex;\n}\n\n.flex-row {\n  flex-direction: row;\n}\n\n.flex-col {\n  flex-direction: column;\n}\n\n.items-center {\n  align-items: center;\n}\n\n.self-center {\n  align-self: center;\n}\n\n.justify-center {\n  justify-content: center;\n}\n\n.justify-between {\n  justify-content: space-between;\n}\n\n.font-medium {\n  font-weight: 500;\n}\n\n.font-bold {\n  font-weight: 700;\n}\n\n.h-4 {\n  height: 1rem;\n}\n\n.h-10 {\n  height: 2.5rem;\n}\n\n.h-24 {\n  height: 6rem;\n}\n\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n\n.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n\n.text-5xl {\n  font-size: 3rem;\n  line-height: 1;\n}\n\n.mr-3 {\n  margin-right: 0.75rem;\n}\n\n.mt-6 {\n  margin-top: 1.5rem;\n}\n\n.ml-6 {\n  margin-left: 1.5rem;\n}\n\n.max-w-xs {\n  max-width: 20rem;\n}\n\n.min-h-screen {\n  min-height: 100vh;\n}\n\n.focus\\:outline-none:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n\n.p-2 {\n  padding: 0.5rem;\n}\n\n.p-4 {\n  padding: 1rem;\n}\n\n.py-1 {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}\n\n.px-2 {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n\n.pr-16 {\n  padding-right: 4rem;\n}\n\n.fixed {\n  position: fixed;\n}\n\n.absolute {\n  position: absolute;\n}\n\n.relative {\n  position: relative;\n}\n\n.right-0 {\n  right: 0px;\n}\n\n.top-3 {\n  top: 0.75rem;\n}\n\n* {\n  --tw-shadow: 0 0 #0000;\n}\n\n.shadow-lg {\n  --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.shadow-xl {\n  --tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n* {\n  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n}\n\n.fill-current {\n  fill: currentColor;\n}\n\n.text-gray-500 {\n  --tw-text-opacity: 1;\n  color: rgba(107, 114, 128, var(--tw-text-opacity));\n}\n\n.text-gray-600 {\n  --tw-text-opacity: 1;\n  color: rgba(75, 85, 99, var(--tw-text-opacity));\n}\n\n.text-red-500 {\n  --tw-text-opacity: 1;\n  color: rgba(239, 68, 68, var(--tw-text-opacity));\n}\n\n.text-green-500 {\n  --tw-text-opacity: 1;\n  color: rgba(16, 185, 129, var(--tw-text-opacity));\n}\n\n.text-indigo-400 {\n  --tw-text-opacity: 1;\n  color: rgba(129, 140, 248, var(--tw-text-opacity));\n}\n\n.hover\\:text-white:hover {\n  --tw-text-opacity: 1;\n  color: rgba(255, 255, 255, var(--tw-text-opacity));\n}\n\n.w-4 {\n  width: 1rem;\n}\n\n.w-10 {\n  width: 2.5rem;\n}\n\n.w-24 {\n  width: 6rem;\n}\n\n.w-72 {\n  width: 18rem;\n}\n\n.w-full {\n  width: 100%;\n}\n\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes ping {\n  75%, 100% {\n    transform: scale(2);\n    opacity: 0;\n  }\n}\n\n@keyframes pulse {\n  50% {\n    opacity: .5;\n  }\n}\n\n@keyframes bounce {\n  0%, 100% {\n    transform: translateY(-25%);\n    -webkit-animation-timing-function: cubic-bezier(0.8,0,1,1);\n            animation-timing-function: cubic-bezier(0.8,0,1,1);\n  }\n\n  50% {\n    transform: none;\n    -webkit-animation-timing-function: cubic-bezier(0,0,0.2,1);\n            animation-timing-function: cubic-bezier(0,0,0.2,1);\n  }\n}",""]);const i=r},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,o){"string"==typeof n&&(n=[[null,n,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var s=0;s<n.length;s++){var d=[].concat(n[s]);o&&r[d[0]]||(t&&(d[2]?d[2]="".concat(t," and ").concat(d[2]):d[2]=t),e.push(d))}},e}},379:(n,e,t)=>{var o,r=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),i=[];function a(n){for(var e=-1,t=0;t<i.length;t++)if(i[t].identifier===n){e=t;break}return e}function s(n,e){for(var t={},o=[],r=0;r<n.length;r++){var s=n[r],d=e.base?s[0]+e.base:s[0],c=t[d]||0,l="".concat(d," ").concat(c);t[d]=c+1;var u=a(l),h={css:s[1],media:s[2],sourceMap:s[3]};-1!==u?(i[u].references++,i[u].updater(h)):i.push({identifier:l,updater:p(h,e),references:1}),o.push(l)}return o}function d(n){var e=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var i=t.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(n){e.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(e);else{var a=r(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var c,l=(c=[],function(n,e){return c[n]=e,c.filter(Boolean).join("\n")});function u(n,e,t,o){var r=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=l(e,r);else{var i=document.createTextNode(r),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function h(n,e,t){var o=t.css,r=t.media,i=t.sourceMap;if(r?n.setAttribute("media",r):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var m=null,f=0;function p(n,e){var t,o,r;if(e.singleton){var i=f++;t=m||(m=d(e)),o=u.bind(null,t,i,!1),r=u.bind(null,t,i,!0)}else t=d(e),o=h.bind(null,t,e),r=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else r()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var t=s(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<t.length;o++){var r=a(t[o]);i[r].references--}for(var d=s(n,e),c=0;c<t.length;c++){var l=a(t[c]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}t=d}}}}},e={};function t(o){if(e[o])return e[o].exports;var r=e[o]={id:o,exports:{}};return n[o](r,r.exports,t),r.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n=t(379),e=t.n(n),o=t(541);e()(o.Z,{insert:"head",singleton:!1}),o.Z.locals,document.querySelector("nav"),document.querySelector("main");const r=document.querySelector("#form"),i=document.querySelector("#temp"),a=document.querySelector("#city"),s=document.querySelector("#feels-like"),d=document.querySelector("#humid"),c=document.querySelector("#wind"),l=document.querySelector("#cloud"),u=document.querySelector("#sunrise"),h=document.querySelector("#sunset"),m=document.createElement("img");document.querySelector("#icon").appendChild(m);const f=document.querySelector("#description"),p=document.querySelector("#fahrenheit"),b=document.querySelector("#celsius"),g=document.querySelector("#error-msg"),y=document.querySelector("section"),w=document.querySelector("#content");y.removeChild(w);const v=n=>new Date(1e3*n).toLocaleTimeString(),x=async n=>{const e=await(async n=>{const e=`https://api.openweathermap.org/data/2.5/weather?q=${n}&appid=b65d7b54d34b0aecf82c86c39aabf664&units=metric`;return await fetch(e).then((n=>n.json())).catch((n=>n))})(n),t=Math.round(3600*e.wind.speed/1610.3);return{city:e.name,temp:e.main.temp,feelsLike:Math.round(e.main.feels_like),humid:e.main.humidity,wind:t,clouds:e.clouds.all,sunrise:v(e.sys.sunrise),sunset:v(e.sys.sunset),image:e.weather[0].icon,desc:e.weather[0].description}},S=n=>9*n/5+32,k=async n=>{const e=await(async n=>{const e=`https://api.unsplash.com/search/photos?query=${n}&orientation=landscape&client_id=OJAyay-kVuDWzP_QDkmOt3FSIhl7sRhk7oOcZQbE70k`;return await fetch(e).then((n=>n.json())).catch((n=>n))})(n);return document.body.style.background=`url(${e.results[0].urls.regular})`,document.body.style.backgroundRepeat="no-repeat",document.body.style.backgroundAttachment="fixed",document.body.style.backgroundPosition="center",document.body.style.backgroundSize="cover",n};let C;const z=n=>{a.textContent=n.city,i.textContent=!0===C?`${S(Math.round(n.temp))}°F`:`${Math.round(n.temp)}°C`,s.textContent=!0===C?`${S(Math.round(n.feelsLike))}°F`:`${Math.round(n.feelsLike)}°C`,d.textContent=`${n.humid}%`,c.textContent=`${n.wind} mph`,l.textContent=`${n.clouds}%`,u.textContent=n.sunrise,h.textContent=n.sunset,m.src=`https://openweathermap.org/img/wn/${n.image}@2x.png`,f.textContent=n.desc};b.addEventListener("click",(n=>{n.preventDefault(),C=!1;const e=document.querySelector("#city").textContent;x(e).then((n=>z(n)))})),p.addEventListener("click",(n=>{n.preventDefault(),C=!0;const e=document.querySelector("#city").textContent;x(e).then((n=>z(n)))}));const q=()=>g.textContent="Enter a valid city";r.addEventListener("submit",(n=>{n.preventDefault();const e=document.querySelector("#city-name").value.toLowerCase();""===e?q()&&y.removeChild(w):k(e).then((n=>k(n))).catch((n=>q()))&&y.appendChild(w)&&x(e).then((n=>z(n))).catch((n=>q()))&&(g.innerHTML=""),document.body.style.background="none",r.reset()}))})()})();