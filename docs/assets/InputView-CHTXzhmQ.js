import{r as a,j as e}from"./index-BNgkG8B6.js";import{M as i,C as n,T as s,n as v}from"./CodeBlock-CNKhYZn_.js";import{s as b}from"./index-CkuhuPNf.js";const g=`<!-- <div></div> 태그 사용 --> 
<div class="be-input"> 
   <input type="text" placeholder="입력하세요" /> 
</div>`,N=`// component  
<BeInput value={value} onChange={handleChange}></BeInput>`,d=`// @disabled: Boolean  
// default: false  
// html  
<div class="be-input disabled"> 
   <input type="text" placeholder="입력하세요" disabled /> 
</div> 
// component  
<BeInput disabled value={value} onChange={handleChange}></BeInput>`,f=`// @readonly: Boolean  
// default: false  
// html  
<div class="be-input readonly"> 
   <input type="text" placeholder="입력하세요" readonly /> 
</div> 
// component  
<BeInput readonly value={value} onChange={handleChange}></BeInput>`,o=`// @underline: Boolean  
// default: false  
// html  
<div class="be-input underline"> 
   <input type="text" placeholder="입력하세요" /> 
</div> 
// component  
<BeInput underline value={value} onChange={handleChange}></BeInput>`,C=`// @transparent: Boolean  
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
<BeInput status="{status}" value={value} onChange={handleChange}></BeInput>`,r=`// @fluid: Boolean  
// default: false  
// html  
<div class="be-input fluid"> 
   <input type="text" placeholder="입력하세요" /> 
</div> 
// component  
<BeInput fluid value={value} onChange={handleChange}></BeInput>`,c=`// @icon-left: String  
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
</BeInput>
`;function S(){const l=a.useRef(),[x,h]=a.useState({input:""}),u=t=>{const{name:p,value:j}=t.target;h(m=>({...m,[p]:j}))};return a.useEffect(()=>{var t;(t=l.current)==null||t.focus()},[l]),e.jsxs("div",{className:"page-wrapper be container",children:[e.jsxs("div",{className:"base",children:[e.jsxs("section",{children:[e.jsx("div",{className:"desc",children:e.jsx(i,{color:"lightblue",children:"HTML"})}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx("div",{className:"be-input",children:e.jsx("input",{type:"text",placeholder:"입력하세요."})})}),e.jsx(n,{code:g,language:"html"})]})})]}),e.jsxs("section",{children:[e.jsx("div",{className:"desc",children:e.jsx(i,{color:"deepblue",children:"Component"})}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsxs("div",{className:"contents",children:[e.jsx(s,{ref:l,name:"input",value:x.input,onChange:u}),e.jsx(s,{ref:l,isControlled:!1,clear:!0})]}),e.jsx(n,{code:N,language:"tsx"})]})})]})]}),e.jsxs("div",{className:"variants",children:[e.jsx("h1",{className:"title",children:"Variants"}),e.jsxs("section",{children:[e.jsx("h4",{children:"Use Label"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsxs("div",{className:"contents",children:[e.jsx(s,{label:"Use Label",isControlled:!1}),e.jsx(s,{label:"Use Label",isControlled:!1})]}),e.jsx(n,{code:d,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Disabled"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(s,{disabled:!0})}),e.jsx(n,{code:d,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Readonly"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(s,{readonly:!0})}),e.jsx(n,{code:f,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Underline"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(s,{underline:!0,isControlled:!1})}),e.jsx(n,{code:o,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Round"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(s,{round:!0,isControlled:!1})}),e.jsx(n,{code:o,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Transparent"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(s,{transparent:!0,isControlled:!1})}),e.jsx(n,{code:C,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Compact"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(s,{compact:!0,isControlled:!1})}),e.jsx(n,{code:B,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Status"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:b.map(t=>e.jsx(s,{status:t,placeholder:t,isControlled:!1},t))}),e.jsx(n,{code:y,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Fluid"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(s,{fluid:!0,isControlled:!1})}),e.jsx(n,{code:r,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Unit"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsxs("div",{className:"contents",children:[e.jsx(s,{unit:"대",align:"right",isControlled:!1}),e.jsx(s,{unit:"개",align:"right",isControlled:!1})]}),e.jsx(n,{code:r,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Icon"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsxs("div",{className:"contents",children:[e.jsx(s,{iconLeft:"xi-search",isControlled:!1}),e.jsx(s,{iconRight:"xi-lock",isControlled:!1})]}),e.jsx(n,{code:c,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Clear"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsxs("div",{className:"contents",children:[e.jsx(s,{clear:!0,placeholder:"Focus on!!",isControlled:!1}),e.jsx(s,{placeholder:"Focus on!!",clear:!0,iconRight:"xi-lock",isControlled:!1})]}),e.jsx(n,{code:c,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Badge"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsxs("div",{className:"contents",children:[e.jsx(s,{badge:"New",badgeOption:"red",isControlled:!1}),e.jsx(s,{badge:e.jsx("i",{className:"xi-arrow-down"}),badgeOption:"primary",isControlled:!1})]}),e.jsx(n,{code:c,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Labeled"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsxs("div",{className:"contents",children:[e.jsx(s,{labeled:{pos:"left",contents:"label"},isControlled:!1}),e.jsx(s,{labeled:!0,isControlled:!1,children:e.jsx("span",{className:"label",children:e.jsx("i",{className:"icon xi-won"})})})]}),e.jsx(n,{code:I,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Button"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsxs("div",{className:"contents",children:[e.jsx(s,{withButton:{pos:"left",option:"primary",contents:"save"},isControlled:!1}),e.jsx(s,{withButton:!0,isControlled:!1,children:e.jsx(v,{brand:"secondary",icon:"xi-upload"})})]}),e.jsx(n,{code:R,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Textarea"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsxs("div",{className:"contents",children:[e.jsx(s,{type:"textarea",fluid:!0,label:"Textarea",isControlled:!1}),e.jsx(s,{type:"textarea",short:!0,fluid:!0,isControlled:!1})]}),e.jsx(n,{code:w,language:"tsx"})]})})]})]})]})}export{S as default};
