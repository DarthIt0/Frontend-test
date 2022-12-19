(()=>{"use strict";var e={4647:(e,r,t)=>{var n=t(1957),o=t(213),a=t(499),i=t(9835);function l(e,r,t,n,o,a){const l=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(l)}const s=(0,i.aZ)({name:"App"});var u=t(1639);const c=(0,u.Z)(s,[["render",l]]),d=c;var p=t(3340),f=t(8339);const h=[{path:"/",component:()=>Promise.all([t.e(736),t.e(203)]).then(t.bind(t,8096)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(336)]).then(t.bind(t,3722))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([t.e(736),t.e(862)]).then(t.bind(t,1862))}],v=h,m=(0,p.BC)((function(){const e=f.r5,r=(0,f.p7)({scrollBehavior:()=>({left:0,top:0}),routes:v,history:e("")});return r}));async function b(e,r){const t=e(d);t.use(o.Z,r);const n=(0,a.Xl)("function"===typeof m?await m({}):m);return{app:t,router:n}}const g={config:{}};async function y({app:e,router:r}){e.use(r),e.mount("#q-app")}b(n.ri,g).then(y)}},r={};function t(n){var o=r[n];if(void 0!==o)return o.exports;var a=r[n]={exports:{}};return e[n].call(a.exports,a,a.exports,t),a.exports}t.m=e,(()=>{var e=[];t.O=(r,n,o,a)=>{if(!n){var i=1/0;for(c=0;c<e.length;c++){for(var[n,o,a]=e[c],l=!0,s=0;s<n.length;s++)(!1&a||i>=a)&&Object.keys(t.O).every((e=>t.O[e](n[s])))?n.splice(s--,1):(l=!1,a<i&&(i=a));if(l){e.splice(c--,1);var u=o();void 0!==u&&(r=u)}}return r}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[n,o,a]}})(),(()=>{t.n=e=>{var r=e&&e.__esModule?()=>e["default"]:()=>e;return t.d(r,{a:r}),r}})(),(()=>{t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})}})(),(()=>{t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((r,n)=>(t.f[n](e,r),r)),[]))})(),(()=>{t.u=e=>"js/"+e+"."+{203:"7d74352f",336:"5e699981",862:"2d033cef"}[e]+".js"})(),(()=>{t.miniCssF=e=>"css/"+({143:"app",736:"vendor"}[e]||e)+"."+{143:"31d6cfe0",336:"9beeb720",736:"0ff4b9e7"}[e]+".css"})(),(()=>{t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r)})(),(()=>{var e={},r="quasar-project:";t.l=(n,o,a,i)=>{if(e[n])e[n].push(o);else{var l,s;if(void 0!==a)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==r+a){l=d;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,t.nc&&l.setAttribute("nonce",t.nc),l.setAttribute("data-webpack",r+a),l.src=n),e[n]=[o];var p=(r,t)=>{l.onerror=l.onload=null,clearTimeout(f);var o=e[n];if(delete e[n],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((e=>e(t))),r)return r(t)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),(()=>{t.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{t.p=""})(),(()=>{var e=(e,r,t,n)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=a=>{if(o.onerror=o.onload=null,"load"===a.type)t();else{var i=a&&("load"===a.type?"missing":a.type),l=a&&a.target&&a.target.href||r,s=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=l,o.parentNode.removeChild(o),n(s)}};return o.onerror=o.onload=a,o.href=r,document.head.appendChild(o),o},r=(e,r)=>{for(var t=document.getElementsByTagName("link"),n=0;n<t.length;n++){var o=t[n],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===r))return o}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){o=i[n],a=o.getAttribute("data-href");if(a===e||a===r)return o}},n=n=>new Promise(((o,a)=>{var i=t.miniCssF(n),l=t.p+i;if(r(i,l))return o();e(n,l,o,a)})),o={143:0};t.f.miniCss=(e,r)=>{var t={336:1};o[e]?r.push(o[e]):0!==o[e]&&t[e]&&r.push(o[e]=n(e).then((()=>{o[e]=0}),(r=>{throw delete o[e],r})))}})(),(()=>{var e={143:0};t.f.j=(r,n)=>{var o=t.o(e,r)?e[r]:void 0;if(0!==o)if(o)n.push(o[2]);else{var a=new Promise(((t,n)=>o=e[r]=[t,n]));n.push(o[2]=a);var i=t.p+t.u(r),l=new Error,s=n=>{if(t.o(e,r)&&(o=e[r],0!==o&&(e[r]=void 0),o)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;l.message="Loading chunk "+r+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,o[1](l)}};t.l(i,s,"chunk-"+r,r)}},t.O.j=r=>0===e[r];var r=(r,n)=>{var o,a,[i,l,s]=n,u=0;if(i.some((r=>0!==e[r]))){for(o in l)t.o(l,o)&&(t.m[o]=l[o]);if(s)var c=s(t)}for(r&&r(n);u<i.length;u++)a=i[u],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(c)},n=globalThis["webpackChunkquasar_project"]=globalThis["webpackChunkquasar_project"]||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))})();var n=t.O(void 0,[736],(()=>t(4647)));n=t.O(n)})();