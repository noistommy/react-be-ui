import{j as e}from"./index-BNgkG8B6.js";import{M as l,q as s,C as r}from"./CodeBlock-CNKhYZn_.js";import{t as a,f as t}from"./data-D9Q02z01.js";const c=`//  tree list data set  
const treeList = [ 
   { label: 'Tree Item 1', children: [ 
           { label: 'Tree Item 1-1', children: [ ... ] }, 
           { label: 'Tree Item 1-2', children: [ ... ] }, 
           { label: 'Tree Item 1-3', children: [ ... ] }, 
       ] 
   }, 
   { label: 'Tree Item 2', children: [ 
           { label: 'Tree Item 2-1', children: [ ... ] }, 
           { label: 'Tree Item 2-2', children: [ ... ] }, 
           { label: 'Tree Item 2-3', children: [ ... ] }, 
       ] 
   }, 
] 
// TreeList item은 label(제목)과 children (하위 목록)으로 구성합니다.  
// 하위목록 레벨에 제한은 없습니다.  
// 하위목록은 상위 목록과 동일한 구성입니다.`,n=`<!-- script setup --> 
<!-- const treeList = [] --> 
<BeTree treeData={treeList}></BeTree>`,i=`<!-- @useMark: Boolean --> 
<!-- default: true --> 
<BeTree treeData={treeList} useMark></BeTree>`,d=`<!-- @useMark: Boolean --> 
<!-- default: true --> 
<BeTree treeData={treeList} files></BeTree>`;function x(){return e.jsxs("div",{className:"page-wrapper be container",children:[e.jsxs("div",{className:"base",children:[e.jsxs("section",{children:[e.jsx("div",{className:"desc",children:e.jsx(l,{color:"deepblue",children:"Component"})}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(s,{treeList:a,useMark:!0})}),e.jsx(r,{code:n,language:"html"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Data Set"}),e.jsx("div",{className:"desc"}),e.jsx(r,{code:c,language:"javascript",useToggle:!1})]})]}),e.jsxs("div",{className:"variants",children:[e.jsxs("section",{children:[e.jsx("h4",{children:"useMark"}),e.jsx("div",{className:"desc",children:e.jsx(l,{color:"deepblue",children:"Component"})}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsxs("div",{className:"contents",children:[e.jsx("h5",{children:"mark 사용"}),e.jsx(s,{treeList:a,useMark:!0}),e.jsx("h5",{children:"mark 사용 안함"}),e.jsx(s,{treeList:a})]}),e.jsx(r,{code:i,language:"html"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Files"}),e.jsx("div",{className:"desc",children:e.jsx(l,{color:"deepblue",children:"Component"})}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(s,{treeList:t,files:!0})}),e.jsx(r,{code:d,language:"html"})]})})]})]})]})}export{x as default};
