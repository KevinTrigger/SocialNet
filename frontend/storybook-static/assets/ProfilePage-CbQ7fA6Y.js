import{j as o}from"./jsx-runtime-CexXSJP5.js";import{r as t}from"./index-BP8_t0zE.js";import{D as S}from"./userSlice-BZds-gGt.js";import{g as _,p as s,u as B,V as n,f as L,a as v}from"./profileSlice-lH-U31WR.js";import{P as H}from"./ProfileCard-XgMEbxdS.js";import{a as h,u as l}from"./scrollSave-_auc3EBr.js";import{c as D}from"./classNames-DgDD4s-s.js";import{T as N,b as V}from"./Text-CChfMvu9.js";import{B as P,a as g}from"./Button-DnnjDDNB.js";import{g as M}from"./getUserAuthData-Bm7Ac1PY.js";import{u as T}from"./useTranslation-B2QVmqVC.js";import{P as W}from"./Page-BojqNlGd.js";import{f as F}from"./index-g03I8CFB.js";import"./Input-SBXS8SFk.js";import"./Avatar-CxpHuU1U.js";import"./CurrencySelect-D4yvdR8R.js";import"./Select-BAegK4Fl.js";import"./CountrySelect-DlZWor1J.js";import"./Skeleton-CD873yLi.js";import"./index-DJkmxc1E.js";const q=a=>{var e;return(e=a.profile)==null?void 0:e.error},G=a=>{var e;return(e=a.profile)==null?void 0:e.isLoading},x=a=>{var e;return(e=a.profile)==null?void 0:e.readonly},Y=a=>{var e;return(e=a.profile)==null?void 0:e.validateError},$="_ProfilePageHeader_xr9nr_1",w="_editBtn_xr9nr_6",z="_cancelBtn_xr9nr_10",J="_btnsWrapper_xr9nr_14",m={ProfilePageHeader:$,editBtn:w,cancelBtn:z,btnsWrapper:J},A=a=>{const{className:e}=a,{t:i}=T("profile"),c=h(),u=l(x),p=l(M),f=l(_),d=(p==null?void 0:p.id)===(f==null?void 0:f.id),C=t.useCallback(()=>{c(s.setReadonly(!1))},[c]),E=t.useCallback(()=>{c(s.cancelEdit())},[c]),R=t.useCallback(()=>{c(B())},[c]);return o.jsxs("header",{className:D(m.ProfilePageHeader,{},[e]),children:[o.jsx(N,{title:i("Профиль")}),d&&o.jsx("div",{className:m.btnsWrapper,children:u?o.jsx(P,{onClick:C,theme:g.OUTLINE,className:m.editBtn,children:i("Редактировать")}):o.jsxs("div",{className:m.editModeWrap,children:[o.jsx(P,{onClick:E,theme:g.OUTLINE_RED,className:m.cancelBtn,children:i("Отменить")}),o.jsx(P,{theme:g.OUTLINE,className:m.editBtn,onClick:R,children:i("Сохранить")})]})})]})};A.__docgenInfo={description:"",methods:[],displayName:"ProfilePageHeader",props:{className:{required:!1,tsType:{name:"string"},description:""}}};const K={profile:v},Q=()=>{const{t:a}=T("profile"),e=h(),{id:i}=F(),c=l(_),u=l(G),p=l(q),f=l(x),d=l(Y),C=t.useCallback(r=>{e(s.updateProfile({firstname:r||""}))},[e]),E=t.useCallback(r=>{e(s.updateProfile({lastname:r||""}))},[e]),R=t.useCallback(r=>{e(s.updateProfile({age:Number(r||0)}))},[e]),b=t.useCallback(r=>{e(s.updateProfile({country:r}))},[e]),y=t.useCallback(r=>{e(s.updateProfile({currency:r}))},[e]),j=t.useCallback(r=>{e(s.updateProfile({city:r}))},[e]),k=t.useCallback(r=>{e(s.updateProfile({avatar:r||""}))},[e]),I=t.useCallback(r=>{e(s.updateProfile({username:r||""}))},[e]),O=()=>{if(d!=null&&d.length)return d.map(r=>o.jsx(N,{theme:V.ERROR,text:U[r]},r))},U={[n.INCORRECT_USER_FIRSTNAME]:a("Неверно указано имя"),[n.INCORRECT_USER_LASTNAME]:a("Неверно указана фамилия"),[n.INCORRECT_USER_USERNAME]:a("Неверно указан никнейм"),[n.INCORRECT_CHARACTERS]:a("Имя и фамилия не могут содержить числа"),[n.INCORRECT_USER_AGE]:a("Неверно указан возраст"),[n.INCORRECT_USER_COUNTRY]:a("Неверно указана страна"),[n.NO_DATA]:a("Данные отсутствуют"),[n.SERVER_ERROR]:a("Ошибка сервера"),[n.INCORRECT_USER_AVATAR]:a("Неверный путь изображения")};return t.useEffect(()=>{i&&e(L(i))},[e,i]),o.jsx(S,{reducers:K,removeAfterUnmount:!0,children:o.jsxs(W,{children:[o.jsx(A,{}),O(),o.jsx(H,{data:c,isLoading:u,error:p,readonly:f,onChangeFirstname:C,onChangeLastname:E,onChangeAge:R,onChangeCountry:b,onChangeCurrency:y,onChangeCity:j,onChangeAvatar:k,onChangeUsername:I})]})})};Q.__docgenInfo={description:"",methods:[],displayName:"ProfilePage",props:{className:{required:!1,tsType:{name:"string"},description:""}}};export{Q as ProfilePage,Q as default};
