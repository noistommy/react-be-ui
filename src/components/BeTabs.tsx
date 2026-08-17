import createSlots from './slot/createSlots'
import {useState} from 'react'

interface tabItem {
  id?: number | string;
  option: string;
  icon?: string;
}

const BeTabs = ({
  children,
  className = '',
  onSelectTab = () => {},
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  onSelectTab?: (value: tabItem) => void;
  tabList?: tabItem[];
  directType?: 'horizontal' | 'vertical';
  tabType?: 'line' | 'button';
  selected?: string;
}): JSX.Element => {
  const {
    tabList = [],
    directType = 'horizontal',
    tabType = null,
    selected = null,
    ...rest
  } = props
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
    <div className={`be-tabs ${className} ${setClass}`} {...rest}>
      {slots.nav || (
        <div className="tab-menu">
          {tabList.map(tab => (
            <div key={tab.id}
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
