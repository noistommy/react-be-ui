import{j as e,T as s,C as n}from"./index-HHkmdi8H.js";import{c as i}from"./index-CkuhuPNf.js";const a=`<!-- html -->
<div class="be-tag label">Tag</div>
<div class="be-tag line"></div>
<div class="be-tag dot"></div>`,o=`// component 
<BeTag type="label">Tag(Label)</BeTag>
<BeTag type="line">Tag(Line)</BeTag>
<BeTag type="dot">Tag(Dot)</BeTag>`,t=`// html 
<div class="be-tag label">Tag</div>
<div class="be-tag line"></div>
<div class="be-tag dot"></div>
// component 
<BeTag type="label">Tag(Label)</BeTag>
<BeTag type="line">Tag(Line)</BeTag>
<BeTag type="dot">Tag(Dot)</BeTag>`,c=`// html 
<div class="be-tag label icon">
   <i class="xi-icon-name"></i>
</div>
<div class="be-tag label">
   <i class="icon left xi-icon-name"></i>
   Left
</div>
<div class="be-tag label icon">
   Right
   <i class="icon right xi-icon-name"></i>
</div>
// component 
<BeTag type="label" icon="xi-ixcon-name"></BeTag>
<BeTag type="label" icon="xi-ixcon-name" iconPos="left">Left</BeTag>
<BeTag type="label" icon="xi-ixcon-name" iconPos="right">Right</BeTag>`,d=`// @pointing: Boolean 
// @pointingPos: {up | down | left | right} 

// html 
<div class="be-tag label pointing {pointingPos}">Point</div>
// component 
<BeTag type="pointing" pointDirect="{pointingPos}">Point</BeTag>`,r=`// only html 
<div class="be-tags">
   <div class="be-tag label">A</div>
   <BeTag type="label">B</BeTag>
   <div class="be-tag label">C</div>
</div>`,x=`// only html 
<div class="be-tags one-of-a-kind">
   <div class="be-tag label">A</div>
   <BeTag type="label">B</BeTag>
   <div class="be-tag label">C</div>
</div>`,g=`// @color: String 

// html 
<div class="be-tag label {color}">colors</div>
// component 
<BeTag type="label" color={color}>Colors</BeTag>`,h=`// @color: String 
// @light: Boolean 

// html 
<div class="be-tag label {color} light">colors</div>
// component 
<BeTag type="label" color={color} light>Colors</BeTag>`;function p(){return e.jsxs("div",{className:"page-wrapper be container",children:[e.jsxs("div",{className:"base",children:[e.jsxs("section",{children:[e.jsx("div",{className:"desc",children:e.jsx(s,{color:"lightblue",children:"HTML"})}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsxs("div",{className:"contents",children:[e.jsx("div",{className:"be-tag label",children:"Base"}),e.jsx("div",{className:"be-tag label",children:"기본"}),e.jsx("div",{className:"be-tag label round",children:"Round"}),e.jsx("div",{className:"be-tag label icon",children:e.jsx("i",{className:"xi-tag"})}),e.jsx("div",{className:"be-tag line"}),e.jsx("div",{className:"be-tag line red"}),e.jsx("div",{className:"be-tag dot"}),e.jsx("div",{className:"be-tag dot purple"}),e.jsx("div",{className:"be-tag dot orange"})]}),e.jsx(n,{code:a,language:"html"})]})})]}),e.jsxs("section",{children:[e.jsx("div",{className:"desc",children:e.jsx(s,{color:"deepblue",children:"Component"})}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsxs("div",{className:"contents",children:[e.jsx(s,{type:"label",children:"Component"}),e.jsx(s,{type:"label",round:!0,children:"Round"}),e.jsx(s,{type:"label",icon:"xi-tag"}),e.jsx(s,{type:"line"}),e.jsx(s,{type:"line",color:"blue"}),e.jsx(s,{type:"dot",color:"yellow"}),e.jsx(s,{type:"dot",color:"green"})]}),e.jsx(n,{code:o,language:"tsx"})]})})]})]}),e.jsxs("div",{className:"variants",children:[e.jsx("h1",{className:"title",children:"Variants"}),e.jsxs("section",{children:[e.jsx("h4",{children:"Type"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsxs("div",{className:"contents",children:[e.jsx(s,{type:"label",children:"Label"}),e.jsx(s,{type:"label",children:"라벨 타입"}),e.jsx(s,{type:"line red"}),e.jsx(s,{type:"line green"}),e.jsx(s,{type:"dot blue"}),e.jsx(s,{type:"dot yellow"})]}),e.jsx(n,{code:t,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Icon"}),e.jsxs("div",{className:"desc",children:[e.jsx(s,{children:"type: label 또는 pointing"})," 일 경우 적용"]}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsxs("div",{className:"contents",children:[e.jsx(s,{type:"label",icon:"xi-bell"}),e.jsx(s,{type:"label",icon:"xi-angle-left",iconPos:"left",children:"Left"}),e.jsx(s,{type:"label",icon:"xi-angle-right",iconPos:"right",children:"Right"}),e.jsx(s,{type:"label",color:"blue",icon:"xi-user",iconPos:"left",children:"User"}),e.jsx(s,{type:"label",color:"red",icon:"xi-new",iconPos:"left",children:"New"}),e.jsx(s,{type:"label",color:"deeppurple",icon:"xi-close",iconPos:"right",children:"Tag"})]}),e.jsx(n,{code:c,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Round"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsxs("div",{className:"contents",children:[e.jsx(s,{type:"label",round:!0,icon:"xi-bell"}),e.jsx(s,{type:"label",round:!0,icon:"xi-angle-left",iconPos:"left",children:"Left"}),e.jsx(s,{type:"label",round:!0,icon:"xi-angle-right",iconPos:"right",children:"Right"}),e.jsx(s,{type:"label",round:!0,color:"blue",icon:"xi-user",iconPos:"left",children:"User"}),e.jsx(s,{type:"label",round:!0,color:"red",icon:"xi-new",iconPos:"left",children:"New"}),e.jsx(s,{type:"label",round:!0,color:"deeppurple",icon:"xi-close",iconPos:"right",children:"Tag"})]}),e.jsx(n,{code:c,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Pointing"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsxs("div",{className:"contents",children:[e.jsx(s,{type:"pointing",color:"deepblue",pointDirect:"up",icon:"xi-arrow-up",iconPos:"left",children:"Point Up"}),e.jsx(s,{type:"pointing",color:"deepblue",pointDirect:"down",icon:"xi-arrow-down",iconPos:"left",children:"Point Down"}),e.jsx(s,{type:"pointing",color:"deepblue",pointDirect:"left",icon:"xi-arrow-left",iconPos:"left",children:"Point Left"}),e.jsx(s,{type:"pointing",color:"deepblue",pointDirect:"right",icon:"xi-arrow-right",iconPos:"right",children:"Point Right"})]}),e.jsx(n,{code:d,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Color"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:i.map(l=>e.jsx(s,{type:"label",color:l,children:l},l))}),e.jsx(n,{code:g,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Color Light"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:i.map(l=>e.jsx(s,{light:!0,type:"label",color:l,children:l},l))}),e.jsx(n,{code:h,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Tags"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-tags",children:[e.jsx(s,{color:"green",children:"A Tag"}),e.jsx(s,{color:"blue",children:"B Tag"}),e.jsx(s,{color:"yellow",children:"C Tag"})]})}),e.jsx(n,{code:r,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Tags: Hover Effect"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-tags one-of-a-kind",children:[e.jsx(s,{color:"green",children:"A Tag"}),e.jsx(s,{color:"blue",children:"B Tag"}),e.jsx(s,{color:"yellow",children:"C Tag"})]})}),e.jsx(n,{code:x,language:"tsx"})]})})]})]})]})}export{p as default};
