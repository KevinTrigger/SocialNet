import{r as s,a as H}from"./index-DRjF_FHU.js";/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function R(){return R=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},R.apply(this,arguments)}var y;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(y||(y={}));const j="popstate";function Q(e){e===void 0&&(e={});let{initialEntries:t=["/"],initialIndex:n,v5Compat:r=!1}=e,a;a=t.map((u,d)=>p(u,typeof u=="string"?null:u.state,d===0?"default":void 0));let o=c(n??a.length-1),i=y.Pop,l=null;function c(u){return Math.min(Math.max(u,0),a.length-1)}function h(){return a[o]}function p(u,d,v){d===void 0&&(d=null);let f=E(a?h().pathname:"/",u,d,v);return X(f.pathname.charAt(0)==="/","relative pathnames are not supported in memory history: "+JSON.stringify(u)),f}function g(u){return typeof u=="string"?u:T(u)}return{get index(){return o},get action(){return i},get location(){return h()},createHref:g,createURL(u){return new URL(g(u),"http://localhost")},encodeLocation(u){let d=typeof u=="string"?w(u):u;return{pathname:d.pathname||"",search:d.search||"",hash:d.hash||""}},push(u,d){i=y.Push;let v=p(u,d);o+=1,a.splice(o,a.length,v),r&&l&&l({action:i,location:v,delta:1})},replace(u,d){i=y.Replace;let v=p(u,d);a[o]=v,r&&l&&l({action:i,location:v,delta:0})},go(u){i=y.Pop;let d=c(o+u),v=a[d];o=d,l&&l({action:i,location:v,delta:u})},listen(u){return l=u,()=>{l=null}}}}function ye(e){e===void 0&&(e={});function t(r,a){let{pathname:o,search:i,hash:l}=r.location;return E("",{pathname:o,search:i,hash:l},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(r,a){return typeof a=="string"?a:T(a)}return ee(t,n,null,e)}function C(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function X(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Z(){return Math.random().toString(36).substr(2,8)}function B(e,t){return{usr:e.state,key:e.key,idx:t}}function E(e,t,n,r){return n===void 0&&(n=null),R({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?w(t):t,{state:n,key:t&&t.key||r||Z()})}function T(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function w(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function ee(e,t,n,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:o=!1}=r,i=a.history,l=y.Pop,c=null,h=p();h==null&&(h=0,i.replaceState(R({},i.state,{idx:h}),""));function p(){return(i.state||{idx:null}).idx}function g(){l=y.Pop;let f=p(),x=f==null?null:f-h;h=f,c&&c({action:l,location:v.location,delta:x})}function m(f,x){l=y.Push;let P=E(v.location,f,x);h=p()+1;let I=B(P,h),b=v.createHref(P);try{i.pushState(I,"",b)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;a.location.assign(b)}o&&c&&c({action:l,location:v.location,delta:1})}function u(f,x){l=y.Replace;let P=E(v.location,f,x);h=p();let I=B(P,h),b=v.createHref(P);i.replaceState(I,"",b),o&&c&&c({action:l,location:v.location,delta:0})}function d(f){let x=a.location.origin!=="null"?a.location.origin:a.location.href,P=typeof f=="string"?f:T(f);return P=P.replace(/ $/,"%20"),C(x,"No window.location.(origin|href) available to create URL for href: "+P),new URL(P,x)}let v={get action(){return l},get location(){return e(a,i)},listen(f){if(c)throw new Error("A history only accepts one active listener");return a.addEventListener(j,g),c=f,()=>{a.removeEventListener(j,g),c=null}},createHref(f){return t(a,f)},createURL:d,encodeLocation(f){let x=d(f);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:m,replace:u,go(f){return i.go(f)}};return v}var _;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(_||(_={}));function te(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function ne(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:a=""}=typeof e=="string"?w(e):e;return{pathname:n?n.startsWith("/")?n:ae(n,t):t,search:ie(r),hash:oe(a)}}function ae(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function O(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function re(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function D(e,t){let n=re(e);return t?n.map((r,a)=>a===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function $(e,t,n,r){r===void 0&&(r=!1);let a;typeof e=="string"?a=w(e):(a=R({},e),C(!a.pathname||!a.pathname.includes("?"),O("?","pathname","search",a)),C(!a.pathname||!a.pathname.includes("#"),O("#","pathname","hash",a)),C(!a.search||!a.search.includes("#"),O("#","search","hash",a)));let o=e===""||a.pathname==="",i=o?"/":a.pathname,l;if(i==null)l=n;else{let g=t.length-1;if(!r&&i.startsWith("..")){let m=i.split("/");for(;m[0]==="..";)m.shift(),g-=1;a.pathname=m.join("/")}l=g>=0?t[g]:"/"}let c=ne(a,l),h=i&&i!=="/"&&i.endsWith("/"),p=(o||i===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(h||p)&&(c.pathname+="/"),c}const z=e=>e.join("/").replace(/\/\/+/g,"/"),ie=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,oe=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,V=["post","put","patch","delete"];new Set(V);const le=["get",...V];new Set(le);/**
 * React Router v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function N(){return N=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},N.apply(this,arguments)}const q=s.createContext(null),S=s.createContext(null),W=s.createContext(null),L=s.createContext({outlet:null,matches:[],isDataRoute:!1});function Ce(e,t){let{relative:n}=t===void 0?{}:t;U()||C(!1);let{basename:r,navigator:a}=s.useContext(S),{hash:o,pathname:i,search:l}=ue(e,{relative:n}),c=i;return r!=="/"&&(c=i==="/"?r:z([r,i])),a.createHref({pathname:c,search:l,hash:o})}function U(){return s.useContext(W)!=null}function K(){return U()||C(!1),s.useContext(W).location}function Y(e){s.useContext(S).static||s.useLayoutEffect(e)}function Pe(){let{isDataRoute:e}=s.useContext(L);return e?pe():se()}function se(){U()||C(!1);let e=s.useContext(q),{basename:t,future:n,navigator:r}=s.useContext(S),{matches:a}=s.useContext(L),{pathname:o}=K(),i=JSON.stringify(D(a,n.v7_relativeSplatPath)),l=s.useRef(!1);return Y(()=>{l.current=!0}),s.useCallback(function(h,p){if(p===void 0&&(p={}),!l.current)return;if(typeof h=="number"){r.go(h);return}let g=$(h,JSON.parse(i),o,p.relative==="path");e==null&&t!=="/"&&(g.pathname=g.pathname==="/"?t:z([t,g.pathname])),(p.replace?r.replace:r.push)(g,p.state,p)},[t,r,i,o,e])}function Re(){let{matches:e}=s.useContext(L),t=e[e.length-1];return t?t.params:{}}function ue(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=s.useContext(S),{matches:a}=s.useContext(L),{pathname:o}=K(),i=JSON.stringify(D(a,r.v7_relativeSplatPath));return s.useMemo(()=>$(e,JSON.parse(i),o,n==="path"),[e,i,o,n])}var F=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(F||{}),G=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(G||{});function ce(e){let t=s.useContext(q);return t||C(!1),t}function fe(e){let t=s.useContext(L);return t||C(!1),t}function he(e){let t=fe(),n=t.matches[t.matches.length-1];return n.route.id||C(!1),n.route.id}function pe(){let{router:e}=ce(F.UseNavigateStable),t=he(G.UseNavigateStable),n=s.useRef(!1);return Y(()=>{n.current=!0}),s.useCallback(function(a,o){o===void 0&&(o={}),n.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,N({fromRouteId:t},o)))},[e,t])}const A={};function de(e,t){A[t]||(A[t]=!0,console.warn(t))}const J=(e,t,n)=>de(e,"⚠️ React Router Future Flag Warning: "+t+". "+("You can use the `"+e+"` future flag to opt-in early. ")+("For more information, see "+n+"."));function ve(e,t){e!=null&&e.v7_startTransition||J("v7_startTransition","React Router will begin wrapping state updates in `React.startTransition` in v7","https://reactrouter.com/v6/upgrading/future#v7_starttransition"),!(e!=null&&e.v7_relativeSplatPath)&&!t&&J("v7_relativeSplatPath","Relative route resolution within Splat routes is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath")}const ge="startTransition",k=H[ge];function we(e){let{basename:t,children:n,initialEntries:r,initialIndex:a,future:o}=e,i=s.useRef();i.current==null&&(i.current=Q({initialEntries:r,initialIndex:a,v5Compat:!0}));let l=i.current,[c,h]=s.useState({action:l.action,location:l.location}),{v7_startTransition:p}=o||{},g=s.useCallback(m=>{p&&k?k(()=>h(m)):h(m)},[h,p]);return s.useLayoutEffect(()=>l.listen(g),[l,g]),s.useEffect(()=>ve(o),[o]),s.createElement(me,{basename:t,children:n,location:c.location,navigationType:c.action,navigator:l,future:o})}function me(e){let{basename:t="/",children:n=null,location:r,navigationType:a=y.Pop,navigator:o,static:i=!1,future:l}=e;U()&&C(!1);let c=t.replace(/^\/*/,"/"),h=s.useMemo(()=>({basename:c,navigator:o,static:i,future:N({v7_relativeSplatPath:!1},l)}),[c,l,o,i]);typeof r=="string"&&(r=w(r));let{pathname:p="/",search:g="",hash:m="",state:u=null,key:d="default"}=r,v=s.useMemo(()=>{let f=te(p,c);return f==null?null:{location:{pathname:f,search:g,hash:m,state:u,key:d},navigationType:a}},[c,p,g,m,u,d,a]);return v==null?null:s.createElement(S.Provider,{value:h},s.createElement(W.Provider,{children:n,value:v}))}new Promise(()=>{});export{we as M,S as N,me as R,Pe as a,Ce as b,ye as c,ue as d,T as e,Re as f,ve as l,te as s,K as u};
