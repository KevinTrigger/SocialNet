import{j as t}from"./jsx-runtime-CexXSJP5.js";import{c as l}from"./classNames-DgDD4s-s.js";import{b as c}from"./article-CmWc1HkS.js";import{a as A,A as L}from"./ArticleListItem-1iX-N0cv.js";import{T as u,a as f}from"./Text-BfKY59Gu.js";const x="_ArticleList_283wo_1",n={ArticleList:x},g=o=>{const{className:r,articles:i,isLoading:s,view:a=c.SMALL}=o,m=e=>new Array(e===c.SMALL?9:3).fill(0).map((j,p)=>t.jsx(A,{view:e},p)),d=e=>t.jsx(L,{article:e,view:a,isLoading:s},e.id);return!s&&!i.length?t.jsx("div",{className:l(n.ArticleList,{},[r]),children:t.jsx(u,{size:f.L,title:"По вашему запросу статьи не найдены"})}):t.jsxs("div",{className:l(n.ArticleList,{},[r]),children:[i.length>0?i.map(d):null,s&&m(a)]})};g.__docgenInfo={description:"",methods:[],displayName:"ArticleList",props:{className:{required:!1,tsType:{name:"string"},description:""},articles:{required:!0,tsType:{name:"Array",elements:[{name:"Article"}],raw:"Article[]"},description:""},isLoading:{required:!0,tsType:{name:"boolean"},description:""},view:{required:!1,tsType:{name:"ArticleViewMode"},description:""}}};export{g as A};
