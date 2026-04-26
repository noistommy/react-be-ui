export const dataSet =
`//  column data set  
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
// values[]는 table body에 표시 되는 table list 값입니다.`

export const base_component =
`// @columns: table header data  
// @values: table body data  
<BeTable columns={columns} values={values}></BeTable>`
export const border =
`// @border: Boolean  
// default: false  
<BeTable columns={columns} values={values} border></BeTable>`
export const striped =
`// @striped: {odd | even}  
// default: null  
<BeTable columns={columns} values={values} striped={striped}></BeTable>`
export const grid_divide =
`// @gridType: divide  
// @divideNum: Number  
// default: null  
<BeTable  
   columns={columns} 
   values={values} 
   gridType="divide" 
   divideNum={number} 
></BeTable>`
export const grid_width =
`// @gridType: widths  
// columns[]의 col / 12 로 지정  
// default: null  
<BeTable  
   columns={columns} 
   values={values} 
   gridType="widths" 
></BeTable>`
export const selection =
`// @border: Boolean  
// default: false  
<BeTable columns={columns} values={values} selection onChange={setSelectItem}></BeTable>`
