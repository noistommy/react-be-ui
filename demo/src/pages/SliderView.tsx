import { BeTag, BeSlider } from '../../../dist/be-ui.es'
import CodeBlock from '../component/CodeBlock'

import * as codes from '../codes/slider'

import {colors} from '../contents'
import {useState} from 'react'

export default function SliderView () {
  const [color, setColor] = useState('red')
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
                <BeSlider resultValue={50}></BeSlider>
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
                <BeSlider resultValue={50} disabled></BeSlider>
              </div>
              <CodeBlock code={codes.disabled} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Show Label</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeSlider resultValue={50} showLabel></BeSlider>
              </div>
              <CodeBlock code={codes.showLabel} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>User Custom Label</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeSlider resultValue={6} showLabel min={0} max={12}></BeSlider>
              </div>
              <CodeBlock code={codes.userLabel} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Show Tooltip</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeSlider resultValue={50} showTooltip></BeSlider>
              </div>
              <CodeBlock code={codes.tooltip} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Show Current Value</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeSlider resultValue={50} showValue></BeSlider>
              </div>
              <CodeBlock code={codes.current} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>User Custom Unit Text</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeSlider resultValue={50} unitText="%" showLabel showTooltip></BeSlider>
                <BeSlider resultValue={6} unitText="시" min={0} max={12} showLabel showTooltip></BeSlider>
              </div>
              <CodeBlock code={codes.unit} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Track Thin Type</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <h5>Thin</h5>
                <BeSlider resultValue={50} trackType="thin" ></BeSlider>
                <h5>Normal(default)</h5>
                <BeSlider resultValue={50} ></BeSlider>
                <h5>Fat</h5>
                <BeSlider resultValue={50} trackType="fat"  ></BeSlider>
              </div>
              <CodeBlock code={codes.trackType} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Step</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeSlider resultValue={50} showStep stepSize={10} ></BeSlider>
              </div>
              <CodeBlock code={codes.step} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Color</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="header">
                {colors.map(color => (
                  <BeTag key={color} color={color} type="dot" onClick={() => setColor(color)} />
                ))}
              </div>
              <div className="contents">
                <BeSlider resultValue={50} color={color} ></BeSlider>
              </div>
              <CodeBlock code={codes.color} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}