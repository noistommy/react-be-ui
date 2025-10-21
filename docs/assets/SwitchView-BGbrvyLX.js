import{r as l,j as e,S as i,R as s}from"./index-BLwJGyjk.js";import{C as n}from"./CodeBlock-D1r4VYik.js";import{c as a}from"./index-CkuhuPNf.js";const r=`<!-- html -->
<div class="be-switch slide">
   <input type="checkbox" />
   <span class="switch"></span>
</div>
<div class="be-switch slide inside">
   <input type="checkbox" />
   <span class="switch"></span>
</div>`,h=`// component 
<BeSwitch type="slide" checked></BeSwitch>
<BeSwitch type="slide" inside checked></BeSwitch>`,x=`// html 
<div class="be-switch button">
   <input type="checkbox" />
   <span class="on active"></span>
   <span class="off"></span>
</div>
// component 
<BeSwitch type="button" onText="A" offText="B"></BeSwitch>`,j=`// html 
<div class="be-switch slide round">
   <input type="checkbox" />
   <span class="switch"></span>
</div>
// component 
<BeSwitch type="slide" round></BeSwitch>`,u=`// html 
<div class="be-switch slide {color}">
   <input type="checkbox" />
   <span class="switch"></span>
</div>
// component 
<BeSwitch type="slide" color={color}></BeSwitch>`;function v(){const[t,d]=l.useState("red"),o=c=>{d(c)};return e.jsxs("div",{className:"page-wrapper be container",children:[e.jsxs("div",{className:"base",children:[e.jsxs("section",{children:[e.jsx("div",{className:"desc",children:e.jsx(i,{color:"lightblue",children:"HTML"})}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsxs("div",{className:"contents",children:[e.jsxs("label",{className:"be-switch slide",children:[e.jsx("input",{type:"checkbox"}),e.jsx("span",{className:"switch"})]}),e.jsxs("label",{className:"be-switch slide inside",children:[e.jsx("input",{type:"checkbox"}),e.jsx("span",{className:"switch"})]})]}),e.jsx(n,{code:r,language:"html"})]})})]}),e.jsxs("section",{children:[e.jsx("div",{className:"desc",children:e.jsx(i,{color:"deepblue",children:"Component"})}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsxs("div",{className:"contents",children:[e.jsx(s,{checked:!0}),e.jsx(s,{inside:!0,checked:!0})]}),e.jsx(n,{code:h,language:"tsx"})]})})]})]}),e.jsxs("div",{className:"variants",children:[e.jsx("h1",{className:"title",children:"Valiants"}),e.jsxs("section",{children:[e.jsx("h4",{children:"Button"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsxs("div",{className:"contents",children:[e.jsx(s,{type:"button",checked:!0}),e.jsx(s,{type:"button",round:!0,checked:!0}),e.jsx(s,{type:"button",onText:"A",offText:"B",checked:!0})]}),e.jsx(n,{code:x,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Round"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsxs("div",{className:"contents",children:[e.jsx(s,{round:!0,checked:!0}),e.jsx(s,{round:!0,inside:!0,checked:!0}),e.jsx(s,{type:"button",round:!0,checked:!0}),e.jsx(s,{type:"button",round:!0,onText:"A",offText:"B",checked:!0})]}),e.jsx(n,{code:j,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Colors"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"header",children:a.map(c=>e.jsx(i,{color:c,type:"dot",onClick:()=>o(c)},c))}),e.jsxs("div",{className:"contents",children:[e.jsx(s,{color:t,checked:!0}),e.jsx(s,{color:t,inside:!0,checked:!0}),e.jsx(s,{color:t,type:"button",checked:!0}),e.jsx(s,{color:t,type:"button",onText:"A",offText:"B",checked:!0})]}),e.jsx(n,{code:u,language:"tsx"})]})})]})]})]})}export{v as default};
