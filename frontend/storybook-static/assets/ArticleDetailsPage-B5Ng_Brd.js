const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./CommentForm-DRgFy5Ui.js","./jsx-runtime-CexXSJP5.js","./index-BP8_t0zE.js","./classNames-DgDD4s-s.js","./Input-SBXS8SFk.js","./Input-CxcEy6wc.css","./Button-DnnjDDNB.js","./Button-N5bCyqdB.css","./DynamicModuleLoader-aQDuflIu.js","./scrollSave-CvpIp14x.js","./index-DJkmxc1E.js","./addCommentFormSlice-BAHhMvCj.js","./CommentForm-BTdIF2D1.css"])))=>i.map(i=>d[i]);
import{j as t}from"./jsx-runtime-CexXSJP5.js";import{c as f}from"./classNames-DgDD4s-s.js";import{r as n}from"./index-BP8_t0zE.js";import{T as _}from"./Text-BfKY59Gu.js";import{C}from"./CommentList-BHlxZvIm.js";import{D as x}from"./DynamicModuleLoader-aQDuflIu.js";import{f as u,g as j,a as P}from"./articleDetailsCommentsSlice-BucEQhGb.js";import{b as T,f as y,e as d}from"./scrollSave-CvpIp14x.js";import{_ as N}from"./iframe-Da3z6XfF.js";import{g as F,a as L,A as E}from"./ArticleDetails-DNB7ceQ3.js";import"./ArticleList-BFAKmBrP.js";import"./ArticleSortSelector-Cxvm9rSO.js";import"./userSlice-WveEQYTL.js";import{g as I}from"./getUserAuthData-Bm7Ac1PY.js";import{t as v}from"./localStorage-CnWtazwr.js";import{R as k}from"./routeConfig-IfocYX7p.js";import{B as R}from"./Button-DnnjDDNB.js";import{P as B}from"./Page-Bd7fM6RT.js";import{f as b,a as w}from"./index-g03I8CFB.js";import{u as S}from"./useTranslation-B2QVmqVC.js";import"./CommentCard-CaOJt91V.js";import"./Avatar-CxpHuU1U.js";import"./Skeleton-CD873yLi.js";import"./AppLink-B-qF6v0a.js";import"./index-CM02_iVE.js";import"./index-DJkmxc1E.js";import"../sb-preview/runtime.js";import"./articleDetailsSlice-DlMXZcHp.js";import"./TextBlock-4LNlnsRv.js";import"./Icon-BPdxDrsu.js";import"./Code-bjdoD2wc.js";import"./ArticleListItem-B-0oWTpH.js";import"./Card--r5Y039_.js";import"./Select-BAegK4Fl.js";import"./NotFoundPage-BRQFHeEa.js";const U="_commentTitle_h09ma_1",V="_commentForm_h09ma_5",p={commentTitle:U,commentForm:V},q=r=>{var e;return(e=r.articleDetailsComments)==null?void 0:e.isLoading},z=n.lazy(()=>N(()=>import("./CommentForm-DRgFy5Ui.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]),import.meta.url)),M=T("articleDetails/addCommentForArticle",async(r,e)=>{const{extra:s,rejectWithValue:l,getState:i,dispatch:m}=e,a=I(i()),o=F(i());if(!a||!r||!o)return l("no data");try{const c=await s.api.post("/comments",{articleId:o==null?void 0:o.id,userId:a==null?void 0:a.id,text:r});if(!c.data)throw new Error;return m(u(o.id)),c.data}catch{return l(v("Ошибка"))}}),O={articleDetailsComments:P},g=r=>{const{className:e}=r,{id:s}=b(),{t:l}=S("article-details"),i=w(),m=y(),a=d(j.selectAll),o=d(q),c=d(L);n.useEffect(()=>{m(u(s))},[m,s]);const A=n.useCallback(D=>{m(M(D))},[m]),h=n.useCallback(()=>{i(k.articles)},[i]);return s?t.jsx(x,{reducers:O,removeAfterUnmount:!0,children:t.jsxs(B,{className:f(p.ArticleDetailsPage,{},[e]),children:[t.jsx(R,{onClick:h,children:"< Все статьи"}),t.jsx(E,{id:s}),!c&&t.jsxs(t.Fragment,{children:[t.jsx(_,{className:p.commentTitle,title:"Комментарии"}),t.jsx(z,{className:p.commentForm,onSendComment:A}),t.jsx(C,{isLoading:o,comments:a})]})]})}):t.jsx("div",{className:f(p.ArticleDetailsPage,{},[e]),children:l("Статья не найдена")})},yt=n.memo(g);g.__docgenInfo={description:"",methods:[],displayName:"ArticleDetailsPage",props:{className:{required:!1,tsType:{name:"string"},description:""}}};export{yt as default};
