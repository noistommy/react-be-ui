import { BeTag, BePagination } from '../../../dist/be-ui.es'
import CodeBlock from '../component/CodeBlock'

import * as codes from '../codes/pagination'

import {colors} from '../contents'
import {useState} from 'react'

export default function PaginationView () {
  const [selectNum, setSelectNum] = useState(1)
  const [color, setColor] = useState('red')
  const handleChange = (num) => {
    setSelectNum(num)
  }
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
                <BePagination pageLength={10} limits={false}></BePagination>
              </div>
              <CodeBlock code={codes.base_component} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
      </div>
      <div className="variants">
        <h1 className="title">Variants</h1>
        <section>
          <h4>Limits</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BePagination pageLength={10} limits={5}></BePagination>
              </div>
              <CodeBlock code={codes.limits} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Compact</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BePagination pageLength={10} compact></BePagination>
              </div>
              <CodeBlock code={codes.compact} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Round</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BePagination pageLength={10} round></BePagination>
              </div>
              <CodeBlock code={codes.round} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Align</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <h6>Left(default)</h6>
                <BePagination pageLength={10} align="left"></BePagination>
                <h6>Center</h6>
                <BePagination pageLength={10} align="center"></BePagination>
                <h6>Right</h6>
                <BePagination pageLength={10} align="right"></BePagination>
              </div>
              <CodeBlock code={codes.align} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Page Type</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <h6>number(default)</h6>
                <BePagination pageLength={10} ></BePagination>
                <h6>page</h6>
                <BePagination pageLength={10} type="page"></BePagination>
              </div>
              <CodeBlock code={codes.page_type} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Ellipsis Type</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BePagination pageLength={10} ellipsis></BePagination>
              </div>
              <CodeBlock code={codes.ellipsis} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Event</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BePagination pageLength={10} onChange={handleChange}></BePagination>
                Current Selected <BeTag>{selectNum}</BeTag>page
              </div>
              <CodeBlock code={codes.ellipsis} language="tsx"></CodeBlock>
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
                <BePagination pageLength={10} color={color}></BePagination>
              </div>
              <CodeBlock code={codes.color} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}