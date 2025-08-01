
import './App.scss'
import Router from './router'

import {SlideSideLayout, Slot} from '../../dist/be-ui.es'
import SideList from './component/SideList'

import PrevNext from './component/PrevNext'

import { useState , useMemo, useEffect } from 'react'
import { useLocation } from 'react-router'

interface ListItem {
  path: string;
  name: string;
}

// const LIST_INFO: ListItem[] = [
//   { path: '/', name: 'Home'},
//   { path: '/globals', name: 'Global'},
// ]

const COMPONENT_INFO: ListItem[] = [
  { path: '/button', name: 'Button' },
  { path: '/button-group', name: 'Button Group' },
  { path: '/input', name: 'Input' },
  { path: '/input-number', name: 'InputNumber' },
  { path: '/checkbox', name: 'Checkbox' },
  { path: '/checkbox-group', name: 'Checkbox Group' },
  { path: '/radio', name: 'Radio' },
  { path: '/switch', name: 'Switch' },
  { path: '/tag', name: 'Tag' },
  { path: '/badge', name: 'Badge' },
  { path: '/message', name: 'Message' },
  
  { path: '/table', name: 'Table' },
  { path: '/panel', name: 'Panel' },
  
  { path: '/card', name: 'Card' },

  { path: '/slider', name: 'Slider' },
  { path: '/pagination', name: 'Pagination' },
  { path: '/selectbox', name: 'SelectBox' },
  { path: '/list', name: 'List' },
  { path: '/tree', name: 'Tree' },
  { path: '/segment', name: 'Segment' },
]

const LAYOUT_INFO: ListItem[] = [
  { path: '/tabs', name: 'Tabs' },
  { path: '/grid', name: 'Grid' },
  { path: '/form', name: 'Form' },
]
const navAllList = [...COMPONENT_INFO, ...LAYOUT_INFO]

function App() {
  const location = useLocation()

  

  const [show, setShow] = useState(true)
  const [prevPage, setPrevPage] = useState(null)
  const [nextPage, setNextPage] = useState(null)

  const handleClick = (e, value = null) => {
    const showValue = value || !show
    setShow(showValue)
  }

  const currentName = useMemo(() => {
    return navAllList.find(t => t.path === location.pathname).name
  }, [location])

  useEffect(() => {
    const currentIndex = navAllList.findIndex(t => t.path === location.pathname)
    setPrevPage(navAllList[currentIndex - 1] || null)
    setNextPage(navAllList[currentIndex + 1] || null)
  },[location])

  return (
    <>
      <header className="main-header">
        <div className="be container">
          <div className={`toggle-btn ${show ? 'show' : ''}`}>
            <button className="be-button icon" onClick={handleClick}>
              {show ? (
                <i className="icon xi-hamburger-back"></i>
              ) : (
                <i className="icon xi-hamburger-out"></i>
              )}
            </button>
          </div>
          <div className="logo">
            <div className="title">Be-UI</div>
            <div className="description">React 전용 공용 UI 라이브러리</div>
          </div>
        </div>
      </header>
      <main>
        <SlideSideLayout isShow={show} onChange={handleClick}>
          <Slot name="side">
            <nav className="nav-container">
              {/* <SideList title="Test" current={location.pathname} navList={LIST_INFO} /> */}
              <SideList title="Component" current={location.pathname} navList={COMPONENT_INFO} />
              <SideList title="Layout" current={location.pathname} navList={LAYOUT_INFO} />
            </nav>
          </Slot>
          <Slot name="main">
            <div className="main">
              <div className="main-title">
                <div className="title">{currentName}</div>
                <div className="description"></div>
              </div>
              <div className="main-contents">
                <Router />
              </div>
              <div className="main-footer">
                <PrevNext prevInfo={prevPage} nextInfo={nextPage}></PrevNext>
              </div>
            </div>
          </Slot>
        </SlideSideLayout>
      </main>
    </>
  )
}

export default App
