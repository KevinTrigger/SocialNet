const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./LoginForm-B_co9pgB.js","./ThemeDecorator-BJS90HNQ.js","./index-CTjT7uj6.js","./classNames-DgDD4s-s.js","./Button-VZ1naJNG.js","./Button-BZbGR-Ln.css","./Input-BbdKpDT7.js","./Input-CXTHl3hW.css","./StoreDecorator-CW-mSbnJ.js","./i18next-BevayyBW.js","./Text-FiyFha0q.js","./Text-COUBof1b.css","./useTranslation-DegO0IwE.js","./LoginForm-DXPcGeK5.css"])))=>i.map(i=>d[i]);
import{j as e,T as C,a as S}from"./ThemeDecorator-BJS90HNQ.js";import{r as s}from"./index-CTjT7uj6.js";import{c as h}from"./classNames-DgDD4s-s.js";import{B as g,a as D}from"./Button-VZ1naJNG.js";import{M as I}from"./Modal-BaUNzgTS.js";import{_ as q}from"./iframe-B44czx65.js";import{L as K}from"./Loader-Cl253-pa.js";import{u as O,a as B,b as P,S as d}from"./StoreDecorator-CW-mSbnJ.js";import{T as V,a as F}from"./Text-FiyFha0q.js";import{u as U}from"./useTranslation-DegO0IwE.js";import{R as $}from"./RouterDecorator-BhuEUve6.js";import"./index-CYM-y3Gt.js";import"./useTheme-D3Uum5vv.js";import"../sb-preview/runtime.js";import"./i18next-BevayyBW.js";import"./index-mhvpqa7m.js";const G=r=>{var a;return(a=r==null?void 0:r.user)==null?void 0:a.authData},H="_Navbar_1wwhx_1",J="_links_1wwhx_10",t={Navbar:H,links:J},Q=s.lazy(()=>new Promise(r=>{setTimeout(()=>r(q(()=>import("./LoginForm-B_co9pgB.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13]),import.meta.url)),1100)})),y=r=>{const{isAuth:a,onClose:o}=r;return e.jsx(I,{isOpen:a,onClose:o,lazy:!0,children:e.jsx(s.Suspense,{fallback:e.jsx(K,{}),children:e.jsx(Q,{})})})};y.__docgenInfo={description:"",methods:[],displayName:"LoginModal",props:{className:{required:!1,tsType:{name:"string"},description:""},isAuth:{required:!1,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const E=({className:r})=>{const{t:a}=U("translation"),[o,u]=s.useState(!1),l=O(G),p=B(),w=s.useCallback(()=>{u(!1)},[]),M=s.useCallback(()=>{u(!0)},[]),z=s.useCallback(()=>{u(!1),p(P.logout())},[p]);return l?e.jsxs("div",{className:h(t.Navbar,{},[r]),children:[e.jsx(V,{theme:F.NORMAL,text:l.username}),e.jsx(g,{theme:D.CLEAR_INVERTED,className:t.links,onClick:z,children:a("Выйти")})]}):e.jsxs("div",{className:h(t.Navbar,{},[r]),children:[e.jsx(g,{theme:D.CLEAR_INVERTED,className:t.links,onClick:M,children:a("Войти")}),o&&e.jsx(y,{isAuth:o,onClose:w})]})};E.__docgenInfo={description:"",methods:[],displayName:"Navbar",props:{className:{required:!1,tsType:{name:"string"},description:""}}};const lr={title:"widget/Navbar",component:E,argTypes:{backgroundColor:{control:"color"}},decorators:[$,d({loginForm:{username:"username",password:"123"}})]},n={args:{}},i={args:{},decorators:[d({user:{authData:{id:"1",username:"admin"}}})]},c={args:{},decorators:[C(S.DARK)]},m={args:{},decorators:[d({user:{authData:{id:"1",username:"admin"}}}),C(S.DARK)]};var f,T,_;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {}
}`,...(_=(T=n.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var x,A,N;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {},
  decorators: [StoreDecorator({
    user: {
      authData: {
        id: "1",
        username: "admin"
      }
    }
  })]
}`,...(N=(A=i.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var k,b,v;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)]
}`,...(v=(b=c.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var L,R,j;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {},
  decorators: [StoreDecorator({
    user: {
      authData: {
        id: "1",
        username: "admin"
      }
    }
  }), ThemeDecorator(Theme.DARK)]
}`,...(j=(R=m.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};const pr=["Light","LightAuthtorized","Dark","DarkAuthtorized"];export{c as Dark,m as DarkAuthtorized,n as Light,i as LightAuthtorized,pr as __namedExportsOrder,lr as default};
