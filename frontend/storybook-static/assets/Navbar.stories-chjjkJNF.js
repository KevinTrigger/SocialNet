const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./LoginForm-XcigMb-G.js","./jsx-runtime-CexXSJP5.js","./index-BP8_t0zE.js","./classNames-DgDD4s-s.js","./Button-DFlArtjJ.js","./Button-BZbGR-Ln.css","./Input-DIdXN3MZ.js","./Input-CXTHl3hW.css","./useAppDispatch-CcAwMes1.js","./i18next-DXJLt4wh.js","./Text-Df7vFD9l.js","./Text-COUBof1b.css","./useTranslation-B2QVmqVC.js","./index-DJkmxc1E.js","./useAppDispatch-DVSiZyF4.css","./StoreDecorator-BLmZqaTD.js","./index-BhfaPLzF.js","./DynamicModuleLoader-BOK7KfhV.js","./LoginForm-DXPcGeK5.css"])))=>i.map(i=>d[i]);
import{T as j,a as C}from"./ThemeDecorator-DOb0kzc_.js";import{r as o}from"./index-BP8_t0zE.js";import{j as r}from"./jsx-runtime-CexXSJP5.js";import{c as h}from"./classNames-DgDD4s-s.js";import{B as g,a as D}from"./Button-DFlArtjJ.js";import{M as I}from"./Modal-ChTRyrYe.js";import{_ as q}from"./iframe-Blh-GClo.js";import{L as K}from"./Loader-Ba6IOZ8c.js";import{u as O,S as u}from"./StoreDecorator-BLmZqaTD.js";import{T as B,a as V}from"./Text-Df7vFD9l.js";import{c as F,b as P}from"./useAppDispatch-CcAwMes1.js";import{u as $}from"./useTranslation-B2QVmqVC.js";import{R as U}from"./RouterDecorator-DTQIMn4G.js";import"./index-DJkmxc1E.js";import"./useTheme-Bci_zdUw.js";import"../sb-preview/runtime.js";import"./index-BhfaPLzF.js";import"./i18next-DXJLt4wh.js";import"./Input-DIdXN3MZ.js";import"./index-8HAOCAKB.js";const G=e=>{var a;return(a=e==null?void 0:e.user)==null?void 0:a.authData},H="_Navbar_1wwhx_1",J="_links_1wwhx_10",t={Navbar:H,links:J},Q=o.lazy(()=>q(()=>import("./LoginForm-XcigMb-G.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]),import.meta.url)),y=o.memo(e=>{const{isAuth:a,onClose:s}=e;return r.jsx(I,{isOpen:a,onClose:s,lazy:!0,children:r.jsx(o.Suspense,{fallback:r.jsx(K,{}),children:r.jsx(Q,{onSuccess:s})})})});y.__docgenInfo={description:"",methods:[],displayName:"LoginModal",props:{className:{required:!1,tsType:{name:"string"},description:""},isAuth:{required:!1,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const E=({className:e})=>{const{t:a}=$("translation"),[s,d]=o.useState(!1),p=F(G),l=P(),M=o.useCallback(()=>{d(!1)},[]),w=o.useCallback(()=>{d(!0)},[]),z=o.useCallback(()=>{l(O.logout())},[l]);return p?r.jsxs("div",{className:h(t.Navbar,{},[e]),children:[r.jsx(B,{theme:V.NORMAL,text:p.username}),r.jsx(g,{theme:D.CLEAR_INVERTED,className:t.links,onClick:z,children:a("Выйти")})]}):r.jsxs("div",{className:h(t.Navbar,{},[e]),children:[r.jsx(g,{theme:D.CLEAR_INVERTED,className:t.links,onClick:w,children:a("Войти")}),s&&r.jsx(y,{isAuth:s,onClose:M})]})},W=o.memo(E);E.__docgenInfo={description:"",methods:[],displayName:"Navbar",props:{className:{required:!1,tsType:{name:"string"},description:""}}};const fr={title:"widget/Navbar",component:W,argTypes:{backgroundColor:{control:"color"}},decorators:[U,u({loginForm:{username:"username",password:"123"}})]},n={args:{}},i={args:{},decorators:[u({user:{authData:{id:"1",username:"admin"}}})]},c={args:{},decorators:[j(C.DARK)]},m={args:{},decorators:[u({user:{authData:{id:"1",username:"admin"}}}),j(C.DARK)]};var f,_,A;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {}
}`,...(A=(_=n.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var T,x,N;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {},
  decorators: [StoreDecorator({
    user: {
      authData: {
        id: "1",
        username: "admin"
      }
    }
  })]
}`,...(N=(x=i.parameters)==null?void 0:x.docs)==null?void 0:N.source}}};var b,k,v;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)]
}`,...(v=(k=c.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var L,R,S;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {},
  decorators: [StoreDecorator({
    user: {
      authData: {
        id: "1",
        username: "admin"
      }
    }
  }), ThemeDecorator(Theme.DARK)]
}`,...(S=(R=m.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};const _r=["Light","LightAuthtorized","Dark","DarkAuthtorized"];export{c as Dark,m as DarkAuthtorized,n as Light,i as LightAuthtorized,_r as __namedExportsOrder,fr as default};
