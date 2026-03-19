import{r as o,j as e}from"./index-DVv6qmf1.js";import{M as d,C as i,I as s}from"./CodeBlock-CgGTopQv.js";import{c as u}from"./index-CkuhuPNf.js";const b=`<!-- html -->
<div class="be-switch slide">
   <input type="checkbox" />
   <span class="switch"></span>
</div>
<div class="be-switch slide inside">
   <input type="checkbox" />
   <span class="switch"></span>
</div>`,v=`// component 
<BeSwitch type="slide" checked></BeSwitch>
<BeSwitch type="slide" inside checked></BeSwitch>`,g=`// html 
<div class="be-switch button">
   <input type="checkbox" />
   <span class="on active"></span>
   <span class="off"></span>
</div>
// component 
<BeSwitch type="button" onText="A" offText="B"></BeSwitch>`,N=`// html 
<div class="be-switch slide round">
   <input type="checkbox" />
   <span class="switch"></span>
</div>
// component 
<BeSwitch type="slide" round></BeSwitch>`,k=`// html 
<div class="be-switch slide {color}">
   <input type="checkbox" />
   <span class="switch"></span>
</div>
// component 
<BeSwitch type="slide" color={color}></BeSwitch>`;function B(){const[a,l]=o.useState("red"),[r,x]=o.useState(!1),[c,m]=o.useState({switch1:!0,switch2:!1,switch3:!1,switch4:!1,switch5:!1,switch6:!1,switch7:!1,switch8:!1,switch9:!1,switch10:!1}),n=(t,h)=>{m(p=>({...p,[t]:h}))},j=(t,h)=>{x(h)},w=t=>{l(t)};return e.jsxs("div",{className:"page-wrapper be container",children:[e.jsxs("div",{className:"base",children:[e.jsxs("section",{children:[e.jsx("div",{className:"desc",children:e.jsx(d,{color:"lightblue",children:"HTML"})}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsxs("div",{className:"contents",children:[e.jsxs("label",{className:"be-switch slide",children:[e.jsx("input",{type:"checkbox"}),e.jsx("span",{className:"switch"})]}),e.jsxs("label",{className:"be-switch slide inside",children:[e.jsx("input",{type:"checkbox"}),e.jsx("span",{className:"switch"})]})]}),e.jsx(i,{code:b,language:"html"})]})})]}),e.jsxs("section",{children:[e.jsx("div",{className:"desc",children:e.jsx(d,{color:"deepblue",children:"Component"})}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsxs("div",{className:"contents",children:[e.jsx(s,{checked:r,onChange:j}),e.jsx(s,{name:"switch1",checked:c.switch1,onChange:n}),e.jsx(s,{name:"switch2",inside:!0,checked:c.switch2,onChange:n})]}),e.jsx(i,{code:v,language:"tsx"})]})})]})]}),e.jsxs("div",{className:"variants",children:[e.jsx("h1",{className:"title",children:"Valiants"}),e.jsxs("section",{children:[e.jsx("h4",{children:"Button"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsxs("div",{className:"contents",children:[e.jsx(s,{name:"switch3",type:"button",checked:c.switch3,onChange:n}),e.jsx(s,{name:"switch4",type:"button",round:!0,checked:c.switch4,onChange:n}),e.jsx(s,{name:"switch5",type:"button",onText:"A",offText:"B",checked:c.switch5,onChange:n})]}),e.jsx(i,{code:g,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Round"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsxs("div",{className:"contents",children:[e.jsx(s,{name:"switch6",round:!0,checked:c.switch6,onChange:n}),e.jsx(s,{name:"switch7",round:!0,inside:!0,checked:c.switch7,onChange:n}),e.jsx(s,{name:"switch8",type:"button",round:!0,checked:c.switch8,onChange:n}),e.jsx(s,{name:"switch9",type:"button",round:!0,onText:"A",offText:"B",checked:c.switch9,onChange:n})]}),e.jsx(i,{code:N,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Colors"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"header",children:u.map(t=>e.jsx(d,{color:t,type:"dot",onClick:()=>w(t)},t))}),e.jsxs("div",{className:"contents",children:[e.jsx(s,{name:"switch10",color:a,checked:c.switch10,onChange:n}),e.jsx(s,{name:"switch11",color:a,inside:!0,checked:c.switch11,onChange:n}),e.jsx(s,{name:"switch12",color:a,type:"button",checked:c.switch12,onChange:n}),e.jsx(s,{name:"switch13",color:a,type:"button",onText:"A",offText:"B",checked:c.switch13,onChange:n})]}),e.jsx(i,{code:k,language:"tsx"})]})})]})]})]})}export{B as default};
