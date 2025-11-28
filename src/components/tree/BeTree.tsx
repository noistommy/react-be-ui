import BeTreeNode from './BeTreeNode'

interface treeNode {
  label: string,
  children?: treeNode[]
}

const BeTree = ({
  children,
  className = '',
  treeList = [],
  userClass = '',
  useCheck = false,
  useMark = false,
  files = false,
}: {
  children?: React.ReactNode;
  className?: string;
  treeList: treeNode;
  userClass?: string;
  useCheck?: boolean;
  useMark?: boolean;
  files?: boolean;
}): JSX.Element => {
  return (
    <div className={`be-tree-list ${className} ${userClass} ${files ? 'files' : ''}`}>
      {children || (
        <>
          {treeList.map((node, i) => (
            <BeTreeNode 
              key={`level-${i + 1}`}
              node={node}
              level={1}
              useCheck={useCheck}
              useMark={useMark}
              check={false}
              files={files}
            />
          ))}
        </>
      )}
    </div>
  )
}

export default BeTree
