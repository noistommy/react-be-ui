import { BeTag, BeInput, BeButton } from '../../../dist/be-ui.es'

import CodeBlock from '../component/CodeBlock'

import * as codes from '../codes/input'

import {status} from '../contents'

import { useRef, useEffect, useState } from 'react'

export default function InputView () {
  const inputRef = useRef()
  const [value, setValue] = useState({
    input: '',
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
                <BeInput ref={inputRef} name="input" value={value.input} onChange={handleChange}></BeInput>
                <BeInput ref={inputRef} isControlled={false} clear></BeInput>
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
                <BeInput label="Use Label" isControlled={false}></BeInput>
                <BeInput label="Use Label" isControlled={false}></BeInput>
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
                <BeInput readonly></BeInput>
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
                <BeInput underline isControlled={false}></BeInput>
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
                <BeInput round isControlled={false}></BeInput>
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
                <BeInput transparent isControlled={false}></BeInput>
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
                <BeInput compact isControlled={false}></BeInput>
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
                  <BeInput key={state} status={state} placeholder={state}  isControlled={false}></BeInput>
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
                <BeInput fluid isControlled={false}></BeInput>
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
                <BeInput unit={'대'} align="right" isControlled={false}></BeInput>
                <BeInput unit={'개'} align="right" isControlled={false}></BeInput>
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
                <BeInput iconLeft="xi-search" isControlled={false}></BeInput>
                <BeInput iconRight="xi-lock" isControlled={false}></BeInput>
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
                <BeInput clear placeholder="Focus on!!" isControlled={false}></BeInput>
                <BeInput placeholder="Focus on!!" clear iconRight="xi-lock" isControlled={false}></BeInput>
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
                <BeInput badge="New" badgeOption="red" isControlled={false}></BeInput>
                <BeInput badge={<i className="xi-arrow-down"></i>} badgeOption="primary" isControlled={false}></BeInput>
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
                }}  isControlled={false}></BeInput>
                <BeInput labeled isControlled={false} >
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
                }} isControlled={false}></BeInput>
                <BeInput withButton isControlled={false}>
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
                <BeInput type="textarea" fluid label="Textarea" isControlled={false}></BeInput>
                <BeInput type="textarea" short fluid isControlled={false}></BeInput>
              </div>
              <CodeBlock code={codes.textarea} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}