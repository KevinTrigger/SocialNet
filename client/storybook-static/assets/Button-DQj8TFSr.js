import{j as d}from"./ThemeDecorator-BxjAAGLH.js";import{c as u}from"./classNames-DgDD4s-s.js";const l="_Button_1ayv1_1",m="_clear_1ayv1_7",p="_outline_1ayv1_14",b="_square_1ayv1_21",y="_size_m_1ayv1_25",v="_size_l_1ayv1_31",z="_size_xl_1ayv1_37",q="_background_1ayv1_55",N="_backgroundInverted_1ayv1_61",s={Button:l,clear:m,outline:p,square:b,size_m:y,size_l:v,size_xl:z,background:q,backgroundInverted:N};var g=(e=>(e.CLEAR="clear",e.OUTLINE="outline",e.BACKGROUND="background",e.BACKGROUND_INVERTED="backgroundInverted",e))(g||{}),f=(e=>(e.M="size_m",e.L="size_l",e.XL="size_xl",e))(f||{});const R=e=>{const{className:a,theme:t,children:r,disabled:n,square:o,size:i="size_m",...c}=e,_={[s[t??""]]:!0,[s.disabled]:!!n,[s.square]:!!o,[s[i]]:!0};return d.jsx("button",{className:u(s.Button,_,[a]),...c,children:r})};R.__docgenInfo={description:"",methods:[],displayName:"Button",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},theme:{required:!1,tsType:{name:"ButtonTheme"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},square:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"ButtonSize"},description:""}},composes:["ButtonHTMLAttributes"]};export{R as B,g as a,f as b};
