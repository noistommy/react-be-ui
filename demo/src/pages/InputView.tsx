import { BeTag, BeInput, BeButton } from '../../../dist/be-ui.es'
import CodeBlock from '../component/CodeBlock'

import * as codes from '../codes/input'

import {status} from '../contents'

import { useRef, useEffect } from 'react'

export default function InputView () {
  const inputRef = useRef()
  
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
                <BeInput ref={inputRef}></BeInput>
              </div>
              <CodeBlock code={codes.base_component} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
      </div>
      <div className="variants">
        <h1 className="title">Variants</h1>
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
                <BeInput readonly value="Readonly"></BeInput>
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
                <BeInput round></BeInput>
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
                <BeInput transparent></BeInput>
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
                  <BeInput key={state} status={state} placeholder={state}></BeInput>
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
                <BeInput fluid></BeInput>
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
                <BeInput unit={'대'} align="right" value={10}></BeInput>
                <BeInput unit={'개'} align="right" value={1000}></BeInput>
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
                <BeInput iconLeft="xi-search"></BeInput>
                <BeInput iconRight="xi-lock"></BeInput>
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
                <BeInput badge="New" badgeOption="red"></BeInput>
                <BeInput badge={<i className="xi-arrow-down"></i>} badgeOption="primary"></BeInput>
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
                }}></BeInput>
                <BeInput labeled>
                  <label><i className="icon xi-won"></i></label>
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
                <BeInput button={{
                  pos: 'left',
                  option: 'primary',
                  contents: 'save'
                }}></BeInput>
                <BeInput labeled>
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
                <BeInput type="textarea" fluid></BeInput>
                <BeInput type="textarea" short fluid></BeInput>
              </div>
              <CodeBlock code={codes.textarea} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}