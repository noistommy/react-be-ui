import { BeTag, BeDatePicker } from '../../../dist/be-ui.es'
import CodeBlock from '../component/CodeBlock'

import * as codes from '../codes/calendar'

export default function DatePickerView () {
  return (
    <div id="DatePicker" className="page-wrapper be container">
      <div className="base">
        <section>
          <div className="desc">
            <BeTag color="deepblue">Component</BeTag>
          </div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeDatePicker selectedDate={new Date()}></BeDatePicker>
              </div>
              <CodeBlock code={codes.datePicker} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
      </div>
      <div className="variants">
        <h1 className="title">Variants</h1>
      </div>
    </div>
  )
}