import { BeTag, BeCheckbox } from '../../../dist/be-ui.es'
import CodeBlock from '../component/CodeBlock'

import * as codes from '../codes/checkbox'

import {useState} from 'react'


// import {status} from '../contents'

export default function CheckboxView () {

  const checkList = new Array(15).fill(true)
  const [isChecked, setIsChecked] = useState(checkList)
  const [onChecked, setOnChecked] = useState(true)

  const handleChange = (idx) => {
    const newArr = isChecked.map((c, i) => i === idx ? c = !c : c )
    setIsChecked(newArr)
  }
  const onChange = (name, value) => {
    setOnChecked(value)
  }
  return (
    <div className="page-wrapper be container">
      <div className="base">
        <section>
          <div className="desc">
            <BeTag color="lightblue">HTML</BeTag>
          </div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <div className={`be-checkbox ${isChecked[0] ? 'checked' : ''}`}>
                  <input type="checkbox" id="ch_1" onChange={() => handleChange(0)}  />
                  <label htmlFor="ch_1">Checkbox</label>
                </div>
                <div className={`be-checkbox ${isChecked[1] ? 'checked' : ''}`}>
                  <input type="checkbox" id="ch_2" onChange={() => handleChange(1)}  />
                  <label htmlFor="ch_2">Checkbox</label>
                </div>
                <div className={`be-checkbox indeter ${isChecked[2] ? 'checked' : ''}`}>
                  <input type="checkbox" id="ch_3" onChange={() => handleChange(2)}  />
                  <label htmlFor="ch_3">Checkbox</label>
                </div>
              </div>
              <CodeBlock code={codes.base_html} language="html"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <div className="desc">
            <BeTag color="deepblue">Component</BeTag>
          </div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeCheckbox name="ch_comp" labelText="checkbox" checked></BeCheckbox>
                <BeCheckbox name="r_comp" type="radio" labelText="radio"></BeCheckbox>
              </div>
              <CodeBlock code={codes.base_component} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
      </div>
      <div className="variants">
        <h1 className="title">Variants</h1>
        <section>
          <h4>Type</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeCheckbox name="ch_comp_1" labelText="checkbox" checked></BeCheckbox>
                <BeCheckbox name="r_comp_1" type="radio" labelText="radio"></BeCheckbox>
              </div>
              <CodeBlock code={codes.type} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Indeterminate</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeCheckbox 
                  name="ch_comp_2"
                  labelText="checkbox"
                  checked indeter
                ></BeCheckbox>
              </div>
              <CodeBlock code={codes.indeter} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Event: onChange</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeCheckbox 
                  name="ch_comp_3"
                  labelText="checkbox"
                  checked={onChecked}
                  onChange={onChange}
                ></BeCheckbox>
                {onChecked ? (<span className="be-tag label green">True</span>) : (<span className="be-tag label red">False</span>)}
              </div>
              <CodeBlock code={codes.event} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}