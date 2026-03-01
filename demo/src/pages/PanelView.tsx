import { BeTag, BePanel } from '../../../dist/be-ui.es'
import CodeBlock from '../component/CodeBlock'
import { FaAngleDown, FaCaretDown } from "react-icons/fa6";

import * as codes from '../codes/panel'

// import {status} from '../contents'
const lorem_text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non aliquam iste, odio tempore sed maiores illum impedit voluptas, nemo incidunt harum, molestiae enim? Expedita cumque nihil error sit atque. Voluptas.'
export default function PanelView () {
  return (
    <div id="Panel" className="page-wrapper be container">
      <div className="base">
        <section>
          <div className="desc">
            <BeTag color="lightblue">HTML</BeTag>
          </div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <div className="be-panel border">
                  <div className="panel-header">
                    <div className="title">Title</div>
                  </div>
                  <div className="panel-content">
                    <div className="content-wrapper">
                      {lorem_text}
                    </div>
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
                <BePanel title="Title" contents={lorem_text} border></BePanel>
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
                <BePanel title="Title" contents={lorem_text} border></BePanel>
              </div>
              <CodeBlock code={codes.border} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Content</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BePanel title="Title" border>
                  <div className="header">Header</div>
                  <div className="body">{lorem_text}</div>
                  <div className="footer">Footer</div>
                </BePanel>
              </div>
              <CodeBlock code={codes.contents} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Collapse</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BePanel title="Title" border collapse  maxLine={3} toggleIcon="xi-caret-down" iconPos="right">{lorem_text}{lorem_text}</BePanel>
              </div>
              <CodeBlock code={codes.collapse} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Collapse - Toggle Icon</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <h5>xi-icon</h5>
                <BePanel title="Toggle icon on left" border collapse  maxLine={3} toggleIcon="xi-caret-down" iconPos="left">{lorem_text}{lorem_text}</BePanel>
                <BePanel title="Toggle icon on right" border collapse  maxLine={3} toggleIcon="xi-caret-down" iconPos="right">{lorem_text}{lorem_text}</BePanel>
                <h5>component icon(react-icon)</h5>
                <BePanel title="Toggle icon on left" border collapse  maxLine={3} toggleIcon={<FaAngleDown />} iconPos="left">{lorem_text}{lorem_text}</BePanel>
                <BePanel title="Toggle icon on right" border collapse  maxLine={3} toggleIcon={<FaCaretDown />}>{lorem_text}{lorem_text}</BePanel>
              </div>
              <CodeBlock code={codes.collapseToggle} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Detail-Summary</h4>
          <div className="desc">
            <BeTag color="lightblue">HTML</BeTag>
          </div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <details className="be-panel border">
                  <summary className="panel-header">
                    <div className="title">Summary</div>
                  </summary>
                  <div className="panel-content">
                    <div className="content-wrapper">Contents</div>
                  </div>
                </details>
              </div>
              <CodeBlock code={codes.special_html} language="html"></CodeBlock>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}