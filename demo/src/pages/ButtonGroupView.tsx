import { BeTag, BeButtons } from '../../../dist/be-ui.es'
import CodeBlock from '../component/CodeBlock'

import {useState} from 'react'

import * as codes from '../codes/button'

const propList = [
  {contentText: 'A Button'},
  {contentText: 'B Button'},
  {contentText: 'C Button'},
]
const propList2 = [
  {withIcon: 'xi-sun'},
  {withIcon: 'xi-moon' },
  {withIcon: 'xi-desktop'},
]

export default function ButtonGroupView () {
  const [selected, setSelected] = useState(0)
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
                <div className="be-buttons">
                  {["A", "B", "C"].map((c, i) => (
                    <button 
                      key={c} 
                      className={`be-button ${selected === i ? 'selected' : ''}`}
                      onClick={() => setSelected(i)}
                    >
                      {c} Button
                    </button>
                  ))}
                </div>
              </div>
              <CodeBlock code={codes.buttons_html} language="html"></CodeBlock>
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
                <BeButtons buttons={propList}></BeButtons>
                <BeButtons buttons={propList2}></BeButtons>
              </div>
              <CodeBlock code={codes.buttons_component} language="tsx"></CodeBlock>
            </div>
          </div>
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
                <BeButtons buttons={propList} border></BeButtons>
              </div>
              <CodeBlock code={codes.buttons_border} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Round</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeButtons buttons={propList} round></BeButtons>
              </div>
              <CodeBlock code={codes.buttons_border} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}