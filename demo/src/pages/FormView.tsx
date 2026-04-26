import { BeTag, BeInput, BeForm, Fields, Field } from '../../../dist/be-ui.es'
import CodeBlock from '../component/CodeBlock'

import * as codes from '../codes/form'

// import {status} from '../contents'

export default function FormView () {
  return (
    <div id="FormView" className="page-wrapper be container">
      <div className="base">
        <section>
          <div className="desc">
            <BeTag color="lightblue">HTML</BeTag>
          </div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents block">
                <div className="be-form">
                  <div className="header">
                    <div className="title">Form Title</div>
                    <div className="desc">Form Discription</div>
                  </div>
                  <div className="fields">
                    <div className="field">
                      <label>Label 1</label>
                      <div className="be-input">
                        <input type="text" />
                      </div>
                    </div>
                    <div className="field">
                      <label>Label 2</label>
                      <div className="be-input">
                        <input type="text" />
                      </div>
                    </div>
                  </div>
                  <div className="divider"></div>
                  <div className="fields">
                    <div className="field inline">
                      <label>Label 1</label>
                      <div className="be-input">
                        <input type="text" />
                      </div>
                    </div>
                    <div className="field inline">
                      <label>Label 2</label>
                      <div className="be-input">
                        <input type="text" />
                      </div>
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
              <div className="contents block">
                <BeForm>
                  <Field fieldLabel="Label">
                    <BeInput />
                  </Field>
                </BeForm>
              </div>
              <CodeBlock code={codes.base_component} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
      </div>
      <div className="variants">
        <h1 className="title">Variants</h1>
        <section>
          <h4>Form Header</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents block">
                <BeForm title="Form Title">
                </BeForm>
              </div>
              <CodeBlock code={codes.title} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Inline</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents block">
                <BeForm>
                  <Field inline>
                    <label>Label</label>
                    <input type="text" />
                  </Field>
                </BeForm>
              </div>
              <CodeBlock code={codes.inline} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Use Label</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents block">
                <BeForm>
                  <Field fieldLabel="Label">
                    <input type="text" />
                  </Field>
                </BeForm>
              </div>
              <CodeBlock code={codes.use_label} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Disabled</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents block">
                <BeForm>
                  <Field fieldLabel="Label" disabled>
                    <input type="text" />
                  </Field>
                </BeForm>
              </div>
              <CodeBlock code={codes.disabled} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Field Group</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents block">
                <BeForm>
                  <Fields>
                    <Field fieldLabel="Label1">
                      <input type="text" />
                    </Field>
                    <Field fieldLabel="Label2">
                      <input type="text" />
                    </Field>
                    <Field fieldLabel="Label3">
                      <input type="text" />
                    </Field>
                  </Fields>
                </BeForm>
              </div>
              <CodeBlock code={codes.group} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Field Divide</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents block">
                <BeForm>
                  <Fields grid divide={3}>
                    <Field column>
                      <input type="text" placeholder="col 4" />
                    </Field>
                    <Field column>
                      <input type="text" placeholder="col 4" />
                    </Field>
                    <Field column>
                      <input type="text" placeholder="col 4" />
                    </Field>
                  </Fields>
                  <Fields grid divide={2}>
                    <Field column>
                        <input type="text"  placeholder="col 6" />
                    </Field>
                    <Field column>
                        <input type="text"  placeholder="col 6" />
                    </Field>
                  </Fields>
                </BeForm>
              </div>
              <CodeBlock code={codes.grid_divide} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Field Widths</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents block">
                <BeForm>
                  <Fields grid>
                    <Field column span={2}>
                        <input type="text" placeholder="col 2" />
                    </Field>
                    <Field column span={5}>
                        <input type="text" placeholder="col 5" />
                    </Field>
                    <Field column span={5}>
                        <input type="text" placeholder="col 5" />
                    </Field>
                  </Fields>
                  <Fields grid>
                    <Field column span={3}>
                        <input type="text" placeholder="col 3" />
                    </Field>
                    <Field column span={9}>
                        <input type="text" placeholder="col 9" />
                    </Field>
                  </Fields>
                </BeForm>
              </div>
              <CodeBlock code={codes.grid_widths} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Textarea</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents block">
                <BeForm>
                  <Fields>
                    <Field fieldLabel="Label Textarea">
                      <BeInput type="textarea" fluid />
                    </Field>
                    <Field fieldLabel="Label Textarea short" short>
                      <BeInput type="textarea" fluid />
                    </Field>
                  </Fields>
                </BeForm>
              </div>
              <CodeBlock code={codes.textarea} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
      </div>
      <style jsx="true">
        {`
          #FormView .contents .block {
            display: block;
          }
        `}
      </style>
    </div>
  )
}