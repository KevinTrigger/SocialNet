import{j as o}from"./jsx-runtime-CexXSJP5.js";import{r as d}from"./index-BP8_t0zE.js";import{u,a as m}from"./useAppDispatch-CcAwMes1.js";const p=s=>{const{children:n,reducers:r,removeAfterUnmount:c}=s,t=u(),a=m();return d.useEffect(()=>(Object.entries(r).forEach(([e,i])=>{a.reducerManager.add(e,i),t({type:`@INIT ${e} reducer`})}),()=>{c&&Object.entries(r).forEach(([e])=>{a.reducerManager.remove(e),t({type:`@DESTROY ${e} reducer`})})}),[]),o.jsx(o.Fragment,{children:n})};p.__docgenInfo={description:"",methods:[],displayName:"DynamicModuleLoader",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},reducers:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  [name in StateSchemaKey]?: Reducer;
}`,signature:{properties:[{key:{name:"StateSchemaKey",required:!1},value:{name:"Reducer"}}]}},description:""},removeAfterUnmount:{required:!1,tsType:{name:"boolean"},description:""}}};export{p as D};
