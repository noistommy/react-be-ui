import{j as e,P as d,_ as a,V as s,k as n}from"./index-BG_3_bTz.js";import{C as l}from"./CodeBlock-BLlm0AS2.js";const r=`<!-- <div></div> 태그 사용 -->
<div class="be-card">
   <div class="contents">Contents ... </div>
</div>`,i=`// import {Slot} from 'react-be-ui' 
<BeCard>
   <Slot name="contents">{{ contents }}</Slot>
</BeCard>
// or 
<BeCard>
   <div className="contents">{{ contents }}</div>
</BeCard>`,o=`// @title: String 
// default: null 
<BeCard title={title}>
   <Slot name="contents">{{ contents }}</Slot>
</BeCard>`,x=`// @image: Boolean, Object 
// default: null 
// image: { src, alt } 
//  slot image 
<BeCard >
   <Slot name="image">
       <img src="{src}" alt="{alt}" />
   </Slot>
   ... ...
</BeCard>`,m=`// @extra: Boolean 
// default: false 
//  slot extra 
<BeCard>
   ... ...
   <Slot name="extra">
       {extra_contents}
   </Slot>
</BeCard>`,j=`// @attached: Boolean 
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
</BeCard>`,h=`// @border: Boolean 
// default: true 
<BeCard border={border}>
   <Slot name="contents">{{ contents }}</Slot>
</BeCard>`,v=`// @float: Boolean 
// default: false 
<BeCard float={float}>
   <Slot name="contents">{{ contents }}</Slot>
</BeCard>`,g=`// only html 
<div class="be-cards">
   <BeCard >...</BeCard>
   <BeCard >...</BeCard>
   <BeCard >...</BeCard>
</div>`,c="/assets/profile_img-C6anksDO.png",t="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium error quia quod magni.Repellendus numquam labore, aliquid voluptates dicta dignissimos beatae quidem repellat amet, vel fuga totam dolorum necessitatibus recusandae!";function C(){return e.jsxs("div",{className:"page-wrapper be container",children:[e.jsxs("div",{className:"base",children:[e.jsxs("section",{children:[e.jsx("div",{className:"desc",children:e.jsx(d,{color:"lightblue",children:"HTML"})}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx("div",{className:"be-card",children:e.jsx("div",{className:"contents",children:t})})}),e.jsx(l,{code:r,language:"html"})]})})]}),e.jsxs("section",{children:[e.jsx("div",{className:"desc",children:e.jsx(d,{color:"deepblue",children:"Component"})}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(a,{children:e.jsx(s,{name:"contents",children:t})})}),e.jsx(l,{code:i,language:"tsx"})]})})]})]}),e.jsxs("div",{className:"variants",children:[e.jsx("h1",{className:"title",children:"Variants"}),e.jsxs("section",{children:[e.jsx("h4",{children:"Title"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(a,{title:"Title",children:e.jsx(s,{name:"contents",children:t})})}),e.jsx(l,{code:o,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Image"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsxs(a,{title:"Title",media:!0,children:[e.jsx(s,{name:"image",children:e.jsx("img",{src:c,alt:"profile image"})}),e.jsx(s,{name:"contents",children:"Image Card"})]})}),e.jsx(l,{code:x,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Extra"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsxs(a,{title:"Title",children:[e.jsx(s,{name:"contents",children:t}),e.jsx(s,{name:"extra",children:"Extra"})]})}),e.jsx(l,{code:m,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Attached( Header, Footer )"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsxs(a,{title:"Title",children:[e.jsx(s,{name:"header",children:"header"}),e.jsx(s,{name:"contents",children:t}),e.jsx(s,{name:"footer",children:"Footer"})]})}),e.jsx(l,{code:j,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Border: False"}),e.jsx("div",{className:"desc",children:" default : true"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(a,{title:"Title",border:!1,children:e.jsx(s,{name:"contents",children:t})})}),e.jsx(l,{code:h,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Float"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(a,{title:"Title",float:!0,children:e.jsx(s,{name:"contents",children:t})})}),e.jsx(l,{code:v,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Cards"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-cards",children:[e.jsx(a,{title:"Card1",children:e.jsx(s,{name:"contents",children:t})}),e.jsx(a,{title:"Card2",children:e.jsx(s,{name:"contents",children:t})}),e.jsxs(n,{children:[e.jsx(n.Header,{children:e.jsx("h5",{children:"Only Contents"})}),e.jsx("div",{className:"contents",children:t})]}),e.jsxs(n,{children:[e.jsx(n.Header,{children:"Header"}),e.jsx(n.Contents,{title:"Contents",children:t}),e.jsx(n.Footer,{children:"Footer"})]}),e.jsxs(n,{media:!0,children:[e.jsx(n.Image,{src:c,alt:"profile image"}),e.jsx(n.Contents,{title:"Contents"})]}),e.jsxs(n,{media:!0,children:[e.jsx(n.Image,{src:c,alt:"profile image"}),e.jsx(n.Contents,{title:"Contents",children:"Image Card"}),e.jsx(n.Extra,{children:"Extra"})]})]})}),e.jsx(l,{code:g,language:"tsx"})]})})]})]})]})}export{C as default};
