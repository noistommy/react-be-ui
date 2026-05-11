# React BEUI

### React Headless UI 컴포넌트 라이브러리

`react-be-ui`는 `React`용 Headless UI 컴포넌트 라이브러리입니다. 

디자인 시스템이 적용된 [`Flog`](https://frog-ui-css.vercel.app/) CSS 프레임워크와 연동된 Headless UI 라이브러리로 `React` 컴포넌트로 이루어져 있습니다. 

개발하는 과정에서 vue에만 존재하는 기능인 `slot` 기능을 구현하기 위한 `Slot Component` 가 추가 되어있습니다. 

다른 라이브러리와 다르게 CSS-in-JS나 tailwindCSS 등을 사용하지 않고 외부에서 디자인 시스템을 적용한 CSS와 연동하는 Headless UI 방식으로 설계되었습니다. 스타일을 완전히 분리함으로서 독립적인 스타일 시스템을 라이브러리나 프레임워크에 상관없이 사용할수 있는 장점이 있습니다.

- 총 23개 컴포넌트 구현
- NPM 패키지 배포

## Document

[BeUI(React) Docs](https://react-be-ui.vercel.app)

## If you use Vue??

[BeUI Docs](https://beui.vercel.app/)

## Install

```sh
npm install react-be-ui
```

## Usage

```js
import { BeButton, BeInput } from 'react-be-ui'
<BeButton variants="...">...</BeButton>
<BeInput variants="...">...</BeInput>
```

## Story 

오랜 기간 개발해오던 Vue용 라이브러리 컴포넌트를 React로 동일한 기능을 하도록 만들게 되었습니다.  컴포넌트 여러 기능을 만들며 React의 기본적인 기능을 전체적으로 활용할 수 있게 되었고 충분한 학습이 되었습니다. 또한 Vue와 비교하며 각 프레임워크간 차이를 이해하는데 큰 도움이 되었습니다.    

## Thank you 감사합니다.
