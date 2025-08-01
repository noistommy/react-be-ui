import { BeTag, BeRadios } from '../../../dist/be-ui.es'
import CodeBlock from '../component/CodeBlock'

import * as codes from '../codes/checkbox'

import {useState} from 'react'

const radioList = [
  { name: 'spring', label: 'Spring'},
  { name: 'summer', label: 'Summer' },
  { name: 'authum', label: 'Authum' },
  { name: 'winder', label: 'Winter' },
]

export default function CheckboxGroupView () {
  const [checked, setChecked] = useState('spring')

  const handleChange = (item) => {
    setChecked(item)
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
                <BeRadios radioList={radioList} selectedValue={checked} group="season" onChange={handleChange} />
              </div>
              <div className="result">
                <BeTag>{checked}</BeTag>
              </div>
              <CodeBlock code={codes.radios} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}