import{j as t}from"./jsx-runtime-CexXSJP5.js";import{r as s}from"./index-BP8_t0zE.js";var a=(e=>(e.LIGHT="app_light_theme",e.DARK="app_dark_theme",e))(a||{});const d=s.createContext({}),p="theme",h=localStorage.getItem(p)||a.LIGHT,i=e=>{const{initialTheme:r,children:n}=e,[o,m]=s.useState(r||h),c=s.useMemo(()=>({theme:o,setTheme:m}),[o]);return t.jsx(d.Provider,{value:c,children:n})};i.__docgenInfo={description:"",methods:[],displayName:"ThemeProvider",props:{initialTheme:{required:!1,tsType:{name:"Theme"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const u=e=>r=>t.jsx(i,{initialTheme:e,children:t.jsx("div",{className:`app ${e}`,children:t.jsx(r,{})})});export{p as L,u as T,a,d as b};
