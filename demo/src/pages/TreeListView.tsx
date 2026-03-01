import { BeTag, BeTree } from '../../../dist/be-ui.es'
import CodeBlock from '../component/CodeBlock'

import * as codes from '../codes/tree-list'

import {treeList, fileList} from '../contents/data'


export default function ExanpleView () {
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
                <BeTree treeList={treeList} useMark></BeTree>
              </div>
              <CodeBlock code={codes.base_component} language="html"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Data Set</h4>
          <div className="desc"></div>
          <CodeBlock code={codes.dataSet} language="javascript" useToggle={false}></CodeBlock>
        </section>
      </div>
      <div className="variants">
        <section>
          <h4>useMark</h4>
          <div className="desc">
            <BeTag color="deepblue">Component</BeTag>
          </div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <h5>mark 사용</h5>
                <BeTree treeList={treeList} useMark></BeTree>
                <h5>mark 사용 안함</h5>
                <BeTree treeList={treeList}></BeTree>
              </div>
              <CodeBlock code={codes.use_mark} language="html"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Files</h4>
          <div className="desc">
            <BeTag color="deepblue">Component</BeTag>
          </div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeTree treeList={fileList} files></BeTree>
              </div>
              <CodeBlock code={codes.files} language="html"></CodeBlock>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}