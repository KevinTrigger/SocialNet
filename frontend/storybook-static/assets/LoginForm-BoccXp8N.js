import{j as n}from"./jsx-runtime-Cw0GR0a5.js";import{r as a}from"./index-CTjT7uj6.js";import{c as F}from"./classNames-DgDD4s-s.js";import{B as _,a as C}from"./Button-DO_jRr2A.js";import{I as g}from"./Input-BQBonnYG.js";import"./redux-toolkit.esm-DTxM1URu.js";import{u as l,l as d,a as N,b as T}from"./StoreDecorator-WEnoC5CX.js";import{T as f,a as B}from"./Text-ZeJ8tgLV.js";import{D as w}from"./DynamicModuleLoader-V7CSOpm4.js";import{u as y}from"./useAppDispatch-DpCIFl3O.js";import{u as v}from"./useTranslation-DegO0IwE.js";import"./index-vZN_Bsf0.js";import"./i18next-DXJLt4wh.js";const R=o=>{var s;return((s=o==null?void 0:o.loginForm)==null?void 0:s.username)||""},U=o=>{var s;return((s=o==null?void 0:o.loginForm)==null?void 0:s.password)||""},k=o=>{var s;return(s=o==null?void 0:o.loginForm)==null?void 0:s.error},E="_LoginForm_1oxjt_1",b="_input_1oxjt_7",I="_loginBtn_1oxjt_11",i={LoginForm:E,input:b,loginBtn:I},S={loginForm:T},x=o=>{const{className:s,onSuccess:u}=o,{t:r}=v("translation"),e=y(),m=l(R),c=l(U),p=l(k),h=a.useCallback(t=>{e(d.setUsername(t))},[e]),L=a.useCallback(t=>{e(d.setPassword(t))},[e]),j=a.useCallback(async()=>{(await e(N({username:m,password:c}))).meta.requestStatus==="fulfilled"&&u()},[u,e,c,m]);return n.jsx(w,{reducers:S,removeAfterUnmount:!0,children:n.jsxs("div",{className:F(i.LoginForm,{},[s]),children:[n.jsx(f,{title:r("Авторизация")}),p&&n.jsx(f,{theme:B.ERROR,text:p}),n.jsx(g,{className:i.input,placeholder:r("Введите логин"),autoFocus:!0,onChange:h,value:m}),n.jsx(g,{className:i.input,placeholder:r("Введите пароль"),onChange:L,value:c}),n.jsx(_,{className:i.loginBtn,theme:C.OUTLINE,onClick:j,children:r("Войти")})]})})},V=a.memo(x);x.__docgenInfo={description:"",methods:[],displayName:"LoginForm",props:{className:{required:!1,tsType:{name:"string"},description:""},onSuccess:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};export{V as default};
