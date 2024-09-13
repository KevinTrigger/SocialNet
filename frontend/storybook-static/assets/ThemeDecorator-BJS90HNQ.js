import{r as a}from"./index-CTjT7uj6.js";var c={exports:{}},p={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u=a,f=Symbol.for("react.element"),h=Symbol.for("react.fragment"),T=Object.prototype.hasOwnProperty,x=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v={key:!0,ref:!0,__self:!0,__source:!0};function l(r,e,n){var t,o={},s=null,m=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(m=e.ref);for(t in e)T.call(e,t)&&!v.hasOwnProperty(t)&&(o[t]=e[t]);if(r&&r.defaultProps)for(t in e=r.defaultProps,e)o[t]===void 0&&(o[t]=e[t]);return{$$typeof:f,type:r,key:s,ref:m,props:o,_owner:x.current}}p.Fragment=h;p.jsx=l;p.jsxs=l;c.exports=p;var i=c.exports,d=(r=>(r.LIGHT="app_light_theme",r.DARK="app_dark_theme",r))(d||{});const y=a.createContext({}),E="theme",R=localStorage.getItem(E)||d.LIGHT,_=r=>{const{initialTheme:e,children:n}=r,[t,o]=a.useState(e||R),s=a.useMemo(()=>({theme:t,setTheme:o}),[t]);return i.jsx(y.Provider,{value:s,children:n})};_.__docgenInfo={description:"",methods:[],displayName:"ThemeProvider",props:{initialTheme:{required:!1,tsType:{name:"Theme"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const O=r=>e=>i.jsx(_,{initialTheme:r,children:i.jsx("div",{className:`app ${r}`,children:i.jsx(e,{})})});export{E as L,O as T,d as a,y as b,i as j};
