import{j as e}from"./index-Jiet0Pp3.js";import{M as c,C as t,b as n}from"./CodeBlock-LLj1QYvU.js";const d=`<!-- Html 태그 사용 -->
<div class="be-segment">
   <div class="contents">Contents ... </div>
</div>`,r=`// @contents: String 
<BeSegment>{ contents }</BeSegment>`,l=`//@surf: Boolean 
//default: false 

<BeSegement surf> contents ... ...</BeSegement>`,i=`//@border: Boolean 
//default: false 

<BeSegement border> contents ... ...</BeSegement>`,a=`//@float: Boolean 
//default: false 

<BeSegement float> contents ... ...</BeSegement>`,o=`//@title: String 
//default: null 

<BeSegement>
   <BeSegment.Contents title={title}>
     {contents}
   </BeSegment.Contents>
</BeSegment>`,x=`//@attached: Boolean 
//default: false 

<BeSegement attached={attached}>
   <BeSegment.Header>
     {Header contents}
   </BeSegment.Header>
   <BeSegment.Contents>
     {contents}
   </BeSegment.Contents>
   <BeSegment.Footer>
     {Footer contents}
   </BeSegment.Footer>
</BeSegment>`,m=`//@align: {left | center | right} 
//default: left 

<BeSegement align={align}> contents ... ...</BeSegement>`,h=`//@align: {s | m | l | xl} 
//default: left 

<BeSegement round={round}> contents ... ...</BeSegement>`,j=`//segment group 
//border 적용 

<div class="be-segments border" >
   <BeSegement> contents ... ...</BeSegement>
   <BeSegement surf> contents ... ...</BeSegement>
   <BeSegement> contents ... ...</BeSegement>
</div>`,s="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit tempora illo consequatur praesentium, voluptas ullam necessitatibus maxime alias eligendi in, vitae reiciendis illum. Fugit vero fugiat qui exercitationem dicta doloremque?";function v(){return e.jsxs("div",{className:"page-wrapper be container",children:[e.jsxs("div",{className:"base",children:[e.jsxs("section",{children:[e.jsx("div",{className:"desc",children:e.jsx(c,{color:"lightblue",children:"HTML"})}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx("div",{className:"be-segment",children:e.jsx("div",{className:"contents",children:s})})}),e.jsx(t,{code:d,language:"html"})]})})]}),e.jsxs("section",{children:[e.jsx("div",{className:"desc",children:e.jsx(c,{color:"deepblue",children:"Component"})}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(n,{children:s})}),e.jsx(t,{code:r,language:"tsx"})]})})]})]}),e.jsxs("div",{className:"variants",children:[e.jsx("h1",{className:"title",children:"Variants"}),e.jsxs("section",{children:[e.jsx("h4",{children:"Surface"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsxs(n,{surf:!0,children:[s,s]})}),e.jsx(t,{code:l,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Border"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(n,{border:!0,children:s+s})}),e.jsx(t,{code:i,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Title"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsxs(n,{border:!0,children:[e.jsx("div",{className:"title",children:"Title"}),s+s]})}),e.jsx(t,{code:o,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Attached"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsxs(n,{attached:!0,border:!0,children:[e.jsx(n.Header,{children:"Header"}),e.jsx(n.Contents,{children:s}),e.jsx(n.Footer,{children:"Footer"})]})}),e.jsx(t,{code:x,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Float"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsxs(n,{float:!0,children:[s,s]})}),e.jsx(t,{code:a,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Align"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsxs("div",{className:"contents",children:[e.jsx("h5",{children:"Align Left"}),e.jsx(n,{border:!0,children:s}),e.jsx("h5",{children:"Align Center"}),e.jsx(n,{align:"center",border:!0,children:s}),e.jsx("h5",{children:"Align Right"}),e.jsx(n,{align:"right",border:!0,children:s})]}),e.jsx(t,{code:m,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Round"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsxs("div",{className:"contents",children:[e.jsx("h5",{children:"round: s"}),e.jsx(n,{round:"s",border:!0,children:s}),e.jsx("h5",{children:"round: m"}),e.jsx(n,{round:"m",border:!0,children:s}),e.jsx("h5",{children:"round: l"}),e.jsx(n,{round:"l",border:!0,children:s}),e.jsx("h5",{children:"round: xl"}),e.jsx(n,{round:"xl",border:!0,children:s})]}),e.jsx(t,{code:h,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Segments"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segments border round-l",children:[e.jsx(n,{border:!0,children:s}),e.jsx(n,{border:!0,children:s}),e.jsx(n,{border:!0,children:s})]})}),e.jsx(t,{code:j,language:"tsx"})]})})]})]})]})}export{v as default};
