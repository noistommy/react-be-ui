import{r as l,j as s,S as c,O as i}from"./index-BLwJGyjk.js";import{C as e}from"./CodeBlock-D1r4VYik.js";import{b as r}from"./index-CkuhuPNf.js";import{o as t,a as x}from"./data-BfBeh0jL.js";const p=`//  options data set 
const optionList = [
   { id: 1, option: 'option1', icon: 'xi-icon' }
   { id: 2, option: 'option2', icon: 'xi-icon' }
   { id: 3, option: 'option3', icon: 'xi-icon' }
   ...
]
//option (+sub) data set 
const optionSubList = [
   { id: 1, option: 'option1', icon: 'xi-icon', sub: 'sub-option1' }
   { id: 2, option: 'option2', icon: 'xi-icon', sub: 'sub-option2' }
   { ... ... }
]
// id는 는 필수값은 아닙니다.
// key (option)은 기본값입니다. 사용자 데이터에 맞게 지정 가능합니다.`,m=`// script setup 
// const optionList = [] 
<BeList options={optionList}></BeList>`,j=`// @selection: Boolean 
// @selectedType: {mark | bg | mark bg | bg text | bg text mark} 
// default: false 

<BeList options={optionList} selection selectedType={selectedType}></BeList>`,h=`// script setup 
// const optionSubList = [] 
//  optionItem: { id: 1, option: 'option1', sub: 'sub-option1' } 
<BeList options={optionSubList}></BeList>`,b=`// @icon: Boolean 
// default: false 

// optionItem: { id: 1, option: 'option1', icon: 'xi-icon-name' } 
<BeList options={optionList} icon></BeList>`,u=`// @border: Boolean 
// default: false 

<BeList options={optionList} border></BeList>`,g=`// @image: Boolean 
//  optionItem: { id: 1, option: 'option1', image: 'img_url' } 
// default: false 

<BeList options={optionList} image></BeList>`;function f(){const[o,a]=l.useState("bg"),d=n=>{a(n)};return s.jsxs("div",{className:"page-wrapper be container",children:[s.jsxs("div",{className:"base",children:[s.jsxs("section",{children:[s.jsx("div",{className:"desc",children:s.jsx(c,{color:"deepblue",children:"Component"})}),s.jsx("div",{className:"contents",children:s.jsxs("div",{className:"be-segment border",children:[s.jsx("div",{className:"contents",children:s.jsx("div",{className:"list-container",children:s.jsx(i,{options:t,selection:!0})})}),s.jsx(e,{code:m,language:"tsx"})]})})]}),s.jsxs("section",{children:[s.jsx("h4",{children:"Data Set"}),s.jsx("div",{className:"desc"}),s.jsx(e,{code:p,language:"tsx",useToggle:!1})]})]}),s.jsxs("div",{className:"variants",children:[s.jsx("h1",{className:"title",children:"Variants"}),s.jsxs("section",{children:[s.jsx("h4",{children:"Selection"}),s.jsx("div",{className:"desc"}),s.jsx("div",{className:"contents",children:s.jsxs("div",{className:"be-segment border",children:[s.jsxs("div",{className:"contents",children:[s.jsx("div",{className:"list-btns be-segment",style:{width:"100%"},children:r.map(n=>s.jsx(c,{color:n===o?"deepblue":"",onClick:()=>d(n),children:n},n))}),s.jsx("div",{className:"list-container",children:s.jsx(i,{options:t,selection:!0,selectedType:o})})]}),s.jsx(e,{code:j,language:"tsx"})]})})]}),s.jsxs("section",{children:[s.jsx("h4",{children:"Sub Title"}),s.jsx("div",{className:"desc"}),s.jsx("div",{className:"contents",children:s.jsxs("div",{className:"be-segment border",children:[s.jsx("div",{className:"contents",children:s.jsx("div",{className:"list-container",children:s.jsx(i,{options:x})})}),s.jsx(e,{code:h,language:"tsx"})]})})]}),s.jsxs("section",{children:[s.jsx("h4",{children:"With Icon"}),s.jsx("div",{className:"desc"}),s.jsx("div",{className:"contents",children:s.jsxs("div",{className:"be-segment border",children:[s.jsx("div",{className:"contents",children:s.jsx("div",{className:"list-container",children:s.jsx(i,{options:t,icon:!0})})}),s.jsx(e,{code:b,language:"tsx"})]})})]}),s.jsxs("section",{children:[s.jsx("h4",{children:"Border"}),s.jsx("div",{className:"desc"}),s.jsx("div",{className:"contents",children:s.jsxs("div",{className:"be-segment border",children:[s.jsx("div",{className:"contents",children:s.jsx("div",{className:"list-container",children:s.jsx(i,{options:t,border:!0})})}),s.jsx(e,{code:u,language:"tsx"})]})})]}),s.jsxs("section",{children:[s.jsx("h4",{children:"With Image"}),s.jsx("div",{className:"desc"}),s.jsx("div",{className:"contents",children:s.jsxs("div",{className:"be-segment border",children:[s.jsx("div",{className:"contents",children:s.jsx("div",{className:"list-container",children:s.jsx(i,{options:t,image:!0})})}),s.jsx(e,{code:g,language:"tsx"})]})})]})]}),s.jsx("style",{jsx:"true",children:`  
          .list-container {
            width: 250px;
            border: 1px solid #ebebeb;
          }
          .list-container .item {
            padding: 10px;
          }
        `})]})}export{f as default};
