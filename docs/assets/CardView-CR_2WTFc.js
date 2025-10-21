import{j as e,S as c,d as n,D as s}from"./index-BLwJGyjk.js";import{C as a}from"./CodeBlock-D1r4VYik.js";const l=`<!-- <div></div> 태그 사용 -->
<div class="be-card">
   <div class="contents">Contents ... </div>
</div>`,d=`// import {Slot} from 'react-be-ui' 
<BeCard>
   <Slot name="contents">{{ contents }}</Slot>
</BeCard>
// or 
<BeCard>
   <div className="contents">{{ contents }}</div>
</BeCard>`,i=`// @title: String 
// default: null 
<BeCard title={title}>
   <Slot name="contents">{{ contents }}</Slot>
</BeCard>`,r=`// @image: Boolean, Object 
// default: null 
// image: { src, alt } 
//  slot image 
<BeCard >
   <Slot name="image">
       <img src="{src}" alt="{alt}" />
   </Slot>
   ... ...
</BeCard>`,o=`// @extra: Boolean 
// default: false 
//  slot extra 
<BeCard>
   ... ...
   <Slot name="extra">
       {extra_contents}
   </Slot>
</BeCard>`,x=`// @attached: Boolean 
// default: false 
//  slot header & footer 
<BeCard>
   <Slot name="header">
       {header_contents}
   </Slot>
   ... ...
   <Slot name="footer">
       {footer_contents}
   </Slot>
</BeCard>`,m=`// @border: Boolean 
// default: true 
<BeCard border={border}>
   <Slot name="contents">{{ contents }}</Slot>
</BeCard>`,h=`// @float: Boolean 
// default: false 
<BeCard float={float}>
   <Slot name="contents">{{ contents }}</Slot>
</BeCard>`,j=`// only html 
<div class="be-cards">
   <BeCard >...</BeCard>
   <BeCard >...</BeCard>
   <BeCard >...</BeCard>
</div>`,v="/assets/profile_img-C6anksDO.png",t="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium error quia quod magni.Repellendus numquam labore, aliquid voluptates dicta dignissimos beatae quidem repellat amet, vel fuga totam dolorum necessitatibus recusandae!";function N(){return e.jsxs("div",{className:"page-wrapper be container",children:[e.jsxs("div",{className:"base",children:[e.jsxs("section",{children:[e.jsx("div",{className:"desc",children:e.jsx(c,{color:"lightblue",children:"HTML"})}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx("div",{className:"be-card",children:e.jsx("div",{className:"contents",children:t})})}),e.jsx(a,{code:l,language:"html"})]})})]}),e.jsxs("section",{children:[e.jsx("div",{className:"desc",children:e.jsx(c,{color:"deepblue",children:"Component"})}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(n,{children:e.jsx(s,{name:"contents",children:t})})}),e.jsx(a,{code:d,language:"tsx"})]})})]})]}),e.jsxs("div",{className:"variants",children:[e.jsx("h1",{className:"title",children:"Variants"}),e.jsxs("section",{children:[e.jsx("h4",{children:"Title"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(n,{title:"Title",children:e.jsx(s,{name:"contents",children:t})})}),e.jsx(a,{code:i,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Image"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsxs(n,{title:"Title",children:[e.jsx(s,{name:"image",children:e.jsx("img",{src:v,alt:"profile image"})}),e.jsx(s,{name:"contents",children:"Image Card"})]})}),e.jsx(a,{code:r,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Extra"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsxs(n,{title:"Title",children:[e.jsx(s,{name:"contents",children:t}),e.jsx(s,{name:"extra",children:"Extra"})]})}),e.jsx(a,{code:o,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Attached( Header, Footer )"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsxs(n,{title:"Title",children:[e.jsx(s,{name:"header",children:"header"}),e.jsx(s,{name:"contents",children:t}),e.jsx(s,{name:"footer",children:"Footer"})]})}),e.jsx(a,{code:x,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Border: False"}),e.jsx("div",{className:"desc",children:" default : true"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(n,{title:"Title",border:!1,children:e.jsx(s,{name:"contents",children:t})})}),e.jsx(a,{code:m,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Float"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(n,{title:"Title",float:!0,children:e.jsx(s,{name:"contents",children:t})})}),e.jsx(a,{code:h,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Cards"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-cards",children:[e.jsx(n,{title:"Card1",children:e.jsx(s,{name:"contents",children:t})}),e.jsx(n,{title:"Card2",children:e.jsx(s,{name:"contents",children:t})})]})}),e.jsx(a,{code:j,language:"tsx"})]})})]})]})]})}export{N as default};
