// import BeTreeNode from './BeTreeNode'
import BeCheckbox from '../checkbox/BeCheckbox'
import { useState } from 'react'

const BeTreeNode = ({
  className = '',
  node = null,
  level = 0,
  useCheck = false,
  useMark = false,
  check = false,
  files = false
}: {
  className?: string;
  node: treeNode;
  level: number;
  useCheck?: boolean;
  useMark?: boolean;
  check?: boolean
  files?: boolean
}): JSX.Element => {

  const [showNode, setShowNode] = useState(false)
  const [checked, setChecked] = useState(check)

  const toggleNode = (e) => {
    if (e.target.tagName === 'LABEL') return
    setShowNode(!showNode)
  }
  return (
    <div 
      className={`be-tree ${className} ${showNode ? 'show' : ''}`}
      style={{'--level': level}}
    >
      <div className="node custom-node" onClick={toggleNode}>
        <div className="node-title">
          {useMark && (
            <i className={`icon expend-icon ${node.children?.length > 0 ? 'xi-caret-down-min': ''}`} />
          )}
          {files && (
            <i className={`icon ${node.children?.length > 0 ? showNode ? 'xi-folder-open' : 'xi-folder' : 'xi-file-o'}`} />
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
              files={files}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default BeTreeNode