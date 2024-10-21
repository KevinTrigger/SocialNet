import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{c as n}from"./classNames-DgDD4s-s.js";import{a as v,c as N,T as g,S as _}from"./ArticleDetails-DrFKN5p1.js";import{r as h}from"./index-CTjT7uj6.js";import{T as a,c as x,a as k}from"./Text-a7QVxXHR.js";import{I as A}from"./Code-JB95SH0k.js";import{C as j}from"./Card-Bd8Xtrjy.js";import{A as f,a as L}from"./Avatar-BpDMNdIA.js";import{B as T,a as y}from"./Button-FfmSwvyD.js";import{R as w}from"./routeConfig-BZWcKKFi.js";import{u as I}from"./index-CVbFUeQw.js";const B="_ArticleList_283wo_1",S={ArticleList:B},q="_ArticleListItem_1o5dk_1",E="_icon_1o5dk_5",M="_BIG_1o5dk_9",C="_authorAndDate_1o5dk_12",W="_date_1o5dk_16",D="_titleAndType_1o5dk_19",G="_imageWrap_1o5dk_25",R="_image_1o5dk_25",$="_footer_1o5dk_33",z="_views_1o5dk_38",b="_types_1o5dk_44",V="_textBlock_1o5dk_47",O="_SMALL_1o5dk_57",X="_card_1o5dk_60",H="_stats_1o5dk_71",P="_title_1o5dk_19",s={ArticleListItem:q,icon:E,BIG:M,authorAndDate:C,date:W,titleAndType:D,imageWrap:G,image:R,footer:$,views:z,types:b,textBlock:V,SMALL:O,card:X,stats:H,"appear-animate":"_appear-animate_1o5dk_1",title:P},u=l=>{const{className:c,article:t,view:i}=l,o=e.jsx(a,{text:t.type.join(",  "),className:s.types}),r=t.blocks.find(p=>{if(p.type===v.TEXT)return p.paragraphs}),d=I(),m=h.useCallback(()=>{d(w.article_details+t.id)},[d,t]);return i==N.BIG?e.jsx("div",{className:n(s.ArticleListItem,{},[c,s[i]]),children:e.jsxs(j,{className:s.card,children:[e.jsxs("div",{className:s.header,children:[e.jsxs("div",{className:s.authorAndDate,children:[e.jsx(f,{rounded:!0,size:L.XS,src:t.user.avatar}),e.jsx(a,{text:t.user.username}),e.jsx(a,{className:s.date,text:t.createdAt})]}),e.jsxs("div",{className:s.titleAndType,children:[e.jsx(a,{title:t.title}),o]})]}),e.jsx("div",{className:s.imageWrap,children:e.jsx("img",{className:s.image,src:t.img,alt:t.title})}),r&&e.jsx(g,{block:r,className:s.textBlock}),e.jsxs("div",{className:s.footer,children:[e.jsx(T,{onClick:m,theme:y.OUTLINE,children:"Читать далее..."}),e.jsxs("div",{className:s.views,children:[e.jsx(a,{text:`${t.views}`}),e.jsx(A,{className:s.icon,Svg:_})]})]})]})}):e.jsx("div",{className:n(s.ArticleListItem,{},[c,s[i]]),children:e.jsxs(j,{onClick:m,className:s.card,children:[e.jsxs("div",{className:s.imageWrap,children:[e.jsx(a,{className:s.date,text:t.createdAt,align:x.RIGHT}),e.jsx("img",{className:s.image,src:t.img,alt:t.title,width:50})]}),e.jsxs("div",{className:s.infoWrap,children:[e.jsxs("div",{className:s.stats,children:[o,e.jsxs("div",{className:s.views,children:[e.jsx(a,{text:`${t.views}`}),e.jsx(A,{className:s.icon,Svg:_})]})]}),e.jsx(a,{align:x.CENTER,className:s.title,text:t.title,size:k.L})]})]})})};u.__docgenInfo={description:"",methods:[],displayName:"ArticleListItem",props:{className:{required:!1,tsType:{name:"string"},description:""},article:{required:!0,tsType:{name:"Article"},description:""},view:{required:!0,tsType:{name:"ArticleViewMode"},description:""}}};const U=l=>{const{className:c,articles:t,view:i=N.SMALL}=l,o=r=>e.jsx(u,{article:r,view:i},r.id);return e.jsx("div",{className:n(S.ArticleList,{},[c]),children:t.length>0?t.map(o):null})};U.__docgenInfo={description:"",methods:[],displayName:"ArticleList",props:{className:{required:!1,tsType:{name:"string"},description:""},articles:{required:!0,tsType:{name:"Array",elements:[{name:"Article"}],raw:"Article[]"},description:""},isLoading:{required:!1,tsType:{name:"boolean"},description:""},view:{required:!1,tsType:{name:"ArticleViewMode"},description:""}}};export{U as A};
