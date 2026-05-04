
import './App.scss'
import Router from './router'

import { version } from '../../package.json'

import SlideSideLayout from './component/SlideSideLayout'
import SideList from './component/SideList'

import PrevNext from './component/PrevNext'

import { useState , useMemo, useEffect } from 'react'
import { useLocation } from 'react-router'

import { Analytics } from '@vercel/analytics/react'

interface ListItem {
  path: string;
  name: string;
}

const COMPONENT_INFO: ListItem[] = [
  { path: '/badge', name: 'Badge' },
  { path: '/button', name: 'Button' },
  { path: '/button-group', name: 'Button Group' },
  { path: '/card', name: 'Card' },
  { path: '/calendar', name: 'Calendar' },
  { path: '/checkbox', name: 'Checkbox' },
  { path: '/checkbox-group', name: 'Checkbox Group' },
  { path: '/date-picker', name: 'DatePicker' },
  { path: '/input', name: 'Input' },
  { path: '/input-number', name: 'InputNumber' },
  { path: '/list', name: 'List' },
  { path: '/message', name: 'Message' },
  { path: '/pagination', name: 'Pagination' },
  { path: '/panel', name: 'Panel' },
  { path: '/radio', name: 'Radio' },
  { path: '/selectbox', name: 'SelectBox' },
  { path: '/segment', name: 'Segment' },
  { path: '/slider', name: 'Slider' },
  { path: '/switch', name: 'Switch' },
  { path: '/table', name: 'Table' },
  { path: '/tag', name: 'Tag' },
  { path: '/tree', name: 'Tree' },
]

const LAYOUT_INFO: ListItem[] = [
  { path: '/form', name: 'Form' },
  { path: '/grid', name: 'Grid' },
  { path: '/tabs', name: 'Tabs' },
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
    return navAllList.find(t => t.path === location.pathname)?.name || 'Button'
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
            <button className="be-button icon round" onClick={handleClick}>
              {show ? (
                <i className="icon xi-hamburger-back"></i>
              ) : (
                <i className="icon xi-hamburger-out"></i>
              )}
            </button>
          </div>
          <div className="logo">
            <div className="title">BEUI <span className="sub">React</span></div>
            <span className="be-tag label round">v {version}</span>
            {/* <div className="description">React 전용 공용 UI 라이브러리</div> */}
          </div>
        </div>
      </header>
      <main>
        <SlideSideLayout isShow={show} onChange={handleClick} current={currentName}>
          <SlideSideLayout.SidePane>
            <nav className="nav-container">
              {/* <SideList title="Test" current={location.pathname} navList={LIST_INFO} /> */}
              <SideList title="Component" current={location.pathname} navList={COMPONENT_INFO} />
              <SideList title="Layout" current={location.pathname} navList={LAYOUT_INFO} />
            </nav>
          </SlideSideLayout.SidePane>
          <SlideSideLayout.MainPane>
            <div className="main">
              <div className="main-title">
                <h1 className="title">{currentName}</h1>
                <div className="description"></div>
              </div>
              <div className="main-contents">
                <Router />
              </div>
              <div className="main-footer">
                <PrevNext prevInfo={prevPage} nextInfo={nextPage}></PrevNext>
              </div>
            </div>
          </SlideSideLayout.MainPane>
        </SlideSideLayout>
      </main>
      <Analytics/>
    </>
  )
}

export default App
