import{c as r,U as e}from"./localStorage-BvkLEUEt.js";const s={_inited:!1},o=r({name:"user",initialState:s,reducers:{setAuthData:(t,a)=>{t.authData=a.payload},initAuthData:t=>{const a=localStorage.getItem(e);a&&(t.authData=JSON.parse(a)),t._inited=!0},logout:t=>{localStorage.removeItem(e),t.authData=void 0}}}),{actions:i}=o,{reducer:u}=o;export{u as a,i as u};
