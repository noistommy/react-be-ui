import{r as o,j as e}from"./index-DFBMfYGO.js";import{L as l,C as i,D as c}from"./CodeBlock-Bw21C8Hj.js";import{c as u}from"./index-CkuhuPNf.js";const b=`<!-- html --> 
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
<BeSwitch type="slide" round></BeSwitch>`,f=`// html  
<div class="be-switch slide {color}"> 
   <input type="checkbox" /> 
   <span class="switch"></span> 
</div> 
// component  
<BeSwitch type="slide" color={color}></BeSwitch>`;function B(){const[a,d]=o.useState("red"),[r,x]=o.useState(!1),[s,m]=o.useState({switch1:!0,switch2:!1,switch3:!1,switch4:!1,switch5:!1,switch6:!1,switch7:!1,switch8:!1,switch9:!1,switch10:!1}),t=(n,h)=>{m(p=>({...p,[n]:h}))},j=(n,h)=>{x(h)},w=n=>{d(n)};return e.jsxs("div",{className:"page-wrapper be container",children:[e.jsxs("div",{className:"base",children:[e.jsxs("section",{children:[e.jsx("div",{className:"desc",children:e.jsx(l,{color:"lightblue",children:"HTML"})}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsxs("div",{className:"contents",children:[e.jsxs("label",{className:"be-switch slide",children:[e.jsx("input",{type:"checkbox"}),e.jsx("span",{className:"switch"})]}),e.jsxs("label",{className:"be-switch slide inside",children:[e.jsx("input",{type:"checkbox"}),e.jsx("span",{className:"switch"})]})]}),e.jsx(i,{code:b,language:"html"})]})})]}),e.jsxs("section",{children:[e.jsx("div",{className:"desc",children:e.jsx(l,{color:"deepblue",children:"Component"})}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsxs("div",{className:"contents",children:[e.jsx(c,{checked:r,onChange:j}),e.jsx(c,{name:"switch1",checked:s.switch1,onChange:t}),e.jsx(c,{name:"switch2",inside:!0,checked:s.switch2,onChange:t})]}),e.jsx(i,{code:v,language:"tsx"})]})})]})]}),e.jsxs("div",{className:"variants",children:[e.jsx("h1",{className:"title",children:"Valiants"}),e.jsxs("section",{children:[e.jsx("h4",{children:"Button"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsxs("div",{className:"contents",children:[e.jsx(c,{name:"switch3",type:"button",checked:s.switch3,onChange:t,"fr-tooltip":`content:${s.switch3?"On":"Off"}`}),e.jsx(c,{name:"switch4",type:"button",round:!0,checked:s.switch4,onChange:t}),e.jsx(c,{name:"switch5",type:"button",onText:"A",offText:"B",checked:s.switch5,onChange:t})]}),e.jsx(i,{code:g,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Round"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsxs("div",{className:"contents",children:[e.jsx(c,{name:"switch6",round:!0,checked:s.switch6,onChange:t}),e.jsx(c,{name:"switch7",round:!0,inside:!0,checked:s.switch7,onChange:t}),e.jsx(c,{name:"switch8",type:"button",round:!0,checked:s.switch8,onChange:t}),e.jsx(c,{name:"switch9",type:"button",round:!0,onText:"A",offText:"B",checked:s.switch9,onChange:t})]}),e.jsx(i,{code:N,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Colors"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"header",children:u.map(n=>e.jsx(l,{color:n,type:"dot",onClick:()=>w(n)},n))}),e.jsxs("div",{className:"contents",children:[e.jsx(c,{name:"switch10",color:a,checked:s.switch10,onChange:t}),e.jsx(c,{name:"switch11",color:a,inside:!0,checked:s.switch11,onChange:t}),e.jsx(c,{name:"switch12",color:a,type:"button",checked:s.switch12,onChange:t}),e.jsx(c,{name:"switch13",color:a,type:"button",onText:"A",offText:"B",checked:s.switch13,onChange:t})]}),e.jsx(i,{code:f,language:"tsx"})]})})]})]})]})}export{B as default};
