import{b as l,d as m,c as g,e as u}from"./scrollSave-_auc3EBr.js";import{t as d}from"./userSlice-BZds-gGt.js";const n=l("articleDetails/fetchCommentsByArticleId",async(t,e)=>{const{extra:a,rejectWithValue:r}=e;if(!t)return r(d("Ошибка"));try{const i=await a.api.get("/comments",{params:{articleId:t,_expand:"user"}});if(!i.data)throw new Error;return i.data}catch{return r(d("Ошибка"))}}),s=m({selectId:t=>t.id}),R=s.getSelectors(t=>{var e;return((e=t.articleDetailsPage)==null?void 0:e.comments)||s.getInitialState()}),f=g({name:"articleDetailsCommentsSlice",initialState:s.getInitialState({isLoading:!1,error:void 0,ids:[],entities:{}}),reducers:{},extraReducers:t=>t.addCase(n.pending,e=>{e.error=void 0,e.isLoading=!0}).addCase(n.fulfilled,(e,a)=>{e.isLoading=!1,s.setAll(e,a.payload)}).addCase(n.rejected,(e,a)=>{e.isLoading=!1,e.error=a.payload})}),{reducer:p}=f,o=l("articleDetailsPage/fetchArticleRecommendations",async(t,e)=>{const{extra:a,rejectWithValue:r}=e;try{const i=await a.api.get("/articles",{params:{_limit:9}});if(!i.data)throw new Error;return i.data}catch{return r(d("Ошибка"))}}),c=m({selectId:t=>t.id}),h=c.getSelectors(t=>{var e;return((e=t.articleDetailsPage)==null?void 0:e.recommendations)||c.getInitialState()}),S=g({name:"articleDetailsPageRecommendationSlice",initialState:c.getInitialState({isLoading:!1,error:void 0,ids:[],entities:{}}),reducers:{},extraReducers:t=>t.addCase(o.pending,e=>{e.error=void 0,e.isLoading=!0}).addCase(o.fulfilled,(e,a)=>{e.isLoading=!1,c.setAll(e,a.payload)}).addCase(o.rejected,(e,a)=>{e.isLoading=!1,e.error=a.payload})}),{reducer:y}=S,D=u({recommendations:y,comments:p});export{h as a,o as b,D as c,n as f,R as g};
