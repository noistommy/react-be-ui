import { BeTag, BeCard, Slot, BeCard2 } from '../../../dist/be-ui.es'
import CodeBlock from '../component/CodeBlock'

import * as codes from '../codes/card'
import profileImg from '../assets/img/profile_img.png';
// import {status} from '../contents'
const lorem_text =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium error quia quod magni.Repellendus numquam labore, aliquid voluptates dicta dignissimos beatae quidem repellat amet, vel fuga totam dolorum necessitatibus recusandae!'

export default function CardView () {
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
                <div className="be-card">
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
                <BeCard>
                  <Slot name="contents">
                    {lorem_text}
                  </Slot>
                </BeCard>
              </div>
              <CodeBlock code={codes.base_component} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
      </div>
      <div className="variants">
        <h1 className="title">Variants</h1>
        <section>
          <h4>Title</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeCard title="Title">
                  <Slot name="contents">
                   {lorem_text}
                  </Slot>
                </BeCard>
              </div>
              <CodeBlock code={codes.title} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Image</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeCard title="Title">
                  <Slot name="image">
                    <img src={profileImg} alt="profile image" />
                  </Slot>
                  <Slot name="contents">
                   Image Card
                  </Slot>
                </BeCard>
              </div>
              <CodeBlock code={codes.image} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Extra</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeCard title="Title">
                  <Slot name="contents">
                   {lorem_text}
                  </Slot>
                  <Slot name="extra">
                    Extra
                  </Slot>
                </BeCard>
              </div>
              <CodeBlock code={codes.extra} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Attached( Header, Footer )</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeCard title="Title">
                  <Slot name="header">
                    header
                  </Slot>
                  <Slot name="contents">
                   {lorem_text}
                  </Slot>
                  <Slot name="footer">
                    Footer
                  </Slot>
                </BeCard>
              </div>
              <CodeBlock code={codes.attached} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Border: False</h4>
          <div className="desc"> default : true</div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeCard title="Title" border={false}>
                  <Slot name="contents">
                   {lorem_text}
                  </Slot>
                </BeCard>
              </div>
              <CodeBlock code={codes.border} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Float</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <BeCard title="Title" float>
                  <Slot name="contents">
                   {lorem_text}
                  </Slot>
                </BeCard>
              </div>
              <CodeBlock code={codes.float} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
        <section>
          <h4>Cards</h4>
          <div className="desc"></div>
          <div className="contents">
            <div className="be-segment border">
              <div className="contents">
                <div className="be-cards">
                  <BeCard title="Card1" >
                    <Slot name="contents">
                    {lorem_text}
                    </Slot>
                  </BeCard>
                  <BeCard title="Card2" >
                    <Slot name="contents">
                    {lorem_text}
                    </Slot>
                  </BeCard>
                  <BeCard2 >
                    <BeCard2.Header>
                      <h5>Only Contents</h5>
                    </BeCard2.Header>
                    <div className="contents">
                      {lorem_text}
                    </div>
                  </BeCard2>
                  <BeCard2 >
                    <BeCard2.Header>Header</BeCard2.Header>
                    <BeCard2.Contents title="Contents">
                      {lorem_text}
                    </BeCard2.Contents>
                    <BeCard2.Footer>Footer</BeCard2.Footer>
                  </BeCard2>
                  <BeCard2>
                    <BeCard2.Image src={profileImg} alt="profile image"></BeCard2.Image>
                    <BeCard2.Contents title="Contents">
                    </BeCard2.Contents>
                  </BeCard2>
                  <BeCard2>
                    <BeCard2.Image src={profileImg} alt="profile image"></BeCard2.Image>
                    <BeCard2.Contents title="Contents">Image Card</BeCard2.Contents>
                    <BeCard2.Extra>
                      Extra
                    </BeCard2.Extra>
                  </BeCard2>

                </div>
              </div>
              <CodeBlock code={codes.cards} language="tsx"></CodeBlock>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}