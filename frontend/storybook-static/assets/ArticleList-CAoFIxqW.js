import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{c as d}from"./classNames-DgDD4s-s.js";import{b as o}from"./TextBlock-rgxTaeNS.js";import{a as p,A}from"./ArticleListItem-XSJToFHR.js";const L="_ArticleList_283wo_1",u={ArticleList:L},f=c=>{const{className:l,articles:s,isLoading:i,view:r=o.SMALL}=c;console.log(s," articles");const a=e=>new Array(e===o.SMALL?9:3).fill(0).map((g,m)=>t.jsx(p,{view:e},m)),n=e=>t.jsx(A,{article:e,view:r,isLoading:i},e.id);return t.jsxs("div",{className:d(u.ArticleList,{},[l]),children:[s.length>0?s.map(n):null,i&&a(r)]})};f.__docgenInfo={description:"",methods:[],displayName:"ArticleList",props:{className:{required:!1,tsType:{name:"string"},description:""},articles:{required:!0,tsType:{name:"Array",elements:[{name:"Article"}],raw:"Article[]"},description:""},isLoading:{required:!0,tsType:{name:"boolean"},description:""},view:{required:!1,tsType:{name:"ArticleViewMode"},description:""}}};export{f as A};
