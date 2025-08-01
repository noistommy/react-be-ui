import createSlots from './slot/createSlots'
import {useState} from 'react'

interface tabItem {
  id?: number | string;
  option: string;
  icon?: string;
}

const BeTabs = ({
  children,
  onSelectTab = () => {},
  tabList = [],
  directType = 'horizontal',
  tabType = null,
  selected = null
}: {
  children: React.ReactNode;
  onSelectTab: (value: tabItem) => void;
  tabList: tabItem[];
  directType: 'horizontal' | 'vertical';
  tabType: 'line' | 'button';
  selected: string 
}): JSX.Element => {
  const slots = createSlots(children, ['nav', 'contents'])

  const [selectedTab, setSelectedTab] = useState(selected)
  const setClass = [
    directType,
    tabType
  ].filter((item): item is string => Boolean(item)).join(' ')

  const handleSelectTab = (value) => {
    setSelectedTab(value.option)
    onSelectTab(value.option)
  }
  return (
    <div className={`be-tabs ${setClass}`}>
      {slots.nav || (
        <div className="tab-menu">
          {tabList.map(tab => (
            <div 
              className={`tab-item tab ${(selectedTab === tab.option) ? 'active' : ''}`}
              onClick={() => handleSelectTab(tab)}
            >{tab.option}</div>
          ))}
        </div>
      )}
      {slots.contents || (
        <div className="tab-contents">{selectedTab}</div>
      )}
    </div>
  )
}

export default BeTabs
