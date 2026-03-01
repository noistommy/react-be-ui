import { BeTag, BeInput, BeButton } from '../../../dist/be-ui.es'
import CodeBlock from '../component/CodeBlock'

import * as codes from '../codes/input'

import {status} from '../contents'

import { useRef, useEffect, useState } from 'react'

export default function InputView () {
  const inputRef = useRef()
  const [value, setValue] = useState({
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    input5: '',
    input6: '',
    input7: '',
    input8: '',
    input9: '',
    input10: '',
    input11: '',
    input12: '',
    input13: '',
    input14: '',
    input15: '',
    input16: '',
    input17: '',
    input18: '',
    input19: '',
    input20: '',
  })
  const handleChange = (e) => {
    const {name, value} = e.target;
    setValue((prevData) => ({...prevData, [name]: value}))
  }
  useEffect(() => {
    inputRef.current?.focus()
  }, [inputRef])
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
                <div className="be-input">
                  <input type="text" placeholder="입력하세요." />
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
                <BeInput ref={inputRef} name="input1" value={value.input1} onChange={handleChange}></BeInput>
              </div>
              <CodeBlock code={codes.base_component} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
      </div>
      <div className="variants">
        <h1 className="title">Variants</h1>
        <section>
          <h4>Use Label</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeInput label="Use Label" name="input2" value={value.input2} onChange={handleChange}></BeInput>
                <BeInput label="Use Label" name="input3" value={value.input3} onChange={handleChange}></BeInput>
              </div>
              <CodeBlock code={codes.disabled} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Disabled</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeInput disabled></BeInput>
              </div>
              <CodeBlock code={codes.disabled} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Readonly</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeInput readonly name="input4" value={value.input4} onChange={handleChange}></BeInput>
              </div>
              <CodeBlock code={codes.readonly} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Underline</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeInput underline></BeInput>
              </div>
              <CodeBlock code={codes.underline} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Round</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeInput round name="input5" value={value.input5} onChange={handleChange}></BeInput>
              </div>
              <CodeBlock code={codes.underline} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Transparent</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeInput transparent name="input6" value={value.input6} onChange={handleChange}></BeInput>
              </div>
              <CodeBlock code={codes.transparent} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Compact</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeInput compact></BeInput>
              </div>
              <CodeBlock code={codes.compact} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Status</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                {status.map(state => (
                  <BeInput key={state} status={state} placeholder={state} name="input7" value={value.input7} onChange={handleChange}></BeInput>
                ))}
              </div>
              <CodeBlock code={codes.status} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Fluid</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeInput fluid name="input8" value={value.input8} onChange={handleChange}></BeInput>
              </div>
              <CodeBlock code={codes.fluid} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Unit</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeInput unit={'대'} align="right" name="input9" value={value.input9} onChange={handleChange}></BeInput>
                <BeInput unit={'개'} align="right" name="input10" value={value.input10} onChange={handleChange}></BeInput>
              </div>
              <CodeBlock code={codes.fluid} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Icon</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeInput iconLeft="xi-search" name="input11" value={value.input11} onChange={handleChange}></BeInput>
                <BeInput iconRight="xi-lock" name="input12" value={value.input12} onChange={handleChange}></BeInput>
              </div>
              <CodeBlock code={codes.icon} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Clear</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeInput clear placeholder="Focus on!!"></BeInput>
                <BeInput placeholder="Focus on!!" clear iconRight="xi-lock"></BeInput>
              </div>
              <CodeBlock code={codes.icon} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Badge</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeInput badge="New" badgeOption="red" name="input13" value={value.input13} onChange={handleChange}></BeInput>
                <BeInput badge={<i className="xi-arrow-down"></i>} badgeOption="primary" name="input14" value={value.input14} onChange={handleChange}></BeInput>
              </div>
              <CodeBlock code={codes.icon} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Labeled</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeInput labeled={{
                  pos: 'left',
                  contents: 'label'
                }} name="input15" value={value.input15} onChange={handleChange}></BeInput>
                <BeInput labeled name="input16" value={value.input16} onChange={handleChange} >
                  <span className="label"><i className="icon xi-won"></i></span>
                </BeInput>
              </div>
              <CodeBlock code={codes.label} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Button</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeInput withButton={{
                  pos: 'left',
                  option: 'primary',
                  contents: 'save'
                }} name="input17" value={value.input17} onChange={handleChange}></BeInput>
                <BeInput withButton name="input18" value={value.input18} onChange={handleChange}>
                  <BeButton brand="secondary" icon="xi-upload" />
                </BeInput>
              </div>
              <CodeBlock code={codes.button} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Textarea</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeInput type="textarea" fluid label="Textarea" name="input19" value={value.input19} onChange={handleChange}></BeInput>
                <BeInput type="textarea" short fluid name="input20" value={value.input20} onChange={handleChange}></BeInput>
              </div>
              <CodeBlock code={codes.textarea} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}