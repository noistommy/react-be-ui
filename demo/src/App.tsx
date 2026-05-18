
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

type ThemeMode = 'light' | 'dark'

function readThemeMode(): ThemeMode {
  const theme = sessionStorage.getItem('theme-mode')
  return theme ? theme : 'light'
}

function App() {
  const location = useLocation()

  

  const [show, setShow] = useState(true)
  const [prevPage, setPrevPage] = useState(null)
  const [nextPage, setNextPage] = useState(null)
  const [mode, setMode] = useState<ThemeMode>(() => readThemeMode())

  useEffect(() => {
    setMode(readThemeMode())
  }, [])

  const handleClick = (e, value = null) => {
    const showValue = value || !show
    setShow(showValue)
  }

  const toggleMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light'
    setMode(newMode)
  }

  const selectTheme = (mode) => {
    const html = document.documentElement;    
    html.className = ''
    html.classList.add(`${mode}-mode`);
    
    sessionStorage.setItem('theme-mode', mode)
  }

  const currentName = useMemo(() => {
    return navAllList.find(t => t.path === location.pathname)?.name || 'Button'
  }, [location])

  useEffect(() => {
    const currentIndex = navAllList.findIndex(t => t.path === location.pathname)
    setPrevPage(navAllList[currentIndex - 1] || null)
    setNextPage(navAllList[currentIndex + 1] || null)
  },[location])

  useEffect(() => {
    selectTheme(mode)
  }, [mode])

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
          <nav>
            <button className="be-button icon compact" onClick={toggleMode}>
              <i className={mode === 'light' ? 'xi-moon' : 'xi-sun'}></i>
            </button>
            <button className="be-button icon compact">
              <i className="xi-github"></i>
              <a href="https://github.com/noistommy/react-be-ui.git" className="link" target="_blank"></a>
            </button>
            <button className="be-button icon compact">
              <i className="xi-package"></i>
              <a href="https://www.npmjs.com/package/react-be-ui" className="link" target="_blank"></a>
            </button>
          </nav>
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
                <div className="title">{currentName}</div>
                <div className="page-btns">
                  <button className="be-button compact icon" disabled={!prevPage}>
                    <i className="xi-angle-left"></i>
                    <a href={prevPage?.path} className="link"></a>
                  </button>
                  <button className="be-button compact icon" disabled={!nextPage}>
                    <i className="xi-angle-right"></i>
                    <a href={nextPage?.path} className="link"></a>
                  </button>
                </div>
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
