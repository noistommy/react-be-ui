import{j as e,P as t,d as n}from"./index-BG_3_bTz.js";import{C as c}from"./CodeBlock-BLlm0AS2.js";const r=`<!-- Html 태그 사용 -->
<div class="be-segment">
   <div class="contents">Contents ... </div>
</div>`,d=`// @contents: String 
<BeSegment>{ contents }</BeSegment>`,l=`//@surf: Boolean 
//default: false 

<BeSegement surf> contents ... ...</BeSegement>`,i=`//@border: Boolean 
//default: false 

<BeSegement border> contents ... ...</BeSegement>`,a=`//@float: Boolean 
//default: false 

<BeSegement float> contents ... ...</BeSegement>`,o=`//@align: {left | center | right} 
//default: left 

<BeSegement align={align}> contents ... ...</BeSegement>`,x=`//@align: {s | m | l | xl} 
//default: left 

<BeSegement round={round}> contents ... ...</BeSegement>`,m=`//segment group 
//border 적용 

<div class="be-segments border" >
   <BeSegement> contents ... ...</BeSegement>
   <BeSegement surf> contents ... ...</BeSegement>
   <BeSegement> contents ... ...</BeSegement>
</div>`,s="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit tempora illo consequatur praesentium, voluptas ullam necessitatibus maxime alias eligendi in, vitae reiciendis illum. Fugit vero fugiat qui exercitationem dicta doloremque?";function g(){return e.jsxs("div",{className:"page-wrapper be container",children:[e.jsxs("div",{className:"base",children:[e.jsxs("section",{children:[e.jsx("div",{className:"desc",children:e.jsx(t,{color:"lightblue",children:"HTML"})}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx("div",{className:"be-segment",children:e.jsx("div",{className:"contents",children:s})})}),e.jsx(c,{code:r,language:"html"})]})})]}),e.jsxs("section",{children:[e.jsx("div",{className:"desc",children:e.jsx(t,{color:"deepblue",children:"Component"})}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(n,{children:s})}),e.jsx(c,{code:d,language:"tsx"})]})})]})]}),e.jsxs("div",{className:"variants",children:[e.jsx("h1",{className:"title",children:"Variants"}),e.jsxs("section",{children:[e.jsx("h4",{children:"Surface"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsxs(n,{surf:!0,children:[s,s]})}),e.jsx(c,{code:l,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Border"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsxs(n,{border:!0,children:[s,s]})}),e.jsx(c,{code:i,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Float"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsxs(n,{float:!0,children:[s,s]})}),e.jsx(c,{code:a,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Align"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsxs("div",{className:"contents",children:[e.jsx("h6",{children:"Align Left"}),e.jsx(n,{border:!0,children:s}),e.jsx("h6",{children:"Align Center"}),e.jsx(n,{align:"center",border:!0,children:s}),e.jsx("h6",{children:"Align Right"}),e.jsx(n,{align:"right",border:!0,children:s})]}),e.jsx(c,{code:o,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Round"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsxs("div",{className:"contents",children:[e.jsx("h6",{children:"round: s"}),e.jsx(n,{round:"s",border:!0,children:s}),e.jsx("h6",{children:"round: m"}),e.jsx(n,{round:"m",border:!0,children:s}),e.jsx("h6",{children:"round: l"}),e.jsx(n,{round:"l",border:!0,children:s}),e.jsx("h6",{children:"round: xl"}),e.jsx(n,{round:"xl",border:!0,children:s})]}),e.jsx(c,{code:x,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Segments"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segments border round-l",children:[e.jsx(n,{border:!0,children:s}),e.jsx(n,{border:!0,children:s}),e.jsx(n,{border:!0,children:s})]})}),e.jsx(c,{code:m,language:"tsx"})]})})]})]})]})}export{g as default};
