import { BeTag, BeMessage } from '../../../dist/be-ui.es'
import CodeBlock from '../component/CodeBlock'

import * as codes from '../codes/message'

import {status} from '../contents'

export default function MessageView () {
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
                <div className="be-message">
                  <div className="contents">// CONTENTS //</div>
                </div>
                <div className="be-message">
                  <div className="title">Title</div>
                  <div className="contents">contents</div>
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
                <BeMessage title="title" contents="contents ..." icon="xi-info"></BeMessage>
              </div>
              <CodeBlock code={codes.base_component} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
      </div>
      <div className="veriants">
        <h1 className="title">Veriants</h1>
        <section>
          <h4>State Type</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                {status.map(state => (
                  <BeMessage key={state} title={state} contents="contents ..." state={state} icon></BeMessage>
                ))}
              </div>
              <CodeBlock code={codes.status} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Icon</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeMessage title="Use Icon" contents="contents ..." icon="xi-info"></BeMessage>
                <BeMessage title="No Icon" contents="contents ..." ></BeMessage>
              </div>
              <CodeBlock code={codes.icon} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Message Group</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <div className="be-messages">
                  <BeMessage title="Selected" contents="contents ..." selected></BeMessage>
                  <BeMessage title="Normal" contents="contents ..." ></BeMessage>
                  <BeMessage title="Disabled" contents="contents ..." disabled></BeMessage>
                </div>
              </div>
              <CodeBlock code={codes.msg_group} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Message List Group</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <div className="be-messages list">
                  <BeMessage title="Selected" contents="contents ..." selected></BeMessage>
                  <BeMessage title="Normal" contents="contents ..." ></BeMessage>
                  <BeMessage title="Disabled" contents="contents ..." disabled></BeMessage>
                </div>
              </div>
              <CodeBlock code={codes.msg_group_list} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}