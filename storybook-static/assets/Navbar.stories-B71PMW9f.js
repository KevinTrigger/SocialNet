const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./LoginForm-CvkFiRYU.js","./jsx-runtime-DR9Q75dM.js","./index-DRjF_FHU.js","./classNames-DgDD4s-s.js","./Button-C5g2HnJ_.js","./Button-DaSGojsy.css","./Input-BB71l9KN.js","./Input-CKiohvtz.css","./scrollSave-CNeLDUKN.js","./index-rX-Bn4lm.js","./StoreDecorator-Dbr_w3qI.js","./userSlice-CdonUkG-.js","./profileSlice-BZf1TSNQ.js","./ProfileCard-BkOs2ppH.js","./Text-v1Mx-HOT.js","./Text-G-j4YcOU.css","./Avatar-Bxkdti11.js","./Avatar-DwOEaF_A.css","./CurrencySelect-D2cod156.js","./Select-DUCTPjr8.js","./Select-DhHGP52-.css","./useTranslation-BUpB3eR0.js","./CountrySelect-BTp0GpiY.js","./Skeleton-Betdy8Xd.js","./Skeleton-8-ywEC92.css","./HStack-CaG30RU_.js","./Flex-C5DsYTI8.js","./Flex-CilolgXy.css","./ProfileCard-BaqFGx4F.css","./addCommentFormSlice-CH0FsWet.js","./index-C6Ymil2s.js","./LoginForm-BzxK40Ve.css"])))=>i.map(i=>d[i]);
import{T as C,a as y}from"./ThemeDecorator-BCi7Uwnf.js";import{r as e}from"./index-DRjF_FHU.js";import{j as r}from"./jsx-runtime-DR9Q75dM.js";import{c as g}from"./classNames-DgDD4s-s.js";import{B as f,a as _}from"./Button-C5g2HnJ_.js";import{M as O}from"./Modal-C8uoVz8X.js";import{_ as V}from"./iframe-CYaqbDV-.js";import{L as W}from"./Loader-Be95oddb.js";import{u as B}from"./userSlice-CdonUkG-.js";import{g as $}from"./getUserAuthData-Bm7Ac1PY.js";import{a as F,u as X}from"./scrollSave-CNeLDUKN.js";import{T as Y,b as G}from"./Text-v1Mx-HOT.js";import{A,a as H}from"./AppLink-CEsaRZ1G.js";import{R as u}from"./ArticleList-D2tggb2I.js";import{A as J,a as Q}from"./Avatar-Bxkdti11.js";import{u as Z}from"./useTranslation-BUpB3eR0.js";import{u as rr}from"./index-CZJRB5QZ.js";import{R as er}from"./RouterDecorator-CwRlzliy.js";import{S as d}from"./StoreDecorator-Dbr_w3qI.js";import"./index-rX-Bn4lm.js";import"./useTheme-DwunGOKO.js";import"../sb-preview/runtime.js";import"./index-BB2jNUZ5.js";import"./article-CmWc1HkS.js";import"./Icon-AhLlVS1L.js";import"./ArticleDetails-C07JOobX.js";import"./Skeleton-Betdy8Xd.js";import"./Code-C87xehsd.js";import"./HStack-CaG30RU_.js";import"./Flex-C5DsYTI8.js";import"./Card-DL3b9dGt.js";import"./ArticleViewSelector-pROLgH_B.js";import"./Select-DUCTPjr8.js";import"./Tabs-DDFXz4a3.js";import"./NotFoundPage-ClSjrPvd.js";import"./Page-CWv5Pw3X.js";import"./profileSlice-BZf1TSNQ.js";import"./ProfileCard-BkOs2ppH.js";import"./Input-BB71l9KN.js";import"./CurrencySelect-D2cod156.js";import"./CountrySelect-BTp0GpiY.js";import"./addCommentFormSlice-CH0FsWet.js";import"./index-C6Ymil2s.js";const or="_Navbar_gx3ng_1",ar="_links_gx3ng_10",tr="_authUser_gx3ng_14",sr="_authWrap_gx3ng_19",o={Navbar:or,links:ar,authUser:tr,authWrap:sr},ir=e.lazy(()=>V(()=>import("./LoginForm-CvkFiRYU.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]),import.meta.url)),z=e.memo(i=>{const{isAuth:t,onClose:s}=i;return r.jsx(O,{isOpen:t,onClose:s,lazy:!0,children:r.jsx(e.Suspense,{fallback:r.jsx(W,{}),children:r.jsx(ir,{onSuccess:s})})})});z.__docgenInfo={description:"",methods:[],displayName:"LoginModal",props:{className:{required:!1,tsType:{name:"string"},description:""},isAuth:{required:!1,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const M=({className:i})=>{const{t}=Z("translation"),[s,l]=e.useState(!1),{pathname:I}=rr(),h=F(),a=X($),P=I===u.articles,U=u.profile+(a==null?void 0:a.id),q=e.useCallback(()=>{l(!1)},[]),w=e.useCallback(()=>{l(!0)},[]),K=e.useCallback(()=>{h(B.logout())},[h]);return a?r.jsxs("nav",{className:g(o.Navbar,{},[i]),children:[r.jsxs("div",{className:o.authWrap,children:[r.jsx(A,{to:U,children:r.jsx(J,{src:a.avatar,rounded:!0,size:Q.XS})}),r.jsx(Y,{theme:G.INVERTED,className:o.authUser,title:a.username})]}),P&&r.jsx(A,{className:o.createLink,theme:H.SECONDARY,to:`${u.article_create}`,children:t("Создать статью")}),r.jsx(f,{theme:_.CLEAR_INVERTED,className:o.links,onClick:K,children:t("Выйти")})]}):r.jsxs("nav",{className:g(o.Navbar,{},[i]),children:[r.jsx(f,{theme:_.CLEAR_INVERTED,className:o.links,onClick:w,children:t("Войти")}),s&&r.jsx(z,{isAuth:s,onClose:q})]})},nr=e.memo(M);M.__docgenInfo={description:"",methods:[],displayName:"Navbar",props:{className:{required:!1,tsType:{name:"string"},description:""}}};const Jr={title:"widget/Navbar",component:nr,argTypes:{backgroundColor:{control:"color"}},decorators:[er,d({loginForm:{username:"username",password:"123"}})]},n={},m={decorators:[d({user:{authData:{id:"1",username:"admin"}}})]},c={decorators:[C(y.DARK)]},p={decorators:[d({user:{authData:{id:"1",username:"admin"}}}),C(y.DARK)]};var x,D,N;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(N=(D=n.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var T,k,v;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  decorators: [StoreDecorator({
    user: {
      authData: {
        id: "1",
        username: "admin"
      }
    }
  })]
}`,...(v=(k=m.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var L,b,j;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  decorators: [ThemeDecorator(Theme.DARK)]
}`,...(j=(b=c.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var R,S,E;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  decorators: [StoreDecorator({
    user: {
      authData: {
        id: "1",
        username: "admin"
      }
    }
  }), ThemeDecorator(Theme.DARK)]
}`,...(E=(S=p.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};const Qr=["Light","LightAuthtorized","Dark","DarkAuthtorized"];export{c as Dark,p as DarkAuthtorized,n as Light,m as LightAuthtorized,Qr as __namedExportsOrder,Jr as default};
