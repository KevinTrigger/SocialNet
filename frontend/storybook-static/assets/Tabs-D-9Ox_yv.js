import{j as s}from"./jsx-runtime-CexXSJP5.js";import{r as p}from"./index-BP8_t0zE.js";import{c as l}from"./classNames-DgDD4s-s.js";import{C as d,a as t}from"./Card-CIehstmu.js";const b="_Tabs_12e3a_1",u="_tab_12e3a_6",T="_active_12e3a_16",r={Tabs:b,tab:u,active:T},_=n=>{const{className:i,tabs:c,value:o,onTabClick:a}=n,m=p.useCallback(e=>()=>{a(e)},[a]);return s.jsx("div",{className:l(r.Tabs,{},[i]),children:c.map(e=>s.jsx(d,{className:r.tab,theme:e.value===o?t.NORMAL:t.OUTLINE,onClick:m(e),children:e.content}))})};_.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{className:{required:!1,tsType:{name:"string"},description:""},tabs:{required:!0,tsType:{name:"Array",elements:[{name:"TabItem"}],raw:"TabItem[]"},description:""},value:{required:!0,tsType:{name:"string"},description:""},onTabClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(tab: TabItem) => void",signature:{arguments:[{type:{name:"TabItem"},name:"tab"}],return:{name:"void"}}},description:""}}};export{_ as T};
