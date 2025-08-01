import{r as c,j as e,T as i,$ as s,C as n}from"./index-HHkmdi8H.js";import{c as g}from"./index-CkuhuPNf.js";const h=`// @pageLength: Number  
// required: true  

<BePagination pageLength={pageLength}></BePagination>`,j=`// @limits: Number 
// default: 5 

<BePagination limits={limits}></BePagination>`,m=`// @compact: Boolean 
// default: false 

<BePagination compact></BePagination>`,p=`// @round: Boolean 
// default: false 

<BePagination round></BePagination>`,N=`// @align: { left | center | right } 
// default: left 

<BePagination align={align}></BePagination>`,u=`// @type: { page | number } 
// default: number 

<BePagination type={type}></BePagination>`,t=`// @ellipsis: Boolean 
// default: false 

<BePagination ellipsis></BePagination>`,v=`// @color: String 
// default: null 

<BePagination color="{color}"></BePagination>`;function B(){const[l,d]=c.useState(1),[o,r]=c.useState("red"),x=a=>{d(a)};return e.jsxs("div",{className:"page-wrapper be container",children:[e.jsx("div",{className:"base",children:e.jsxs("section",{children:[e.jsx("div",{className:"desc",children:e.jsx(i,{color:"deepblue",children:"Component"})}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(s,{pageLength:10,limits:!1})}),e.jsx(n,{code:h,language:"tsx"})]})})]})}),e.jsxs("div",{className:"variants",children:[e.jsx("h1",{className:"title",children:"Variants"}),e.jsxs("section",{children:[e.jsx("h4",{children:"Limits"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(s,{pageLength:10,limits:5})}),e.jsx(n,{code:j,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Compact"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(s,{pageLength:10,compact:!0})}),e.jsx(n,{code:m,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Round"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(s,{pageLength:10,round:!0})}),e.jsx(n,{code:p,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Align"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsxs("div",{className:"contents",children:[e.jsx("h6",{children:"Left(default)"}),e.jsx(s,{pageLength:10,align:"left"}),e.jsx("h6",{children:"Center"}),e.jsx(s,{pageLength:10,align:"center"}),e.jsx("h6",{children:"Right"}),e.jsx(s,{pageLength:10,align:"right"})]}),e.jsx(n,{code:N,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Page Type"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsxs("div",{className:"contents",children:[e.jsx("h6",{children:"number(default)"}),e.jsx(s,{pageLength:10}),e.jsx("h6",{children:"page"}),e.jsx(s,{pageLength:10,type:"page"})]}),e.jsx(n,{code:u,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Ellipsis Type"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(s,{pageLength:10,ellipsis:!0})}),e.jsx(n,{code:t,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Event"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsxs("div",{className:"contents",children:[e.jsx(s,{pageLength:10,onChange:x}),"Current Selected ",e.jsx(i,{children:l}),"page"]}),e.jsx(n,{code:t,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Color"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"header",children:g.map(a=>e.jsx(i,{color:a,type:"dot",onClick:()=>r(a)},a))}),e.jsx("div",{className:"contents",children:e.jsx(s,{pageLength:10,color:o})}),e.jsx(n,{code:v,language:"tsx"})]})})]})]})]})}export{B as default};
