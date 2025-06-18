import { useState } from 'react'

interface BePanelProps {
  children?: React.ReactNode;
  onClick?: (value: boolean) => void;
  title?: string;
  contents?: string;
  border? : boolean;
  toggleIcon?: string | null;
  iconPos?: string;
  open?: boolean;
  collapse?: boolean;
  maxHeight?: number;
}

const BePanel = ({
  children,
  onClick = () => {},
  ...props
}: BePanelProps): JSX.Element => {

  const {
    title = '',
    contents = '',
    border = false,
    toggleIcon = null,
    iconPos = 'left',
    open = false,
    collapse = false,
    maxHeight = 200
  } = props

  const [isOpen, setIsOpen] = useState(open)

  const setClass: string = [
    border && 'border',
    collapse && 'collapse',
    toggleIcon && 'icon'
  ].filter((item): item is string => Boolean(item)).join(' ')

  const onToggle = () => {
    const newValue = !isOpen
    setIsOpen(newValue)
    onClick(newValue)
  }
  return (
    <div className={`be-panel ${setClass} ${isOpen && 'open'}`}>
      <div className="panel-header" onClick={onToggle}>
        <div className="title">{title}</div>
        {collapse && toggleIcon && (
          <i className={`icon ${toggleIcon}`} />
        )}
      </div>
      <div className="panel-content" style={{'--max-height': `${maxHeight}px`}}>
        <div className="content-wrapper">
          {contents}
        </div>
      </div>
    </div>
  )
}

export default BePanel