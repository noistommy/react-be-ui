import{r as i,j as e,S as t,$ as s}from"./index-BLwJGyjk.js";import{C as n}from"./CodeBlock-D1r4VYik.js";import{c as g}from"./index-CkuhuPNf.js";const h=`// @pageLength: Number  
// required: true  

<BePagination pageLength={pageLength}></BePagination>`,j=`// @activeType: button | line 
// default: button 

<BePagination avtiveType={activeType}></BePagination>`,m=`// @limits: Number 
// default: 5 

<BePagination limits={limits}></BePagination>`,p=`// @compact: Boolean 
// default: false 

<BePagination compact></BePagination>`,v=`// @round: Boolean 
// default: false 

<BePagination round></BePagination>`,u=`// @firstText: String 
// @lastText: String 
// default: F, L 

<BePagination firstText={firstText} lastText={lastText}></BePagination>`,N=`// @align: { left | center | right } 
// default: left 

<BePagination align={align}></BePagination>`,b=`// @type: { page | number } 
// default: number 

<BePagination type={type}></BePagination>`,c=`// @ellipsis: Boolean 
// default: false 

<BePagination ellipsis></BePagination>`,f=`// @color: String 
// default: null 

<BePagination color="{color}"></BePagination>`;function T(){const[l,d]=i.useState(1),[r,o]=i.useState("red"),x=a=>{d(a)};return e.jsxs("div",{className:"page-wrapper be container",children:[e.jsx("div",{className:"base",children:e.jsxs("section",{children:[e.jsx("div",{className:"desc",children:e.jsx(t,{color:"deepblue",children:"Component"})}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(s,{pageLength:10,limits:!1})}),e.jsx(n,{code:h,language:"tsx"})]})})]})}),e.jsxs("div",{className:"variants",children:[e.jsx("h1",{className:"title",children:"Variants"}),e.jsxs("section",{children:[e.jsx("h4",{children:"Active Type"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsxs("div",{className:"contents",children:[e.jsx("h5",{children:"Button"}),e.jsx(s,{activeType:"button",pageLength:10,limits:5}),e.jsx("h5",{children:"Line"}),e.jsx(s,{activeType:"text",pageLength:10,limits:5})]}),e.jsx(n,{code:j,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Limits"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(s,{pageLength:10,limits:5})}),e.jsx(n,{code:m,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Compact"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(s,{pageLength:10,compact:!0})}),e.jsx(n,{code:p,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Round"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(s,{pageLength:10,round:!0})}),e.jsx(n,{code:v,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"User Custom First, Last Text"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsxs("div",{className:"contents",children:[e.jsx(s,{pageLength:10,firstText:"First",lastText:"Last"}),e.jsx(s,{pageLength:10,firstText:"xi-arrow-left",lastText:"xi-arrow-right"})]}),e.jsx(n,{code:u,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Align"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsxs("div",{className:"contents",children:[e.jsx("h6",{children:"Left(default)"}),e.jsx(s,{pageLength:10,align:"left"}),e.jsx("h6",{children:"Center"}),e.jsx(s,{pageLength:10,align:"center"}),e.jsx("h6",{children:"Right"}),e.jsx(s,{pageLength:10,align:"right"})]}),e.jsx(n,{code:N,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Page Type"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsxs("div",{className:"contents",children:[e.jsx("h6",{children:"number(default)"}),e.jsx(s,{pageLength:10}),e.jsx("h6",{children:"page"}),e.jsx(s,{pageLength:10,type:"page"})]}),e.jsx(n,{code:b,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Ellipsis Type"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(s,{pageLength:10,ellipsis:!0})}),e.jsx(n,{code:c,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Event"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsxs("div",{className:"contents",children:[e.jsx(s,{pageLength:10,onChange:x}),"Current Selected ",e.jsx(t,{children:l}),"page"]}),e.jsx(n,{code:c,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Color"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"header",children:g.map(a=>e.jsx(t,{color:a,type:"dot",onClick:()=>o(a)},a))}),e.jsx("div",{className:"contents",children:e.jsx(s,{pageLength:10,color:r})}),e.jsx(n,{code:f,language:"tsx"})]})})]})]})]})}export{T as default};
