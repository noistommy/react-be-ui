import{j as e}from"./index-BNgkG8B6.js";import{M as c,C as d,L as t,z as s,_ as a}from"./CodeBlock-CNKhYZn_.js";const r=`<!-- <div></div> 태그 사용 --> 
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
</BeCard>
export const border =
// @border: Boolean  
// default: true  
<BeCard border={border}> 
   <Slot name="contents">{{ contents }}</Slot> 
</BeCard>`,h=`// @float: Boolean  
// default: false  
<BeCard float={float}> 
   <Slot name="contents">{{ contents }}</Slot> 
</BeCard>
export const round =
// @round: String (s | m | l | xl)  
// default: m  
<BeCard round={round}> 
   <Slot name="contents">{{ contents }}</Slot> 
</BeCard>`,u=`// only html  
<div class="be-cards"> 
   <BeCard >...</BeCard> 
   <BeCard >...</BeCard> 
   <BeCard >...</BeCard> 
</div>
`,l="/assets/profile_img-C6anksDO.png",n="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium error quia quod magni.Repellendus numquam labore, aliquid voluptates dicta dignissimos beatae quidem repellat amet, vel fuga totam dolorum necessitatibus recusandae!";function N(){return e.jsxs("div",{className:"page-wrapper be container",children:[e.jsxs("div",{className:"base",children:[e.jsxs("section",{children:[e.jsx("div",{className:"desc",children:e.jsx(c,{color:"lightblue",children:"HTML"})}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx("div",{className:"be-card",children:e.jsx("div",{className:"contents",children:n})})}),e.jsx(d,{code:r,language:"html"})]})})]}),e.jsxs("section",{children:[e.jsx("div",{className:"desc",children:e.jsx(c,{color:"deepblue",children:"Component"})}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(t,{children:e.jsx(s,{name:"contents",children:n})})}),e.jsx(d,{code:i,language:"tsx"})]})})]})]}),e.jsxs("div",{className:"variants",children:[e.jsx("h1",{className:"title",children:"Variants"}),e.jsxs("section",{children:[e.jsx("h4",{children:"Title"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(t,{title:"Title",children:e.jsx(s,{name:"contents",children:n})})}),e.jsx(d,{code:o,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Image"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsxs(t,{title:"Title",media:!0,children:[e.jsx(s,{name:"image",children:e.jsx("img",{src:l,alt:"profile image"})}),e.jsx(s,{name:"contents",children:"Image Card"})]})}),e.jsx(d,{code:x,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Extra"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsxs(t,{title:"Title",children:[e.jsx(s,{name:"contents",children:n}),e.jsx(s,{name:"extra",children:"Extra"})]})}),e.jsx(d,{code:m,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Attached( Header, Footer )"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsxs(t,{title:"Title",children:[e.jsx(s,{name:"header",children:"header"}),e.jsx(s,{name:"contents",children:n}),e.jsx(s,{name:"footer",children:"Footer"})]})}),e.jsx(d,{code:j,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Border: False"}),e.jsx("div",{className:"desc",children:" default : true"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(t,{title:"Title",border:!1,children:e.jsx(s,{name:"contents",children:n})})}),e.jsx(d,{code:void 0,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Float"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(t,{title:"Title",float:!0,children:e.jsx(s,{name:"contents",children:n})})}),e.jsx(d,{code:h,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Round"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsxs("div",{className:"contents",children:[e.jsx(t,{title:"round s",round:"s",children:e.jsx(s,{name:"contents",children:n})}),e.jsx(t,{title:"round m",round:"m",children:e.jsx(s,{name:"contents",children:n})}),e.jsx(t,{title:"round l",round:"l",children:e.jsx(s,{name:"contents",children:n})}),e.jsx(t,{title:"round xl",round:"xl",children:e.jsx(s,{name:"contents",children:n})})]}),e.jsx(d,{code:void 0,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Cards"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-cards round-m column-3 column-sm-2 column-xs-1",children:[e.jsx(t,{title:"Card1",children:e.jsx(s,{name:"contents",children:n})}),e.jsx(t,{title:"Card2",children:e.jsx(s,{name:"contents",children:n})}),e.jsxs(a,{children:[e.jsx(a.Header,{children:e.jsx("h5",{children:"Only Contents"})}),e.jsx("div",{className:"contents",children:n})]}),e.jsxs(a,{children:[e.jsx(a.Header,{children:"Header"}),e.jsx(a.Contents,{title:"Contents",children:n}),e.jsx(a.Footer,{children:"Footer"})]}),e.jsxs(a,{media:!0,children:[e.jsx(a.Image,{src:l,alt:"profile image"}),e.jsx(a.Contents,{title:"Contents"})]}),e.jsxs(a,{media:!0,children:[e.jsx(a.Image,{src:l,alt:"profile image"}),e.jsx(a.Contents,{title:"Contents",children:"Image Card"}),e.jsx(a.Extra,{children:"Extra"})]})]})}),e.jsx(d,{code:u,language:"tsx"})]})})]})]})]})}export{N as default};
