import{j as O}from"./jsx-runtime-CexXSJP5.js";import{r as m,c as V,g as Be}from"./index-BP8_t0zE.js";import{c as me}from"./classNames-DgDD4s-s.js";import{L as Re}from"./LangSwitcher-2UZFZLi-.js";import{T as Ie}from"./ThemeSwitcher-CXJ3DcCg.js";import{B as qe,a as Ue,b as Fe}from"./Button-DnnjDDNB.js";import{A as Ne,a as Ze}from"./AppLink-BLIfsRU5.js";import{e as ye,h as Xe}from"./scrollSave-CvpIp14x.js";import"./userSlice-WveEQYTL.js";import{g as ge}from"./getUserAuthData-Bm7Ac1PY.js";import{s as $e,a as ze,I as Ge,u as Ke}from"./useTranslation-B2QVmqVC.js";import{R}from"./routeConfig-C3UT4L8y.js";import{T as Qe,a as We}from"./ThemeDecorator-_gfN7HEO.js";import{i as be}from"./localStorage-CnWtazwr.js";import{c as Je}from"./_commonjs-dynamic-modules-TDtrdbi3.js";import{M as Ye}from"./index-BhItUGrV.js";import"./useTheme-DNLmAFmY.js";import"./index-C_MfmDJz.js";import"./index-DJkmxc1E.js";import"./iframe-MtPL-6XE.js";import"../sb-preview/runtime.js";import"./NotFoundPage-DMQjtlN9.js";import"./Page-D7cPgsF5.js";function et(n,e){for(var r=0;r<e.length;r++){const t=e[r];if(typeof t!="string"&&!Array.isArray(t)){for(const i in t)if(i!=="default"&&!(i in n)){const a=Object.getOwnPropertyDescriptor(t,i);a&&Object.defineProperty(n,i,a.get?a:{enumerable:!0,get:()=>t[i]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}const tt={type:"3rdParty",init(n){$e(n.options.react),ze(n)}};function rt({i18n:n,defaultNS:e,children:r}){const t=m.useMemo(()=>({i18n:n,defaultNS:e}),[n,e]);return m.createElement(Ge.Provider,{value:t},r)}const nt="_Sidebar_149zx_1",ot="_switchers_149zx_10",it="_lang_149zx_18",st="_collapseBtn_149zx_22",at="_items_149zx_29",ft="_collapsed_149zx_36",H={Sidebar:nt,switchers:ot,lang:it,collapseBtn:st,items:at,collapsed:ft},ct="_item_ih6z0_1",ut="_link_ih6z0_7",lt="_icon_ih6z0_12",dt="_collapsed_ih6z0_16",I={item:ct,link:ut,icon:lt,collapsed:dt},we=m.memo(n=>{const{item:e,collapsed:r}=n,{t}=Ke(""),i=ye(ge);return e.authOnly&&!i?null:O.jsxs(Ne,{className:me(I.item,{[I.collapsed]:r}),to:e.path,theme:Ze.SECONDARY,children:[O.jsx(e.Icon,{className:I.icon}),O.jsx("span",{className:I.link,children:t(e.text)})]})});we.__docgenInfo={description:"",methods:[],displayName:"SidebarItem",props:{item:{required:!0,tsType:{name:"SidebarItemType"},description:""},collapsed:{required:!0,tsType:{name:"boolean"},description:""}}};const ht=n=>m.createElement("svg",{width:20,height:20,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",...n},m.createElement("path",{d:"M8.33333 6.66667H13.3333V7.77778H8.33333V6.66667Z"}),m.createElement("path",{d:"M8.33333 8.88889H13.3333V10H8.33333V8.88889Z"}),m.createElement("path",{d:"M8.33333 11.1111H13.3333V12.2222H8.33333V11.1111Z"}),m.createElement("path",{d:"M8.33333 13.3333H13.3333V14.4444H8.33333V13.3333Z"}),m.createElement("path",{d:"M6.11111 4.44444H7.22222V5.55555H6.11111V4.44444Z"}),m.createElement("path",{d:"M6.11111 6.66667H7.22222V7.77778H6.11111V6.66667Z"}),m.createElement("path",{d:"M6.11111 8.88889H7.22222V10H6.11111V8.88889Z"}),m.createElement("path",{d:"M6.11111 11.1111H7.22222V12.2222H6.11111V11.1111Z"}),m.createElement("path",{d:"M6.11111 13.3333H7.22222V14.4444H6.11111V13.3333Z"}),m.createElement("path",{d:"M8.33333 4.44444V5.55555H13.1444C12.9258 5.21155 12.7592 4.83714 12.65 4.44444H8.33333Z"}),m.createElement("path",{d:"M15.5555 7.34445V17.7778H4.44444V2.22223H12.6556C12.763 1.82984 12.9278 1.45544 13.1444 1.11111H4.44444C4.14975 1.11111 3.86714 1.22818 3.65877 1.43655C3.45039 1.64493 3.33333 1.92754 3.33333 2.22223V17.7778C3.33333 18.0725 3.45039 18.3551 3.65877 18.5635C3.86714 18.7718 4.14975 18.8889 4.44444 18.8889H15.5555C15.8502 18.8889 16.1328 18.7718 16.3412 18.5635C16.5496 18.3551 16.6667 18.0725 16.6667 17.7778V7.5C16.291 7.49855 15.9172 7.44622 15.5555 7.34445V7.34445Z"}),m.createElement("path",{d:"M16.6667 6.11111C18.2008 6.11111 19.4444 4.86746 19.4444 3.33333C19.4444 1.79921 18.2008 0.555557 16.6667 0.555557C15.1325 0.555557 13.8889 1.79921 13.8889 3.33333C13.8889 4.86746 15.1325 6.11111 16.6667 6.11111Z"})),pt=n=>m.createElement("svg",{width:20,height:20,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",...n},m.createElement("path",{d:"M0.414747 9.83945L8.93886 0.818743L9.51022 0.213781C9.64041 0.0768506 9.81646 0 9.99996 0C10.1835 0 10.3595 0.0768506 10.4897 0.213781L19.5852 9.83945C19.7186 9.98014 19.824 10.1477 19.8952 10.3322C19.9665 10.5168 20.0021 10.7146 19.9999 10.9139C19.9911 11.7361 19.3447 12.3924 18.5682 12.3924H17.6306V20H2.36929V12.3924H1.41187C1.03464 12.3924 0.679471 12.2359 0.412541 11.9533C0.281106 11.8146 0.176967 11.6496 0.106155 11.468C0.0353439 11.2864 -0.000732943 11.0917 1.29338e-05 10.8952C1.29338e-05 10.4981 0.147817 10.1221 0.414747 9.83945V9.83945ZM8.76458 18.3183H11.2353V13.5533H8.76458V18.3183ZM3.95764 10.7107V18.3183H7.35272V12.9927C7.35272 12.4765 7.7476 12.0584 8.23513 12.0584H11.7648C12.2523 12.0584 12.6472 12.4765 12.6472 12.9927V18.3183H16.0423V10.7107H18.1601L9.99776 2.07538L9.48816 2.61494L1.83764 10.7107H3.95764Z"})),mt=n=>m.createElement("svg",{width:20,height:20,viewBox:"0 0 10 20",xmlns:"http://www.w3.org/2000/svg",...n},m.createElement("path",{d:"M10.0742 8.27586H14.4815V9.65517H10.0742V8.27586ZM10.0742 4.82759H17V6.2069H10.0742V4.82759ZM10.0742 1.37931H17V2.75862H10.0742V1.37931ZM5.03726 20H2.51879C2.18513 19.9989 1.86541 19.8532 1.62948 19.5948C1.39354 19.3364 1.26055 18.9862 1.25955 18.6207V13.7931C0.92589 13.792 0.606177 13.6463 0.37024 13.3879C0.134303 13.1295 0.00131401 12.7793 0.000317501 12.4138V8.27586C-0.00429592 8.00277 0.0414087 7.73147 0.134699 7.47816C0.22799 7.22486 0.36695 6.99476 0.543274 6.80163C0.719598 6.60849 0.929665 6.45628 1.16092 6.35409C1.39217 6.25191 1.63985 6.20184 1.88917 6.2069H5.66688C5.9162 6.20184 6.16388 6.25191 6.39513 6.35409C6.62639 6.45628 6.83645 6.60849 7.01278 6.80163C7.1891 6.99476 7.32806 7.22486 7.42135 7.47816C7.51464 7.73147 7.56035 8.00277 7.55573 8.27586V12.4138C7.55474 12.7793 7.42175 13.1295 7.18581 13.3879C6.94987 13.6463 6.63016 13.792 6.2965 13.7931V18.6207C6.2955 18.9862 6.16251 19.3364 5.92657 19.5948C5.69064 19.8532 5.37092 19.9989 5.03726 20V20ZM1.88917 7.58621C1.80517 7.58068 1.72106 7.59473 1.64238 7.62743C1.5637 7.66013 1.49225 7.71074 1.43275 7.77592C1.37325 7.8411 1.32704 7.91936 1.29719 8.00554C1.26733 8.09172 1.2545 8.18385 1.25955 8.27586V12.4138H2.51879V18.6207H5.03726V12.4138H6.2965V8.27586C6.30155 8.18385 6.28872 8.09172 6.25886 8.00554C6.22901 7.91936 6.1828 7.8411 6.1233 7.77592C6.0638 7.71074 5.99235 7.66013 5.91367 7.62743C5.83499 7.59473 5.75088 7.58068 5.66688 7.58621H1.88917ZM3.77802 5.51724C3.27992 5.51724 2.793 5.35545 2.37884 5.05233C1.96468 4.74921 1.64188 4.31837 1.45126 3.8143C1.26064 3.31023 1.21077 2.75556 1.30795 2.22044C1.40512 1.68532 1.64498 1.19378 1.9972 0.807983C2.34941 0.422183 2.79816 0.159449 3.2867 0.0530074C3.77523 -0.0534346 4.28161 0.00119526 4.7418 0.209989C5.20199 0.418782 5.59532 0.772361 5.87206 1.22601C6.14879 1.67967 6.2965 2.21302 6.2965 2.75862C6.2945 3.48958 6.02853 4.18998 5.55665 4.70685C5.08478 5.22372 4.44535 5.51506 3.77802 5.51724V5.51724ZM3.77802 1.37931C3.52897 1.37931 3.28551 1.46021 3.07843 1.61177C2.87135 1.76333 2.70995 1.97875 2.61464 2.23078C2.51933 2.48282 2.4944 2.76015 2.54298 3.02771C2.59157 3.29527 2.7115 3.54104 2.88761 3.73394C3.06372 3.92684 3.28809 4.05821 3.53236 4.11143C3.77663 4.16465 4.02982 4.13734 4.25991 4.03294C4.49001 3.92854 4.68667 3.75175 4.82504 3.52493C4.96341 3.2981 5.03726 3.03142 5.03726 2.75862C5.03626 2.39314 4.90327 2.04294 4.66734 1.78451C4.4314 1.52607 4.11169 1.3804 3.77802 1.37931V1.37931Z"})),yt=n=>m.createElement("svg",{width:20,height:20,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",...n},m.createElement("path",{d:"M18.8889 20H1.11111C0.816426 20 0.533811 19.8946 0.325437 19.7071C0.117063 19.5196 0 19.2652 0 19V1C0 0.734784 0.117063 0.48043 0.325437 0.292893C0.533811 0.105357 0.816426 0 1.11111 0H18.8889C19.1836 0 19.4662 0.105357 19.6746 0.292893C19.8829 0.48043 20 0.734784 20 1V19C20 19.2652 19.8829 19.5196 19.6746 19.7071C19.4662 19.8946 19.1836 20 18.8889 20ZM17.7778 18V2H2.22222V18H17.7778ZM4.44444 4H8.88889V8H4.44444V4ZM4.44444 10H15.5556V12H4.44444V10ZM4.44444 14H15.5556V16H4.44444V14ZM11.1111 5H15.5556V7H11.1111V5Z"})),gt=Xe(ge,n=>{const e=[{text:"Главная",Icon:pt,path:R.main},{text:"О сайте",Icon:ht,path:R.about}];return n&&e.push({text:"Профиль",Icon:mt,path:R.profile+(n==null?void 0:n.id),authOnly:!0},{text:"Статьи",Icon:yt,path:R.articles,authOnly:!0}),e}),ve=m.memo(({className:n})=>{const[e,r]=m.useState(!0),t=ye(gt),i=()=>{r(f=>!f)},a=m.useMemo(()=>t.map(f=>O.jsx(we,{item:f,collapsed:e},f.path)),[e,t]);return O.jsxs("menu",{"data-testid":"sidebar",className:me(H.Sidebar,{[H.collapsed]:e},[n]),children:[O.jsx(qe,{"data-testid":"sidebar-toggle",theme:Ue.BACKGROUND_INVERTED,onClick:i,className:H.collapseBtn,square:!0,size:Fe.L,children:e?">":"<"}),O.jsx("div",{className:H.items,children:a}),O.jsxs("div",{className:H.switchers,children:[O.jsx(Ie,{}),O.jsx(Re,{className:H.lang,isShort:e})]})]})});ve.__docgenInfo={description:"",methods:[],displayName:"Sidebar",props:{className:{required:!1,tsType:{name:"string"},description:""}}};function $(n){"@babel/helpers - typeof";return $=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$(n)}function Se(){return typeof XMLHttpRequest=="function"||(typeof XMLHttpRequest>"u"?"undefined":$(XMLHttpRequest))==="object"}function bt(n){return!!n&&typeof n.then=="function"}function wt(n){return bt(n)?n:Promise.resolve(n)}var z={exports:{}},q={exports:{}},J;function vt(){return J||(J=1,function(n,e){var r=typeof globalThis<"u"&&globalThis||typeof self<"u"&&self||typeof V<"u"&&V,t=function(){function a(){this.fetch=!1,this.DOMException=r.DOMException}return a.prototype=r,new a}();(function(a){(function(f){var c=typeof a<"u"&&a||typeof self<"u"&&self||typeof c<"u"&&c,u={searchParams:"URLSearchParams"in c,iterable:"Symbol"in c&&"iterator"in Symbol,blob:"FileReader"in c&&"Blob"in c&&function(){try{return new Blob,!0}catch{return!1}}(),formData:"FormData"in c,arrayBuffer:"ArrayBuffer"in c};function w(o){return o&&DataView.prototype.isPrototypeOf(o)}if(u.arrayBuffer)var h=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],p=ArrayBuffer.isView||function(o){return o&&h.indexOf(Object.prototype.toString.call(o))>-1};function v(o){if(typeof o!="string"&&(o=String(o)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(o)||o==="")throw new TypeError('Invalid character in header field name: "'+o+'"');return o.toLowerCase()}function S(o){return typeof o!="string"&&(o=String(o)),o}function T(o){var s={next:function(){var l=o.shift();return{done:l===void 0,value:l}}};return u.iterable&&(s[Symbol.iterator]=function(){return s}),s}function g(o){this.map={},o instanceof g?o.forEach(function(s,l){this.append(l,s)},this):Array.isArray(o)?o.forEach(function(s){this.append(s[0],s[1])},this):o&&Object.getOwnPropertyNames(o).forEach(function(s){this.append(s,o[s])},this)}g.prototype.append=function(o,s){o=v(o),s=S(s);var l=this.map[o];this.map[o]=l?l+", "+s:s},g.prototype.delete=function(o){delete this.map[v(o)]},g.prototype.get=function(o){return o=v(o),this.has(o)?this.map[o]:null},g.prototype.has=function(o){return this.map.hasOwnProperty(v(o))},g.prototype.set=function(o,s){this.map[v(o)]=S(s)},g.prototype.forEach=function(o,s){for(var l in this.map)this.map.hasOwnProperty(l)&&o.call(s,this.map[l],l,this)},g.prototype.keys=function(){var o=[];return this.forEach(function(s,l){o.push(l)}),T(o)},g.prototype.values=function(){var o=[];return this.forEach(function(s){o.push(s)}),T(o)},g.prototype.entries=function(){var o=[];return this.forEach(function(s,l){o.push([l,s])}),T(o)},u.iterable&&(g.prototype[Symbol.iterator]=g.prototype.entries);function j(o){if(o.bodyUsed)return Promise.reject(new TypeError("Already read"));o.bodyUsed=!0}function K(o){return new Promise(function(s,l){o.onload=function(){s(o.result)},o.onerror=function(){l(o.error)}})}function Te(o){var s=new FileReader,l=K(s);return s.readAsArrayBuffer(o),l}function He(o){var s=new FileReader,l=K(s);return s.readAsText(o),l}function Ae(o){for(var s=new Uint8Array(o),l=new Array(s.length),y=0;y<s.length;y++)l[y]=String.fromCharCode(s[y]);return l.join("")}function Q(o){if(o.slice)return o.slice(0);var s=new Uint8Array(o.byteLength);return s.set(new Uint8Array(o)),s.buffer}function W(){return this.bodyUsed=!1,this._initBody=function(o){this.bodyUsed=this.bodyUsed,this._bodyInit=o,o?typeof o=="string"?this._bodyText=o:u.blob&&Blob.prototype.isPrototypeOf(o)?this._bodyBlob=o:u.formData&&FormData.prototype.isPrototypeOf(o)?this._bodyFormData=o:u.searchParams&&URLSearchParams.prototype.isPrototypeOf(o)?this._bodyText=o.toString():u.arrayBuffer&&u.blob&&w(o)?(this._bodyArrayBuffer=Q(o.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):u.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(o)||p(o))?this._bodyArrayBuffer=Q(o):this._bodyText=o=Object.prototype.toString.call(o):this._bodyText="",this.headers.get("content-type")||(typeof o=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):u.searchParams&&URLSearchParams.prototype.isPrototypeOf(o)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},u.blob&&(this.blob=function(){var o=j(this);if(o)return o;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){if(this._bodyArrayBuffer){var o=j(this);return o||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer))}else return this.blob().then(Te)}),this.text=function(){var o=j(this);if(o)return o;if(this._bodyBlob)return He(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(Ae(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},u.formData&&(this.formData=function(){return this.text().then(Me)}),this.json=function(){return this.text().then(JSON.parse)},this}var je=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function De(o){var s=o.toUpperCase();return je.indexOf(s)>-1?s:o}function E(o,s){if(!(this instanceof E))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');s=s||{};var l=s.body;if(o instanceof E){if(o.bodyUsed)throw new TypeError("Already read");this.url=o.url,this.credentials=o.credentials,s.headers||(this.headers=new g(o.headers)),this.method=o.method,this.mode=o.mode,this.signal=o.signal,!l&&o._bodyInit!=null&&(l=o._bodyInit,o.bodyUsed=!0)}else this.url=String(o);if(this.credentials=s.credentials||this.credentials||"same-origin",(s.headers||!this.headers)&&(this.headers=new g(s.headers)),this.method=De(s.method||this.method||"GET"),this.mode=s.mode||this.mode||null,this.signal=s.signal||this.signal,this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&l)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(l),(this.method==="GET"||this.method==="HEAD")&&(s.cache==="no-store"||s.cache==="no-cache")){var y=/([?&])_=[^&]*/;if(y.test(this.url))this.url=this.url.replace(y,"$1_="+new Date().getTime());else{var b=/\?/;this.url+=(b.test(this.url)?"&":"?")+"_="+new Date().getTime()}}}E.prototype.clone=function(){return new E(this,{body:this._bodyInit})};function Me(o){var s=new FormData;return o.trim().split("&").forEach(function(l){if(l){var y=l.split("="),b=y.shift().replace(/\+/g," "),d=y.join("=").replace(/\+/g," ");s.append(decodeURIComponent(b),decodeURIComponent(d))}}),s}function Ve(o){var s=new g,l=o.replace(/\r?\n[\t ]+/g," ");return l.split("\r").map(function(y){return y.indexOf(`
`)===0?y.substr(1,y.length):y}).forEach(function(y){var b=y.split(":"),d=b.shift().trim();if(d){var L=b.join(":").trim();s.append(d,L)}}),s}W.call(E.prototype);function _(o,s){if(!(this instanceof _))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');s||(s={}),this.type="default",this.status=s.status===void 0?200:s.status,this.ok=this.status>=200&&this.status<300,this.statusText=s.statusText===void 0?"":""+s.statusText,this.headers=new g(s.headers),this.url=s.url||"",this._initBody(o)}W.call(_.prototype),_.prototype.clone=function(){return new _(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new g(this.headers),url:this.url})},_.error=function(){var o=new _(null,{status:0,statusText:""});return o.type="error",o};var ke=[301,302,303,307,308];_.redirect=function(o,s){if(ke.indexOf(s)===-1)throw new RangeError("Invalid status code");return new _(null,{status:s,headers:{location:o}})},f.DOMException=c.DOMException;try{new f.DOMException}catch{f.DOMException=function(s,l){this.message=s,this.name=l;var y=Error(s);this.stack=y.stack},f.DOMException.prototype=Object.create(Error.prototype),f.DOMException.prototype.constructor=f.DOMException}function Z(o,s){return new Promise(function(l,y){var b=new E(o,s);if(b.signal&&b.signal.aborted)return y(new f.DOMException("Aborted","AbortError"));var d=new XMLHttpRequest;function L(){d.abort()}d.onload=function(){var C={status:d.status,statusText:d.statusText,headers:Ve(d.getAllResponseHeaders()||"")};C.url="responseURL"in d?d.responseURL:C.headers.get("X-Request-URL");var B="response"in d?d.response:d.responseText;setTimeout(function(){l(new _(B,C))},0)},d.onerror=function(){setTimeout(function(){y(new TypeError("Network request failed"))},0)},d.ontimeout=function(){setTimeout(function(){y(new TypeError("Network request failed"))},0)},d.onabort=function(){setTimeout(function(){y(new f.DOMException("Aborted","AbortError"))},0)};function Le(C){try{return C===""&&c.location.href?c.location.href:C}catch{return C}}d.open(b.method,Le(b.url),!0),b.credentials==="include"?d.withCredentials=!0:b.credentials==="omit"&&(d.withCredentials=!1),"responseType"in d&&(u.blob?d.responseType="blob":u.arrayBuffer&&b.headers.get("Content-Type")&&b.headers.get("Content-Type").indexOf("application/octet-stream")!==-1&&(d.responseType="arraybuffer")),s&&typeof s.headers=="object"&&!(s.headers instanceof g)?Object.getOwnPropertyNames(s.headers).forEach(function(C){d.setRequestHeader(C,S(s.headers[C]))}):b.headers.forEach(function(C,B){d.setRequestHeader(B,C)}),b.signal&&(b.signal.addEventListener("abort",L),d.onreadystatechange=function(){d.readyState===4&&b.signal.removeEventListener("abort",L)}),d.send(typeof b._bodyInit>"u"?null:b._bodyInit)})}return Z.polyfill=!0,c.fetch||(c.fetch=Z,c.Headers=g,c.Request=E,c.Response=_),f.Headers=g,f.Request=E,f.Response=_,f.fetch=Z,f})({})})(t),t.fetch.ponyfill=!0,delete t.fetch.polyfill;var i=r.fetch?r:t;e=i.fetch,e.default=i.fetch,e.fetch=i.fetch,e.Headers=i.Headers,e.Request=i.Request,e.Response=i.Response,n.exports=e}(q,q.exports)),q.exports}(function(n,e){var r;if(typeof fetch=="function"&&(typeof V<"u"&&V.fetch?r=V.fetch:typeof window<"u"&&window.fetch?r=window.fetch:r=fetch),typeof Je<"u"&&typeof window>"u"){var t=r||vt();t.default&&(t=t.default),e.default=t,n.exports=e.default}})(z,z.exports);var Oe=z.exports;const Ce=Be(Oe),Y=et({__proto__:null,default:Ce},[Oe]);function ee(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),r.push.apply(r,t)}return r}function te(n){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?ee(Object(r),!0).forEach(function(t){St(n,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):ee(Object(r)).forEach(function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(r,t))})}return n}function St(n,e,r){return(e=Ot(e))in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function Ot(n){var e=Ct(n,"string");return P(e)=="symbol"?e:e+""}function Ct(n,e){if(P(n)!="object"||!n)return n;var r=n[Symbol.toPrimitive];if(r!==void 0){var t=r.call(n,e||"default");if(P(t)!="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function P(n){"@babel/helpers - typeof";return P=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(n)}var x;typeof fetch=="function"&&(typeof global<"u"&&global.fetch?x=global.fetch:typeof window<"u"&&window.fetch?x=window.fetch:x=fetch);var k;Se()&&(typeof global<"u"&&global.XMLHttpRequest?k=global.XMLHttpRequest:typeof window<"u"&&window.XMLHttpRequest&&(k=window.XMLHttpRequest));var N;typeof ActiveXObject=="function"&&(typeof global<"u"&&global.ActiveXObject?N=global.ActiveXObject:typeof window<"u"&&window.ActiveXObject&&(N=window.ActiveXObject));!x&&Y&&!k&&!N&&(x=Ce||Y);typeof x!="function"&&(x=void 0);var G=function(e,r){if(r&&P(r)==="object"){var t="";for(var i in r)t+="&"+encodeURIComponent(i)+"="+encodeURIComponent(r[i]);if(!t)return e;e=e+(e.indexOf("?")!==-1?"&":"?")+t.slice(1)}return e},re=function(e,r,t,i){var a=function(u){if(!u.ok)return t(u.statusText||"Error",{status:u.status});u.text().then(function(w){t(null,{status:u.status,data:w})}).catch(t)};if(i){var f=i(e,r);if(f instanceof Promise){f.then(a).catch(t);return}}typeof fetch=="function"?fetch(e,r).then(a).catch(t):x(e,r).then(a).catch(t)},ne=!1,_t=function(e,r,t,i){e.queryStringParams&&(r=G(r,e.queryStringParams));var a=te({},typeof e.customHeaders=="function"?e.customHeaders():e.customHeaders);typeof window>"u"&&typeof global<"u"&&typeof global.process<"u"&&global.process.versions&&global.process.versions.node&&(a["User-Agent"]="i18next-http-backend (node/".concat(global.process.version,"; ").concat(global.process.platform," ").concat(global.process.arch,")")),t&&(a["Content-Type"]="application/json");var f=typeof e.requestOptions=="function"?e.requestOptions(t):e.requestOptions,c=te({method:t?"POST":"GET",body:t?e.stringify(t):void 0,headers:a},ne?{}:f),u=typeof e.alternateFetch=="function"&&e.alternateFetch.length>=1?e.alternateFetch:void 0;try{re(r,c,i,u)}catch(w){if(!f||Object.keys(f).length===0||!w.message||w.message.indexOf("not implemented")<0)return i(w);try{Object.keys(f).forEach(function(h){delete c[h]}),re(r,c,i,u),ne=!0}catch(h){i(h)}}},xt=function(e,r,t,i){t&&P(t)==="object"&&(t=G("",t).slice(1)),e.queryStringParams&&(r=G(r,e.queryStringParams));try{var a;k?a=new k:a=new N("MSXML2.XMLHTTP.3.0"),a.open(t?"POST":"GET",r,1),e.crossDomain||a.setRequestHeader("X-Requested-With","XMLHttpRequest"),a.withCredentials=!!e.withCredentials,t&&a.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),a.overrideMimeType&&a.overrideMimeType("application/json");var f=e.customHeaders;if(f=typeof f=="function"?f():f,f)for(var c in f)a.setRequestHeader(c,f[c]);a.onreadystatechange=function(){a.readyState>3&&i(a.status>=400?a.statusText:null,{status:a.status,data:a.responseText})},a.send(t)}catch(u){console&&console.log(u)}},Et=function(e,r,t,i){if(typeof t=="function"&&(i=t,t=void 0),i=i||function(){},x&&r.indexOf("file:")!==0)return _t(e,r,t,i);if(Se()||typeof ActiveXObject=="function")return xt(e,r,t,i);i(new Error("No fetch and no xhr implementation found!"))};function A(n){"@babel/helpers - typeof";return A=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A(n)}function oe(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),r.push.apply(r,t)}return r}function X(n){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?oe(Object(r),!0).forEach(function(t){_e(n,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):oe(Object(r)).forEach(function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(r,t))})}return n}function Pt(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function Tt(n,e){for(var r=0;r<e.length;r++){var t=e[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,xe(t.key),t)}}function Ht(n,e,r){return e&&Tt(n.prototype,e),Object.defineProperty(n,"prototype",{writable:!1}),n}function _e(n,e,r){return(e=xe(e))in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function xe(n){var e=At(n,"string");return A(e)=="symbol"?e:e+""}function At(n,e){if(A(n)!="object"||!n)return n;var r=n[Symbol.toPrimitive];if(r!==void 0){var t=r.call(n,e||"default");if(A(t)!="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var jt=function(){return{loadPath:"/locales/{{lng}}/{{ns}}.json",addPath:"/locales/add/{{lng}}/{{ns}}",parse:function(r){return JSON.parse(r)},stringify:JSON.stringify,parsePayload:function(r,t,i){return _e({},t,i||"")},parseLoadPayload:function(r,t){},request:Et,reloadInterval:typeof window<"u"?!1:60*60*1e3,customHeaders:{},queryStringParams:{},crossDomain:!1,withCredentials:!1,overrideMimeType:!1,requestOptions:{mode:"cors",credentials:"same-origin",cache:"default"}}},Ee=function(){function n(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};Pt(this,n),this.services=e,this.options=r,this.allOptions=t,this.type="backend",this.init(e,r,t)}return Ht(n,[{key:"init",value:function(r){var t=this,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(this.services=r,this.options=X(X(X({},jt()),this.options||{}),i),this.allOptions=a,this.services&&this.options.reloadInterval){var f=setInterval(function(){return t.reload()},this.options.reloadInterval);A(f)==="object"&&typeof f.unref=="function"&&f.unref()}}},{key:"readMulti",value:function(r,t,i){this._readAny(r,r,t,t,i)}},{key:"read",value:function(r,t,i){this._readAny([r],r,[t],t,i)}},{key:"_readAny",value:function(r,t,i,a,f){var c=this,u=this.options.loadPath;typeof this.options.loadPath=="function"&&(u=this.options.loadPath(r,i)),u=wt(u),u.then(function(w){if(!w)return f(null,{});var h=c.services.interpolator.interpolate(w,{lng:r.join("+"),ns:i.join("+")});c.loadUrl(h,f,t,a)})}},{key:"loadUrl",value:function(r,t,i,a){var f=this,c=typeof i=="string"?[i]:i,u=typeof a=="string"?[a]:a,w=this.options.parseLoadPayload(c,u);this.options.request(this.options,r,w,function(h,p){if(p&&(p.status>=500&&p.status<600||!p.status))return t("failed loading "+r+"; status code: "+p.status,!0);if(p&&p.status>=400&&p.status<500)return t("failed loading "+r+"; status code: "+p.status,!1);if(!p&&h&&h.message&&h.message.toLowerCase().indexOf("failed")>-1&&(h.message.indexOf("fetch")>-1||h.message.toLowerCase().indexOf("network")>-1))return t("failed loading "+r+": "+h.message,!0);if(h)return t(h,!1);var v,S;try{typeof p.data=="string"?v=f.options.parse(p.data,i,a):v=p.data}catch{S="failed parsing "+r+" to json"}if(S)return t(S,!1);t(null,v)})}},{key:"create",value:function(r,t,i,a,f){var c=this;if(this.options.addPath){typeof r=="string"&&(r=[r]);var u=this.options.parsePayload(t,i,a),w=0,h=[],p=[];r.forEach(function(v){var S=c.options.addPath;typeof c.options.addPath=="function"&&(S=c.options.addPath(v,t));var T=c.services.interpolator.interpolate(S,{lng:v,ns:t});c.options.request(c.options,T,u,function(g,j){w+=1,h.push(g),p.push(j),w===r.length&&typeof f=="function"&&f(h,p)})})}}},{key:"reload",value:function(){var r=this,t=this.services,i=t.backendConnector,a=t.languageUtils,f=t.logger,c=i.language;if(!(c&&c.toLowerCase()==="cimode")){var u=[],w=function(p){var v=a.toResolveHierarchy(p);v.forEach(function(S){u.indexOf(S)<0&&u.push(S)})};w(c),this.allOptions.preload&&this.allOptions.preload.forEach(function(h){return w(h)}),u.forEach(function(h){r.allOptions.ns.forEach(function(p){i.read(h,p,"read",null,null,function(v,S){v&&f.warn("loading namespace ".concat(p," for language ").concat(h," failed"),v),!v&&S&&f.log("loaded namespace ".concat(p," for language ").concat(h),S),i.loaded("".concat(h,"|").concat(p),v,S)})})})}}}])}();Ee.type="backend";const{slice:Dt,forEach:Mt}=[];function Vt(n){return Mt.call(Dt.call(arguments,1),e=>{if(e)for(const r in e)n[r]===void 0&&(n[r]=e[r])}),n}const ie=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,kt=(n,e,r)=>{const t=r||{};t.path=t.path||"/";const i=encodeURIComponent(e);let a=`${n}=${i}`;if(t.maxAge>0){const f=t.maxAge-0;if(Number.isNaN(f))throw new Error("maxAge should be a Number");a+=`; Max-Age=${Math.floor(f)}`}if(t.domain){if(!ie.test(t.domain))throw new TypeError("option domain is invalid");a+=`; Domain=${t.domain}`}if(t.path){if(!ie.test(t.path))throw new TypeError("option path is invalid");a+=`; Path=${t.path}`}if(t.expires){if(typeof t.expires.toUTCString!="function")throw new TypeError("option expires is invalid");a+=`; Expires=${t.expires.toUTCString()}`}if(t.httpOnly&&(a+="; HttpOnly"),t.secure&&(a+="; Secure"),t.sameSite)switch(typeof t.sameSite=="string"?t.sameSite.toLowerCase():t.sameSite){case!0:a+="; SameSite=Strict";break;case"lax":a+="; SameSite=Lax";break;case"strict":a+="; SameSite=Strict";break;case"none":a+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return a},se={create(n,e,r,t){let i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{path:"/",sameSite:"strict"};r&&(i.expires=new Date,i.expires.setTime(i.expires.getTime()+r*60*1e3)),t&&(i.domain=t),document.cookie=kt(n,encodeURIComponent(e),i)},read(n){const e=`${n}=`,r=document.cookie.split(";");for(let t=0;t<r.length;t++){let i=r[t];for(;i.charAt(0)===" ";)i=i.substring(1,i.length);if(i.indexOf(e)===0)return i.substring(e.length,i.length)}return null},remove(n){this.create(n,"",-1)}};var Lt={name:"cookie",lookup(n){let{lookupCookie:e}=n;if(e&&typeof document<"u")return se.read(e)||void 0},cacheUserLanguage(n,e){let{lookupCookie:r,cookieMinutes:t,cookieDomain:i,cookieOptions:a}=e;r&&typeof document<"u"&&se.create(r,n,t,i,a)}},Bt={name:"querystring",lookup(n){var t;let{lookupQuerystring:e}=n,r;if(typeof window<"u"){let{search:i}=window.location;!window.location.search&&((t=window.location.hash)==null?void 0:t.indexOf("?"))>-1&&(i=window.location.hash.substring(window.location.hash.indexOf("?")));const f=i.substring(1).split("&");for(let c=0;c<f.length;c++){const u=f[c].indexOf("=");u>0&&f[c].substring(0,u)===e&&(r=f[c].substring(u+1))}}return r}};let D=null;const ae=()=>{if(D!==null)return D;try{D=window!=="undefined"&&window.localStorage!==null;const n="i18next.translate.boo";window.localStorage.setItem(n,"foo"),window.localStorage.removeItem(n)}catch{D=!1}return D};var Rt={name:"localStorage",lookup(n){let{lookupLocalStorage:e}=n;if(e&&ae())return window.localStorage.getItem(e)||void 0},cacheUserLanguage(n,e){let{lookupLocalStorage:r}=e;r&&ae()&&window.localStorage.setItem(r,n)}};let M=null;const fe=()=>{if(M!==null)return M;try{M=window!=="undefined"&&window.sessionStorage!==null;const n="i18next.translate.boo";window.sessionStorage.setItem(n,"foo"),window.sessionStorage.removeItem(n)}catch{M=!1}return M};var It={name:"sessionStorage",lookup(n){let{lookupSessionStorage:e}=n;if(e&&fe())return window.sessionStorage.getItem(e)||void 0},cacheUserLanguage(n,e){let{lookupSessionStorage:r}=e;r&&fe()&&window.sessionStorage.setItem(r,n)}},qt={name:"navigator",lookup(n){const e=[];if(typeof navigator<"u"){const{languages:r,userLanguage:t,language:i}=navigator;if(r)for(let a=0;a<r.length;a++)e.push(r[a]);t&&e.push(t),i&&e.push(i)}return e.length>0?e:void 0}},Ut={name:"htmlTag",lookup(n){let{htmlTag:e}=n,r;const t=e||(typeof document<"u"?document.documentElement:null);return t&&typeof t.getAttribute=="function"&&(r=t.getAttribute("lang")),r}},Ft={name:"path",lookup(n){var i;let{lookupFromPathIndex:e}=n;if(typeof window>"u")return;const r=window.location.pathname.match(/\/([a-zA-Z-]*)/g);return Array.isArray(r)?(i=r[typeof e=="number"?e:0])==null?void 0:i.replace("/",""):void 0}},Nt={name:"subdomain",lookup(n){var i,a;let{lookupFromSubdomainIndex:e}=n;const r=typeof e=="number"?e+1:1,t=typeof window<"u"&&((a=(i=window.location)==null?void 0:i.hostname)==null?void 0:a.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));if(t)return t[r]}};function Zt(){return{order:["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"],lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:n=>n}}class Pe{constructor(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.type="languageDetector",this.detectors={},this.init(e,r)}init(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=e||{languageUtils:{}},this.options=Vt(r,this.options||{},Zt()),typeof this.options.convertDetectedLanguage=="string"&&this.options.convertDetectedLanguage.indexOf("15897")>-1&&(this.options.convertDetectedLanguage=i=>i.replace("-","_")),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=t,this.addDetector(Lt),this.addDetector(Bt),this.addDetector(Rt),this.addDetector(It),this.addDetector(qt),this.addDetector(Ut),this.addDetector(Ft),this.addDetector(Nt)}addDetector(e){return this.detectors[e.name]=e,this}detect(e){e||(e=this.options.order);let r=[];return e.forEach(t=>{if(this.detectors[t]){let i=this.detectors[t].lookup(this.options);i&&typeof i=="string"&&(i=[i]),i&&(r=r.concat(i))}}),r=r.map(t=>this.options.convertDetectedLanguage(t)),this.services.languageUtils.getBestMatchFromCodes?r:r.length>0?r[0]:null}cacheUserLanguage(e,r){r||(r=this.options.caches),r&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(e)>-1||r.forEach(t=>{this.detectors[t]&&this.detectors[t].cacheUserLanguage(e,this.options)}))}}Pe.type="languageDetector";be.use(Ee).use(Pe).use(tt).init({fallbackLng:"en",debug:!1,interpolation:{escapeValue:!1}});const Xt=n=>O.jsx(Ye,{children:O.jsx(rt,{i18n:be,children:O.jsx(n,{})})}),mr={title:"widget/Sidebar",component:ve,argTypes:{backgroundColor:{control:"color"}},decorators:[Xt]},U={args:{}},F={args:{},decorators:[Qe(We.DARK)]};var ce,ue,le;U.parameters={...U.parameters,docs:{...(ce=U.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {}
}`,...(le=(ue=U.parameters)==null?void 0:ue.docs)==null?void 0:le.source}}};var de,he,pe;F.parameters={...F.parameters,docs:{...(de=F.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)]
}`,...(pe=(he=F.parameters)==null?void 0:he.docs)==null?void 0:pe.source}}};const yr=["Light","Dark"];export{F as Dark,U as Light,yr as __namedExportsOrder,mr as default};