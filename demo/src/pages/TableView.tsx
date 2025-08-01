import {useState} from 'react'
import { BeTag, BeTable } from '../../../dist/be-ui.es'
import CodeBlock from '../component/CodeBlock'

import * as codes from '../codes/table'
const columns = [
  { key: 'name', name: '이름', align: '', col: 2 },
  { key: 'age', name: '나이', align: 'right', col: 6 },
  { key: 'job', name: '직업', align: '', col: 4 },
]

const values = [
  { name: '김아무개', age: 11, job: '학생' },
  { name: '이아무개', age: 17, job: '대학생' },
  { name: '박아무개', age: 31, job: '회사원' },
]


export default function ExanpleView () {
  const [selectRow, setSelectRow] = useState({})
  const handleSelect = (idx, data) => {
    setSelectRow(data)
  }
  return (
    <div className="page-wrapper be container">
      <div className="base">
        <section>
          <div className="desc">
            <BeTag color="deepblue">Component</BeTag>
          </div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeTable columns={columns} values={values}></BeTable>
              </div>
              <CodeBlock code={codes.base_component} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Data Set</h4>
          <div className="desc"></div>
          <CodeBlock code={codes.dataSet} language="tsx" useToggle={false}></CodeBlock>
        </section>
      </div>
      <div className="variants">
        <h1 className="title">Variants</h1>
        <section>
          <h4>Border</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeTable columns={columns} values={values} border></BeTable>
              </div>
              <CodeBlock code={codes.border} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Striped</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <h6>Odd</h6>
                <BeTable columns={columns} values={values} striped="odd"></BeTable>
                <h6>Even</h6>
                <BeTable columns={columns} values={values} striped="even"></BeTable>
              </div>
              <CodeBlock code={codes.striped} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Grid Column: Divide</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeTable columns={columns} values={values} gridType="divide" divideNum={3} border></BeTable>
               
              </div>
              <CodeBlock code={codes.grid_divide} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Grid Column: Widths</h4>
          <div className="desc">column 2 + column 6 + column 4 = 12</div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeTable columns={columns} values={values} gridType="widths" border></BeTable>
              </div>
              <CodeBlock code={codes.grid_width} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Selection</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeTable columns={columns} values={values} selection border onSelect={handleSelect}></BeTable>
                {selectRow.name}/{selectRow.age}/{selectRow.job}
              </div>
              <CodeBlock code={codes.selection} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}