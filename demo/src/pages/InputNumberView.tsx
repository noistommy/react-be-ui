import { BeTag, BeInputNumber } from '../../../dist/be-ui.es'
import CodeBlock from '../component/CodeBlock'

import * as codes from '../codes/input-number'


export default function InputNumberView () {
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
                <BeInputNumber></BeInputNumber>
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
                <BeInputNumber disabled></BeInputNumber>
              </div>
              <CodeBlock code={codes.disabled} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Controller Position</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeInputNumber controller="between"></BeInputNumber>
                <BeInputNumber controller="end"></BeInputNumber>
              </div>
              <CodeBlock code={codes.controller} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Min / Max</h4>
          <div className="desc">
              ex) min = 1 / max = 10
          </div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeInputNumber min={1} max={10}></BeInputNumber>
              </div>
              <CodeBlock code={codes.min_max} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Step</h4>
          <div className="desc">
              ex) step = 5
          </div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeInputNumber step={5}></BeInputNumber>
              </div>
              <CodeBlock code={codes.step} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>User Custom Icon</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeInputNumber decIcon="xi-angle-down" incIcon="xi-angle-up"></BeInputNumber>
              </div>
              <CodeBlock code={codes.userIcon} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Fluid</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeInputNumber fluid></BeInputNumber>
              </div>
              <CodeBlock code={codes.userIcon} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Round</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeInputNumber round></BeInputNumber>
              </div>
              <CodeBlock code={codes.userIcon} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}