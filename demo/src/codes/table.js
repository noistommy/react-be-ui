export const dataSet =
  `//  column data set \n` +
  `const columns = [\n` +
  `   { key: 'column1', name: '이름', align: 'center', col: 2 }\n` +
  `   { key: 'column2', name: '이름', align: 'center', col: 6 }\n` +
  `   { key: 'column3', name: '이름', align: 'center', col: 4 }\n` +
  `]\n` +
  `// values data set \n` +
  `const values = [\n` +
  `   { column1: 'value1-1', column2: 'value1-2', column3: 'value1-3', }\n` +
  `   { column1: 'value2-1', column2: 'value2-2', column3: 'value2-3', }\n` +
  `   { ... ... }\n` +
  `]\n` +
  `// columns[]의 key는 column 구분을 위한 key입니다.\n` +
  `// columns[]의 name은 table header에 표시되는 값입니다.\n` +
  `// columns[]의 align은 column의 정렬을 지정하는 값입니다.\n` +
  `// columns[]의 col은 table grid를 위한 값입니다.\n` +
  `// values[]는 table body에 표시 되는 table list 값입니다.`

export const base_component =
  `// @columns: table header data \n` +
  `// @values: table body data \n` +
  `<BeTable columns={columns} values={values}></BeTable>`
export const border =
  `// @border: Boolean \n` +
  `// default: false \n` +
  `<BeTable columns={columns} values={values} border></BeTable>`
export const striped =
  `// @striped: {odd | even} \n` +
  `// default: null \n` +
  `<BeTable columns={columns} values={values} striped={striped}></BeTable>`
export const grid_divide =
  `// @gridType: divide \n` +
  `// @divideNum: Number \n` +
  `// default: null \n` +
  `<BeTable \n` +
  `   columns={columns}\n` +
  `   values={values}\n` +
  `   gridType="divide"\n` +
  `   divideNum={number}\n` +
  `></BeTable>`
export const grid_width =
  `// @gridType: widths \n` +
  `// columns[]의 col / 12 로 지정 \n` +
  `// default: null \n` +
  `<BeTable \n` +
  `   columns={columns}\n` +
  `   values={values}\n` +
  `   gridType="widths"\n` +
  `></BeTable>`
export const selection =
  `// @border: Boolean \n` +
  `// default: false \n` +
  `<BeTable columns={columns} values={values} selection onChange={setSelectItem}></BeTable>`
