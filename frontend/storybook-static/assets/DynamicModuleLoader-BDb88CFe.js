import{j as a}from"./jsx-runtime-Cw0GR0a5.js";import{r as d}from"./index-CTjT7uj6.js";import"./localStorage-BvkLEUEt.js";import{u,a as m}from"./useAppDispatch-Bt7wXbJ2.js";const p=s=>{const{children:n,reducers:r,removeAfterUnmount:c=!0}=s,t=u(),o=m();return d.useEffect(()=>(Object.entries(r).forEach(([e,i])=>{o.reducerManager.add(e,i),t({type:`@INIT ${e} reducer`})}),()=>{c&&Object.entries(r).forEach(([e])=>{o.reducerManager.remove(e),t({type:`@DESTROY ${e} reducer`})})}),[]),a.jsx(a.Fragment,{children:n})};p.__docgenInfo={description:"",methods:[],displayName:"DynamicModuleLoader",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},reducers:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  [name in StateSchemaKey]?: Reducer;
}`,signature:{properties:[{key:{name:"StateSchemaKey",required:!1},value:{name:"Reducer"}}]}},description:""},removeAfterUnmount:{required:!1,tsType:{name:"boolean"},description:""}}};export{p as D};
