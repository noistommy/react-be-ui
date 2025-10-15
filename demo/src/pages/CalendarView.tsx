import { BeTag, BeCalendar } from '../../../dist/be-ui.es'
import CodeBlock from '../component/CodeBlock'

import * as codes from '../codes/calendar'

export default function CalendarView () {
  return (
    <div id="Calendar" className="page-wrapper be container">
      <div className="base">
        <section>
          <div className="desc">
            <BeTag color="deepblue">Component</BeTag>
          </div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeCalendar></BeCalendar>
              </div>
              <CodeBlock code={codes.base_component} language="tsx"></CodeBlock>
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
                <BeCalendar border></BeCalendar>
              </div>
              <CodeBlock code={codes.border} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Header Control Position</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeCalendar symmetry></BeCalendar>
              </div>
              <CodeBlock code={codes.symmetry} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Use Today</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeCalendar today></BeCalendar>
              </div>
              <CodeBlock code={codes.today} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}