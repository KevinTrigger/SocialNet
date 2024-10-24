import{j as l}from"./jsx-runtime-CexXSJP5.js";import{r as d}from"./index-BP8_t0zE.js";import{c as x}from"./classNames-DgDD4s-s.js";import"./ArticleDetails-BP-zcpVj.js";import{A as w}from"./ArticleList-Djp0BloV.js";import{A as _}from"./ArticleViewSelector-DSGJbVDr.js";import{D as M}from"./DynamicModuleLoader-aQDuflIu.js";import{b as A,d as E,c as T,f as I,e as g}from"./scrollSave-CvpIp14x.js";import{b as p}from"./TextBlock-4krNJLNh.js";import{t as j,A as f}from"./localStorage-CnWtazwr.js";import{T as v,b as C}from"./Text-BfKY59Gu.js";import{P as N}from"./Page-D7cPgsF5.js";import"./articleDetailsSlice-DlMXZcHp.js";import"./Skeleton-CD873yLi.js";import"./Avatar-CxpHuU1U.js";import"./Icon-BPdxDrsu.js";import"./Code-bjdoD2wc.js";import"./Button-DnnjDDNB.js";import"./useTranslation-B2QVmqVC.js";import"./ArticleListItem-4BWkTxoR.js";import"./Card--r5Y039_.js";import"./routeConfig-C3UT4L8y.js";import"./iframe-MtPL-6XE.js";import"../sb-preview/runtime.js";import"./NotFoundPage-DMQjtlN9.js";import"./index-BhItUGrV.js";import"./index-DJkmxc1E.js";const u=t=>{var e;return((e=t.articlesPage)==null?void 0:e.isLoading)||!1},V=t=>{var e;return(e=t.articlesPage)==null?void 0:e.error},R=t=>{var e;return((e=t.articlesPage)==null?void 0:e.view)||p.SMALL},b=t=>{var e;return((e=t.articlesPage)==null?void 0:e.page)||1},k=t=>{var e;return((e=t.articlesPage)==null?void 0:e.limit)||9},D=t=>{var e;return(e=t.articlesPage)==null?void 0:e.hasMore},O=t=>{var e;return(e=t.articlesPage)==null?void 0:e._inited},n=A("articlesPage/fetchArticles",async(t,e)=>{const{extra:a,rejectWithValue:i,getState:s}=e,{page:r=1}=t,o=k(s());try{const c=await a.api.get("/articles",{params:{_limit:o,_page:r}});if(!c.data)throw new Error;return c.data}catch{return i(j("Ошибка"))}}),m=E({selectId:t=>t.id}),W=m.getSelectors(t=>t.articlesPage||m.getInitialState()),S=T({name:"articlesPage",initialState:m.getInitialState({isLoading:!1,error:void 0,ids:[],entities:{},view:p.SMALL,_inited:!1,hasMore:!0,page:1}),reducers:{setViewMode:(t,e)=>{t.view=e.payload,localStorage.setItem(f,e.payload)},initState:t=>{const e=localStorage.getItem(f);t.view=e,t.limit=e===p.SMALL?9:4,t._inited=!0},setPage:(t,e)=>{t.page=e.payload}},extraReducers(t){t.addCase(n.pending,e=>{e.error=void 0,e.isLoading=!0}).addCase(n.fulfilled,(e,a)=>{e.isLoading=!1,m.addMany(e,a.payload),e.hasMore=a.payload.length>0}).addCase(n.rejected,(e,a)=>{e.isLoading=!1,e.error=a.payload})}}),{reducer:q}=S,{actions:P}=S,G=A("articlesPage/fetchNextArticlesPage",async(t,e)=>{const{getState:a,dispatch:i}=e,s=D(a()),r=b(a()),o=u(a());s&&!o&&(i(P.setPage(r+1)),i(n({page:r+1})))}),H=A("articlesPage/initArticlesPage",async(t,e)=>{const{getState:a,dispatch:i}=e;O(a())||(i(P.initState()),i(n({page:1})))}),K="_TempStyle_39dxf_1",U={TempStyle:K},Y={articlesPage:q},h=t=>{const{className:e}=t,a=I(),i=g(R),s=g(V),r=g(u),o=g(W.selectAll);d.useEffect(()=>{a(H())},[a]);const c=d.useCallback(()=>{a(G())},[a]),L=d.useCallback(y=>{a(P.setViewMode(y))},[a]);return s?l.jsx(v,{theme:C.ERROR,title:"Ошибка при загрузке списка статей"}):l.jsx(M,{reducers:Y,removeAfterUnmount:!1,children:l.jsxs(N,{className:x(U.ArticlesPage,{},[e]),onScrollEnd:c,children:[l.jsx(_,{view:i,onViewClick:L}),l.jsx(w,{articles:o,view:i,isLoading:r})]})})},he=d.memo(h);h.__docgenInfo={description:"",methods:[],displayName:"ArticlesPage",props:{className:{required:!1,tsType:{name:"string"},description:""}}};export{he as default};
