const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./LoginForm-Ciu9nakZ.js","./jsx-runtime-CexXSJP5.js","./index-BP8_t0zE.js","./classNames-DgDD4s-s.js","./Button-Dn18IoVx.js","./Button-B38KV8pa.css","./Input-SBXS8SFk.js","./Input-CxcEy6wc.css","./i18next-CEY2YAwM.js","./index-DJkmxc1E.js","./StoreDecorator-BqFcQM5B.js","./useAppDispatch-DV8wwSBw.js","./index-BhfaPLzF.js","./ProfileCard-CMX95jzI.js","./Text-B2gU8dYJ.js","./Text-B0-vEp99.css","./Loader-Ba6IOZ8c.js","./Loader-SPvY_icz.css","./Avatar-DgOqVGEJ.js","./Avatar-DNB3mwwM.css","./CurrencySelect-BXS0wK0v.js","./Select-DReADGzP.js","./Select-PXv4hklc.css","./useTranslation-B2QVmqVC.js","./CountrySelect-D6tEF-9G.js","./ProfileCard-Ci4MoSwW.css","./DynamicModuleLoader-D45YiiHY.js","./LoginForm-DXPcGeK5.css"])))=>i.map(i=>d[i]);
import{T as j,a as C}from"./ThemeDecorator-_gfN7HEO.js";import{r as e}from"./index-BP8_t0zE.js";import{j as r}from"./jsx-runtime-CexXSJP5.js";import{c as h}from"./classNames-DgDD4s-s.js";import{B as g,a as f}from"./Button-Dn18IoVx.js";import{M as I}from"./Modal-DNXlduIk.js";import{_ as q}from"./iframe-C3o-MlUy.js";import{L as K}from"./Loader-Ba6IOZ8c.js";import{u as O,a as B}from"./i18next-CEY2YAwM.js";import{g as V}from"./getUserAuthData-Bm7Ac1PY.js";import{T as F,a as P}from"./Text-B2gU8dYJ.js";import{b as $}from"./useAppDispatch-DV8wwSBw.js";import{u as U}from"./useTranslation-B2QVmqVC.js";import{R as G}from"./RouterDecorator-DTQIMn4G.js";import{S as u}from"./StoreDecorator-BqFcQM5B.js";import"./index-DJkmxc1E.js";import"./useTheme-DNLmAFmY.js";import"../sb-preview/runtime.js";import"./index-8HAOCAKB.js";import"./index-BhfaPLzF.js";import"./ProfileCard-CMX95jzI.js";import"./Input-SBXS8SFk.js";import"./Avatar-DgOqVGEJ.js";import"./CurrencySelect-BXS0wK0v.js";import"./Select-DReADGzP.js";import"./CountrySelect-D6tEF-9G.js";const H="_Navbar_1wwhx_1",J="_links_1wwhx_10",t={Navbar:H,links:J},Q=e.lazy(()=>q(()=>import("./LoginForm-Ciu9nakZ.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27]),import.meta.url)),y=e.memo(a=>{const{isAuth:s,onClose:o}=a;return r.jsx(I,{isOpen:s,onClose:o,lazy:!0,children:r.jsx(e.Suspense,{fallback:r.jsx(K,{}),children:r.jsx(Q,{onSuccess:o})})})});y.__docgenInfo={description:"",methods:[],displayName:"LoginModal",props:{className:{required:!1,tsType:{name:"string"},description:""},isAuth:{required:!1,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const E=({className:a})=>{const{t:s}=U("translation"),[o,d]=e.useState(!1),p=O(V),l=$(),M=e.useCallback(()=>{d(!1)},[]),w=e.useCallback(()=>{d(!0)},[]),z=e.useCallback(()=>{l(B.logout())},[l]);return p?r.jsxs("div",{className:h(t.Navbar,{},[a]),children:[r.jsx(F,{theme:P.NORMAL,text:p.username}),r.jsx(g,{theme:f.CLEAR_INVERTED,className:t.links,onClick:z,children:s("Выйти")})]}):r.jsxs("div",{className:h(t.Navbar,{},[a]),children:[r.jsx(g,{theme:f.CLEAR_INVERTED,className:t.links,onClick:w,children:s("Войти")}),o&&r.jsx(y,{isAuth:o,onClose:M})]})},W=e.memo(E);E.__docgenInfo={description:"",methods:[],displayName:"Navbar",props:{className:{required:!1,tsType:{name:"string"},description:""}}};const br={title:"widget/Navbar",component:W,argTypes:{backgroundColor:{control:"color"}},decorators:[G,u({loginForm:{username:"username",password:"123"}})]},n={args:{}},i={args:{},decorators:[u({user:{authData:{id:"1",username:"admin"}}})]},m={args:{},decorators:[j(C.DARK)]},c={args:{},decorators:[u({user:{authData:{id:"1",username:"admin"}}}),j(C.DARK)]};var D,_,A;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(N=(x=i.parameters)==null?void 0:x.docs)==null?void 0:N.source}}};var b,k,v;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)]
}`,...(v=(k=m.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var L,R,S;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {},
  decorators: [StoreDecorator({
    user: {
      authData: {
        id: "1",
        username: "admin"
      }
    }
  }), ThemeDecorator(Theme.DARK)]
}`,...(S=(R=c.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};const kr=["Light","LightAuthtorized","Dark","DarkAuthtorized"];export{m as Dark,c as DarkAuthtorized,n as Light,i as LightAuthtorized,kr as __namedExportsOrder,br as default};
