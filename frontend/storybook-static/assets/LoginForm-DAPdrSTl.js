import{j as s}from"./jsx-runtime-Cw0GR0a5.js";import{r as m}from"./index-CTjT7uj6.js";import{c as F}from"./classNames-DgDD4s-s.js";import{B as _,a as C}from"./Button-FfmSwvyD.js";import{I as g}from"./Input-BnN8jSt7.js";import{d as l}from"./localStorage-BvkLEUEt.js";import{l as d,a as N,b as T}from"./StoreDecorator-CwQ8MMZO.js";import{T as f,b as B}from"./Text-a7QVxXHR.js";import{D as w}from"./DynamicModuleLoader-iRIkfpiq.js";import{b as y}from"./useAppDispatch-Bt7wXbJ2.js";import{u as b}from"./useTranslation-DegO0IwE.js";import"./index-vZN_Bsf0.js";import"./userSlice-D9ZQQa6-.js";import"./articleDetailsSlice-CwCYt7Jc.js";import"./profileSlice-DBOS1-d0.js";import"./ProfileCard-DxAWe1sF.js";import"./Avatar-BpDMNdIA.js";import"./CurrencySelect-D3Go52tV.js";import"./Select-nkddY8PU.js";import"./CountrySelect-DSDE-6B2.js";import"./Skeleton-C9-T3umZ.js";import"./addCommentFormSlice-BakuJiWW.js";import"./articleDetailsCommentsSlice-DNLskI9C.js";const v=o=>{var r;return((r=o==null?void 0:o.loginForm)==null?void 0:r.username)||""},R=o=>{var r;return((r=o==null?void 0:o.loginForm)==null?void 0:r.password)||""},U=o=>{var r;return(r=o==null?void 0:o.loginForm)==null?void 0:r.error},k="_LoginForm_1oxjt_1",E="_input_1oxjt_7",I="_loginBtn_1oxjt_11",i={LoginForm:k,input:E,loginBtn:I},S={loginForm:T},x=o=>{const{className:r,onSuccess:p}=o,{t:e}=b("translation"),n=y(),a=l(v),c=l(R),u=l(U),h=m.useCallback(t=>{n(d.setUsername(t))},[n]),L=m.useCallback(t=>{n(d.setPassword(t))},[n]),j=m.useCallback(async()=>{(await n(N({username:a,password:c}))).meta.requestStatus==="fulfilled"&&p()},[p,n,c,a]);return s.jsx(w,{reducers:S,removeAfterUnmount:!0,children:s.jsxs("div",{className:F(i.LoginForm,{},[r]),children:[s.jsx(f,{title:e("Авторизация")}),u&&s.jsx(f,{theme:B.ERROR,text:u}),s.jsx(g,{className:i.input,placeholder:e("Введите логин"),autoFocus:!0,onChange:h,value:a}),s.jsx(g,{className:i.input,placeholder:e("Введите пароль"),onChange:L,value:c}),s.jsx(_,{className:i.loginBtn,theme:C.OUTLINE,onClick:j,children:e("Войти")})]})})},to=m.memo(x);x.__docgenInfo={description:"",methods:[],displayName:"LoginForm",props:{className:{required:!1,tsType:{name:"string"},description:""},onSuccess:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};export{to as default};
