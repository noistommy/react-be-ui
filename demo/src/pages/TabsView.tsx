import { BeTag, BeTabs, Slot } from '../../../dist/be-ui.es'
import CodeBlock from '../component/CodeBlock'

import * as codes from '../codes/tabs'

import {optionList} from '../contents/data'
import {useState} from 'react'
export default function TabsView () {
  const [selectTab, setSelectTab] = useState('run')
  const handleSelect = (tab) => {
    setSelectTab(tab)
  }
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
                <div className="be-tabs">
                  <div className="tab-menu">
                    {optionList.map(tab => (
                      <div key={tab.id} className={`tab-item tab ${tab.option === selectTab ? 'active' : ''}`} 
                        onClick={() => setSelectTab(tab.option)}
                      >{tab.option}</div>
                    ))}
                  </div>
                  <div className="tab-contents">
                    {selectTab}
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
                <BeTabs tabList={optionList} selected={selectTab} onSelectTab={handleSelect}>
                  <Slot name="contents">
                    {selectTab}
                  </Slot>
                </BeTabs>
              </div>
              <CodeBlock code={codes.base_component} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
      </div>
      <div className="variants">
        <h1 className="title">Variants</h1>
        <section>
          <h4>Vertical</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeTabs tabList={optionList} directType="vertical" selected={selectTab} onSelectTab={handleSelect}>
                  <Slot name="contents">
                    {selectTab}
                  </Slot>
                </BeTabs>
              </div>
              <CodeBlock code={codes.vertical} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Type - Line</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeTabs tabList={optionList} tabType="line" selected={selectTab} onSelectTab={handleSelect}>
                  <Slot name="contents">
                    {selectTab}
                  </Slot>
                </BeTabs>
              </div>
              <CodeBlock code={codes.tab_type_line} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Type - Button</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeTabs tabList={optionList} tabType="button" selected={selectTab} onSelectTab={handleSelect}>
                  <Slot name="contents">
                    {selectTab}
                  </Slot>
                </BeTabs>
              </div>
              <CodeBlock code={codes.tab_type_button} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}