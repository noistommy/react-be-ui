import {useState} from 'react'
import { BeTag, BeList } from '../../../dist/be-ui.es'
import CodeBlock from '../component/CodeBlock'

import * as codes from '../codes/list'
import {activeType} from '../contents'
import {optionList, optionSubList} from '../contents/data'

export default function ListView () {
  const [actived, setActived] = useState('bg')

  const handleClick = (act) => {
    setActived(act)
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
                <div className="list-container">
                  <BeList options={optionList} selection></BeList>
                </div>
              </div>
              <CodeBlock code={codes.base_component} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Data Set</h4>
          <div className="desc"></div>
          <CodeBlock code={codes.dataSet} language="tsx" useToggle={false}></CodeBlock>
        </section>
      </div>
      <div className="variants">
        <h1 className="title">Variants</h1>
        <section>
          <h4>Selection</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <div className="list-btns be-segment" style={{width: '100%'}}>
                  {activeType.map(active => (
                    <BeTag key={active} color={active === actived ? 'deepblue' : ''} onClick={() => handleClick(active)}>{active}</BeTag>
                  ))}
                </div>
                <div className="list-container">
                  <BeList options={optionList} selection selectedType={actived}></BeList>
                </div>
              </div>
              <CodeBlock code={codes.selection} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Sub Title</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <div className="list-container">
                  <BeList options={optionSubList}></BeList>
                </div>
              </div>
              <CodeBlock code={codes.sub_title} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>With Icon</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <div className="list-container">
                  <BeList options={optionList} icon></BeList>
                </div>
              </div>
              <CodeBlock code={codes.icon} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Border</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <div className="list-container">
                  <BeList options={optionList} border></BeList>
                </div>
              </div>
              <CodeBlock code={codes.border} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>With Image</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <div className="list-container">
                  <BeList options={optionList} image></BeList>
                </div>
              </div>
              <CodeBlock code={codes.image} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
      </div>
      <style jsx="true">
        {`  
          .list-container {
            width: 250px;
            border: 1px solid #ebebeb;
          }
          .list-container .item {
            padding: 10px;
          }
        `}
      </style>
    </div>
  )
}