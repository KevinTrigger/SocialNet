import{T as v,a as w}from"./ThemeDecorator-vrAVssHn.js";import"./index-CTjT7uj6.js";import{S as D}from"./StoreDecorator-DM5HpEEk.js";import I from"./CommentForm-Ckzg3K81.js";import{R as P}from"./RouterDecorator-Bxi0TMWn.js";import{v as F}from"./v4-CQkTLCs1.js";import"./jsx-runtime-Cw0GR0a5.js";import"./localStorage-BvkLEUEt.js";import"./index-vZN_Bsf0.js";import"./userSlice-D9ZQQa6-.js";import"./index-CVbFUeQw.js";import"./articleDetailsSlice-CwCYt7Jc.js";import"./profileSlice-DBOS1-d0.js";import"./ProfileCard-DxAWe1sF.js";import"./classNames-DgDD4s-s.js";import"./Text-a7QVxXHR.js";import"./Input-BnN8jSt7.js";import"./Avatar-BpDMNdIA.js";import"./CurrencySelect-D3Go52tV.js";import"./Select-nkddY8PU.js";import"./useTranslation-DegO0IwE.js";import"./CountrySelect-DSDE-6B2.js";import"./Skeleton-C9-T3umZ.js";import"./addCommentFormSlice-BakuJiWW.js";import"./articleDetailsCommentsSlice-DNLskI9C.js";import"./Button-FfmSwvyD.js";import"./DynamicModuleLoader-BDb88CFe.js";import"./useAppDispatch-Bt7wXbJ2.js";const{addons:V}=__STORYBOOK_MODULE_PREVIEW_API__,{ImplicitActionsDuringRendering:x}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,{global:g}=__STORYBOOK_MODULE_GLOBAL__;var B="storybook/actions",K=`${B}/action-event`,c={depth:10,clearOnStoryChange:!0,limit:50},S=(o,e)=>{let t=Object.getPrototypeOf(o);return!t||e(t)?t:S(t,e)},L=o=>!!(typeof o=="object"&&o&&S(o,e=>/^Synthetic(?:Base)?Event$/.test(e.constructor.name))&&typeof o.persist=="function"),W=o=>{if(L(o)){let e=Object.create(o.constructor.prototype,Object.getOwnPropertyDescriptors(o));e.persist();let t=Object.getOwnPropertyDescriptor(e,"view"),r=t==null?void 0:t.value;return typeof r=="object"&&(r==null?void 0:r.constructor.name)==="Window"&&Object.defineProperty(e,"view",{...t,value:Object.create(r.constructor.prototype)}),e}return o},Y=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?F():Date.now().toString(36)+Math.random().toString(36).substring(2);function M(o,e={}){let t={...c,...e},r=function(...i){var d,l;if(e.implicit){let O=(d="__STORYBOOK_PREVIEW__"in g?g.__STORYBOOK_PREVIEW__:void 0)==null?void 0:d.storyRenders.find(a=>a.phase==="playing"||a.phase==="rendering");if(O){let a=!((l=window==null?void 0:window.FEATURES)!=null&&l.disallowImplicitActionsInRenderV8),_=new x({phase:O.phase,name:o,deprecated:a});if(a)console.warn(_);else throw _}}let n=V.getChannel(),b=Y(),A=5,p=i.map(W),C=i.length>1?p:p[0],j={id:b,count:0,data:{name:o,args:C},options:{...t,maxDepth:A+(t.depth||3),allowFunction:t.allowFunction||!1}};n.emit(K,j)};return r.isAction=!0,r.implicit=e.implicit,r}var T=(...o)=>{let e=c,t=o;t.length===1&&Array.isArray(t[0])&&([t]=t),t.length!==1&&typeof t[t.length-1]!="string"&&(e={...c,...t.pop()});let r=t[0];(t.length!==1||typeof r=="string")&&(r={},t.forEach(n=>{r[n]=n}));let i={};return Object.keys(r).forEach(n=>{i[n]=M(r[n],e)}),i};const ut={title:"features/CommentForm",component:I,argTypes:{},decorators:[P]},s={args:T("onSendComment"),decorators:[D({addCommentForm:{text:"Текст комментария"}})]},m={args:T("onSendComment"),decorators:[v(w.DARK),D({addCommentForm:{text:"Текст комментария"}})]};var u,f,h;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: actions("onSendComment"),
  decorators: [StoreDecorator({
    addCommentForm: {
      text: "Текст комментария"
    }
  })]
}`,...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var y,E,R;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: actions("onSendComment"),
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
    addCommentForm: {
      text: "Текст комментария"
    }
  })]
}`,...(R=(E=m.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};const ft=["Light","Dark"];export{m as Dark,s as Light,ft as __namedExportsOrder,ut as default};
