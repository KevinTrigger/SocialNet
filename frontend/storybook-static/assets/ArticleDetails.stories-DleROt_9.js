import{T as p,a as n}from"./ThemeDecorator-_gfN7HEO.js";import"./index-BP8_t0zE.js";import{A as k,a as r,b as I}from"./ArticleDetails-BiOHjb_4.js";import{S as e}from"./StoreDecorator-xJumbSVk.js";import{R}from"./RouterDecorator-BKGnvDy4.js";import"./jsx-runtime-CexXSJP5.js";import"./classNames-DgDD4s-s.js";import"./DynamicModuleLoader-BE7H7TF8.js";import"./userSlice-BUja-80x.js";import"./index-DJkmxc1E.js";import"./useAppDispatch-CHJEm9Vz.js";import"./articleDetailsSlice-CiyBvNif.js";import"./Text-7oj-NtWT.js";import"./Skeleton-CD873yLi.js";import"./Avatar-DgOqVGEJ.js";import"./Code-ClL86nT1.js";import"./Button-CULVALhb.js";import"./useTranslation-B2QVmqVC.js";import"./index-BhItUGrV.js";import"./profileSlice-Byq1TMV_.js";import"./ProfileCard-HYdR2dDN.js";import"./Input-SBXS8SFk.js";import"./CurrencySelect-CKpOPOOK.js";import"./Select-DReADGzP.js";import"./CountrySelect-CY_IAIwX.js";import"./index-C_MfmDJz.js";const b={id:"1",title:"Javascript news",subtitle:"Что нового в JS за 2022 год?",img:"https://teknotower.com/wp-content/uploads/2020/11/js.png",views:1022,createdAt:"26.02.2022",type:[k.IT],blocks:[{id:"1",type:r.TEXT,title:"Заголовок этого блока",paragraphs:["Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.","JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.","Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"]},{id:"4",type:r.CODE,code:`<!DOCTYPE html>
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
server.use(jsonServer.bodyParser);`},{id:"7",type:r.TEXT,title:"Заголовок этого блока",paragraphs:["JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.","Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"]},{id:"8",type:r.IMAGE,src:"https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",title:"Рисунок 1 - скриншот сайта"},{id:"9",type:r.TEXT,title:"Заголовок этого блока",paragraphs:["JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы."]}]},ar={title:"entities/ArticleDetails",component:I,decorators:[R]},t={args:{},decorators:[e({articleDetails:{data:b}})]},o={args:{},decorators:[e({articleDetails:{isLoading:!0}})]},a={args:{},decorators:[e({articleDetails:{error:"Ошибка при загрузке статьи"}})]},s={args:{},decorators:[p(n.DARK),e({articleDetails:{data:b}})]},c={args:{},decorators:[p(n.DARK),e({articleDetails:{isLoading:!0}})]},i={args:{},decorators:[p(n.DARK),e({articleDetails:{error:"Ошибка при загрузке статьи"}})]};var l,d,m;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {},
  decorators: [StoreDecorator({
    articleDetails: {
      data: article
    }
  })]
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var g,h,D;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {},
  decorators: [StoreDecorator({
    articleDetails: {
      isLoading: true
    }
  })]
}`,...(D=(h=o.parameters)==null?void 0:h.docs)==null?void 0:D.source}}};var S,u,T;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {},
  decorators: [StoreDecorator({
    articleDetails: {
      error: "Ошибка при загрузке статьи"
    }
  })]
}`,...(T=(u=a.parameters)==null?void 0:u.docs)==null?void 0:T.source}}};var v,J,y;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {},
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
    articleDetails: {
      data: article
    }
  })]
}`,...(y=(J=s.parameters)==null?void 0:J.docs)==null?void 0:y.source}}};var f,E,L;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {},
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
    articleDetails: {
      isLoading: true
    }
  })]
}`,...(L=(E=c.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var w,A,j;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {},
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
    articleDetails: {
      error: "Ошибка при загрузке статьи"
    }
  })]
}`,...(j=(A=i.parameters)==null?void 0:A.docs)==null?void 0:j.source}}};const sr=["Light","LightIsLoading","LightError","Dark","DarkIsLoading","DarkError"];export{s as Dark,i as DarkError,c as DarkIsLoading,t as Light,a as LightError,o as LightIsLoading,sr as __namedExportsOrder,ar as default};
