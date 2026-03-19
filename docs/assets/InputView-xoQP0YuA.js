import{r as c,j as e}from"./index-Jiet0Pp3.js";import{M as o,C as a,T as n,n as v}from"./CodeBlock-LLj1QYvU.js";import{s as g}from"./index-CkuhuPNf.js";const b=`<!-- <div></div> 태그 사용 -->
<div class="be-input">
   <input type="text" placeholder="입력하세요" />
</div>`,N=`// component 
<BeInput value={value} onChange={handleChange}></BeInput>`,u=`// @disabled: Boolean 
// default: false 

// html 
<div class="be-input disabled">
   <input type="text" placeholder="입력하세요" disabled />
</div>
// component 
<BeInput disabled value={value} onChange={handleChange}></BeInput>`,C=`// @readonly: Boolean 
// default: false 

// html 
<div class="be-input readonly">
   <input type="text" placeholder="입력하세요" readonly />
</div>
// component 
<BeInput readonly value={value} onChange={handleChange}></BeInput>`,r=`// @underline: Boolean 
// default: false 

// html 
<div class="be-input underline">
   <input type="text" placeholder="입력하세요" />
</div>
// component 
<BeInput underline value={value} onChange={handleChange}></BeInput>`,f=`// @transparent: Boolean 
// default: false 

// html 
<div class="be-input transparent">
   <input type="text" placeholder="입력하세요" />
</div>
// component 
<BeInput transparent value={value} onChange={handleChange}></BeInput>`,B=`// @compact: Boolean 
// default: false 

// html 
<div class="be-input compact">
   <input type="text" placeholder="입력하세요" />
</div>
// component 
<BeInput compact value={value} onChange={handleChange}></BeInput>`,y=`// @status: success || danger || info || attention || importance 

// html 
<div class="be-input {status}">
   <input type="text" placeholder="입력하세요" />
</div>
// component 
<BeInput status="{status}" value={value} onChange={handleChange}></BeInput>`,h=`// @fluid: Boolean 
// default: false 

// html 
<div class="be-input fluid">
   <input type="text" placeholder="입력하세요" />
</div>
// component 
<BeInput fluid value={value} onChange={handleChange}></BeInput>`,d=`// @icon-left: String 
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
   value={value} onChange={handleChange}
 ></BeInput>`,I=`// @label: String 
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
   value={value} onChange={handleChange}
 </BeInput>`,R=`// @button: String 
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
   value={value} onChange={handleChange}
 </BeInput>`,w=`// @type: input || textarea 
// default: input 

// html 
<div class="be-input">
   <textarea type="text" placeholder="입력하세요" />
</div>
<div class="be-input short">
   <textarea type="text" placeholder="입력하세요" />
</div>
// component 
<BeInput type="textarea" short={true | false} value={value} onChange={handleChange}></BeInput>
<BeInput>
    <textarea type="text" placeholder="입력하세요" />
   value={value} onChange={handleChange}
 </BeInput>`;function S(){const i=c.useRef(),[s,p]=c.useState({input1:"",input2:"",input3:"",input4:"",input5:"",input6:"",input7:"",input8:"",input9:"",input10:"",input11:"",input12:"",input13:"",input14:"",input15:"",input16:"",input17:"",input18:"",input19:"",input20:""}),t=l=>{const{name:x,value:j}=l.target;p(m=>({...m,[x]:j}))};return c.useEffect(()=>{var l;(l=i.current)==null||l.focus()},[i]),e.jsxs("div",{className:"page-wrapper be container",children:[e.jsxs("div",{className:"base",children:[e.jsxs("section",{children:[e.jsx("div",{className:"desc",children:e.jsx(o,{color:"lightblue",children:"HTML"})}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx("div",{className:"be-input",children:e.jsx("input",{type:"text",placeholder:"입력하세요."})})}),e.jsx(a,{code:b,language:"html"})]})})]}),e.jsxs("section",{children:[e.jsx("div",{className:"desc",children:e.jsx(o,{color:"deepblue",children:"Component"})}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(n,{ref:i,name:"input1",value:s.input1,onChange:t})}),e.jsx(a,{code:N,language:"tsx"})]})})]})]}),e.jsxs("div",{className:"variants",children:[e.jsx("h1",{className:"title",children:"Variants"}),e.jsxs("section",{children:[e.jsx("h4",{children:"Use Label"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsxs("div",{className:"contents",children:[e.jsx(n,{label:"Use Label",name:"input2",value:s.input2,onChange:t}),e.jsx(n,{label:"Use Label",name:"input3",value:s.input3,onChange:t})]}),e.jsx(a,{code:u,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Disabled"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(n,{disabled:!0})}),e.jsx(a,{code:u,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Readonly"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(n,{readonly:!0,name:"input4",value:s.input4,onChange:t})}),e.jsx(a,{code:C,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Underline"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(n,{underline:!0})}),e.jsx(a,{code:r,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Round"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(n,{round:!0,name:"input5",value:s.input5,onChange:t})}),e.jsx(a,{code:r,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Transparent"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(n,{transparent:!0,name:"input6",value:s.input6,onChange:t})}),e.jsx(a,{code:f,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Compact"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(n,{compact:!0})}),e.jsx(a,{code:B,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Status"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:g.map(l=>e.jsx(n,{status:l,placeholder:l,name:"input7",value:s.input7,onChange:t},l))}),e.jsx(a,{code:y,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Fluid"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(n,{fluid:!0,name:"input8",value:s.input8,onChange:t})}),e.jsx(a,{code:h,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Unit"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsxs("div",{className:"contents",children:[e.jsx(n,{unit:"대",align:"right",name:"input9",value:s.input9,onChange:t}),e.jsx(n,{unit:"개",align:"right",name:"input10",value:s.input10,onChange:t})]}),e.jsx(a,{code:h,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Icon"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsxs("div",{className:"contents",children:[e.jsx(n,{iconLeft:"xi-search",name:"input11",value:s.input11,onChange:t}),e.jsx(n,{iconRight:"xi-lock",name:"input12",value:s.input12,onChange:t})]}),e.jsx(a,{code:d,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Clear"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsxs("div",{className:"contents",children:[e.jsx(n,{clear:!0,placeholder:"Focus on!!"}),e.jsx(n,{placeholder:"Focus on!!",clear:!0,iconRight:"xi-lock"})]}),e.jsx(a,{code:d,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Badge"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsxs("div",{className:"contents",children:[e.jsx(n,{badge:"New",badgeOption:"red",name:"input13",value:s.input13,onChange:t}),e.jsx(n,{badge:e.jsx("i",{className:"xi-arrow-down"}),badgeOption:"primary",name:"input14",value:s.input14,onChange:t})]}),e.jsx(a,{code:d,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Labeled"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsxs("div",{className:"contents",children:[e.jsx(n,{labeled:{pos:"left",contents:"label"},name:"input15",value:s.input15,onChange:t}),e.jsx(n,{labeled:!0,name:"input16",value:s.input16,onChange:t,children:e.jsx("span",{className:"label",children:e.jsx("i",{className:"icon xi-won"})})})]}),e.jsx(a,{code:I,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Button"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsxs("div",{className:"contents",children:[e.jsx(n,{withButton:{pos:"left",option:"primary",contents:"save"},name:"input17",value:s.input17,onChange:t}),e.jsx(n,{withButton:!0,name:"input18",value:s.input18,onChange:t,children:e.jsx(v,{brand:"secondary",icon:"xi-upload"})})]}),e.jsx(a,{code:R,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Textarea"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsxs("div",{className:"contents",children:[e.jsx(n,{type:"textarea",fluid:!0,label:"Textarea",name:"input19",value:s.input19,onChange:t}),e.jsx(n,{type:"textarea",short:!0,fluid:!0,name:"input20",value:s.input20,onChange:t})]}),e.jsx(a,{code:w,language:"tsx"})]})})]})]})]})}export{S as default};
