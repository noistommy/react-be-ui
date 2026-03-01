import { BeTag, BeSwitch } from '../../../dist/be-ui.es'
import CodeBlock from '../component/CodeBlock'

import * as codes from '../codes/switch'

import {colors} from '../contents'

import {useState} from 'react'

export default function ExanpleView () {
  const [colored, setColored]  = useState('red');
  const [select, setSelect]  = useState(false);

  const [checked, setChecked] = useState({
    switch1: true,
    switch2: false,
    switch3: false,
    switch4: false,
    switch5: false,
    switch6: false,
    switch7: false,
    switch8: false,
    switch9: false,
    switch10: false,
  });
  const handleChange = (name, checked) => {
    setChecked((prevData) => ({...prevData, [name]: checked}))
  }
  const handleSelectChange = (name, checked) => {
    setSelect(checked)
  }
  const setColor = (color) => {
    setColored(color)
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
                <label className="be-switch slide">
                  <input type="checkbox" />
                  <span className="switch" />
                </label>
                <label className="be-switch slide inside">
                  <input type="checkbox" />
                  <span className="switch" />
                </label>
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
                <BeSwitch checked={select} onChange={handleSelectChange}></BeSwitch>
                <BeSwitch name="switch1" checked={checked.switch1} onChange={handleChange}></BeSwitch>
                <BeSwitch name="switch2" inside checked={checked.switch2} onChange={handleChange}></BeSwitch>
              </div>
              <CodeBlock code={codes.base_component} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
      </div>
      <div className="variants">
        <h1 className="title">Valiants</h1>
        <section>
          <h4>Button</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeSwitch name="switch3" type="button" checked={checked.switch3} onChange={handleChange}></BeSwitch>
                <BeSwitch name="switch4" type="button" round checked={checked.switch4} onChange={handleChange}></BeSwitch>
                <BeSwitch name="switch5" type="button" onText="A" offText="B" checked={checked.switch5} onChange={handleChange}></BeSwitch>
              </div>
              <CodeBlock code={codes.button} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Round</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeSwitch name="switch6" round checked={checked.switch6} onChange={handleChange} />
                <BeSwitch name="switch7" round inside checked={checked.switch7} onChange={handleChange} />
                <BeSwitch name="switch8" type="button" round checked={checked.switch8} onChange={handleChange}></BeSwitch>
                <BeSwitch name="switch9" type="button" round onText="A" offText="B" checked={checked.switch9} onChange={handleChange}></BeSwitch>
              </div>
              <CodeBlock code={codes.round} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Colors</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="header">
                {colors.map(color => (
                  <BeTag key={color} color={color} type="dot" onClick={() => setColor(color)} />
                ))}
              </div>
              <div className="contents">
                <BeSwitch name="switch10" color={colored} checked={checked.switch10} onChange={handleChange} />
                <BeSwitch name="switch11" color={colored} inside checked={checked.switch11} onChange={handleChange} />
                <BeSwitch name="switch12" color={colored} type="button" checked={checked.switch12} onChange={handleChange}></BeSwitch>
                <BeSwitch name="switch13" color={colored} type="button" onText="A" offText="B" checked={checked.switch13} onChange={handleChange}></BeSwitch>
              </div>
              <CodeBlock code={codes.colors} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}