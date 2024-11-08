import{j as n}from"./jsx-runtime-CexXSJP5.js";import{r as l}from"./index-BP8_t0zE.js";import{c as M}from"./classNames-DgDD4s-s.js";import"./ArticleDetails-gslILsrH.js";import{b as N,c as V}from"./ArticleList-Dg-nlrd1.js";import{A as R}from"./ArticleViewSelector-C0AkOxhh.js";import{b as k,d as O,c as D,a as W,u as h}from"./scrollSave-_auc3EBr.js";import{b as f,c as L,A as _}from"./article-CmWc1HkS.js";import{t as F,A as C}from"./userSlice-BZds-gGt.js";import{C as $}from"./Card-CIehstmu.js";import{I as q}from"./Input-SBXS8SFk.js";const ge=a=>{var e;return((e=a.articlesPage)==null?void 0:e.isLoading)||!1},pe=a=>{var e;return(e=a.articlesPage)==null?void 0:e.error},Q=a=>{var e;return((e=a.articlesPage)==null?void 0:e.view)||f.SMALL},G=a=>{var e;return((e=a.articlesPage)==null?void 0:e.page)||1},H=a=>{var e;return((e=a.articlesPage)==null?void 0:e.limit)||9},me=a=>{var e;return(e=a.articlesPage)==null?void 0:e.hasMore},ue=a=>{var e;return(e=a.articlesPage)==null?void 0:e._inited},w=a=>{var e;return((e=a.articlesPage)==null?void 0:e.search)??""},v=a=>{var e;return((e=a.articlesPage)==null?void 0:e.sort)??L.CREATED},b=a=>{var e;return((e=a.articlesPage)==null?void 0:e.order)??"asc"},I=a=>{var e;return((e=a.articlesPage)==null?void 0:e.type)??_.ALL},K=a=>{const e=new URLSearchParams(window.location.search);return Object.entries(a).map(([t,r])=>{console.log(`${t}: ${r}, name and value`),r!==void 0&&e.set(t,r)}),`?${e.toString()}`},U=a=>{window.history.pushState(null,"",K(a))},P=k("articlesPage/fetchArticles",async(a,e)=>{const{extra:t,rejectWithValue:r,getState:i}=e,y=G(i()),S=H(i()),A=w(i()),s=b(i()),p=v(i()),m=I(i());try{U({sort:p,order:s,search:A,type:m});const u=await t.api.get("/articles",{params:{_limit:S,_page:y,_sort:p,_order:s,type:m===_.ALL?void 0:m,q:A}});if(!u.data)throw new Error;return u.data}catch{return r(F("Ошибка"))}}),g=O({selectId:a=>a.id}),he=g.getSelectors(a=>a.articlesPage||g.getInitialState()),T=D({name:"articlesPage",initialState:g.getInitialState({isLoading:!1,error:void 0,ids:[],entities:{},view:f.SMALL,_inited:!1,hasMore:!0,page:1,limit:9,order:"asc",search:"",sort:L.CREATED,type:_.ALL}),reducers:{setViewMode:(a,e)=>{a.view=e.payload,localStorage.setItem(C,e.payload)},initState:a=>{const e=localStorage.getItem(C);a.view=e,a.limit=e===f.SMALL?9:4,a._inited=!0},setPage:(a,e)=>{a.page=e.payload},setOrder:(a,e)=>{a.order=e.payload},setSearch:(a,e)=>{a.search=e.payload},setSort:(a,e)=>{a.sort=e.payload},setType:(a,e)=>{a.type=e.payload}},extraReducers(a){a.addCase(P.pending,(e,t)=>{e.error=void 0,e.isLoading=!0,t.meta.arg.replace&&g.removeAll(e)}).addCase(P.fulfilled,(e,t)=>{e.isLoading=!1,e.hasMore=t.payload.length>=e.limit,t.meta.arg.replace?g.setAll(e,t.payload):g.addMany(e,t.payload)}).addCase(P.rejected,(e,t)=>{e.isLoading=!1,e.error=t.payload})}}),{reducer:Ae}=T,{actions:o}=T,Y="_search_14v9a_1",z="_sortWrapper_14v9a_5",B="_tabs_14v9a_12",J="_searchInput_14v9a_16",d={search:Y,sortWrapper:z,tabs:B,searchInput:J};function X(a,e){const t=l.useRef();return l.useCallback((...r)=>{t.current&&clearTimeout(t.current),t.current=setTimeout(()=>{a(...r)},e)},[a,e])}const Z=a=>{const{className:e}=a,t=W(),r=h(Q),i=h(w),y=h(v),S=h(b),A=h(I),s=l.useCallback(()=>{t(P({replace:!0}))},[t]),p=X(s,300),m=l.useCallback(c=>{t(o.setViewMode(c))},[t]),u=l.useCallback(c=>{t(o.setSearch(c)),t(o.setPage(1)),p()},[t,p]),j=l.useCallback(c=>{t(o.setOrder(c)),t(o.setPage(1)),s()},[t,s]),x=l.useCallback(c=>{t(o.setSort(c)),t(o.setPage(1)),s()},[t,s]),E=l.useCallback(c=>{t(o.setType(c)),t(o.setPage(1)),s()},[t,s]);return n.jsxs("div",{className:M(d.ArticlesPageFilters,{},[e]),children:[n.jsxs("div",{className:d.sortWrapper,children:[n.jsx(N,{sort:y,order:S,onChangeOrder:j,onChangeSort:x}),n.jsx(R,{className:d.viewSelector,view:r,onViewClick:m})]}),n.jsx($,{className:d.search,children:n.jsx(q,{className:d.searchInput,placeholder:"Поиск",value:i,onChange:u})}),n.jsx(V,{className:d.tabs,onChangeType:E,value:A})]})};Z.__docgenInfo={description:"",methods:[],displayName:"ArticlesPageFilters",props:{className:{required:!1,tsType:{name:"string"},description:""}}};export{Z as A,G as a,ge as b,o as c,ue as d,Q as e,P as f,me as g,pe as h,he as i,Ae as j};