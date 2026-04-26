import{r,j as e}from"./index-BNgkG8B6.js";import{M as o,C as a,Y as i,z as l}from"./CodeBlock-CNKhYZn_.js";import{o as n}from"./data-D9Q02z01.js";const b=`<div class="be-tabs"> 
   <div class="tab-menu"> 
       <div class="tab-item">tab1</div> 
       <div class="tab-item">tab2</div> 
       <div class="tab-item">...</div> 
   </div> 
   <div class="tab-contants"> 
       tab contents 
   </div> 
</div>`,x=`// const tabList = [{option, ...}]  
// import {Slot} from 'react-be-ui'  
//   
<BeTabs tabList={tabList} > 
   <Slot name="contents">{selectedTab}</Slot> 
</BeTabs>`,m=`// @vertical: Boolean  
// default: false  
<BeTabs tabList={tabList}  vertical>...</BeTabs>`,j=`// @tabType: { line | button | browser }  
// tabType: line  
<BeTabs tabList={tabList} tabType="line">...</BeTabs>`,h=`// @tabType: { line | button | browser }  
// tabType: button  
<BeTabs tabList={tabList} tabType="button">{{ tabContants }}</BeTabs>`;function T(){const[s,d]=r.useState("run"),c=t=>{d(t)};return e.jsxs("div",{className:"page-wrapper be container",children:[e.jsxs("div",{className:"base",children:[e.jsxs("section",{children:[e.jsx("div",{className:"desc",children:e.jsx(o,{color:"lightblue",children:"HTML"})}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-tabs",children:[e.jsx("div",{className:"tab-menu",children:n.map(t=>e.jsx("div",{className:`tab-item tab ${t.option===s?"active":""}`,onClick:()=>d(t.option),children:t.option},t.id))}),e.jsx("div",{className:"tab-contents",children:s})]})}),e.jsx(a,{code:b,language:"html"})]})})]}),e.jsxs("section",{children:[e.jsx("div",{className:"desc",children:e.jsx(o,{color:"deepblue",children:"Component"})}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(i,{tabList:n,selected:s,onSelectTab:c,children:e.jsx(l,{name:"contents",children:s})})}),e.jsx(a,{code:x,language:"tsx"})]})})]})]}),e.jsxs("div",{className:"variants",children:[e.jsx("h1",{className:"title",children:"Variants"}),e.jsxs("section",{children:[e.jsx("h4",{children:"Vertical"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(i,{tabList:n,directType:"vertical",selected:s,onSelectTab:c,children:e.jsx(l,{name:"contents",children:e.jsx("div",{className:"tab-contents",children:s})})})}),e.jsx(a,{code:m,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Type - Line"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(i,{tabList:n,tabType:"line",selected:s,onSelectTab:c,children:e.jsx(l,{name:"contents",children:e.jsx("div",{className:"tab-contents",children:s})})})}),e.jsx(a,{code:j,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Type - Button"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(i,{tabList:n,tabType:"button",selected:s,onSelectTab:c,children:e.jsx(l,{name:"contents",children:e.jsx("div",{className:"tab-contents",children:s})})})}),e.jsx(a,{code:h,language:"tsx"})]})})]})]})]})}export{T as default};
