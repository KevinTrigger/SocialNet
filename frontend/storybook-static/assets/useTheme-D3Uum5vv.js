import{r}from"./index-CTjT7uj6.js";import{b as m,a as e,L as c}from"./ThemeDecorator-BJS90HNQ.js";const L=()=>{const{theme:t=e.LIGHT,setTheme:o}=r.useContext(m);let a;switch(t){case e.DARK:a=e.LIGHT;break;case e.LIGHT:a=e.DARK;break;default:a=e.LIGHT}const s=()=>{o==null||o(a)};return localStorage.setItem(c,t),document.body.className=t,{theme:t,toggleTheme:s}};export{L as u};
