const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./LoginForm-Du-ngj9b.js","./jsx-runtime-CexXSJP5.js","./index-BP8_t0zE.js","./classNames-DgDD4s-s.js","./Button-DnnjDDNB.js","./Button-N5bCyqdB.css","./Input-SBXS8SFk.js","./Input-CxcEy6wc.css","./scrollSave-CvpIp14x.js","./index-DJkmxc1E.js","./StoreDecorator-slo6t7PH.js","./userSlice-WveEQYTL.js","./localStorage-CnWtazwr.js","./articleDetailsSlice-DlMXZcHp.js","./profileSlice-1TfP4bnM.js","./ProfileCard-B5KIZYPb.js","./Text-BfKY59Gu.js","./Text-B-ip9wQX.css","./Avatar-CxpHuU1U.js","./Avatar-Cur3NsWC.css","./CurrencySelect-NgA3ulSF.js","./Select-BZBKgAeq.js","./Select-PXv4hklc.css","./useTranslation-B2QVmqVC.js","./CountrySelect-DEfd_jUe.js","./Skeleton-CD873yLi.js","./Skeleton-BIMKT0dE.css","./ProfileCard-Dj3P299x.css","./addCommentFormSlice-BAHhMvCj.js","./articleDetailsCommentsSlice-BucEQhGb.js","./DynamicModuleLoader-aQDuflIu.js","./LoginForm-DXPcGeK5.css"])))=>i.map(i=>d[i]);
import{T as S,a as C}from"./ThemeDecorator-_gfN7HEO.js";import{r as o}from"./index-BP8_t0zE.js";import{j as r}from"./jsx-runtime-CexXSJP5.js";import{c as l}from"./classNames-DgDD4s-s.js";import{B as h,a as f}from"./Button-DnnjDDNB.js";import{M as w}from"./Modal-DNXlduIk.js";import{_ as q}from"./iframe-DxnMb3O-.js";import{L as K}from"./Loader-DmEDZ_u4.js";import{u as B}from"./userSlice-WveEQYTL.js";import{g as O}from"./getUserAuthData-Bm7Ac1PY.js";import{e as P,f as V}from"./scrollSave-CvpIp14x.js";import{u as F}from"./useTranslation-B2QVmqVC.js";import{R as $}from"./RouterDecorator-BKGnvDy4.js";import{S as p}from"./StoreDecorator-slo6t7PH.js";import"./index-DJkmxc1E.js";import"./useTheme-DNLmAFmY.js";import"../sb-preview/runtime.js";import"./localStorage-CnWtazwr.js";import"./index-C_MfmDJz.js";import"./index-BhItUGrV.js";import"./articleDetailsSlice-DlMXZcHp.js";import"./profileSlice-1TfP4bnM.js";import"./ProfileCard-B5KIZYPb.js";import"./Text-BfKY59Gu.js";import"./Input-SBXS8SFk.js";import"./Avatar-CxpHuU1U.js";import"./CurrencySelect-NgA3ulSF.js";import"./Select-BZBKgAeq.js";import"./CountrySelect-DEfd_jUe.js";import"./Skeleton-CD873yLi.js";import"./addCommentFormSlice-BAHhMvCj.js";import"./articleDetailsCommentsSlice-BucEQhGb.js";const U="_Navbar_ldj4h_1",G="_links_ldj4h_10",t={Navbar:U,links:G},H=o.lazy(()=>new Promise(e=>{setTimeout(()=>e(q(()=>import("./LoginForm-Du-ngj9b.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]),import.meta.url)),1500)})),R=o.memo(e=>{const{isAuth:s,onClose:a}=e;return r.jsx(w,{isOpen:s,onClose:a,lazy:!0,children:r.jsx(o.Suspense,{fallback:r.jsx(K,{}),children:r.jsx(H,{onSuccess:a})})})});R.__docgenInfo={description:"",methods:[],displayName:"LoginModal",props:{className:{required:!1,tsType:{name:"string"},description:""},isAuth:{required:!1,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const y=({className:e})=>{const{t:s}=F("translation"),[a,u]=o.useState(!1),E=P(O),d=V(),M=o.useCallback(()=>{u(!1)},[]),z=o.useCallback(()=>{u(!0)},[]),I=o.useCallback(()=>{d(B.logout())},[d]);return E?r.jsx("nav",{className:l(t.Navbar,{},[e]),children:r.jsx(h,{theme:f.CLEAR_INVERTED,className:t.links,onClick:I,children:s("Выйти")})}):r.jsxs("nav",{className:l(t.Navbar,{},[e]),children:[r.jsx(h,{theme:f.CLEAR_INVERTED,className:t.links,onClick:z,children:s("Войти")}),a&&r.jsx(R,{isAuth:a,onClose:M})]})},J=o.memo(y);y.__docgenInfo={description:"",methods:[],displayName:"Navbar",props:{className:{required:!1,tsType:{name:"string"},description:""}}};const Lr={title:"widget/Navbar",component:J,argTypes:{backgroundColor:{control:"color"}},decorators:[$,p({loginForm:{username:"username",password:"123"}})]},n={},i={decorators:[p({user:{authData:{id:"1",username:"admin"}}})]},m={decorators:[S(C.DARK)]},c={decorators:[p({user:{authData:{id:"1",username:"admin"}}}),S(C.DARK)]};var g,D,_;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(_=(D=n.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};var A,N,T;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  decorators: [StoreDecorator({
    user: {
      authData: {
        id: "1",
        username: "admin"
      }
    }
  })]
}`,...(T=(N=i.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var k,b,v;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  decorators: [ThemeDecorator(Theme.DARK)]
}`,...(v=(b=m.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var x,j,L;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  decorators: [StoreDecorator({
    user: {
      authData: {
        id: "1",
        username: "admin"
      }
    }
  }), ThemeDecorator(Theme.DARK)]
}`,...(L=(j=c.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};const Sr=["Light","LightAuthtorized","Dark","DarkAuthtorized"];export{m as Dark,c as DarkAuthtorized,n as Light,i as LightAuthtorized,Sr as __namedExportsOrder,Lr as default};