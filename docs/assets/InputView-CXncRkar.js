import{j as e,S as c,u as n,J as d}from"./index-BLwJGyjk.js";import{C as s}from"./CodeBlock-D1r4VYik.js";import{s as o}from"./index-CkuhuPNf.js";const r=`<!-- <div></div> 태그 사용 -->
<div class="be-input">
   <input type="text" placeholder="입력하세요" />
</div>`,x=`// component 
<BeInput></BeInput>`,u=`// @disabled: Boolean 
// default: false 

// html 
<div class="be-input disabled">
   <input type="text" placeholder="입력하세요" disabled />
</div>
// component 
<BeInput disabled></BeInput>`,p=`// @readonly: Boolean 
// default: false 

// html 
<div class="be-input readonly">
   <input type="text" placeholder="입력하세요" readonly />
</div>
// component 
<BeInput readonly></BeInput>`,a=`// @underline: Boolean 
// default: false 

// html 
<div class="be-input underline">
   <input type="text" placeholder="입력하세요" />
</div>
// component 
<BeInput underline></BeInput>`,h=`// @transparent: Boolean 
// default: false 

// html 
<div class="be-input transparent">
   <input type="text" placeholder="입력하세요" />
</div>
// component 
<BeInput transparent></BeInput>`,j=`// @compact: Boolean 
// default: false 

// html 
<div class="be-input compact">
   <input type="text" placeholder="입력하세요" />
</div>
// component 
<BeInput compact></BeInput>`,m=`// @status: success || danger || info || attention || importance 

// html 
<div class="be-input {status}">
   <input type="text" placeholder="입력하세요" />
</div>
// component 
<BeInput status="{status}"></BeInput>`,i=`// @fluid: Boolean 
// default: false 

// html 
<div class="be-input fluid">
   <input type="text" placeholder="입력하세요" />
</div>
// component 
<BeInput fluid></BeInput>`,l=`// @icon-left: String 
// @icon-right: String 
// default: false 

// html 
<div class="be-input icon left">
   <i class="icon xi-icon-left" />
   <input type="text" placeholder="입력하세요" />
</div>
<div class="be-input icon right">
   <input type="text" placeholder="입력하세요" />
   <i class="icon xi-icon-right" />
</div>
<div class="be-input icon both">
   <i class="icon xi-icon-left" />
   <input type="text" placeholder="입력하세요" />
   <i class="icon xi-icon-right" />
</div>
// component 
<BeInput 
   iconLeft={iconLeft}
   iconRight={iconRight}
 ></BeInput>`,b=`// @label: String 
// default: null 

// html 
<div class="be-input label left">
   <label>{label}</label>
   <input type="text" placeholder="입력하세요" />
</div>
<div class="be-input label right">
   <input type="text" placeholder="입력하세요" />
   <label>{label}</label>
</div>
// component 
<BeInput labeled={{
    pos:{left | right}, 
    contents: {contents} 
 }} />
 <BeInput labeled>
    <label>{label}</label>
</BeInput>`,v=`// @button: String 
// @buttonOption: Object { pos, option, contents} 
// default: null 

// html 
<div class="be-input button left">
   <button class="be-button {buttonOption.option}">{button}</button>
   <input type="text" placeholder="입력하세요" />
</div>
<div class="be-input button right">
   <input type="text" placeholder="입력하세요" />
   <button class="be-button {buttonOption.option}">{button}</button>
</div>
// component 
<BeInput button={{
    pos:{left | right}, 
    option: {option}, // 'primary', 'red' 
    contents: {contents} 
 }} />
 <BeInput button>
    <BeButton contentsText={button}></BeButton>
</BeInput>`,g=`// @type: input || textarea 
// default: input 

// html 
<div class="be-input">
   <textarea type="text" placeholder="입력하세요" />
</div>
<div class="be-input short">
   <textarea type="text" placeholder="입력하세요" />
</div>
// component 
<BeInput type="textarea" short={true | false}></BeInput>
<BeInput>
    <textarea type="text" placeholder="입력하세요" />
</BeInput>`;function y(){return e.jsxs("div",{className:"page-wrapper be container",children:[e.jsxs("div",{className:"base",children:[e.jsxs("section",{children:[e.jsx("div",{className:"desc",children:e.jsx(c,{color:"lightblue",children:"HTML"})}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx("div",{className:"be-input",children:e.jsx("input",{type:"text",placeholder:"입력하세요."})})}),e.jsx(s,{code:r,language:"html"})]})})]}),e.jsxs("section",{children:[e.jsx("div",{className:"desc",children:e.jsx(c,{color:"deepblue",children:"Component"})}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(n,{})}),e.jsx(s,{code:x,language:"tsx"})]})})]})]}),e.jsxs("div",{className:"variants",children:[e.jsx("h1",{className:"title",children:"Variants"}),e.jsxs("section",{children:[e.jsx("h4",{children:"Disabled"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(n,{disabled:!0})}),e.jsx(s,{code:u,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Readonly"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(n,{readonly:!0,value:"Readonly"})}),e.jsx(s,{code:p,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Underline"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(n,{underline:!0})}),e.jsx(s,{code:a,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Round"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(n,{round:!0})}),e.jsx(s,{code:a,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Transparent"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(n,{transparent:!0})}),e.jsx(s,{code:h,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Compact"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(n,{compact:!0})}),e.jsx(s,{code:j,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Status"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:o.map(t=>e.jsx(n,{status:t,placeholder:t},t))}),e.jsx(s,{code:m,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Fluid"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(n,{fluid:!0})}),e.jsx(s,{code:i,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Unit"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsxs("div",{className:"contents",children:[e.jsx(n,{unit:"대",align:"right",value:10}),e.jsx(n,{unit:"개",align:"right",value:1e3})]}),e.jsx(s,{code:i,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Icon"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsxs("div",{className:"contents",children:[e.jsx(n,{iconLeft:"xi-search"}),e.jsx(n,{iconRight:"xi-lock"})]}),e.jsx(s,{code:l,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Clear"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(n,{clear:!0,placeholder:"Focus on!!"})}),e.jsx(s,{code:l,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Badge"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsxs("div",{className:"contents",children:[e.jsx(n,{badge:"New",badgeOption:"red"}),e.jsx(n,{badge:e.jsx("i",{className:"xi-arrow-down"}),badgeOption:"primary"})]}),e.jsx(s,{code:l,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Labeled"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsxs("div",{className:"contents",children:[e.jsx(n,{labeled:{pos:"left",contents:"label"}}),e.jsx(n,{labeled:!0,children:e.jsx("label",{children:e.jsx("i",{className:"icon xi-won"})})})]}),e.jsx(s,{code:b,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Button"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsxs("div",{className:"contents",children:[e.jsx(n,{button:{pos:"left",option:"primary",contents:"save"}}),e.jsx(n,{labeled:!0,children:e.jsx(d,{brand:"secondary",icon:"xi-upload"})})]}),e.jsx(s,{code:v,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Textarea"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsxs("div",{className:"contents",children:[e.jsx(n,{type:"textarea",fluid:!0}),e.jsx(n,{type:"textarea",short:!0,fluid:!0})]}),e.jsx(s,{code:g,language:"tsx"})]})})]})]})]})}export{y as default};
