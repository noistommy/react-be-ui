import { useMemo, MouseEvent } from 'react'

type MessageState = 'success' | 'info' | 'error' | 'attention' | 'importance';

const stateIcon: Record<MessageState, string> = {
  success: 'xi-check-circle',
  info: 'xi-info',
  error: 'xi-emoticon-devil',
  danger: 'xi-emoticon-devil',
  attention: 'xi-warning',
  importance: 'xi-star',
}

interface BeMessageProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
  title?: string;
  contents?: string;
  icon?: string | boolean;
  state?: MessageState | null;
  selected? : boolean;
  disabled?: boolean
}

const BeMessage = ({
  children,
  className = '',
  onClick = () => {},
  ...props
}: BeMessageProps): JSX.Element => {

  const {
    title = '',
    contents = '',
    icon = false,
    state = null,
    selected = false,
    disabled = false
  } = props

  const setClass: string = [
    icon && 'icon',
    state,
    selected && 'selected',
    disabled && 'disabled'
  ].filter((item): item is string => Boolean(item)).join(' ')

  const iconName = useMemo(() => {
    return state ? stateIcon[state] : icon
  }, [state, icon])

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    onClick(e)
  }
  
  return (
    <div className={`be-message ${className} ${setClass}`} onClick={handleClick}>
      {icon && (
        <i className={`icon ${iconName}`}></i>
      )}
      {children || (
        <>
          <div className="title">{title}</div>
          {contents && (
            <div className="contents">{contents}</div>
          )}
        </>
      )}
    </div>
  )
}

export default BeMessage