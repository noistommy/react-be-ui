import { BeTag, BeButton } from '../../../dist/be-ui.es'
import CodeBlock from '../component/CodeBlock'

import * as codes from '../codes/button'
import {sizes, status, colors} from '../contents'

const handleClick = () => {
  console.log('click')
}

export default function ButtonView () {
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
                <div className="be-button">Button(div)</div>
                <button className="be-button">Button(button)</button>
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
                <BeButton contentText="Component" />
                <BeButton brand="primary" contentText="Comp(brand)" />
                <BeButton state="error" contentText="Comp(status)" />
                <BeButton icon="xi-user" />
              </div>
              <CodeBlock code={codes.base_component} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
      </div>
      <div className="infomation"></div>
      <div className="variants">
        <h1 className="title">Variants</h1>
        <section>
          <h4>Brand</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeButton brand="primary" contentText="Primary" />
                <BeButton brand="secondary" contentText="Secondary" />
              </div>
              <CodeBlock code={codes.brand} language="tsx"></CodeBlock>
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
                  <BeButton key={state} state={state} contentText={state} />
                ))}
              </div>
              <CodeBlock code={codes.status} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Colors</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                {colors.map(color => (
                  <BeButton key={color} color={color} contentText={color} />
                ))}
              </div>
              <CodeBlock code={codes.colors} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Colors light</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                {colors.map(color => (
                  <BeButton key={`${color}-light`} color={color} light contentText={color} />
                ))}
              </div>
              <CodeBlock code={codes.colors_light} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Disabled</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeButton disabled contentText="Disabled" />
              </div>
              <CodeBlock code={codes.disabled} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Text</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeButton text contentText="Text" />
                <BeButton text brand="primary" contentText="Text" />
                <BeButton text withIcon="xi-pen" iconPos="left" contentText="Text" />
              </div>
              <CodeBlock code={codes.text} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Border</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeButton border contentText="border" />
                <BeButton border brand="primary" contentText="border" />
                <BeButton border brand="secondary" contentText="border" />
                <BeButton border round contentText="border" />
                <BeButton border outline contentText="border" />
                <BeButton border withIcon="xi-flight-on" iconPos="left" contentText="border" />
              </div>
              <CodeBlock code={codes.border} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Fluid</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeButton fluid contentText="fluid" />
                <BeButton fluid brand="primary" contentText="fluid" />
                <BeButton fluid brand="secondary" contentText="fluid" />
                <BeButton fluid round contentText="fluid" />
                <BeButton fluid outline contentText="fluid" />
                <BeButton fluid withIcon="xi-flight-on" iconPos="left" contentText="fluid" />
              </div>
              <CodeBlock code={codes.fluid} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Compact</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeButton compact contentText="compact" />
                <BeButton compact brand="primary" contentText="compact" />
                <BeButton compact brand="secondary" contentText="compact" />
                <BeButton compact round contentText="compact" />
                <BeButton compact outline contentText="compact" />
                <BeButton compact withIcon="xi-flight-on" iconPos="left" contentText="compact" />
              </div>
              <CodeBlock code={codes.compact} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Outline</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeButton outline contentText="outline" />
                <BeButton outline brand="primary" contentText="outline" />
                <BeButton outline brand="secondary" contentText="outline" />
                <BeButton outline round contentText="outline" />
                <BeButton outline contentText="outline" />
                <BeButton outline withIcon="xi-flight-on" iconPos="left" contentText="outline" />
              </div>
              <CodeBlock code={codes.outline} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Round</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeButton round contentText="round" />
                <BeButton round brand="primary" contentText="round" />
                <BeButton round brand="secondary" contentText="round" />
                <BeButton round contentText="round" />
                <BeButton round outline contentText="round" />
                <BeButton round withIcon="xi-flight-on" iconPos="left" contentText="round" />
              </div>
              <CodeBlock code={codes.round} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Icons(xeicon 2.3.3)</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeButton icon="xi-flight-on" />
                <BeButton icon="xi-home" brand="primary" />
                <BeButton icon="xi-user" brand="secondary" />
                <BeButton icon="xi-arrow-left" round />
                <BeButton icon="xi-arrow-right" outline />
                <BeButton icon="xi-accessibility" />
                <BeButton icon>
                  <i className="xi-accessibility"></i>
                </BeButton>
              </div>
              <CodeBlock code={codes.icon} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Size</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                {sizes.map(size => (
                  <BeButton key={size} size={size} light contentText={size} />
                ))}
              </div>
              <CodeBlock code={codes.size} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Icon with text</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeButton withIcon="xi-angle-left" iconPos="left" contentText="icon left" />
                <BeButton withIcon="xi-angle-right" iconPos="right" contentText="icon right" />
                <BeButton>
                  <i className="icon left xi-angle-left"></i>
                  Icon both
                  <i className="icon right xi-angle-right"></i>
                </BeButton>
              </div>
              <CodeBlock code={codes.withIcon} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Badge with text</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeButton badge="Best" badgeOption="be-deepblue" contentText="Bedge Best" />
                <BeButton badge="New" badgeOption="be-red" contentText="Bedge New" />
                <BeButton badge="11" badgeOption="secondary" contentText="Bedge" />
                
              </div>
              <CodeBlock code={codes.badge} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Event: click</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeButton onClick={handleClick} contentText="Click it" />
              </div>
              <CodeBlock code={codes.eventClick} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
      </div>
      <style jsx="true">
        {`
          h1.title {
            margin: 72px 0 20px 0;
          }
          section {
            margin-bottom: 2rem;
          }
          section .desc {
            opacity: 1;
            padding: 5px 5px 10px;
          }
          .be-segment .contents {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 5px;
          }
        `}
      </style>
    </div>
  )
}