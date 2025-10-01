import { BeTag } from '../../../dist/be-ui.es'
import CodeBlock from '../component/CodeBlock'

import * as codes from '../codes/tag'

import {colors} from '../contents'

export default function TagView () {
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
                <label className="be-tag label">Base</label>
                <span className="be-tag label">기본</span>
                <div className="be-tag label round">Round</div>
                <div className="be-tag label icon">
                  <i className="xi-tag" />
                </div>
                <div className="be-tag line" />
                <div className="be-tag line red" />
                <div className="be-tag dot" />
                <div className="be-tag dot purple" />
                <div className="be-tag dot orange" />
                <div className="be-tag kbd orange">o</div>
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
                <BeTag type="label">Component</BeTag>
                <BeTag type="label" round>Round</BeTag>
                <BeTag type="label" icon="xi-tag"></BeTag>
                <BeTag type="line"></BeTag>
                <BeTag type="line" color="blue"></BeTag>
                <BeTag type="dot" color="yellow"></BeTag>
                <BeTag type="dot" color="green"></BeTag>
              </div>
              <CodeBlock code={codes.base_component} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
      </div>
      <div className="variants">
        <h1 className="title">Variants</h1>
        <section>
          <h4>Type</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeTag type="label">Label</BeTag>
                <BeTag type="label">라벨 타입</BeTag>
                <BeTag type="line red"></BeTag>
                <BeTag type="line green"></BeTag>
                <BeTag type="dot blue"></BeTag>
                <BeTag type="dot yellow"></BeTag>
              </div>
              <CodeBlock code={codes.type} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Kbd</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeTag type="kbd" keyType="enter">enter</BeTag>
                <BeTag type="kbd" keyType="space">space</BeTag>
                <BeTag type="kbd">a</BeTag>
                <BeTag type="kbd">b</BeTag>
                <BeTag type="kbd">c</BeTag>
                <BeTag type="kbd" isMeta  keyType="shift">shift</BeTag>
                <BeTag type="kbd" isMeta keyType="ctrl">ctrl</BeTag>
                <BeTag type="kbd">z</BeTag>
              </div>
              <CodeBlock code={codes.kbd} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Icon</h4>
          <div className="desc">
            <BeTag>type: label 또는 pointing</BeTag> 일 경우 적용
          </div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeTag type="label" icon="xi-bell"></BeTag>
                <BeTag type="label" icon="xi-angle-left" iconPos="left">Left</BeTag>
                <BeTag type="label" icon="xi-angle-right" iconPos="right">Right</BeTag>
                <BeTag type="label" color="blue" icon="xi-user" iconPos="left">User</BeTag>
                <BeTag type="label" color="red" icon="xi-new" iconPos="left">New</BeTag>
                <BeTag type="label" color="deeppurple" icon="xi-close" iconPos="right">Tag</BeTag>
              </div>
              <CodeBlock code={codes.icon} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Round</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeTag type="label" round icon="xi-bell"></BeTag>
                <BeTag type="label" round icon="xi-angle-left" iconPos="left">Left</BeTag>
                <BeTag type="label" round icon="xi-angle-right" iconPos="right">Right</BeTag>
                <BeTag type="label" round color="blue" icon="xi-user" iconPos="left">User</BeTag>
                <BeTag type="label" round color="red" icon="xi-new" iconPos="left">New</BeTag>
                <BeTag type="label" round color="deeppurple" icon="xi-close" iconPos="right">Tag</BeTag>
              </div>
              <CodeBlock code={codes.icon} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Pointing</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeTag type="pointing" color="deepblue" pointDirect="up" icon="xi-arrow-up" iconPos="left">Point Up</BeTag>
                <BeTag type="pointing" color="deepblue" pointDirect="down" icon="xi-arrow-down" iconPos="left">Point Down</BeTag>
                <BeTag type="pointing" color="deepblue" pointDirect="left" icon="xi-arrow-left" iconPos="left">Point Left</BeTag>
                <BeTag type="pointing" color="deepblue" pointDirect="right" icon="xi-arrow-right" iconPos="right">Point Right</BeTag>
                
              </div>
              <CodeBlock code={codes.pointing} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Color</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                {colors.map(color => (
                  <BeTag key={color} type="label" color={color} >{color}</BeTag>
                ))}
              </div>
              <CodeBlock code={codes.color} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Color Light</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                {colors.map(color => (
                  <BeTag key={color} light type="label" color={color} >{color}</BeTag>
                ))}
              </div>
              <CodeBlock code={codes.color_light} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Tags</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <div className="be-tags">
                  <BeTag color="green">A Tag</BeTag>
                  <BeTag color="blue">B Tag</BeTag>
                  <BeTag color="yellow">C Tag</BeTag>
                </div>
              </div>
              <CodeBlock code={codes.tags} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Tags: Hover Effect</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <div className="be-tags one-of-a-kind">
                  <BeTag color="green">A Tag</BeTag>
                  <BeTag color="blue">B Tag</BeTag>
                  <BeTag color="yellow">C Tag</BeTag>
                </div>
              </div>
              <CodeBlock code={codes.effect} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}