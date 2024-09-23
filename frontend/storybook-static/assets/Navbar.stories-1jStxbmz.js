const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./LoginForm-BoccXp8N.js","./jsx-runtime-Cw0GR0a5.js","./index-CTjT7uj6.js","./classNames-DgDD4s-s.js","./Button-DO_jRr2A.js","./Button-BZbGR-Ln.css","./Input-BQBonnYG.js","./Input-CXTHl3hW.css","./redux-toolkit.esm-DTxM1URu.js","./index-vZN_Bsf0.js","./StoreDecorator-WEnoC5CX.js","./i18next-DXJLt4wh.js","./Text-ZeJ8tgLV.js","./Text-COUBof1b.css","./DynamicModuleLoader-V7CSOpm4.js","./useAppDispatch-DpCIFl3O.js","./useTranslation-DegO0IwE.js","./LoginForm-DXPcGeK5.css"])))=>i.map(i=>d[i]);
import{T as j,a as C}from"./ThemeDecorator-enzQMzt5.js";import{r as o}from"./index-CTjT7uj6.js";import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{c as h}from"./classNames-DgDD4s-s.js";import{B as g,a as D}from"./Button-DO_jRr2A.js";import{M as I}from"./Modal-BFPHsoQr.js";import{_ as q}from"./iframe-8GoCV72r.js";import{L as K}from"./Loader-D9Cv9lcU.js";import{u as O,c as B,S as u}from"./StoreDecorator-WEnoC5CX.js";import{T as P,a as V}from"./Text-ZeJ8tgLV.js";import{u as F}from"./useAppDispatch-DpCIFl3O.js";import"./redux-toolkit.esm-DTxM1URu.js";import{u as $}from"./useTranslation-DegO0IwE.js";import{R as U}from"./RouterDecorator-B0HwHQvL.js";import"./index-vZN_Bsf0.js";import"./useTheme-C5zkoL12.js";import"../sb-preview/runtime.js";import"./i18next-DXJLt4wh.js";import"./index-ihNILXvD.js";const G=r=>{var s;return(s=r==null?void 0:r.user)==null?void 0:s.authData},H="_Navbar_1wwhx_1",J="_links_1wwhx_10",t={Navbar:H,links:J},Q=o.lazy(()=>new Promise(r=>{setTimeout(()=>r(q(()=>import("./LoginForm-BoccXp8N.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]),import.meta.url)),1100)})),y=o.memo(r=>{const{isAuth:s,onClose:a}=r;return e.jsx(I,{isOpen:s,onClose:a,lazy:!0,children:e.jsx(o.Suspense,{fallback:e.jsx(K,{}),children:e.jsx(Q,{onSuccess:a})})})});y.__docgenInfo={description:"",methods:[],displayName:"LoginModal",props:{className:{required:!1,tsType:{name:"string"},description:""},isAuth:{required:!1,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const E=({className:r})=>{const{t:s}=$("translation"),[a,d]=o.useState(!1),p=O(G),l=F(),w=o.useCallback(()=>{d(!1)},[]),M=o.useCallback(()=>{d(!0)},[]),z=o.useCallback(()=>{l(B.logout())},[l]);return p?e.jsxs("div",{className:h(t.Navbar,{},[r]),children:[e.jsx(P,{theme:V.NORMAL,text:p.username}),e.jsx(g,{theme:D.CLEAR_INVERTED,className:t.links,onClick:z,children:s("Выйти")})]}):e.jsxs("div",{className:h(t.Navbar,{},[r]),children:[e.jsx(g,{theme:D.CLEAR_INVERTED,className:t.links,onClick:M,children:s("Войти")}),a&&e.jsx(y,{isAuth:a,onClose:w})]})},W=o.memo(E);E.__docgenInfo={description:"",methods:[],displayName:"Navbar",props:{className:{required:!1,tsType:{name:"string"},description:""}}};const Dr={title:"widget/Navbar",component:W,argTypes:{backgroundColor:{control:"color"}},decorators:[U,u({loginForm:{username:"username",password:"123"}})]},n={args:{}},i={args:{},decorators:[u({user:{authData:{id:"1",username:"admin"}}})]},c={args:{},decorators:[j(C.DARK)]},m={args:{},decorators:[u({user:{authData:{id:"1",username:"admin"}}}),j(C.DARK)]};var f,T,_;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {}
}`,...(_=(T=n.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var A,x,N;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {},
  decorators: [StoreDecorator({
    user: {
      authData: {
        id: "1",
        username: "admin"
      }
    }
  })]
}`,...(N=(x=i.parameters)==null?void 0:x.docs)==null?void 0:N.source}}};var k,b,v;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)]
}`,...(v=(b=c.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var L,R,S;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {},
  decorators: [StoreDecorator({
    user: {
      authData: {
        id: "1",
        username: "admin"
      }
    }
  }), ThemeDecorator(Theme.DARK)]
}`,...(S=(R=m.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};const fr=["Light","LightAuthtorized","Dark","DarkAuthtorized"];export{c as Dark,m as DarkAuthtorized,n as Light,i as LightAuthtorized,fr as __namedExportsOrder,Dr as default};
