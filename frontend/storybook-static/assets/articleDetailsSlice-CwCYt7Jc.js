import{a as s,t as d,c as l}from"./localStorage-BvkLEUEt.js";const i=s("articleDetails/fetchArticleDetailsData",async(r,e)=>{const{extra:a,rejectWithValue:c}=e;try{const t=await a.api.get(`/articles/${r}`);if(!t.data)throw new Error;return t.data}catch{return c(d("Ошибка"))}}),o={isLoading:!1,error:void 0,data:void 0},n=l({name:"articleDetails",initialState:o,reducers:{},extraReducers:r=>{r.addCase(i.pending,e=>{e.error=void 0,e.isLoading=!0}).addCase(i.fulfilled,(e,a)=>{e.isLoading=!1,e.data=a.payload}).addCase(i.rejected,(e,a)=>{e.isLoading=!1,e.error=a.payload})}}),{reducer:u}=n;export{u as a,i as f};
