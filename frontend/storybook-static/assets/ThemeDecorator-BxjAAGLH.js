import{r as f}from"./index-CTjT7uj6.js";var i={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c=f,m=Symbol.for("react.element"),x=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,E=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,a){var t,o={},n=null,p=null;a!==void 0&&(n=""+a),r.key!==void 0&&(n=""+r.key),r.ref!==void 0&&(p=r.ref);for(t in r)u.call(r,t)&&!d.hasOwnProperty(t)&&(o[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps,r)o[t]===void 0&&(o[t]=r[t]);return{$$typeof:m,type:e,key:n,ref:p,props:o,_owner:E.current}}s.Fragment=x;s.jsx=l;s.jsxs=l;i.exports=s;var _=i.exports,v=(e=>(e.DARK="dark",e.LIGHT="light",e))(v||{});const O=f.createContext({}),R="theme",j=e=>r=>_.jsx("div",{className:`app ${e}`,children:_.jsx(r,{})});export{R as L,j as T,v as a,O as b,_ as j};
