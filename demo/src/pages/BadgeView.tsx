import { BeTag, BeBadge } from '../../../dist/be-ui.es'
import CodeBlock from '../component/CodeBlock'

import * as codes from '../codes/badge'

import {colors} from '../contents'

export default function BadgeView () {
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
                <div className="be-button">
                  Badge(0)
                  <div className="be-badge">0</div>
                </div>
                <div className="be-button">
                  Badge(10)
                  <div className="be-badge primary">0</div>
                </div>
                <div className="be-button">
                  Badge(N)
                  <div className="be-badge red">N</div>
                </div>
                <div className="be-button">
                  Badge(Icon)
                  <div className="be-badge blue">
                    <i className="xi-upload"></i>
                  </div>
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
                <div className="be-button">
                  Badge(C)
                  <BeBadge color="red">C</BeBadge>
                </div>
              </div>
              <CodeBlock code={codes.base_component} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
      </div>
      <div className="variants">
        <h1 className="title">Variants</h1>
        <section>
          <h4>Mark</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <div className="be-button">
                  Float
                  <BeBadge brand="secondary">F</BeBadge>
                </div>
                <div className="be-button">
                  Mark
                  <BeBadge brand="secondary" mark></BeBadge>
                </div>
              </div>
              <CodeBlock code={codes.mark} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Shadow</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <div className="be-button">
                  Shadow On
                  <BeBadge brand="secondary">O</BeBadge>
                </div>
                <div className="be-button">
                  Shadow Off
                  <BeBadge brand="secondary" shadow={false}>X</BeBadge>
                </div>
              </div>
              <CodeBlock code={codes.shadow} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Align</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <div className="be-button">
                  Align Left
                  <BeBadge brand="primary" align="left">300O</BeBadge>
                </div>
                <div className="be-button">
                  Align Center
                  <BeBadge brand="primary">3000</BeBadge>
                </div>
                <div className="be-button">
                  Align Right
                  <BeBadge brand="primary" align="right">3000</BeBadge>
                </div>
              </div>
              <CodeBlock code={codes.align} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Color</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                {colors.map(color => (
                  <div key={color} className="be-button">
                    {color}
                    <BeBadge brand="primary" color={color}>
                      <i className="xi-tint"></i>
                    </BeBadge>
                  </div>
                ))}
              </div>
              <CodeBlock code={codes.color} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}