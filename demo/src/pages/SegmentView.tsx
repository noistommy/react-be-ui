import { BeTag, BeSegment } from '../../../dist/be-ui.es'
import CodeBlock from '../component/CodeBlock'

import * as codes from '../codes/segment'

const lorem_text = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit tempora illo consequatur praesentium, voluptas ullam necessitatibus maxime alias eligendi in, vitae reiciendis illum. Fugit vero fugiat qui exercitationem dicta doloremque?'

export default function SegmentView () {
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
                <div className="be-segment">
                  <div className="contents">{lorem_text}</div>
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
                <BeSegment>{lorem_text}</BeSegment>
              </div>
              <CodeBlock code={codes.base_component} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
      </div>
      <div className="variants">
        <h1 className="title">Variants</h1>
        <section>
          <h4>Surface</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeSegment surf>{lorem_text}{lorem_text}</BeSegment>
              </div>
              <CodeBlock code={codes.surface} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Border</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeSegment border>{lorem_text + lorem_text}</BeSegment>
              </div>
              <CodeBlock code={codes.border} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Title</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeSegment border>
                  <div className="title">Title</div>
                  {lorem_text + lorem_text}
                </BeSegment>
              </div>
              <CodeBlock code={codes.title} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Attached</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeSegment attached border> 
                  <BeSegment.Header>Header</BeSegment.Header>
                  <BeSegment.Contents>{lorem_text}</BeSegment.Contents>
                  <BeSegment.Footer>Footer</BeSegment.Footer>
                </BeSegment>
              </div>
              <CodeBlock code={codes.attached} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Float</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeSegment float>{lorem_text}{lorem_text}</BeSegment>
              </div>
              <CodeBlock code={codes.float} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Align</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <h5>Align Left</h5>
                <BeSegment border>{lorem_text}</BeSegment>
                <h5>Align Center</h5>
                <BeSegment align="center" border>{lorem_text}</BeSegment>
                <h5>Align Right</h5>
                <BeSegment align="right" border>{lorem_text}</BeSegment>
              </div>
              <CodeBlock code={codes.align} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Round</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <h5>round: s</h5>
                <BeSegment round="s" border>{lorem_text}</BeSegment>
                <h5>round: m</h5>
                <BeSegment round="m" border>{lorem_text}</BeSegment>
                <h5>round: l</h5>
                <BeSegment round="l" border>{lorem_text}</BeSegment>
                <h5>round: xl</h5>
                <BeSegment round="xl" border>{lorem_text}</BeSegment>
              </div>
              <CodeBlock code={codes.round} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Segments</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <div className="be-segments border round-l">
                  <BeSegment border>{lorem_text}</BeSegment>
                  <BeSegment border>{lorem_text}</BeSegment>
                  <BeSegment border>{lorem_text}</BeSegment>
                </div>
              </div>
              <CodeBlock code={codes.segment_group} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}