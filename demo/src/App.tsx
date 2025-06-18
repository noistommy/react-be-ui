
import './App.scss'
import Router from './router'

import {SlideSideLayout, Slot} from '../../dist/be-ui.es'
import SideList from './component/SideList'

import { useState , useMemo } from 'react'
import { useLocation } from 'react-router'

interface ListItem {
  path: string;
  name: string;
}

const LIST_INFO: ListItem[] = [
  { path: '/', name: 'Home'},
  { path: '/globals', name: 'Global'},
]

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
  { path: '/tabs', name: 'Tabs' },
  { path: '/grid', name: 'Grid' },
  { path: '/form', name: 'Form' },
  { path: '/table', name: 'Table' },
  { path: '/panel', name: 'Panel' },
  { path: '/segment', name: 'Segment' },
  { path: '/card', name: 'Card' },
  
  { path: '/slider', name: 'Slider' },
  { path: '/pagination', name: 'Pagination' },
  { path: '/selectbox', name: 'SelectBox' },
  { path: '/list', name: 'List' },
  { path: '/tree', name: 'Tree' },
]

function App() {
  const location = useLocation()

  const [show, setShow] = useState(true)
  const handleClick = () => {
    setShow(!show)
  }

  const currentName = useMemo(() => {
    return [...LIST_INFO, ...COMPONENT_INFO].find(t => t.path === location.pathname).name
  }, [location])


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
        </div>
      </header>
      <main>
        <SlideSideLayout isShow={show}>
          <Slot name="side">
            <nav className="nav-container">
              <SideList title="Test" current={location.pathname} navList={LIST_INFO} />
              <SideList title="Component" current={location.pathname} navList={COMPONENT_INFO} />
            </nav>
          </Slot>
          <Slot name="main">
            <div className="main">
              <div className="main-title">
                <div className="title">{currentName}</div>
                <div className="description">This is Description</div>
              </div>
              <div className="main-contents">
                <Router />
              </div>
            </div>
          </Slot>
        </SlideSideLayout>
      </main>
      <style jsx>{`
        .main-title .title {
          font-size: 45px;
          font-weight: 700;
          margin-bottom: 20px;
        }
        .main-title .description {
          color: #c4c4c4;
          padding: 10px 10px 20px;
        }
      `}</style>
    </>
  )
}

export default App
