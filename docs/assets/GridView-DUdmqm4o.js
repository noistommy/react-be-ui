import{j as s,S as d,p as i,h as e,m as c}from"./index-BLwJGyjk.js";import{C as l}from"./CodeBlock-D1r4VYik.js";const a=`<!-- HTML -->
<!-- Grid Column: 12 -->
<div class="be-grid">
   <!-- span-1은 생략 가능 -->
   <div class="column"> column 1 </div>
   <div class="column"> column 2 </div>
   <div class="column"> column 3 </div>
    ... 
   <div class="column"> column 12 </div>
</div>`,o=`// Component 
// Grid Column: 12 
// import {BeGrid, Column} from 'react-be-ui' 
<BeGrid>
   // span={1}은 생략 가능 
   <Column> column 1 </Column>
   <Column> column 2 </Column>
   <Column> column 3 </Column>
    ... 
   <Column> column 12 </Column>
</BeGrid>`,m=`// HTML 
// Grid Column: 12 
<div class="be-grid">
   // span-{md|sm|xs}-{number} 
   // {md|sm|xs} 각 영역에서만 적용 됩니다. 
   <div class="column span-2 span-md-2 span-sm-4 span-xs-2"> column </div>
    ... 
</div>
// Component 
// divide responsive 
<BeGrid divide={number} md={md} sm={sm} xs={xs}>
   <Column span={a}> column a </Column>
   ...
</BeGrid>
// widths responsive 
<BeGrid>
   <Column span={a} md={md} sm={sm} xs={xs}> column a </Column>
   <Column span={b} md={md} sm={sm} xs={xs}> column b </Column>
   <Column span={c} md={md} sm={sm} xs={xs}> column c </Column>
   ...
</BeGrid>`,r=`// HTML 
// Grid Column: 12 
// number / 12 분할 합니다. 
<div class="be-grid divide-{number}">
   <div class="column"> column </div>
    ... 
</div>
// Component 
<BeGrid divide={number}>
   <Column> column </Column>
    ... 
</BeGrid>`,t=`// HTML 
// Grid Column: 12 
// 각 number 만큼씩 영역을 분할합니다. 
// 각 넘버의 합은 12입니다. a + b + c = 12 
<div class="be-grid">
   <div class="column span-{a}"> column a</div>
   <div class="column span-{b}"> column b</div>
   <div class="column span-{c}"> column c</div>
</div>
// Component 
<BeGrid>
   <Column span={a}> column a </Column>
   <Column span={b}> column b </Column>
   <Column span={c}> column c </Column>
</BeGrid>`,x=`// HTML 
// Grid Column: 12 
<div class="be-grid">
   <div class="column span-3"></div>
   <div class="column span-8">
       <div class="ga-grid">
           <div class="column span-4"> </div>
           <div class="column span-4"> </div>
           <div class="column span-4"> </div>
       </div>
   </div>
   <div class="column"></div>
</div>
// Component 
<BeGrid>
   <Column span={3}> ... </Column>
   <Column span={8}>
       <BeGrid> // Nasted BeGrid
         <Column span={4}></Column>
         <Column span={4}></Column>
         <Column span={4}></Column>
       </BeGrid>
   </Column>
   <Column span={1}> ... </Column>
</BeGrid>`,u=`// justify: {left | center | right | between | around} 
// align: {left | center | right } : test-align 
// HTML 
// Grid Column: 12 
<div class="be-grid justify-{justify} align-{align}" >...</div>
// HTML 
<BeGrid justify={justify} align={align}>...</BeGrid>`,j=`// HTML 
// Grid Column: 12 
// offset number 만큼 영역을 offset 합니다. 
// 각 span과 offset의 합은 12입니다. a + A + b + B = 12 
<div class="be-grid">
   <div class="column span-{a} offset-{A}"> column a</div>
   <div class="column span-{b} offset-{B}"> column b</div>
</div> 
// Component 
<BeGrid>
   <Column span={a} offset={A}> column a </Column>
   <Column span={b} offset={B}> column b </Column>
</BeGrid>`,v=`// HTML 
// direct: {left | right} 
// {left | right}쪽 첫번쨰 column으로 채운다 
<div class="be-grid left-side">
   <div class="column"> column side</div>
   <div class="column span-{a}"> column a</div>
</div>
<div class="be-grid right-side">
   <div class="column span-{a}"> column a</div>
   <div class="column"> column side</div>
</div>
// Component 
<BeGrid {leftSide | rightSide}>
   <Column span={a}> column a </Column>
   <Column span={b}> column b </Column>
</BeGrid>`;function b(){return s.jsxs("div",{id:"GridView",className:"page-wrapper be container",children:[s.jsxs("div",{className:"base",children:[s.jsxs("section",{children:[s.jsx("div",{className:"desc",children:s.jsx(d,{color:"lightblue",children:"HTML"})}),s.jsx("div",{className:"contents",children:s.jsxs("div",{className:"be-segment border",children:[s.jsxs("div",{className:"contents block",children:[s.jsx("div",{className:"be-grid",children:Array.from({length:12}).map(n=>s.jsx("div",{className:"column"},n))}),s.jsxs("div",{className:"be-grid justify-center",children:[s.jsxs("div",{className:"rows",children:[s.jsx("div",{className:"column span-3"}),s.jsx("div",{className:"column span-3"}),s.jsx("div",{className:"column span-3"})]}),s.jsxs("div",{className:"rows",children:[s.jsx("div",{className:"column span-2"}),s.jsx("div",{className:"column span-2"}),s.jsx("div",{className:"column span-2"})]})]})]}),s.jsx(l,{code:a,language:"html"})]})})]}),s.jsxs("section",{children:[s.jsx("div",{className:"desc",children:s.jsx(d,{color:"deepblue",children:"Component"})}),s.jsx("div",{className:"contents",children:s.jsxs("div",{className:"be-segment border",children:[s.jsx("div",{className:"contents block",children:s.jsxs(i,{children:[Array.from({length:12}).map(n=>s.jsx(e,{},n)),s.jsx(c,{children:Array.from({length:6}).map(n=>s.jsx(e,{},n))})]})}),s.jsx(l,{code:o,language:"tsx"})]})})]})]}),s.jsxs("div",{className:"variants",children:[s.jsx("h1",{className:"title",children:"Variants"}),s.jsxs("section",{children:[s.jsx("h4",{children:"Divide"}),s.jsx("div",{className:"desc"}),s.jsx("div",{className:"contents",children:s.jsxs("div",{className:"be-segment border",children:[s.jsxs("div",{className:"contents block",children:[s.jsx(i,{divide:2,children:Array.from({length:2}).map(n=>s.jsx(e,{},n))}),s.jsx(i,{divide:4,children:Array.from({length:4}).map(n=>s.jsx(e,{},n))}),s.jsx(i,{divide:8,children:Array.from({length:8}).map(n=>s.jsx(e,{},n))}),s.jsx(i,{divide:10,children:Array.from({length:10}).map(n=>s.jsx(e,{},n))})]}),s.jsx(l,{code:r,language:"tsx"})]})})]}),s.jsxs("section",{children:[s.jsx("h4",{children:"Widths"}),s.jsx("div",{className:"desc"}),s.jsx("div",{className:"contents",children:s.jsxs("div",{className:"be-segment border",children:[s.jsxs("div",{className:"contents block",children:[s.jsx(i,{children:[2,6,4].map(n=>s.jsx(e,{span:n}))}),s.jsx(i,{children:[4,4,4].map(n=>s.jsx(e,{span:n}))}),s.jsx(i,{children:[2,7,3].map(n=>s.jsx(e,{span:n}))})]}),s.jsx(l,{code:t,language:"tsx"})]})})]}),s.jsxs("section",{children:[s.jsx("h4",{children:"Nested"}),s.jsx("div",{className:"desc"}),s.jsx("div",{className:"contents",children:s.jsxs("div",{className:"be-segment border",children:[s.jsx("div",{className:"contents block",children:s.jsxs(i,{children:[s.jsx(e,{span:3}),s.jsx(e,{span:8,children:s.jsxs(i,{children:[s.jsx(e,{span:4}),s.jsx(e,{span:4}),s.jsx(e,{span:4})]})}),s.jsx(e,{span:1})]})}),s.jsx(l,{code:x,language:"tsx"})]})})]}),s.jsxs("section",{children:[s.jsx("h4",{children:"Offset"}),s.jsx("div",{className:"desc"}),s.jsx("div",{className:"contents",children:s.jsxs("div",{className:"be-segment border",children:[s.jsxs("div",{className:"contents block",children:[s.jsxs(i,{children:[s.jsx(e,{span:3,offset:3}),s.jsx(e,{span:3,offset:3})]}),s.jsxs(i,{children:[s.jsx(e,{span:7,offset:3}),s.jsx(e,{span:2})]})]}),s.jsx(l,{code:j,language:"tsx"})]})})]}),s.jsxs("section",{children:[s.jsx("h4",{children:"AutoFit (Left/ Right Side)"}),s.jsx("div",{className:"desc"}),s.jsx("div",{className:"contents",children:s.jsxs("div",{className:"be-segment border",children:[s.jsxs("div",{className:"contents block",children:[s.jsxs(i,{leftSide:!0,children:[s.jsx(e,{}),s.jsx(e,{span:3})]}),s.jsxs(i,{rightSide:!0,children:[s.jsx(e,{span:3}),s.jsx(e,{})]})]}),s.jsx(l,{code:v,language:"tsx"})]})})]}),s.jsxs("section",{children:[s.jsx("h4",{children:"Align"}),s.jsx("div",{className:"desc"}),s.jsx("div",{className:"contents",children:s.jsxs("div",{className:"be-segment border",children:[s.jsxs("div",{className:"contents block",children:[s.jsx(i,{justify:"left",children:[2,2,2,2].map(n=>s.jsx(e,{span:n}))}),s.jsx(i,{justify:"center",children:[2,2,2,2].map(n=>s.jsx(e,{span:n}))}),s.jsx(i,{justify:"right",children:[2,2,2,2].map(n=>s.jsx(e,{span:n}))}),s.jsx(i,{justify:"between",children:[2,2,2,2].map(n=>s.jsx(e,{span:n}))}),s.jsx(i,{justify:"around",children:[2,2,2,2].map(n=>s.jsx(e,{span:n}))})]}),s.jsx(l,{code:u,language:"tsx"})]})})]}),s.jsxs("section",{children:[s.jsx("h4",{children:"Responsive"}),s.jsx("div",{className:"desc"}),s.jsx("div",{className:"contents",children:s.jsxs("div",{className:"be-segment border",children:[s.jsxs("div",{className:"contents block",children:[s.jsx("h6",{children:"Divide Responsive"}),s.jsx(i,{divide:12,md:6,sm:4,xs:2,children:Array.from({length:12}).map(n=>s.jsx(e,{},n))}),s.jsx("h6",{children:"Widths Responsive"}),s.jsx(i,{children:[2,2,2,2].map(n=>s.jsx(e,{span:n,md:2,sm:3,xs:6}))})]}),s.jsx(l,{code:m,language:"tsx"})]})})]})]}),s.jsx("style",{jsx:"true",children:`
          #GridView .contents.block {
            display: block;
          }
          #GridView .be-grid .columne {
            background-color:
          }
          #GridView .be-grid .column::before {
            content: '';
            width: 100%;
            height: 100%;
            text-align: center;
            background-color: rgba(0, 0, 0, 0.08);
            box-shadow: inset 0 0 0 1px #efefef;
            min-height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          #GridView .column .be-grid {
            background-color: rgba(0, 0, 0, 0.08);
          }
          #GridView .be-grid .column.span-8::before {
            content: '';
            display: none;
          }
        `})]})}export{b as default};
