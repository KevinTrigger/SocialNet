import{T as p,a as n}from"./ThemeDecorator-vrAVssHn.js";import"./index-CTjT7uj6.js";import{A as k,a as r,b as I}from"./ArticleDetails-DrFKN5p1.js";import{S as e}from"./StoreDecorator-D8HgqQKn.js";import{R}from"./RouterDecorator-Bxi0TMWn.js";import"./jsx-runtime-Cw0GR0a5.js";import"./classNames-DgDD4s-s.js";import"./DynamicModuleLoader-DhPMMMm-.js";import"./i18next-Byb45X2d.js";import"./index-vZN_Bsf0.js";import"./useAppDispatch-D8llxUJe.js";import"./articleDetailsSlice-BdRQEbvr.js";import"./Text-a7QVxXHR.js";import"./Skeleton-C9-T3umZ.js";import"./Avatar-BpDMNdIA.js";import"./Code-JB95SH0k.js";import"./Button-FfmSwvyD.js";import"./useTranslation-DegO0IwE.js";import"./userSlice-BdF1H275.js";import"./index-CVbFUeQw.js";import"./profileSlice-B1_oBFzg.js";import"./ProfileCard-DxAWe1sF.js";import"./Input-BnN8jSt7.js";import"./CurrencySelect-D3Go52tV.js";import"./Select-nkddY8PU.js";import"./CountrySelect-DSDE-6B2.js";import"./addCommentFormSlice-BKnzknij.js";import"./articleDetailsCommentsSlice-Bv7nWYkM.js";const b={id:"1",title:"Javascript news",subtitle:"Что нового в JS за 2022 год?",img:"https://teknotower.com/wp-content/uploads/2020/11/js.png",views:1022,createdAt:"26.02.2022",type:[k.IT],user:{id:"1",username:"Kevin",avatar:"https://teknotower.com/wp-content/uploads/2020/11/js.png"},blocks:[{id:"1",type:r.TEXT,title:"Заголовок этого блока",paragraphs:["Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.","JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.","Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"]},{id:"4",type:r.CODE,code:`<!DOCTYPE html>
<html>
  <body>
    <p id="hello"></p>

    <script>
      document.getElementById("hello").innerHTML = "Hello, world!";
    <\/script>
  </body>
</html>;`},{id:"5",type:r.TEXT,title:"Заголовок этого блока",paragraphs:["Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.","Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"]},{id:"2",type:r.IMAGE,src:"https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",title:"Рисунок 1 - скриншот сайта"},{id:"3",type:r.CODE,code:`const path = require('path');

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);`},{id:"7",type:r.TEXT,title:"Заголовок этого блока",paragraphs:["JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.","Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"]},{id:"8",type:r.IMAGE,src:"https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",title:"Рисунок 1 - скриншот сайта"},{id:"9",type:r.TEXT,title:"Заголовок этого блока",paragraphs:["JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы."]}]},cr={title:"entities/ArticleDetails",component:I,decorators:[R]},t={decorators:[e({articleDetails:{data:b}})]},o={decorators:[e({articleDetails:{isLoading:!0}})]},a={decorators:[e({articleDetails:{error:"Ошибка при загрузке статьи"}})]},s={decorators:[p(n.DARK),e({articleDetails:{data:b}})]},c={decorators:[p(n.DARK),e({articleDetails:{isLoading:!0}})]},i={decorators:[p(n.DARK),e({articleDetails:{error:"Ошибка при загрузке статьи"}})]};var l,d,m;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  decorators: [StoreDecorator({
    articleDetails: {
      data: article
    }
  })]
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var h,D,S;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  decorators: [StoreDecorator({
    articleDetails: {
      isLoading: true
    }
  })]
}`,...(S=(D=o.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var u,g,T;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  decorators: [StoreDecorator({
    articleDetails: {
      error: "Ошибка при загрузке статьи"
    }
  })]
}`,...(T=(g=a.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};var v,J,y;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
    articleDetails: {
      data: article
    }
  })]
}`,...(y=(J=s.parameters)==null?void 0:J.docs)==null?void 0:y.source}}};var f,w,E;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
    articleDetails: {
      isLoading: true
    }
  })]
}`,...(E=(w=c.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var L,A,j;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
    articleDetails: {
      error: "Ошибка при загрузке статьи"
    }
  })]
}`,...(j=(A=i.parameters)==null?void 0:A.docs)==null?void 0:j.source}}};const ir=["Light","LightIsLoading","LightError","Dark","DarkIsLoading","DarkError"];export{s as Dark,i as DarkError,c as DarkIsLoading,t as Light,a as LightError,o as LightIsLoading,ir as __namedExportsOrder,cr as default};
