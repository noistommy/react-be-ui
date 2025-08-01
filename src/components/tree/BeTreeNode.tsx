// import BeTreeNode from './BeTreeNode'
import BeCheckbox from '../checkbox/BeCheckbox'
import { useState } from 'react'

const BeTreeNode = ({
  node = null,
  level = 0,
  useCheck = false,
  useMark = false,
  check = false
}: {
  node: treeNode;
  level: number;
  useCheck?: boolean;
  useMark?: boolean;
  check?: boolean
}): JSX.Element => {

  const [showNode, setShowNode] = useState(false)
  const [checked, setChecked] = useState(check)

  const toggleNode = (e) => {
    if (e.target.tagName === 'LABEL') return
    setShowNode(!showNode)
  }
  return (
    <div 
      className={`be-tree ${showNode ? 'show' : ''}`}
      style={{'--level': level}}
    >
      <div className="node custom-node" onClick={toggleNode}>
        <div className="node-title">
          {useMark && (
            <i className={`icon expend-icon ${node.children?.length > 0 ? 'xi-caret-down-min': ''}`} />
          )}
          <div className="node-label">
            {useCheck && (
              <BeCheckbox checked={checked} onChange={(value) => setChecked(value)} />
            )}
            <div className="title">{node.label}</div>
            {node.sub && (
              <div className="sub-title">{node.sub}</div>
            )}
          </div>
        </div>
      </div>
      {showNode && node.children?.length > 0 && (
        <div className="node-children">
          {node.children.map((child, i) => (
            <BeTreeNode 
              key={`level-${level}-${i + 1}`}
              node={child}
              level={level + 1}
              useCheck={useCheck}
              useMark={useMark}
              check={check}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default BeTreeNode