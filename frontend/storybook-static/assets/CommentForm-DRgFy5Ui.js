import{j as t}from"./jsx-runtime-CexXSJP5.js";import{r}from"./index-BP8_t0zE.js";import{c as l}from"./classNames-DgDD4s-s.js";import{I as u}from"./Input-SBXS8SFk.js";import{B as C,a as x}from"./Button-DnnjDDNB.js";import{D as f}from"./DynamicModuleLoader-aQDuflIu.js";import{a as h,b as F}from"./addCommentFormSlice-BAHhMvCj.js";import{e as g,f as N}from"./scrollSave-CvpIp14x.js";import"./index-DJkmxc1E.js";const _="_CommentForm_45qh6_1",b="_btn_45qh6_9",s={CommentForm:_,btn:b},T=o=>{var e;return((e=o.addCommentForm)==null?void 0:e.text)??""},j={addCommentForm:F},i=o=>{const{className:e,onSendComment:a}=o,m=g(T),c=N(),n=r.useCallback(p=>{c(h.setText(p))},[c]),d=r.useCallback(()=>{a(m||""),n("")},[n,a,m]);return t.jsx(f,{reducers:j,removeAfterUnmount:!0,children:t.jsxs("div",{className:l(s.CommentForm,{},[e]),children:[t.jsx(u,{value:m,onChange:n,className:s.text,placeholder:">"}),t.jsx(C,{onClick:d,className:s.btn,theme:x.OUTLINE,children:"Отправить"})]})})},E=r.memo(i);i.__docgenInfo={description:"",methods:[],displayName:"CommentForm",props:{className:{required:!1,tsType:{name:"string"},description:""},onSendComment:{required:!0,tsType:{name:"signature",type:"function",raw:"(text: string) => void",signature:{arguments:[{type:{name:"string"},name:"text"}],return:{name:"void"}}},description:""}}};export{E as default};
