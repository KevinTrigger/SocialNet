import{j as m}from"./jsx-runtime-CexXSJP5.js";import{r as p}from"./index-BP8_t0zE.js";import{c as u}from"./classNames-DgDD4s-s.js";import{S as d}from"./Select-BZBKgAeq.js";import{u as f}from"./useTranslation-B2QVmqVC.js";var s=(e=>(e.RUB="RUB",e.EUR="EUR",e.USD="USD",e))(s||{});const y=e=>{const{className:n,value:t,onChange:a,readonly:o}=e,{t:i}=f("profile"),l=p.useCallback(r=>{a==null||a(r)},[a]),c=Object.values(s).map(r=>({content:r,value:r}));return m.jsx(d,{className:u("",{},[n]),readonly:o,options:c,value:t,onChange:l,label:i("Валюта")})};y.__docgenInfo={description:"",methods:[],displayName:"CurrencySelect",props:{className:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"Currency"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: Currency) => void",signature:{arguments:[{type:{name:"Currency"},name:"value"}],return:{name:"void"}}},description:""},readonly:{required:!1,tsType:{name:"boolean"},description:""}}};export{y as C,s as a};