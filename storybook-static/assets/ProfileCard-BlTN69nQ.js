import{j as r}from"./jsx-runtime-DR9Q75dM.js";import{c as o}from"./classNames-DgDD4s-s.js";import{T,b as w,c as q}from"./Text-8-U9O7DD.js";import{I as s}from"./Input-D55aBuL7.js";import{A as N,a as k}from"./Avatar-Bxkdti11.js";import{C as P}from"./CurrencySelect-nSBwUG0N.js";import{C as A}from"./CountrySelect-CtdNmfJF.js";import{S as u}from"./Skeleton-Betdy8Xd.js";import{V as l,H as m}from"./HStack-CaG30RU_.js";import{u as S}from"./useTranslation-BUpB3eR0.js";const b="_ProfileCard_1hm43_1",L="_editing_1hm43_7",R="_input_1hm43_11",E="_error_1hm43_15",W="_avatarWrap_1hm43_19",I="_skeleton_wrap_1hm43_23",z="_skeleton_avatar_1hm43_27",t={ProfileCard:b,editing:L,input:R,error:E,avatarWrap:W,skeleton_wrap:I,skeleton_avatar:z},F=p=>{const{className:i,data:e,isLoading:g,error:c,readonly:n,onChangeFirstname:d,onChangeLastname:v,onChangeAge:h,onChangeCity:y,onChangeCountry:f,onChangeCurrency:C,onChangeAvatar:_,onChangeUsername:x}=p,{t:a}=S("profile");if(g)return r.jsx("div",{className:o(t.ProfileCard,{},[i]),children:r.jsxs(l,{className:t.skeleton_wrap,children:[r.jsx(u,{className:t.skeleton_avatar,width:200,height:200,border:"50%"}),r.jsx(u,{className:t.skeleton,width:400,height:235})]})});if(c)return r.jsx(m,{justify:"center",className:o(t.ProfileCard,{},[i,t.error]),children:r.jsx(T,{theme:w.ERROR,align:q.CENTER,title:a("Произошла ошибка при загрузке файлов"),text:a("Попробуйте перезагрузить страницу")})});const j={[t.editing]:!n};return r.jsx("div",{className:o(t.ProfileCard,j,[i]),children:r.jsxs(l,{gap:"16",children:[(e==null?void 0:e.avatar)&&r.jsx(m,{justify:"center",className:t.avatarWrap,children:r.jsx(N,{src:e==null?void 0:e.avatar,size:k.XL,rounded:!0,alt:a("Изображение пользователя")})}),r.jsx(s,{value:e==null?void 0:e.avatar,placeholder:a("Ссылка на аватар"),onChange:_,readonly:n}),r.jsx(s,{value:e==null?void 0:e.username,placeholder:a("Никнейм"),onChange:x,readonly:n}),r.jsx(s,{value:e==null?void 0:e.firstname,placeholder:a("Имя"),onChange:d,readonly:n}),r.jsx(s,{value:e==null?void 0:e.lastname,placeholder:a("Фамилия"),onChange:v,readonly:n}),r.jsx(s,{value:e==null?void 0:e.age,placeholder:a("Возраст"),onChange:h,readonly:n,isNumber:!0}),r.jsx(A,{value:e==null?void 0:e.country,onChange:f,readonly:n}),r.jsx(s,{value:e==null?void 0:e.city,placeholder:a("Город"),onChange:y,readonly:n}),r.jsx(P,{value:e==null?void 0:e.currency,onChange:C,readonly:n})]})})};F.__docgenInfo={description:"",methods:[],displayName:"ProfileCard",props:{className:{required:!1,tsType:{name:"string"},description:""},data:{required:!1,tsType:{name:"Profile"},description:""},isLoading:{required:!1,tsType:{name:"boolean"},description:""},error:{required:!1,tsType:{name:"string"},description:""},readonly:{required:!1,tsType:{name:"boolean"},description:""},onChangeFirstname:{required:!1,tsType:{name:"signature",type:"function",raw:"(value?: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onChangeLastname:{required:!1,tsType:{name:"signature",type:"function",raw:"(value?: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onChangeAge:{required:!1,tsType:{name:"signature",type:"function",raw:"(value?: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onChangeCity:{required:!1,tsType:{name:"signature",type:"function",raw:"(value?: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onChangeCountry:{required:!1,tsType:{name:"signature",type:"function",raw:"(value?: Country) => void",signature:{arguments:[{type:{name:"Country"},name:"value"}],return:{name:"void"}}},description:""},onChangeCurrency:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: Currency) => void",signature:{arguments:[{type:{name:"Currency"},name:"value"}],return:{name:"void"}}},description:""},onChangeAvatar:{required:!1,tsType:{name:"signature",type:"function",raw:"(value?: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onChangeUsername:{required:!1,tsType:{name:"signature",type:"function",raw:"(value?: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};export{F as P};
