import{j as e,T as a,_ as s,C as n}from"./index-HHkmdi8H.js";import{t as r}from"./data-BfBeh0jL.js";const l=`//  tree list data set 
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
// 하위목록은 상위 목록과 동일한 구성입니다.`,t=`<!-- script setup -->
<!-- const treeList = [] -->
<BeTree :tree-data="treeList"></BeTree>`,c=`<!-- @useMark: Boolean -->
<!-- default: true -->
<BeTree :tree-data="treeList" :use-mark="useMark"></BeTree>`;function o(){return e.jsxs("div",{className:"page-wrapper be container",children:[e.jsxs("div",{className:"base",children:[e.jsxs("section",{children:[e.jsx("div",{className:"desc",children:e.jsx(a,{color:"deepblue",children:"Component"})}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(s,{treeList:r,useMark:!0})}),e.jsx(n,{code:t,language:"html"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Data Set"}),e.jsx("div",{className:"desc"}),e.jsx(n,{code:l,language:"javascript",useToggle:!1})]})]}),e.jsx("div",{className:"variants",children:e.jsxs("section",{children:[e.jsx("h4",{children:"useMark"}),e.jsx("div",{className:"desc",children:e.jsx(a,{color:"deepblue",children:"Component"})}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsxs("div",{className:"contents",children:[e.jsx("h6",{children:"mark 사용"}),e.jsx(s,{treeList:r,useMark:!0}),e.jsx("h6",{children:"mark 사용 안함"}),e.jsx(s,{treeList:r})]}),e.jsx(n,{code:c,language:"html"})]})})]})})]})}export{o as default};
