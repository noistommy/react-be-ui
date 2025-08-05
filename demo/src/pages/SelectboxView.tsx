import { BeTag, BeSelectbox } from '../../../dist/be-ui.es'
import CodeBlock from '../component/CodeBlock'

import * as codes from '../codes/selectbox'

import {menuList} from '../contents/data'

import {useState} from 'react'

export default function SelectboxView () {
  const [selected, setSelected] = useState(null)
  const [selectList, setSelectList] = useState(['run'])

  const handleSelect = (result) => {
    if (typeof result === 'string') {
      setSelected(result)
    } else {
      setSelectList(result)
    }
  }
  return (
    <div className="page-wrapper be container">
      <div className="base">
        <section>
          <h4>Single Select</h4>
          <div className="desc">
            <BeTag color="deepblue">Component</BeTag>
          </div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeSelectbox options={menuList} onSelect={handleSelect}></BeSelectbox>
              </div>
              <CodeBlock code={codes.base_component} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Multiple Select</h4>
          <div className="desc">
            <BeTag color="deepblue">Component</BeTag>
          </div>
          <div className="contents">
            <div className="be-segment border">
              <div className="header">
                {selectList?.map(sel => (
                  <BeTag key={sel}>{sel}</BeTag>
                ))}
              </div>
              <div className="contents">
                <BeSelectbox 
                  options={menuList} 
                  selectedValue={selectList}
                  multiple 
                  onSelect={handleSelect}
                ></BeSelectbox>
              </div>
              <CodeBlock code={codes.multiple} language="tsx"></CodeBlock>
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
          <h4>Use All</h4>
          <div className="desc">
            (only multiple)
          </div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeSelectbox 
                  options={menuList} 
                  multiple 
                  isAll
                ></BeSelectbox>
              </div>
              <CodeBlock code={codes.use_all} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Search & Filtering</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeSelectbox 
                fluid
                  options={menuList} 
                  isSearch
                ></BeSelectbox>
              </div>
              <CodeBlock code={codes.filtering} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Dropdown Type</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeSelectbox options={menuList} boxType="dropdown"></BeSelectbox>
              </div>
              <CodeBlock code={codes.dropdown_type} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Float Type</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeSelectbox options={menuList} boxType="float"></BeSelectbox>
              </div>
              <CodeBlock code={codes.float_type} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Selected Type</h4>
          <div className="desc">
            <a className="be-button text compact primary" href="/list" target="_blank">BeList Selection</a>
              참고 
          </div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeSelectbox options={menuList} selectedType="text bg mark"></BeSelectbox>
              </div>
              <CodeBlock code={codes.selected_type} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Use Icon</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeSelectbox options={menuList} useIcon></BeSelectbox>
              </div>
              <CodeBlock code={codes.use_icon} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Placeholder</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeSelectbox options={menuList} placeholder="아무거나 선택하세요"></BeSelectbox>
              </div>
              <CodeBlock code={codes.placeholder} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Compact</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeSelectbox options={menuList} compact></BeSelectbox>
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
                <BeSelectbox options={menuList} round></BeSelectbox>
              </div>
              <CodeBlock code={codes.round} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Fluid</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeSelectbox options={menuList} fluid></BeSelectbox>
              </div>
              <CodeBlock code={codes.fluid} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Disabled</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeSelectbox options={menuList} disabled></BeSelectbox>
              </div>
              <CodeBlock code={codes.disabled} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Option Limit Height</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeSelectbox options={menuList} maxOptHeight={160}></BeSelectbox>
              </div>
              <CodeBlock code={codes.customHeight} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>User Custom Option Key</h4>
          <div className="desc">
            메뉴 데이터 중 표시 되는 값의 key name (기본값: option)
          </div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeSelectbox options={menuList} optionKey="option"></BeSelectbox>
              </div>
              <CodeBlock code={codes.custom_option} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Result Key</h4>
          <div className="desc">
            메뉴 선택 시 결과로 사용 될 값의 ket name (기본값: val)
          </div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeSelectbox options={menuList} resultKey="val"></BeSelectbox>
                <BeSelectbox options={menuList} resultKey="option"></BeSelectbox>
              </div>
              <CodeBlock code={codes.custom_result} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Event: onSelect</h4>
          <div className="desc">
            결과값: <BeTag>{selected}</BeTag>
          </div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeSelectbox options={menuList} onSelect={handleSelect}></BeSelectbox>
              </div>
              <CodeBlock code={codes.event} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
      </div>
    </div>
  ) 
}