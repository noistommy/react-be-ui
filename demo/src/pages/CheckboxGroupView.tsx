import { BeTag, BeCheckboxGroup } from '../../../dist/be-ui.es'
import CodeBlock from '../component/CodeBlock'

import * as codes from '../codes/checkbox'

import {useState} from 'react'

const checkboxList = [
  { name: 'spring', label: 'Spring', state: true },
  { name: 'summer', label: 'Summer', state: false },
  { name: 'authum', label: 'Authum', state: true },
  { name: 'winder', label: 'Winter', state: false },
]
export default function CheckboxGroupView () {
  const [checked, setChecked] = useState(['spring'])

  const handleChange = (list) => {
    setChecked(list)
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
                <BeCheckboxGroup checkboxList={checkboxList} checkedList={checked} onChange={handleChange} />
              </div>
              <div className="result">
                [ {checked.map(c => (
                  <BeTag key={c}>{c}</BeTag>
                ))} ]
              </div>
              <CodeBlock code={codes.checkbox_group} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}