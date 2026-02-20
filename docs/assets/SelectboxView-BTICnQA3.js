import{r as d,j as e,P as o,L as s}from"./index-BG_3_bTz.js";import{C as n}from"./CodeBlock-BLlm0AS2.js";import{m as c}from"./data-D9Q02z01.js";const j=`//  options data set 
const optionList = [
   { id: 1, option: 'option1', icon: 'xi-icon', val: 'value1' }
   { id: 2, option: 'option2', icon: 'xi-icon', val: 'value2' }
   { id: 3, option: 'option3', icon: 'xi-icon', val: 'value3' }
   ...
]
// id는 는 필수값은 아닙니다.
// option, val는 필수값입니다.
// key (option)은 기본값입니다. 사용자 데이터에 맞게 지정 가능합니다.`,h=`// const optionList = [] 
// option: {id, option, icon, val} 

<BeSelectBox options={optionList}></BeSelectBox>`,m=`// @multiple: Boolean 
// default: false 

<BeSelectBox multiple></BeSelectBox>`,p=`// @isAll: Boolean 
// multiple일때 
// default: false 

<BeSelectBox multiple isAll></BeSelectBox>`,u=`// @isSearch: Boolean 
// default: false 

<BeSelectBox isSearch></BeSelectBox>`,v=`// @boxType: dropdown 
// default: dropdown 

<BeSelectBox boxType="dropdown"></BeSelectBox>`,B=`// @boxType: float 
// default: dropdown 

<BeSelectBox boxType="float"></BeSelectBox>`,N=`// @selectedType: String 
// reference: List Component 
// default: false 

<BeSelectBox selectedType="selectedType"></BeSelectBox>`,g=`// @useIcon: Boolean 
// default: false 

<BeSelectBox useIcon></BeSelectBox>`,S=`// @placeholder: String 
// default: false 

<BeSelectBox placeholder={placeholder}></BeSelectBox>`,b=`// @compact: String 
// default: false 

<BeSelectBox compact></BeSelectBox>`,f=`// @maxOptHeight: String 
// default: null 

<BeSelectBox maxOptHeight={maxOptHeight}></BeSelectBox>`,y=`// @optionKey: String 
// default: 'option' 

<BeSelectBox optionKey={optionKey}></BeSelectBox>`,T=`// @resultKey: String 
// default: 'null' 

<BeSelectBox resultKey={resultKey}></BeSelectBox>`,K=`// event: onSelect 
<BeSelectBox onSelect="setSelect"></BeSelectBox>`,w=`// @round: Boolean 
// default: false 

<BeSelectBox round></BeSelectBox>`,L=`// @fluid: Boolean 
// default: false 

<BeSelectBox fluid></BeSelectBox>`,_=`// @disabled: Boolean 
// default: false 

<BeSelectBox disabled></BeSelectBox>`;function O(){const[a,x]=d.useState(null),[t,r]=d.useState(["run"]),i=l=>{typeof l=="string"?x(l):r(l)};return e.jsxs("div",{className:"page-wrapper be container",children:[e.jsxs("div",{className:"base",children:[e.jsxs("section",{children:[e.jsx("h4",{children:"Single Select"}),e.jsx("div",{className:"desc",children:e.jsx(o,{color:"deepblue",children:"Component"})}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(s,{options:c,onSelect:i,show:!0})}),e.jsx(n,{code:h,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Multiple Select"}),e.jsx("div",{className:"desc",children:e.jsx(o,{color:"deepblue",children:"Component"})}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"header",children:t==null?void 0:t.map(l=>e.jsx(o,{children:l},l))}),e.jsx("div",{className:"contents",children:e.jsx(s,{options:c,selectedValue:t,multiple:!0,onSelect:i})}),e.jsx(n,{code:m,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Data Set"}),e.jsx("div",{className:"desc"}),e.jsx(n,{code:j,language:"tsx",useToggle:!1})]})]}),e.jsxs("div",{className:"variants",children:[e.jsx("h1",{className:"title",children:"Variants"}),e.jsxs("section",{children:[e.jsx("h4",{children:"Use All"}),e.jsx("div",{className:"desc",children:"(only multiple)"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(s,{options:c,multiple:!0,isAll:!0})}),e.jsx(n,{code:p,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Search & Filtering"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(s,{fluid:!0,options:c,isSearch:!0})}),e.jsx(n,{code:u,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Dropdown Type"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(s,{options:c,boxType:"dropdown"})}),e.jsx(n,{code:v,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Float Type"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(s,{options:c,boxType:"float"})}),e.jsx(n,{code:B,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Selected Type"}),e.jsxs("div",{className:"desc",children:[e.jsx("a",{className:"be-button text compact primary",href:"/list",target:"_blank",children:"BeList Selection"}),"참고"]}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(s,{options:c,selectedType:"text bg mark"})}),e.jsx(n,{code:N,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Use Icon"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(s,{options:c,useIcon:!0})}),e.jsx(n,{code:g,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Placeholder"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(s,{options:c,placeholder:"아무거나 선택하세요"})}),e.jsx(n,{code:S,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Compact"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(s,{options:c,compact:!0})}),e.jsx(n,{code:b,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Round"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(s,{options:c,round:!0})}),e.jsx(n,{code:w,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Fluid"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(s,{options:c,fluid:!0})}),e.jsx(n,{code:L,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Disabled"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(s,{options:c,disabled:!0})}),e.jsx(n,{code:_,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Option Limit Height"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(s,{options:c,maxOptHeight:160})}),e.jsx(n,{code:f,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"User Custom Option Key"}),e.jsx("div",{className:"desc",children:"메뉴 데이터 중 표시 되는 값의 key name (기본값: option)"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(s,{options:c,optionKey:"option"})}),e.jsx(n,{code:y,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Result Key"}),e.jsx("div",{className:"desc",children:"메뉴 선택 시 결과로 사용 될 값의 ket name (기본값: val)"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsxs("div",{className:"contents",children:[e.jsx(s,{options:c,resultKey:"val"}),e.jsx(s,{options:c,resultKey:"option"})]}),e.jsx(n,{code:T,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Event: onSelect"}),e.jsxs("div",{className:"desc",children:["결과값: ",e.jsx(o,{children:a})]}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(s,{options:c,onSelect:i})}),e.jsx(n,{code:K,language:"tsx"})]})})]})]})]})}export{O as default};
