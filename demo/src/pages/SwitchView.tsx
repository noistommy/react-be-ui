import { BeTag, BeSwitch } from '../../../dist/be-ui.es'
import CodeBlock from '../component/CodeBlock'

import * as codes from '../codes/switch'

import {colors} from '../contents'

import {useState} from 'react'

export default function ExanpleView () {
  const [colored, setColored]  = useState('red')
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
                <BeSwitch checked></BeSwitch>
                <BeSwitch inside checked></BeSwitch>
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
                <BeSwitch type="button" checked></BeSwitch>
                <BeSwitch type="button" round checked></BeSwitch>
                <BeSwitch type="button" onText="A" offText="B" checked></BeSwitch>
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
                <BeSwitch round checked />
                <BeSwitch round inside checked />
                <BeSwitch type="button" round checked></BeSwitch>
                <BeSwitch type="button" round onText="A" offText="B" checked></BeSwitch>
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
                <BeSwitch color={colored} checked />
                <BeSwitch color={colored} inside checked />
                <BeSwitch color={colored} type="button" checked></BeSwitch>
                <BeSwitch color={colored} type="button" onText="A" offText="B" checked></BeSwitch>
              </div>
              <CodeBlock code={codes.colors} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}