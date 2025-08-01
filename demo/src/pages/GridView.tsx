import { BeTag, BeGrid, Column, Rows } from '../../../dist/be-ui.es'
import CodeBlock from '../component/CodeBlock'

import * as codes from '../codes/grid'


export default function GridView () {
  return (
    <div id="GridView" className="page-wrapper be container">
      <div className="base">
        <section>
          <div className="desc">
            <BeTag color="lightblue">HTML</BeTag>
          </div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents block">
                <div className="be-grid">
                  {Array.from({length: 12}).map(col => (
                    <div key={col} className="column"></div>
                  ))}
                </div>
                <div className="be-grid justify-center">
                  <div className="rows">
                    <div className="column span-3"></div>
                    <div className="column span-3"></div>
                    <div className="column span-3"></div>
                  </div>
                  <div className="rows">
                    <div className="column span-2"></div>
                    <div className="column span-2"></div>
                    <div className="column span-2"></div>
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
              <div className="contents block">
                <BeGrid>
                  {Array.from({length: 12}).map(col => (
                    <Column key={col}></Column>
                  ))}
                  <Rows>
                    {Array.from({length: 6}).map(col => (
                      <Column key={col}></Column>
                    ))}
                  </Rows>
                </BeGrid>
              </div>
              <CodeBlock code={codes.base_component} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
      </div>
      <div className="variants">
        <h1 className="title">Variants</h1>
        <section>
          <h4>Divide</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents block">
                <BeGrid divide={2}>{Array.from({length: 2}).map(col => (<Column key={col}></Column>))}</BeGrid>
                <BeGrid divide={4}>{Array.from({length: 4}).map(col => (<Column key={col}></Column>))}</BeGrid>
                <BeGrid divide={8}>{Array.from({length: 8}).map(col => (<Column key={col}></Column>))}</BeGrid>
                <BeGrid divide={10}>{Array.from({length: 10}).map(col => (<Column key={col}></Column>))}</BeGrid>
              </div>
              <CodeBlock code={codes.divide} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Widths</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents block">
                <BeGrid>{[2, 6, 4].map(col => (<Column span={col}></Column>))}</BeGrid>
                <BeGrid >{[4, 4, 4].map(col => (<Column span={col}></Column>))}</BeGrid>
                <BeGrid >{[2, 7, 3].map(col => (<Column span={col}></Column>))}</BeGrid>
              </div>
              <CodeBlock code={codes.widths} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Nested</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents block">
                <BeGrid>
                  <Column span={3}></Column>
                  <Column span={8}>
                    <BeGrid>
                      <Column span={4}></Column>
                      <Column span={4}></Column>
                      <Column span={4}></Column>
                    </BeGrid>
                  </Column>
                  <Column span={1}></Column>
                </BeGrid>
              </div>
              <CodeBlock code={codes.nested} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Offset</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents block">
                <BeGrid>
                  <Column span={3} offset={3}></Column>
                  <Column span={3} offset={3}></Column>
                </BeGrid>
                <BeGrid>
                  <Column span={7} offset={3}></Column>
                  <Column span={2}></Column>
                </BeGrid>
              </div>
              <CodeBlock code={codes.offset} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>AutoFit (Left/ Right Side)</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents block">
                <BeGrid leftSide>
                  <Column></Column>
                  <Column span={3}></Column>
                </BeGrid>
                <BeGrid rightSide>
                  <Column span={3}></Column>
                  <Column></Column>
                </BeGrid>
              </div>
              <CodeBlock code={codes.autofit} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Align</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents block">
              <BeGrid justify="left">{[2, 2, 2, 2].map(col => (<Column span={col}></Column>))}</BeGrid>
              <BeGrid justify="center">{[2, 2, 2, 2].map(col => (<Column span={col}></Column>))}</BeGrid>
              <BeGrid justify="right">{[2, 2, 2, 2].map(col => (<Column span={col}></Column>))}</BeGrid>
              <BeGrid justify="between">{[2, 2, 2, 2].map(col => (<Column span={col}></Column>))}</BeGrid>
              <BeGrid justify="around">{[2, 2, 2, 2].map(col => (<Column span={col}></Column>))}</BeGrid>
              </div>
              <CodeBlock code={codes.align} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Responsive</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents block">
              <h6>Divide Responsive</h6>
              <BeGrid divide={12} md={6} sm={4} xs={2}>{Array.from({length: 12}).map(col => (<Column key={col}></Column>))}</BeGrid>
              <h6>Widths Responsive</h6>
              <BeGrid>{[2, 2, 2, 2].map(col => (<Column span={col} md={2} sm={3} xs={6}></Column>))}</BeGrid>
              </div>
              <CodeBlock code={codes.reponsive} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
      </div>
      <style jsx="true">
        {`
          #GridView .contents.block {
            display: block;
          }
          #GridView .be-grid .columne {
            background-color:
          }
          #GridView .be-grid .column::before {
            content: '';
            width: 100%;
            height: 100%;
            text-align: center;
            background-color: rgba(0, 0, 0, 0.08);
            box-shadow: inset 0 0 0 1px #efefef;
            min-height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          #GridView .column .be-grid {
            background-color: rgba(0, 0, 0, 0.08);
          }
          #GridView .be-grid .column.span-8::before {
            content: '';
            display: none;
          }
        `}
      </style>
    </div>
  )
}