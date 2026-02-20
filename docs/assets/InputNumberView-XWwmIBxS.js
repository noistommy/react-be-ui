import{r as i,j as e,P as r,E as s}from"./index-BG_3_bTz.js";import{C as n}from"./CodeBlock-BLlm0AS2.js";const o=`//   only component 
//   const inputValue = 0 
<BeInputNumber value={inputValue} onChange={changeEvent}></BeInputNumber>`,x=`//   @disabled: Boolean 
//   default: false 

<BeInputNumber value={inputValue} disabled></BeInputNumber>`,u=`//   @controller: {between | end} 
//   default: between 

<BeInputNumber value={inputValue} controller="{controller}"></BeInputNumber>`,m=`//   @min: Number 
//   @max: Number 
//   default: null 

<BeInputNumber value={inputValue} min={min} max={max}></BeInputNumber>`,j=`//   @step: Number 
//   default: null 

<BeInputNumber value={inputValue} step={step}></BeInputNumber>`,c=`//   @decIcon: String 
//   @incIcon: String 
//   default: null 

<BeInputNumber value={inputValue}
 decIcon={decIcon} incIcon={inc-icon}
></BeInputNumber>`;function b(){const[l,a]=i.useState(5),t=d=>{a(d)};return e.jsxs("div",{className:"page-wrapper be container",children:[e.jsx("div",{className:"base",children:e.jsxs("section",{children:[e.jsx("div",{className:"desc",children:e.jsx(r,{color:"deepblue",children:"Component"})}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(s,{})}),e.jsx(n,{code:o,language:"tsx"})]})})]})}),e.jsxs("div",{className:"variants",children:[e.jsx("h1",{className:"title",children:"Variants"}),e.jsxs("section",{children:[e.jsx("h4",{children:"Disabled"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(s,{disabled:!0})}),e.jsx(n,{code:x,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Controller Position"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsxs("div",{className:"contents",children:[e.jsx(s,{controller:"between"}),e.jsx(s,{controller:"end"})]}),e.jsx(n,{code:u,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Min / Max"}),e.jsx("div",{className:"desc",children:"ex) min = 1 / max = 10"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(s,{value:l,min:1,max:10,onChange:t})}),e.jsx(n,{code:m,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Step"}),e.jsx("div",{className:"desc",children:"ex) step = 5"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(s,{step:5})}),e.jsx(n,{code:j,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"User Custom Icon"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(s,{decIcon:"xi-angle-down",incIcon:"xi-angle-up"})}),e.jsx(n,{code:c,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Fluid"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(s,{fluid:!0})}),e.jsx(n,{code:c,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Round"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(s,{round:!0})}),e.jsx(n,{code:c,language:"tsx"})]})})]})]})]})}export{b as default};
