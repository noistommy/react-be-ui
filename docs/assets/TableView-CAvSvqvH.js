import{r as t,j as e,P as r,A as s}from"./index-BG_3_bTz.js";import{C as n}from"./CodeBlock-BLlm0AS2.js";const m=`//  column data set 
const columns = [
   { key: 'column1', name: '이름', align: 'center', col: 2 }
   { key: 'column2', name: '이름', align: 'center', col: 6 }
   { key: 'column3', name: '이름', align: 'center', col: 4 }
]
// values data set 
const values = [
   { column1: 'value1-1', column2: 'value1-2', column3: 'value1-3', }
   { column1: 'value2-1', column2: 'value2-2', column3: 'value2-3', }
   { ... ... }
]
// columns[]의 key는 column 구분을 위한 key입니다.
// columns[]의 name은 table header에 표시되는 값입니다.
// columns[]의 align은 column의 정렬을 지정하는 값입니다.
// columns[]의 col은 table grid를 위한 값입니다.
// values[]는 table body에 표시 되는 table list 값입니다.`,u=`// @columns: table header data 
// @values: table body data 
<BeTable columns={columns} values={values}></BeTable>`,x=`// @border: Boolean 
// default: false 
<BeTable columns={columns} values={values} border></BeTable>`,j=`// @striped: {odd | even} 
// default: null 
<BeTable columns={columns} values={values} striped={striped}></BeTable>`,v=`// @gridType: divide 
// @divideNum: Number 
// default: null 
<BeTable 
   columns={columns}
   values={values}
   gridType="divide"
   divideNum={number}
></BeTable>`,h=`// @gridType: widths 
// columns[]의 col / 12 로 지정 
// default: null 
<BeTable 
   columns={columns}
   values={values}
   gridType="widths"
></BeTable>`,b=`// @border: Boolean 
// default: false 
<BeTable columns={columns} values={values} selection onChange={setSelectItem}></BeTable>`,l=[{key:"name",name:"이름",align:"",col:2},{key:"age",name:"나이",align:"right",col:6},{key:"job",name:"직업",align:"",col:4}],a=[{name:"김아무개",age:11,job:"학생"},{name:"이아무개",age:17,job:"대학생"},{name:"박아무개",age:31,job:"회사원"}];function T(){const[c,d]=t.useState({}),o=(g,i)=>{d(i)};return e.jsxs("div",{className:"page-wrapper be container",children:[e.jsxs("div",{className:"base",children:[e.jsxs("section",{children:[e.jsx("div",{className:"desc",children:e.jsx(r,{color:"deepblue",children:"Component"})}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(s,{columns:l,values:a})}),e.jsx(n,{code:u,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Data Set"}),e.jsx("div",{className:"desc"}),e.jsx(n,{code:m,language:"tsx",useToggle:!1})]})]}),e.jsxs("div",{className:"variants",children:[e.jsx("h1",{className:"title",children:"Variants"}),e.jsxs("section",{children:[e.jsx("h4",{children:"Border"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(s,{columns:l,values:a,border:!0})}),e.jsx(n,{code:x,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Striped"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsxs("div",{className:"contents",children:[e.jsx("h6",{children:"Odd"}),e.jsx(s,{columns:l,values:a,striped:"odd"}),e.jsx("h6",{children:"Even"}),e.jsx(s,{columns:l,values:a,striped:"even"})]}),e.jsx(n,{code:j,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Grid Column: Divide"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(s,{columns:l,values:a,gridType:"divide",divideNum:3,border:!0})}),e.jsx(n,{code:v,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Grid Column: Widths"}),e.jsx("div",{className:"desc",children:"column 2 + column 6 + column 4 = 12"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(s,{columns:l,values:a,gridType:"widths",border:!0})}),e.jsx(n,{code:h,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Selection"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsxs("div",{className:"contents",children:[e.jsx(s,{columns:l,values:a,selection:!0,border:!0,onSelect:o}),c.name,"/",c.age,"/",c.job]}),e.jsx(n,{code:b,language:"tsx"})]})})]})]})]})}export{T as default};
