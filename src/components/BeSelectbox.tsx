import { useState, useRef, useMemo, useEffect, useCallback } from 'react'
import { CSSTransition } from 'react-transition-group'

import { 
  useFloating, 
  autoUpdate, 
  offset, 
  flip, 
  shift, 
  FloatingPortal
} from '@floating-ui/react'



const BeSelectbox = ({
  onSelect = () => {},
  ...props
}) => {
  const {
    target = null,
    options = [],
    selectedValue = null,
    boxType = 'dropdown',
    placeholder = '선택하세요',
    isSearch = false,
    useIcon = false,
    multiple = false,
    maxOptHeight = 260,
    selectedType = 'bg',
    optionKey = 'option',
    resultKey = 'val',
    isAll = false,
    fluid = false,
    compact = false,
    disabled = false 
  } = props


  const boxRef = useRef(null)
  const menuRef = useRef(null)
  const [isShow, setIsShow] = useState(false)

  const { refs, floatingStyles } = useFloating({
    placement: 'bottom-start',
    whileElementsMounted: autoUpdate,
    middleware: [offset(10), flip(), shift()],
    open: isShow,
    onOpenChange: setIsShow,
  })

  const [selectedItem, setSelectedItem] = useState(null)
  const [selectedList, setSelectedList] = useState([])

  const [searchText, setSearchText] = useState(null)

  const selectedText = useMemo(() => {
    if (multiple) {
      return selectedList.length > 0 ? `${selectedList.length}개 선택` : null
    } else {
      const selectIndex = options.findIndex(t => t[resultKey] === selectedItem)
      return options[selectIndex] ? options[selectIndex][optionKey] : null
    }
  },[multiple, resultKey, optionKey, options, selectedItem, selectedList])

  const searchOptions = useMemo(() => {
    if (isSearch && searchText) {
      return options.filter(item => item[optionKey].toLowerCase().indexOf(searchText.toLowerCase()) > -1)
    } else {
      return options
    }
  }, [isSearch, searchText, optionKey, options])

  // const selectedIndex = useMemo(() => {
  //   return selectedItem ? searchOptions?.findIndex(f => f[resultKey] === selectedItem) : 0
  // }, [selectedItem, resultKey, searchOptions])

  const optionHeight = useMemo(() => {
    if (!maxOptHeight) return
    return { maxHeight: `${maxOptHeight}px`}
  }, [maxOptHeight])

  const initValue = useCallback(() => {
    if (multiple) {
      setSelectedList(selectedValue ? selectedValue : [])
      setSelectedItem(selectedValue ? `${selectedValue.length}개 선택` : null)
    } else {
      setSelectedItem(selectedValue)
    }
  }, [multiple, selectedValue])

  useEffect(() => {
    initValue()
  }, [initValue])

  useEffect(() => {
    window.addEventListener('click', () => showMenu(false))
    return (
      window.removeEventListener('click', () => showMenu(false))
    )
  })

  const showMenu = (value = true) => {
    if (boxRef.current?.contains(event.target) || menuRef.current?.contains(event.target)) return
    if (isShow) value = false
    setIsShow(value)
  }

  const selectItem = (value) => {
    if (multiple) {
      setMultipleList(value)
    } else {
      setSearchText(null)
      setSelectedItem(value[resultKey])
      onSelect(value[resultKey], target)
    }
  }

  const setMultipleList = (item) => {
    const selectedSet = new Set(selectedList)
    if(selectedSet.has(item[resultKey])) {
      selectedSet.delete(item[resultKey])
    } else {
      selectedSet.add(item[resultKey])
    }

    setSelectedList([...selectedSet])
    onSelect([...selectedSet], target)
  }

  const selectAll = () => {
    const newValue = [...searchOptions].map(se => se[resultKey])
    setSelectedList(newValue)
    onSelect(newValue, target)
  }

  const toggleOpen = () => {
    if (multiple && isShow) return
    setIsShow(!isShow)
  }

  const handleSearch = ({target}) => {
    console.log(target.value)
    setSearchText(target.value)
  }

  const setClass = [
    boxType,
    multiple && 'multiple',
    fluid && 'fluid',
    compact && 'compact',
    disabled && 'disabled',
  ].filter((item): item is string => Boolean(item)).join(' ')

  return (
    <div 
      className={`be-select-box ${setClass} ${isShow ? 'show' : ''}`}
      ref={boxRef}
      onClick={toggleOpen}
    >
      <div className="selected-item" ref={refs.setReference}>
        {!isSearch ? (
          <div className={`default-text ${selectedItem ? 'has' : ''}`}>
            {selectedText || placeholder}
          </div>
        ) : (
          <div className={`be-input icon right ${fluid, disabled} ${selectedItem ? 'has' : ''}`}>
            <input 
              type="text" 
              placeholder={selectedText || placeholder} 
              readOnly={!isSearch || !isShow}
              onChange={handleSearch}
            />
          </div>
        )}
        {(isShow && multiple) ? (
          <i 
            className="icon xi-close" 
            style={{pointerEvents: 'auto'}} 
            onClick={(e) => {
              e.stopPropagation()
              setIsShow(false)
            }}
          />
        ) : (
          <i className="icon xi-angle-down" />
        )}
      </div>
      {isShow && (
        <FloatingPortal>
          <div className="be-popper-container" ref={refs.setFloating} style={floatingStyles}>
            <CSSTransition nodeRef={menuRef} in={isShow} timeout={250} classNames="extend-fade">
              <div ref={menuRef} className="select-menu be-popper" style={{...optionHeight, width:`${boxRef.current.clientWidth}px`}}>
                <div className={`be-list selection ${selectedType}`}>
                  {(isSearch && searchOptions.length === 0) ? (
                    <div className="no-searched">검색 결과가 없습니다.</div>
                  ) : (
                    <>
                      {isAll && multiple && (
                        <div className={`item option-item`} onClick={selectAll}>전체</div>
                      )}
                      {searchOptions.map((opt, i) => (
                        <div 
                          className={
                            `item option-item ${opt[resultKey] === selectedItem ? 'selected' : ''} ${selectedList.includes(opt[resultKey]) ? 'include' : ''}
                          `} 
                          key={`option-${i}`}
                          onClick={() => selectItem(opt, i)}
                        >
                          {useIcon && (
                            <i className={`list-icon icon ${opt.icon}`} />
                          )}
                          <div className="item-title">{opt[optionKey]}</div>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>
            </CSSTransition>
          </div>
        </FloatingPortal>
      )}

      <style jsx>{`
        .be-select-box .option-item.item {33333
          padding: 1rem;
        }
        .be-select-box .select-menu {
          transform: translateY(0);
        }
        .extend-fade-enter {
            opacity: 0;
            transform: translateY(-10px);
        }
        .extend-fade-enter-active {
            opacity: 1;
            transform: translateY(0);
            transition: opacity 500ms, transform 500ms;
        }
        .extend-fade-exit {
            opacity: 1;
            transform: translateY(0);
        }
        .extend-fade-exit-active {
            opacity: 0;
            transform: translateY(-10px);
            transition: opacity 500ms, transform 500ms;
        }
      `}</style>
    </div>
  )
}

export default BeSelectbox